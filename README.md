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
