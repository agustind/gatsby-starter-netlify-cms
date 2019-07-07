import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'

class PageContact extends React.Component {
	render() {
  		const { frontmatter, html } = this.props.data.markdownRemark
    	return (
    		<Layout>
	    		<h2>{frontmatter.title}</h2>
	    		<p dangerouslySetInnerHTML={{__html: html}}></p>
	    		<form>
	    			<div>
    					<input type="text" placeholder="Name" name="name" />
  					</div>
  					<div>
    					<input type="text" placeholder="Email" name="email" />
  					</div>
  					<div>
    					<textarea type="text" placeholder="Message" name="message" />
  					</div>
  					<div>
  						<input type="submit" value="Submit" />
  					</div>
				</form>
	    	</Layout>
    	)
  	}
}

export default () => (
  <StaticQuery
    query={graphql`
	   query PageContact {
		    markdownRemark(frontmatter: { templateKey: { eq: "contact" } }) {
		      	frontmatter {
		        	title
		      	}
		      	html
		    }
		}
    `}
  	render={(data) => <PageContact data={data} />}
  />
)
