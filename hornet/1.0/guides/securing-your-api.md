# Securing your API

**Opening the API port (14265 by default) to the Internet is dangerous because it allows anyone with your node's IP address or domain name to spam API requests to your node. Some API endpoints such as `attachToTangle` are resource intensive, and too many of these requests can take your node offline. This topic discusses some of the options for securing your API before opening the port to the Internet.**

## Setting up basic authentication for your API

Basic authentication is a method for authorizing access to your node's API endpoints only to those who have the correct username and password. For more information about basic authentication, see [Basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) on Wikipedia.

You can set up basic authentication for your node's API, using the `httpAPI.basicAuth` object in your configuration file.

```json
"httpAPI": {
    "basicAuth": {
      "enabled": false,
      "username": "",
      "passwordHash": "",
      "passwordSalt": ""
    }
```

By default, basic authentiation is disabled. To enable it, you need to provide a username a salt, and the SHA256 hash of your password with the salt appended. This way, the password is never stored on your node, making it more secure.

For example, for the password `iota` and the salt `mysecretsalt`, the SHA256 hash of `iotamysecretsalt` is `6d2c5b160faf1603fc21df32597f2bfdf30a5cf87e44e41bd6160547214bad6e`.

In this case, the `httpAPI.basicAuth` object would look like this:

```json
"httpAPI": {
    "basicAuth": {
      "enabled": true,
      "username": "user",
      "passwordHash":"6d2c5b160faf1603fc21df32597f2bfdf30a5cf87e44e41bd6160547214bad6e",
      "passwordSalt": "mysecretsalt"
    }
```

Now, all API requests need to be sent with basic authentiation header in the form of username:password.

```
Authorization: Basic user:iota
```

On receipt of the request, the node combines the given password with the salt in the `passwordSalt` field and hashes the result to make sure that the hash matches the one in the `passwordHash` field.

## Whitelisting IP addresses

Whitelisting is the practice of giving access to your node's API only to users with certain IP addresses.

You can set up whitelisting for your node's API, using the `httpAPI.whitelistedAddresses` field.

```json
"httpAPI": {
    "whitelistedAddresses": [],
    }
```

By default, whitelisting is disabled. To enable it, you need to provide the IP addresses of the users to whom you want to give access to the node's API endpoints.

For example, you want to give access only to your mobile phone whose IP address is `203.0.113.4`.

In this case, the `httpAPI.whitelistedAddresses` field would look like this:

```json
"httpAPI": {
    "whitelistedAddresses": ["203.0.113.4"],
    }
```

Now, all API requests need to be sent either from localhost or your mobile device. The node will ignore requests from any other IP addresses.

## Limiting the number of API requests for each user

Some users may send many requests to your node's API in an attempt to overload it and take it offline. To prevent this type of attack, you can use a reverse proxy server to limit the number of requests that each user can make.

This way, the node will ignore any requests that exceed the limit.

See [Set a limit on requests to your node's API](../tutorials/set-up-reverse-proxy.md).