import React, { Component } from 'react';
import { Fade, Slide } from 'react-reveal';

import yButton from '../utils/MyButton'
import MyButton from '../utils/MyButton';

class Discount extends Component {
    state={
        discountStart:0,
        discountEnd:30
    }
    porcentage= ()=> {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }
    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },40)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={()=> this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                  
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore provident distinctio deleniti quas temporibus laboriosam! Recusandae fugit voluptatem fugiat deleniti eum animi.</p>
                            <MyButton
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="http://google.com"

                            />
                        </div> 
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;