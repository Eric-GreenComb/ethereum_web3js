var fs = require('fs');
var solc = require('solc');
var Web3 = require('web3');

const ethereumUri = 'http://localhost:8545';
const address = '0x02359fa0cab1ee4e44e411d97ce2c9c7517a7ccf';
const pwd = 'a1111111';
const contractPath = "./contracts/SimpleContract.sol";

const myContractAddress = '0xd3e86631a7426ab88259a3cc1299c76d0123c956';

/*
* Connect to ethereum
*/ 
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider(ethereumUri));
}
if (!web3.isConnected()){
    throw new Error('unable to connect to ethereum node at ' + ethereumUri);
} else {
    console.log('connected to ehterum node at ' + ethereumUri);
}

/*
* Compile Contract and Fetch ABI, bytecode
*/ 
var source = fs.readFileSync(contractPath, 'utf8');
var compiledContract = solc.compile(source);
for (var contractName in compiledContract.contracts) {
    var bytecode = compiledContract.contracts[contractName].bytecode;
    var abi = JSON.parse(compiledContract.contracts[contractName].interface);
}

// web3.personal.unlockAccount(address, pwd);

var myContract = web3.eth.contract(abi).at(myContractAddress);

console.log(myContract.value().toString());
