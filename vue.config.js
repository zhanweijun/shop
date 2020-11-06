module.exports = {
    configureWebpack: {
        resolve: {
            // 别名配置
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'components': '@/components',
            }
        }
    }
}