import React, { Component } from 'react';
import axios from 'axios';
class Pridict extends Component {
    state = { age:"",
              gender:"",
              cp:"",
              trestbps:"",
              chol:"",
              fbs:"",
              restecg:"",
              thalach:"",
              exang:"",
              oldpeak:"",
              slope:"",
              ca:"",
              thal:"",
              result:"",
               } 


              prevent=(response)=>{
                response.preventDefault();
                if(this.state.age!==""&&this.state.gender!=="" && this.state.cp!==""&&this.state.trestbps!==""&&this.state.chol!==""&&this.state.fbs!==""&&this.state.restecg!==""&&this.state.thalach!==""&&this.state.exang!==""&&this.state.oldpeak!==""&&this.state.slope!==""&&this.state.ca!==""&&this.state.thal!=="")
              {
                const data=this.state;
                console.log(data)
                axios.post("http://127.0.0.1:5000/predict",data).then((response)=>{
                  
                 var ans=(response)
                 ans.data.pred===0?this.setState({result:"no heart disease"}):this.setState({result:"having heart disease "})
                  console.log(ans.data.pred)
                
                 
                }).catch((error)=>{
                  alert(error)
                })
                alert("form submited");
              }
            
            else
            {
              alert("enter all fields");
            }
          }
          
              
              handleOnChange = (event) => {
                const { name, value } = event.target;
                this.setState({
                  [name]: value,
                });
                
              };

    render() { 
               return (<div>

<div className='App'>
    
    <div className='flex flex-col justify-center items-center border-gray-300 pt-5 pb-14'>
    <div className="block max-w-lg p-6 max-w-96  bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
    <h1 className='font-serif text-3xl text-rose-500' >
      Enter Details
      </h1>
  <form className="w-full max-w-lg " onSubmit={this.prevent} >
<div className="flex flex-wrap -mx-3 mb-6 ">
<div className="w-full md:w-full px-3 mb-6 md:mb-0">
<label className="block uppercase tracking-wide text-rose-500 text-xs font-bold mb-2 md:w-full" htmlFor="grid-age">
age
</label>
<input name="age" className="appearance-none text-center block w-full md:w-full text-rose-300 border hover:shadow-md  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-rose-400 placeholder-rose-300"  id="grid-age" onChange={this.handleOnChange} value={this.state.age} type="number" placeholder="24" required/>

</div>
<div className="w-full md:w-full px-3">
<label className="block uppercase tracking-wide text-rose-500 text-xs font-bold mb-2" htmlFor="grid-gender">
gender
</label>
<div className='flex flex-row'>
<div className="basis-1/2 items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
    <input id="bordered-radio-1" type="radio"   value="1"  name="gender" onChange={this.handleOnChange} className="w-4 h-4 text-red-500 bg-gray-100 border-gray-300 focus:ring-blue-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="bordered-radio-1" className="py-4 ml-2 w-full text-sm font-medium font-serif text-red-500 dark:text-gray-300">Male</label>
</div>
<div className="basis-1/2 items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
    <input id="bordered-radio-2" type="radio"  value="0" onChange={this.handleOnChange}  name="gender" className="w-4 h-4 text-red-500 bg-gray-100 hover:shadow-md border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="bordered-radio-2" className="py-4 ml-2 w-full text-sm font-medium font-serif text-red-500 dark:text-gray-300">Female</label>
</div>



</div>
</div>
</div>

<div className="flex flex-wrap -mx-3 mb-2">

<div className="w-full md:w-full px-3 mb-0 md:mb-0">

<label className="block uppercase tracking-wide hover: text-rose-500 text-xs font-bold mb-4" htmlFor="cp">
Chest pain type
</label>
<div className="relative">
<select name="cp" className="block appearance-none w-full  border border-gray-200 text-rose-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-rose-400 text-center" id="cp" required onChange={this.handleOnChange}>
  <option></option>
  <option value="0">typical angina</option>
    <option value="1">atypical angina</option>
  <option value="2">non-anginal pain</option>
  <option value="3">asymptomatic</option>
  
 
  </select>

</div>
<br/>
</div>

<div className="w-full md:w-full px-3 mb-6 md:mb-0">
<label className="block uppercase tracking-wide  text-rose-500 text-xs font-bold mb-2" htmlFor="grid-city">
trestbps
</label>
<input name="trestbps" className="appearance-none text-center block mb-2 w-full hover:shadow-md  text-rose-300 placeholder-rose-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-rose-400" id="grid-city" type="text" placeholder="120 mm"   onChange={this.handleOnChange} value={this.state.trestbps}  required/>
</div>
<br/>
<div className="w-full md:w-full px-3 mb-6 md:mb-0">
<label className="block uppercase tracking-wide  text-rose-500 text-xs font-bold mb-2" htmlFor="grid-city">
chol
</label>
<input name="chol" className="appearance-none text-center block mb-2 w-full hover:shadow-md  text-rose-300 placeholder-rose-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-rose-400" id="grid-city" type="number" placeholder="180 mg"  onChange={this.handleOnChange} value={this.state.chol}  required/>
</div>
</div>

<div className="w-full md:w-full px-3">
<label className="block uppercase tracking-wide text-rose-500 text-xs font-bold mb-2" htmlFor="grid-gender">
fbs
</label>
<div className='flex flex-row'>
<div className="basis-1/2 items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
    <input id="radio-1" type="radio" value="1" onChange={this.handleOnChange} name="fbs" className="w-4 h-4 text-red-500 bg-gray-100 border-gray-300 focus:ring-blue-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="radio-1" className="py-4 ml-2 w-full text-sm font-medium font-serif text-red-500 dark:text-gray-300">Greater then 120</label>
</div>
<div className="basis-1/2 items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
    <input  id="radio-2" type="radio" value="0" name="fbs" onChange={this.handleOnChange} className="w-4 h-4 text-red-500 bg-gray-100 hover:shadow-md border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="radio-2" className="py-4 ml-2 w-full text-sm font-medium font-serif text-red-500 dark:text-gray-300">Less then 120</label>
</div>
</div>
</div>

<br/>
<div className="flex flex-wrap -mx-3 mb-2">

<div className="w-full md:w-full px-3 mb-0 md:mb-0">

<label className="block uppercase tracking-wide hover: text-rose-500 text-xs font-bold mb-4" htmlFor="restecg">
Restecg
</label>
<div className="relative">
<select  name="restecg" className="block appearance-none w-full  border border-gray-200 text-rose-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-rose-400 text-center" id="restecg" required onChange={this.handleOnChange}>
<option></option>
  <option value="0">0</option>
    <option value="1">1</option>
  <option value="2">2</option>

 </select> 
</div>
</div>
</div>
<br/>

<div className="w-full md:w-full px-3 mb-6 md:mb-0">
<label className="block uppercase tracking-wide  text-rose-500 text-xs font-bold mb-2" htmlFor="grid-city">
Thalach
</label>
<input name="thalach" className="appearance-none text-center block mb-2 w-full hover:shadow-md  text-rose-300 placeholder-rose-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-rose-400" id="grid-city" type="number"  onChange={this.handleOnChange} value={this.state.thalach}  placeholder="140 mg" required/>
</div>
<br/>
<div className="flex flex-wrap -mx-3 mb-2">

<div className="w-full md:w-full px-3 mb-0 md:mb-0">

<label className="block uppercase tracking-wide hover: text-rose-500 text-xs font-bold mb-4" htmlFor="grid-cpt">
Exang
</label>
<div className="relative">
<select name="exang" className="block appearance-none w-full  border border-gray-200 text-rose-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-rose-400 text-center" id="grid-cpt" required  onChange={this.handleOnChange}>
<option></option>
  <option value="0">0</option>
    <option value="1">1</option>
   
  
 
  </select>

</div>
</div>
</div>


<br/>

<div className="w-full md:w-full px-3 mb-6 md:mb-0">
<label className="block uppercase tracking-wide  text-rose-500 text-xs font-bold mb-2" htmlFor="grid-city">

Oldpeak
</label>
<input name="oldpeak" className="appearance-none text-center block mb-2 w-full hover:shadow-md  text-rose-300 placeholder-rose-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-rose-400" id="grid-city"  onChange={this.handleOnChange} value={this.state.oldpeak}  type="text" placeholder="2.5" required/>
</div>
<br/>

<div className="flex flex-wrap -mx-3 mb-2">

<div className="w-full md:w-full px-3 mb-0 md:mb-0">

<label className="block uppercase tracking-wide hover: text-rose-500 text-xs font-bold mb-4" htmlFor="grid-cpt">
Slope
</label>
<div className="relative">
<select name="slope" className="block appearance-none w-full  border border-gray-200 text-rose-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-rose-400 text-center" id="grid-cpt"  onChange={this.handleOnChange} required>
<option></option>
  <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
  
 
  </select>

</div>
</div>
</div>
<br/>


<div className="flex flex-wrap -mx-3 mb-2">

<div className="w-full md:w-full px-3 mb-0 md:mb-0">

<label className="block uppercase tracking-wide hover: text-rose-500 text-xs font-bold mb-4" htmlFor="grid-cpt">
CA
</label>
<div className="relative">
<select name="ca" className="block appearance-none w-full  border border-gray-200 text-rose-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-rose-400 text-center" id="grid-cpt"  onChange={this.handleOnChange} required>
<option></option>
  <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
 
  </select>

</div>
</div>
</div>
<br/>

<div className="flex flex-wrap -mx-3 mb-2">

<div className="w-full md:w-full px-3 mb-0 md:mb-0">

<label className="block uppercase tracking-wide hover: text-rose-500 text-xs font-bold mb-4" htmlFor="thal">
Thal
</label>
<div className="relative">
<select  name="thal" className="block appearance-none w-full  border border-gray-200 text-rose-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-rose-400 text-center" id="grid-cpt"  onChange={this.handleOnChange} required>
<option></option>
   <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
 
  </select>

</div>
</div>
</div>
<br/>


<button className="bg-red-500  hover:bg-rose-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
Submit
</button>


</form>

<h1>
{this.state.result}
</h1>

</div>

</div>
</div>
        </div>);
    }
}
 
export default Pridict;