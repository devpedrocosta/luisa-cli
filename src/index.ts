#!/usr/bin/env node

import cli = require('commander');
import {
  Version,
  getCliInfo,
  getCliName,
  errorCommand,
} from './util/cli.string';
import {runCreator} from './functions';

cli.version(Version, '-v, --version', 'current version');

cli
    .command('hello')
    .description('Welcome to luisa-cli')
    .action(() => {
      getCliName();
      getCliInfo();
    });

cli
    .command('patch <source>')
    .description('Patch to cli search')
    .action((patch) => runCreator(patch));

cli
    .command('pwd')
    .description('Current patch')
    .action(() => runCreator(null));

cli.on('command:*', (command) => {
  console.log(errorCommand(command));
  process.exitCode = 1;
});

cli.parse(process.argv);
