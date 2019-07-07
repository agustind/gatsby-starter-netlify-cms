import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'

class Header extends React.Component {
	render() {
  		const { data } = this.props
    	return (
	    	<nav>
	      		<Link to="/" className="logo">{data.site.siteMetadata.title}</Link>
	      		<Link to="/about">About</Link>
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
  	render={(data, count) => <Header data={data} />}
  />
)
