const nodeExternals = requer ( 'webpack-node-externals' );

externos: [
	nodeExternals ( ),
]

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
}
