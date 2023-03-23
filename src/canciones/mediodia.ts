import { llamarSecuencia } from '../utilidades/ayudas';

export default (dims: { alto: number; ancho: number; pasoX: number; pasoY: number }) => {
  const fondo2 = llamarSecuencia('fondo2');
  fondo2.scale.set(0.7);
  fondo2.anchor.set(1, 1);
  fondo2.position.set(dims.pasoX * 5, dims.pasoY * 13);
  fondo2.alpha = 1;

  const huecoNube = llamarSecuencia('huecoNube');
  huecoNube.scale.set(0.3);
  huecoNube.position.set(dims.pasoX * 3.4, dims.pasoY * 5.1);
  huecoNube.alpha = 1;

  const cocoPicaOjo = llamarSecuencia('cocoPicaOjo');
  cocoPicaOjo.scale.set(0.5);
  cocoPicaOjo.position.set(dims.pasoX * 0.7, dims.pasoY * 4);
  cocoPicaOjo.alpha = 1;

  const anto = llamarSecuencia('anto');
  anto.scale.set(0.9);
  anto.position.set(dims.pasoX * 6, dims.pasoY * 3);
  anto.alpha = 1;

  const sol = llamarSecuencia('anaSol');
  sol.scale.set(0.5);
  sol.anchor.set(0.5);
  sol.position.set(dims.pasoX * 8.1, dims.pasoY * 2.3);
  sol.alpha = 1;

  const arbolSeco3 = llamarSecuencia('arbolSeco3');
  arbolSeco3.scale.set(0.5);
  arbolSeco3.position.set(dims.pasoX * 8.6, dims.pasoY * 7);
  arbolSeco3.alpha = 1;
};

// Pájaros pasan
