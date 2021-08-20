import React from 'react';
import './review-container.styles.css'

const ReviewContainer = () => {
    return (
        <div className="trustpilot-section">
            <div className="review-block">
                <div className="html-embed">
                    <div className="trustpilot-widget" data-locale="en-GB" data-template-id="53aa8912dec7e10d38f59f36" data-businessunit-id="5f84466daefcb700015c4183" data-style-height="140px" data-style-width="100%" data-theme="light" data-tags="SelectedReview" data-review-languages="en">
                        <iframe className="review-style" title="Customer reviews powered by Trustpilot" loading="auto" src="https://widget.trustpilot.com/trustboxes/53aa8912dec7e10d38f59f36/index.html?templateId=53aa8912dec7e10d38f59f36&amp;businessunitId=5f84466daefcb700015c4183#locale=en-GB&amp;styleHeight=140px&amp;styleWidth=100%25&amp;theme=light&amp;tags=SelectedReview&amp;reviewLanguages=en" >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewContainer