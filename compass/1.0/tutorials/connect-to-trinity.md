# Connect your private Tangle to Trinity

**In this tutorial, you expose your private Tangle to the Internet over HTTPS so that you can use the Trinity wallet to attach transactions to it.**

:::danger:
This software is now **deprecated**. See [Set up a private Tangle as a Hornet plugin
](root://hornet/1.1/tutorials/set-up-a-private-tangle-hornet.md) for an up-to-date private Tangle.
:::


![Private Tangle in Trinity](../images/trinity-private-tangle.png)

:::info:
This tutorial is for the [one-command Tangle](../tutorials/set-up-one-command.md) setup.
:::

:::warning:
The one-command Tangle uses a pre-computed Merkle tree with a public seed that's in the `docker-compose.yml` file. As a result, if anyone has the URL of your node, they can use the Compass seed to take over your private Tangle.
:::

## Prerequisites

To complete this tutorial, you need the following:

- A [one-command Tangle](../tutorials/set-up-one-command.md)

- [The Trinity wallet](https://trinity.iota.org/)

- A domain name whose [A-record](https://support.dnsimple.com/articles/a-record/) points to your public IP address

- A private Tangle that's exposed to the Internet on ports 80 and 443

---

1. In the `/config/tools/ssl/Caddyfile` file, change the `your-domain.com` and `your@email.com` placeholders to your chosen domain name and email address

2. Execute the `docker-compose up` command with your Caddy configuration options

    ```bash
    docker-compose -f docker-compose.yml -f docker-compose-ssl.yml up
    ```

3. In a web browser, go to the URL of your node. For example, if your domain name is `privatetangle.com`, go to `https://privatetangle.com`

    The web browser will display the following, which means that your node is exposed to the Internet on port 443:

    ```
    {
    "error": "Invalid API Version",
    "duration": 0
    }
    ```

    Now, you can connect to the IOTA node.

4. In Trinity, [create an account](root://wallets/0.1/trinity/how-to-guides/create-an-account.md) with your seed

    ```
    SEED99999999999999999999999999999999999999999999999999999999999999999999999999999
    ```

5. Go to **Settings** > **Node** > **Add custom nodes**,  and enter the URL of your node

6. Disable the **Automatic node management** option, the **Primary node autoswitching** option, and the **Use remote list** option 

7. Select your node from the dropdown menu

8. Click **Save**

:::success:Congratulations! :tada:
Trinity is now connected to the IOTA node in your private Tangle.
:::
