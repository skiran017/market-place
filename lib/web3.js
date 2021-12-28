import Web3 from 'web3';
import PrismSale from './PrismSale.json';

const web3 = new Web3(Web3.givenProvider || 'ws://127.0.0.1:7545');

// const contractAddress = '0x8019f0F2879B0104799c57D756fc804CFA3e3D91';
const contractAddress = '0xD8ef9c98F9101BC6AAb8d206202896b54ce8f016';

// use contract address and abi(application binary interface) from the PrismSale.sol
const contract = new web3.eth.Contract(PrismSale.abi, contractAddress);

const sharedMessage =
  'This is to confirm your account when downloading the limited edition album';

export { web3, contract, contractAddress, sharedMessage };
