import Board from "./components/InnnerBox";

function chessBoard(){
  return (
    <div className="App" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <h1>Chess Board</h1>
      <Board></Board>
    </div>
  )
}


export default chessBoard;