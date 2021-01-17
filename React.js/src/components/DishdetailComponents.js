import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetails extends Component {
    renderComments(dish) {
        if (dish != null) {
            return (
                dish.comments.map((comment) => {
                    return (
                        <div key={comment.id} >
                            <div>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit"
                                }).format(new Date(Date.parse(comment.date)))}</p>
                            </div>

                        </div>
                    );
                })
            );
        }
    }
    render() {
        console.log(this.props.dish);
        const dish = this.props.dish;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card >
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-sm-6">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {this.renderComments(dish)}
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default DishDetails;