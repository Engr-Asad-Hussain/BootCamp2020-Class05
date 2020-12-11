# Conclusion

### Example 01
url: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class05

surge: http://quack-hat123.surge.sh/

### Example 02
url: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class05/tree/example02

surge: http://careless-string123.surge.sh/

------------------------------------------------------------
## React Tutorial 4

#### What is Context API React Hook?
 - We have learned in last class that: We manage the state of a component
 - First we only apply state in class based component but after the arival of Hooks we can apply state to a functional base component.
 - Now, the problem is we cannot manage state with ease. What we have done in last class was we sent component from parent child to child. But normally this tree is not so small.
 - Now, in Context API provides central location where we manage our state / manage data. If we inform context API about the tree then we don't need to pass data from parent to child to sub child etc. For example, if the grandchild wants the data, it directly calls context API and get the data.
 - So, it is a global or centralized location where all the state get managed and stored.
 - **createContext** and **useContext** is a Hook just like useState.

#### What is useReducer React Hook?
  - This concept comes from Redux. What happens in Redux is we have a store at central/global location. And Reducer has the permission to change or manuplate central location.
  - Means whenever we want a change or we want to update we request the Reducer to please update this on central location.
  - In Reducer we make switch cases to tell if this changes then do that and so on.
  - The same concept comes in React named as useReducer
  - Learn useReducer at: https://flaviocopes.com/react-hook-usereducer/?fbclid=IwAR13sqi4KPqoJlQioJXPZNJs-x0nsppjzulG3NAYeirDftaCv-pJ-OAGdOQ