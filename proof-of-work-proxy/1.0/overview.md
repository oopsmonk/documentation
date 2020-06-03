# Proof of work proxy server

**The proof of work (PoW) proxy server does local proof of work by intercepting calls to a node's [`attachToTangle`](root://iri/1.0/references/iri-api-reference.md#attachToTangle) endpoint.**

The `attachToTangle` endpoint is resource intensive. As a result, many calls to this endpoint can sometimes cause the node to crash. By installing a PoW proxy server, you can allow the connected node to process transactions faster by removing its need to do PoW.

## Source code

The source code for this project is hosted on [Github](https://github.com/luca-moser/iotacaddy).

## Next steps

[Get started](/getting-started/set-up-pow-proxy.md).

