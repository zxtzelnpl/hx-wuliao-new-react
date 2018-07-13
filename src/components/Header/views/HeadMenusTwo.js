import './HeadMenusTwo.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import SelectionDropDown from 'components/Selection/SelectionDropDown';
import SubMenu from 'components/Selection/SubMenu';
import Item from 'components/Selection/Item';
import totalMenus from '../datas';

class HeadMenus extends Component {

  subMenuClassName='sub-menu';
  menuItem='menu-item';

  renderMenus = (menus,url)=>{
    return menus.map(item=>{
      let next_url = url+item.id;
      if(item.subs){
        let menus = this.renderMenus(item.subs,next_url)
        return <SubMenu key={next_url} className={this.subMenuClassName} text={item.text}>{menus}</SubMenu>
      }
      else{
        return <Item key={next_url} url={next_url} className={this.menuItem} text={item.text} />
      }
    })
  }

  componentDidMount(){
  }

  beforeMenus = ()=>{
    const {subMenuClassName,menuItem}=this;
    return [<SubMenu className={subMenuClassName} text={"产品素材"}>
      <SubMenu className={subMenuClassName} text={"强势优选组"}>
        <Item className={menuItem} text={"短线宝"}/>
        <Item className={menuItem} text={"君银操盘"}/>
        <Item className={menuItem} text={"君银研究"}/>
      </SubMenu>
      <SubMenu className={subMenuClassName} text={"牛眼投资组"}>
        <Item className={menuItem} text={"短线宝"}/>
        <Item className={menuItem} text={"君银操盘"}/>
        <Item className={menuItem} text={"君银研究"}/>
      </SubMenu>
      <SubMenu className={subMenuClassName} text={"强势选股组"}>
        <Item className={menuItem} text={"短线宝"}/>
        <Item className={menuItem} text={"君银操盘"}/>
        <Item className={menuItem} text={"君银研究"}/>
      </SubMenu>
      <SubMenu className={subMenuClassName} text={"独立量化组"}>
        <Item className={menuItem} text={"短线宝"}/>
        <Item className={menuItem} text={"君银操盘"}/>
        <Item className={menuItem} text={"君银研究"}/>
      </SubMenu>
    </SubMenu>,
    <Item className={menuItem} text={"综合素材"}/>]
  }

  render() {
    return (
      <div className="header-selections-two">
        <div className="header-menus">
          <SelectionDropDown
              title={"请选择"}
              className={'selection-drop-down'}
              router={this.props.router}
          >
            {this.renderMenus(totalMenus,'')}
          </SelectionDropDown>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  router:state.router
})

export default connect(mapStateToProps)(HeadMenus)
