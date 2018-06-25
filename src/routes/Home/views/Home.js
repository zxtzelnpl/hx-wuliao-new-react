import './Home.less';

import React, {Component} from 'react';
import classNames from 'classnames';
import ReactSwipe from 'react-swipe';
import Footer from './Footer'

import swipeImg1 from 'assets/images/swipeImg.jpg';
import swipeImg2 from 'assets/images/swipeImg.jpg';
import swipeImg3 from 'assets/images/swipeImg.jpg';


class Home extends Component {
  constructor(props){
    super(props)
    this.swipe = React.createRef();
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.swipeCallback = this.swipeCallback.bind(this);
    this.state ={
      swipeIndex:0
    }
  }

  handleNext(){
    this.swipe.current.swipe.next();
  }

  handlePrev(){
    this.swipe.current.swipe.prev();
  }

  swipeCallback(index){
    this.setState({
      swipeIndex:index
    })
  }

  componentDidMount(){
    console.log(this.swipe.current)
  }

  render() {
    let prevClass = classNames({
      prev:true,
      btn:true,
      disable:this.state.swipeIndex === 0
    })
    let nextClass = classNames({
      next:true,
      btn:true,
      disable:this.state.swipeIndex === 2
    })

    return (
      <div className="home">
        <div className="materialsShot">
          <div className="comprehensiveMaterial materials">
            <h4 className="title">
              综合素材
            </h4>
            <div className="links">
              <div className="link">
                <div className="icon">

                </div>
                <div className="label">
                  营销素材
                </div>
              </div>
              <div className="link">
                <div className="icon">

                </div>
                <div className="label">
                  投资组合
                </div>
              </div>
            </div>
          </div>

          <div className="carouselWrap">
            <ReactSwipe className="carousel"
                        swipeOptions={
                          {
                            continuous: false,
                            callback:this.swipeCallback,
                            startSlide:0
                          }
                        }
                        ref={this.swipe}
            >
              <div>
                <img src={swipeImg1} />
              </div>
              <div>
                <img src={swipeImg2} />
              </div>
              <div>
                <img src={swipeImg3} />
              </div>
            </ReactSwipe>

            <div className={prevClass} onClick={this.handlePrev}> &gt; </div>
            <div className={nextClass} onClick={this.handleNext}> &lt; </div>

          </div>

          <div className="productMaterial materials">
            <h4 className="title">
              产品素材
            </h4>
            <div className="links">
              <div className="link">
                <div className="icon">

                </div>
                <div className="label">
                  强势优选组
                </div>
              </div>
              <div className="link">
                <div className="icon">

                </div>
                <div className="label">
                  牛眼投资组
                </div>
              </div>
              <div className="link">
                <div className="icon">

                </div>
                <div className="label">
                  选股器
                </div>
              </div>
              <div className="link">
                <div className="icon">

                </div>
                <div className="label">
                  独立量化组
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="featuredVideos">
          精选视频
        </div>

        <Footer />
      </div>
    )
  }
}

export default Home;
