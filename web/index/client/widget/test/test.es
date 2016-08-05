"use strict";
import TeacherPiece from './components/teacherPiece.es';
import FooterInfo from './components/FooterInfo.es';

let _img = __uri('../../static/images/teacher.png');
let data = {
	teachers: [
		{title: '志佳', teacherInfo: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍介绍', teacherImg:_img},
		{title: '志佳', teacherInfo: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍介绍', teacherImg:_img},
		{title: '志佳', teacherInfo: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍介绍', teacherImg:_img},
		{title: '志佳', teacherInfo: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍介绍', teacherImg:_img}
	],
	charity: [
		{title: '大力出奇迹大力出奇迹', teacherInfo: '2016-07-30', teacherImg:__uri('../../static/images/charity1.png')},
		{title: '大力出奇迹大力出奇迹', teacherInfo: '2016-07-30', teacherImg:__uri('../../static/images/charity2.png')},
		{title: '大力出奇迹大力出奇迹', teacherInfo: '2016-07-30', teacherImg:__uri('../../static/images/charity3.png')},
		{title: '大力出奇迹大力出奇迹', teacherInfo: '2016-07-30', teacherImg:__uri('../../static/images/charity4.png')}
	],
	footerMessage: [
		{footerImg: __uri('../../static/images/footer_one.png'), team: '我的背景', teamInfo: '一灯学堂由袁志佳老师和范范老师作为主讲老师以及滴滴资深前端工程师等。'},
		{footerImg: __uri('../../static/images/footer_two.png'), team: '我的团队', teamInfo: '一灯学堂由袁志佳老师和范范老师作为主讲老师以及滴滴资深前端工程师等。'},
		{footerImg: __uri('../../static/images/footer_three.png'), team: '我的愿望', teamInfo: '一灯学堂由袁志佳老师和范范老师作为主讲老师以及滴滴资深前端工程师等。'},
		{footerImg: __uri('../../static/images/footer_four.png'), team: '我的团队', teamInfo: '一灯学堂由袁志佳老师和范范老师作为主讲老师以及滴滴资深前端工程师等。'}
	]
}

// let src=__uri('../../static/img/bg.png')
let footerbanner = __uri('../../static/images/footerbanner.png');
let footerImg = __uri('../../static/images/footer_bg.png');

ReactDOM.render(
	<div>
		<TeacherPiece 
			title="资深讲师" 
			teacher={data.teachers}
			img_height="286px"
		/>
		<div className="charity">
			<TeacherPiece 
				title="我们的公益行" 
				teacher={data.charity} 
				img_height="256px"
			/>
		</div>
		<FooterInfo 
			src={footerbanner} 
			footerMessage={data.footerMessage}
		/>
	</div>,
	document.getElementById('teacherPiece')
);


