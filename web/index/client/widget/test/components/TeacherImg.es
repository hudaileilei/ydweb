"use strict";

class TeacherImg extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="teacherMoudle">
                <div className="img">
                    <img src={this.props.teacherImg}/>
                </div>
                <div className="show">
                    <div className="teacher_name">{this.props.teacherName}</div>
                    <div className="teacher_info">{this.props.teacherInfo}</div>
                </div>
            </div>
        )
    }
}

export default TeacherImg;