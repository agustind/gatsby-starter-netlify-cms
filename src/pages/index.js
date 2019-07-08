import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const IndexPage = ({ data }) => {
  	const { frontmatter } = data.markdownRemark
  	return (
	    <Layout>
	    	<h2>{frontmatter.title}</h2>
	    </Layout>
  	)
}


export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
	        title
	        heading
	        subheading
	        mainpitch {
	          title
	          description
	        }
	        description
	        intro {
	          blurbs {
	          	image
	            text
	          }
	          heading
	          description
	        }
      	}
    }
  }
`
