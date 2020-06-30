# Choose an installation method

**In this topic, you choose how to install and run a private Tangle.**

The option you choose will affect whether you can use the light wallet or the Trinity wallet applications to attach transactions to your private Tangle.

[Trinity](root://wallets/0.1/trinity/introduction/overview.md) is the official IOTA  wallet for macOS, Windows, Linux, iOS, and Android. This wallet allows you to connect only to nodes that support HTTPS.

The [light wallet](https://github.com/iotaledger/wallet) is a deprecated wallet that you can use to test your private Tangle. The light wallet is easier to set up because it does not require your node to use HTTPS.

|**Setup option**|**Light wallet**|**Trinity**|
|:----|:----|:----|
|[Run Compass as a plugin on the Hornet node software](root://hornet/1.1/tutorials/set-up-a-private-tangle-hornet.md)| | |
|[Build Compass from source and connect it to an IRI node](../tutorials/set-up-a-private-tangle.md)|:white_check_mark: | :white_check_mark:|
|[Set up a one-command Tangle with an IRI node](../tutorials/set-up-one-command.md)|:white_check_mark: | :white_check_mark:|


:::info:
The one-command Tangle uses a pre-made seed that you can't change. As a result, if you were to expose it to the Internet, anyone would be able to forge Compass' signatures. Therefore, if you plan on exposing your private Tangle on the Internet it's better to use one of the other options.
:::
