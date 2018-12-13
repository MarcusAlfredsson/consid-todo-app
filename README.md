## Exersices for learning react
This application is a set of exersices for learning react. I current state the application is a todo app with all its logic
in App. The exersices will show how to refactor out logic into smaller components and also how to expand the app with more functionality.

### Step 1(addTodo):
  In current App holds all the logic. In the first step you should move out the logic of the input to the addTodo component. So after finished AddTodo saves the text input in a state variable and when the button in AddTodo is clicked, the button should emit an event to App and in App save the todo in its state variabel todos. Also remove the logic of text handling in App.

### Step 2(removeTodo):
  In this example we want to add a remove function, there should be one remove button per todo. Use the Todo component, the list should render a Todo component, similar to:

  ...map(todo => <Todo todo={todo} onRemove={this.removeTodo} />)...

  The Todo component is a function component, so it has no state. the remove event should send the todo to be removed and the todo should be removed from the state in App. 


### Step 3
  Now we want to mark a todo as done, so each todo should have a checkbox. When the checkbox is checked the todo should change color or style to show that it is done.

### Step 4
  In this step we want to save todos over page reload, so we dont have to add the todos each time we access the todo application.
  Their is a API file which simulates an API, it save to localStorage and returns promises to simulate the behavior of an API.
  So:
  - on mount of the App component should fetch all todos from the api, during componentDidMount.
  - when a todo is saved, it should first be saved to the api, and if successful the save the todo to state.
  - same goes for removing a todo.

API is used for example:
getList().then((res) => )
where res is the list of todos

### Step 5
Now we want to add a edit button, so we cannot delete a todo by mistake. The delete buttons should only be visible when the edit button is active.

