"use strict";
const json={
  question:[
    {inform:'impress让你的内容“舞”起来'},
    {inform:'阿当大话西游之WEB组件'}
  ],
  classtopname:{
      imgname:__uri('../../static/images/pic3.jpg'),
      name:'从零开始学习ThinkPHP框架',
    },
  classname:[
    {
      imgname:__uri('../../static/images/pic5.jpg'),
      name:'智能社JavaScript视频教程',
      person:'袁志佳老师'
    },
    {
      imgname:__uri('../../static/images/pic5.jpg'),
      name:'BAT名师串讲HTML+CSS前端 网页设计',
      person:'袁志佳老师'
    }
  ],
  othername:{
      imgname:__uri('../../static/images/pic5.jpg'),
      name:'模式的秘密---单例模式',
      nub:'3251'
  },
  classlist:[
    {name:'后端开发，面试被问过哪些技...'},
    {name:'背景图片填充不了屏幕，什么问题？'},
    {name:'探索相对定位的父要设relative？'},
    {name:'关于document.get取值问题?'},
    {name:'探索相对定位的父要设relative？'},
  ]
}
import TechInner from 'techinner.es';
class Technology extends React.Component{
    constructor(props){
      super()
    }
    render(){
      const _img=__uri('../../static/images/pic3.jpg')
      const _img1=__uri('../../static/images/pic5.jpg')
      return <TechInner inform={json}  src1={_img} src2={_img1}/>
    }
}

ReactDOM.render(
  <Technology />,
  document.getElementById('js-div-technology')
);
