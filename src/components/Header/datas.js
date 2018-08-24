const childProducts = {
  subs: [
    {
      id: '/duanxianbao/marketing/product',
      text: '短线宝'
    },
    {
      id: '/junyincaopan/marketing/product',
      text: '君银操盘'
    },
    {
      id: '/junyinyanjiu/marketing/product',
      text: '君银研究'
    }
  ]
};

export default [
  {
    id: '/product',
    text: '产品素材',
    subs: [
      {
        id: '/team_qsyx',
        text: '强势优选组',
        subs: childProducts.subs
      },
      {
        id: '/team_nytz',
        text: '牛眼投资组',
        subs: childProducts.subs
      },
      {
        id: '/team_dllh',
        text: '独立量化组',
        subs: [...childProducts.subs,{
          id: '/sirendingzhi/marketing/product',
          text: '私人订制'
        }]
      }
    ]
  },
  {
    id: '/comprehensive/marketing/speechcraft',
    text: '综合素材'/*,
    subs:[
      {
        id:'/marketing/speechcraft',
        text:'营销素材',
      },
      {
        id:'/investment/marketstock',
        text:'投资组合',
      },
    ]*/
  }
]
