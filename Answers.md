1. What problem does the context API help solve?
React Context is a way for a child component to access a value in a parent component.

One familiar problem in React is what is popularly known as prop drilling.
Prop drilling occurs in situations where you’re looking to get the state from the top of your react tree to the bottom and you end up passing props through components that do not necessarily need them.
React Context solves the problem of props drilling. It allows you to share props or state with an indirect child or parent.
Ordinarily, you’d use a state management library like Redux or Mobx, but what if you don’t want to? Or the data to be passed is so minute that using a state management library would be overkill.
This is where the new React Context API comes in.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action - Actions are the only source of information for the store as per Redux official documentation. It carries a payload of information from your application to store.

Reducers- The reducer is a pure function that takes the previous state and an action, and returns the next state. 

Store- It stores the whole state of the app in an immutable object tree.

In React-Redux applications, when your Redux is a single source of truth, it means that the only way to change your data in UI is to dispatch redux action which will change state within redux reducer. And your React components will watch this reducer and if that reducer changes, then UI will change itself too. But never other way around, because Redux state is single source of truth.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local. Flux or a flux-like library like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it.
Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

## Some reasons to use redux:
Prevents unnecessary re-renders, as when the state changes it returns new state which uses shallow copy.
Testing will be easy as UI and data management are separated.
History of state is maintained which helps in implementing features like undo very easily.

## Some reasons not to use redux:
No encapsulation. Any component can access the data which can cause security issues.
Boilerplate code. Restricted design.
As state is immutable in redux, the reducer updates the state by returning a new state every time which can cause excessive use of memory.



1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
redux has to be my favourite since it makes it easier to work on components in tiny bits and minimize confusion when a bug pops up
