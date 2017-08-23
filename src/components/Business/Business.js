import React from "react";
import "./Business.css";

class Business extends React.Component{
  render(){
    return (
      <div className="{this.props.business.Business}">
        <div className="{this.props.business.image-container}">
          <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
        </div>
        <h2>MarginOtto Pizzeria</h2>
        <div className="{this.props.business.Business-information}">
          <div className="{this.props.business.Business-address}">
            <p>1010 Paddington Way</p>
            <p>Bordertown</p>
            <p>NY 10101</p>
          </div>
          <div className="{this.props.business.Business-reviews}">
            <h3>ITALIAN</h3>
            <h3 className="{this.props.business.rating}">4.5 stars}</h3>
            <p>90 reviews</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Business;
