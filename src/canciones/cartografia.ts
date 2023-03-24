import { estadoInicial } from '../secuencias/pajaros';
import { ISecuenciaAnimacion, TDimensiones } from '../tipos';
import { aleatorioFraccion, aleatorioIntegral, crearSecuencia, llamarSecuencia } from '../utilidades/ayudas';

export default (dims: TDimensiones) => {
  const fondo3 = llamarSecuencia('fondo3');
  fondo3.scale.set(2);
  fondo3.position.set(0, dims.pasoY * 1.7);
  fondo3.alpha = 1;
  fondo3.velocidad = 0.2;

  const velocidadX = 0.2;
  let velocidadY = -0.15;
  let pajarosAbajo = false;

  const pajarosTemporales: ISecuenciaAnimacion[] = [];

  for (let i = 0; i < 222; i++) {
    const pajaro = crearSecuencia('juanCamilo', aleatorioIntegral(0.111, 0.175), false, false) as ISecuenciaAnimacion;
    estadoInicial(pajaro, dims);
    pajaro.alpha = 1;

    reiniciarPajaro(pajaro);

    pajarosTemporales.push(pajaro);
  }

  return { animar, limpiar };

  function animar() {
    fondo3.x -= velocidadX;
    fondo3.y += velocidadY;

    if (!pajarosAbajo && fondo3.y < -600) {
      pajarosAbajo = true;
    }

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
  }

  function reiniciarPajaro(pajaro: ISecuenciaAnimacion) {
    const escala = aleatorioFraccion(0.2, 0.5);

    if (pajaro.invertido) {
      pajaro.scale.set(-escala, escala);
      pajaro.x = dims.ancho + aleatorioIntegral(0, 900);
    } else {
      pajaro.scale.set(escala, escala);
      pajaro.x = aleatorioIntegral(-10, -900);
    }

    if (!pajarosAbajo) {
      pajaro.y = dims.pasoY * aleatorioFraccion(0.1, 2.9);
    } else {
      pajaro.y = dims.pasoY * aleatorioFraccion(4.5, 10);
    }

    const angulo = aleatorioFraccion(-0.15, 0.1);
    pajaro.angulo = angulo;
    pajaro.rotation = angulo;
  }

  function limpiar() {
    return pajarosTemporales;
  }
};
