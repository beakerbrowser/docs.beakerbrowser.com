---
title: Editing File Metadata
---

Files in Hyperdrive can have metadata values.

Metadata is stored as a UTF-8 string. Each value is identified by a key string. You can put as many metadata values as you like on a file, but avoid going _too_ far or you'll slow down reads.

## In the editor

Visit the file you want to modify and [open the editor](beginner/using-the-editor.md). Then click on the "File Metadata" button on the toolbar.

<img class="centered" src="/img/editor-file-metadata.png" />

A dropdown will appear with the metadata keys on the left and the values on the right. Use the empty inputs on the bottom to add a new value. You can modify existing values or remove them by simply deleting their values.

<img class="centered" src="/img/editor-file-metadata-dropdown.png" />

When you are finished, click "Save" to write the changes.

## In the terminal

Visit your hyperdrive and open the terminal by clicking "Terminal."

<img class="centered" src="/img/open-terminal.png" />

Get all metadata values for a file by entering `meta {filename}`

<img class="centered" src="/img/terminal-all-meta.png" />

Get a single metadata value for a file by entering `meta {filename} {key}`

<img class="centered" src="/img/terminal-one-meta.png" />

Change a single metadata value by entering `meta {filename} {key} {value}`

<img class="centered" src="/img/terminal-set-meta.png" />

If your value has spaces, wrap it in quotes.
