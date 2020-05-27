# Download the latest snapshot data

**In this tutorial, you delete your snapshot data and replace it with the latest snapshot data on the IOTA Foundation's server.**

1. Stop IRI

2. Change into the directory where you keep your IRI database

3. Delete your snapshot data and spent addresses

    ```bash
    sudo rm mainnet.snapshot*
    sudo rm -r mainnetdb mainnet.log spent-addresses-db spent-addresses.log
    ```

4. Download the latest snapshot data from the IOTA Foundation's server

    ```bash
    sudo wget https://dbfiles.iota.org/mainnet/iri/latest-LS.tar
    ```

5. Extract the directory

    ```bash
    tar -xvf latest-LS.tar
    ```

:::success:
Now, you have a `local-snapshots-db` directory, which contains all the latest snapshot data and spent addresses.
:::

## Next steps

If you need to familiarlize yourself with the steps to run IRI, see [Choose an installation method](../tutorials/install-iri.md).


