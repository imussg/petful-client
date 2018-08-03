import React from 'react';
// import { connect } from 'react-redux';

export default class Pet extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			imageURL: props.imageURL,
			imageDescription: props.imageDescription,
			name: props.name,
			sex: props.sex,
			age: props.age,
			breed: props.breed,
			story: props.story
		};
	}
	onAdoptClick(event) {
		console.log("Pet adopted!", this.state);
	}
	render() {
		// console.log(this.state);
		return (<section className="pet">
				<header>
					<h2 className="pet-name">{this.state.name}</h2>
					<img src={this.state.imageURL} alt={this.state.imageDescription}></img>
				</header>
				<main>
					<h3>More about {this.state.name}</h3>
					<dl className="pet-attributes">
						<dt className="term-sex">Sex</dt>
						<dd className="def-sex">{this.state.sex}</dd>
						<dt className="term-age">Age</dt>
						<dd className="def-age">{this.state.age}</dd>
						<dt className="term-breed">Breed</dt>
						<dd className="def-breed">{this.state.breed}</dd>
						<dt className="term-story">Story</dt>
						<dd className="def-story">{this.state.story}</dd>
					</dl>
					<button type="button" onClick={event=>this.onAdoptClick(event)}>Adopt</button>
				</main>
			</section>
		);
	}
}