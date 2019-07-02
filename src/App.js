import React from "react";
import Face from "./Face";
import Year from "./Year";
import { Container } from "react-bootstrap";
export default () => (
  <Container>
    <Face />
    <Year
      year="2019"
      lists={[
        {
          title: "Localee",
          desc: "Tag Map based on geolocation",
          website:
            "https://play.google.com/store/apps/details?id=space.localee.android"
        },
        {
          title: "Govt-expenditure-2019",
          desc: "Tree map of K-govt 2019 Expenditure with D3.js",
          website: "https://iamswain25.github.io/govt-expenditure-2019/"
        },
        {
          title: "Cartido Expo",
          desc: "Crowdmapping mobile app with React Native, Expo, Firebase",
          website: "https://expo.io/@iamswain/cartido-expo"
        },
        {
          title: "Cartido Frontend",
          desc: "Crowdmapping mobile app generator with React, Firebase",
          website: "private"
        }
      ]}
    />
    <Year
      year="2018"
      lists={[
        {
          title: "US Refugee",
          desc: "Total refugees settlement in States in 2002-2018 with D3.js",
          website: "https://iamswain25.github.io/refugees/"
        },
        {
          title: "Morley's Miracle",
          desc: "Morley's trisector theorem",
          website: "https://iamswain25.github.io/Morley-s-miracle/"
        },
        {
          title: "B2ber",
          desc: "Korean b2b solution review platform",
          website: "https://b2ber.co"
        },
        {
          title: "Political Life",
          desc: "Translation project for a Communist's journal in 1994",
          website: "https://iamswain25.github.io/political-life"
        },
        {
          title: "Giga Viewer",
          desc: "Museum viewer with OpenSeadragon",
          website: "http://www.kyeonggi.com/news/articleView.html?idxno=1422692"
        }
      ]}
    />
    <Year
      year="2016 ~ 2017"
      lists={[
        {
          title: "Eliga",
          desc: "CMS for signage content broadcasting",
          website: "http://www.eligaspace.com"
        },
        {
          title: "Eliga Fabric",
          desc: "signage layout drawer with Fabric.js",
          website: "https://iamswain25.github.io/eliga_fabric/"
        }
      ]}
    />
  </Container>
);
