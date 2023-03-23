import { llamarSecuencia, crearSecuencia } from '../utilidades/ayudas';

export default (dims: { alto: number; ancho: number; pasoX: number; pasoY: number }) => {
  const floresBarbaras = llamarSecuencia('floresBarbaras');
  floresBarbaras.scale.set(1);
  floresBarbaras.position.set(dims.pasoX * 0.7, dims.pasoY * 6);
  floresBarbaras.alpha = 1;

  const floresBarbaras2 = crearSecuencia('floresBarbaras');
  floresBarbaras2.alpha = 1;
  floresBarbaras2.scale.set(1);
  floresBarbaras2.position.set(dims.pasoX * 3.7, dims.pasoY * 6);

  const floresBarbaras3 = crearSecuencia('floresBarbaras');
  floresBarbaras3.alpha = 1;
  floresBarbaras3.scale.set(1);
  floresBarbaras3.position.set(dims.pasoX * 6.7, dims.pasoY * 6);

  const matorral = llamarSecuencia('matorral');
  matorral.scale.set(1);
  matorral.position.set(dims.pasoX * 1.4, dims.pasoY * 4);
  matorral.alpha = 1;

  const matorral2 = crearSecuencia('matorral');
  matorral2.scale.set(1);
  matorral2.position.set(dims.pasoX * 3.5, dims.pasoY * 4);
  matorral2.alpha = 1;

  const matorral3 = crearSecuencia('matorral');
  matorral3.scale.set(1);
  matorral3.position.set(dims.pasoX * 5.8, dims.pasoY * 4);
  matorral3.alpha = 1;

  // Pájaros arriba
};
