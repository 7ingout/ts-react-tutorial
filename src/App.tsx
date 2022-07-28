import React from 'react';
import './App.css';
// import CreateTodo from './CreateTodo';
// import Counter from './Counter';
// import Counter_Reduce from './Counter_Reduce';
import ReducerSample from './ReducerSample';
// import MyForm from './MyForm';
import { SampleProvider } from './SampleContext';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <MyForm /> */}
      {/* <Counter_Reduce /> */}
      <SampleProvider>
        <ReducerSample/>
      </SampleProvider>
    </div>
  );
}

export default App;
