class TechInner extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div className="technology-box">
            <div className="technology-title">
              <h1>技术文章&技术问题</h1>
            </div>
            <div className="technology-inner">
                <div className="t-fl">
                    <div className="top">
                      <h3>技术问题</h3>
                      <p>永不止步的前端</p>
                    </div>
                    <ul className="bottom">
                     { 
                      this.props.inform.question.map((data) => {
                        return <li><a href="javascript">{data.inform}</a></li>
                      })
                    }
                    </ul>
                </div>
                <div className="t-ct">
                  <dl className="top">
                    <a href="javascript:;">
                      <dt>
                        <img src={this.props.inform.classtopname.imgname} alt=""/>
                      </dt>
                      <dd>
                        <p>{this.props.inform.classtopname.name}</p>
                        <span className="mask"></span>
                      </dd>
                    </a>
                  </dl>
                  <div className="bottom">
                    { this.props.inform.classname.map((data) => {
                        return (
                            <dl>
                              <a href="javascript:;">
                                <dt><img src={data.imgname} alt=""/></dt>
                                <dd className="name">{data.name}</dd>
                                <dd className="tc">{data.person}</dd>
                              </a>
                            </dl>
                          )
                      })
                  }
                  </div>
                </div>
                <div className="t-fr">
                  <div className="top">
                    <dl className="imgbox">
                      <a href="javascript:;">
                        <dt>
                          <img src={this.props.inform.othername.imgname} alt=""/>
                        </dt>
                        <dd>
                          <p className="name">{this.props.inform.othername.name}</p>
                          <p className="nub"><span>{this.props.inform.othername.nub}</span>人在学</p>
                        </dd>
                      </a>
                    </dl>
                  </div>
                  <ul className="bottom">
                    
                    { 
                      this.props.inform.classlist.map((data) => {
                        return <li><a href="javascript:;">{data.name}</a></li>
                      })
                    }
                  </ul>
                </div>
            </div>
          </div>
        )
    }
}
export
default TechInner;