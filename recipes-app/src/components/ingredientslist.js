import React from 'react';
import Ingredient from './ingredient';

function IngredientsList({ list }) {
    return (
        <ul className='ingredients'>
            {list.map((ingredient, i) => (
                <Ingredient key={i} { ...ingredient }/>
            ))}
        </ul>
    );
}

export default IngredientsList;