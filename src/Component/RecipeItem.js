import React from 'react'

const RecipeItem = (props) => {
    const {name, image, ingredientLines} = props;
  return (
      <div className='col-md-auto'>
    <div className='card py-auto text-center'>
        <img src={image} className='img-fluid w-20 mx-auto shape-square'/>
        <div className='card-body'>
            <h5>{name}</h5>

        </div>
        <ul className='list-group list-group-flush'>
            {ingredientLines.map(ingredient => (
                <li className='list-group-item'>{ingredient}</li>
            ))}

        </ul>
        <div>
            
        </div>
     </div>
     </div>
  )
}

export default RecipeItem
