module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src-extension/popup/main.js',
      title: 'Popup'
    },
    options: {
      template: 'public/browser-extension.html',
      entry: './src-extension/options/main.js',
      title: 'Options'
    },
    override: {
      template: 'public/browser-extension.html',
      entry: './src-extension/override/main.js',
      title: 'Studium'
    },
    standalone: {
      template: 'public/browser-extension.html',
      entry: './src-extension/standalone/main.js',
      title: 'Standalone',
      filename: 'index.html'
    },
    // devtools: {
    //   template: 'public/browser-extension.html',
    //   entry: './src/devtools/main.js',
    //   title: 'Devtools'
    // },
    sidebar: {
      template: 'public/browser-extension.html',
      entry: './src-extension/sidebar/main.js',
      title: 'Sidebar'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: './src-extension/background.js'
        },
        contentScripts: {
          entries: {
            'content-script': [
              './src-extension/content-scripts/content-script.js'
            ]
          }
        }
      }
    }
  }
}
