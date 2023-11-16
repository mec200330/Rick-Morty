import { useContext } from "react"
import { Link } from "react-router-dom"
import Button from "../Components/Button/Button"
import { DataContext } from "../Context/DataContext"
import './CharactersR.css'


const CharactersR = () => {
const {characters, fetching} = useContext(DataContext)
console.log(characters);
  return (
    <div className="containercards ">

        <h1 className="titlecards text-center text-9xl text-lime-500  ">Rick & Morty</h1>
        <Link className="ml-3 " to='/'> <Button clase='ver' nombre='Volver al Home'></Button></Link>
        <div className="cardsstyle flex gap-4 flex-wrap mt-5 mb-5 justify-center">
      
        {characters.map((char)=>{
        return(
            <div key={char.id} className='cards'>


<div class="flip-card flex w-64 h-80 ml-3 ">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            
            
            <img src={char.image}></img>
            <p class="title">{char.name}</p>
            
        </div>
        <div class="flip-card-back">
            <p class="title"></p>
           
           <h3>{char.status==="Alive" ? (
<>
<span/>
Vivo
</>

): (
<>
<span/>
Death
</>
)}</h3>

<h5>Episodios: {char.episode.length}</h5>
<h5>Especie: {char.species}</h5>
<h5>Origen: {char.origin.name}</h5>
<h5>Ubicación: {char.location.name}</h5>
           
           
            
        </div>
    </div>
</div>








            </div>
            
        )
      })}
      </div>
      <Link to='/'> <Button clase='ver' nombre='Volver al Home'></Button></Link> 
    </div>
  )
}

export default CharactersR
