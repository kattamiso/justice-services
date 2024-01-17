
import './App.css'
import justicelogo from "../public/Icons/justicelogo.svg"
import SearchIcon from "../public/Icons/searchIcon/SearchIcon.svg"
import MenuIcon from "../public/Icons/MenuIcon/MenuIcon.svg"
import PhoneIcon from "../public/Icons/PhoneIcon/PhoneIcon.svg"
import HumanIcon from "../public/Icons/HumanIcon/HumanIcon.svg"
import Switch from './Components/Switch'


function App() {

  return (
   <div className='w-[360px] h-[560px]'>
   
    <div className='p-[16px] flex justify-between'>
      <img src={justicelogo}/>
        <div className='flex justify-between gap-2'>
      <div className="w-8 h-8 bg-[#F2F2F2] rounded-full flex items-center justify-center">
        <img src={SearchIcon}/>
      </div>
      <div className="w-8 h-8 bg-[#F2F2F2] rounded-full flex justify-center items-center">
        <img src={MenuIcon}/>
      </div>
       </div>
     </div>
   
     <div className='flex flex-col justify-center items-center py-[24px] gap-4'>
      <span className='text-[#048D59]'>მთავარი</span>
      <span>ჩვენ შესახებ</span>
      <span>საჯარო ინფორმაცია</span>
      <div className='flex gap-3'>
        <img src={PhoneIcon}/>
      <span>2 405 405</span>
      </div>
    
<Switch/>

     <div className="w-8 h-8 bg-[#F2F2F2] rounded-full flex justify-center items-center">
        <img src={HumanIcon}/>
      </div>

 </div>
   </div>
  )
}

export default App
