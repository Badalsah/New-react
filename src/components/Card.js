import React from "react"
import Avatar  from "./Avatar";

import Details from "./Details";

function Card (props){
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.id}</p>
            <Avatar imgURL={props.imgURL} />
            <Details  detailinfo={props.phone} />
            <Details detailinfo={props.email} />
            
        </div>
    )
    
}

export default Card;
