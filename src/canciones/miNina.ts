import { llamarSecuencia } from '../utilidades/ayudas';

export default (dims: { alto: number; ancho: number; pasoX: number; pasoY: number }) => {
  const fondo5 = llamarSecuencia('fondo5');
  fondo5.scale.set(1.6);
  fondo5.position.set(dims.pasoX * 3.3, dims.pasoY * 5);
  fondo5.alpha = 1;

  const arbolLloronLoop = llamarSecuencia('arbolLloronLoop');
  arbolLloronLoop.scale.set(0.4);
  arbolLloronLoop.position.set(dims.pasoX * 6, dims.pasoY * 3.8);
  arbolLloronLoop.alpha = 1;

  const monstruoMar = llamarSecuencia('monstruoMar');
  monstruoMar.scale.set(0.8);
  monstruoMar.position.set(dims.pasoX * 1, dims.pasoY * 8);
  monstruoMar.alpha = 1;

  return {
    monstruoMar,
  };
};

// El monstruo se desplaza de izquierda a derecha
