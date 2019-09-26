import * as React from 'react';
import { Icon } from 'antd';

export interface Props {
    name: string,
    backTop?(): void
  }

class Back extends React.Component<Props, object>{
    constructor(props:any) {
        super(props);
    }
    public componentDidMount() {
        console.log(this.props, 'this.props');
    }
    public render(){
        return (
            <span id="backtop" onClick={this.props.backTop} className="waves-effect waves-button"><Icon type="up" /></span>
        )
    }
}

export default Back