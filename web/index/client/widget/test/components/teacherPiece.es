"use strict";
import TeacherImg from './TeacherImg.es';
class TeacherPiece extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    	let row = [];
    	this.props.teacher.map((_teacher) => {
    		row.push(
    			<div className="teacher_img_box"  style={{height: this.props.img_height}}>
	            	<TeacherImg 
	            		teacherImg={_teacher.teacherImg}
	            		teacherName={_teacher.title}
	            		teacherInfo={_teacher.teacherInfo} 
                        img_height={this.props.img_height}
	            	/>
    			</div>
    		)
    	})
        return (
            <div className="teacher">
                <div className="teacher_title">{this.props.title}</div>
                <div className="tacher_box">
                	{row}
                </div>
            </div>
        )
    }
}

export default TeacherPiece;



