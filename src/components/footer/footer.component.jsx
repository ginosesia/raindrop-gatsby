import React from 'react';
import './footer.styles.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-primary">
                <div className="footer-container">
                    <div className="footer-grid">
                        <div className="footer-block">
                            <div className="footer-title">
                                <strong>Main</strong>
                            </div>
                            <a href="https://www.myraindrop.co.uk/" className="footer-link">Home</a>
                            <a href="https://www.myraindrop.co.uk/how-it-works" className="footer-link">App</a>
                            <a href="https://www.myraindrop.co.uk/contact" className="footer-link">Contact us</a>
                            <a href="https://www.myraindrop.co.uk/privacy-policy" className="footer-link">Privacy policy</a>
                            <a href="https://www.myraindrop.co.uk/policies" className="footer-link">Policies</a>
                        </div>
                        <div className="footer-block">
                            <div className="footer-title">
                                <strong>Resources</strong>
                            </div>
                            <a href="https://www.myraindrop.co.uk/blog" className="footer-link">Blog</a>
                            <a href="https://www.myraindrop.co.uk/glossary" className="footer-link">Glossary</a>
                            <a href="https://www.myraindrop.co.uk/financial-wellbeing" className="footer-link">Videos</a>
                            <a href="https://tool.myraindrop.co.uk/" className="footer-link">Pension Calculator</a>
                        </div>
                        <div className="footer-block">
                            <div className="footer-title">
                                <strong>Community</strong>
                            </div>
                            <a href="https://www.facebook.com/myraindropuk" className="footer-link">Facebook</a>
                            <a href="https://www.linkedin.com/company/myraindrop/" className="footer-link">LinkedIn</a>
                            <a href="https://www.instagram.com/myraindropuk/" className="footer-link">Instagram</a>
                            <a href="https://twitter.com/myraindropuk" className="footer-link">Twitter</a>
                        </div>
                    </div>
                    <div className="footer-logo">
                        <a href="" className="logo w-inline-block">
                            <img className="footer-logo-image" src="https://assets-global.website-files.com/5ea82b59de6676f0fdee7210/5ea837992a28ee2f7ac58168_Long%20Logo%20Red.svg"/>
                        </a>
                        <div className="small-text-reg">
                            <a href="" className="text-gray-1">
                                Raindrop ® is a trading name of Raindrop Technologies Holdings Ltd (FRN: 931052) an Appointed Representative of Resolution Compliance Ltd, which is authorised and regulated by the Financial Conduct Authority (FRN: 574048). Raindrop Technologies Holdings Ltd is registered in England and Wales. Number: 12431555. Registered office: Runway East London Bridge, 20 St Thomas Street, London SE1 9RS, UK.
                            </a>
                        </div>
                    </div>
                </div>
                <img src="https://assets-global.website-files.com/5ea82b59de6676f0fdee7210/5ea82b5984c5067fece3c77a_lines-13-black.svg" className="footer-background-image"/>
            </div>
        </footer>
  )
}

export default Footer