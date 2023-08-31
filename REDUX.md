# redux

Studying Redux using React.

# What is it?

- A single source of truth for all the data
- both a pattern & library

# How?

- relies on a single IMMUTABLE OBJECT
- stores all of the application state, like a client-side database

# flow

- event is emmited, eg user clicks something
- action gets dispatched (name & payload >> data to be changed)
- an entire new object gets created by passing current state & action payload into REDUCER FUNCTION
- reducer function RETURNS new object with entire app state

# end result

- 1-way data flow
- predictable
- testable
- awesome dev tools (time travel to app data)

# cons

- boilerplate code
- added complexity to small projects

# install

<code>npm install @reduxjs/toolkit react-redux</code>

# step 1: create store

- i.e. global store object
- setup configureStore()
- will register any reducers defined elsewhere in the code

# step 2: provide the store

- provider makes data accessible to entire component tree

# small side step >>> pizzaSlice i.e. createSlice

- create a slice to rep some data in the store
- should have unique name
- should have unique inital state
- contains collection of reducers

# step 3: reducer logic

- reducers are fns(old_state, action)
- define logic required to change state

# redux toolkit

- automatically generates actions that correspond to the names of these reducer fns
- we can export them
- use them in UI components

# step 4: select state

- select data anywhere in the app
- without needing context or prop drilling
- useSelector hook
- grab any reactive value || slice in the store

# step 5: dispatch actions

- to change app's data action has to be dispatched to store
- useDispatch hook
- addTopping >>> action
- 'pepperoni' >>> payload

# redux dev tools browser extension

- inspect
- debug
- entire timeline of actions
- and state changes in app
- especially graph is really cool
