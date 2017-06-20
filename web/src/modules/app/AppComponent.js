import React, {Component} from 'react'

class AppComponent extends Component{
    render(){
        return (
            <div id="reactroot">
                {this.props.children}
            </div>
        )
    }
}

export default AppComponent