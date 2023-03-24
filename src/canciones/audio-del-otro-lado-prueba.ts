import { ISecuenciaAnimacion, TDimensiones } from '../tipos';
import { llamarSecuencia, crearSecuencia } from '../utilidades/ayudas';
import Meyda from 'meyda';

let despertar = false;

export default (dims: TDimensiones) => {
  const mar = llamarSecuencia('mar');
  mar.scale.set(0.7);
  mar.position.set(dims.pasoX * 6, dims.pasoY * 7);
  mar.alpha = 1;

  const mar2 = crearSecuencia('mar') as ISecuenciaAnimacion;
  mar2.scale.set(0.7, -0.7);
  mar2.position.set(dims.pasoX * 0.1, dims.pasoY * 6);
  mar2.alpha = 1;
  mar2.rotation -= 0.3;

  const pescadini = llamarSecuencia('pescadini');
  pescadini.scale.set(0.5);
  pescadini.position.set(dims.pasoX * 3, dims.pasoY * 7);
  pescadini.alpha = 1;

  const pescadini2 = crearSecuencia('pescadini') as ISecuenciaAnimacion;
  pescadini2.scale.set(0.5, -0.5);
  pescadini2.position.set(dims.pasoX * 6.5, dims.pasoY * 7);
  pescadini2.alpha = 1;

  const arbolSeco = llamarSecuencia('arbolSeco2');
  arbolSeco.scale.set(0.43);
  arbolSeco.position.set(dims.pasoX * 7.9, dims.pasoY * 4.8);
  arbolSeco.alpha = 1;

  const arbolSeco2 = crearSecuencia('arbolSeco2') as ISecuenciaAnimacion;
  arbolSeco2.scale.set(0.43, -0.43);
  arbolSeco2.position.set(dims.pasoX * 2.1, dims.pasoY * 6.6);
  arbolSeco2.alpha = 1;
  arbolSeco2.rotation -= 0.3;

  const pajarera = llamarSecuencia('pajarera');
  pajarera.scale.set(0.5);
  pajarera.position.set(dims.pasoX * 7.4, dims.pasoY * 4);
  pajarera.alpha = 1;

  const pajarera2 = crearSecuencia('pajarera') as ISecuenciaAnimacion;
  pajarera2.scale.set(0.5, -0.5);
  pajarera2.position.set(dims.pasoX * 1.7, dims.pasoY * 7.2);
  pajarera2.alpha = 1;

  return { animar, limpiar };

  function animar() {
    if (despertar) {
      pescadini.rotation += 0.1;

      console.log('¡Despertar!');
    }
  }

  function limpiar() {}
};

// Los peces nadan

////////////////////////////////////

const ContextoAudio = window.AudioContext || window.webkitAudioContext;
const permitirRevision = (interfaz, nombreGesto) => {
  gestos[interfaz][nombreGesto].esperar = null;
};

const gestos = {
  presonus: {
    despertar: { estado: false, esperar: null },
  },
  scarlett: {
    despertar: { estado: false, esperar: null },
  },
};

//const scarlett = await crearFuenteConMic('focusrite');
const presonus = await crearFuenteConMic('presonus');

crearAnalizadorMeyda(presonus);

const { tamañoBuffer } = presonus;

/**
 * Función para crear fuente desde entradas externas de audio (micrófonos, interfaces).
 * @param {string} entrada 'interfaz' o 'microfono' para elegir la entrada de audio.
 */
async function crearFuenteConMic(entrada) {
  const dispositivosConectados = await navigator.mediaDevices.enumerateDevices();
  console.log(dispositivosConectados);
  const dispositivo = dispositivosConectados.find(({ kind, label }) => {
    return kind === 'audioinput' && label.toLowerCase().includes(entrada);
  });

  if (dispositivo) {
    const flujo = await navigator.mediaDevices.getUserMedia({
      audio: {
        deviceId: {
          exact: dispositivo.deviceId,
        },
      },
      video: false,
    });
    const ctx = new AudioContext();

    const fuente = ctx.createMediaStreamSource(flujo);
    fuente.connect(ctx.destination);
    return { ctx, fuente };
  } else {
    console.error(`No encontró la entrada ${entrada}`);
  }
}

function crearAnalizadorMeyda(interfaz) {
  const { ctx, fuente } = interfaz;
  let datosAnalizador;
  let analizador;
  if (typeof Meyda === 'undefined') {
    console.log('No se encuentra Meyda.');
  } else {
    analizador = Meyda.createMeydaAnalyzer({
      audioContext: ctx,
      source: fuente,
      bufferSize: 512,
      sampleRate: 44100,
      featureExtractors: ['rms', 'amplitudeSpectrum', 'zcr'],
      callback: revisarEstados,
    });

    const tamañoBuffer = analizador.bufferSize;

    analizador.start();
    return Object.assign(interfaz, { analizador, datosAnalizador, tamañoBuffer });
  }
}

function revisarEstados(features) {
  const { rms } = features;
  // console.log(rms);
  if (!gestos.presonus.despertar.esperar) {
    if (rms > 0.0015) {
      gestos.presonus.despertar.esperar = setTimeout(() => {
        permitirRevision('presonus', 'despertar');
      }, 2000);
      console.log('Hemos despertado');
      despertar = true;
    } else {
      despertar = false;
    }
  } /* else {
    console.log('Ya despertaste');
  } */
}
