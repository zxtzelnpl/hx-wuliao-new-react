import './Selection.less';

import React, {PureComponent} from 'react';
import classNames from 'classnames';


class Selection extends PureComponent {
  constructor(props){
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this)
    this.onHandleSelect = this.onHandleSelect.bind(this)
    this.renderItems = this.renderItems.bind(this)
    this.renderSelect = this.renderSelect.bind(this)
    this.state={
      show:false
    }
  }

  onHandleClick(){
    this.setState(state=>{
      return {
        show:!state.show
      }
    })
  }

  onHandleSelect(e){
    if(e.target.nodeName === 'LI'){
      this.setState({
        show:false
      })

      let id = e.target.getAttribute('id').replace('select_','')

      this.props.onSelect(id)
    }
  }

  renderSelect(){
    let {list,selectId,title}= this.props;
    let dom;

    if(!(list instanceof Array)){
      dom = <p className="selection-selected-disabled" >暂无选项</p>
    }
    else if(selectId){
      let item = null;
      list.forEach(_item=>{
        if(_item.id === selectId){
          item = _item
        }
      })
      dom = <p className="selection-selected" onClick={this.onHandleClick}>{item.text}</p>
    }
    else if(title){
      dom = <p className="selection-selected" onClick={this.onHandleClick}>{title}</p>
    }

    return dom;
  }

  renderItems(){
    const {list,selectId} = this.props;
    let dom = null;

    if(list instanceof Array&&list.length>0){
      dom =  list.map(item=>{
        const {key,text,id} = item;
        let option;
        if(id !== selectId){
          option =<li className="zxt-selection-item" key={key} id={`select_${id}`}>{text}</li>;
        }
        return option
      })
    }


    return dom;
  }

  render () {
    let selectClassName = classNames({
      selection:true,
      show:this.state.show
    });

    return (
      <div className={selectClassName}>
        {this.renderSelect()}
        <ul
          className="selection-box"
          onClick={this.onHandleSelect}
        >
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}

export default Selection
