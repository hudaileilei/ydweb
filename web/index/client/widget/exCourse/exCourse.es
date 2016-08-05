"use strict";

import CourseTab from 'courseTab.es';
import CourseList from 'courseList.es';


var ExCourse = React.createClass({
    getInitialState: function() {
        return {
            courseList: [{
                link: 'http://www.baidu.com',
                imgSrc: __uri('../../static/images/course-pic01.jpg'),
                title: '1',
                teacher: '袁志佳老师0',
                price: '￥199'
            }, {
                link: 'http://www.baidu.com',
                imgSrc: __uri('../../static/images/course-pic02.jpg'),
                title: '2',
                teacher: '袁志佳老师0',
                price: '￥199'
            }, {
                link: 'http://www.baidu.com',
                imgSrc: __uri('../../static/images/course-pic01.jpg'),
                title: '3',
                teacher: '袁志佳老师0',
                price: '￥199'
            }, {
                link: 'http://www.baidu.com',
                imgSrc: __uri('../../static/images/course-pic02.jpg'),
                title: '4',
                teacher: '袁志佳老师0',
                price: '￥199'
            }, {
                link: 'http://www.baidu.com',
                imgSrc: __uri('../../static/images/course-pic01.jpg'),
                title: '5',
                teacher: '袁志佳老师0',
                price: ''
            }, {
                link: 'http://www.baidu.com',
                imgSrc: __uri('../../static/images/course-pic02.jpg'),
                title: '6',
                teacher: '袁志佳老师0',
                price: ''
            }, {
                link: 'http://www.baidu.com',
                imgSrc: __uri('../../static/images/course-pic01.jpg'),
                title: '7',
                teacher: '袁志佳老师0',
                price: ''
            }, {
                link: 'http://www.baidu.com',
                imgSrc: __uri('../../static/images/course-pic02.jpg'),
                title: '8',
                teacher: '袁志佳老师0',
                price: ''
            }],
            tabsList: ['热门课程', '实战课程', '精彩视频', '热门新课', '热门免费']
        }
    },
    updateList: function(i) {
        this.setState({
            courseList: this.state.courseList.sort(function randomsort(a, b) {
                return Math.random() > .5 ? -1 : 1;
            })
        });
        console.log(this.state.courseList);
    },
    render: function() {
        return <div>
 		            <CourseTab data={this.state.tabsList} updateList={this.updateList} />
 					<CourseList data={this.state.courseList} />
 				</div>
    }
});

// class ExCourse extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {};
// 		this.state.courseList = [
// 						{	
// 							link: 'http://www.baidu.com',
// 							imgSrc: __uri('../../static/images/course-pic01.jpg'),
// 							title: '炫丽的倒计时效果Canvas绘图与动画',
// 							teacher: '袁志佳老师0',
// 							price: '￥199'
// 						},
// 						{	
// 							link: 'http://www.baidu.com',
// 							imgSrc: __uri('../../static/images/course-pic02.jpg'),
// 							title: '炫丽的倒计时效果Canvas绘图与动画',
// 							teacher: '袁志佳老师0',
// 							price: '￥199'
// 						},
// 						{	
// 							link: 'http://www.baidu.com',
// 							imgSrc: __uri('../../static/images/course-pic01.jpg'),
// 							title: '炫丽的倒计时效果Canvas绘图与动画',
// 							teacher: '袁志佳老师0',
// 							price: '￥199'
// 						},
// 						{	
// 							link: 'http://www.baidu.com',
// 							imgSrc: __uri('../../static/images/course-pic02.jpg'),
// 							title: '炫丽的倒计时效果Canvas绘图与动画',
// 							teacher: '袁志佳老师0',
// 							price: '￥199'
// 						},
// 						{	
// 							link: 'http://www.baidu.com',
// 							imgSrc: __uri('../../static/images/course-pic01.jpg'),
// 							title: '炫丽的倒计时效果Canvas绘图与动画',
// 							teacher: '袁志佳老师0',
// 							price: ''
// 						},
// 						{	
// 							link: 'http://www.baidu.com',
// 							imgSrc: __uri('../../static/images/course-pic02.jpg'),
// 							title: '炫丽的倒计时效果Canvas绘图与动画',
// 							teacher: '袁志佳老师0',
// 							price: ''
// 						},
// 						{	
// 							link: 'http://www.baidu.com',
// 							imgSrc: __uri('../../static/images/course-pic01.jpg'),
// 							title: '炫丽的倒计时效果Canvas绘图与动画',
// 							teacher: '袁志佳老师0',
// 							price: ''
// 						},
// 						{	
// 							link: 'http://www.baidu.com',
// 							imgSrc: __uri('../../static/images/course-pic02.jpg'),
// 							title: '炫丽的倒计时效果Canvas绘图与动画',
// 							teacher: '袁志佳老师0',
// 							price: ''
// 						}
// 					];
// 		this.state.tabsList = ['热门课程','实战课程','精彩视频','热门新课','热门免费'];
// 	}
// 	updateList(a){
// 		console.log(this);
// 	}
// 	render() {
// 		return  <div>
// 		            <CourseTab data={this.state.tabsList} updateList={this.updateList} />
// 					<CourseList data={this.state.courseList} />
// 				</div>
// 	}
// }

ReactDOM.render(
    <ExCourse />,
    document.getElementById('ex-course-content')
);