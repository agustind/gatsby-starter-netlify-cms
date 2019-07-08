// webpack fix for libraries that require 'window' to be defined
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /macy/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }