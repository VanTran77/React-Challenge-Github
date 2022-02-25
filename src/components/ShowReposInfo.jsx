import React from 'react'


function ShowRepos(props) {
  // console.log(reposInfo);
  return (
  <div>  
    <ul className="list-group">
      <h2 style={{margin: "30px 0 20px"}}>User Repositories:</h2>
      {props.reposInfo  && props.reposInfo.map((value, index)=>{
        return(
          <li className="list-group-item list-group-item-action" key={value.id}>
            <a 
              href={value.html_url} target="_blank">{`${index + 1}. `}{`${value.name}: `} 
            </a>
            {value.description}
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default ShowRepos