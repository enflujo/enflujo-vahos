import { ISecuenciaAnimacion, TDimensiones } from '../tipos';
import { aleatorioFraccion, aleatorioIntegral, crearSecuencia, llamarSecuencia } from '../utilidades/ayudas';
// OJO: No sé si está es la canción correcta o es Cámara Lenta

export default (dims: TDimensiones) => {
  const { pasoX, pasoY } = dims;

  const fondo1 = llamarSecuencia('fondo1');
  fondo1.scale.set(1.4);
  fondo1.position.set(-pasoX * 0.1, pasoY * 1.1);
  fondo1.alpha = 1;

  const arbolSol = llamarSecuencia('arbolSol');
  arbolSol.scale.set(0.4);
  arbolSol.position.set(pasoX * 3.4, pasoY * 2.7);
  arbolSol.alpha = 1;

  const sol = llamarSecuencia('anaSol');
  sol.scale.set(1.3);
  sol.anchor.set(0.5);
  sol.position.set(pasoX * 11, pasoY * 4);
  sol.alpha = 1;

  const grupos: {
    pajaro: ISecuenciaAnimacion;
    sol: ISecuenciaAnimacion;
    beso: ISecuenciaAnimacion;
    buscandose: boolean;
  }[] = [];

  arbolSol.onFrameChange = (fotogramaActual) => {
    if (fotogramaActual === 12) {
      const velocidad = aleatorioFraccion(1, 2.11);
      const y = pasoY * aleatorioFraccion(2.7, 4.3);

      const pajaro = crearSecuencia('juanCamilo', aleatorioFraccion(0.111, 0.175), false, false) as ISecuenciaAnimacion;
      pajaro.x = pasoX * aleatorioFraccion(4.7, 5);
      pajaro.y = y;
      pajaro.alpha = 1;
      pajaro.velocidad = velocidad;
      pajaro.gotoAndPlay(aleatorioIntegral(0, 4));

      const sol = crearSecuencia('anaSol', 0.166, true, false) as ISecuenciaAnimacion;
      sol.anchor.set(0.5);
      sol.scale.set(0.18);
      sol.y = y;
      sol.x = pasoX * 9.6;
      sol.alpha = 1;
      sol.velocidad = -velocidad;

      const beso = crearSecuencia('lechuga', 0.166, false, false) as ISecuenciaAnimacion;
      beso.anchor.set(0.5);

      let sentido = 1;
      const escala = 0.11;
      if (Math.random() > 0.55) {
        sentido = -1;
      }
      beso.scale.set(escala * sentido, escala);
      grupos.push({ pajaro, sol, beso, buscandose: true });
    }
  };

  return { animar, limpiar };

  function animar() {
    grupos.forEach((novios) => {
      const { pajaro, sol, beso, buscandose } = novios;

      if (buscandose) {
        pajaro.x += pajaro.velocidad;
        sol.x += sol.velocidad;

        if (pajaro.x >= sol.x) {
          novios.buscandose = false;
          pajaro.alpha = 0;
          sol.alpha = 0;

          beso.x = sol.x;
          beso.y = sol.y - 5;
          beso.alpha = 1;
          beso.loop = false;
          beso.play();
        }
      }
    });
  }

  function limpiar() {
    arbolSol.onFrameChange = null;

    grupos.forEach((grupo) => {
      grupo.pajaro.destroy();
      grupo.sol.destroy();
      grupo.beso.destroy();
    });
  }
};
