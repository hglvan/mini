import React ,{Component}from 'react';
import './Fanwei.scss';

class FanweiComponent extends Component{
    componentWillMount() {
		

	}
    componentDidMount() {
		
			
	}
    render(){
        if(!this.props.show1){
            return null
        }
        return(
            <div className="fan_map">
                <img src={require('./../../../../static/imgs/map_02.jpg')} alt=""/>
            </div>
        )
    }
}

export default FanweiComponent