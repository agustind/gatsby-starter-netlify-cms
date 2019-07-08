import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Header extends React.Component {
	render() {
  		const { data } = this.props
    	return (
	    	<nav>
	    		<div className="left">
	      			<AniLink fade duration={0.1} to="/" className="logo">{data.site.siteMetadata.title}</AniLink>
	      		</div>
	      		<div className="right">
		      		<AniLink fade duration={0.1} to="/">Home</AniLink>
		      		<AniLink fade duration={0.1} to="/about">About</AniLink>
		      		<AniLink fade duration={0.1} to="/portfolio">Portfolio</AniLink>
		      		<AniLink fade duration={0.1} to="/contact">Contact</AniLink>
		      	</div>
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
