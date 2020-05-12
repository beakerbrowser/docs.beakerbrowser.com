---
title: Introduction to Hyperdrive
---

Hyperdrive is a peer-to-peer network. Conceptually it has a lot in common with BitTorrent, such as:

* Hyperdrives can be hosted from any user's device
* All data is authenticated with cryptography
* Peers are announced and found using a DHT
* Peers can help "co-host" a drive to contribute bandwidth

However, there are many important differences:

* Drives are addressed by public-key URLs, e.g. `hyper://12345..af`
* Files are signed to prove authenticity rather than only using a checksum in the Merkle tree
* Files in a drive can be changed
* The history of changes to a drive is stored in a log
* Peers can only connect to your drive if they know the public-key URL

In this document, we'll describe many of the concepts you need to understand Hyperdrive in your applications.

## Mechanics

Each hyperdrive \(or "drive"\) is essentially a networked folder. A drive can contain files, folders, symlinks, and mounts.

Hyperdrives in Beaker are able to execute Web content \(HTML/JS/CSS\).

### Public key URLs

Every drive is identified by a public key, often called just the "key." This key is encoded as a 64-character hex string.

In the URL, this key acts as the domain. The rest of the URL behaves as a typical HTTPS URL, including the path, query, and hash segments.

```text
hyper://5f2fb811a6071237aa6e83db87edc433e861808f781a2a070ed8a5503fb6514e/
```

### Authorship controls

A device must possess the private key of the drive to make changes to it.

:::note
**Currently the private key cannot be shared between devices or users.** This kind of collaboration \(called "multi-writer"\) requires additions to the protocol which are still in progress.
:::

### Hosting / Co-hosting

A drive can be hosted by multiple devices. Often this is called "seeding," but in Hyperdrive we call it "co-hosting." Devices host by announcing themselves on the "DHT Swarm," effectively listing their IP as a device which can provide the drive's content to other users.

### Caching

When accessing a drive's content, Hyperdrive will automatically cache the content to the local device. This means that subsequent reads will not require network access unless a change has occurred. The network stack watches for changes and uses the local cache by default if the latest content is available.

### Versioning

Hyperdrives maintain a version counter which is incremented with every write. It's possible to read previous versions and "diff" between them. Unlike Git, however, Hyperdrive has no branching. There is one linear history.

The version of a drive can be specified in its URL after the key. It takes the following form:

```text
hyper://{key}+{version}/{path...}
```

See also: [drive\(\)](api/beaker.hyperdrive.md#beakerhyperdrivedriveurl), [getInfo\(\)](api/beaker.hyperdrive.md#beakerhyperdrivegetinfourl-opts), [diff\(\)](api/beaker.hyperdrive.md#beakerhyperdrivediffurl-other-prefix-opts)

### Mounts

"Mounts" are like a symlink between hyperdrives. They are also conceptually similar to Git submodules. They cause a drive to behave as a subfolder to another drive.

It is possible to mount drives with or without a version. If a version is not specified, the latest content will always be provided when accessing the mounted folder.

See also: [stat\(\)](api/beaker.hyperdrive.md#beakerhyperdrivestaturl-opts), [mount\(\)](api/beaker.hyperdrive.md#beakerhyperdrivemounturl-mount-opts), [unmount\(\)](api/beaker.hyperdrive.md#beakerhyperdriveunmounturl-opts)

### File K/V metadata

Every file has key-value metadata which can be used to store useful information. For example, a common metadata K/V is the `href` key, which is used to indicate that a file is written in reference to some other resource on the Internet.

See also: [stat\(\)](api/beaker.hyperdrive.md#beakerhyperdrivestaturl-opts), [writeFile\(\)](api/beaker.hyperdrive.md#beakerhyperdrivewritefileurl-data-opts), [updateMetadata\(\)](api/beaker.hyperdrive.md#beakerhyperdriveupdatemetadataurl-metadata-opts), [deleteMetadata\(\)](api/beakerhyperdrivedeletemetadataurl-keys-opts)

### Querying

The Hyperdrive API includes a [query\(\) method](api/beaker.hyperdrive.md#beakerhyperdrivequeryquery) which can be used to quickly scan multiple folders. It is able to filter against paths, metadata, entry type, and mount destinations. It can also sort the output and apply limit/offset for pagination.
