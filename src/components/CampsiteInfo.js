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

		// Amy Instructor: this componenent does not have state. delete this state object.
		// campsite will be called in props
		this.state = {
			campsite: null,
		};
	}

	renderComments(comments) {
		if (comments) {
			return (
				<div className='col-md-5 m-1'>
					<h4>
						"Comments"
						{comments.map(
							(comments) => comments.text + comments.author + comments.date
						)}
					</h4>

					{/* Amy Instructor: move the the map() function here. it is not inside of the <h4> tag 
                    Please review Week 1 map() function and review JavaScript arrow functions from Bootstrap.

                    The map() function will return JSX displaying the comments.

                    I have this started for you. What is the return JSX for this map() function?
                    
                    {comments.map(comments => {
                        return (
                            // HERE IS WHERE YOU WILL DISPLAY THE COMMENTS
                            // READ TASK 3 AGAIN 
                        );
                    })}
                
                */}
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
		//Inside its render method, check if an object with the name "campsite" (passed in via props) can be evaluated as truthy (i.e.g is not null, is not undefined)
		//If so, then return an empty div that has the Bootstrap row class as an attribute.
		// If not, return an empty <div> with no classes applied to it.
		// let returnEle = <div></div>;
		// if(this.props.campsite) {
		//      returnEle = <div className="row"></div>;
		// }
		if (this.props.campsite) {
			return (
				<div className='row'>
					{/* Amy Instructor: campsite is not coming from state. see line 65. you have campsite in props. */}
					{this.renderCampsite(this.state.campsite)}

					{/* Amy Instructor: Take a look at the file, campsites.js, in the shared folder.
                        the Comments object is inside of another object that we have in, this.props.campsite.
                        How do you get the comments property from an object?
                    */}
					{this.renderComments(this.comments)}
				</div>
			);
		} else {
			return <div></div>;
		}
	}
}

export default CampsiteInfo;
