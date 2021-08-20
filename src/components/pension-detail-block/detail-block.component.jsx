import React from 'react';
import './detail-block.styles.css';
import PricingGrid  from './pricing-grid/pricing-grid.component.jsx';

export const DetailBlock = () => (
    <div className="detail-block">
        <div className="inner-detail-block">
            <div className="contained-section">
                <div className="pricing-grid">
                    <div className="column">
                        <PricingGrid
                            title="When your pension gets to &#60; £100,000"
                            percentage="0.75"
                            subtitle1="That means £6.25 a month for every £10,000"
                            subtitle2="£0 - £100k deposited"
                        />
                    </div>
                    <div className="column">
                        <PricingGrid
                            title="When your pension gets to &#62; £100,000"
                            percentage="0.56"
                            subtitle1="That means £4.67 a month for every £10,000 over £100,00"
                            subtitle2="£100k + deposited"
                        />
                    </div>
                </div>
            </div>
            <div className="get-started-button">
                <a href="https://app.myraindrop.co.uk/sign-up" className="getStarted">Get started</a>
                <p>The value of your pension can go up as well as down. Capital at risk.</p>
            </div>
        </div>
    </div>
);