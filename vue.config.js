module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    },
    options: {
      template: 'public/browser-extension.html',
      entry: './src/options/main.js',
      title: 'Options'
    },
    override: {
      template: 'public/browser-extension.html',
      entry: './src/override/main.js',
      title: 'Studium'
    },
    standalone: {
      template: 'public/browser-extension.html',
      entry: './src/standalone/main.js',
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
      entry: './src/sidebar/main.js',
      title: 'Sidebar'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: './src/background.js'
        },
        contentScripts: {
          entries: {
            'content-script': [
              './src/content-scripts/content-script.js'
            ]
          }
        }
      }
    }
  }
}
