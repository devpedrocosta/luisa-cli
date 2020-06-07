import chalk = require('chalk');
import figlet = require('figlet');

export const Version = '1.0.0';

export function start() {
  console.log(chalk.cyan(figlet.textSync('\nLuisa-CLI')));
  console.log(
    chalk.cyan('\n Version: %s  \n\n Creator: %s  \n\n'),
    Version,
    'Pedro costa',
  );
}

export function errorCommand(command: string[]) {
  console.error(
    chalk.red(`\nerror: unknown command '${command[0]}' , use --help \n`),
  );
}
