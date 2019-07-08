import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import $ from 'jquery'
import Macy from 'macy'


class PagePortfolio extends React.Component {
	componentDidMount(){
		var macy = Macy({
		    container: '.portfolio',
		    trueOrder: false,
		    waitForImages: false,
		    margin: 24,
		    columns: 3,
		    breakAt: {
		        1200: 3,
		        520: 2,
		        400: 1
		    }
		});
	}
	render() {
		const { nodes } = this.props.data.allMarkdownRemark;
    	return (
    		<Layout>
	    		<h2>Portfolio</h2>
	    		<div className="portfolio">
		    		{nodes.map((node, i) => {
		    			return (<div key={i} className="portfolio-node">
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
