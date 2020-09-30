# Access overview

**IOTA Access is an open-source framework for controlling access to resources such as vehicles, wallets, and sensor data.**

With Access, you can build and embed applications inside your resources to do the following:

- Grant and revoke access at any time
- Charge users for access
- Set access restrictions

## Limitations

Access is a work in progress, and the project should be seen as a [*minimum viable product*](https://en.wikipedia.org/wiki/Minimum_viable_product) (MVP).

## Source code

The source code for this project is hosted on the following Github repositories:

- [access-sdk](http://github.com/iotaledger/access-sdk) contains the Access Core Software Development Kit (SDK). It consists of the Core SDK components used as building pieces for Access dApps (server and client)
- access-server contains the Access Server Reference Implementation (ASRI). It consists of the embedded software meant to be executed on the target device for which access will be delegated
- [access-mobile-client](https://github.com/iotaledger/access-mobile-client.git) contains an Android-based Access Reference Implementation with a user interface both for creating policies and initiating access requests. It will eventually be replaced by the cross-platform implementation under the access-client repository
- [access-policy-store](https://github.com/iotaledger/access-policy-store) contains the Access Policy Store. It consists of interface servers for managing policies. It will eventually be rendered obsolete when a Permanode solution is rolled out
- [access-client](http://github.com/iotaledger/access-client) contains the Access Client Reference Implementation (ACRI). It provides the user interface both for creating policies and initiating access requests. At the moment, it’s a work In progress

## Next steps

[Get started with the example application](tutorials/get-started.md).