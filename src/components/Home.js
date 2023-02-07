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

      <Cards/>

      <List/>
    
    
    
    </div>

    
  )
}

export default Home;