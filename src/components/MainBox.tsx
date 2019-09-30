import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router'
export interface Props {
  data: any,
  goDetail?: void
}
// @withRouter
class MainBox extends React.Component<Props & RouteComponentProps<any>>{
  constructor(props: any) {
    super(props);
  }
  public componentDidMount() {
    console.log(this.props, 'props')
  }
  public goDetail(item: any) {
    console.log(this.props, 'props')
    this.props.history.push('/blogdetail/'+ item.id)
  }
  public render() {
    const dataList = this.props.data
    return (
      <div className='container'>
        <div className="wrapper">

          {dataList.length ? dataList.map((item: any) => {
            return (
              <div className="aticle" key={item.id} onClick={this.goDetail.bind(this, item)}>
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
            )
          }) : null}

        </div>
      </div>
    )
  }
}

export default withRouter(MainBox)