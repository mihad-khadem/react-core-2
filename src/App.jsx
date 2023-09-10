import './App.css'
import Counter from './counter';
import Team from './team';
import User from './users';
import Friends from './friends';

function App() {

  function handleClick(){
    alert('Button clicked')
    console.log('Button clicked');
  }
  const clickTwo =() => {
    alert('Click two')
  }
  const add = (num) => {
    alert(num + 5)
  }

  return (
    <>
    <User></User>
    <Friends></Friends>
    {/* <Team></Team>
    <Counter></Counter> */}






      {/* <h2>React Core Concepts 2</h2>
      {/* Add event handler */}
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={clickTwo}>Click 2</button>
      <button onClick={() => {alert('Btn clicked')}}>Three</button>
      <button onClick={()=> add(5)}>Add</button>  */}
    </>
  )
}

export default App
