import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';




export default function Header() {
  return (
  
    <header className='bg-slate-700 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-slate-500'>Avalanche</span>
          <span className='text-slate-700'>rolin</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-500' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/Home'>
         <li className='hidden sm:line text-slate-700 hover:underline'>Home</li></Link>
         <Link to='/About'>
         <li className='hidden sm:line text-slate-700 hover:underline'>About</li></Link>
         <Link to='/Signin'>
         <li className=' text-slate-700 hover:underline'>Signin</li></Link>
         <Link to='/SignUp'>
         <li className='hidden sm:line text-slate-700 hover:underline'>SignUp</li></Link>
         <Link to='/Profile'>
         <li className='hidden sm:line text-slate-700 hover:underline'>Profile</li></Link>

        
        </ul>
      </div>
    </header>

  );
}
