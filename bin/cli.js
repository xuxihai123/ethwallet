#!/usr/bin/env node

var program = require('commander');
var fs = require('fs');
var path = require('path');
var generate = require('../lib/generate');
var pkg = require('../package.json');
program
  .version(pkg.version)
  .usage('[options] <privKey> ')
  .option('-k,--key [value]', 'set generate address with private key');
program.on('--help', function() {
  console.log(' please email to x373241884y@email.com');
  console.log(' QQ:373241884');
});
program.parse(process.argv);

function start() {
  const privateKey = program.key;
  if (privateKey) {
    const address = generate.importWallet(privateKey);
    console.log(`resolve eth wallet address: ${address}`);
  } else {
    const generateObj = generate();
    console.log('\tgenerate eth wallet:');
    console.log(`\taddress: ${generateObj.address}\n\tprivKey: ${generateObj.priv}`);
    console.log('tip: please backup your private key! important!');
  }
}

start();
