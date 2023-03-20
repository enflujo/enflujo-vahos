import './scss/estilos.scss';
import { AnimatedSprite, Application, BaseTexture, BLEND_MODES, Spritesheet } from 'pixijs';
import datos from './datos';
/**
 * Ancho pantalla FEP: 3328 x 1248
 *
 */
const animaciones: { [nombre: string]: AnimatedSprite } = {};
const texturas: { [nombre: string]: Spritesheet } = {};

const aplicacion = new Application({
  backgroundColor: 0xffffff,
  powerPreference: 'high-performance',
  autoStart: false,
});
document.body.appendChild(aplicacion.view);

console.log(datos);

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
  await crearTextura('fondo1');
  await crearTextura('montañaPajaro');

  const fondo1 = crearSecuencia('fondo1');
  // const escupePajaro = crearSecuencia('montañaPajaro');
  if (!fondo1) return;
  const proporcion = { x: 1, y: 1 };
  console.log(fondo1.texture.orig.width, window.innerWidth / fondo1.texture.orig.width);

  fondo1.animationSpeed = 0.1666;
  fondo1.scale.set(window.innerHeight / fondo1.texture.orig.height);
  // fondo1.blendMode = BLEND_MODES.ADD;
  aplicacion.stage.addChild(fondo1);

  for (let i = 0; i < 20; i++) {
    const clonsito = crearSecuencia('montañaPajaro');
    clonsito.animationSpeed = 0.2;
    console.log(Math.random() * aplicacion.screen.width - 500);
    clonsito.x = Math.random() * aplicacion.screen.width - 500;
    clonsito.y = Math.random() * aplicacion.screen.height - 500;
    // clonsito.scale.set(Math.random());
    clonsito.blendMode = BLEND_MODES.MULTIPLY;

    clonsito?.gotoAndPlay((Math.random() * 21) | 0);
    aplicacion.stage.addChild(clonsito);
  }

  fondo1.play();
  // escupePajaro.play();

  actualizarDimensiones();

  aplicacion.start();
}

function actualizarDimensiones() {
  aplicacion.renderer.resize(window.innerWidth, window.innerHeight);
}

inicio();
