import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import axios from 'axios'

class PageContact extends React.Component {

	constructor(props) {
	    super(props);
 	   	this.state = {
 	   		name: '',
 	   		email: '',
 	   		message: '',
 	   	};
  }


	async submitForm(e){
		e.preventDefault();
		var params = {
			name: this.state.name,
			email: this.state.email,
			message: this.state.message,
		}
		await axios.post('http://forma.test/post/b5bd2010-a16e-11e9-a6b3-41f98afb5843', params);
		alert('Thank you');
	}

	render() {
  		const { frontmatter, html } = this.props.data.markdownRemark
    	return (
    		<Layout>
	    		<h2>{frontmatter.title}</h2>
	    		<p dangerouslySetInnerHTML={{__html: html}}></p>
	    		<form onSubmit={e => this.submitForm(e)}>
	    			<div>
    					<input type="text" value={this.state.name} placeholder="Name" name="name" onChange={(e) => this.setState({name: e.target.value})} />
  					</div>
  					<div>
    					<input type="text" value={this.state.email} placeholder="Email" name="email" onChange={(e) => this.setState({email: e.target.value})} />
  					</div>
  					<div>
    					<textarea type="text" placeholder="Message" name="message" value={this.state.message} onChange={(e) => this.setState({message: e.target.value})} />
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
