import './Carousel.less'

import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';

import swipeImg1 from 'assets/images/swipeImg.jpg';
import swipeImg2 from 'assets/images/swipeImg.jpg';
import swipeImg3 from 'assets/images/swipeImg.jpg';
import classNames from "classnames";

class Carousel extends Component {
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
      <div className="homeCarouselWrap">
        <ReactSwipe className="homeCarousel"
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
    )
  }
}

export default Carousel
