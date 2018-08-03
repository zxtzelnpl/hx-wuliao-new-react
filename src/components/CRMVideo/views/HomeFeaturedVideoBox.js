import React, {Component} from 'react';
import {getPoster} from 'utils/tools';

class HomeFeaturedVideoBox extends Component {

  render() {
    const {title,url,className} = this.props;

    return (
      <a className={className} target={"_blank"} href={url}>
        <img className="img" src={getPoster()} />
        <div className="subTitle">{title}</div>
        {/*<p className="text">年末六大指数普遍小涨，中小创反弹幅度较大，放量萎缩</p>*/}
      </a>
    )
  }
}

export default HomeFeaturedVideoBox;
