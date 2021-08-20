import React from 'react';
import { InputBox } from '../components/fee-input-box/fee-input-box.component.jsx';
import Footer from '../components/footer/footer.component.jsx';
import Header from '../components/header/header.component.jsx';
import Title from '../components/page-title/title.component.jsx';
import { Link } from 'gatsby'
import '../styles/index.styles.css'
import { DetailBlock } from '../components/pension-detail-block/detail-block.component.jsx';
import ReviewContainer from '../components/review/review-container.component.jsx';

const FeesPage = () => {
  return (
    <div>
      <Header />
      <Title />
      <DetailBlock />
      <ReviewContainer />
      <Footer />
    </div>
  )
}


export default FeesPage