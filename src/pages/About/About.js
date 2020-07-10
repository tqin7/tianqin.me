import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { useMediaQuery } from 'react-responsive'

import Layout from '../../components/Layout';
import { Paragraph } from '../../styles';
import { IconsContainer, Image } from './styles';
import portrait from '../../images/portrait.jpg';

// mobile
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
// not mobile, i.e. desktop or laptop or tablet
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Content = ({ user }) => {
  return (
    <>
      <Image src={portrait} alt="portrait" />
      <div style={{margin: 30, display: 'flex', alignItems: 'center'}}>
        <div>
          <Paragraph>{user.basics.summary}</Paragraph>
          <IconsContainer>
              <SocialIcon url="https://www.linkedin.com/in/tianqin"
                bgColor="#757D75" fgColor="#ffffff"
                style={{ height: 35, width: 35, margin: 6 }}
              />
              <SocialIcon url="https://github.com/spockqin"
                bgColor="#757D75" fgColor="#ffffff"
                style={{ height: 35, width: 35, margin: 6 }}
              />
              <SocialIcon url="https://www.facebook.com/tian.qin.121"
                bgColor="#757D75" fgColor="#ffffff"
                style={{ height: 35, width: 35, margin: 6 }}
              />
              <SocialIcon url="mailto:tianqinsc@gmail.com"
                bgColor="#757D75" fgColor="#ffffff"
                style={{ height: 35, width: 35, margin: 6 }}
              />
          </IconsContainer>
        </div>
      </div>
    </>
  );
};

const About = ({ user }) => {
    return (
        <Layout>
          <Default>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <Content user={user} />
            </div>
          </Default>
          <Mobile>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Content user={user} />
            </div>
          </Mobile>
        </Layout>
    );
};

export default About;
