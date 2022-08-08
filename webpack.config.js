const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
	mode: 'production',
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'scripts.js'
	},
  module: {
		rules: [{
			test:/\.(s*)css$/,
			use: [
				miniCss.loader,
				'css-loader',
				'sass-loader',
			]
		}]
	},
	plugins: [
		new miniCss({
			filename: './style.css',
		}),
    new HTMLWebpackPlugin(
      {
        template: './index.html'
      }
    ),
		new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon'),
          to: path.resolve(__dirname, 'docs/favicon')
        },
      ]
    }),
		new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/img'),
          to: path.resolve(__dirname, 'docs/img')
        },
      ]
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ]
};