import { TDimensiones } from '../tipos';
import { llamarSecuencia } from '../utilidades/ayudas';

export default (dims: TDimensiones) => {
  const fondo1 = llamarSecuencia('fondo1');
  fondo1.scale.set(0.6);
  fondo1.y = dims.pasoY;
  fondo1.alpha = 0;

  const fondo2 = llamarSecuencia('fondo2');
  fondo2.scale.set(0.7);
  fondo2.anchor.set(-1, -1);
  fondo2.position.set(-dims.pasoX * 0.3, -dims.pasoY * 4.2);
  fondo2.alpha = 0;

  const fondo3 = llamarSecuencia('fondo3');
  fondo3.scale.set(0.55);
  fondo3.position.set(dims.pasoX * 1.9, dims.pasoY * 7.7);
  fondo3.rotation = 0;
  fondo3.alpha = 0;

  const sol = llamarSecuencia('anaSol');
  sol.scale.set(0.6);
  sol.anchor.set(0.5);
  // dims.pasoX * 5.7, dims.pasoY * 3.7
  sol.position.set(dims.pasoX * 5.7, dims.pasoY * 11);
  sol.alpha = 0;

  return {
    sol,
    fondo1,
    fondo2,
    fondo3,
  };

  // Fade in de las montañas
  // El sol sube
  // Pájaro volando
};
