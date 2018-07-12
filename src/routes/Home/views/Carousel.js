import './Carousel.less'

import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';

import swipeImg1 from 'assets/images/swipeImg1.jpg';
import swipeImg2 from 'assets/images/swipeImg2.jpg';
import classNames from "classnames";

class Carousel extends Component {
  swipe = React.createRef()

  state ={
    swipeIndex:0
  }

  handleNext = ()=>{
    this.swipe.current.swipe.next();
  }

  handlePrev = ()=>{
    this.swipe.current.swipe.prev();
  }

  hoverHandle(to){
    this.swipe.current.swipe.slide(to);
  }

  componentDidMount(){
  }

  swipeCallback = (index)=>{
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
      disable:this.state.swipeIndex === 1
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
            <img className={"carousel-img"} src={swipeImg1} />
          </div>
          <div>
            <img className={"carousel-img"} src={swipeImg2} />
          </div>
        </ReactSwipe>

        <div className={prevClass} onClick={this.handlePrev}> &gt; </div>
        <div className={nextClass} onClick={this.handleNext}> &lt; </div>

      </div>
    )
  }
}

export default Carousel
