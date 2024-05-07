import { writeFileSync } from 'node:fs';

const LIBRARIES = ['fast-svg', 'material', 'ionic', 'font-awesome', 'angular', 'ant'];
const LAYOUTS = ['off-screen', 'distributed', 'on-screen'];

let routesData = '';

const MAX_LIST = 101;

const iterator = (iterations: number) => Array.from(Array(iterations).keys());
for (const i in iterator(MAX_LIST)) {
  for (const lib of LIBRARIES) {
    for (const layout of LAYOUTS) {
      routesData += `/${lib}/${layout}/${i}\n`;
    }
  }
}

writeFileSync( 'routes.txt', routesData, { encoding: 'utf8' });
