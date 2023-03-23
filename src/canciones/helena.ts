import { ISecuenciaAnimacion, TDimensiones } from '../tipos';
import { llamarSecuencia, crearSecuencia } from '../utilidades/ayudas';

export default (dims: TDimensiones) => {
  const pasto1 = llamarSecuencia('pasto');
  pasto1.scale.set(0.4);
  pasto1.position.set(dims.pasoX * 0.01, dims.pasoY * 8.3);
  pasto1.alpha = 1;
  pasto1.rotation = 0;

  const pasto2 = crearSecuencia('pasto') as ISecuenciaAnimacion;
  pasto2.scale.set(0.4);
  pasto2.position.set(dims.pasoX * 1.4, dims.pasoY * 8.3);
  pasto2.alpha = 1;

  const pasto3 = crearSecuencia('pasto') as ISecuenciaAnimacion;
  pasto3.scale.set(0.4);
  pasto3.position.set(dims.pasoX * 2.8, dims.pasoY * 8.3);
  pasto3.alpha = 1;

  const pasto4 = crearSecuencia('pasto') as ISecuenciaAnimacion;
  pasto4.scale.set(0.4);
  pasto4.position.set(dims.pasoX * 4.2, dims.pasoY * 8.3);
  pasto4.alpha = 1;

  const pasto5 = crearSecuencia('pasto') as ISecuenciaAnimacion;
  pasto5.scale.set(0.4);
  pasto5.position.set(dims.pasoX * 5.6, dims.pasoY * 8.3);
  pasto5.alpha = 1;

  const pasto6 = crearSecuencia('pasto') as ISecuenciaAnimacion;
  pasto6.scale.set(0.4);
  pasto6.position.set(dims.pasoX * 7.0, dims.pasoY * 8.3);
  pasto6.alpha = 1;

  const pasto7 = crearSecuencia('pasto') as ISecuenciaAnimacion;
  pasto7.scale.set(0.4);
  pasto7.position.set(dims.pasoX * 8.4, dims.pasoY * 8.3);
  pasto7.alpha = 1;

  const pasto8 = crearSecuencia('pasto') as ISecuenciaAnimacion;
  pasto8.scale.set(0.4);
  pasto8.position.set(dims.pasoX * 9.8, dims.pasoY * 8.3);
  pasto8.alpha = 1;

  const giraSol = llamarSecuencia('giraSol');
  giraSol.scale.set(-0.5, 0.5);
  giraSol.position.set(dims.pasoX * 2.5, dims.pasoY * 6);
  giraSol.alpha = 1;

  const giraSol2 = crearSecuencia('giraSol') as ISecuenciaAnimacion;
  giraSol2.scale.set(-0.5, 0.5);
  giraSol2.position.set(dims.pasoX * 2.5, dims.pasoY * 5);
  giraSol2.alpha = 1;

  const giraSol3 = crearSecuencia('giraSol') as ISecuenciaAnimacion;
  giraSol3.scale.set(0.5);
  giraSol3.position.set(dims.pasoX * 8.1, dims.pasoY * 6);
  giraSol3.alpha = 1;

  const giraSol4 = crearSecuencia('giraSol') as ISecuenciaAnimacion;
  giraSol4.scale.set(0.5);
  giraSol4.position.set(dims.pasoX * 8.1, dims.pasoY * 5);
  giraSol4.alpha = 1;

  const florBailarina = llamarSecuencia('florBailarina');
  florBailarina.scale.set(0.45);
  florBailarina.position.set(dims.pasoX * 0.3, dims.pasoY * 6.6);
  florBailarina.alpha = 1;

  const pezVolador = llamarSecuencia('pezVolador');
  pezVolador.scale.set(0.9);
  pezVolador.position.set(dims.pasoX * 2.7, dims.pasoY * 1.4);
  pezVolador.alpha = 1;

  const fondo4 = llamarSecuencia('fondo4');
  fondo4.scale.set(0.5);
  fondo4.position.set(dims.pasoX * 3.5, dims.pasoY * 6.3);
  fondo4.alpha = 1;

  const huecoSol = llamarSecuencia('huecoSol');
  huecoSol.scale.set(0.6);
  huecoSol.position.set(dims.pasoX * 4.8, dims.pasoY * 3.3);
  huecoSol.alpha = 1;

  const cocoCantaor = llamarSecuencia('cocoCantaor');
  cocoCantaor.scale.set(0.6);
  cocoCantaor.position.set(dims.pasoX * 2.7, dims.pasoY * 7.7);
  cocoCantaor.alpha = 1;

  const cocoCantaor2 = crearSecuencia('cocoCantaor') as ISecuenciaAnimacion;
  cocoCantaor2.scale.set(-0.6, 0.6);
  cocoCantaor2.position.set(dims.pasoX * 8, dims.pasoY * 7.7);
  cocoCantaor2.alpha = 1;

  const lechuga = llamarSecuencia('lechuga');
  lechuga.scale.set(0.4);
  lechuga.position.set(dims.pasoX * 9.4, dims.pasoY * 7.5);
  lechuga.alpha = 1;

  // Flores izquierda
  const floresExplosivas = llamarSecuencia('floresExplosivas');
  floresExplosivas.scale.set(-0.4, 0.4);
  floresExplosivas.position.set(dims.pasoX * 1.5, dims.pasoY * 4.4);
  floresExplosivas.alpha = 1;

  const floresExplosivas2 = crearSecuencia('floresExplosivas') as ISecuenciaAnimacion;
  floresExplosivas2.scale.set(-0.4, 0.4);
  floresExplosivas2.position.set(dims.pasoX * 2.1, dims.pasoY * 4.4);
  floresExplosivas2.alpha = 1;

  const floresExplosivas3 = crearSecuencia('floresExplosivas') as ISecuenciaAnimacion;
  floresExplosivas3.scale.set(-0.4, 0.4);
  floresExplosivas3.position.set(dims.pasoX * 1.9, dims.pasoY * 2.5);
  floresExplosivas3.alpha = 1;

  const floresExplosivas4 = crearSecuencia('floresExplosivas') as ISecuenciaAnimacion;
  floresExplosivas4.scale.set(-0.4, 0.4);
  floresExplosivas4.position.set(dims.pasoX * 2.5, dims.pasoY * 2.5);
  floresExplosivas4.alpha = 1;

  const floresExplosivas5 = crearSecuencia('floresExplosivas') as ISecuenciaAnimacion;
  floresExplosivas5.scale.set(-0.4, 0.4);
  floresExplosivas5.position.set(dims.pasoX * 2.2, dims.pasoY * 0.5);
  floresExplosivas5.alpha = 1;

  const floresExplosivas6 = crearSecuencia('floresExplosivas') as ISecuenciaAnimacion;
  floresExplosivas6.scale.set(-0.4, 0.4);
  floresExplosivas6.position.set(dims.pasoX * 2.8, dims.pasoY * 0.5);
  floresExplosivas6.alpha = 1;

  // Flores derecha

  // Flores derecha
  const floresExplosivas7 = crearSecuencia('floresExplosivas') as ISecuenciaAnimacion;
  floresExplosivas7.scale.set(0.4);
  floresExplosivas7.position.set(dims.pasoX * 8.5, dims.pasoY * 4.4);
  floresExplosivas7.alpha = 1;

  const floresExplosivas8 = crearSecuencia('floresExplosivas') as ISecuenciaAnimacion;
  floresExplosivas8.scale.set(0.4);
  floresExplosivas8.position.set(dims.pasoX * 9.3, dims.pasoY * 4.4);
  floresExplosivas8.alpha = 1;

  const floresExplosivas9 = crearSecuencia('floresExplosivas') as ISecuenciaAnimacion;
  floresExplosivas9.scale.set(0.4);
  floresExplosivas9.position.set(dims.pasoX * 8.6, dims.pasoY * 2.3);
  floresExplosivas9.alpha = 1;

  const floresExplosivas10 = crearSecuencia('floresExplosivas') as ISecuenciaAnimacion;
  floresExplosivas10.scale.set(0.4);
  floresExplosivas10.position.set(dims.pasoX * 9.4, dims.pasoY * 2.3);
  floresExplosivas10.alpha = 1;

  const floresExplosivas11 = crearSecuencia('floresExplosivas') as ISecuenciaAnimacion;
  floresExplosivas11.scale.set(0.4);
  floresExplosivas11.position.set(dims.pasoX * 8.9, dims.pasoY * 0.5);
  floresExplosivas11.alpha = 1;

  const floresExplosivas12 = crearSecuencia('floresExplosivas') as ISecuenciaAnimacion;
  floresExplosivas12.scale.set(0.4);
  floresExplosivas12.position.set(dims.pasoX * 9.6, dims.pasoY * 0.5);
  floresExplosivas12.alpha = 1;

  const floresExplosivas13 = crearSecuencia('floresExplosivas') as ISecuenciaAnimacion;
  floresExplosivas13.scale.set(0.4);
  floresExplosivas13.position.set(dims.pasoX * 9.7, dims.pasoY * 3.2);
  floresExplosivas13.alpha = 1;

  const floresExplosivas14 = crearSecuencia('floresExplosivas') as ISecuenciaAnimacion;
  floresExplosivas14.scale.set(0.4);
  floresExplosivas14.position.set(dims.pasoX * 9.1, dims.pasoY * 3.2);
  floresExplosivas14.alpha = 1;

  return { animar, limpiar };

  function animar() {}
  function limpiar() {}
};
