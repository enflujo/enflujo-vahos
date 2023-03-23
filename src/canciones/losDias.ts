import { TDimensiones } from '../tipos';
import { aleatorioFraccion, aleatorioIntegral, crearSecuencia, llamarSecuencia } from '../utilidades/ayudas';

export default (dims: TDimensiones) => {
  const fondo1 = llamarSecuencia('fondo1');
  fondo1.scale.set(0.3);
  fondo1.y = dims.pasoY * 2;

  const fondo2 = llamarSecuencia('fondo2');
  fondo2.scale.set(0.3);
  fondo2.anchor.set(-1, -1);

  const fondo3 = llamarSecuencia('fondo3');
  fondo3.scale.set(0.3);
  fondo3.position.set(-dims.pasoX * 0.5, dims.pasoY * 6);
  fondo3.rotation = 0.2;

  const escupePajaro = llamarSecuencia('montañaPajaro');
  escupePajaro.scale.set(0.2);
  escupePajaro.position.set(dims.pasoX * 4, dims.pasoY * 6.4);

  const fondo4 = llamarSecuencia('fondo4');
  fondo4.scale.set(0.2);
  fondo4.position.set(dims.pasoX * 4, dims.pasoY * 6.8);

  const arbolSol = llamarSecuencia('arbolSol');
  arbolSol.scale.set(0.1);
  arbolSol.position.set(dims.pasoX * 0.9, dims.pasoY * 2.4);

  const giraSol = llamarSecuencia('giraSol');
  giraSol.scale.set(0.25);
  giraSol.position.set(dims.pasoX * 9, dims.pasoY * 3);

  const pasto = llamarSecuencia('pasto');
  pasto.scale.set(0.25);
  pasto.position.set(dims.pasoX * 9.2, dims.pasoY * 9.8);
  pasto.rotation = -0.35;

  const montañaArboles = llamarSecuencia('montañaArboles');
  montañaArboles.scale.set(0.25);
  montañaArboles.position.set(dims.pasoX * 3, dims.pasoY * 8);

  const lampara = llamarSecuencia('lampara');
  lampara.scale.set(0.25);
  lampara.position.set(dims.pasoX * 6, dims.pasoY * 4);

  const floresExplosivas = llamarSecuencia('floresExplosivas');
  floresExplosivas.scale.set(0.25);
  floresExplosivas.position.set(dims.pasoX * 3.7, dims.pasoY * 2.5);

  const pescadini = llamarSecuencia('pescadini');
  pescadini.scale.set(0.3);
  pescadini.position.set(dims.pasoX * 3, dims.pasoY * 1);

  const monstruoMar = llamarSecuencia('monstruoMar');
  monstruoMar.scale.set(0.4);
  monstruoMar.position.set(dims.pasoX * 5.6, dims.pasoY * 5.8);

  const floresBarbaras = llamarSecuencia('floresBarbaras');
  floresBarbaras.scale.set(0.3);
  floresBarbaras.position.set(dims.pasoX * 1.5, dims.pasoY * 4.5);

  const anto = llamarSecuencia('anto');
  anto.scale.set(0.3);
  anto.position.set(dims.pasoX * 7, dims.pasoY * 2);

  const pezVolador = llamarSecuencia('pezVolador');
  pezVolador.scale.set(0.3);
  pezVolador.position.set(dims.pasoX * 1.4, dims.pasoY * 0.5);

  const flores = llamarSecuencia('flores');
  flores.scale.set(0.18);
  flores.position.set(dims.pasoX * 6.5, dims.pasoY * 3.6);

  const arbolLloron = llamarSecuencia('arbolLloron');
  arbolLloron.scale.set(0.3);
  arbolLloron.position.set(dims.pasoX * 2.8, dims.pasoY * 6);

  const hueco1 = llamarSecuencia('hueco1');
  hueco1.scale.set(0.2);
  hueco1.position.set(dims.pasoX * 9, dims.pasoY * 8);

  const manoPajaro = llamarSecuencia('manoPajaro');
  manoPajaro.scale.set(0.25);
  manoPajaro.position.set(dims.pasoX * 6, dims.pasoY * 8);

  const nube1 = llamarSecuencia('nube1');
  nube1.scale.set(0.25);
  nube1.position.set(dims.pasoX * 5, dims.pasoY * 0.2);

  const arbolNube = llamarSecuencia('arbolNube');
  arbolNube.scale.set(0.32);
  arbolNube.position.set(dims.pasoX * 0.2, dims.pasoY * 4);

  const arbolNubeLoop = llamarSecuencia('arbolNubeLoop');
  arbolNubeLoop.scale.set(0.33);
  arbolNubeLoop.position.set(dims.pasoX * 10, dims.pasoY * 4.7);

  const diego = llamarSecuencia('diego');
  diego.scale.set(0.5);
  diego.position.set(dims.pasoX * 7, dims.pasoY * 4);

  const cocoCantaor = llamarSecuencia('cocoCantaor');
  cocoCantaor.scale.set(0.43);
  cocoCantaor.position.set(dims.pasoX * 3, dims.pasoY * 9);

  const mar = llamarSecuencia('mar');
  mar.scale.set(0.43);
  mar.position.set(dims.pasoX * 7.8, dims.pasoY * 5.5);

  const dimensionAstral = llamarSecuencia('dimensionAstral');
  dimensionAstral.scale.set(0.43);
  dimensionAstral.position.set(dims.pasoX * 7.6, dims.pasoY * 8);

  const fondo5 = llamarSecuencia('fondo5');
  fondo5.scale.set(0.43);
  fondo5.position.set(dims.pasoX * 8.4, dims.pasoY * 1);

  const arbolSeco = llamarSecuencia('arbolSeco');
  arbolSeco.scale.set(0.25);
  arbolSeco.position.set(dims.pasoX * 9.5, dims.pasoY * 4.7);

  const arbolSeco2 = llamarSecuencia('arbolSeco2');
  arbolSeco2.scale.set(0.43);
  arbolSeco2.position.set(dims.pasoX * 8.3, dims.pasoY * 4.1);

  const arbolSeco3 = llamarSecuencia('arbolSeco3');
  arbolSeco3.scale.set(0.23);
  arbolSeco3.position.set(dims.pasoX * 4.3, dims.pasoY * 2.5);

  const moscas = llamarSecuencia('moscas');
  moscas.scale.set(0.53);
  moscas.position.set(dims.pasoX * 6, dims.pasoY * 6);

  const pajarera = llamarSecuencia('pajarera');
  pajarera.scale.set(0.43);
  pajarera.position.set(dims.pasoX * 8, dims.pasoY * 4);

  const floresitas = llamarSecuencia('floresitas');
  floresitas.scale.set(0.33);
  floresitas.position.set(dims.pasoX * 0.2, dims.pasoY * 9);

  const matorral = llamarSecuencia('matorral');
  matorral.scale.set(0.33);
  matorral.position.set(dims.pasoX * 9.7, dims.pasoY * 7.2);

  const hueco2 = llamarSecuencia('hueco2');
  hueco2.scale.set(0.23);
  hueco2.position.set(dims.pasoX * 4.6, dims.pasoY * 9.8);

  const huecoSol = llamarSecuencia('huecoSol');
  huecoSol.scale.set(0.33);
  huecoSol.position.set(dims.pasoX * 0.6, dims.pasoY * 5.8);

  const arbolLloronLoop = llamarSecuencia('arbolLloronLoop');
  arbolLloronLoop.scale.set(0.13);
  arbolLloronLoop.position.set(dims.pasoX * 9.1, dims.pasoY * 0.5);

  const huecoNube = llamarSecuencia('huecoNube');
  huecoNube.scale.set(0.13);
  huecoNube.position.set(dims.pasoX * 4.8, dims.pasoY * 2.4);

  const hueco3 = llamarSecuencia('hueco3');
  hueco3.scale.set(0.05);
  hueco3.position.set(dims.pasoX * 0.1, dims.pasoY * 3.5);

  const mesaPajaro = llamarSecuencia('mesaPajaro');
  mesaPajaro.scale.set(0.35);
  mesaPajaro.position.set(dims.pasoX * 2.4, dims.pasoY * 3.1);

  const florBailarina = llamarSecuencia('florBailarina');
  florBailarina.scale.set(0.35);
  florBailarina.position.set(dims.pasoX * 7.2, dims.pasoY * 8.3);

  const cafetera = llamarSecuencia('cafetera');
  cafetera.scale.set(0.18);
  cafetera.position.set(dims.pasoX * 6.4, dims.pasoY * 4.3);

  const reloj = llamarSecuencia('reloj');
  reloj.scale.set(0.18);
  reloj.position.set(dims.pasoX * 6.2, dims.pasoY * 3.3);

  const silla = llamarSecuencia('silla');
  silla.scale.set(0.18);
  silla.position.set(dims.pasoX * 5.8, dims.pasoY * 3);

  const sillaLoop = llamarSecuencia('sillaLoop');
  sillaLoop.scale.set(-0.16, 0.16); // Invertido horizontalmente
  sillaLoop.position.set(dims.pasoX * 6.8, dims.pasoY * 2.8);

  const candela = llamarSecuencia('candela');
  candela.scale.set(0.18);
  candela.position.set(dims.pasoX * 6.4, dims.pasoY * 2.2);

  const lechuga = llamarSecuencia('lechuga');
  lechuga.scale.set(0.18);
  lechuga.position.set(dims.pasoX * 9.4, dims.pasoY * 4.3);

  const cocoPicaOjo = llamarSecuencia('cocoPicaOjo');
  cocoPicaOjo.scale.set(-0.38, 0.38);
  cocoPicaOjo.position.set(dims.pasoX * 10.8, dims.pasoY * 0.9);

  const sol = llamarSecuencia('anaSol');
  sol.scale.set(0.25);
  sol.anchor.set(0.5);
  sol.position.set(dims.pasoX * 7.7, dims.pasoY * 8);

  const pajaros = [llamarSecuencia('juanCamilo')];

  for (let p = 0; p < 10; p++) {
    const pajaro = crearSecuencia(`juanCamilo`, 0.5, false);
    if (pajaro) {
      pajaros.push(pajaro);
    }
  }

  pajaros.forEach((pajaro) => {
    pajaro.scale.set(aleatorioFraccion(0.8, 1.5));
    pajaro.anchor.set(0.5);
    pajaro.position.set(aleatorioFraccion(0, dims.ancho), aleatorioFraccion(0, dims.alto));
    pajaro.alpha = 1;
    pajaro.animationSpeed = aleatorioIntegral(0.111, 0.175);
    pajaro.velocidad = aleatorioFraccion(1.5, 2.5);
    const angulo = aleatorioFraccion(-0.35, 0.5);
    pajaro.angulo = angulo;
    pajaro.rotation = angulo;
    pajaro.gotoAndPlay(aleatorioIntegral(0, 4));
  });

  return {
    sol,
    pajaros,
  };
};
