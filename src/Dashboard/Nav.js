import React from 'react'

function Nav() {
  const logout = () => {
    window.location.replace("/");
  }
  return (
    <nav class="navbar navbar-light p-1 bi-justify-right body-center" style={ {backgroundColor : "#e3f2fd" }}>
      <button class="bi bi-power .btn-sm body-center" onClick={() => logout()} style = {{height:"15px" , width:"5px" , padding:"14px"}} ></button>
    </nav>
  )
}

export default Nav
