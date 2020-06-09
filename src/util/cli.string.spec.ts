import {errorCommand, getCliInfo, Version, getCliName} from './cli.string';
const command = 'FLag';

describe(' Clii string functions test ', () => {
  it('Should get error on invalid command  ', () => {
    expect(errorCommand([command]))
        .toContain('error: unknown command \'FLag\' , use --help');
  });

  it('Should get  creator name on strng info', () => {
    expect(getCliInfo()).toContain('Pedro Costa');
  });

  it('Should get  version  on strng info', () => {
    expect(getCliInfo()).toContain(Version);
  });

  it('Should get  cli name ', () => {
    expect(getCliName()).toContain('/ _` |_');
  });
});


