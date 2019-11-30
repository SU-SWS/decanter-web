import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Layout from '../components/layouts/OneCol.js';
let { title } = attributes;

const TheContent = [
  <HomeContent />
];

export default function Index() {
  return <Layout content={TheContent} />;
}
