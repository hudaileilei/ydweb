"use strict";
class InputComponent extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let item = this.props.data;
		// if(item.type == 'text'){
               return <label><input ref={item.name} name={item.name} onChange={item.eventHandle} type={item.type} placeholder={item.placeholder} /></label>
		// }else if(item.type == 'submit'){
		//     return <label><input name={item.name} type={item.type} value={item.value} /></label>
		// }
	}
}


class FormComponent extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			params : {},
			formArray : 
			[
			    {
			    	type : 'text',
			    	name : 'username',
			    	placeholder : '用户名',
			    	eventHandle : this.handleChange
			    },
			    {
			    	type : 'password',
			    	name : 'password',
			    	placeholder : '密码',
			    	eventHandle : this.handleChange			    
			    },
			    {
			    	type : 'password',
			    	name : 'password2',
			    	placeholder : '确认密码',
			    	eventHandle : this.handleChange

			    },
			    {
			    	type : 'text',
			    	name : 'email',
			    	placeholder : '邮箱',
			    	eventHandle : this.handleChange

			    }
			]
		}
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e){
		e.preventDefault();
		this.state.params[e.target.name] = e.target.value;
	}

	handleSubmit(e){


		e.preventDefault();
		this.state.disable = true;
        let params = this.state.params;
        if(params['password'] != params['password2']){
        	alert('两次输入的密码不相同。');
        	this.state.disable = false;
        	return false;
        }
        
        return true;


	}

	render (){
		return  <form onSubmit={this.handleSubmit} action="/index.html" method="POST">
			{this.state.formArray.map((item)=>{
				return <InputComponent  data={item} />
			})}
			<input type="submit" value="提交" disable={this.state.disable} />
		</form>
	}
}

ReactDOM.render(
    <FormComponent data="测试属性"/>,
    document.getElementById('js-form-test')
)
