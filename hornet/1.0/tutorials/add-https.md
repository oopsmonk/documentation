# Add HTTPS support to your node

**By default, nodes communicate over HTTP, which is an unsecured connection. In this tutorial, you add HTTPS support to your node, using Nginx.**

## Prerequisites

To complete this tutorial, you need the following:

- A Hornet node that's running on a Linux operating system. For tutorials, see [Choose an installation method](../tutorials/install-hornet.md).
- An Nginx instance. For a tutorial, see [Set a limit on requests to your node's API](../tutorials/set-up-reverse-proxy.md).
- A domain name. For more information about buying a domain name, see [How to Buy a Domain Name](https://www.wikihow.com/Buy-a-Domain-Name) on wikiHow.

## Step 1. Generate certificates

In this step, you use [Let's Encrypt](https://letsencrypt.org/how-it-works/) to generate SSL certificate files.

Replace the `$YOUR_EMAIL` and `$YOUR_DOMAIN` placeholders with your email address and domain name.

```bash
cd ~ && wget https://dl.eff.org/certbot-auto && \
chmod a+x certbot-auto && \
sudo mv certbot-auto /usr/local/bin && \
sudo certbot-auto --noninteractive --os-packages-only && \
sudo certbot-auto certonly \
--standalone \
--agree-tos \
--non-interactive \
--text \
--rsa-key-size 4096 \
--email $YOUR_EMAIL \
--domains '$YOUR_DOMAIN'
```

## Step 2. Add your certificate files to your node

In this step, you configure your node to use your certificate files.

1. Open your `hornet.conf` file

    ```bash
    sudo nano /etc/nginx/sites-enabled/hornet.conf
    ```
    
2. Add the following to the `server` block directive to give Nginx the location of your server certificate and private key files. Replace the `$DOMAIN_DIRECTORY` placeholder with the directory in which your certificate files were saved.

    ```bash
    listen                    443 ssl http2 deferred;

    ssl_certificate           /etc/letsencrypt/live/$DOMAIN_DIRECTORY/fullchain.pem;
    ssl_certificate_key       /etc/letsencrypt/live/$DOMAIN_DIRECTORY/privkey.pem;
    ssl_protocols             TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers               HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ```

## Step 3. Set up automatic renewal

3. Install a script that automatically renews your certificate

    ```bash
    echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && /usr/local/bin/certbot-auto renew && /bin/systemctl reload openresty" | sudo tee /etc/cron.d/cert_renew > /dev/null
    ```

    :::info:
    After installing this script, you can ignore any expiration notification emails from Let's Encrypt.
    :::

5. Load your new configuration into Nginx

    ```bash
    sudo systemctl daemon-reload
    sudo systemctl start nginx
    ```

6. Open port 443 on your server

    For more information on opening ports, see [How to Open Ports](https://www.wikihow.com/Open-Ports) on wikiHow.

7. Send a request to your node's API, using HTTPS

:::success: Congratulations :tada:
You can now communicate with your node over HTTPS.
:::