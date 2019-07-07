import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'

class Navbar extends React.Component {
	render() {
  		const { data } = this.props
  		console.log(data);
    	return (
	    	<nav className="navbar is-transparent" role="navigation">
	      		<h1>{data.site.siteMetadata.title}</h1>
	      	</nav>
    	)
  	}
}

export default () => (
  <StaticQuery
	    query={graphql`
		      query NavbarQuery {
			  	site {
			    	siteMetadata {
			      		title
			    	}
			  	}
			}
	    `}
	    render={(data, count) => <Navbar data={data} />}
  />
)
