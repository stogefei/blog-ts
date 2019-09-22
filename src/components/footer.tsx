import * as React from 'react';

class Footer extends React.Component{
    public render(){
        return (
            <div className="footer-box">
                <div className="footer-container">
                    <p>Copyright © 2019 <a href="#">Hran 的博客</a></p>
                    <p><a href="http://beian.miit.gov.cn" target="_blank"> 苏 ICP 备 17070069 号</a> • Powered by 
                    <a href="http://typecho.org" target="_blank">Typecho</a> • Theme
                    <a href="https://get233.com/archives/mirages-intro.html" target="_blank"> Mirages</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer
