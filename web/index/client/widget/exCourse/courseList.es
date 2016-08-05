"use strict";

class CourseList extends React.Component {
	constructor(props) {
		super(props); 
        this.state ={ 
        	list : this.props.data
        }
	}
	render() {
		return  <div className="ex-course-list clearfix">
				{
					this.state.list.map((item,i)=>{
						return <a className="course-item" href={item.link}>
							<img src={item.imgSrc} alt="课程图片" />
							<div className="course-info">
								<h3>{item.title}</h3>
								<p className="course-info-bottom"><span>{item.teacher}</span><em>{item.price}</em></p>
							</div>
						</a>
					})
				}
				</div>
	}
}

export default CourseList;