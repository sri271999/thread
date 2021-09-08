import React from 'react';


class InfoForm extends React.Component
{
  constructor()
  {
    super();

    this.state = {
      _id:"",
        Name:"",
        Age:"",
       
        isEdit:false
    }
  }

  infoChange = event =>
  {   
    event.preventDefault();
      const { name,value} = event.target;

      this.setState({
          [name] : value
      })
  }

infoSubmit = event =>
{
  if(!this.state.isEdit)
  {
    let data = {
      isEdit:this.state.isEdit,
      Name:this.state.Name,
      Age:this.state.Age
      
    }
    this.props.myData(data);
  }
  else{
    let data = {
      isEdit:this.state.isEdit,
      _id:this.state._id,
      Name:this.state.Name,
      Age:this.state.Age
   
    }
    this.props.myData(data);
  }
}

componentWillReceiveProps(props)
{
  
  if(props.setForm._id != null)
  {
    this.setState({
      isEdit:true,
      _id:props.setForm._id,
      Name:props.setForm.Name,
     
      Age:props.setForm.Age

    })
  }
}

  render()
  {
    return(
        <form onSubmit = {this.infoSubmit} autoComplete="off">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" placeholder="Enter Name" id="Name"
          onChange = {this.infoChange}
          name="Name"
          value = {this.state.Name}/>
        </div>
        
        <div classname="form-group">
          <label >Age:</label>
          <input type="" className="form-control" placeholder="Enter Age" id="age"
           onChange = {this.infoChange}
           name="Age"
           value = {this.state.Age}/>
        </div>
     
        <div>
        <button type="submit" class="btn btn-primary" >{this.state.isEdit ? 'Update': 'Create'}</button>
        </div>
      </form>
    )
  }
}

export default InfoForm;          