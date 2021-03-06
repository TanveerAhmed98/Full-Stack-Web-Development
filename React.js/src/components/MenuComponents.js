import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetails from "./DishdetailComponents";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        };
        console.log("Menu component constructor is invoked");
    }
    componentDidMount() {
        console.log("Menu component componentDidMount is invoked");
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <DishDetails dish={this.state.selectedDish} />
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        console.log(this.props.dishes);
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log("Menu component render is invoked");

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                {this.renderDish(this.state.selectedDish)}

            </div>
        );
    }
}

export default Menu;