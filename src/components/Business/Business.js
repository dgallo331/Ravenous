import React from "react";
import "./Business.css";

class Business extends React.Component{
  render(){
    return (
      <div className="{business}">
        <div className="{this.props.business.image-container}">
          <img src={this.props.business.imageSrc} alt=''/>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="{this.props.business.Business-information}">
          <div className="{this.props.business.Business-address}">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city + ' ' + this.props.business.state}</p>
            <p> {this.props.business.zipCode}</p>
          </div>
          <div className="{this.props.business.Business-reviews}">
            <h3>{this.props.business.categories}</h3>
            <h3 className="{this.props.business.rating}">{this.props.business.rating} stars</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Business;
