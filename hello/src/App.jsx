import './App.css'

function App() {

  function handleClick(){
    alert("Button clicked!")
  }

  function handleClick2 () {
    alert("hmm baby ")
  }

  const add = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      <h1>Vite + React</h1>


      <button onClick={handleClick}> Click Me </button>

      <button onClick={handleClick2}> Hello Baby </button>
       
      <button onClick={() => add(10)}> Add </button>
    </> 
  )
}

export default App
