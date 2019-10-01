import * as React from 'react';
import { Icon } from 'antd';
import IonSvg from '../icons/icon'
class Header extends React.Component{
    
    public render(){
        return (
            <header className="app-header">
            <div className="header-box">
              <div className="head-left">
                <a href="/" className="navbar-brand text-brand">HRAN'S</a>
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item"><a href="/" className="nav-link">首页</a></li>
                  <li className="nav-item"><a href="/" className="nav-link">分类</a></li>
                  <li className="nav-item"><a href="/" className="nav-link">归档</a></li>
                  <li className="nav-item"><a href="/" className="nav-link">关于</a></li>
                  <li className="nav-item"><a href="/" className="nav-link">更多</a></li>
                </ul>
              </div>
              <div className="header-right">
                <ul className="navbar-nav">
                  <li className="nav-item"><a href="https://github.com/stogefei" target="blank" className="nav-icon"><Icon type="github" theme="filled" /></a></li>
                  <li className="nav-item"><a href="/" className="nav-icon"><Icon type="play-square" /></a></li>
                  <li className="nav-item"><a href="/" className="nav-icon"><Icon type="chrome" /></a></li>
                  <li className="nav-item"><a href="/" className="nav-icon"><Icon type="skin" /></a></li>
                  <li className="nav-item"><a href="/" className="nav-icon"><IonSvg/></a></li>
                </ul>
              </div>
            </div>
          </header>
        )
    }
}

export default Header