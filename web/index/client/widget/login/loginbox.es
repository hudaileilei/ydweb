"use strict";
export default class Loginbox extends React.Component{
	constructor(props){
		super(props);
		this.changeFormZi = this.changeFormZi.bind(this);
	}

	changeFormZi(e){
		console.log('zi');
		this.props.callBackParent(e);
	}

	render(){
		return <input type={this.props.type} value={this.props.value} onChange={this.changeFormZi} placeholder={this.props.placeholder} />
	}
}
