import React, {Component} from 'react'
import Coin from './Coin/Coin'
import './CoinFlipper.css'
import {choice} from './helpers'
class CoinFlipper extends Component {

    state = {
        nFlips: 0,
        nHeads: 0,
        nTails: 0,
        currCoin: false
    };

    static defaultProps = {
        coins : [
            {side: 'heads', url : 'https://tinyurl.com/react-coin-heads-jpg'},
            {side: 'tails', url : 'https://tinyurl.com/react-coin-tails-jpg'}
        ]
    };
    
    coinFlipper() {
        const coinFace = choice(this.props.coins);

        this.setState((oldState) => {
            return {
                nFlips: oldState.nFlips + 1,
                currCoin: coinFace,
                nHeads: oldState.nHeads + (coinFace.side == 'heads' ? 1 : 0),
                nTails: oldState.nTails + (coinFace.side == 'tails' ? 1 : 0)
            }
        })
        
        // OR //

        this.setState((oldState) => {
            let newState = {
                ...oldState,
                currCoin: coinFace,
                nFlips: oldState.nFlips + 1 
            }
            if (coinFace.side == 'heads'){
                newState.nHeads += 1;
            } else {
                newState.nTails += 1;
            }
            return newState;
        })
    };

    clickHandler = () => {
        this.coinFlipper();
    };

    render() {
        return(
            <div>
                <h1>Lets Flip a Coin!</h1>
                    <Coin 
                        url={this.state.currCoin.url}
                    />
                <button onClick={this.clickHandler.bind(this)}>Flip!</button>
                <h5>
                    Out of {this.state.nFlips} there have 
                    been {this.state.nHeads} heads and {this.state.nTails} tails!
                </h5>
            </div>
        )
    }
}

export default CoinFlipper;