var fs = require('fs');
var solc = require('solc');
var Web3 = require('web3');

const ethereumUri = 'http://localhost:8545';
const address = '0xab131eea9761dedf57fb6df9f0582310c331ffa9';
const pwd = 'a1111111';

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

/*
* Deploy contract
*/
var bytecode = '0x6060604052341561000f57600080fd5b5b6127106000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5b6103bf806100666000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005457806390b98a11146100a1578063f8b2cb4f146100fb575b600080fd5b341561005f57600080fd5b61008b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610148565b6040518082815260200191505060405180910390f35b34156100ac57600080fd5b6100e1600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506101f1565b604051808215151515815260200191505060405180910390f35b341561010657600080fd5b610132600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061034a565b6040518082815260200191505060405180910390f35b600073b23ce1eaf72508e49266514a7c0f8d4c1de0bb2e6396e4ee3d61016d8461034a565b60026000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b15156101ce57600080fd5b6102c65a03f415156101df57600080fd5b5050506040518051905090505b919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102425760009050610344565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b9190505600a165627a7a72305820673312918c475e18c431887996ddb85985c2118e97005a7652ab6f2ade30d97d0029';
var abi = '[{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]';

// web3.personal.unlockAccount(address, pwd);
var gasEstimate = web3.eth.estimateGas({ data: bytecode });
console.log('gasEstimate = ' + gasEstimate);

var MyContract = web3.eth.contract(abi);
console.log('deploying contract...');
console.log(MyContract);

var myContractReturned = MyContract.new({
    from: address,
    data: bytecode,
    gas: gasEstimate
}, function (err, myContract) {
    if (!err) {
        if (!myContract.address) {
            console.log(`myContract.transactionHash = ${myContract.transactionHash}`);
        } else {
            console.log(`myContract.address = ${myContract.address}`);
            return;
        }
    } else {
        console.log(err);
    }
});
