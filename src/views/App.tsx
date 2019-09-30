import * as React from 'react';
import { MouseEvent } from 'react';
import BackgroundHeader from '../components/BackgroundHeader';
import Header from '../components/Header';
import Footer from '../components/BoxFooter';
import MainBox from '../components/MainBox';
import BackTop from '../components/BackTop';

interface IState {
  show?: boolean,
  list?: any
}

class App extends React.Component<{},IState> {

  public state = {
    show: false,
    list: [
      {
        id: 0,
        title: '【安全预警】关于 Linux TCP "SACK PANIC" 远程拒绝服务漏洞的通知',
        author: 'Henry •',
        time: '2019 年 06 月 21 日・',
        type: '解决方案'
      },
      {
        id: 1,
        title: '【安全预警】关于 Linux TCP "SACK PANIC" 远程拒绝服务漏洞的通知',
        author: 'Henry •',
        time: '2019 年 06 月 21 日・',
        type: '解决方案'
      },
      {
        id: 2,
        title: '【安全预警】关于 Linux TCP "SACK PANIC" 远程拒绝服务漏洞的通知',
        author: 'Henry •',
        time: '2019 年 06 月 21 日・',
        type: '解决方案'
      },
      {
        id: 3,
        title: '【安全预警】关于 Linux TCP "SACK PANIC" 远程拒绝服务漏洞的通知',
        author: 'Henry •',
        time: '2019 年 06 月 21 日・',
        type: '解决方案'
      },
      {
        id: 4,
        title: '【安全预警】关于 Linux TCP "SACK PANIC" 远程拒绝服务漏洞的通知',
        author: 'Henry •',
        time: '2019 年 06 月 21 日・',
        type: '解决方案'
      }
    ]
  }

  // public goTop = () => {
  //   document.documentElement.scrollTop = 0
  // }

  public componentDidMount() {
    window.addEventListener('scroll' , ()=>{
      const scrollTop:number = document.documentElement.scrollTop
      if(scrollTop > 500){
        this.setState({
          show : true
        })
      }else{
        this.setState({
          show : false
        })
      }
    })
  }

  public goTop(event?: MouseEvent) {
     setTimeout(()=> {
      document.documentElement.scrollTop = 0
     },300)
  }

  public render() {
    const {show} = this.state
    const {list} = this.state
    return (
      <div className="app-box">
        <Header/>

        <div className="app-body">
          {/* 头部图片 */}
          <BackgroundHeader/>

          <MainBox data={list}/>

          <Footer />
        </div>
        {show? <BackTop name='回到顶部' backTop={this.goTop} />:null}
      </div>
    );
  }
}

export default App;
