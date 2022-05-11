require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture bread tail tragic educate ranch remind assume hover local frame sentence'; 
let testAccounts = [
"0x849e4fe1847fae0c4e2bb954dcf8a1aa2d55ca2f1cfbdc5adbd9d8bde5c6733a",
"0x9c6cacacae0f2592facb8b37240a5ff2b2573fa16663ef9ff763aad198518c2b",
"0x72fdd3a7755f88c2aa8601103f96935afa63a75a6662ce78555190d5354cd36c",
"0x6fe447bc94e4072d4789628f0d7f3489231994d98fda526b9eca2874994e2733",
"0xd25ced3ae83166e6e8f15a645cdede096c18a75901428760a135d4eff8a2a329",
"0x45499931203b39105fc4ffb850c69107265ee629888a31cffea500ac2f48f69d",
"0xe01d448031599d25e7060d8f07acdcb55e9bf680bcfc36e1d79723c1979ce5a3",
"0xff9b771183dbaa22d9cad1dab0f7de7d8a1971dd019c53eac0488dac764abd41",
"0x5344c418513d7f009c8adef76443845835da7052e55bdb89da3396c8fa7d6cdb",
"0x5a2842333bd825a364bee10d1f54a953a2e48c51889385844bd2de1649a315d0"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


