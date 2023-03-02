import React, { createContext } from 'react';
import './App.css';
import ComponentA from './ComponentA'

// creating a variable firstname and passing as props, which only component c should get
const FirstName = createContext();
const LastName = createContext()

// function App() {
//   return (
//     <div className="App">
//       <h2><em>useContext()</em></h2>
//       <FirstName.Provider value={"Adarsh"}>
//       <ComponentA/>
//       </FirstName.Provider>

//     </div>
//   );
// }

//in case we want to pass multiple data, fragment it inside the previous one.

function App() {
  return (
    <div className="App">
      <h2><em>contextAPI</em></h2>
      <FirstName.Provider value={"Adarsh"}>
        <LastName.Provider value={"Jayadevan"}>
          <ComponentA />
        </LastName.Provider>

      </FirstName.Provider>

    </div>
  );
}

export default App;

// every component has only 1 default export
export { FirstName ,LastName};
