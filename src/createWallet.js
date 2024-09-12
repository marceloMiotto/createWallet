//import dependencies
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')
let Node = require('node')

//bitcoin mainnet (main network)
const network = bitcoin.networks.testnet

//derive wallets
const path = `m/49'/1'/0'/0`

//create seed mnemonic
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//root wallet
let root = bip32.fromSeed(seed, network)

//create account pvt-pub keys
let account = root.derivePath(path)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: Node.publicKey,
    network: network,
}).address

console.log("Generated Wallet")
console.log("Address: ", btcAddress)
console.log("Private Key: ", Node.toWIF())
console.log("Seed: ", mnemonic)
