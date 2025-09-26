import {
  AnimatedSprite,
  Application,
  Spritesheet,
  Texture,
  Assets,
} from "pixi.js";

import {
  IDatosParaPixi,
  IDatosPixi,
  IDatosTitiritero,
  ISecuenciaAnimacion,
  TDimensiones,
} from "../tipos";
import datos from "./datos";

const texturas: { [nombre: string]: Spritesheet } = {};
const secuencias: { [nombre: string]: ISecuenciaAnimacion } = {};
let aplicacion: Application;

/**
 * Crea la aplicación general de PIXI (v8).
 * IMPORTANTE: ahora es async porque hay que llamar app.init(...)
 */
export async function crearAplicacion() {
  aplicacion = new Application();
  const lienzo = document.getElementById("lienzo") as HTMLCanvasElement;
  lienzo.style.backgroundColor = "#ffffe6";
  await aplicacion.init({
    // En v8 se usa `background` (hex o css) en vez de backgroundColor del constructor antiguo
    background: 0xffffe6,
    powerPreference: "high-performance",
    // En v8 el canvas/elemento se pasa como `canvas`
    canvas: lienzo,
    // Si necesitas controlar el autoStart, en v8 se usa ticker/stop manualmente:
    // preferible dejar el ticker corriendo y pausar donde toque
  });

  // Si quieres pausar el render al inicio (equivalente a autoStart: false de antes):
  aplicacion.ticker.stop();

  return aplicacion;
}

export function llamarSecuencia(nombre: string) {
  return secuencias[nombre];
}

let contadorPajaro = 0;

/**
 * Crea una instancia de AnimatedSprite de PIXI.
 */
export function crearSecuencia(
  nombre: string,
  velocidad = 0.1666,
  reproducirInmediatamente = true,
  agregarALista = true
) {
  const hoja = texturas[nombre];
  const framesAnim = hoja?.animations?.anim ?? [];
  if (!hoja || framesAnim.length === 0) return;

  const secuencia = new AnimatedSprite(framesAnim) as ISecuenciaAnimacion;

  secuencia.blendMode = 'multiply';
  secuencia.animationSpeed = velocidad;

  let nombreModificado: string | null = null;

  if (nombre === "juanCamilo") {
    secuencia.anchor.set(0.5);
    if (contadorPajaro > 0) {
      nombreModificado = `juanCamilo${contadorPajaro}`;
    }
    contadorPajaro++;
  }

  if (reproducirInmediatamente) {
    secuencia.play();
  }

  secuencia.alpha = 0;

  // Agregar esta nueva secuencia a la aplicación.
  aplicacion.stage.addChild(secuencia);

  if (agregarALista) {
    secuencias[nombreModificado ? nombreModificado : nombre] = secuencia;
  }

  return secuencia;
}

export function esconderTodo(dims: TDimensiones) {
  for (const nombre in secuencias) {
    secuencias[nombre].y = dims.alto * 2;
  }
}

export function mostrarTodas() {
  for (const nombre in secuencias) {
    secuencias[nombre].alpha = 1;
  }
}

export async function cargarTexturas() {
  for (const nombre of Object.keys(datos)) {
    const datosTextura = datos[nombre];

    // Validaciones mínimas para evitar crashes
    if (!datosTextura) {
      console.warn(`[Spritesheet] "${nombre}": datos faltantes`);
      continue;
    }
    if (!datosTextura.fuente) {
      console.warn(`[Spritesheet] "${nombre}": falta "fuente"`);
      continue;
    }
    if (!datosTextura.frames || Object.keys(datosTextura.frames).length === 0) {
      console.warn(`[Spritesheet] "${nombre}": "frames" vacío o ausente`);
      continue;
    }

    // ✅ Carga REAL del recurso (Texture ya resuelta)
    const texture = await Assets.load(datosTextura.fuente);

    // ✅ Overload explícito por objeto en v8
    const hoja = new Spritesheet({
      texture,
      data: datosTextura, // { frames, animations?, meta? }
    });

    await hoja.parse();

    texturas[nombre] = hoja;

    // Instancia por defecto (como antes)
    crearSecuencia(nombre, datosTextura.velocidad);
  }
}


/**
 * Transforma datos del titiritero al formato de Spritesheet de Pixi.
 */
export function transformarDatosTitiriteroAPixi(
  datos: IDatosTitiritero
): IDatosPixi {
  const datosFormatoPixi: IDatosPixi = {};

  for (const llave in datos) {
    const imagen = datos[llave];
    const secuencia: IDatosParaPixi = {
      fuente: imagen.fuente,
      frames: {},
      meta: { scale: "1" },
      animations: { anim: imagen.orden ? imagen.orden : [] },
      velocidad: imagen.velocidad ? imagen.velocidad : 0.166,
    };

    imagen.fotogramas.forEach((fotograma, i) => {
      secuencia.frames[`${llave}${i}`] = {
        frame: {
          x: fotograma.x,
          y: fotograma.y,
          w: fotograma.ancho,
          h: fotograma.alto,
        },
      };

      if (!imagen.orden) {
        secuencia.animations?.anim.push(`${llave}${i}`);
      }
    });

    if (imagen.invertido) {
      secuencia.animations?.anim.reverse();
    }

    if (imagen.pingPong && secuencia.animations) {
      // Clonar e invertir secuencia.
      const unaPasada = secuencia.animations.anim.map((f) => f).reverse();
      unaPasada.shift(); // eliminar primer elemento
      unaPasada.pop(); // eliminar el último
      secuencia.animations.anim = [
        ...secuencia.animations.anim,
        ...unaPasada,
      ];
    }

    datosFormatoPixi[llave] = secuencia;
  }

  return datosFormatoPixi;
}

export const aleatorioIntegral = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;
export const aleatorioFraccion = (min: number, max: number) =>
  Math.random() * (max - min) + min;
