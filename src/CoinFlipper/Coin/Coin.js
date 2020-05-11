import React, {Component} from 'react';
import './Coin.css'

class Coin extends Component {
    render() {
        return (
            <div>
                <img src={this.props.url} />
                <br/>
            </div>
        )
    }
}

export default Coin;