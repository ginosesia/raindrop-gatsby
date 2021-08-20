import React from 'react';
import './pricing-grid.styles.css';

const PricingGrid = ({ title, percentage, subtitle1, subtitle2}) => {
    return (
        <div>
            <p>{ title }</p>
            <div className="pricing-plan">
                <div className="display-heading-1">{ percentage }</div>
                <div className="display-heading-symbol">%</div>
            </div>
            <p>{ subtitle1 }</p>
            <div className="pricing-plan-features">
                <div className="pricing-plan-item">
                    <div className="checklist-item">
                        <img src="https://assets-global.website-files.com/5ea82b59de6676f0fdee7210/5ea82b5984c50604f8e3c6bc_check-small.svg" alt="check-icon"/>
                    </div>
                    <p>{ subtitle2 }</p>
                </div>
            </div>
        </div>
  )
}

export default PricingGrid