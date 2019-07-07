import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import HTMLContent from '../components/Content'


const IndexPage = ({ data }) => {
  	const { frontmatter } = data.markdownRemark
  	console.log(frontmatter);
  	return (
	    <Layout>
	    	<h2>{frontmatter.title}</h2>
	    </Layout>
  	)
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
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
