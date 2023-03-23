import './scss/estilos.scss';
import { esNumero } from '@enflujo/alquimia';
import { cargarTexturas, crearAplicacion, mostrarTodas } from './utilidades/ayudas';
import { TAnimacionCancion, TDimensiones } from './tipos';

import acapela from './canciones/acapela';
import buenosDias from './canciones/buenosDias';
import stop from './canciones/stop';
import ojazosNegros from './canciones/ojazosNegros';
import cartografia from './canciones/cartografia';
import miNina from './canciones/miNina';
import desengano from './canciones/desengano';
import noSoyDeCallar from './canciones/noSoyDeCallar';
import mediodia from './canciones/mediodia';
import helena from './canciones/helena';
import bajoElCieloAzul from './canciones/bajoElCieloAzul';
import delOtroLado from './canciones/delOtroLado';
import camaraLenta from './canciones/camaraLenta';
import losDias from './canciones/losDias';
import fin from './canciones/fin';
import { crearPajaros } from './secuencias/pajaros';

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

const composiciones: {
  [nombreCancion: string]: (dims: TDimensiones) => { animar: TAnimacionCancion; limpiar: TAnimacionCancion };
} = {
  acapela: acapela,
  buenosDias: buenosDias,
  stop: stop,
  ojazosNegros: ojazosNegros,
  cartografia: cartografia,
  miNina: miNina,
  desengano: desengano,
  noSoyDeCallar: noSoyDeCallar,
  medioDia: mediodia,
  helena: helena,
  bajoElCieloAzul: bajoElCieloAzul,
  delOtroLado: delOtroLado,
  camaraLenta: camaraLenta,
  losDias: losDias,
  fin: fin,
};

const dims = { ancho: 0, alto: 0, pasoX: 0, pasoY: 0 };
const aplicacion = crearAplicacion();
let cancion = 'losDias';
let siguienteCancion = '';
let enTransicion = false;
const velocidadTransicion = 0.00311;
const velocidadTransicionFin = 0.001;
let secuenciaActual: { [nombre: string]: TAnimacionCancion };

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
  cancion = nombre;
  esconderTodo();

  if (secuenciaActual) {
    secuenciaActual.limpiar();
  }

  secuenciaActual = composiciones[cancion](dims);
  aplicacion.stage.alpha = 1;

  // siguienteCancion = nombre;
  // enTransicion = true;
}

function esconderTodo() {
  aplicacion.stage.children.forEach((secuencia) => {
    secuencia.y = dims.alto * 2;
  });
}

async function inicio() {
  actualizarDimensiones();
  // Carga todas las texturas a la GPU.
  await cargarTexturas();
  aplicacion.start();
  crearPajaros();

  // if (cancion === 'losDias') {
  //   secuenciaActual = losDias(dims);
  //   mostrarTodas();
  // }

  aplicacion.ticker.add(() => {
    if (enTransicion) {
      aplicacion.stage.alpha -= cancion === 'fin' ? velocidadTransicionFin : velocidadTransicion;

      if (aplicacion.stage.alpha <= 0) {
        enTransicion = false;
        console.log('listo para montar cancion', cancion);
        cancion = siguienteCancion;

        esconderTodo();

        secuenciaActual = composiciones[cancion](dims);
        aplicacion.stage.alpha = 1;
      }
    }

    if (secuenciaActual) {
      secuenciaActual.animar();
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
