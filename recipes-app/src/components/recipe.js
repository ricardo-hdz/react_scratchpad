import React from 'react';
import IngredientsList from './ingredientslist';
import Instructions from './instructions';

function Recipe({name, ingredients, steps}) {
    return (
        <section id={ name.toLowerCase().replace(/ /g, '-') }>
            <h1>{name}</h1>
            <IngredientsList list={ ingredients }></IngredientsList>
            <Instructions title='Cooking Instructions' steps={steps}></Instructions>
        </section>
    );
}

export default Recipe;