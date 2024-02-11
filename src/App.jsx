
import './App.css'
import Board from './components/Board'

function App() {

  return (
    <>
        <div className="head-container">
          <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Tic-Tac-Toe</h1>
          <Board/>
        </div>
    </>
  )
}

export default App
