import { TDimensiones } from '../tipos';
import { llamarSecuencia } from '../utilidades/ayudas';

export default (dims: TDimensiones) => {
  const fondo2 = llamarSecuencia('fondo2');
  fondo2.scale.set(1.5);
  fondo2.anchor.set(-1, -1);
  fondo2.position.set(-dims.pasoX * 10.5, -dims.pasoY * 16);
  fondo2.alpha = 1;

  const mesaPajaro = llamarSecuencia('mesaPajaro');
  mesaPajaro.scale.set(0.8);
  mesaPajaro.position.set(dims.pasoX * 4.8, dims.pasoY * 1.6);
  mesaPajaro.alpha = 1;

  return { animar };

  function animar() {}
  // Cada vez que se acaba una secuencia de la mesa cambiar posición de la mesa y hacer aparecer un pájaro en el fondo.
};