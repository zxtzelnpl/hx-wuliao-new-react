import './PageVideo.less';
import React, {PureComponent} from 'react';
import VideoItem from './ItemFilePath';

class PageVideoFilePath extends PureComponent {

  renderList(){

    return this.props.list.map(data=>(<VideoItem key={data.id} {...data}/>))
  }

  render() {
    return (
      <div className={"videoPage"}>
        <ul className="oneVideoPage">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

export default PageVideoFilePath
