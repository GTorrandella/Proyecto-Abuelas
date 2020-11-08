import React from 'react';
import FooterHead from './footerHead'
import FooterBody from './footerBody'
import {
  footerHeadStyle,
  footerBodyStyle,
} from '../../styles/footer'

export default function Footer() {

  return (
    <React.Fragment>
      <FooterHead className={footerHeadStyle()}/>
      <FooterBody className={footerBodyStyle()}/>
    </React.Fragment>
  );
}
