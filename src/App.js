import React from 'react';
import NestedComponent from './components/NestedApp';
import Counter from './components/Counter';

export default () => {
   return (
       <>
            <h1>App component</h1>
            <h2 onClick={() => console.log("H2 clicked")}>App component</h2>
            <NestedComponent title="First Nested" />
            <NestedComponent title="Second nested" />
            <div style={{padding:'15px'}}>
                <button onClick={() => console.log('Button clicked')}>Click me</button>
            </div>
            <div style={{padding:'15px'}}>
                <button onClick={btnClickListener}>Click me2</button>
            </div>
            <div style={{padding:'15px'}}>
                <button onClick={(e) => btnClickListener(e)}>Click me3</button>
            </div>
            <Counter title='Super counter' min={10} max={20}/>
       </>
   ); 
}

function btnClickListener(e){
    console.log(e.target);
}

export const c1 = '1234';
export const c2 = '4321';

// export default App;
// export {App};