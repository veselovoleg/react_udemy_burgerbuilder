import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(key => [...Array(props.ingredients[key]).fill(key)])
    .flat()
    .map((key, index) => <BurgerIngredient type={key} key={index + '_' + key} />);
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients.length ? transformedIngredients : <p>Please add some ingredients</p>}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;