/**
 * @file 静态资源 全站配置
 */
var WEB_CONFIG = {
    deploy: {
        test: { //mobile1 部署
            receiver: '',
            root: ''
        },
        dev: { //本地开发环境
        },
        product: {}
    },
    roadmap: {
        domain: {
            dev: '', // "http://mobile1.map.qq.com/m", // 默认根目录
            product: "http://s.map.qq.com/mobilemap" //线上CDN目录
        }
    }
};

//上传到一个 remote测试机
// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.config.set('livereload.port', 35729);

if (fis.IS_FIS3) {
    fis.media('debug').match('*', {
        optimizer: null,
        useHash: false,
        deploy: fis.plugin('http-push', {
            receiver: 'http://127.0.0.1:8085/yog/upload',
            to: '/'
        })
    });
    fis.media('debug-prod').match('*', {
        deploy: fis.plugin('http-push', {
            receiver: 'http://127.0.0.1:8085/yog/upload',
            to: '/'
        })
    });
} else {
    fis.config.set('deploy', {
        debug: {
            to: '/',
            // yog2 默认的部署入口，使用调试模式启动 yog2 项目后，这个入口就会生效。IP与端口请根据实际情况调整。
            receiver: 'http://127.0.0.1:8085/yog/upload'
        }
    });
}
// 集成inline插件
fis.config.merge({
    modules: {
        preprocessor: {
            tpl: 'inline, extlang'
        },
        lint: {
            js: 'jshint'
        }
    },

    project: {
        exclude: /\/__.*\.(js|less|css)/i
    },
    settings: {
        lint: {
            jshint: {
                curly: true,
                eqeqeq: true,
                forin: false,
                latedef: "nofunc",
                newcap: true,
                noarg: true,
                nonew: true,
                undef: true,
                unused: true,
                trailing: true,
                maxparams: 4,
                maxdepth: 4,
                maxlen: 100,
                maxstatements: 25,
                freeze: true,
                strict: false,

                boss: true,
                expr: true,
                laxcomma: true,
                laxbreak: true,
                sub: true,
                lastsemic: true,
                eqnull: true,
                multistr: true,

                browser: true,
                jquery: true,
                node: true,

                ignored: [
                    'static/js/libs/**.js',
                    'static/js/common_libs.js',
                    'static/js/lazyload.js',
                    /\.tmpl$/i
                ],
                globals: {
                    "require": false,
                    "define": false,
                    "listener": false,
                    "__inline": false
                }
            }
        }
    }
});
fis.config.set('project.fileType.text', 'jsx'); //*.jsx files are text file.
fis.config.set('modules.parser.jsx', 'react'); //compile *.jsx with fis-parser-react plugin
fis.config.set('roadmap.ext.jsx', 'js'); //*.jsx are exactly treat as
fis.config.set('project.fileType.text', 'es');
fis.config.set('project.fileType.text', 'tpl');
fis.config.set('modules.parser.es', 'babel-5.x');
fis.config.set('roadmap.ext.es', 'js');
fis.config.set('settings.parser.babel-5.x', {
    blacklist: ['regenerator'],
    optional: ['asyncToGenerator'],
    sourceMaps: true,
    stage: 3
});
module.exports = WEB_CONFIG;