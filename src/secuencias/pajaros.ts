import { ISecuenciaAnimacion, TDimensiones } from '../tipos';
import { aleatorioFraccion, aleatorioIntegral, crearSecuencia, llamarSecuencia } from '../utilidades/ayudas';

const losPajaros: ISecuenciaAnimacion[] = [];

export function crearPajaros() {
  losPajaros.push(llamarSecuencia('juanCamilo'));

  for (let p = 0; p < 10; p++) {
    const pajaro = crearSecuencia('juanCamilo', aleatorioIntegral(0.111, 0.175), false);

    if (pajaro) {
      losPajaros.push(pajaro);
    }
  }
}

export function listaPajaros() {
  return losPajaros;
}

export function estadoInicial(pajaro: ISecuenciaAnimacion, dims: TDimensiones) {
  pajaro.opacidad = aleatorioFraccion(0.8, 0.95);
  pajaro.alpha = 0;
  pajaro.velocidad = aleatorioFraccion(1.5, 2.5);
  const angulo = aleatorioFraccion(-0.35, 0.5);
  pajaro.angulo = angulo;
  pajaro.rotation = angulo;
  pajaro.gotoAndPlay(aleatorioIntegral(0, 4));
  pajaro.invertido = false;
  pajaro.direccion = 1;

  if (Math.random() > 0.5) {
    pajaro.invertido = true;
  }

  if (pajaro.invertido) {
    const escala = aleatorioFraccion(0.3, 1.5);
    pajaro.scale.set(-escala, escala);
    pajaro.position.set(aleatorioFraccion(0, dims.ancho), aleatorioFraccion(0, dims.alto));
    pajaro.direccion = -1;
  } else {
    pajaro.scale.set(aleatorioFraccion(0.3, 1.5));
    pajaro.position.set(aleatorioFraccion(0, dims.ancho), aleatorioFraccion(0, dims.alto));
  }
}

export function ubicarPajaros(dims: TDimensiones) {
  losPajaros.forEach((pajaro) => {
    estadoInicial(pajaro, dims);
  });
}

export function reiniciarPajaro(pajaro: ISecuenciaAnimacion, dims: TDimensiones) {
  if (pajaro.invertido) {
    pajaro.x = aleatorioIntegral(dims.ancho + 300, dims.ancho + 100);
  } else {
    pajaro.x = aleatorioIntegral(-300, -100);
  }

  pajaro.y = aleatorioFraccion(0, dims.alto);
  const angulo = aleatorioFraccion(-0.35, 0.5);
  pajaro.angulo = angulo;
  pajaro.rotation = angulo;
}

export function moverPajaro(pajaro: ISecuenciaAnimacion, dims: TDimensiones) {
  pajaro.x += pajaro.velocidad * pajaro.direccion;
  pajaro.y += pajaro.velocidad * pajaro.angulo * pajaro.direccion;

  if (!pajaro.invertido && pajaro.x > dims.ancho + 10) {
    reiniciarPajaro(pajaro, dims);
  } else if (pajaro.invertido && pajaro.x < -10) {
    reiniciarPajaro(pajaro, dims);
  }

  if (pajaro.y < 0 || pajaro.y > dims.alto) {
    reiniciarPajaro(pajaro, dims);
  }
}
