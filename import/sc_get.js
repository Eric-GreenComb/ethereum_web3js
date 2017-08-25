var fs = require('fs');
var solc = require('solc');
var Web3 = require('web3');

const ethereumUri = 'http://localhost:8545';
const address = '0x73e091f128342f54595f6bde83970cb5ec84a6bf';
const pwd = 'a1111111';

const myContractAddress = '0x9d5564831b075fecb2847ac1d9e9f4f8c82fdd52';

/*
* Connect to ethereum
*/
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider(ethereumUri));
}
if (!web3.isConnected()) {
    throw new Error('unable to connect to ethereum node at ' + ethereumUri);
} else {
    console.log('connected to ehterum node at ' + ethereumUri);
}

//var contractInfo = JSON.parse('{"contract_name":"MetaCoin","abi":[{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}],"unlinked_binary":"0x6060604052341561000f57600080fd5b5b600160a060020a033216600090815260208190526040902061271090555b5b6102728061003e6000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416637bd703e8811461005357806390b98a1114610084578063f8b2cb4f146100ba575b600080fd5b341561005e57600080fd5b610072600160a060020a03600435166100eb565b60405190815260200160405180910390f35b341561008f57600080fd5b6100a6600160a060020a036004351660243561018f565b604051901515815260200160405180910390f35b34156100c557600080fd5b610072600160a060020a0360043516610227565b60405190815260200160405180910390f35b600073__ConvertLib____________________________6396e4ee3d61011084610227565b60026000604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff85160281526004810192909252602482015260440160206040518083038186803b151561016d57600080fd5b6102c65a03f4151561017e57600080fd5b50505060405180519150505b919050565b600160a060020a033316600090815260208190526040812054829010156101b857506000610221565b600160a060020a033381166000818152602081905260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060015b92915050565b600160a060020a0381166000908152602081905260409020545b9190505600a165627a7a723058208c47f321f5e9b964d0561a10bec8c9bb1205f40dcacf05b80ec49595c256d29f0029","networks":{"1503570295892":{"events":{"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{"ConvertLib":"0x26a952ee717dcae88b77668d8be13aeee08242fa"},"address":"0x9c0e79dc0b0778754841b5024c2dddcf734c6339","updated_at":1503571199747},"1503579124716":{"events":{"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}},"links":{"ConvertLib":"0xf3e477d9d6da6612f306c2db9749bce619c83d3c"},"address":"0xc5adc20bfb8a45c472b5b5923f3ecfb46c0c6ded","updated_at":1503580192992}},"schema_version":"0.0.5","updated_at":1503580192992}');
var abi = [{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}];

// web3.personal.unlockAccount(address, pwd);

var myContract = web3.eth.contract(abi).at(myContractAddress);

// console.log(web3.eth.accounts[0]);

console.log(myContract.getBalance.call(process.argv[2]).toString());
