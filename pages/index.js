import { Component } from 'react';
import Layout from '../src/components/layouts/TwoCol.js';
import fileContent from '../content/index.md';

export default class Home extends Component {
  render() {
    var cont = <div dangerouslySetInnerHTML={{ __html: fileContent.html }} />;
    return (
      <Layout content={cont} />
    )
  }
}
