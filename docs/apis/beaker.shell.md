---
title: beaker.shell
---

### beaker.shell.drivePropertiesDialog(url)

Create a dialog for editing the properties of the given hyperdrive.

* **url** String. The URL of the drive to view.
* Returns **Promise&lt;Void&gt;**

```javascript
await beaker.shell.drivePropertiesDialog(drive.url)
```

### beaker.shell.selectFileDialog(\[opts\])

Create a dialog for selecting files or folders.

* **opts** Object
  * **title** String. The title of the selection dialog.
  * **buttonLabel** String. The label on the "OK" button.
  * **drive** String. The initial drive to explore.
  * **defaultPath** String. The initial path to explore.
  * **select** Array&lt;String&gt;. What kind of entries to accept. Must contain 'file', 'folder', 'mount'.
  * **filters** Object
    * **extensions** Array&lt;String&gt;. The extensions of the files to accept.
    * **writable** Boolean. If true, only accept writable files. If false, only accept unwritable files.
  * **allowMultiple** Boolean. If true, allow multiple files to be selected.
  * **disallowCreate** Boolean. If true, require the selected file to exist.
* Returns **Promise&lt;Array&lt;Object&gt;&gt;**
  * **path** String. The path of the selected file or folder.
  * **origin** String. The URL of the hyperdrive that contains the file or folder.
  * **url** String. The URL of the file or folder.

```javascript
var files = await beaker.shell.selectFileDialog({
  title: 'Select an Image',
  buttonLabel: 'Select Image',
  select: ['file'],
  filters: {
    extensions: ['png', 'jpg', 'jpeg', 'gif']
  },
  allowMultiple: true,
  disallowCreate: true
})
files[0].path   // => '/imgs/foo.png'
files[0].origin // => 'hyper://1234..56/'
files[0].url    // => 'hyper://1234..56/imgs/foo.png'
```

### beaker.shell.saveFileDialog(\[opts\])

Create a dialog for selecting where to save a file.

* **opts** Object
  * **title** String. The title of the selection dialog.
  * **buttonLabel** String. The label on the "OK" button.
  * **drive** String. The initial drive to explore.
  * **defaultPath** String. The initial path to explore.
  * **defaultFilename** String. The suggested default filename.
  * **extension** String. The extension of the saved file.
  * **filters** Object
    * **extensions** Array&lt;String&gt;. The extensions of the files to accept.
    * **writable** Boolean. If true, only accept writable files. If false, only accept unwritable files.
* Returns **Promise&lt;Array&lt;Object&gt;&gt;**
  * **path** String. The path of the selected file or folder.
  * **origin** String. The URL of the hyperdrive that contains the file or folder.
  * **url** String. The URL of the file or folder.

```javascript
var file = await beaker.shell.saveFileDialog({
  title: 'Save Image To...',
  buttonLabel: 'Save Image',
  defaultFilename: 'image.png',
  extension: 'png'
})
file.path   // => '/imgs/foo.png'
file.origin // => 'hyper://1234..56/'
file.url    // => 'hyper://1234..56/imgs/foo.png'
```

### beaker.shell.selectDriveDialog(\[opts\])

Create a dialog for selecting a hyperdrive from the user's library.

* **opts** Object
  * **title** String. The title of the selection dialog.
  * **buttonLabel** String. The label on the "OK" button.
  * **writable** Boolean. If true, only accept writable drives. If false, only accept unwritable drives.
  * **allowMultiple** Boolean. If true, allow multiple drives to be selected.
  * **tag** String. Filters the drives to items that include the given tag.
  * **template** String. The URL of a hyperdrive which will be used as the template for a new drive if the user chooses "new drive."
* Returns **Promise&lt;String|Array&lt;String&gt;&gt;**

If a `.template` is specified, `.writable` is not `false`, and no drives in the user's library matches the filtering criteria, the modal will automatically jump to the "create drive" flow.

```javascript
var driveUrl = await beaker.shell.selectDriveDialog({
  title: 'Select Your Profile',
  buttonLabel: 'Select Profile',
  writable: true,
  tag: 'contact',
  template: 'hyper://12345..af'
})
```

### beaker.shell.saveDriveDialog(url\[, opts\])

Create a dialog for saving a hyperdrive to the user's library.

* **url** String. The URL of the hyperdrive to save.
* **opts** Object
  * **tags** String. A space-separated list of tags to suggest saving the hyperdrive under.

```javascript
var driveUrl = await beaker.shell.saveDriveDialog(drive.url, {tags: 'website fun'})
```

### beaker.shell.listDrives(\[opts\])

List saved drives according to a filter. Requires user to grant permission.

* **opts** Object
  * **tag** String. Only list drives saved with the given tag.
  * **writable** Boolean. Only list drives which are or aren't writable.


```javascript
var contacts = await beaker.shell.listDrive({writable: false, tag: 'contact'})
```

### beaker.shell.tagDrive(url, tags)

Ask the user to add tags to the given hyperdrive. If the drive isn't already saved, will trigger the "save drive" dialog.

* **url** String. The URL of the hyperdrive to save.
* **tags** String. A space-separated list of tags to assign the drive.

```javascript
var driveUrl = await beaker.shell.tagDrive(drive.url, 'website fun')
```

### beaker.shell.unsaveDrive(url)

Remove a hyperdrive from the user's library. Requires user to grant permission.

* **url** String. The URL of the hyperdrive to unsave.