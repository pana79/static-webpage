import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import {Zoom} from 'react-reveal'

class Pricing extends Component {
    state={
        prices:[100,150,250],
        positions:['Balcony', 'Medium','Star'],
        desc:[
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit.  voluptate!',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illo sed cumque fuga.',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illo sed cumque fuga .',
        ],
        linkto:['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay:[500, 0, 500]
    }
    shoBoxes =()=> (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.link}

                            />
                        </div>
                    </div>
                 </div>

            </Zoom>
            
        ))
    )
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.shoBoxes()}
                    </div>
                    <div></div>
                </div>
                
            </div>
        );
    }
}

export default Pricing;