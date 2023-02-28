
import axios from 'axios';
import React, { Component } from 'react';
    
class Admin extends Component {
    state={
      passwrd:"",
      data:[]
    };

    
    handleOnChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
      
    };
    prevent=(e)=>{

        e.preventDefault();
        // const login=prompt("enter password");
        // if(login==='abhinav'){
          
        const  data=this.state;
        
        axios.post("http://127.0.0.1:5000/admin",data).then((response)=>{
        if(response.data.d===0)
        {
          
          alert("enter correct password")
          this.setState({data:[]})
        }else
        {    
        this.setState({data:response.data})
        console.log(this.state.sno)        
    }
  }).catch((error)=>{
            alert(error)
        })
        }
      
        // else{
        //     alert("enter correct password")
         
    
    render() { 
        
        return (
          
            <>
            <input  className='focus:border-rose-400 text-center mb-2 rounded shadow-xl h-10 w-44 placeholder-red-500' name="passwrd" required placeholder="password" value={this.state.pass} type="password" onChange={this.handleOnChange}/>
            <br/>
            <button  onClick={this.prevent} className='text-center   bg-black rounded-md hover:bg-gray-700 text-white p-4 '>
            Get Feedback
            </button>
            <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 mb-64 lg:-mx-8 ">
    <div className="py-2 inline-block min-w-full sm:px-6 mb-48 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className=" border-b-white border-b-4">
            <tr>
              <th scope="col" className="text-sm font-medium text-red-500 px-6 py-4 text-center">
              ID
              </th>
              <th scope="col" className="text-sm font-medium text-red-500 px-6 py-4 text-center">
                First Name
              </th>
              <th scope="col" className="text-sm font-medium text-red-500 px-6 py-4 text-center">
                Last Name
              </th>
              <th scope="col" className="text-sm font-medium text-red-500 px-6 py-4 text-center">
                Phone no
              </th>
              <th scope="col" className="text-sm font-medium text-red-500 px-6 py-4 text-center">
                Email
              </th>
              <th scope="col" className="text-sm font-medium text-red-500 px-6 py-4 text-center">
                Date
              </th>
              <th scope="col" className="text-sm font-medium text-red-500 px-6 py-4 text-center">
                City
              </th>
              <th scope="col" className="text-sm font-medium text-red-500 px-6 py-4 text-center">
                Feedback
              </th>
            </tr>
            </thead>
          <tbody>
          
            {this.state.data.map((student) => (
              <tr className='border-b-4 border-b-white text-red-500' key={student.sno}>
                <th scope="row ">{student.sno}</th>
                <td className='text-md text-red-500 font-mono px-6 py-4 whitespace-nowrap'>{student.first_name}</td>
                <td className='text-md text-red-500 font-mono px-6 py-4 whitespace-nowrap'>{student.last_name}</td>
                <td className='text-md text-red-500 font-mono px-6 py-4 whitespace-nowrap'>{student.phone_no}</td>
                <td className='text-md text-red-500 font-mono px-6 py-4 whitespace-nowrap'>{student.email}</td>
                <td className='text-md text-red-500 font-mono px-6 py-4 whitespace-nowrap'>{student.date}</td>
                <td className='text-md text-red-500 font-mono px-6 py-4 whitespace-nowrap'>{student.city}</td>
                <td className='text-md text-red-500 font-mono px-6 py-4 whitespace-nowrap'>{student.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
            </>
        );
    }
}
 
export default Admin;