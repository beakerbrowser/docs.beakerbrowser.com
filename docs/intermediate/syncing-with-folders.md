---
title: Syncing with Folders
---

Sometimes you want to work on a Hyperdrive using files that are outside of Beaker. This is common when you're using your own source-control, like Git, or when you just want to use an editor outside of Beaker.

In this case, you can use "folder sync."

## Setting up folder sync

There are two ways to set up folder sync.

The first is when you [create a new hyperdrive](../creating-new-hyperdrives.md). You can select a folder to sync by pressing the "From Folder" button. This will cause the drive to be created with the contents of that folder.

<img className="centered" src="/img/folder-sync-create-drive.png" />

The second is by going to an existing drive, clicking the site-info button, then selecting "Sync with local folder" under the tools.

<img className="centered" src="/img/folder-sync-from-tools.png" />

Once folder sync is setup, you'll see an icon on the top right of your URL bar. You can click on that icon to open the folder sync controls.

<img className="centered" src="/img/folder-sync-controls.png" />


## Manually syncing with the folder

The default behavior of folder sync is to manually sync the folder. This is to give you a chance to review the settings, and to make sure that your computer's resources aren't getting eaten up by watching your folders for changes.

You'll notice a checkbox on the left of every file in the sync controls. You can uncheck files to stop them from being synced. This is useful for avoiding accidental imports (like your .git or node_modules folders) and for preserving data created by beaker (like the index.json manifest).

When you're ready to sync the folder, click the big blue "Sync" button.

## Automatically syncing

If you want the folder to automatically sync when changes occur, toggle the "Autosync" checkbox. This will sync the folder while respecting your deselected files.

Autosync only stays active as long as Beaker is running, so if you restart Beaker, you'll need to turn it back on.

:::caution
Be careful with autosync! If you're running a command that will generate folders for the first time like `git init` or `npm install` you should turn off autosync so that you can disable sync for the folders they generate.
:::