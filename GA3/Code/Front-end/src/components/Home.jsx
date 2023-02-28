import { useNavigate } from 'react-router-dom';
//import pridict from '/pridict.jsx';
import img from './Model.JPG';

const Home=()=> {
    
const prevent=(e)=>{
e.preventDefault();

}    
const navigate=useNavigate();
    
        return (<>
        
        <div className='App'>
        <br/>
        <div className='flex justify-center'> 
      <div className="p-6 max-w-5/6 w-4/5  bg-white relative   rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 text-left  text-red-500"><h1 className='text-begin font-bold text-3xl font-serif text-red-500' >Introduction</h1><br/><p className='font-serif'>Among various life-threatening diseases, heart disease has garnered a great deal of attention in
        medical research. The diagnosis of heart disease is a challenging task, which can offer automated
        prediction about the heart condition of patient so that further treatment can be made effective. The
        diagnosis of heart disease is usually based on signs, symptoms and physical examination of the
        patient. <span className='bg-red-50 'href='/'>There are several factors that increase the risk of heart disease, such as smoking habit, body
        cholesterol level, family history of heart disease, obesity, high blood pressure, and lack of physical
        exercise.</span><br/>
        <br/>&emsp;&emsp;&emsp;&emsp;Cardiovascular diseases are very common these days, they describe a range of conditions that could affect
your heart. World health organization estimates that 17.9 million global deaths from (Cardiovascular
diseases) CVDs.
It is the primary reason of deaths in adults. Our project can help predict the people who are likely to diagnose
with a heart disease by help of their medical history. It recognizes who all are having any symptoms of
heart disease such as chest pain or high blood pressure and can help in diagnosing disease with less medical
tests and effective treatments, so that they can be cured accordingly. 
        </p></div>
      </div>
      <br/>
      <br/>
        <div className='flex justify-center '>
        
        <div className="p-6 max-w-5/6 w-3/6  bg-white relative   rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
    
    <button onClick={()=>navigate("/pridict")} onChange={prevent} className='bg-black  max-w-4/5 rounded hover:bg-gray-500 font-bold h-12 w-44 text-zinc-50 '>Predict</button>
  
    <div className='flex justify-end absolute -right-10 -top-10'>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="red-600" className="h-4/5 w-2/5 bottom-0 left-0 fill-red-600 max-w-sm">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    </div>
      </div>
      </div>  
      <br/>   
      <div className='flex justify-center'> 
      <div className="p-6 max-w-5/6 w-4/5  bg-white relative  mb-16  rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 text-left  text-red-400">
        <h1 className='text-center text-3xl text-red-500 font-serif font-bold'>Work flow of Model</h1>
        <img src={img} alt="model"/>
        </div>
      </div>
      
      </div>
      
        </>);
    }
  
 
export default Home;