import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../../components/layout'

const BlogPost = ({data, children}) => {
  return(
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        title
        date
      }
    }
  }
`

export default BlogPost