import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
           campsite: null
        };
    }

    renderComments(comments) {
        if(comments) {
            return <div className="col-md-5 m-1">
                <h4>
                    "Comments"
                    {comments.map(comments => comments.text + comments.author + comments.date )}
                    
                    
                </h4>
            </div>
        }
        return  <div></div>
    }


    renderCampsite(campsite) {
        return <div className="col-md-5 m-1">
             <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
        </div>
    }



    render() {
        //Inside its render method, check if an object with the name "campsite" (passed in via props) can be evaluated as truthy (i.e.g is not null, is not undefined)
        //If so, then return an empty div that has the Bootstrap row class as an attribute.
        // If not, return an empty <div> with no classes applied to it.
        // let returnEle = <div></div>;
        // if(this.props.campsite) {
        //      returnEle = <div className="row"></div>;
        // }
        if(this.props.campsite) {
            return (
                <div className="row">
                    {this.renderCampsite(this.state.campsite)}
                    {this.renderComments(this.comments)}
                </div>
             );
        } else {
            return (
                <div></div>
             );
        }
    }
}

export default CampsiteInfo;