# ethereum_web3js
ethereum web3js(0.19.0) demo

## npm install package
npm install

npm install web3@0.19.0 --save

npm install solc --save

npm install fs --save

## run geth
testrpc

cd contracts

solc -o . --bin --abi SimpleContract.sol

## call web3js

node sc_deploy.js

node sc_set.js 101 text

node sc_get.js

node read_data.js

node watch_transaction.js(other console run : node call_contract.js 102 text)

node write_data.js

## call metacoin

node deploy_convertlib.js

solc --optimize --abi --bin MetaCoin.sol | solc --link --libraries ConvertLib.sol:ConvertLib:0xba548b80b1920d84f1052f88c645c5a7930999a4

solc --abi --bin MetaCoin.sol | solc --link --libraries ConvertLib.sol:ConvertLib:0xb23ce1eaf72508e49266514a7c0f8d4c1de0bb2e

solc --optimize --abi --bin MetaCoin.sol --link ConvertLib.sol 

myContract.address = 0xba548b80b1920d84f1052f88c645c5a7930999a4






