"use strict";

class CourseTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: this.props.data
        }
    }
    handleClick(i) {
        this.props.updateList(i);
    }
    render() {
        // return <a href="" onClick={this.handleClick.bind(this)}>aaa</a>
        {
            return <div className="ex-course-btn">
			{
				this.state.course.map((name,i)=>{
					return <a className={i == this.index ? 'course-btn-a active' : 'course-btn-a'} href="javascript: void(0);" onClick={this.handleClick.bind(this,i)}>{name}</a>
				})
			}
			</div>
        }
    };
};

export
default CourseTab;