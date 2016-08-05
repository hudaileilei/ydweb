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
        this.state = {
            navs: [{
                name: '首页',
                active: true,
                router: 'class'
            }, {
                name: '精品课程',
                active: false,
                router: 'class'
            }, {
                name: '实践课程',
                active: false,
                router: 'class'
            }, {
                name: '讲师招募',
                active: false,
                router: 'class'
            }, {
                name: '前端进阶',
                active: false,
                router: 'class'
            }, {
                name: '关于我们',
                active: false,
                router: 'class'
            }]
        };
    }
    render() {
        return <nav><ul className="clearfix">
            {
                this.state.navs.map((item)=>{
                    return <NavItemLink data={item} />
                })
            }
        </ul></nav>
    }
}

class NavItemLink extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        return <li className={data.active ? 'active' : ''}>
            <a href={data.router}>{data.name}</a>
        </li>
    }
}

class UserComponent extends React.Component {

    constructor(props) {
        super(props);
    }
    handleFocus(e) {
        e.target.className = 'search expand';
    }
    handleBlur(e) {
        e.target.className = 'search';
    }
    render() {
        return (
            <div className="user">
            <input type="text" onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} className="search"/>
            <a href="" className="link">登录</a>
            <span>|</span>
            <a href="" className="link">注册</a>
        </div>
        )
    }
}

ReactDOM.render(
    <div className="header w1215">
        <LogoComponent />
        <NavComponent />
        <UserComponent />
    </div>,
    document.getElementsByClassName('common-widget-header')[0]
);
