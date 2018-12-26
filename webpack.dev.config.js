var webpack=require('webpack')
var path=require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var parentDir = path.join(__dirname + '/' )
module.exports = {
    entry: [
        
        path.join(parentDir,'index.js')
    ],
    module: {
        rules:[ {
            
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
               /*{
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]', 'postcss-loader'],
			},
                {
                    test: /\.less$/,
                    loaders: ["style-loader", "css-loader", "less-loader"]
                     
                },*/
			/*{
				test: /\.css$/,
				include: /node_modules/,
				loaders: [MiniCssExtractPlugin.loader, 'css-loader'],
			}*/
               {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader']
            },
            {
              test: /\.(gif|svg|jpg|png)$/,
              loader: "file-loader",
            }
            
        ]
    },
    output: {
        path: parentDir,
        filename: 'bundle.js'
    },
    plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].css',
		}),
	],
    devtool:false,
    devServer: {
        //contentBase: parentDir,
        inline:true,
        headers: { "Access-Control-Allow-Origin": "*" },
        port:3000,
        historyApiFallback: true,
        disableHostCheck: true
    }
}