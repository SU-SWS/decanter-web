import React from 'react'
import Layout from './layout';

const Page = (props) => (
  <Layout className="page">
    {props.content}
  </Layout>
)

export default Page
