import ThemeProvider, { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider'
import { Link } from 'react-router-dom'
import rickmor from '../Assets/img/rick-morty.png'
import Button from '../Components/Button/Button'
import './Home.css'


const Home = () => {
  return (<ThemeProvider breakpoints={'sm'}>

    <div className='container  bg-lime-500 bg-contain'>

      <h1 className='titlehome flex text-center font-semibold text-9xl'>Rick & Morty</h1>
      <img className='w-auto h-auto' src={rickmor}></img>
      <Link to="/personajes">
      <Button clase='ver' nombre='Buscar personaje'></Button>
      </Link> 
     
    </div> </ThemeProvider>
  )
}

export default Home
