import { ISecuenciaAnimacion, TDimensiones } from '../tipos';
import { llamarSecuencia, crearSecuencia } from '../utilidades/ayudas';

export default (dims: TDimensiones) => {
  const dimensionAstral = llamarSecuencia('dimensionAstral');
  dimensionAstral.scale.set(0.6);
  dimensionAstral.position.set(dims.pasoX * 1.2, dims.pasoY * 6.5);
  dimensionAstral.alpha = 1;

  const dimensionAstral2 = crearSecuencia('dimensionAstral') as ISecuenciaAnimacion;
  dimensionAstral2.scale.set(-0.6, 0.6);
  dimensionAstral2.position.set(dims.pasoX * 7, dims.pasoY * 3);
  dimensionAstral2.alpha = 1;

  const diego = llamarSecuencia('diego');
  diego.scale.set(0.8);
  diego.position.set(dims.pasoX * 7.8, dims.pasoY * 5);
  diego.alpha = 1;

  const diego2 = crearSecuencia('diego') as ISecuenciaAnimacion;
  diego2.scale.set(-0.8, 0.8);
  diego2.position.set(dims.pasoX * 3, dims.pasoY * 2);
  diego2.alpha = 1;

  return { animar };

  function animar() {}
};

// Diegos caminan
