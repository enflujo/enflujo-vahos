import { AnimatedSprite } from 'pixijs';
import { TDimensiones } from '../tipos';
import { llamarSecuencia, crearSecuencia } from '../utilidades/ayudas';

export default (dims: TDimensiones) => {
  const mar = llamarSecuencia('mar');
  mar.scale.set(0.5, -0.5);
  mar.position.set(dims.pasoX * 0.1, dims.pasoY * 2);
  mar.alpha = 1;

  const mar2 = crearSecuencia('mar') as AnimatedSprite;
  mar2.scale.set(0.5, -0.5);
  mar2.position.set(dims.pasoX * 2.6, dims.pasoY * 2);
  mar2.alpha = 1;

  const mar3 = crearSecuencia('mar') as AnimatedSprite;
  mar3.scale.set(0.5, -0.5);
  mar3.position.set(dims.pasoX * 5.1, dims.pasoY * 2);
  mar3.alpha = 1;

  const mar4 = crearSecuencia('mar') as AnimatedSprite;
  mar4.scale.set(0.5, -0.5);
  mar4.position.set(dims.pasoX * 7.5, dims.pasoY * 2);
  mar4.alpha = 1;

  const cafetera = llamarSecuencia('cafetera');
  cafetera.scale.set(0.7);
  cafetera.position.set(dims.pasoX * 4.68, dims.pasoY * 7.5);
  cafetera.alpha = 1;

  const sillaLoop = llamarSecuencia('sillaLoop');
  sillaLoop.scale.set(-0.5, 0.5); // Invertido horizontalmente
  sillaLoop.position.set(dims.pasoX * 7.5, dims.pasoY * 5);
  sillaLoop.alpha = 1;

  const silla = llamarSecuencia('silla');
  silla.scale.set(0.6);
  silla.position.set(dims.pasoX * 2.8, dims.pasoY * 5);
  silla.alpha = 1;

  const lampara = llamarSecuencia('lampara');
  lampara.scale.set(0.9);
  lampara.position.set(dims.pasoX, dims.pasoY * 8);
  lampara.alpha = 1;
  lampara.rotation -= 1.3;

  const reloj = llamarSecuencia('reloj');
  reloj.scale.set(0.7);
  reloj.position.set(dims.pasoX * 5, dims.pasoY * 3);
  reloj.alpha = 1;

  const candela = llamarSecuencia('candela');
  candela.scale.set(0.5);
  candela.position.set(dims.pasoX * 9.4, dims.pasoY * 4);
  candela.alpha = 1;
  candela.rotation += 0.6;

  return { animar, limpiar };

  function animar() {}
  function limpiar() {}
};

// Pájaros vuelan
// Los objetos se mueven por ahí
