import chalk = require('chalk');
import figlet = require('figlet');

export const Version = '0.1.0';

export function getCliName(): any {
  return chalk.cyan(figlet.textSync('\nLuisa-CLI'));
}

function getStartFormat(info: { version: string; creator: string }): string {
  return `\n Version: ${info.version}  \n\n Creator: ${info.creator}  \n\n`;
}

export function getCliInfo(): any {
  return chalk.cyan(
      getStartFormat({version: Version, creator: 'Pedro Costa'}),
  );
}

function errorMessage(command: string[]): string {
  return `error: unknown command '${command[0]}' , use --help`;
}

export function errorCommand(command: string[]) {
  return chalk.red(errorMessage(command));
}
