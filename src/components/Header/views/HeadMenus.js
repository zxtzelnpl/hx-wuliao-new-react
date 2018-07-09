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

    if(this.state!==preState){
      const {firstSelectId,secondSelectId,thirdSelectId} = this.state;
      const {dispatch} = this.props;
      if(firstSelectId){
        let firstChoice = this.getChoice(totalMenus,firstSelectId);
        if(firstChoice.subs){
          if(secondSelectId){
            let secondChoice = this.getChoice(firstChoice,secondSelectId);
            if(secondChoice.subs){
              if(thirdSelectId){
                dispatch(push(`/${firstSelectId}/${secondSelectId}/${thirdSelectId}/marketing/product`))
              }
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
        }
        else{
          dispatch(push(`/${firstSelectId}`))
        }
      }
    }
    else if(this.props!==preProps&&this.props.router.location.pathname === '/live'){
      this.setState({
        firstSelectId:undefined,
        secondSelectId:undefined,
        thirdSelectId:undefined
      })
    }
  }

  onFirstSelect = id => {
    this.setState({
      firstSelectId:id,
      secondSelectId:null,
      thirdSelectId:null
    })
  }

  onSecondSelect = id => {
    this.setState({
      secondSelectId:id,
      thirdSelectId:null
    })
  }

  onThirdSelect = id => {
    this.setState({
      thirdSelectId:id
    })
  }

  getChoice = (preMenus,id)=>{
    let choice;
    preMenus.subs.forEach(item=>{
      if(item.id === id){
        choice = item;
      }
    });
    return choice;
  }

  renderNextSelection =() =>{

    const {firstSelectId,secondSelectId,thirdSelectId} = this.state;

    let dom=[];
    if(firstSelectId){
      let firstChoice = this.getChoice(totalMenus,firstSelectId);
      if(firstChoice&&firstChoice.subs){
        dom.push(
          <Selection
            key={firstChoice.key}
            title={firstChoice.title}
            list={firstChoice.subs}
            selectId={secondSelectId}
            onSelect={this.onSecondSelect}
          />
        )

        if(secondSelectId){
          let secondChoice = this.getChoice(firstChoice,secondSelectId);
          if(secondChoice&&secondChoice.subs){
            dom.push(
              <Selection
                key={secondChoice.key}
                title={secondChoice.title}
                list={secondChoice.subs}
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
    const {firstSelectId} = this.state;

    return (
      <div className="headerSelections">
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

const mapStateToProps = state =>({
  router:state.router
})

export default connect(mapStateToProps)(HeadMenus)
