# Access Authentication API

**This topic describes the cryptography that is used by the Access Authentication API.**

:::warning: 
These specifications will change for Access `v0.2.0`.
:::

- Curve25519 elliptic curve function, to compute public key and shared secret for DH exchange
- ECDSA secp160r1 for signing and signature validation
- SHA256 for hashing
- AES256 for message encryption and decryption
- HMAC-SHA256 for computing mac

