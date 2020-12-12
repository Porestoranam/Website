import React from 'react'


function Title(props) {
    return (
        <h1 className="intro__title" style={{
            marginTop: "0px",
            fontSize: "80px",
            lineHeight: "94px",
            textAlign: "center",
            color: "white",
            marginBottom: "10px"
        } }>
            {props.text}
        </h1>
    )
}

export default Title;
