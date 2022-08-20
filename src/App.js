import { useState,useEffect } from 'react';
import './App.css';
import Header from './Component/Header';
import Recipes from './Component/Recipes';
import Axios from 'axios';

function App() {
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "fcdd39b3";
  const APP_KEY = "d336b7087a38f31f9d7cd3e1b0f409c1";

  useEffect(()=> {
    getRecipes()
   
  },[]);

  const getRecipes = async ()=>{
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    // console.log(res);
    setRecipes(res.data.hits)

  }; 

  const onInputChange=(e)=>{
    setSearch(e.target.value)

  }
  const onSearchClick =()=>{
    getRecipes();
  }
  return (
    <div className="App">
     
       {/* <h1>Food recipe app</h1> */}
       <Header search={search} onInputChange={onInputChange} 
       onSearchClick={onSearchClick}/>
       <div className='container'>
       <Recipes recipes={recipes}/>
       </div>
     
    </div>
  );
}

export default App;
