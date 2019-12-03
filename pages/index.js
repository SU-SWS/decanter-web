import { Component } from 'react';
import Layout from '../components/layouts/OneCol.js';
import TheContent  from '../scripts/getAllContent.js';
var myInfo = TheContent['./index.md'];
var MyComponent = myInfo.react;
var { title } = myInfo.attributes.title;

const MyContent = [
  <MyComponent />
];

export default function Index() {
  return <Layout content={MyContent} />;
}
