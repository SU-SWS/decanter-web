import { Component } from 'react';
import Layout from '../src/components/layouts/TwoCol.js';
import { attributes, react as HomeContent } from '../content/index.md';

export default class Home extends Component {
  render() {
    return (
      <Layout content=<HomeContent />/>
    )
  }
}
