var path = require('path');
var assert = require('assert').strict;
var generate = require('../lib/generate');

// eth.accounts[0]: 	0x7ef5a6135f1fd6a02593eedc869c6d41d934aef8 	balance: 0 ether  976f9f7772781ff6d1c93941129d417c49a209c674056a3cf5e27e225ee55fa8
// eth.accounts[1]: 	0xf466859ead1932d743d622cb74fc058882e8648a 	balance: 0 ether  539f9b4106fb452408e1ee43d177077f057a8fdc1e1fad92c61e68982b4e3c4b
// eth.accounts[2]: 	0x289d485d9771714cce91d3393d764e1311907acc 	balance: 0 ether  14a447d8d4c69714f8750e1688feb98857925e1fec6dee7c75f0079d10519d25

var accounts = [
  {
    account: '0x7ef5a6135f1fd6a02593eedc869c6d41d934aef8',
    privKey: '0x976f9f7772781ff6d1c93941129d417c49a209c674056a3cf5e27e225ee55fa8',
  },
  {
    account: '0xf466859ead1932d743d622cb74fc058882e8648a',
    privKey: '0x539f9b4106fb452408e1ee43d177077f057a8fdc1e1fad92c61e68982b4e3c4b',
  },
  {
    account: '0x289d485d9771714cce91d3393d764e1311907acc',
    privKey: '0x14a447d8d4c69714f8750e1688feb98857925e1fec6dee7c75f0079d10519d25',
  },
];

describe('test eth wallet', function() {
  it('test import eth private key', function() {
    accounts.forEach((temp) => {
      var address = generate.importWallet(temp.privKey);
      assert.ok(address === temp.account);
    });
  });
  it('test generate eth wallet', function() {
    var addressObj = generate();
    var address = generate.importWallet(addressObj.priv);
    assert.ok(address === addressObj.address);
  });
});
