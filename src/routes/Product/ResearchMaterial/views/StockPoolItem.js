import './StockPoolItem.less';
import React, {PureComponent} from 'react';
import classNames from 'classnames';

class StockPoolItem extends PureComponent {

  state = {
    show:false
  }

  componentDidMount() {
    console.log(this.props)
  }

  onHandleChange=()=>{
    this.setState(({show})=>({show:!show}))
  }

  render() {

    const {index, name, code, content} = this.props;
    let liClass = classNames({
      stockPoolItem:true,
      show:this.state.show
    })

    return (
      <li className={liClass}>
        <div className="stockPoolItemHead btn" onClick={this.onHandleChange}>
          <span className="index">{index + 1}</span>
          <span className="name">{name}</span>
          <span className="code">代码 ： {code}</span>
          <span className="triangle"/>
        </div>
        <div className="content" dangerouslySetInnerHTML={{__html: content}}/>
      </li>
    )
  }
}

export default StockPoolItem
