import React from 'react';
import { SocialIcon } from 'react-social-icons';

import Layout from '../../components/Layout';
import { Paragraph } from '../../styles';
import { IconsContainer, Image } from './styles';
import portrait from '../../images/portrait.jpg';

const About = ({ user }) => {
    return (
        <Layout>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Image src={portrait} alt="portrait" />
            <div style={{marginLeft: 30, display: 'flex', alignItems: 'center'}}>
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
          </div>
        </Layout>
    );
};

export default About;
