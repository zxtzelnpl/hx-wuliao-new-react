import './StockPool.less';
import React, {Component} from 'react';
import StockPoolItem from './StockPoolItem';
import Selection from './Selection'

const datas = [];
for(var i=0;i<5;i++){
  datas.push({
    key:i,
    name:'万隆光电',
    code:'300501',
    id:`id${i}`
  })
}

const subs=[

]
for(var i = 0 ; i<100;i++){
  subs.push({
    id:`id${i}`,
    key:i,
    text:`第${i}期`
  })
}

class StockPool extends Component {

  state = {

  }

  renderList(){
    const {url} = this.props;

    return datas.map((item,index)=>(<StockPoolItem {...item} key={item.id} index={index} url={url}/>))
  }

  handleSelect=(id)=>{
    console.log(id);
  }

  render() {

    const {title} = this.props;

    return (
      <div className={"stockPool"}>
        <div className="stockPoolTitle">
          <span className="text">
            {title}
          </span>
          <Selection
            key={'primary'}
            title={'请选择'}
            list={subs}
            selectId={this.state.selectId}
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
