require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/b8NwwDcDXtlW67XiumF8OuQax_VduGhc',
      accounts: ['fc1d41a85f7c251fc30a408d7501afe3f638234e446a2cc0079a5de3e3ad47f1'],
    },
  },
};