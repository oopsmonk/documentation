# Access Server Reference Implementation 

**The Access Server Reference Implementation (ASRI) is a reference for developers to write their own Access applications.**

The ASRI uses the Access Core SDK in the following contexts to form a functional application.

## Access Context

The Access Context is mainly responsible for consuming the Access Core API. It puts together the different function calls such that Access Requests are properly addressed, and Policies are managed adequately.

## Wallet Context

The Wallet Context is responsible for interacting with the Tangle. It initiates and checks transactions while communicating with an IOTA node.

The Wallet Context is also responsible for managing the IOTA seed.

While the initial ASRI does not support a Secure Element for safe seed storage, this feature is in our roadmap for future integration. Probably, this will be achieved in a modular fashion via Secure Element plugins for the Wallet Context.

## Network Context

The Access Secure Network Context handles incoming Access Requests. It is built with the Access Secure Network (ASN) API.

## Application Supervisor

The Application Supervisor works as the main orchestrator that makes all Contexts interact with each other. Runtime Configurations are set in place, threads are initiated, and Contexts are set up.
