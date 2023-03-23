import { TDimensiones } from '../tipos';
import { llamarSecuencia } from '../utilidades/ayudas';

export default (dims: TDimensiones) => {
  const escupePajaro = llamarSecuencia('montañaPajaro');
  escupePajaro.scale.set(1);
  escupePajaro.position.set(dims.pasoX * 2, dims.pasoY * 5);
  escupePajaro.alpha = 1;

  return { animar };

  function animar() {}
};

// La montaña empieza pequeña en el fondo y se agranda hasta 1
// Varios pájaros van saliendo de abajo hacia arriba
