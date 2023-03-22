import { AnimatedSprite } from 'pixijs';
import losDias from './canciones/losDias';
import './scss/estilos.scss';
import { crearSecuencia, cargarTexturas, crearAplicacion, mostrarTodas } from './utilidades/ayudas';

/**
 * Ancho pantalla FEP: 3328 x 1248
 *
 */

const dims = { ancho: 0, alto: 0, pasoX: 0, pasoY: 0 };
const aplicacion = crearAplicacion();
let cancion = 'losDias';
let elementosLosDias: { [nombre: string]: AnimatedSprite };

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

  if (cancion === 'losDias') {
    elementosLosDias = losDias(dims);
    mostrarTodas();
  }

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

  //

  aplicacion.ticker.add(() => {
    if (cancion === 'losDias') {
      const { sol } = elementosLosDias;
      if (sol.y > dims.pasoY * 2) {
        sol.y -= 0.12;

        // escalaSol += 0.0001;
        // console.log(escalaSol);
      } else {
        // sol.rotation += 0.09;
      }
    }
  });
}
