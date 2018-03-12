const assetPrefix = process.env.ENV_GH_PAGES ? '/styled-starter-basic-gh-pages' : '';

module.exports = {
  	exportPathMap: function () {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' },
			'/design': { page: '/design' }
		}
  	},
  	assetPrefix: assetPrefix
}
