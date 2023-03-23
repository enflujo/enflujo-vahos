import { listaPajaros, moverPajaro, ubicarPajaros } from '../secuencias/pajaros';
import { TDimensiones } from '../tipos';

export default (dims: TDimensiones) => {
  const pajaros = listaPajaros();

  ubicarPajaros(dims);

  return { animar, limpiar };

  function animar() {
    pajaros.forEach((pajaro) => {
      if (pajaro.alpha < pajaro.opacidad) {
        pajaro.alpha += 0.0006;
      }

      moverPajaro(pajaro, dims);
    });
  }

  function limpiar() {}
};
