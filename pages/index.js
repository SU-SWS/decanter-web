import { Component } from 'react';
import Layout from '../components/layouts/OneCol.js';
import { attributes, react as HomeContent } from '../content/index.md';

const MyContent = [
  <HomeContent />
];

export default function Index() {
  return <Layout content={HomeContent} />;
}
