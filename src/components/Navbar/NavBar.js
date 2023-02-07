import React from 'react'
import SearchBar from '../Searchbar/SearchBar'

function NavBar() {
  return (
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/1539/1539194.png" alt="icon" width="40px"/>

      <button>Random</button>

      <button>Todos los personajes</button>

      <SearchBar/>

    </div>
  )
}

export default NavBar