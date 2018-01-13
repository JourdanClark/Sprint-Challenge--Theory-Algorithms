const commands = {
  H: (command) => {
    const reg = /\[([0-9]+);([0-9]+)(([Hf])([\s|\r\n]|$))/;
    if (!reg.test(command))
      return console.error('usage: [Line;ColumnH', 'usage: [Line;Columnf');
    const [_, line, column, id] = reg.exec(command);
    console.log(`Received: ${command}`);
    console.log(`Command: 'Cursor Position'`);
    console.log(`ID: ${id}`);
    console.log(`Line: ${line}`);
    console.log(`Column: ${column}`);
  },
  A: (command) => {
    const reg = /\[([0-9]+)([A])$/;
    if (!reg.test(command))
      return console.error('usage: [ValueA');
    const [_, lines, id] = reg.exec(command);
    console.log(`Received: ${command}`);
    console.log(`Command: 'Cursor Up'`);
    console.log(`ID: ${id}`);
    console.log(`Lines: ${lines}`);
  },
  B: (command) => {
    const reg = /\[([0-9]+)([B])$/;
    if (!reg.test(command))
      return console.error('usage: [ValueB');
    const [_, lines, id] = reg.exec(command);
    console.log(`Received: ${command}`);
    console.log(`Command: 'Cursor Down'`);
    console.log(`ID: ${id}`);
    console.log(`Lines: ${lines}`);
  },
  C: (command) => {
    const reg = /\[([0-9]+)([C])$/;
    if (!reg.test(command))
      return console.error('usage: [ValueC');
    const [_, lines, id] = reg.exec(command);
    console.log(`Received: ${command}`);
    console.log(`Command: 'Cursor Forward'`);
    console.log(`ID: ${id}`);
    console.log(`Lines: ${lines}`);
  },
  D: (command) => {
    const reg = /\[([0-9]+)([D])$/;
    if (!reg.test(command))
      return console.error('usage: [ValueD');
    const [_, lines, id] = reg.exec(command);
    console.log(`Received: ${command}`);
    console.log(`Command: 'Cursor Backward'`);
    console.log(`ID: ${id}`);
    console.log(`Lines: ${lines}`);
  },
  s: (command) => {
    const reg = /\[(s)$/;
    if (!reg.test(command))
      return console.error('usage: [s');
    const [_, id] = reg.exec(command);
    console.log(`Received: ${command}`);
    console.log(`Command: 'Save Cursor Position'`);
    console.log(`ID: ${id}`);
  },
  u: (command) => {
    const reg = /\[(u)$/;
    if (!reg.test(command))
      return console.error('usage: [u');
    const [_, id] = reg.exec(command);
    console.log(`Received: ${command}`);
    console.log(`Command: 'Restore Cursor Position'`);
    console.log(`ID: ${id}`);
  },
  '2J': (command) => {
    const reg = /\[(2J)$/;
    if (!reg.test(command))
      return console.error('usage: [2J');
    const [_, id] = reg.exec(command);
    console.log(`Received: ${command}`);
    console.log(`Command: 'Erase Display'`);
    console.log(`ID: ${id}`);
  },
  K: (command) => {
    const reg = /\[(K)$/;
    if (!reg.test(command))
      return console.error('usage: [K');
    const [_, id] = reg.exec(command);
    console.log(`Received: ${command}`);
    console.log(`Command: 'Erase Line'`);
    console.log(`ID: ${id}`);
  },
  m: (command) => {
    const reg = /\[((?:4[0-7]|3[0-7]|[0-8])(?:;(?:4[0-7]|3[0-7]|[0-8]))*)(m)$/;
    const extract = /[0-9]{1,2}/g;
    if (!reg.test(command))
      return console.error('usage: Esc[Value;...;Valuem');
    const [_, values, id] = reg.exec(command);
    const extracted = values.match(extract);
    console.log(`Received: ${command}`);
    console.log(`Command: 'Set Graphics Mode'`);
    console.log(`ID: ${id}`);
    console.log(`Values: ${extracted.join(', ')}`);
  },
  h: (command) => {
    const reg = /\[=([0-7]|1[3-9])(h)$/;
    if (!reg.test(command))
      return console.error('usage: Esc[=Valueh');
    const [_, value, id] = reg.exec(command);
    console.log(`Received: ${command}`);
    console.log(`Command: 'Set Mode'`);
    console.log(`ID: ${id}`);
    console.log(`Value: ${value}`);
  },
  l: (command) => {
    const reg = /\[=([0-7]|1[3-9])(l)$/;
    if (!reg.test(command))
      return console.error('usage: Esc[=Valuel');
    const [_, value, id] = reg.exec(command);
    console.log(`Received: ${command}`);
    console.log(`Command: 'Reset Mode'`);
    console.log(`ID: ${id}`);
    console.log(`Value: ${value}`);
  },
  // p: (command) => { this would've taken waaaaayyy too much time
  //   console.log(`Command: 'Set Keyboard Strings'`)
  // }
};

const addAlias = (base, ...aliases) => {
  for (let alias of aliases)
    Object.defineProperty(commands, alias, {
      get: () => commands[base],
      set: (_) => undefined
    });
}

addAlias('H', 'f');

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: asciiCommands command");
  process.exit(2);
}

let [command] = args;

const reg = /(2J)$|([A-Za-z])$/;

if (!reg.test(command)) {
  console.error('Invalid command!')
  process.exit(2);
}

const [ commandID ] = reg.exec(command);

commands[commandID](command);
