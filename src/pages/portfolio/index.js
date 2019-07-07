import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'

class PagePortfolio extends React.Component {
	render() {
		const { nodes } = this.props.data.allMarkdownRemark;
		console.log(nodes);
    	return (
    		<Layout>
	    		<h2>Portfolio</h2>
	    		<div className="portfolio">
		    		{nodes.map((node) => {
		    			return (<div className="portfolio-node">
		    				<h5 className="portfolio-node-title">{node.frontmatter.title}</h5>
		    				<img className="portfolio-node-image" src={node.frontmatter.featuredimage} />
		    			</div>)
		    		})}
	    		</div>
	    	</Layout>
    	)
  	}
}

export default () => (
  <StaticQuery
    query={graphql`
	   query PortfolioQuery {
	  		allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}}}) {
		    nodes {
		      id
		      frontmatter {
		        title
		        description
		        featuredimage
		      }
		    }
		  }
		}
    `}
  	render={(data) => <PagePortfolio data={data} />}
  />
)
