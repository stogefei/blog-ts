import * as React from 'react';
class BackgroundHeader extends React.Component{
    public render(){
        return (
            <header id="masthead">
            <div className="blog-background" />
            <div className="inner">
              <div className="container">
                <h1 className="blog-title">这孩子... 或许...</h1>
                <h2 className="blog-description">或许可以用来煲汤......</h2>
              </div>
            </div>
          </header>
        )
    }
}

export default BackgroundHeader