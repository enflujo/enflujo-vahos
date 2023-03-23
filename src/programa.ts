import './scss/estilos.scss';
import { esNumero } from '@enflujo/alquimia';
import { AnimatedSprite } from 'pixijs';

import losDias from './canciones/losDias';
import buenosDias from './canciones/buenosDias';

import {
  cargarTexturas,
  crearAplicacion,
  mostrarTodas,
  aleatorioIntegral,
  aleatorioFraccion,
} from './utilidades/ayudas';
import { TDimensiones } from './tipos';

/**
 * Dimensiones pantalla FEP: 3328 x 1248
 *
 */

const canciones = [
  'acapela',
  'buenosDias',
  'stop',
  'ojazosNegros',
  'cartografia',
  'miNina',
  'desengano',
  'noSoyDeCallar',
  'medioDia',
  'helena',
  'bajoElCieloAzul',
  'delOtroLado',
  'camaraLenta',
  'losDias',
  'fin',
];

const composiciones: { [nombreCancion: string]: (dims: TDimensiones) => any } = {
  acapela: () => {},
  buenosDias: buenosDias,
  stop: () => {},
  ojazosNegros: () => {},
  cartografia: () => {},
  miNina: () => {},
  desengano: () => {},
  noSoyDeCallar: () => {},
  medioDia: () => {},
  helena: () => {},
  bajoElCieloAzul: () => {},
  delOtroLado: () => {},
  camaraLenta: () => {},
  losDias: () => {},
  fin: () => {},
};

const dims = { ancho: 0, alto: 0, pasoX: 0, pasoY: 0 };
const aplicacion = crearAplicacion();
let cancion = '';
let siguienteCancion = '';
let enTransicion = false;
const velocidadTransicion = 0.00311;
const velocidadTransicionFin = 0.001;
let elementosCancion: { [nombre: string]: AnimatedSprite };

inicio();

function actualizarDimensiones() {
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  aplicacion.renderer.resize(ancho, alto);
  dims.ancho = ancho;
  dims.alto = alto;
  dims.pasoX = ancho / 11;
  dims.pasoY = alto / 11;
}

function cambiarCancion(nombre: string) {
  siguienteCancion = nombre;
  enTransicion = true;
}

async function inicio() {
  actualizarDimensiones();
  // Carga todas las texturas a la GPU.
  await cargarTexturas();
  aplicacion.start();

  if (cancion === 'losDias') {
    elementosCancion = losDias(dims);
    mostrarTodas();
  }

  function reiniciarPajaro(pajaro) {
    pajaro.x = aleatorioIntegral(-300, -100);
    pajaro.y = aleatorioFraccion(0, dims.alto);
    const angulo = aleatorioFraccion(-0.35, 0.5);
    pajaro.angulo = angulo;
    pajaro.rotation = angulo;
  }

  aplicacion.ticker.add(() => {
    if (enTransicion) {
      aplicacion.stage.alpha -= cancion === 'fin' ? velocidadTransicionFin : velocidadTransicion;

      if (aplicacion.stage.alpha <= 0) {
        enTransicion = false;
        console.log('listo para montar cancion', cancion);
        cancion = siguienteCancion;

        aplicacion.stage.children.forEach((secuencia) => {
          secuencia.x = -999;
        });

        elementosCancion = composiciones[cancion](dims);
        aplicacion.stage.alpha = 1;
      }
    }

    if (cancion === 'buenosDias') {
      const { sol, fondo1, fondo2, fondo3 } = elementosCancion;

      if (sol.alpha < 1) {
        if (fondo1.alpha < 1) {
          fondo1.alpha += 0.001;
        }

        if (fondo2.alpha < 1 && fondo1.alpha >= 0.45) {
          fondo2.alpha += 0.001;
        }

        if (fondo3.alpha < 1 && fondo2.alpha >= 0.32) {
          fondo3.alpha += 0.001;
        }

        if (fondo3.alpha >= 0.3) {
          sol.alpha += 0.001;
        }
      }

      if (fondo2.alpha >= 0.3 && sol.y > dims.pasoY * 3.7) {
        sol.y -= 0.25;
      }
    } else if (cancion === 'losDias') {
      const { sol, pajaros } = elementosCancion;

      pajaros.forEach((pajaro: AnimatedSprite) => {
        pajaro.x += pajaro.velocidad;
        pajaro.y += pajaro.velocidad * pajaro.angulo;

        if (pajaro.x > dims.ancho + 10) {
          reiniciarPajaro(pajaro);
        }

        if (pajaro.y < 0 || pajaro.y > dims.alto) {
          reiniciarPajaro(pajaro);
        }
      });

      if (sol.y > dims.pasoY * 2) {
        sol.y -= 0.12;

        // escalaSol += 0.0001;
        // console.log(escalaSol);
      } else {
        // sol.rotation += 0.09;
      }
    }
  });
}

document.onkeyup = (evento) => {
  const { key } = evento;
  let indiceCancion = null;

  if (esNumero(key)) {
    if (key == '0') {
      indiceCancion = 9;
    } else {
      indiceCancion = +key - 1;
    }
  } else {
    switch (key) {
      case 'q':
        indiceCancion = 10;
        break;
      case 'w':
        indiceCancion = 11;
        break;
      case 'e':
        indiceCancion = 12;
        break;
      case 'r':
        indiceCancion = 13;
        break;
      case 'f':
        indiceCancion = 14;
        break;
      default:
        break;
    }
  }

  if (indiceCancion || indiceCancion == 0) {
    const cancionSeleccionada = canciones[indiceCancion];

    if (siguienteCancion !== cancionSeleccionada) {
      cambiarCancion(cancionSeleccionada);
    }
  }
};
