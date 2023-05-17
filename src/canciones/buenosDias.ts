import { TDimensiones } from '../tipos';
import { llamarSecuencia } from '../utilidades/ayudas';
import { datos } from '../utilidades/datos';

export default () => {
  let dimensiones: TDimensiones;
  const fondo1 = llamarSecuencia('fondo1');
  fondo1.alpha = 0;

  const fondo2 = llamarSecuencia('fondo2');
  fondo2.anchor.set(-1, -1);
  fondo2.alpha = 0;

  const fondo3 = llamarSecuencia('fondo3');
  fondo3.rotation = 0;
  fondo3.alpha = 0;

  const sol = llamarSecuencia('anaSol');
  sol.anchor.set(0.5);
  sol.alpha = 0;

  return { animar, limpiar, posiciones };

  function posiciones(dims: TDimensiones) {
    const escalas = {
      fondo1: { ancho: 0.45, alto: 0.6, y: 1, x: -0.1 },
    };

    dimensiones = dims;
    const dimsFondo1 = datos.fondo1.fotogramas[0];

    function escalaImgAPantalla(dimPantalla: number, dimImg: number) {
      return 1 + (dimPantalla - dimImg) / dimImg;
    }

    const porcentajeAlto = escalaImgAPantalla(dims.alto * escalas.fondo1.alto, dimsFondo1.alto);

    if (dims.ancho > dims.alto) {
      console.log(porcentajeAlto);
    }

    fondo1.scale.set(porcentajeAlto);
    fondo1.y = dims.pasoY;
    fondo1.x = -dims.pasoX * 0.1;

    fondo2.scale.set(0.7);
    fondo2.position.set(-dims.pasoX * 0.3, -dims.pasoY * 4.2);

    fondo3.scale.set(0.55);
    fondo3.position.set(dims.pasoX * 1.9, dims.pasoY * 7.7);

    sol.scale.set(0.6);
    sol.position.set(dims.pasoX * 5.7, dims.pasoY * 11);
  }

  function animar() {
    if (sol.alpha < 1) {
      if (fondo1.alpha < 1) {
        fondo1.alpha += 0.001;
      }

      if (fondo2.alpha < 1 && fondo1.alpha >= 0.45) {
        fondo2.alpha += 0.001;
      }

      if (fondo3.alpha < 1 && fondo2.alpha >= 0.32) {
        fondo3.alpha += 0.001;
      }

      if (fondo3.alpha >= 0.3) {
        sol.alpha += 0.001;
      }
    }

    if (fondo2.alpha >= 0.3 && sol.y > dimensiones.pasoY * 3.7) {
      sol.y -= 0.25;
    }
  }

  function limpiar() {}

  // Fade in de las montañas
  // El sol sube
  // Pájaro volando
};
