import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'

class PageAbout extends React.Component {
	render() {
  		const { frontmatter, html } = this.props.data.markdownRemark
    	return (
    		<Layout>
	    		<h2>{frontmatter.title}</h2>
	    		<p dangerouslySetInnerHTML={{__html: html}}></p>
	    	</Layout>
    	)
  	}
}

export default () => (
  <StaticQuery
    query={graphql`
	   query PageAbout {
		    markdownRemark(frontmatter: { templateKey: { eq: "about" } }) {
		      	frontmatter {
		        	title
		      	}
		      	html
		    }
		}
    `}
  	render={(data) => <PageAbout data={data} />}
  />
)
