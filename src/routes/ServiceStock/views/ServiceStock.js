import './ServiceStock.less';
import React, {Component} from 'react';
import PageTitle from 'components/PageTitle/PageTitle';
import StockTable from 'components/StockTable/StockTable';
import PageNumbers from 'components/Pagination/PageNumbers';

const total = 201;
const pageSize = 20;
let datas = [];

for(let i=0;i<10;i++){
  datas.push({
    teacher:'武汉选股',
    from:'焦刚V5',
    stock:'博创科技',
    buy_price:'0.000',
    buy_time:'2018/5/28 0:00:00',
    sell_price:'45.600',
    sell_time:'2018/5/29 0:00:00',
    target_profit:'46',
    stop_loss:'42',
    success_percent:'0',
    reason:'放量买入，跌破均线出局,放量买入，跌破均线出局,放量买入，跌破均线出局',
    state:'测评中',
    action:'编辑删除'
  })
}


class ServiceStock extends Component {

  turnPage(page){
    console.log(page)
  }


  render() {
    let totalPages = Math.ceil(total/pageSize);

    return (
      <div className="serviceStock">
        <PageTitle title={"营销票"}/>
        <div className="blank-height-10" />
        <StockTable
          datas={datas}
        />
        <div className="blank-height-10" />
        <PageNumbers
          currentPage={11}
          totalPages={totalPages}
          numberGroupSize={5}
          turnPage={this.turnPage}
        />
      </div>
    )
  }
}

export default ServiceStock
