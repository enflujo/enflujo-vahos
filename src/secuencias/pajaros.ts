import { ISecuenciaAnimacion } from '../tipos';
import { aleatorioIntegral, crearSecuencia, llamarSecuencia } from '../utilidades/ayudas';

const losPajaros: ISecuenciaAnimacion[] = [];

export function crearPajaros() {
  losPajaros.push(llamarSecuencia('juanCamilo'));

  for (let p = 0; p < 10; p++) {
    const pajaro = crearSecuencia(`juanCamilo`, aleatorioIntegral(0.111, 0.175), false);

    if (pajaro) {
      losPajaros.push(pajaro);
    }
  }
}

export function listaPajaros() {
  return losPajaros;
}
