import './HeadMenus.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { push } from 'connected-react-router';
import * as actionTypes from '../actionTypes';
import Selection from 'components/Selection/Selection';
import totalMenus from '../datas';

class HeadMenus extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  onFirstSelect = id => {
    const {dispatch,header,router} = this.props;
    let secondMenus = this.getMenus(totalMenus,id);
    if(secondMenus.subs){
      dispatch(
        {
          type: actionTypes.FIRST,
          id
        }
      )
    }
    else{
      dispatch(
        {
          type: actionTypes.FIRST,
          id
        }
      )
      dispatch(push(`/${id}`))
    }
  }

  onSecondSelect = id => {
    const {dispatch,header,router} = this.props;
    const {firstSelectId} = header;

    let secondMenus = this.getMenus(totalMenus,firstSelectId);
    let thirdMenus = this.getMenus(secondMenus,id);

    if(thirdMenus.subs){
      dispatch(
        {
          type: actionTypes.SECOND,
          id
        }
      )
    }
    else{
      dispatch(
        {
          type: actionTypes.SECOND,
          id
        }
      )
      dispatch(push(`/${firstSelectId}/${id}`))
    }
  }

  onThirdSelect = id => {
    const {dispatch,header,router} = this.props;
    const {firstSelectId,secondSelectId} = header;

    dispatch(
      {
        type: actionTypes.THIRD,
        id
      }
    );
    dispatch(push(`/${firstSelectId}/${secondSelectId}/${id}`))
  }

  getMenus = (preMenus,id)=>{
    let menus;
    preMenus.subs.forEach(item=>{
      if(item.id === id){
        menus = item;
      }
    });
    return menus;
  }

  renderNextSelection =() =>{
    const {firstSelectId,secondSelectId,thirdSelectId} = this.props.header;
    let dom=[];
    if(firstSelectId){
      let secondMenus = this.getMenus(totalMenus,firstSelectId);
      console.log(secondMenus)
      if(secondMenus.subs){
        dom.push(
          <Selection
            key={secondMenus.key}
            title={secondMenus.title}
            list={secondMenus.subs}
            selectId={secondSelectId}
            onSelect={this.onSecondSelect}
          />
        )

        if(secondSelectId){
          let thirdMenus = this.getMenus(secondMenus,secondSelectId);
          console.log(thirdMenus)
          if(thirdMenus.subs){
            dom.push(
              <Selection
                key={thirdMenus.key}
                title={thirdMenus.title}
                list={thirdMenus.subs}
                selectId={thirdSelectId}
                onSelect={this.onThirdSelect}
              />
            )
          }
        }
      }
    }

    return dom;
  }

  render() {
    const {firstSelectId} = this.props.header;

    return (
      <div className="selections">
        <Selection
          title={totalMenus.title}
          list={totalMenus.subs}
          selectId={firstSelectId}
          onSelect={this.onFirstSelect}
        />
        {this.renderNextSelection()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  header: state.header,
  router:state.router
})

export default connect(mapStateToProps)(HeadMenus)
