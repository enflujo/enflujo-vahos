import './scss/estilos.scss';
import { AnimatedSprite, Application, BaseTexture, BLEND_MODES, Spritesheet } from 'pixijs';
import datos from './datos';
/**
 * Ancho pantalla FEP: 3328 x 1248
 *
 */
const animaciones: { [nombre: string]: AnimatedSprite } = {};
const texturas: { [nombre: string]: Spritesheet } = {};
const dims = { ancho: 0, alto: 0, pasoX: 0, pasoY: 0 };
console.log(datos);
const aplicacion = new Application({
  backgroundColor: 0xffffe6,
  // backgroundColor: 0xffffff,
  powerPreference: 'high-performance',
  autoStart: false,
});
document.body.appendChild(aplicacion.view);

async function crearTextura(nombre: string) {
  const datosTextura = datos[nombre];
  const textura = new Spritesheet(BaseTexture.from(datosTextura.fuente), datosTextura);
  await textura.parse();

  texturas[nombre] = textura;
}

function crearSecuencia(nombre: string) {
  if (!texturas[nombre]) return;
  return new AnimatedSprite(texturas[nombre].animations.anim);
}

async function inicio() {
  actualizarDimensiones();
  await crearTextura('anaSol');
  await crearTextura('fondo1');
  await crearTextura('fondo2');
  await crearTextura('fondo3');
  await crearTextura('montañaPajaro');
  await crearTextura('fondo4');
  await crearTextura('arbolSol');
  await crearTextura('giraSol');
  await crearTextura('pasto');
  await crearTextura('montañaArboles');
  await crearTextura('lampara');
  await crearTextura('floresExplosivas');
  await crearTextura('pescadini');
  await crearTextura('monstruoMar');
  await crearTextura('floresBarbaras');
  await crearTextura('iguanas');
  await crearTextura('pajaroVolador');
  await crearTextura('flores');
  await crearTextura('arbolLloron');
  await crearTextura('hueco1');
  await crearTextura('manoPajaro');
  await crearTextura('nube1');
  await crearTextura('arbolNube');
  await crearTextura('arbolNubeLoop');
  await crearTextura('pajaroBailarin');
  await crearTextura('cocoCantaor');
  await crearTextura('mar');
  await crearTextura('dimensionAstral');
  await crearTextura('fondo5');
  await crearTextura('arbolSeco');
  await crearTextura('arbolSeco2');
  await crearTextura('arbolSeco3');
  await crearTextura('moscas');
  await crearTextura('pajarera');
  await crearTextura('floresitas');
  await crearTextura('matorral');
  await crearTextura('hueco2');
  await crearTextura('huecoSol');
  await crearTextura('arbolLloronLoop');
  await crearTextura('huecoNube');
  await crearTextura('hueco3');
  await crearTextura('mesaPajaro');
  await crearTextura('florBailarina');

  const fondo1 = crearSecuencia('fondo1');
  fondo1.animationSpeed = 0.1666;
  fondo1?.scale.set(0.3);
  fondo1.y = dims.pasoY * 2;
  fondo1.play();
  fondo1.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(fondo1);
  //

  const fondo2 = crearSecuencia('fondo2');
  fondo2.animationSpeed = 0.1666;
  fondo2?.scale.set(0.3);
  fondo2?.anchor.set(-1, -1);
  fondo2?.play();
  fondo2.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(fondo2);

  const fondo3 = crearSecuencia('fondo3');
  fondo3.animationSpeed = 0.1666;
  fondo3?.scale.set(0.3);
  fondo3.position.set(-dims.pasoX * 0.5, dims.pasoY * 6);
  fondo3.rotation = 0.2;
  fondo3?.play();
  fondo3.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(fondo3);

  const escupePajaro = crearSecuencia('montañaPajaro');
  escupePajaro.animationSpeed = 0.1666;
  escupePajaro?.scale.set(0.2);
  escupePajaro.position.set(dims.pasoX * 4, dims.pasoY * 6.4);
  escupePajaro?.play();
  escupePajaro.alpha = 0.7;
  escupePajaro.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(escupePajaro);

  const fondo4 = crearSecuencia('fondo4');
  fondo4.animationSpeed = 0.1666;
  fondo4?.scale.set(0.2);
  fondo4.position.set(dims.pasoX * 4, dims.pasoY * 6.8);
  fondo4?.play();
  fondo4.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(fondo4);

  const arbolSol = crearSecuencia('arbolSol');
  arbolSol.animationSpeed = 0.1666;
  arbolSol?.scale.set(0.1);
  arbolSol.position.set(dims.pasoX * 0.9, dims.pasoY * 2.4);
  arbolSol?.play();
  arbolSol.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(arbolSol);

  const giraSol = crearSecuencia('giraSol');
  giraSol.animationSpeed = 0.1666;
  giraSol?.scale.set(0.25);
  giraSol.position.set(dims.pasoX * 9, dims.pasoY * 3);
  giraSol?.play();
  giraSol.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(giraSol);

  const pasto = crearSecuencia('pasto');
  pasto.animationSpeed = 0.1;
  pasto?.scale.set(0.25);
  pasto.position.set(dims.pasoX * 9.2, dims.pasoY * 9.8);
  // pasto.anchor.set(-1, -3);
  pasto.rotation = -0.35;
  pasto?.play();
  pasto.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(pasto);

  const montañaArboles = crearSecuencia('montañaArboles');
  montañaArboles.animationSpeed = 0.1;
  montañaArboles?.scale.set(0.25);
  montañaArboles.position.set(dims.pasoX * 3, dims.pasoY * 8);
  montañaArboles?.play();
  montañaArboles.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(montañaArboles);

  const lampara = crearSecuencia('lampara');
  lampara.animationSpeed = 0.1;
  lampara?.scale.set(0.25);
  lampara.position.set(dims.pasoX * 6, dims.pasoY * 4);
  lampara?.play();
  lampara.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(lampara);

  const floresExplosivas = crearSecuencia('floresExplosivas');
  floresExplosivas.animationSpeed = 0.1;
  floresExplosivas?.scale.set(0.25);
  floresExplosivas.position.set(dims.pasoX * 6, dims.pasoY * 4);
  floresExplosivas?.play();
  floresExplosivas.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(floresExplosivas);

  const pescadini = crearSecuencia('pescadini');
  pescadini.animationSpeed = 0.1;
  pescadini?.scale.set(0.3);
  pescadini.position.set(dims.pasoX * 3, dims.pasoY * 1);
  pescadini?.play();
  pescadini.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(pescadini);

  const monstruoMar = crearSecuencia('monstruoMar');
  monstruoMar.animationSpeed = 0.1;
  monstruoMar?.scale.set(0.4);
  monstruoMar.position.set(dims.pasoX * 5, dims.pasoY * 5.8);
  monstruoMar?.play();
  monstruoMar.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(monstruoMar);

  const floresBarbaras = crearSecuencia('floresBarbaras');
  floresBarbaras.animationSpeed = 0.1666;
  floresBarbaras?.scale.set(0.3);
  floresBarbaras.position.set(dims.pasoX * 1.5, dims.pasoY * 4.5);
  floresBarbaras?.play();
  floresBarbaras.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(floresBarbaras);

  const iguanas = crearSecuencia('iguanas');
  iguanas.animationSpeed = 0.1666;
  iguanas?.scale.set(0.3);
  iguanas.position.set(dims.pasoX * 7, dims.pasoY * 2);
  iguanas?.play();
  iguanas.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(iguanas);

  const pajaroVolador = crearSecuencia('pajaroVolador');
  pajaroVolador.animationSpeed = 0.1666;
  pajaroVolador?.scale.set(0.3);
  pajaroVolador.position.set(dims.pasoX * 1.4, dims.pasoY * 0.5);
  pajaroVolador?.play();
  pajaroVolador.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(pajaroVolador);

  const flores = crearSecuencia('flores');
  flores.animationSpeed = 0.1666;
  flores?.scale.set(0.18);
  flores.position.set(dims.pasoX * 6.5, dims.pasoY * 3.6);
  flores?.play();
  flores.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(flores);

  const arbolLloron = crearSecuencia('arbolLloron');
  arbolLloron.animationSpeed = 0.1666;
  arbolLloron?.scale.set(0.3);
  arbolLloron.position.set(dims.pasoX * 2.8, dims.pasoY * 6);
  arbolLloron?.play();
  arbolLloron.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(arbolLloron);

  const hueco1 = crearSecuencia('hueco1');
  hueco1.animationSpeed = 0.1666;
  hueco1?.scale.set(0.2);
  hueco1.position.set(dims.pasoX * 9, dims.pasoY * 8);
  hueco1?.play();
  hueco1.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(hueco1);

  const manoPajaro = crearSecuencia('manoPajaro');
  manoPajaro.animationSpeed = 0.1666;
  manoPajaro?.scale.set(0.25);
  manoPajaro.position.set(dims.pasoX * 6, dims.pasoY * 8);
  manoPajaro?.play();
  manoPajaro.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(manoPajaro);

  const nube1 = crearSecuencia('nube1');
  nube1.animationSpeed = 0.1666;
  nube1?.scale.set(0.25);
  nube1.position.set(dims.pasoX * 5, dims.pasoY * 0.2);
  nube1?.play();
  nube1.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(nube1);

  const arbolNube = crearSecuencia('arbolNube');
  arbolNube.animationSpeed = 0.1666;
  arbolNube?.scale.set(0.32);
  arbolNube.position.set(dims.pasoX * 0.2, dims.pasoY * 4);
  arbolNube?.play();
  arbolNube.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(arbolNube);

  const arbolNubeLoop = crearSecuencia('arbolNubeLoop');
  arbolNubeLoop.animationSpeed = 0.116;
  arbolNubeLoop?.scale.set(0.33);
  arbolNubeLoop.position.set(dims.pasoX * 10, dims.pasoY * 4.7);
  arbolNubeLoop?.play();
  arbolNubeLoop.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(arbolNubeLoop);

  const pajaroBailarin = crearSecuencia('pajaroBailarin');
  pajaroBailarin.animationSpeed = 0.12;
  pajaroBailarin?.scale.set(0.5);
  pajaroBailarin.position.set(dims.pasoX * 7, dims.pasoY * 4);
  pajaroBailarin?.play();
  pajaroBailarin.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(pajaroBailarin);

  const cocoCantaor = crearSecuencia('cocoCantaor');
  cocoCantaor.animationSpeed = 0.166;
  cocoCantaor?.scale.set(0.43);
  cocoCantaor.position.set(dims.pasoX * 3, dims.pasoY * 9);
  cocoCantaor?.play();
  cocoCantaor.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(cocoCantaor);

  const mar = crearSecuencia('mar');
  mar.animationSpeed = 0.166;
  mar?.scale.set(0.43);
  mar.position.set(dims.pasoX * 7.8, dims.pasoY * 5.5);
  mar?.play();
  mar.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(mar);

  const dimensionAstral = crearSecuencia('dimensionAstral');
  dimensionAstral.animationSpeed = 0.166;
  dimensionAstral?.scale.set(0.43);
  dimensionAstral.position.set(dims.pasoX * 7.6, dims.pasoY * 8);
  dimensionAstral?.play();
  dimensionAstral.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(dimensionAstral);

  const fondo5 = crearSecuencia('fondo5');
  fondo5.animationSpeed = 0.166;
  fondo5?.scale.set(0.43);
  fondo5.position.set(dims.pasoX * 8.4, dims.pasoY * 1);
  fondo5?.play();
  fondo5.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(fondo5);

  const arbolSeco = crearSecuencia('arbolSeco');
  arbolSeco.animationSpeed = 0.166;
  arbolSeco?.scale.set(0.25);
  arbolSeco.position.set(dims.pasoX * 9.5, dims.pasoY * 4.7);
  arbolSeco?.play();
  arbolSeco.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(arbolSeco);

  const arbolSeco2 = crearSecuencia('arbolSeco2');
  arbolSeco2.animationSpeed = 0.166;
  arbolSeco2?.scale.set(0.43);
  arbolSeco2.position.set(dims.pasoX * 8.3, dims.pasoY * 4.1);
  arbolSeco2?.play();
  arbolSeco2.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(arbolSeco2);

  const arbolSeco3 = crearSecuencia('arbolSeco3');
  arbolSeco3.animationSpeed = 0.166;
  arbolSeco3?.scale.set(0.23);
  arbolSeco3.position.set(dims.pasoX * 4.3, dims.pasoY * 2.5);
  arbolSeco3?.play();
  arbolSeco3.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(arbolSeco3);

  const moscas = crearSecuencia('moscas');
  moscas.animationSpeed = 0.116;
  moscas?.scale.set(0.53);
  moscas.position.set(dims.pasoX * 6, dims.pasoY * 6);
  moscas?.play();
  moscas.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(moscas);

  const pajarera = crearSecuencia('pajarera');
  pajarera.animationSpeed = 0.116;
  pajarera?.scale.set(0.43);
  pajarera.position.set(dims.pasoX * 8, dims.pasoY * 4);
  pajarera?.play();
  pajarera.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(pajarera);

  const floresitas = crearSecuencia('floresitas');
  floresitas.animationSpeed = 0.116;
  floresitas?.scale.set(0.33);
  floresitas.position.set(dims.pasoX * 0.2, dims.pasoY * 9);
  floresitas?.play();
  floresitas.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(floresitas);

  const matorral = crearSecuencia('matorral');
  matorral.animationSpeed = 0.116;
  matorral?.scale.set(0.33);
  matorral.position.set(dims.pasoX * 9.7, dims.pasoY * 7.2);
  matorral?.play();
  matorral.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(matorral);

  const hueco2 = crearSecuencia('hueco2');
  hueco2.animationSpeed = 0.116;
  hueco2?.scale.set(0.23);
  hueco2.position.set(dims.pasoX * 4.6, dims.pasoY * 9.8);
  hueco2?.play();
  hueco2.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(hueco2);

  const huecoSol = crearSecuencia('huecoSol');
  huecoSol.animationSpeed = 0.166;
  huecoSol?.scale.set(0.33);
  huecoSol.position.set(dims.pasoX * 0.6, dims.pasoY * 5.8);
  huecoSol?.play();
  huecoSol.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(huecoSol);

  const arbolLloronLoop = crearSecuencia('arbolLloronLoop');
  arbolLloronLoop.animationSpeed = 0.166;
  arbolLloronLoop?.scale.set(0.13);
  arbolLloronLoop.position.set(dims.pasoX * 9.1, dims.pasoY * 0.5);
  arbolLloronLoop?.play();
  arbolLloronLoop.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(arbolLloronLoop);

  const huecoNube = crearSecuencia('huecoNube');
  huecoNube.animationSpeed = 0.166;
  huecoNube?.scale.set(0.13);
  huecoNube.position.set(dims.pasoX * 5.6, dims.pasoY * 2.5);
  huecoNube?.play();
  huecoNube.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(huecoNube);

  const hueco3 = crearSecuencia('hueco3');
  hueco3.animationSpeed = 0.166;
  hueco3?.scale.set(0.05);
  hueco3.position.set(dims.pasoX * 0.1, dims.pasoY * 3.5);
  hueco3?.play();
  hueco3.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(hueco3);

  const mesaPajaro = crearSecuencia('mesaPajaro');
  mesaPajaro.animationSpeed = 0.116;
  mesaPajaro?.scale.set(0.35);
  mesaPajaro.position.set(dims.pasoX * 6.4, dims.pasoY * 3.1);
  mesaPajaro?.play();
  mesaPajaro.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(mesaPajaro);

  const florBailarina = crearSecuencia('florBailarina');
  florBailarina.animationSpeed = 0.1;
  florBailarina?.scale.set(0.35);
  florBailarina.position.set(dims.pasoX * 7.2, dims.pasoY * 8.3);
  florBailarina?.play();
  florBailarina.blendMode = BLEND_MODES.MULTIPLY;
  aplicacion.stage.addChild(florBailarina);

  // const fondo1 = crearSecuencia('fondo1');
  // // const escupePajaro = crearSecuencia('montañaPajaro');
  // if (!fondo1) return;
  // const proporcion = { x: 1, y: 1 };

  //
  //
  // // fondo1.blendMode = BLEND_MODES.ADD;
  // aplicacion.stage.addChild(fondo1);

  // for (let i = 0; i < 1500; i++) {
  //   const clonsito = crearSecuencia('montañaPajaro');
  //   clonsito.animationSpeed = 0.2;
  //   clonsito.x = Math.random() * aplicacion.screen.width;
  //   clonsito.y = Math.random() * aplicacion.screen.height;
  //   // clonsito.scale.set(Math.random());
  //   clonsito.blendMode = BLEND_MODES.MULTIPLY;

  //   clonsito?.gotoAndPlay((Math.random() * 21) | 0);
  //   aplicacion.stage.addChild(clonsito);
  // }

  //
  // escupePajaro.play();

  const sol = crearSecuencia('anaSol');
  let escalaSol = 0.25;
  console.log(sol);
  sol.animationSpeed = 0.2;
  sol.scale.set(escalaSol);
  sol.anchor.set(0.5);
  sol.x = dims.pasoX * 8;
  sol.y = dims.pasoY * 8;
  sol.blendMode = BLEND_MODES.MULTIPLY;
  sol?.play();
  //
  aplicacion.stage.addChild(sol);

  aplicacion.start();

  let tick = 0;
  aplicacion.ticker.add(() => {
    if (sol.y > dims.pasoY * 2) {
      sol.y -= 0.12;
      sol.scale.set(escalaSol);
      // escalaSol += 0.0001;
      // console.log(escalaSol);
    } else {
      // sol.rotation += 0.09;
    }
    // // iterate through the sprites and update their position
    // for (let i = 0; i < maggots.length; i++) {
    //     const dude = maggots[i];
    //     dude.scale.y = 0.95 + Math.sin(tick + dude.offset) * 0.05;
    //     dude.direction += dude.turningSpeed * 0.01;
    //     dude.x += Math.sin(dude.direction) * (dude.speed * dude.scale.y);
    //     dude.y += Math.cos(dude.direction) * (dude.speed * dude.scale.y);
    //     dude.rotation = -dude.direction + Math.PI;

    //     // wrap the maggots
    //     if (dude.x < dudeBounds.x) {
    //         dude.x += dudeBounds.width;
    //     } else if (dude.x > dudeBounds.x + dudeBounds.width) {
    //         dude.x -= dudeBounds.width;
    //     }

    //     if (dude.y < dudeBounds.y) {
    //         dude.y += dudeBounds.height;
    //     } else if (dude.y > dudeBounds.y + dudeBounds.height) {
    //         dude.y -= dudeBounds.height;
    //     }
    // }

    // increment the ticker
    tick += 0.1;
  });
}

function actualizarDimensiones() {
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  aplicacion.renderer.resize(ancho, alto);
  dims.ancho = ancho;
  dims.alto = alto;
  dims.pasoX = ancho / 11;
  dims.pasoY = alto / 11;
  console.log(dims);
}

inicio();
