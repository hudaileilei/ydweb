/**
 * @file FIS 配置
 * @author yuanzhijia@yidengxuetang.com
 */
var WEB_CONFIG = require("../config.js");
fis.config.merge({
    namespace: 'common',
    roadmap: {
        //cdn配置
        domain: WEB_CONFIG.roadmap.domain
    },
    pack: {
        '/pkg/common_widgets.js': [
            'client/widget/**.js'
        ],
        '/pkg/common_widgets.css': [
            'client/widget/**.less'
        ]
    }
});