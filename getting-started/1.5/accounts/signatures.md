# Signatures

**Signatures are digital proof of ownership. This topic introduces you to signatures and how they work.**

![Signature](../images/signature.png)

## Signature scheme

Previously, IOTA used the Winternitz [one-time signature scheme](https://en.wikipedia.org/wiki/Hash-based_cryptography#One-time_signature_schemes) (W-OTS) to generate [digital signatures](https://en.wikipedia.org/wiki/Digital_signature). Currently, we use the Ed25519 scheme in coordination with the [UTXO](../the-tangle/message-types.md) model and [ZIP-215](https://zips.z.cash/zip-0215), which is used to explicitly define validation criteria and assure the authenticity of messages.

## Signature validation

To have consistent validation of Ed25519 signatures for all edge cases and throughout different implementations, three criteria **must** be checked to evaluate whether a signature is valid.

Using the notation and Ed25519 parameters as described in [RFC-8032](https://tools.ietf.org/html/rfc8032), the criteria are defined as follows:

1. Accept non-canonical encodings of A and R.
2. Reject values for S that are greater or equal than L.
3. Use the equation [8][S]B = [8]R + [8][k]A' for validation.

## Next steps

Learn how to make it easy to manage your IOTA account with [wallets](../accounts/wallets.md).