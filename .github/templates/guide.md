# Action-based title that starts with a gerund such as "Setting up your dashboard"

**Give the context of the guide (why you would follow it) and what it contains. For example, "Hornet nodes come with a default dashboard for monitoring data such as uptime, synchronization status, and transactions. This topic walks you through setting up and customizing the dashboard."**

For each specfic task in the guide, use a level 2 heading that starts with a gerund.

```
## Customizing your dashboard
```

For each heading, discuss all the ways you can complete the task and link to relevant tutorials if one exists.

This is not a tutorial, so keep the information general. Guides are for users who are already familar with the software and don't need a step-by-step tutorial.

For example:

If you want to name your node and have it displayed in the dashboard, add your chosen name to the `node.alias` field in your configuration file.

```json
"node": {
    "alias": "My first node",
    "showAliasInGetNodeInfo": false,
    "disablePlugins": [],
    "enablePlugins": []
  },
```

You can also name your fixed neighbors by adding their names to the `peers.alias` field in your `peering.json` file.

```json
"peers": [
    {
      "identity": "example.neighbor.com:15600",
      "alias": "Example Peer",
    }
```
```