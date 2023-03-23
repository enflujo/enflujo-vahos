import { ISecuenciaAnimacion, TDimensiones } from '../tipos';
import { llamarSecuencia, crearSecuencia } from '../utilidades/ayudas';

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

  return { animar };

  function animar() {}
};

// Los peces nadan
