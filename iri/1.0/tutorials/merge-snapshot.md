# Merge your snapshot data and spent addresses

**In this tutorial, you update your IRI database to be compatible with version 1.8.6 while keeping all your existing snapshot data. To do so, you must use the merger tool to merge your snapshot data and spent addresses into a single database.**

:::danger:
This software is now **deprecated**. See [Hornet](root://hornet/1.1/overview.md) for an up-to-date node software.
:::

You have two options for using the merger tool:

- Run the merger tool in a Docker container (for Linux, macOS, and Windows)
- Build and run the merger tool on a Linux Ubuntu server

## Run the merger tool in a Docker container

In this tutorial, you run a Docker container that contains the merger tool.

This is the quickest way to merge your snapshot data and spent addresses into a single database.

## Prerequisites

To complete this tutorial, you need [Docker](https://docs.docker.com/get-docker/).

---

1. Stop IRI

2. Run the Docker container. Replace the `$PATHTODATA` placeholder with the path to your IRI database.

    ```bash
    docker run -v $PATHTODATA:/data iotacafe/iri-ls-sa-merger
    ```

:::success:
Now, you have a `data` directory, which contains all your snapshot data and spent addresses.
:::

## Build and run the merger tool on a Linux Ubuntu server

In this tutorial, you build the merger tool from source.

## Prerequisites

This tutorial has been tested on Ubuntu 18.04 and 19.04.

To complete this tutorial, you need the following:

- [Git](https://git-scm.com/downloads)
- [Go](https://golang.org/doc/install) version 1.12 or later

---

1. Stop IRI

2. Clone the [RocksDB GitHub repository](https://github.com/facebook/rocksdb)

    ```bash
    git clone https://github.com/facebook/rocksdb.git
    ```

3. Check out branch `5.17.fb`

    ```
    cd rocksdb
    git checkout 5.17.fb
    ```

4. Install the dependencies

    ```
    sudo apt-get install libgflags-dev libsnappy-dev zlib1g-dev libbz2-dev libzstd-dev liblz4-dev
    ```

5. Compile the RocksDB shared libraries and install them

    ```bash
    make shared_lib && make install-shared
    ```

    This step can take a few minutes.

    When the libraries are installed, you should see the following:

    ```
    GEN      util/build_version.cc
    install -d /usr/local/lib
    for header_dir in `find "include/rocksdb" -type d`; do \
            install -d /usr/local/$header_dir; \
    done
    for header in `find "include/rocksdb" -type f -name *.h`; do \
            install -C -m 644 $header /usr/local/$header; \
    done
    install -C -m 755 librocksdb.so.5.17.4 /usr/local/lib && \
            ln -fs librocksdb.so.5.17.4 /usr/local/lib/librocksdb.so.5.17 && \
            ln -fs librocksdb.so.5.17.4 /usr/local/lib/librocksdb.so.5 && \
            ln -fs librocksdb.so.5.17.4 /usr/local/lib/librocksdb.so
    ```

6. Set your `LD_LIBRARY_PATH` environment variable to the `usr/local/lib` directory

    ```bash
    export LD_LIBRARY_PATH=/usr/local/lib
    ```

7. Clone the `iri-ls-sa-merger` repository into a new directory

    ```bash
    mkdir merger-tool
    cd merger-tool
    git clone https://github.com/iotaledger/iri-ls-sa-merger.git
    ```

8. Set the paths to your RocksDB files

    ```bash
    CGO_CFLAGS="-I/usr/local/include/rocksdb" \
    CGO_LDFLAGS="-L/usr/local/lib -lrocksdb -lstdc++ -lm -lz -lbz2 -lsnappy -llz4 -lzstd"
    ```

9. Compile the merger tool

    ```bash
    cd iri-ls-sa-merger
    go build
    ```

    If you see no output, the tool was compiled.

10. In the directory where you store your current local snapshots, and spent addresses, execute the merger tool

    ```bash
    ./iri-ls-sa-merger
    ```

    This tool can take a few minutes to merge your snapshot data and spent addresses into a single database.

    ![Merger tool](../images/snapshot-merger.gif)

    When the tool is finished, you should see something like the following:

    ```
    reading and writing spent addresses database
    persisted 13221363 spent addresses
    writing local snapshot data...
    ms index/hash/timestamp: 1332434/XUCOYISZFFJQYHZHKPPKBMHGDVOZEVFXPXUNLMQGJHLUORNXESE9COYKS9TPUFAZGHXDROMDCR9VA9999/1580794859
    solid entry points: 198
    seen milestones: 101
    ledger entries: 417725
    max supply correct: true
    size: 23267 KBs
    finished, took 4m23.905223678s
    ```

    :::info:
    For more information about how you can use this tool, see [the README file on GitHub](https://github.com/iotaledger/iri-ls-sa-merger#iri-localsnapshot--spentaddresses-merger).
    :::

:::success:
Now, you have a `local-snapshots-db` directory, which contains all your snapshot data and spent addresses.
:::

## Next steps

If you need to familiarlize yourself with the steps to run IRI, see [Choose an installation method](../tutorials/install-iri.md).