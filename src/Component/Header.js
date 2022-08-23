import React from 'react'

const Header = (props) => {
  return (
    <div className='jumbtron' >

      <h1 className='display-2'>
      <i className="material-symbols-outlined">fastfood</i> Food Recipe
      </h1>
      <div className="input-group w-50 mx-auto">
        <input type="text" className="form-control" placeholder='search your fav recipe...' 
        value={props.search} 
        onChange={props.onInputChange}/>
        <div className='input-group-append'>
            <button className='btn btn-dark' onClick={props.onSearchClick}>Search</button>
      
             </div>
           </div>
        </div>
  )
}

export default Header
