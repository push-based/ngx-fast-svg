import { Options } from 'yargs';
import { updateDocsCommand } from './commands/update-docs';
import * as yargs from 'yargs';
import { YargsCommandObject } from './core/model';
import { updateSvgSizeCommand } from './commands/update-svg-sizes';

const OPTIONS: { [key: string]: Options } = {
  verbose: {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging',
  },
  stats: {
    alias: 's',
    type: 'string',
    description: 'Path to stats.json',
  },
  assets: {
    alias: 'a',
    type: 'string',
    description: 'Path to asset folder',
  },
  target: {
    alias: 't',
    type: 'string',
    description: 'path to markdown file',
  },
  interactive: {
    type: 'boolean',
    description:
      'When false questions are skipped with the values from the suggestions',
    default: true,
  },
};

const COMMANDS: YargsCommandObject[] = [
  updateDocsCommand,
  updateSvgSizeCommand
];

(async () => {
  runCli({ commands: COMMANDS, options: OPTIONS });
})();


export function setupYargs(
  commands: YargsCommandObject[],
  options: { [key: string]: Options }
) {
  commands.forEach((command) => {
    yargs.command(
      command.command,
      command.description,
      () => {},
      command.module.handler
    );
  });
  yargs.options(options).recommendCommands();

  return yargs;
}

export function runCli(cliCfg: {
  commands: YargsCommandObject[];
  options: { [key: string]: Options };
}) {
  setupYargs(cliCfg.commands, cliCfg.options).argv;
}
