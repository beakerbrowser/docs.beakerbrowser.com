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
          <h1 className="hero__title">Welcome</h1>
          <p className="hero__subtitle">Welcome to the Beaker Browser documentation!</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg'
              )}
              to="/getting-started-with-beaker">
              Getting Started with Beaker
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.sections}>
          <div className="container">
            <div className="row">
              <div className={classnames('col col--4', styles.section)}>
                <h2 id="beginner">Beginner</h2>
                <ul>
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
                <ul>
                  <li><Link to="/intermediate/your-profile-drive">Your Profile Drive</Link></li>
                  <li><Link to="/intermediate/your-address-book">Your Address Book</Link></li>
                  <li><Link to="/intermediate/your-system-drive">Your System Drive</Link></li>
                </ul>
              </div>
              <div className={classnames('col col--4', styles.section)}>
                <h2 id="advanced">Advanced</h2>
                <ul>
                  <li><Link to="/advanced/webterm">Webterm</Link>. Beaker's terminal environment.</li>
                  <li><Link to="/advanced/creating-mounts">Creating Mounts</Link></li>
                  <li><Link to="/advanced/editing-file-metadata">Editing File Metadata</Link></li>
                  <li><Link to="/advanced/forking-hyperdrives">Forking Hyperdrives</Link></li>
                  <li><Link to="/advanced/comparing-and-merging-hyperdrives">Comparing and Merging Hyperdrives</Link></li>
                </ul>
              </div>
              <div className={classnames('col col--12', styles.section)}>
                <h2 id="apis">APIs</h2>
                <ul>
                  <li><Link to="/apis/beaker.capabilities">beaker.capabilities</Link>. Create temporary, revocable URLs which map to hyperdrives.</li>
                  <li><Link to="/apis/beaker.contacts">beaker.contacts</Link>. Read and manage the user's address book.</li>
                  <li><Link to="/apis/beaker.hyperdrive">beaker.hyperdrive</Link>. Methods to read and write Hyperdrive data.</li>
                  <li><Link to="/apis/beaker.markdown">beaker.markdown</Link>. Render Markdown into HTML.</li>
                  <li><Link to="/apis/beaker.peersockets">beaker.peersockets</Link>. Send and receive messages to peers on a hyperdrive.</li>
                  <li><Link to="/apis/beaker.shell">beaker.shell</Link>. Global user interface methods, typically user dialogs.</li>
                  <li><Link to="/apis/beaker.terminal">beaker.terminal</Link>. Register commands which are accessible from <Link to="/advanced/webterm">Webterm</Link>.</li>
                </ul>
              </div>
              <div className={classnames('col col--12', styles.section)}>
                <h2 id="developers">Developers</h2>
                <ul>
                  <li><Link to="/developers/introduction-to-hyperdrive">Introduction to Hyperdrive</Link></li>
                  <li><Link to="/developers/index.json-manifest">Index.json Manifest</Link>. Information about the Hyperdrive manifest file, <code>index.json</code>.</li>
                  <li><Link to="/developers/content-type-negotiation">Content-Type Negotiation</Link>. How <code>hyper://</code> handles URLs without extensions.</li>
                  <li><Link to="/developers/frontends-.ui-folder">Frontends (.ui folder)</Link>. A tool to inject HTML output into every browsed resource.</li>
                  <li><Link to="/developers/goto-files">Goto Files</Link>. Files which act like shortcuts.</li>
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
