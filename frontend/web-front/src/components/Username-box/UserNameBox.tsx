import React from 'react'

function UserNameBox() {
  function gameStart() {
    alert(123);
  }

  return (
  <div>
    <button onClick={gameStart} >
      開始
    </button>
  </div>
  )
}

export default UserNameBox