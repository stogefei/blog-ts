import * as React from 'react';
import { MouseEvent } from 'react';
import { Icon } from 'antd';
import Footer from '../components/footer';
import BackTop from '../components/BackTop';
interface IState {
  show?: boolean
}

class App extends React.Component<{},IState> {

  public state = {
    show: false
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
      document.documentElement.scrollTop = 0
  }

  public render() {
    const {show} = this.state
    return (
      <div className="app-box">
        <header className="app-header">
          <div className="header-box">
            <div className="head-left">
              <a href="/" className="navbar-brand text-brand">HRAN'S</a>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><a href="/" className="nav-link">首页</a></li>
                <li className="nav-item"><a href="/" className="nav-link">首页</a></li>
                <li className="nav-item"><a href="/" className="nav-link">首页</a></li>
                <li className="nav-item"><a href="/" className="nav-link">首页</a></li>
                <li className="nav-item"><a href="/" className="nav-link">首页</a></li>
                <li className="nav-item"><a href="/" className="nav-link">首页</a></li>
              </ul>
            </div>
            <div className="header-right">
              <ul className="navbar-nav">
                <li className="nav-item"><a href="/" className="nav-icon"><Icon type="github" theme="filled" /></a></li>
                <li className="nav-item"><a href="/" className="nav-icon"><Icon type="chrome" /></a></li>
                <li className="nav-item"><a href="/" className="nav-icon"><Icon type="youtube" /></a></li>
                <li className="nav-item"><a href="/" className="nav-icon"><Icon type="codepen" /></a></li>
              </ul>
            </div>
          </div>
        </header>

        <div className="app-body">
          {/* 头部图片 */}
          <header id="masthead">
            <div className="blog-background" />
            <div className="inner">
              <div className="container">
                <h1 className="blog-title">这孩子... 或许...</h1>
                <h2 className="blog-description">或许可以用来煲汤......</h2>
              </div>
            </div>
          </header>

          <div className='container'>
            <div className="wrapper">
              <div className="aticle">
                <div className="post-card">
                  <div className="blog-background" />
                  <div className="post-card-mask">
                    <div className="post-card-container">
                      <div className="wrap" />
                      <h2 className="post-card-title" >【安全预警】关于 Linux TCP "SACK PANIC" 远程拒绝服务漏洞的通知</h2>
                      <div className="post-card-info">
                        <span >Henry • </span>
                        <span>2019 年 06 月 21 日・</span>
                        <span>解决方案</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aticle">
                <div className="post-card">
                  <div className="blog-background" />
                  <div className="post-card-mask">
                    <div className="post-card-container">
                      <div className="wrap" />
                      <h2 className="post-card-title" >【安全预警】关于 Linux TCP "SACK PANIC" 远程拒绝服务漏洞的通知</h2>
                      <div className="post-card-info">
                        <span >Henry • </span>
                        <span>2019 年 06 月 21 日・</span>
                        <span>解决方案</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aticle">
                <div className="post-card">
                  <div className="blog-background" />
                  <div className="post-card-mask">
                    <div className="post-card-container">
                      <div className="wrap" />
                      <h2 className="post-card-title" >【安全预警】关于 Linux TCP "SACK PANIC" 远程拒绝服务漏洞的通知</h2>
                      <div className="post-card-info">
                        <span >Henry • </span>
                        <span>2019 年 06 月 21 日・</span>
                        <span>解决方案</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="aticle">
                <div className="post-card">
                  <div className="blog-background" />
                  <div className="post-card-mask">
                    <div className="post-card-container">
                      <div className="wrap" />
                      <h2 className="post-card-title" >【安全预警】关于 Linux TCP "SACK PANIC" 远程拒绝服务漏洞的通知</h2>
                      <div className="post-card-info">
                        <span >Henry • </span>
                        <span>2019 年 06 月 21 日・</span>
                        <span>解决方案</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aticle">
                <div className="post-card">
                  <div className="blog-background" />
                  <div className="post-card-mask">
                    <div className="post-card-container">
                      <div className="wrap" />
                      <h2 className="post-card-title" >【安全预警】关于 Linux TCP "SACK PANIC" 远程拒绝服务漏洞的通知</h2>
                      <div className="post-card-info">
                        <span >Henry • </span>
                        <span>2019 年 06 月 21 日・</span>
                        <span>解决方案</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aticle">
                <div className="post-card">
                  <div className="blog-background" />
                  <div className="post-card-mask">
                    <div className="post-card-container">
                      <div className="wrap" />
                      <h2 className="post-card-title" >【安全预警】关于 Linux TCP "SACK PANIC" 远程拒绝服务漏洞的通知</h2>
                      <div className="post-card-info">
                        <span >Henry • </span>
                        <span>2019 年 06 月 21 日・</span>
                        <span>解决方案</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aticle" >
                <div className="post-card">
                  <div className="blog-background" />
                  <div className="post-card-mask">
                    <div className="post-card-container">
                      <div className="wrap" />
                      <h2 className="post-card-title" >【安全预警】关于 Linux TCP "SACK PANIC" 远程拒绝服务漏洞的通知</h2>
                      <div className="post-card-info">
                        <span >Henry • </span>
                        <span>2019 年 06 月 21 日・</span>
                        <span>解决方案</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        // tslint:disable-next-line:jsx-no-lambda
        {show? <BackTop name='回到顶部' backTop={this.goTop} />:null}
      </div>
    );
  }
}

export default App;
