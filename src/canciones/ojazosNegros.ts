import { TDimensiones } from '../tipos';
import { llamarSecuencia } from '../utilidades/ayudas';
// OJO: No sé si está es la canción correcta o es Cámara Lenta

export default (dims: TDimensiones) => {
  const fondo1 = llamarSecuencia('fondo1');
  fondo1.scale.set(1.4);
  fondo1.position.set(-dims.pasoX * 0.1, dims.pasoY * 1.1);
  fondo1.alpha = 1;

  const arbolSol = llamarSecuencia('arbolSol');
  arbolSol.scale.set(0.4);
  arbolSol.position.set(dims.pasoX * 3.4, dims.pasoY * 2.7);
  arbolSol.alpha = 1;

  const sol = llamarSecuencia('anaSol');
  sol.scale.set(1.3);
  sol.anchor.set(0.5);
  sol.position.set(dims.pasoX * 11, dims.pasoY * 4);
  sol.alpha = 1;

  // Pájaros
  return { animar, limpiar };

  function animar() {}
  function limpiar() {}
};
