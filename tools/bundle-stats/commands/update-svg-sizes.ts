import { YargsCommandObject } from '../core/model';
import { getCliParam } from '../core/utils';
import { countSvgElements, formatBytes, readFile } from '../utils';
import * as fs from 'fs';
import * as path from 'path';
import { doc } from 'prettier';

export async function run(): Promise<void> {
  const folderPath: string = getCliParam(['folder', 's']) || '';
  const readmePath: string = getCliParam(['target', 't']) || './readme.md';

  console.log('folderPath', folderPath)
  const fileNames = fs.readdirSync(folderPath);
  const readme = readFile(readmePath, 'string');

  const [top, rest] = readme.split('<!-- file-info-start -->');
  if (rest === undefined) {
    throw new Error(
      `The target file does not contain valid tags. "<!-- file-info-start -->" & "<!-- file-info-end -->"`
    );
  }
  const [_, bottom] = rest.split('<!-- file-info-end -->');

  const initialAssets = fileNames.map(fileName => {
    const filePath = path.join(folderPath,fileName);
    return ({
      name: fileName,
      size: fs.statSync(filePath).size,
      elements: countSvgElements(fs.readFileSync(filePath, {encoding: 'utf8'}).toString())
    })
  });


  let statsContent =
    top +
    `
<!-- file-info-start -->
| Names             |       Size |       Elements |
| ---               | ---        | ---            |`;

  initialAssets.forEach(({name, size, elements}) => {
    statsContent += `
| ${name}           | ${formatBytes(size)} | ${elements}`;
  });

  statsContent += `<!-- file-info-end -->` + bottom;

  fs.writeFileSync(readmePath, statsContent);
}

const command = 'update-svg-size';

export const updateSvgSizeCommand: YargsCommandObject = {
  command,
  description: 'Update related markdown files with latest svg sizes',
  module: {
    handler: async (argv) => {
      if (argv.verbose) console.info(`run "${command}" as a yargs command`);

      await run();
    },
  },
};
