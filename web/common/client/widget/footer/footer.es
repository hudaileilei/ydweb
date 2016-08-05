"use strict";

class LogoComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="logo"></div>
    }
}


class NavComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.navs = this.props.data;
    }
    render() {
        return <nav>
            {
                this.state.navs.map((item)=>{
                    return <NavItemLink data={item} />
                })
            }
        </nav>
    }
}

class NavItemLink extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        return <a href={data.router}>{data.name}</a>

    }
}

class QrcodeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.qrcodes = [{
            name: 'tencent',
            src: __uri("../../static/images/qq.png"),
            qrcode: __uri("../../static/images/qrcode.png")
        }, {
            name: 'tencent',
            src: __uri('../../static/images/sina.png'),
            qrcode: __uri('../../static/images/qrcode.png')
        }, {
            name: 'tencent',
            src: __uri('../../static/images/wechat.png'),
            qrcode: __uri('../../static/images/qrcode.png')
        }]
    }
    render() {
        return (
            <ul className="qrcode clearfix">
            {
                this.state.qrcodes.map((item)=>{
                    return <li style={{backgroundImage:'url('+item.src+')'}} >
                        <div className="qrcodeImage">
                            <img src={item.qrcode}/>            
                        </div>
                    </li>   
                })
            }
            </ul>
        )
    }
}
const bottom_nav = [{
    name: '首页',
    router: 'class'
}, {
    name: '精品课程',
    router: 'class'
}, {
    name: '实践课程',
    router: 'class'
}, {
    name: '讲师招募',
    router: 'class'
}, {
    name: '前端进阶',
    router: 'class'
}, {
    name: '关于我们',
    router: 'class'
}];
const friend_link = [{
    name: 'EduSoho开源网络课堂',
    router: 'class'
}, {
    name: '气球鱼学院',
    router: 'class'
}, {
    name: '360安全网址导航',
    router: 'class'
}, {
    name: 'hao123',
    router: 'class'
}, {
    name: '绿色网',
    router: 'class'
}, {
    name: '站长之家',
    router: 'class'
}, {
    name: '新客网',
    router: 'class'
}, {
    name: '踏浪100',
    router: 'class'
}, {
    name: '麦子学院',
    router: 'class'
}, {
    name: '360安全网址导航',
    router: 'class'
}];
ReactDOM.render(
    (<div className="w1215">
        <LogoComponent />
        <div className="tel">
            400-800-0525
            <span>免费咨询：早9:30-晚9:30</span>
        </div>
        <QrcodeComponent />
        <NavComponent data={bottom_nav}/>
    </div>), document.getElementById('JS-container-div')
);
ReactDOM.render(
    <div className="w1215">
        <NavComponent data={friend_link}/>
        <p>Copyright © 2016 yidengxuetang.com All Rights Reversed.</p>
    </div>, document.getElementById('JS-copyright-div')
)