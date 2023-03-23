import { TDimensiones } from '../tipos';
import { llamarSecuencia } from '../utilidades/ayudas';

export default (dims: TDimensiones) => {
  const fondo3 = llamarSecuencia('fondo3');
  fondo3.scale.set(1.1);
  fondo3.position.set(-dims.pasoX * 0.1, dims.pasoY * 2.7);
  fondo3.alpha = 2;

  const arbolNube = llamarSecuencia('arbolNube');
  arbolNube.scale.set(0.5);
  arbolNube.position.set(dims.pasoX * 0.2, dims.pasoY * 1.8);
  arbolNube.alpha = 1;

  const manoPajaro = llamarSecuencia('manoPajaro');
  manoPajaro.scale.set(0.3);
  manoPajaro.position.set(dims.pasoX * 5, dims.pasoY * 3.6);
  manoPajaro.alpha = 1;

  const moscas = llamarSecuencia('moscas');
  moscas.scale.set(0.7);
  moscas.position.set(dims.pasoX * 5, dims.pasoY);
  moscas.alpha = 1;

  return { animar, limpiar };

  function animar() {}
  function limpiar() {}
  // Pájaros
};
