"use strict";
import TeacherImg from './components/TeacherImg.es';
class TeacherPiece extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    	let row = [];
    	this.props.teacher.map(function(_teacher){
    		row.push(
    			<div className="teacher_img_box">
	            	<TeacherImg 
	            		teacherImg={_teacher.teacherImg}
	            		teacherName={_teacher.teacherName}
	            		teacherInfo={_teacher.teacherInfo}
	            	/>
    			</div>
    		)
    	})
    	console.log(row);
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

let _img = __uri('../../static/images/teacher.png');
let data = {
	teachers: [
		{title: '志佳', teacherInfo: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍介绍', teacherImg:_img},
		{title: '志佳', teacherInfo: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍介绍', teacherImg:_img},
		{title: '志佳', teacherInfo: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍介绍', teacherImg:_img},
		{title: '志佳', teacherInfo: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍介绍', teacherImg:_img}
	]
}

ReactDOM.render(
	<TeacherPiece 
		title="资深讲师" 
		teacher={data.teachers}
	/>, 
	document.getElementById('teacherPiece')
);

// export default TeacherPiece;

