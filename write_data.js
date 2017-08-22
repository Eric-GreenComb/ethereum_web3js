var Web3 = require('web3');

const ethereumUri = 'http://localhost:8545';
const address = '0x30e13613b28a66a215fb31a0a5414a78b6bf7801';
const address2 = '0xc2360649ce30487f66d17c7b8326cab259993f01';
const pwd = 'a1111111';

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider(ethereumUri));
}

// web3.personal.unlockAccount(address, pwd);

var newStr = JSON.stringify(process.argv[2]);
var transactionObject = {
    from: address,
    to: address2,
    value: 1000,
    data: web3.toHex(newStr)
};
web3.eth.sendTransaction(transactionObject, function (err, address) {
    if (err) {
        console.log("Transaction err:" + err); // 
    } else {
        console.log("Transaction: " + address); // 	
    }
});