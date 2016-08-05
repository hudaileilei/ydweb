"use strict";

class Classtype extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let s = "ydweb-widget-classtype " + this.props.data.klasstoggle;
        return (<div className={s} >
                    <div className='tell-type'>
                        <h1 className="class-type">{this.props.data.type}</h1>
                        <div className="white-line"></div>
                        <a href={this.props.data.url}>
                            <h3>点击进入详情>></h3>
                        </a>
                    </div>
                </div>);
    }
}

const class_type = [{
    type: '零基础小白班',
    url: 'http://www.163.com',
    klasstoggle: "xiaobai"
}, {
    type: '高级精英班',
    url: 'http://www.yidengxuetang.com/recruit',
    klasstoggle: "gaoji"
}];

class Wrapclass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return <div className='class-type-wrap'>
            {
                this.props.data.map((item)=>{
                    return <Classtype data={item} />
                })
            }
        </div>;
    }
}

ReactDOM.render(
    <Wrapclass data={class_type} />,
    document.getElementById('class-type')
);