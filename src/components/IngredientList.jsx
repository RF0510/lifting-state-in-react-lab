const IngredientList = (props) => {
    return (
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>
            <span style={{ backgroundColor: ingredient.color }}>{ingredient.name}</span>
            <button onClick={() => props.addToStack(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;
  
  