# ethereum_web3js
ethereum web3js(0.19.0) demo

## npm install package
npm install web3@0.19.0 --save

npm install solc --save

npm install fs --save

## run geth
testrpc

cd contracts

solc -o . --optimize --bin --abi SimpleContract.sol

## call web3js

node deploy_contract.js

node call_contract.js 101 text

node get_contract.js

node read_data.js

node watch_transaction.js(other console run : node call_contract.js 102 text)

node write_data.js




