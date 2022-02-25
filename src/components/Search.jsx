import React from 'react'
import '../App.css'

function Search(props) {
  return (

  <div style={{marginBottom:"20px", width:"320px" }}>
    <form>
      <div className='searchBar'>
        <input type="text" className="form-control" name="search" value={props.search} placeholder="Please enter the name" onChange={props.onChange} />
        <button type="button" className="btn btn-primary" onClick={props.onClick}>Search</button>
      </div>
    </form>

  </div>
  )
}

export default Search