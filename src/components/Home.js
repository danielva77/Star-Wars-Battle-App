import React from 'react';
import { getAllCharacters } from '../redux/actions';
import List from './List/List';
import NavBar from './Navbar/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cards from './Cards/Cards';

function Home() {
const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getAllCharacters());
  }, [dispatch]);

  
  return (
    <div>
    
      <NavBar/>
      <h1 class="d-flex justify-content-center">Star Wars Battle App</h1>

      <Cards/>

      <h3 class="d-flex justify-content-center">Todos los personajes</h3>
      <List/>

      <div  class="d-flex justify-content-center">
        <a href="https://www.linkedin.com/in/daniel-valdez-94a638195/" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" class="me-3" title="Linkedin" alt="Linkedin" height="24px"></img></a>
        <a href="https://github.com/danielva77" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/919/919847.png" title="Github" alt="Github" height="24px"></img></a>
      </div>
    
    </div>

    
  )
}

export default Home;