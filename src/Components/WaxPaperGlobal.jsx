import React from 'react'
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';

function WaxPaperGlobal() {
  return (
    <div className='wax_paper_global_container'>
      <div className='wax_paper_global_description'>
        <h1>Wax Paper Global</h1>
        <p>285 Nostrand Ave Unit #120 Brooklyn, NY 11216</p>
        <p>sales@waxpapers.net</p>
        <p>888-836-3696</p>
        <button>Get a Quote</button>
      </div>
      <div>
        <PersonPinCircleIcon style={{color : "blue", fontSize : "150px"}}/>
      </div>
      
    </div>
  )
}

export default WaxPaperGlobal
