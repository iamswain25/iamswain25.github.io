import React from "react";
import Face from "./Face";
import Year from "./Year";
import { Container } from "react-bootstrap";
export default function App() {
  return (
    <Container>
      <Face />
      <Year
        year="2020"
        lists={[
          {
            title: "action plan for social economy",
            desc: "사회적경제 시민참여플랫폼",
            website: "https://plan.sehub.net/",
          },
          {
            title: "exposition for gyeonggi province village communities",
            desc: "경기도 마을공동체 어올림 축제",
            website: "https://eve.ggmaeul.or.kr",
          },
          {
            title: "19th korean resident autonomy exposition",
            desc: "19회 전국주민자치박람회",
            website: "https://juminexpo.kr",
          },
          {
            title: "Save the children: sharenting campaign",
            desc: "셰어런팅 다시보기 프로젝트",
            website: "https://sharenting.sc.or.kr",
          },
          {
            title: "ywca korea peace gallery",
            desc: "YWCA 평화갤러리",
            website: "https://ywca-peacegallery.or.kr",
          },
          {
            title: "seoul city architecture open call",
            desc: "Open Call for Collaborative Research & Proposal",
            website: "https://mix.beyondcovid19-opencall.org",
          },
          {
            title: "(private) youth wagle",
            desc: "국무조정실 청년정책추진단",
            website: "https://youthwagle.kr",
          },
          {
            title: "parti mx",
            desc: "모두의 공론장",
            website: "https://parti.mx",
          },
          {
            title: "[mobile app] parti mx",
            desc: "digital public sphere for all",
            website:
              "https://play.google.com/store/apps/details?id=coop.parti.p2020",
          },
          {
            title: "[maintenance] parti campaigns",
            desc: "campaign for public good",
            website: "https://campaigns.kr",
          },
        ]}
      />
      <Year
        year="2019"
        lists={[
          {
            title: "butterknifecrew 2019",
            desc: "online public sphere platform for gender equality",
            website: "https://2019.butterknifecrew.kr/",
          },
          {
            title: "Datzpress",
            desc: "homepage for book design company",
            website: "https://datzpress.com",
          },
          {
            title: "Users United",
            desc:
              "Stop getting pawned for your personal data. Demand Facebook give you your fair share by joining the #FacebookBoycott. We're stronger, together.",
            website: "https://iamswain25.github.io/usersunited",
          },
          {
            title: "simplealgo",
            desc: "Making React Component for simple algo operations.",
            website: "https://iamswain25.github.io/simplealgo",
          },
          {
            title: "parti blog",
            desc: "basic blog with user, post, comment",
            website: "https://iamswain25.github.io/parti-blog",
          },
          {
            title: "mbti for others",
            desc: "Questionairre for others' MBTI",
            website: "https://localee.space/",
          },
          {
            title: "[mobile app] Localee",
            desc: "Tag Map based on geolocation",
            website:
              "https://play.google.com/store/apps/details?id=space.localee.android",
          },
          {
            title: "Govt-expenditure-2019",
            desc: "Tree map of K-govt 2019 Expenditure with D3.js",
            website: "https://iamswain25.github.io/govt-expenditure-2019",
          },
          {
            title: "[mobile app] Cartido Expo",
            desc: "Crowdmapping mobile app with React Native, Expo, Firebase",
            website:
              "https://play.google.com/store/apps/details?id=com.diginido.cartido",
          },
          // {
          //   title: "Cartido Frontend",
          //   desc: "Crowdmapping mobile app generator with React, Firebase",
          //   website: "private"
          // }
        ]}
      />
      <Year
        year="2018"
        lists={[
          {
            title: "US Refugee",
            desc: "Total refugees settlement in States in 2002-2018 with D3.js",
            website: "https://iamswain25.github.io/refugees",
          },
          {
            title: "Morley's Miracle",
            desc: "Morley's trisector theorem",
            website: "https://iamswain25.github.io/Morley-s-miracle",
          },
          {
            title: "B2ber",
            desc: "Korean b2b solution review platform",
            website: "https://b2ber.co",
          },
          {
            title: "Political Life",
            desc: "Translation project for a Communist's journal in 1994",
            website: "https://iamswain25.github.io/political-life",
          },
          {
            title: "Giga Viewer",
            desc: "Museum viewer with OpenSeadragon",
            website:
              "http://www.kyeonggi.com/news/articleView.html?idxno=1422692",
          },
        ]}
      />
      <Year
        year="2016 ~ 2017"
        lists={[
          {
            title: "Eliga",
            desc: "CMS for signage content broadcasting",
            website: "http://www.eligaws.com",
          },
          {
            title: "Eliga Fabric",
            desc: "signage layout drawer with Fabric.js",
            website: "https://iamswain25.github.io/eliga_fabric",
          },
        ]}
      />
    </Container>
  );
}
