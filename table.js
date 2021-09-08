import React from 'react';



class InfoTable extends React.Component
{
  
  render()
  {
    return(
        <div className="container">
        <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
       
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
          this.props.getData.length > 0 ?
          (
            this.props.getData.map(e => 
              <tr key = {e._id}>
                <td>{e.Name}</td>
                <td>{e.Age}</td>
                
                <td><button className = "btn btn-primary"
                onClick = {event => {
                  this.props.setData(e)
                }}
                >Edit</button></td>
                <td><button className = "btn btn-primary"
                      onClick = {event => {
                        this.props.del(e)
                      }}>Delete</button></td>
              </tr>
            )
          )
          :
          (
            <tr>
              <td>No data</td>
            </tr>
          )
     
    }
        
    </tbody>
  </table>
</div>

    )
  }
}

export default InfoTable;
