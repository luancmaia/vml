module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
		]
	},
	devServer: {
		contentBase: './dist',
		port: 3333
	}
}