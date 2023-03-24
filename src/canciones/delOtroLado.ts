import { ISecuenciaAnimacion, TDimensiones } from '../tipos';
import { llamarSecuencia, crearSecuencia } from '../utilidades/ayudas';

export default (dims: TDimensiones) => {
  const mar = llamarSecuencia('mar');
  mar.scale.set(0.7);
  mar.position.set(dims.pasoX * 6, dims.pasoY * 7);
  mar.alpha = 1;

  const mar2 = crearSecuencia('mar', 0.166, true, false) as ISecuenciaAnimacion;
  mar2.scale.set(0.7, -0.7);
  mar2.position.set(dims.pasoX * 0.1, dims.pasoY * 6);
  mar2.alpha = 1;
  mar2.rotation -= 0.3;

  const pescadini = llamarSecuencia('pescadini');
  pescadini.anchor.set(0.5);
  pescadini.scale.set(0.5);
  pescadini.position.set(dims.pasoX * 4, dims.pasoY * 4);
  pescadini.alpha = 1;

  const pescadini2 = crearSecuencia('pescadini', 0.1, true, false) as ISecuenciaAnimacion;
  pescadini2.scale.set(0.5, -0.5);
  pescadini2.position.set(dims.pasoX * 6, dims.pasoY * 7);
  pescadini2.alpha = 1;

  const arbolSeco = llamarSecuencia('arbolSeco2');
  arbolSeco.scale.set(0.43);
  arbolSeco.position.set(dims.pasoX * 7.9, dims.pasoY * 4.8);
  arbolSeco.alpha = 1;

  const arbolSeco2 = crearSecuencia('arbolSeco2', 0.166, true, false) as ISecuenciaAnimacion;
  arbolSeco2.scale.set(0.43, -0.43);
  arbolSeco2.position.set(dims.pasoX * 2.1, dims.pasoY * 6.6);
  arbolSeco2.alpha = 1;
  arbolSeco2.rotation -= 0.3;

  const pajarera = llamarSecuencia('pajarera');
  pajarera.scale.set(0.5);
  pajarera.position.set(dims.pasoX * 7.4, dims.pasoY * 4);
  pajarera.alpha = 1;

  const pajarera2 = crearSecuencia('pajarera', 0.111, true, false) as ISecuenciaAnimacion;
  pajarera2.scale.set(0.5, -0.5);
  pajarera2.position.set(dims.pasoX * 1.7, dims.pasoY * 7.2);
  pajarera2.alpha = 1;

  const secuenciasTemporales = [mar2, pescadini2, arbolSeco2, pajarera2];

  function rotate(cx: number, cy: number, x: number, y: number, angulo: number) {
    const radianes = (Math.PI / 180) * angulo;
    const cos = Math.cos(radianes);
    const sin = Math.sin(radianes);
    const nx = cos * (x - cx) + sin * (y - cy) + cx;
    const ny = cos * (y - cy) - sin * (x - cx) + cy;
    return [nx, ny];
  }

  let contador = 0;
  const pasos = 10;
  return { animar, limpiar };

  function animar() {
    if (contador === pasos) {
      const pos = rotate(dims.pasoX * 5, dims.pasoY * 5, pescadini.x, pescadini.y, -0.5);
      pescadini.x = pos[0];
      pescadini.y = pos[1];
      pescadini.rotation += 0.015;

      const pos2 = rotate(dims.pasoX * 6, dims.pasoY * 6, pescadini2.x, pescadini2.y, -0.5);
      pescadini2.x = pos2[0];
      pescadini2.y = pos2[1];
      pescadini2.rotation += 0.015;
      contador = 0;
    }

    contador++;
  }

  function limpiar() {
    secuenciasTemporales.forEach((secuencia) => {
      secuencia.destroy();
    });
  }
};

// Los peces nadan
