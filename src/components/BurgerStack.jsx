const BurgerStack = (props) => {
    return (
      <ul>
        {props.stack.map((ingredient, index) => (
          <li key={index}>
            <span style={{ backgroundColor: ingredient.color }}>{ingredient.name}</span>
            <button onClick={() => props.removeFromStack(index)}>X</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default BurgerStack;
  
  