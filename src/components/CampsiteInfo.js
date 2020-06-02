import React, { Component } from "react";
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardBody,
	CardTitle,
} from "reactstrap";

class CampsiteInfo extends Component {
	constructor(props) {
		super(props);
	}

	renderComments(comments) {
		if (comments) {
			return (
				<div className='col-md-5 m-1'>
					<h4>Comments</h4>

					{comments.map((comments) => {
						{
							/* Amy Instructor: 
								Have this return JSX instead of a string. 
								Use the date code provided in Task 3 for the date.								
							*/
						}

						return `text : ${comments.text}
							 author : ${comments.author}
							 date : ${comments.date}`;
					})}
				</div>
			);
		}

		return <div></div>;
	}

	renderCampsite(campsite) {
		return (
			<div className='col-md-5 m-1'>
				<Card>
					<CardImg top src={campsite.image} alt={campsite.name} />
					<CardBody>
						<CardTitle>{campsite.name}</CardTitle>
						<CardText>{campsite.description}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}

	render() {
		if (this.props.campsite) {
			return (
				<div className='row'>
					{this.renderCampsite(this.props.campsite)}

					{this.renderComments(this.props.campsite.comments)}
				</div>
			);
		} else {
			return <div></div>;
		}
	}
}

export default CampsiteInfo;
