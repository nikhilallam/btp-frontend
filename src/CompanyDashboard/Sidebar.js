import React from 'react'
import './style.css';

function Sidebar() {
  return (
    <div className='bg-light sidebar p-2' style={{position : "relative", marginBottom : '500px', display : "inline"}}>
        <div className='my-2'>
            <i className = 'bi bi-graph-up-arrow me-3 fs-4 '></i>
            <span className='brand-name fs-5'>Rozgaar</span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2 '>
                <i className='bi bi-speedometer2 fs-5 me-3'></i>
                <span className='fs-5'>Company Dashboard</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-house fs-5 me-3'></i>
                <span className='fs-5'>Home</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-power fs-5 me-2'></i>
                <span className='fs-5'>Logout</span>
            </a>
        </div>
    </div>
  )
}

// rgb(64 123 156)

export default Sidebar

