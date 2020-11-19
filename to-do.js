/**
 * To-Do Manager
 */

const TODOS = [
  {
    //added some descriptions to the existing tasks
    title: "Learn about objects and arrays",
    done: true,
    description: "Read through the book and work on practice promblems to understand objects and arrays.",
  }, {
    title: "Build a to-do manager",
    done: false,
    description: "Complete your end of week project.",
  }, {
    title: "Enjoy the weekend!",
    done: false,
    description: "Do whatever makes you happy til class starts again.",
  },
];


// Write a function to print out incomplete to-do items
const listTodos = function() {
  //create variable for index
  let index = 0;
  //for loop to go through each entry in TODOS
  for(let entry of TODOS) {
    //countinue if done is false
    if (entry.done === false) {
      //print out entry with index in format
      console.log(index + " - " + entry.title);
      }
    //add one to index
    index++;
  }
};


// Write a function to add new items to the to-do list
const addTodo = function() {
  //prompt user for a list item and store in item
  let item = prompt("What would you like to add?");
  let explain = prompt("What is a description of the task?");
  //push the item along with false to the array
  TODOS.push({title: item , done: false , description: explain});
};

//create a function called describeItem
const describeItem = function () {
  //prompt user for the list number of the item they want a description of
  let number = prompt("Which number on the list would you like to see a description of?");
  //create a variable to hold the entry at that number location
  let entry = TODOS[number];
  //print the title as well as the description
  console.log("\n" + entry.title + "\n" + "\nDescription:" + entry.description);
}

// Write a function to mark an item as completed
const completeTodo = function() {
  //prompt user for which task is completed and store in number
  let number = prompt("Which number on the list would you like to complete?");
  //create a variable to hold the entry at that number location
  let entry = TODOS[number];
  //change the done property to true
  entry.done = true;
};


const runManager = function() {
  let keepRunning = true;

  console.log("Welcome to your to-do manager. What would you like to do?");

  while (keepRunning) {
    const command = prompt("\nEnter command");

    switch (command) {
      case 'list':
        listTodos();
        break;
      case 'add':
        addTodo();
        break;
      case 'complete':
        completeTodo();
        break;
      case 'quit':
        keepRunning = false;
        break;
        //added a choice to look at a description of the task
      case 'description':
        describeItem();
        break;
      default:
        console.log("Commands: list, add, complete, description, quit");
    }
  }

  console.log("Goodbye!");
};

runManager();
