import './StockPool.less';
import React, {Component} from 'react';
import propTypes from 'prop-types';
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
    this.props.onSelect(id)
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

StockPool.propTypes={
  title:propTypes.string.isRequired,
  url:propTypes.string.isRequired,
  selectId:propTypes.string.isRequired,
  list:propTypes.array.isRequired,
  info:propTypes.array.isRequired,
  onSelect:propTypes.func.isRequired,
}

export default StockPool
