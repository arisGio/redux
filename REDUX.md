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
