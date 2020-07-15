---
title: beaker.panes
description: Attach to other active panes, coordinate navigation, and inject code
---

Beaker includes the ability to split the page into multiple panes which navigate independently. This API gives applications the ability to "attach" to other panes and coordinate their browsing as well as inject JS/CSS.

Currently each pane can attach and manage one other pane at a time. The user must grant permission to use the panes API.

## API

### beaker.panes.setAttachable()

Mark the pane as "attachable." This will cause the attachment UI to display in the app's status bar, even if the pane is not attached to anything.

* Returns **Void**.

```javascript
beaker.panes.setAttachable()
```

### beaker.panes.getAttachedPane()

Get the currently attached pane. Returns undefined if no pane is attached.

* Returns **Void|Object**.
  * **id** Number. The pane's identifier.
  * **url** String. The pane's current location.

```javascript
var pane = beaker.panes.getAttachedPane()
if (pane) {
  console.log(pane.id) // some number
  console.log(pane.url) // the current address of the pane
}
```

### beaker.panes.attachToLastActivePane()

Attempts to attach to the pane that was active prior to the current pane. Can be used during setup to automatically attach to the pane in use.

Requires permission from the user.

* Returns **Promise&lt;Void|Object&gt;**.
  * **id** Number. The pane's identifier.
  * **url** String. The pane's current location.

```javascript
var pane = await beaker.panes.attachToLastActivePane()
if (pane) {
  console.log(pane.id) // some number
  console.log(pane.url) // the current address of the pane
}
```

### beaker.panes.create(url, {attach: boolean})

Creates a new pane and optionally attaches to the pane automatically.

Requires permission from the user.

* **url** String. The URL to open in the new pane.
* **opts** Object.
  * **attach** Boolean. Attach to the new pane. Defaults to false.
* Returns **Promise&lt;Object&gt;**.
  * **id** Number. The pane's identifier.
  * **url** String. The pane's current location.

```javascript
var pane = await beaker.panes.create('https://beakerbrowser.com', {attach: true})
console.log(pane.id) // some number
console.log(pane.url) // the current address of the pane
```

### beaker.panes.navigate(paneId, url)

Navigates the pane to the given URL. The given pane must be attached.

* **paneId** Number. The ID of the pane to navigate.
* **url** String. The URL to open in the target pane.
* Returns **Promise&lt;Void&gt;**.

```javascript
await beaker.panes.create(pane.id, 'https://beakerbrowser.com')
```

### beaker.panes.focus(paneId)

Gives focus to a different pane. The given pane must be attached.

* **paneId** Number. The ID of the pane to navigate.
* Returns **Promise&lt;Void&gt;**.

```javascript
await beaker.panes.focus(pane.id)
```

### beaker.panes.executeJavaScript(paneId, script)

Runs the given javascript in a different pane. The given pane must be attached.

Requires permission from the user.

* **paneId** Number. The ID of the pane to navigate.
* **script** String. The script to execute.
* Returns **Promise&lt;Any&gt;**.

```javascript
var res = await beaker.panes.executeJavaScript(pane.id, 'alert("hello!")')
console.log(res) // undefined
var res = await beaker.panes.executeJavaScript(pane.id, 'window.location.toString()')
console.log(typeof res) // string
```

### beaker.panes.injectCss(paneId, styles)

Inserts CSS into a different pane. The given pane must be attached.

Requires permission from the user.

* **paneId** Number. The ID of the pane to navigate.
* **styles** String. The styles to inject.
* Returns **Promise&lt;Number&gt;**. An ID which can be used to uninject the styles.

```javascript
var cssId = await beaker.panes.injectCss(pane.id, 'body { color: red; }')
console.log(typeof cssId) // number
```

### beaker.panes.uninjectCss(paneId, cssId)

Removes injected CSS from a pane. The given pane must be attached.

Requires permission from the user.

* **paneId** Number. The ID of the pane to navigate.
* **cssId** Number. The ID of the injected styles to remove.
* Returns **Promise&lt;Void&gt;**.

```javascript
var cssId = await beaker.panes.injectCss(pane.id, 'body { color: red; }')
console.log(typeof cssId) // number
await beaker.panes.uninjectCss(pane.id, cssId)
```

### "pane-attached" event

Emitted when a pane has been attached to the current app.

* **detail.id** Number. The ID of the attached pane.

```js
beaker.panes.addEventListener('pane-attached', e => {
  console.log(e.detail.id) // some number
})
```

### "pane-detached" event

Emitted when a pane has been detached from the current app.

```js
beaker.panes.addEventListener('pane-detached', e => {
  // ...
})
```

### "pane-navigated" event

Emitted when the attached pane has changed its current location.

* **detail.url** String. The new URL of the attached pane.

```js
beaker.panes.addEventListener('pane-navigated', e => {
  console.log('navigated to', e.detail.url)
})
```

## Example app

This example app can help you familiarize with the panes API.

```html
<!doctype html>
<html>
  <head>
    <title>Panes Demo</title>
    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
      }

      button {
        display: block;
        padding: 10px;
        width: 100%;
        margin-bottom: 10px;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <h1>beaker.panes API Demo</h1>
    <button id="create">Create Attached Pane</button>
    <button id="nav1" class="requires-attached" disabled>Navigate pane to beaker.dev</button>
    <button id="nav2" class="requires-attached" disabled>Navigate pane to example.com</button>
    <button id="exec" class="requires-attached" disabled>Execute JS in pane</button>
    <button id="inject" class="requires-attached" disabled>Inject CSS in pane</button>

    <script type="module">
      function setDisabled (b) {
        if (b) Array.from(document.body.querySelectorAll('.requires-attached'), el => el.setAttribute('disabled', 'disabled'))
        else Array.from(document.body.querySelectorAll('.requires-attached'), el => el.removeAttribute('disabled'))
      }

      setDisabled(true)
      beaker.panes.setAttachable()
      beaker.panes.attachToLastActivePane().then(res => {
        if (res) setDisabled(false)
      })
      const on = (el, evt, fn) => el.addEventListener(evt, fn)
      on(create, 'click', e => beaker.panes.create('https://example.com', {attach: true}))
      on(nav1, 'click', e => beaker.panes.navigate(beaker.panes.getAttachedPane().id, 'https://beaker.dev'))
      on(nav2, 'click', e => beaker.panes.navigate(beaker.panes.getAttachedPane().id, 'https://example.com'))
      on(exec, 'click', e => beaker.panes.executeJavaScript(beaker.panes.getAttachedPane().id, 'alert("hello from " + location.toString())'))
      on(inject, 'click', e => beaker.panes.injectCss(beaker.panes.getAttachedPane().id, 'body { color: red !important; }'))

      beaker.panes.addEventListener('pane-attached', e => {
        console.log('pane attached')
        setDisabled(false)
      })
      beaker.panes.addEventListener('pane-detached', e => {
        console.log('pane detached')
        setDisabled(true)
      })
      beaker.panes.addEventListener('pane-navigated', e => {
        console.log('pane has changed url', e.detail.url)
      })
    </script>
  </body>
</html>
```