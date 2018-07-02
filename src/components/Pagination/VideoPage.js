import './VideoPage.less';
import React, {Component} from 'react';
import VideoItem from './VideoItem';
import PageNumbers from './PageNumbers';
import poster from 'assets/images/videoItemImg.jpg';
const datas=[

]
for(let i=0;i<9;i++){
  datas.push({
    id:`new${i}`,
    title:'视频名称',
    brief:'强势优选20180604高周转低负债互动资料',
    videoSrc:'/abc',
    poster
  })
}

const total = 201;
const pageSize = 20;

class VideoPage extends Component {

  turnPage(page){
    console.log(page)
  }

  renderList(){
    return datas.map(data=>(<VideoItem key={data.id} {...data}/>))
  }

  render() {

    const {title} = this.props
    let totalPages = Math.ceil(total/pageSize);
    return (
      <div className={"videoPage"}>
        <p className="videoPageTitle">{title}</p>
        <ul className="oneVideoPage">
          {this.renderList()}
        </ul>
        <PageNumbers
          currentPage={11}
          totalPages={totalPages}
          numberGroupSize={5}
          turnPage={this.turnPage}
        />
      </div>
    )
  }
}

export default VideoPage
