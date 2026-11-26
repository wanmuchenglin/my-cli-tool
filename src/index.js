function run(args) {
  const name = args[0] || 'World';
  console.log(`Hello, ${name}!`);
  return Promise.resolve();
}

module.exports = { run };
