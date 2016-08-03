module.exports={

  context: __dirname,
  entry:'./index.js',
  output:{
    path:'./',
    filename:'bundle.js'
  },
  devServer:{
    inline: true,
    port:3333
  },
  devtool: 'source-map',
  module:{
  loaders:[
    {
      test: /\.js$/,
      exclude:/node_modules/,
      loader:'babel',
      query:{
        presets:['es2015','react']}
    }] 
  }

}
