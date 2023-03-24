import { ISecuenciaAnimacion, TDimensiones } from '../tipos';
import { llamarSecuencia, crearSecuencia, aleatorioIntegral } from '../utilidades/ayudas';

export default (dims: TDimensiones) => {
  const { pasoY } = dims;
  const floresBarbaras = llamarSecuencia('floresBarbaras');
  floresBarbaras.scale.set(1);
  floresBarbaras.position.set(dims.pasoX * 0.7, dims.pasoY * 6);
  floresBarbaras.alpha = 1;

  const floresBarbaras2 = crearSecuencia('floresBarbaras', 0.166, true, false) as ISecuenciaAnimacion;
  floresBarbaras2.alpha = 1;
  floresBarbaras2.scale.set(1);
  floresBarbaras2.position.set(dims.pasoX * 3.7, dims.pasoY * 6);

  const floresBarbaras3 = crearSecuencia('floresBarbaras', 0.166, true, false) as ISecuenciaAnimacion;
  floresBarbaras3.alpha = 1;
  floresBarbaras3.scale.set(1);
  floresBarbaras3.position.set(dims.pasoX * 6.7, dims.pasoY * 6);

  const matorral = llamarSecuencia('matorral');
  matorral.scale.set(1);
  matorral.position.set(dims.pasoX * 1.4, dims.pasoY * 4);
  matorral.alpha = 1;

  const matorral2 = crearSecuencia('matorral', 0.166, true, false) as ISecuenciaAnimacion;
  matorral2.scale.set(1);
  matorral2.position.set(dims.pasoX * 3.5, dims.pasoY * 4);
  matorral2.alpha = 1;

  const matorral3 = crearSecuencia('matorral', 0.166, true, false) as ISecuenciaAnimacion;
  matorral3.scale.set(1);
  matorral3.position.set(dims.pasoX * 5.8, dims.pasoY * 4);
  matorral3.alpha = 1;

  const pajaro = llamarSecuencia('juanCamilo');
  pajaro.alpha = 1;
  pajaro.position.set(-10, -100);
  pajaro.rotation = 0.6;

  const velocidadPajaro = 4;

  const secuenciasTemporales: ISecuenciaAnimacion[] = [floresBarbaras2, floresBarbaras3, matorral2, matorral3];

  return { animar, limpiar };

  function animar() {
    if (pajaro.y < pasoY * 6) {
      pajaro.x += 0.6 * velocidadPajaro;
      pajaro.y += pajaro.rotation * velocidadPajaro;
    } else {
      pajaro.x += 0.6 * velocidadPajaro;
      pajaro.y += -pajaro.rotation * velocidadPajaro;
      pajaro.rotation *= -1;
    }

    if (pajaro.y < -100) {
      reiniciarPajaro();
    }
  }

  function reiniciarPajaro() {
    let direcccion = 1;
    if (Math.random() > 0.5) {
      direcccion = -1;
    }

    const escala = 0.8;
    pajaro.scale.set(escala * direcccion, escala);
    pajaro.position.set(aleatorioIntegral(0, dims.ancho / 27), -90);
    pajaro.rotation = 0.6 * direcccion;
  }

  function limpiar() {
    secuenciasTemporales.forEach((secuencia) => {
      secuencia.destroy();
    });

    // floresBarbaras.alpha = 0;
    // matorral.alpha = 0;
  }
  // Pájaros arriba
};
