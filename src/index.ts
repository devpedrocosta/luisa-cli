#!/usr/bin/env node

import cli = require('commander');
import {Version, start, errorCommand} from './util/cli.string';
import {runCreator} from './functions';

cli.version(Version, '-v, --version', 'current version');

cli
    .command('hello')
    .description('Welcome to luisa-cli')
    .action(() => start());

cli
    .command('patch')
    .description('Patch to cli search')
    .action((patch) => runCreator(patch));
cli
    .command('local')
    .description('Current patch')
    .action(() => runCreator(null));

cli.on('command:*', (command) => {
  errorCommand(command);
  process.exitCode = 1;
});

cli.parse(process.argv);
