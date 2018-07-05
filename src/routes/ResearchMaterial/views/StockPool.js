import './StockPool.less';
import React, {Component} from 'react';
import StockPoolItem from './StockPoolItem';
import Selection from './Selection'

class StockPool extends Component {

  state = {

  }

  renderList(){
    const {url,info,selectId} = this.props;

    return info.map((item,index)=>(<StockPoolItem {...item} key={item.id} index={index} url={`${url}/${selectId}`}/>))

  }

  handleSelect=(id)=>{
    console.log(id);
  }

  render() {

    const {title,list,selectId} = this.props;

    return (
      <div className={"stockPool"}>
        <div className="stockPoolTitle">
          <span className="text">
            {title}
          </span>
          <Selection
            key={'primary'}
            title={'请选择'}
            list={list}
            selectId={selectId}
            onSelect={this.handleSelect}
          />
          </div>
        <ul className="stockPoolContent">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

export default StockPool
