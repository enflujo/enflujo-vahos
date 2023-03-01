import './scss/estilos.scss';
import Meyda from 'meyda';

const comenzar = document.getElementById('inicio');

if (comenzar) {
  comenzar.onclick = () => {
    inicio();
  };
}

async function inicio() {
  const flujo = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  const ctx = new AudioContext();
  const fuente = ctx.createMediaStreamSource(flujo);

  const divisor = ctx.createChannelSplitter(2);
  fuente.connect(divisor);

  const analyzer = Meyda.createMeydaAnalyzer({
    audioContext: ctx,
    source: fuente,
    inputs: 2,
    bufferSize: 512,
    channel: 1,
    featureExtractors: ['amplitudeSpectrum'],
    callback: (features) => {
      console.log(features.amplitudeSpectrum);
    },
  });
  // analyzer.setChannel(0);
  analyzer.start();
  // const analizador = ctx.createAnalyser();
  // analizador.fftSize = 2048;
  // const tamañoBuffer = analizador.frequencyBinCount;
  // const datosAnalizador = new Uint8Array(tamañoBuffer);

  // function ciclo() {
  //   analizador.getByteTimeDomainData(datosAnalizador);
  //   console.log(datosAnalizador.reduce((a, b) => a + b) / datosAnalizador.length);
  //   requestAnimationFrame(ciclo);
  // }

  // requestAnimationFrame(ciclo);
}

console.log('..:: EnFlujo ::..');
