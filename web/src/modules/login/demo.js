import React,{Component} from 'react';

import './demo.scss';

class DeMo extends Component{
    render(){
        return (
            <div className="box">
                <ul>
                    <li className="tb-li-1">Hello World</li>
                    <li className="tb-li-2">Hello World</li>
                    <li className="tb-li-3">Hello World</li>
                    <li className="tb-li-4">Hello World</li>
                </ul>
            </div>
        )
    }
}

export default DeMo;