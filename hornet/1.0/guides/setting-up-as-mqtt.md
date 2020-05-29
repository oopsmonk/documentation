# Setting up Hornet as an MQTT broker

**In some cases, you may want to allow users to subscribe to events on your node through MQTT either instead of or as well as the default ZMQ. This topic explains how to configure your node as an MQTT broker, using the `MQTT` plugin.**

## Enabling the plugin

You can enable the MQTT broker by adding it to the `enablePlugins` field of the `node` object in your configuration file.

```json
"node": {
    "alias": "",
    "showAliasInGetNodeInfo": false,
    "disablePlugins": [],
    "enablePlugins": ["MQTT"]
  },
```

## Configuring the plugin

The `MQTT` plugin turns your node into an MQTT broker. For more information about MQTT, see the [official documentation](https://mqtt.org/).

The configuration for the MQTT plugin is in the `mqtt_config.json` file.

By default, the MQTT plugin is available only to the localhost. To access the MQTT broker from anywhere, set the `host` field to `0.0.0.0`.

By default, the MQTT plugin publishes data on an unsecure connection. To use an encrypted connection, set the `port` field to `""`, set the `tlsPort` to the port that you want to use, and complete the `tlsInfo` fields.

```json
{
  "port": "1883",
  "host": "127.0.0.1",
  "tlsPort": "",
  "tlsHost": "",
  "tlsInfo": {
    "verify": false,
    "caFile": "tls/ca/cacert.pem",
    "certFile": "tls/server/cert.pem",
    "keyFile": "tls/server/key.pem"
  }
}
```