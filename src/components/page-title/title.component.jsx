import React from 'react';
import './title.styles.css';
import { InputBox } from '../fee-input-box/fee-input-box.component.jsx';
import { FeeDisplay } from '../fee-text/fee-text.component.jsx';


class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            pensionValue: 0.0,
            pensionFee: 0.0
        };
    }

   componentDidUpdate() {
    fetch(`http://localhost:7000/calculate-fee/${this.state.pensionValue}`)
      .then(res => res.json())
      .then(value => this.setState({pensionFee: value.fee}));
  }

    handleChange = (e) => {
        this.setState({ pensionValue: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="container-center">
                    <div className="pill">
                        <div className="text-pill-2"><h6>Fees</h6></div>
                    </div>
                    <h1 className="title">We're keeping it simple</h1>
                    <div className="large-text-2">At Raindrop, we understand you don't have time for complexity.</div>
                    <div className="fee_title">Enter your estimated pension below to calculate our fees.</div>
                    <p className="symbol">£
                        <InputBox
                            placeholder='Pension Value'
                            handleChange={this.handleChange}
                        />
                    </p>

                    <FeeDisplay
                        fee={this.state.pensionFee}
                    />
                </div>
                <img className="doodle-left-2" alt="doodle" src="https://assets-global.website-files.com/5ea82b59de6676f0fdee7210/5ea82b5984c506e63de3c866_Doodle-6-Dark.svg"/>
            </div>
        )
    }
}

export default Title