import './HeadMenus.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { push } from 'connected-react-router';
import Selection from 'components/Selection/Selection';
import totalMenus from '../datas';

class HeadMenus extends Component {

  constructor(props){
    super(props);
    this.state={};
    let array = props.router.location.pathname.split('/');
    array.shift();
    if(array[0] === 'product'){
      this.state.firstSelectId = array[0];
      this.state.secondSelectId = array[1];
      this.state.thirdSelectId = array[2];
    }
    else if(array[0] === 'comprehensive'){
      this.state.firstSelectId = array[0];
      this.state.secondSelectId = array[1];
    }
  }

  // TODO:此处有待优化
  componentDidUpdate(preProps,preState){

    if(this.props.router!==preProps.router){
      let array = this.props.router.location.pathname.split('/');
      array.shift();
      let state = {
        firstSelectId:null,
        secondSelectId:null,
        thirdSelectId:null,
      };
      if(array[0] === 'product'){
        state.firstSelectId = array[0];
        state.secondSelectId = array[1];
        state.thirdSelectId = array[2];
      }
      else if(array[0] === 'comprehensive'){
        state.firstSelectId = array[0];
        state.secondSelectId = array[1];
      }
      this.setState(state)
    }
  }

  onFirstSelect = id => {
    this.setState({
      firstSelectId:id,
      secondSelectId:null,
      thirdSelectId:null
    })
  }

  onSecondSelect = secondSelectId => {
    const {dispatch} = this.props;
    const {firstSelectId} = this.state;
    let firstChoice = this.getChoice(totalMenus.subs,firstSelectId);
    let secondChoice = this.getChoice(firstChoice.subs,secondSelectId);

    if(secondChoice.subs){
      this.setState({
        secondSelectId:secondSelectId,
        thirdSelectId:null
      })
    }
    else{
      if(secondSelectId==='marketing'){
        dispatch(push(`/${firstSelectId}/${secondSelectId}/speechcraft`))
      }
      else if(secondSelectId==='investment'){
        dispatch(push(`/${firstSelectId}/${secondSelectId}/marketstock`))
      }
    }
  }

  onThirdSelect = thirdSelectId => {
    const {dispatch} = this.props;
    const {firstSelectId,secondSelectId} = this.state;
    dispatch(push(`/${firstSelectId}/${secondSelectId}/${thirdSelectId}/marketing/product`));
  }

  getChoice = (preMenus,id)=>{
    let choice = {};
    preMenus.forEach(item=>{
      if(item.id === id){
        choice = item;
      }
    });
    return choice;
  }

  render() {
    const {firstSelectId,secondSelectId,thirdSelectId} = this.state;
    let firstChoice = {},secondChoice={};
    if(firstSelectId){
      firstChoice = this.getChoice(totalMenus.subs,firstSelectId);

      console.log(firstChoice);

      if(firstChoice.subs&&firstChoice.subs.length>0){
        secondChoice = this.getChoice(firstChoice.subs,secondSelectId);

        console.log(secondChoice);

      }
    }



    return (
      <div className="headerSelections">
        <Selection
          title={totalMenus.title}
          list={totalMenus.subs}
          selectId={firstSelectId}
          onSelect={this.onFirstSelect}
        />
        <Selection
          title={firstChoice.title}
          list={firstChoice.subs}
          selectId={secondSelectId}
          onSelect={this.onSecondSelect}
        />
        <Selection
          title={secondChoice.title}
          list={secondChoice.subs}
          selectId={thirdSelectId}
          onSelect={this.onThirdSelect}
        />
      </div>
    )
  }
}

const mapStateToProps = state =>({
  router:state.router
})

export default connect(mapStateToProps)(HeadMenus)
