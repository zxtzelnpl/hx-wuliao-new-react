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
    let {list,select,title}= this.props;
    let item = null;

    if(select){
      list.forEach(_item=>{
        if(_item.id === select){
          item = _item
        }
      })
    }

    if(item){
      return item.text;
    }
    else{
      return title;
    }
  }

  renderItems(){
    return this.props.list.map(item=>{
      const {key,text,id} = item;
      return <li className="zxt-selection-item" key={key} id={`select_${id}`}>{text}</li>
    })
  }

  render () {
    let selectClassName = classNames({
      selection:true,
      show:this.state.show
    });

    return (
      <div className={selectClassName}>
        <p className="selection-selected"
           onClick={this.onHandleClick}>{this.renderSelect()}</p>
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
