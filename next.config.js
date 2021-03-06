const path = require("path")
const webpack = require("webpack")
const withImages = require("next-images")

module.exports = withImages({
  webpack: (config) => {
    config.resolve.alias["~"] = path.resolve(__dirname)
    return config
  },
})
