import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>R${price}</p>
            <button onClick={()=>handleClick(item)} >Adicionar</button>
        </div>
    </div>
  )
}

export default Cards