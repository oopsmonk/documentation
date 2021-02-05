# Chrysalis Cheat Sheet

All information in short!

## Node Software
- [hornet (branch: develop)](https://github.com/gohornet/hornet/tree/develop)
- [bee (branch: chrysalis-pt-2)](https://github.com/iotaledger/bee/tree/chrysalis-pt-2)

## Node API
- [rest-api specification](https://github.comeditor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/rest-api.yaml)

## Libraries
- [iota.rs](https://github.com/iotaledger/iota.rs)
    - [Node.js](https://github.com/iotaledger/iota.rs/tree/dev/bindings/node)
- [wallet.rs](https://github.com/iotaledger/wallet.rs)
    - [Node.js](https://github.com/iotaledger/wallet.rs/tree/develop/bindings/nodejs)


## Infrastructure
Nodes deployed to the testnet can be queried using a load balancer at:

- api.lb-0.testnet.chrysalis2.com

We recommend using the load balancer for most scenarios.

Single node endpoints that expose native MQTT in case you need this are:

- api.hornet-0.testnet.chrysalis2.com
- api.hornet-1.testnet.chrysalis2.com
- api.hornet-2.testnet.chrysalis2.com
- api.hornet-3.testnet.chrysalis2.com

## Developer Tools
- [Explorer](https://explorer.iota.org/chrysalis)
- [Online Faucet](https://faucet.testnet.chrysalis2.com/)
- [cli-wallet](https://github.com/iotaledger/cli-wallet)
- [chrysalis-faucet Code (nodejs + svelte)](https://github.com/iotaledger/chrysalis-faucet)
