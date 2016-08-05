/**
 * @file FIS 配置
 * @author yuanzhijia@yidengxuetang.com
 */
var WEB_CONFIG = require("../config.js");
fis.config.merge({
    namespace: 'index',
    roadmap: {
        //cdn配置
        domain: WEB_CONFIG.roadmap.domain
    },
    pack: {
        '/pkg/index_libs.js': [
            'client/widget/**.js'
        ]
    }
});