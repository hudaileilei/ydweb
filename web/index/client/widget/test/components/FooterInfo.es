"use strict";
import FooterMessage from './FooterMessage.es'

class FooterInfo extends React.Component{
  	constructor(props){
    	super(props)
  	}
  	render(){
  		let row = [];
  		console.log(this.props.footerMessage);
    	this.props.footerMessage.map(function(_footerMessage){
    		row.push(
    			<div className="footer_message_box">
	            	<FooterMessage 
	            		src={_footerMessage.footerImg}
	            		team={_footerMessage.team}
	            		teamInfo={_footerMessage.teamInfo}
	            	/>
    			</div>
    		)
    	})
    	return(
      		<div className="footer_banner">
        		<div className="opacity-black"><img className="bg-image" src={this.props.src} alt=""/></div>
        		<div className="footer_message">
        			{row}
        		</div>
      		</div>
    	)
  	}
}

export default FooterInfo;