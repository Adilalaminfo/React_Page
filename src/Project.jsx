import React from 'react';


function Card(props){
	return(
	<>
     <div className="cards">
     <div className="card">
     <img src={props.imgsrc} alt="myPic" className="card_img" />
     <div className="card_info">
     <span classname="card_category" >{props.title}</span>
     <h3 className="card_title"> {props.sname}</h3>

     </div>
     </div>
     </div>
	</>
	);
}
export default Card;