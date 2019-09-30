import * as React from 'react';
import { Icon } from 'antd';
class Header extends React.Component{
    public render(){
        return (
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
        )
    }
}

export default Header