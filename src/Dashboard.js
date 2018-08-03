import React from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet';

export default class Dashboard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			catToAdopt: props.catToAdopt,
			dogToAdopt: props.dogToAdopt
		};
	}

	getCat() {
		return (<Pet
			imageURL = {this.state.catToAdopt.imageURL}
			imageDescription = {this.state.catToAdopt.imageDescription}
			name = {this.state.catToAdopt.name}
			sex = {this.state.catToAdopt.sex}
			age = {this.state.catToAdopt.age}
			breed = {this.state.catToAdopt.breed}
			story = {this.state.catToAdopt.story}
		/>);
	}

	getDog() {
		return (<Pet
			imageURL = {this.state.dogToAdopt.imageURL}
			imageDescription = {this.state.dogToAdopt.imageDescription}
			name = {this.state.dogToAdopt.name}
			sex = {this.state.dogToAdopt.sex}
			age = {this.state.dogToAdopt.age}
			breed = {this.state.dogToAdopt.breed}
			story = {this.state.dogToAdopt.story}
		/>);
	}

	render() {
		const cat = this.getCat();
		const dog = this.getDog();
		return (<div className="pets">
				<div className="row">
					<div className="col-6">
						{cat}
					</div>
					<div className="col-6">
						{dog}
					</div>
				</div>
			</div>
		);
	}
}