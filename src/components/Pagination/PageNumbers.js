import './PageNumbers.less';

import React, {Component} from 'react';
import classNames from "classnames";

class PageNumbers extends Component {

  constructor(props){
    super(props);
    const {currentPage,totalPages,numberGroupSize} = this.props;
    this.totalNumberGroup = Math.ceil(totalPages/numberGroupSize);// from 1
    this.state={
      numberGroupIndex:Math.ceil(currentPage/numberGroupSize) // from 1
    }
    this.prev=this.prev.bind(this);
    this.next=this.next.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }

  prev(){
    this.setState(({numberGroupIndex})=>{
      return {
        numberGroupIndex:numberGroupIndex-1
      }
    })
  }

  next(){
    this.setState(({numberGroupIndex})=>{
      return {
        numberGroupIndex:numberGroupIndex+1
      }
    })
  }

  handleClick(e){
    let li = e.target;

    if(li.nodeName==='LI'
      &&li.className.indexOf('on')===-1
      &&li.className.indexOf('pageIndex')>-1
    ){
      let page = e.target.innerHTML;
      this.props.turnPage(page);
    }
  }

  render() {
    const {currentPage,totalPages,numberGroupSize} = this.props;
    let totalNumberGroup = this.totalNumberGroup; // from 1
    let numberGroupIndex = this.state.numberGroupIndex;// from 1
    let dom = [];

    if(numberGroupIndex!==1){
      dom.push(<li className="pageNumberItem" key={'prev'} onClick={this.prev}>&lt;</li>)
      dom.push(<li className="pageNumberItemEllipsis" key={'prevEllipsis'}>...</li>)
    }

    for(let i = 1;i<=5;i++){
      let page = (numberGroupIndex-1)*numberGroupSize+i;

      if(page>totalPages){break;}
      let className = classNames({
        pageNumberItem:true,
        pageIndex:true,
        on:page === currentPage
      });
      dom.push(
        <li className={className} key={page}>{page}</li>
      )
    }

    if(numberGroupIndex!==totalNumberGroup){
      dom.push(<li className="pageNumberItemEllipsis" key={'nextEllipsis'}>...</li>)
      dom.push(<li className="pageNumberItem" key={'next'} onClick={this.next}>&gt;</li>)
    }

    return (
      <ul className="pageNumbers" onClick={this.handleClick}>
        {dom}
      </ul>
    )
  }
}

export default PageNumbers
