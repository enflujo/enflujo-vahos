import { AnimatedSprite } from 'pixijs';
import './scss/estilos.scss';
import { crearSecuencia, cargarTexturas, crearAplicacion } from './utilidades/ayudas';

/**
 * Ancho pantalla FEP: 3328 x 1248
 *
 */

const dims = { ancho: 0, alto: 0, pasoX: 0, pasoY: 0 };

const aplicacion = crearAplicacion();

inicio();

function actualizarDimensiones() {
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  aplicacion.renderer.resize(ancho, alto);
  dims.ancho = ancho;
  dims.alto = alto;
  dims.pasoX = ancho / 11;
  dims.pasoY = alto / 11;
}

async function inicio() {
  actualizarDimensiones();
  // Carga todas las texturas a la GPU.
  await cargarTexturas();
  aplicacion.start();

  const fondo1 = crearSecuencia('fondo1') as AnimatedSprite;
  fondo1.scale.set(0.3);
  fondo1.y = dims.pasoY * 2;

  const fondo2 = crearSecuencia('fondo2') as AnimatedSprite;
  fondo2.scale.set(0.3);
  fondo2.anchor.set(-1, -1);

  const fondo3 = crearSecuencia('fondo3') as AnimatedSprite;
  fondo3.scale.set(0.3);
  fondo3.position.set(-dims.pasoX * 0.5, dims.pasoY * 6);
  fondo3.rotation = 0.2;

  const escupePajaro = crearSecuencia('montañaPajaro') as AnimatedSprite;
  escupePajaro.scale.set(0.2);
  escupePajaro.position.set(dims.pasoX * 4, dims.pasoY * 6.4);
  escupePajaro.alpha = 0.7;

  const fondo4 = crearSecuencia('fondo4') as AnimatedSprite;
  fondo4.scale.set(0.2);
  fondo4.position.set(dims.pasoX * 4, dims.pasoY * 6.8);

  const arbolSol = crearSecuencia('arbolSol') as AnimatedSprite;
  arbolSol.animationSpeed = 0.1666;
  arbolSol.scale.set(0.1);
  arbolSol.position.set(dims.pasoX * 0.9, dims.pasoY * 2.4);

  const giraSol = crearSecuencia('giraSol') as AnimatedSprite;
  giraSol.scale.set(0.25);
  giraSol.position.set(dims.pasoX * 9, dims.pasoY * 3);

  const pasto = crearSecuencia('pasto', 0.1) as AnimatedSprite;
  pasto.scale.set(0.25);
  pasto.position.set(dims.pasoX * 9.2, dims.pasoY * 9.8);
  pasto.rotation = -0.35;

  const montañaArboles = crearSecuencia('montañaArboles', 0.12) as AnimatedSprite;
  montañaArboles.scale.set(0.25);
  montañaArboles.position.set(dims.pasoX * 3, dims.pasoY * 8);

  const lampara = crearSecuencia('lampara', 0.1) as AnimatedSprite;
  lampara.scale.set(0.25);
  lampara.position.set(dims.pasoX * 6, dims.pasoY * 4);

  const floresExplosivas = crearSecuencia('floresExplosivas', 0.1) as AnimatedSprite;
  floresExplosivas.scale.set(0.25);
  floresExplosivas.position.set(dims.pasoX * 3.7, dims.pasoY * 2.5);

  const pescadini = crearSecuencia('pescadini', 0.1) as AnimatedSprite;
  pescadini.scale.set(0.3);
  pescadini.position.set(dims.pasoX * 3, dims.pasoY * 1);

  const monstruoMar = crearSecuencia('monstruoMar', 0.1) as AnimatedSprite;
  monstruoMar.scale.set(0.4);
  monstruoMar.position.set(dims.pasoX * 5, dims.pasoY * 5.8);

  const floresBarbaras = crearSecuencia('floresBarbaras') as AnimatedSprite;
  floresBarbaras.scale.set(0.3);
  floresBarbaras.position.set(dims.pasoX * 1.5, dims.pasoY * 4.5);

  const iguanas = crearSecuencia('iguanas') as AnimatedSprite;
  iguanas.scale.set(0.3);
  iguanas.position.set(dims.pasoX * 7, dims.pasoY * 2);

  const pezVolador = crearSecuencia('pezVolador', 0.14) as AnimatedSprite;
  pezVolador.scale.set(0.3);
  pezVolador.position.set(dims.pasoX * 1.4, dims.pasoY * 0.5);

  const flores = crearSecuencia('flores', 0.1) as AnimatedSprite;
  flores.scale.set(0.18);
  flores.position.set(dims.pasoX * 6.5, dims.pasoY * 3.6);

  const arbolLloron = crearSecuencia('arbolLloron') as AnimatedSprite;
  arbolLloron.scale.set(0.3);
  arbolLloron.position.set(dims.pasoX * 2.8, dims.pasoY * 6);

  const hueco1 = crearSecuencia('hueco1') as AnimatedSprite;
  hueco1.scale.set(0.2);
  hueco1.position.set(dims.pasoX * 9, dims.pasoY * 8);

  const manoPajaro = crearSecuencia('manoPajaro') as AnimatedSprite;
  manoPajaro.scale.set(0.25);
  manoPajaro.position.set(dims.pasoX * 6, dims.pasoY * 8);

  const nube1 = crearSecuencia('nube1') as AnimatedSprite;
  nube1.scale.set(0.25);
  nube1.position.set(dims.pasoX * 5, dims.pasoY * 0.2);

  const arbolNube = crearSecuencia('arbolNube') as AnimatedSprite;
  arbolNube.scale.set(0.32);
  arbolNube.position.set(dims.pasoX * 0.2, dims.pasoY * 4);

  const arbolNubeLoop = crearSecuencia('arbolNubeLoop') as AnimatedSprite;
  arbolNubeLoop.scale.set(0.33);
  arbolNubeLoop.position.set(dims.pasoX * 10, dims.pasoY * 4.7);

  const pajaroBailarin = crearSecuencia('pajaroBailarin', 0.12) as AnimatedSprite;
  pajaroBailarin.scale.set(0.5);
  pajaroBailarin.position.set(dims.pasoX * 7, dims.pasoY * 4);

  const cocoCantaor = crearSecuencia('cocoCantaor') as AnimatedSprite;
  cocoCantaor.scale.set(0.43);
  cocoCantaor.position.set(dims.pasoX * 3, dims.pasoY * 9);

  const mar = crearSecuencia('mar') as AnimatedSprite;
  mar.scale.set(0.43);
  mar.position.set(dims.pasoX * 7.8, dims.pasoY * 5.5);

  const dimensionAstral = crearSecuencia('dimensionAstral', 0.12) as AnimatedSprite;
  dimensionAstral.scale.set(0.43);
  dimensionAstral.position.set(dims.pasoX * 7.6, dims.pasoY * 8);

  const fondo5 = crearSecuencia('fondo5') as AnimatedSprite;
  fondo5.scale.set(0.43);
  fondo5.position.set(dims.pasoX * 8.4, dims.pasoY * 1);

  const arbolSeco = crearSecuencia('arbolSeco') as AnimatedSprite;
  arbolSeco.scale.set(0.25);
  arbolSeco.position.set(dims.pasoX * 9.5, dims.pasoY * 4.7);

  const arbolSeco2 = crearSecuencia('arbolSeco2') as AnimatedSprite;
  arbolSeco2.scale.set(0.43);
  arbolSeco2.position.set(dims.pasoX * 8.3, dims.pasoY * 4.1);

  const arbolSeco3 = crearSecuencia('arbolSeco3') as AnimatedSprite;
  arbolSeco3.scale.set(0.23);
  arbolSeco3.position.set(dims.pasoX * 4.3, dims.pasoY * 2.5);

  const moscas = crearSecuencia('moscas', 0.111) as AnimatedSprite;
  moscas.scale.set(0.53);
  moscas.position.set(dims.pasoX * 6, dims.pasoY * 6);

  const pajarera = crearSecuencia('pajarera', 0.111) as AnimatedSprite;
  pajarera.scale.set(0.43);
  pajarera.position.set(dims.pasoX * 8, dims.pasoY * 4);

  const floresitas = crearSecuencia('floresitas') as AnimatedSprite;
  floresitas.scale.set(0.33);
  floresitas.position.set(dims.pasoX * 0.2, dims.pasoY * 9);

  const matorral = crearSecuencia('matorral', 0.116) as AnimatedSprite;
  matorral.scale.set(0.33);
  matorral.position.set(dims.pasoX * 9.7, dims.pasoY * 7.2);

  const hueco2 = crearSecuencia('hueco2') as AnimatedSprite;
  hueco2.scale.set(0.23);
  hueco2.position.set(dims.pasoX * 4.6, dims.pasoY * 9.8);

  const huecoSol = crearSecuencia('huecoSol', 0.112) as AnimatedSprite;
  huecoSol.scale.set(0.33);
  huecoSol.position.set(dims.pasoX * 0.6, dims.pasoY * 5.8);

  const arbolLloronLoop = crearSecuencia('arbolLloronLoop') as AnimatedSprite;
  arbolLloronLoop.scale.set(0.13);
  arbolLloronLoop.position.set(dims.pasoX * 9.1, dims.pasoY * 0.5);

  const huecoNube = crearSecuencia('huecoNube') as AnimatedSprite;
  huecoNube.scale.set(0.13);
  huecoNube.position.set(dims.pasoX * 4.8, dims.pasoY * 2.4);

  const hueco3 = crearSecuencia('hueco3') as AnimatedSprite;
  hueco3.scale.set(0.05);
  hueco3.position.set(dims.pasoX * 0.1, dims.pasoY * 3.5);

  const mesaPajaro = crearSecuencia('mesaPajaro', 0.08) as AnimatedSprite;
  mesaPajaro.scale.set(0.35);
  mesaPajaro.position.set(dims.pasoX * 2.4, dims.pasoY * 3.1);

  const florBailarina = crearSecuencia('florBailarina', 0.106) as AnimatedSprite;
  florBailarina.scale.set(0.35);
  florBailarina.position.set(dims.pasoX * 7.2, dims.pasoY * 8.3);

  const cafetera = crearSecuencia('cafetera', 0.111) as AnimatedSprite;
  cafetera.scale.set(0.18);
  cafetera.position.set(dims.pasoX * 6.4, dims.pasoY * 4.3);

  const reloj = crearSecuencia('reloj') as AnimatedSprite;
  reloj.scale.set(0.18);
  reloj.position.set(dims.pasoX * 6.2, dims.pasoY * 3.3);

  const silla = crearSecuencia('silla') as AnimatedSprite;
  silla.scale.set(0.18);
  silla.position.set(dims.pasoX * 5.8, dims.pasoY * 3);

  const sillaLoop = crearSecuencia('sillaLoop') as AnimatedSprite;
  sillaLoop.scale.set(-0.16, 0.16); // Invertido horizontalmente
  sillaLoop.position.set(dims.pasoX * 6.8, dims.pasoY * 2.8);

  const candela = crearSecuencia('candela') as AnimatedSprite;
  candela.scale.set(0.18);
  candela.position.set(dims.pasoX * 6.4, dims.pasoY * 2.2);

  const lechuga = crearSecuencia('lechuga') as AnimatedSprite;
  lechuga.scale.set(0.18);
  lechuga.position.set(dims.pasoX * 9.4, dims.pasoY * 4.3);

  const cocoPicaOjo = crearSecuencia('cocoPicaOjo') as AnimatedSprite;
  cocoPicaOjo.scale.set(-0.38, 0.38);
  cocoPicaOjo.position.set(dims.pasoX * 10.8, dims.pasoY * 0.9);
  // const fondo1 = crearSecuencia('fondo1');
  // // const escupePajaro = crearSecuencia('montañaPajaro');
  // if (!fondo1) return;
  // const proporcion = { x: 1, y: 1 };

  //
  //
  // // fondo1.blendMode = BLEND_MODES.ADD;

  // for (let i = 0; i < 1500; i++) {
  //   const clonsito = crearSecuencia('montañaPajaro');
  //   clonsito.animationSpeed = 0.2;
  //   clonsito.x = Math.random() * aplicacion.screen.width;
  //   clonsito.y = Math.random() * aplicacion.screen.height;
  //   // clonsito.scale.set(Math.random());
  //   clonsito.blendMode = BLEND_MODES.MULTIPLY;

  //   clonsito.gotoAndPlay((Math.random() * 21) | 0);
  // }

  //
  // escupePajaro.play();

  const sol = crearSecuencia('anaSol') as AnimatedSprite;
  let escalaSol = 0.25;
  sol.animationSpeed = 0.2;
  sol.scale.set(escalaSol);
  sol.anchor.set(0.5);
  sol.x = dims.pasoX * 8;
  sol.y = dims.pasoY * 8;
  //

  aplicacion.ticker.add(() => {
    if (sol.y > dims.pasoY * 2) {
      sol.y -= 0.12;
      sol.scale.set(escalaSol);
      // escalaSol += 0.0001;
      // console.log(escalaSol);
    } else {
      // sol.rotation += 0.09;
    }
  });
}
