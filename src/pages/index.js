import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function Home() {
  return (
    <Layout>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Beaker Documentation</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <section className={styles['links-grid']}>
            <Link to="/beginner/creating-new-hyperdrives">
              <img src="/img/create-drive-link-card.png" /> <span>Creating New Hyperdrives</span>
            </Link>
            <Link to="/beginner/using-the-editor">
              <img src="/img/editor-link-card.png" /> <span>Using the Editor</span>
            </Link>
            <Link to="/intermediate/syncing-with-folders">
              <img src="/img/folder-sync-controls.png" /> <span>Syncing with Folders</span>
            </Link>
            <Link to="/beginner/importing-and-exporting-files">
              <img src="/img/import-export-link-card.png" /> <span>Importing and Exporting Files</span>
            </Link>
            <Link to="/beginner/sharing-hyperdrives">
              <img src="/img/copy-url.png" /> <span>Sharing Hyperdrives</span>
            </Link>
            <Link to="/advanced/webterm">
              <img src="/img/webterm.png" /> <span>Webterm</span>
            </Link>
            <Link to="/advanced/forking-hyperdrives">
              <img src="/img/fork-drive-dialog.png" /> <span>Forking Hyperdrives</span>
            </Link>
            <Link to="/advanced/comparing-and-merging-hyperdrives">
              <img src="/img/menu-diff-merge.png" /> <span>Comparing and Merging</span>
            </Link>
          </section>
          <div className="row">
            <div className={classnames('col col--6', styles.section)}>
              <h2 id="apis">APIs</h2>
              <ul className={styles['links-list']}>
                <li><Link to="/apis/beaker.capabilities"><span>beaker.capabilities</span><span>Create temporary, revocable URLs which map to hyperdrives.</span></Link></li>
                <li><Link to="/apis/beaker.contacts"><span>beaker.contacts</span><span>Read and manage the user's address book.</span></Link></li>
                <li><Link to="/apis/beaker.hyperdrive"><span>beaker.hyperdrive</span><span>Methods to read and write Hyperdrive data.</span></Link></li>
                <li><Link to="/apis/beaker.markdown"><span>beaker.markdown</span><span>Render Markdown into HTML.</span></Link></li>
                <li><Link to="/apis/beaker.peersockets"><span>beaker.peersockets</span><span>Send and receive messages to peers on a hyperdrive.</span></Link></li>
                <li><Link to="/apis/beaker.shell"><span>beaker.shell</span><span>Global user interface methods, typically user dialogs.</span></Link></li>
                <li><Link to="/apis/beaker.terminal"><span>beaker.terminal</span><span>Register commands which are accessible from Webterm.</span></Link></li>
              </ul>
            </div>
            <div className={classnames('col col--6', styles.section)}>
              <h2 id="developers">Developers</h2>
              <ul className={styles['links-list']}>
                <li><Link to="/developers/introduction-to-hyperdrive"><span>Introduction to Hyperdrive</span><span>An overview of Beaker's peer-to-peer tech</span></Link></li>
                <li><Link to="/developers/index.json-manifest"><span>Index.json Manifest</span><span>Information about the Hyperdrive manifest file, <code>index.json</code>.</span></Link></li>
                <li><Link to="/developers/content-type-negotiation"><span>Content-Type Negotiation</span><span>How <code>hyper://</code> handles URLs without extensions.</span></Link></li>
                <li><Link to="/developers/frontends-.ui-folder"><span>Frontends (.ui folder)</span><span>A tool to inject HTML output into every browsed resource.</span></Link></li>
                <li><Link to="/developers/goto-files"><span>Goto Files</span><span>Files which act like shortcuts.</span></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <section className={styles.sections}>
          <div className="container">
            <div className="row">
              <div className={classnames('col col--4', styles.section)}>
                <h2 id="beginner">Beginner</h2>
                <ul className={styles['secondary-links-list']}>
                  <li><Link to="/beginner/creating-new-hyperdrives">Creating New Hyperdrives</Link></li>
                  <li><Link to="/beginner/changing-a-drive-title-or-thumbnail">Changing a Drive's Title or Thumbnail</Link></li>
                  <li><Link to="/beginner/using-the-editor">Using the Editor</Link></li>
                  <li><Link to="/beginner/detaching-the-editor">Detaching the Editor</Link></li>
                  <li><Link to="/beginner/creating-files-and-folders">Creating Files and Folders</Link></li>
                  <li><Link to="/beginner/importing-and-exporting-files">Importing and Exporting Files</Link></li>
                  <li><Link to="/beginner/sharing-hyperdrives">Sharing Hyperdrives</Link></li>
                  <li><Link to="/beginner/hosting-hyperdrives">Hosting Hyperdrives</Link></li>
                </ul>
              </div>
              <div className={classnames('col col--4', styles.section)}>
                <h2 id="intermediate">Intermediate</h2>
                <ul className={styles['secondary-links-list']}>
                  <li><Link to="/intermediate/your-profile-drive">Your Profile Drive</Link></li>
                  <li><Link to="/intermediate/your-address-book">Your Address Book</Link></li>
                  <li><Link to="/intermediate/your-system-drive">Your System Drive</Link></li>
                  <li><Link to="/intermediate/syncing-with-folders">Syncing with Folders</Link></li>
                </ul>
              </div>
              <div className={classnames('col col--4', styles.section)}>
                <h2 id="advanced">Advanced</h2>
                <ul className={styles['secondary-links-list']}>
                  <li><Link to="/advanced/webterm">Webterm</Link>. Beaker's terminal environment.</li>
                  <li><Link to="/advanced/creating-mounts">Creating Mounts</Link></li>
                  <li><Link to="/advanced/editing-file-metadata">Editing File Metadata</Link></li>
                  <li><Link to="/advanced/forking-hyperdrives">Forking Hyperdrives</Link></li>
                  <li><Link to="/advanced/comparing-and-merging-hyperdrives">Comparing and Merging Hyperdrives</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
