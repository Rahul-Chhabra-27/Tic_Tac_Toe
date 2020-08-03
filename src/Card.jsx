import React from 'react';

function Card(props){
    return (
        <div className= "heading_style">
            <link href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap" rel="stylesheeet"></link>
            <a href={props.links} target="_blank">
                <button>
                    <img src={props.link} width="200" height= "200"></img>
                    <h1 className="cards"> {props.name}</h1>
                    <div> <button color="white">Watch Now</button></div>
                </button>
            </a> 

            <p>{props.title}</p>        
        </div>
    )
}
export default Card;