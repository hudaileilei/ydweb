"use strict";

class FooterMessage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="index-widget-footerMessage">
                <div className="test">
                    <div className="one">
                        <div className="img">
                            <img src={this.props.src}/>
                        </div>
                            <div className="team">{this.props.team}</div>
                            <div className="teamShow">{this.props.teamInfo}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterMessage