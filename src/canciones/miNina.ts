import { estadoInicial } from '../secuencias/pajaros';
import { ISecuenciaAnimacion, TDimensiones } from '../tipos';
import { aleatorioFraccion, aleatorioIntegral, crearSecuencia, llamarSecuencia } from '../utilidades/ayudas';

export default (dims: TDimensiones, elementosAnteriores: ISecuenciaAnimacion[]) => {
  const fondo5 = llamarSecuencia('fondo5');
  fondo5.scale.set(1.6);
  fondo5.position.set(dims.pasoX * 3.3, dims.pasoY * 5);
  fondo5.alpha = 1;

  const arbolLloronLoop = llamarSecuencia('arbolLloronLoop');
  arbolLloronLoop.scale.set(0.4);
  arbolLloronLoop.position.set(dims.pasoX * 6, dims.pasoY * 3.8);
  arbolLloronLoop.alpha = 1;

  const monstruoMar = llamarSecuencia('monstruoMar');
  monstruoMar.scale.set(0.8);
  monstruoMar.position.set(dims.pasoX * 1, dims.pasoY * 8);
  monstruoMar.alpha = 1;

  monstruoMar.onLoop = () => {
    monstruoMar.x += 100;
  };

  const pajarosTemporales: ISecuenciaAnimacion[] = elementosAnteriores ? elementosAnteriores : [];
  const pasosParaCrearPajaro = 11;
  let contador = 0;

  // for (let i = 0; i < 50000; i++) {
  //   const pajaro = crearSecuencia('juanCamilo', aleatorioIntegral(0.111, 0.175), false, false) as ISecuenciaAnimacion;

  //   estadoInicial(pajaro, dims);
  //   pajaro.alpha = 1;
  //   6;
  // }

  return { animar, limpiar };

  function animar() {
    pajarosTemporales.forEach((pajaro) => {
      pajaro.x += pajaro.velocidad * pajaro.direccion;
      pajaro.y += pajaro.velocidad * pajaro.angulo * pajaro.direccion;

      if (!pajaro.invertido && pajaro.x > dims.ancho + 10) {
        reiniciarPajaro(pajaro);
      } else if (pajaro.invertido && pajaro.x < -10) {
        reiniciarPajaro(pajaro);
      }

      if (pajaro.y < 0 || pajaro.y > dims.alto) {
        reiniciarPajaro(pajaro);
      }
    });

    if (contador === pasosParaCrearPajaro) {
      5;
      for (let i = 0; i < 10; i++) {
        const p = crearSecuencia('juanCamilo', aleatorioIntegral(0.111, 0.175), false, false) as ISecuenciaAnimacion;
        estadoInicial(p, dims);
        p.alpha = aleatorioFraccion(0.7, 0.9);
        reiniciarPajaro(p);
        pajarosTemporales.push(p);
      }

      contador = 0;
    }
    contador++;
  }

  function limpiar() {
    monstruoMar.onLoop = null;

    pajarosTemporales.forEach((pajaro) => {
      pajaro.destroy();
    });
  }

  function reiniciarPajaro(pajaro: ISecuenciaAnimacion) {
    const escala = aleatorioFraccion(0.45, 0.8);

    if (pajaro.invertido) {
      pajaro.scale.set(-escala, escala);
      pajaro.x = dims.ancho + aleatorioIntegral(0, 900);
    } else {
      pajaro.scale.set(escala, escala);
      pajaro.x = aleatorioIntegral(-10, -900);
    }

    pajaro.y = dims.pasoY * aleatorioFraccion(0.1, 1.9);

    const angulo = aleatorioFraccion(-0.15, 0.1);
    pajaro.angulo = angulo;
    pajaro.rotation = angulo;
  }
};

// El monstruo se desplaza de izquierda a derecha
