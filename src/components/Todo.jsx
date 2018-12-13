import React from 'react';

// TODO: steg 2: ska skicka upp event om att ta bort komponent
const Todo = (props) => (
<div>
  {props.todo}
  <button type="button">remove me</button>
</div>)

export default Todo;
