import React from 'react'

function Describtion(props) {
    return (
        <h2 className="intro__describtion" style={{
            fontSize: "26px",
            lineHeight: "30px",
            textAlign: "center",
            marginBottom: "35px",
            color: "white"
        }}>
            {props.text}
        </h2>
    )
}

export default Describtion;
