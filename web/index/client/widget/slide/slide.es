"use strict";

class Slide extends React.Component {
    componentDidMount() {
        new Swiper('#tr', {
            autoplay: 5000, //可选选项，自动滑动
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
        })
    }
    render() {
        return (
            <div className='ydweb-widget-slide'>
        		<div className="swiper-container" id="tr">
		    <div className="swiper-wrapper">
		        <div className="swiper-slide"><img className="slideitem slide-before" src={this.props.data[0].urlitem} /></div>
		        <div className="swiper-slide"><img className="slideitem slide-now" src={this.props.data[1].urlitem} /></div>
		        <div className="swiper-slide"><img className="slideitem slide-after" src={this.props.data[2].urlitem} /></div>
                         </div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-pagination"></div>
		 </div>
                </div>
        )
    }
}

const imgs = [{
    urlitem: __uri("../../static/images/banner3.jpg")
}, {
    urlitem: __uri("../../static/images/banner2.jpg")
}, {
    urlitem: __uri("../../static/images/banner1.jpg")
}]
ReactDOM.render(
    <Slide data={imgs} />,
    document.getElementById('widget-slide')
);