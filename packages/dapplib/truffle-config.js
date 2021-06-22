require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name riot saddle concert hunt neck fresh giant'; 
let testAccounts = [
"0xe3b38c4ddbcde11fb9a26421a9f1c2ce36d852c1b910e8a4253f1192b8843e73",
"0x030229099e5feb8190f693e63d5a855a10f0e1395fc8d8290b3b8c63b730a0a6",
"0x61a129ac8c77e915aa37fd629cbceffb3c4692acecbfd03a01edddb8f22ff6f6",
"0xd685c6ba914c3f498cc153688140a6a3acc97a96637a9d788b66db12f94729d7",
"0x6fcc7e05002ef2f63637f8e47e3b35a1b971c29d031e937654930f8f74a40bbf",
"0xc1fb49ab245721ed1e1966d1ac1229930a24914ec0a817c0ff78eb78278c05d9",
"0xbedd21105cd7f3a8c73dd9d37478321ca3727cd7916f2263d5ca93d9686fa604",
"0xc768d3e1a37dcca35fbdf3bcfbe842faace1385d7440684214e6eaf96c4a15b0",
"0x601c5d61ab755f2ad234d305a66eb23699c8bed6e957185bccbf64a045d621e0",
"0x64ab86f5ba06cf36264e60dafa92015f9d42f242a294da2a39b82ce886db6236"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

