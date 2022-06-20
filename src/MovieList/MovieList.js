import React from 'react'
import "./MovieList.css";
import MovieCard from '../MovieCard/MovieCard';
// import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

const MovieList = ({listm}) =>{

    return(
     <div  className="Movielist">
      
       {listm.map((card, key) => (
       
        <MovieCard card={card} key={key}/>
        
        ))}
     
     </div>   
    //  <div>  {listm.map((el,key)=><div><MovieCard key={key} card={el}/></div>)}</div>
    // <div>  {listm.map((card,key)=><div><MovieCard card={card} key={key}/></div>)}</div>
         
      
       
    );
}

export default  MovieList;