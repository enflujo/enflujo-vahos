import { llamarSecuencia, crearSecuencia } from '../utilidades/ayudas';

export default (dims: { alto: number; ancho: number; pasoX: number; pasoY: number }) => {
  const mar = llamarSecuencia('mar');
  mar.scale.set(0.43);
  mar.position.set(dims.pasoX * 7.8, dims.pasoY * 5.5);
  mar.alpha = 1;

  const cafetera = llamarSecuencia('cafetera');
  cafetera.scale.set(0.4);
  cafetera.position.set(dims.pasoX * 6.4, dims.pasoY * 4.3);
  cafetera.alpha = 1;

  const sillaLoop = llamarSecuencia('sillaLoop');
  sillaLoop.scale.set(-0.4, 0.4); // Invertido horizontalmente
  sillaLoop.position.set(dims.pasoX * 5, dims.pasoY * 2.8);
  sillaLoop.alpha = 1;

  const silla = llamarSecuencia('silla');
  silla.scale.set(0.4);
  silla.position.set(dims.pasoX * 5.8, dims.pasoY * 3);
  silla.alpha = 1;

  const lampara = llamarSecuencia('lampara');
  lampara.scale.set(0.5);
  lampara.position.set(dims.pasoX * 6, dims.pasoY * 4);
  lampara.alpha = 1;

  const reloj = llamarSecuencia('reloj');
  reloj.scale.set(0.4);
  reloj.position.set(dims.pasoX * 6.2, dims.pasoY * 3.3);
  reloj.alpha = 1;

  const candela = llamarSecuencia('candela');
  candela.scale.set(0.4);
  candela.position.set(dims.pasoX * 6.4, dims.pasoY * 2.2);
  candela.alpha = 1;
};

// Falta organizar los elementos
