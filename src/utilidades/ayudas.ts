import { AnimatedSprite, Application, BaseTexture, BLEND_MODES, ICanvas, Spritesheet } from 'pixijs';
import { IDatosParaPixi, IDatosPixi, IDatosTitiritero, ISecuenciaAnimacion, TDimensiones } from '../tipos';
import datos from './datos';

const texturas: { [nombre: string]: Spritesheet } = {};
const secuencias: { [nombre: string]: ISecuenciaAnimacion } = {};
let aplicacion: Application<ICanvas>;

/**
 * Crea la aplicación general de PIXI.
 * @returns La aplicación que controla toda la animación.
 */
export function crearAplicacion() {
  aplicacion = new Application({
    backgroundColor: 0xffffe6,
    powerPreference: 'high-performance',
    autoStart: false,
    view: document.getElementById('lienzo') as HTMLCanvasElement,
  });

  return aplicacion;
}

export function llamarSecuencia(nombre: string) {
  return secuencias[nombre];
}

let contadorPajaro = 0;
/**
 * Crea una instancia de AnimatedSprite de PIXI.
 * Las propiedades y funciones se pueden ver en: https://pixijs.download/dev/docs/PIXI.AnimatedSprite.html
 *
 * @ejemplo
 *
 * ```js
 * const fondo = crearSecuencia('fondo', 0.1);
 * fondo.position.set(x, y);
 * ```
 *
 * @param nombre Nombre de la textura que contiene la secuencia de animación.
 * @param velocidad (Opcional) Velocidad a la que reproduce de 0.1 a 1.0. Entre más bajito el numero, más lento.
 * @param reproducirInmediatamente (Opcional) Útil si se quiere iniciar más adelante o para empezar la animación en otro frame diferente al inicial con `gotoAndPlay()`
 * @returns Instancia de AnimatedSprite
 */
export function crearSecuencia(
  nombre: string,
  velocidad = 0.1666,
  reproducirInmediatamente = true,
  agregarALista = true
) {
  if (!texturas[nombre]) return;
  const secuencia = new AnimatedSprite(texturas[nombre].animations.anim) as ISecuenciaAnimacion;
  // Como el efecto multiply en Photoshop.
  // Aplicar a todas el efecto de multiplicación para que se combinen los dibujos uno encima del otro.
  secuencia.blendMode = BLEND_MODES.MULTIPLY;
  secuencia.animationSpeed = velocidad;
  let nombreModificado: string | null = null;

  if (nombre === 'juanCamilo') {
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

/**
 * Función para cargar todas las texturas (imágenes con los fotogramas de animación) registradas en el archivo `datos.ts` a la GPU.
 * Quedan disponibles para crear instancias de animación.
 * Se pueden crear múltiples instancias de animación desde una misma textura.
 *
 * @ejemplo
 * ```js
 * await cargarTexturas();
 * ```
 */
export async function cargarTexturas() {
  for (const nombre of Object.keys(datos)) {
    const datosTextura = datos[nombre];
    const textura = new Spritesheet(BaseTexture.from(datosTextura.fuente), datosTextura);
    await textura.parse();

    texturas[nombre] = textura;
    crearSecuencia(nombre, datosTextura.velocidad);
  }
}

/**
 * Transforma la estructura de datos que exporta el titiritero a la que necesita PIXI.
 *
 * @param datos Datos en el formato que exporta enflujo/titiritero
 * @returns Datos en el formato que necesita PIXI.
 */
export function transformarDatosTitiriteroAPixi(datos: IDatosTitiritero): IDatosPixi {
  const datosFormatoPixi: IDatosPixi = {};

  for (const llave in datos) {
    const imagen = datos[llave];
    const secuencia: IDatosParaPixi = {
      fuente: `/animaciones${imagen.fuente}`,
      frames: {},
      meta: { scale: '1' },
      animations: { anim: imagen.orden ? imagen.orden : [] },
      velocidad: imagen.velocidad ? imagen.velocidad : 0.166,
    };

    imagen.fotogramas.forEach((fotograma, i) => {
      secuencia.frames[`${llave}${i}`] = {
        frame: { x: fotograma.x, y: fotograma.y, w: fotograma.ancho, h: fotograma.alto },
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
      unaPasada.shift(); // eliminar primer elemento del array.
      unaPasada.pop(); // eliminar el último
      secuencia.animations.anim = [...secuencia.animations.anim, ...unaPasada];
    }

    datosFormatoPixi[llave] = secuencia;
  }

  return datosFormatoPixi;
}

export const aleatorioIntegral = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
export const aleatorioFraccion = (min: number, max: number) => Math.random() * (max - min) + min;
