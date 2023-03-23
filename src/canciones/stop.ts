import { estadoInicial, moverPajaro } from '../secuencias/pajaros';
import { ISecuenciaAnimacion, TDimensiones } from '../tipos';
import { aleatorioFraccion, aleatorioIntegral, crearSecuencia, llamarSecuencia } from '../utilidades/ayudas';

export default (dims: TDimensiones) => {
  const { pasoX, pasoY } = dims;
  const fondo2 = llamarSecuencia('fondo2');
  fondo2.scale.set(1.5);
  fondo2.anchor.set(-1, -1);
  fondo2.position.set(-pasoX * 10.5, -pasoY * 16);
  fondo2.alpha = 1;

  const mesaPajaro = llamarSecuencia('mesaPajaro');
  mesaPajaro.alpha = 1;
  ubicarMesa();

  const pajarosTemporales: ISecuenciaAnimacion[] = [];

  mesaPajaro.onLoop = () => {
    const pajaro = crearSecuencia('juanCamilo', aleatorioIntegral(0.111, 0.175), false, false) as ISecuenciaAnimacion;
    estadoInicial(pajaro, dims);

    pajaro.alpha = 1;
    pajaro.x = mesaPajaro.x;
    pajaro.y = mesaPajaro.y;
    pajaro.invertido = true;

    if (mesaPajaro.scale.x < 0) {
      pajaro.invertido = false;
    }

    if (pajaro.invertido) {
      const escala = aleatorioFraccion(0.3, 1.5);
      pajaro.scale.set(-escala, escala);
      pajaro.direccion = -1;

      const angulo = aleatorioFraccion(0.15, 0.35);
      pajaro.angulo = angulo;
      pajaro.rotation = angulo;
    } else {
      pajaro.scale.set(aleatorioFraccion(0.3, 1.5));
      pajaro.direccion = 1;

      const angulo = aleatorioFraccion(-0.15, -0.35);
      pajaro.angulo = angulo;
      pajaro.rotation = angulo;
    }

    pajarosTemporales.push(pajaro);
    ubicarMesa();
  };

  function ubicarMesa() {
    const escala = aleatorioFraccion(0.75, 0.85);
    let direccion = 1;

    if (Math.random() > 0.65) {
      direccion = -1;
    }
    const x = aleatorioFraccion(1.5, 7.5);
    const y = aleatorioFraccion(0.25, 4);
    mesaPajaro.scale.set(escala * direccion, escala);
    mesaPajaro.position.set(pasoX * x, pasoY * y);
  }

  return { animar, limpiar };

  function animar() {
    pajarosTemporales.forEach((pajaro) => {
      moverPajaro(pajaro, dims);
    });
  }

  function limpiar() {
    mesaPajaro.onLoop = null;

    pajarosTemporales.forEach((pajaro) => {
      pajaro.destroy();
    });
  }

  // Cada vez que se acaba una secuencia de la mesa cambiar posición de la mesa y hacer aparecer un pájaro en el fondo.
};
