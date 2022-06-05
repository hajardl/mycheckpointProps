import React from "react";
import {PropTypes} from "prop-types";

const ProfileComponent = (props) =>{
        const style={marginLeft:"275px",
    width:" 57em"}
        const button= {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "20px",
        textAlign: "center",
        display:" inline-block",
        fontSize: "16px",
            borderRadius:"15px"
    }
    return (
        <>
            <h1>Home</h1>

          <div style={style}>
              <span>{props.children}</span>
              <h3>
                  My Name is : {props.fullName}
              </h3>
              <h3>Bio: {props.bio}</h3>
              <h3>Profession: {props.profession}</h3>

              <button style={button} onClick={() => props.handleName(`My name is: ${props.fullName}`)}>
                  Validate
              </button>
          </div>
        </>
    )
}
ProfileComponent.propTypes={
    fullname:PropTypes.string,
    bio:PropTypes.number,
    profession:PropTypes.string,
    handleName:PropTypes.func

}
export  default ProfileComponent;
