'use strict';
import Loginbox from "loginbox.es";
console.log(Loginbox);

//属性校验器
Loginbox.propTypes = {
	data: React.PropTypes.string.isRequired
}
Loginbox.defaultProps = {
	data: [{
		name: '用户名',
		type: 'text',
		placeholder: '用户名'
	}, {
		name: '密码',
		type: 'password',
		placeholder: '密码'
	}, {
		name: '验证密码',
		type: 'password',
		placeholder: '验证密码'
	}, {
		name: '手机号',
		type: 'text',
		placeholder: '手机号码'
	}, {
		name: '邮箱',
		type: 'text',
		placeholder: '邮箱'
	}]
};

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
		}
		this.echomsg = this.echomsg.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.changeDataVal = this.changeDataVal.bind(this);
	}

	echomsg() {
		console.log('Nihao,zheshionsole');
	}

	submitForm(e) {
		console.log(e);
		console.log('提交表单可好');
	}

	changeDataVal() {
		console.log('fu');
		// console.log(e.target.value);
	}



	render() {
		return ( <div>
			<h1 onClick = {this.echomsg}> 登陆注册 </h1>
			{
				Loginbox.defaultProps.data.map(function(elem, index) {
					return <div><span>{
						elem['name']
					} </span><Loginbox value='nnnnn'  type={elem['type']} placeholder={elem['placeholder']} / > < /div>
				})
			} 
			<input type = "submit" onClick = {this.submitForm} />
			</div>
		)
	}

}

ReactDOM.render(<div><Login data = "这是登陆的部分" /></div>,
	document.getElementById('login-widget')
);