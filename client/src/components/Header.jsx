import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className='bg-white'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-5'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Corplac</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>

        <ul className='flex gap-10'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-500 hover:text-slate-700 font-semibold'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-500 hover:text-slate-700 font-semibold'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-500 hover:text-slate-700 font-semibold'> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
