let _ = require('lodash');
const path = require('path');
let base = {
    mode:"development",
    context: path.resolve(__dirname),
    module: {
	rules: [
	    { test: /\.tsx?$/, exclude: /node_modules/, loader: "awesome-typescript-loader" },
	    { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
	]
    },
    resolve: {
	modules: [
	    "node_modules"
	],
	extensions: [".ts", ".tsx", ".js"]
    },
}
function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
	return srcValue.concat(objValue);
    }
}
let merge = (o)=>_.mergeWith(base,o,customizer);
let client = merge(base,{
    entry: './src',
    output: {
	filename: 'client.js',
	path: path.resolve(__dirname, 'public')
    },
    resolve: {
	modules: [
	    path.resolve(__dirname,"src",)
	],
    },
})
let server =  merge(base,{
    entry: './server-src',
    output: {
	filename: 'server.js',
	path: path.resolve(__dirname,"")

    },
    resolve: {
	modules: [
	    path.resolve(__dirname,"server-src")
	],
    }
})


module.exports = [client,server];
