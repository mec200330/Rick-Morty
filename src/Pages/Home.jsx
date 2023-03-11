import { Link } from 'react-router-dom'
import rickmor from '../Assets/img/rick-morty.png'
import Button from '../Components/Button/Button'
import './Home.css'

const Home = () => {
  return (
    <div className='container'>
        <h1 className='titlehome'>Rick & Morty</h1>
      <img className='imghome' src={rickmor}></img>
      <Link to="/personajes">
      <Button clase='ver' nombre='Buscar personaje'></Button>
      </Link> 
    </div>
  )
}

export default Home