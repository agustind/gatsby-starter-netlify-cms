import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const IndexPage = ({ data }) => {
  	const { frontmatter } = data.markdownRemark
  	console.log(frontmatter);
  	return (
	    <Layout>
	    	<h2>{frontmatter.title}</h2>
	    	{!!frontmatter.image &&
	    		<div className="home-image">
	    			<img src={frontmatter.image} />
	    		</div>
	    	}
	    </Layout>
  	)
}


export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
	        title
	        image
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
