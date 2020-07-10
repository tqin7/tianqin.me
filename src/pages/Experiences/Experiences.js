import React from 'react';
import Layout from '../../components/Layout';
import { Paragraph } from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from './styles';

const sum_amazon = `Currently a software engineer working on AWS at Amazon in Seattle.`

const sum_research = `After 3 years in the industry realm, I ventured into blockchain research to deeply \
understand consensus algorithms - the most foundational piece in distributed systems. Inspired by the \
classic Practical Byzantine Fault Tolerance (pBFT) algorithm and the novel Snowball algorithm, \
my teammates and I successfully designed, implemented, and tested a new consensus algorithm that merged the \
probabilistic property of Snowball with the deterministic property of pBFT.`;

const sum_sutardja = `During my time at this innovation center at UC Berkeley, \
I lead research and development efforts collaborating with industry groups. \
One notable project was with Volvo to build an autonomous localization and navigation system \
that functions without GPS signals.`;

const sum_teaching = `I love teaching! Have taught discrete math, probability, blockchain \
internet architecture at UC Berkeley and various on-campus organizations.`;

const sum_ifund = `Fascinated by how math and computer science tackle finance as in the case of Bitcoin, \
I decided to venture into quantitative research realm. At iFund, I sought out patterns underlying \
high frequency market data, developed robust machine learning models, and accordingly created \
successful trading strategies. \n\nThis was my first big-scale data science project in the real world and \
I learned so many aspects not taught in school: how to correctly scrutinize raw data, how to efficiently set up \
a quantitative research workflow, how to deal with many random nuances that come up as you label and process the data, etc.`;

const sum_block = `My team and I worked with companies such as Ford, ExxonMobil, and Qualcomm \
to build blockchain prototypes that tackle real-world problems that these companies face`;

const sum_indeed = `Really enjoyed my first internship as I learned many industry practices \
in software engineering and created an integrated application that facilitates financial and sales routines`;

const exps = [
  {
    position: "Software Engineer",
    company: "Amazon",
    startYear: "08/2020",
    endYear: "Present",
    summary: sum_amazon,
  },
  {
    position: "Consensus Algorithm Researcher",
    company: "University of California, Berkeley",
    startYear: "01/2019",
    endYear: "06/2020",
    summary: sum_research,
  },
  {
    position: "Industry Lead",
    company: "Sutardja Center for Entrepreneurship and Technology",
    startYear: "08/2018",
    endYear: "12/2019",
    summary: sum_sutardja,
  },
  {
    position: "Various Teaching Positions",
    company: "University of California, Berkeley",
    startYear: "08/2017",
    endYear: "05/2020",
    summary: sum_teaching,
  },
  {
    position: "Quantitative Research Intern",
    company: "iFund Asset Management",
    startYear: "05/2019",
    endYear: "08/2019",
    summary: sum_ifund,
  },
  {
    position: "Head of Product",
    company: "Blockchain at Berkeley",
    startYear: "01/2017",
    endYear: "12/2018",
    summary: sum_block,
  },
  {
    position: "Software Engineering Intern",
    company: "Indeed",
    startYear: "05/2018",
    endYear: "08/2018",
    summary: sum_indeed,
  },
];

const Experiences = () => {
  return (
    <Layout>
      <div>
        <ul>
          {exps.map((exp, i) => (
            <WorkItem key={i}>
              <WorkTitle>{exp.position}</WorkTitle>
              <div>
                <JobTitle>{exp.company}</JobTitle>
                <span> &sdot; </span>
                <span>
                  {exp.startYear} to {exp.endYear}
                </span>
              </div>
              <br/>
              <Paragraph>{exp.summary}</Paragraph>
            </WorkItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Experiences;
