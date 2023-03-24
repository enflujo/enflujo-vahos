import { ISecuenciaAnimacion, TDimensiones } from '../tipos';
import { llamarSecuencia, crearSecuencia, aleatorioFraccion } from '../utilidades/ayudas';

export default (dims: TDimensiones) => {
  const { pasoX, pasoY } = dims;
  const dimensionAstral = llamarSecuencia('dimensionAstral');
  dimensionAstral.scale.set(0.6);
  dimensionAstral.position.set(pasoX * 1.2, pasoY * 6.5);
  dimensionAstral.alpha = 1;

  const dimensionAstral2 = crearSecuencia('dimensionAstral', 0.12, true, false) as ISecuenciaAnimacion;
  dimensionAstral2.scale.set(-0.6, 0.6);
  dimensionAstral2.position.set(pasoX * 7, pasoY * 3);
  dimensionAstral2.alpha = 1;

  dimensionAstral.onLoop = () => {
    dimensionAstral.position.set(pasoX * aleatorioFraccion(0, 10), pasoY * aleatorioFraccion(0, 10));
  };
  dimensionAstral2.onLoop = () => {
    dimensionAstral2.position.set(pasoX * aleatorioFraccion(0, 10), pasoY * aleatorioFraccion(0, 10));
  };

  const dieguis: ISecuenciaAnimacion[] = [];

  for (let i = 0; i < 2; i++) {
    crearADiego();
  }

  return { animar, limpiar };

  // 💝
  function crearADiego() {
    const diegoBailarin = crearSecuencia('diego', 0.12, true, false) as ISecuenciaAnimacion;
    diegoBailarin.anchor.set(0.5);
    let escala = 1;

    if (Math.random() > 0.5) {
      escala = -1;
    }
    diegoBailarin.scale.set(0.8 * escala, 0.8);
    diegoBailarin.position.set(pasoX * aleatorioFraccion(1, 10), pasoY * aleatorioFraccion(2, 10));
    diegoBailarin.alpha = 1;
    diegoBailarin.direccion = escala < 0 ? 1 : -1;

    dieguis.push(diegoBailarin);
  }

  function animar() {
    dieguis.forEach((dieguito) => {
      dieguito.x += 0.5 * dieguito.direccion;

      if (Math.random() > 0.9985) {
        dieguito.direccion *= -1;

        if (dieguito.direccion < 0) {
          dieguito.scale.set(0.8, 0.8);
        } else {
          dieguito.scale.set(-0.8, 0.8);
        }
      }
    });

    if (Math.random() > 0.9975) {
      crearADiego();
    }
  }

  function limpiar() {
    dimensionAstral2.destroy();
    dimensionAstral.onLoop = null;
    dimensionAstral2.onLoop = null;

    dieguis.forEach((duieguito) => {
      duieguito.destroy();
    });
  }
};

// Diegos caminan
