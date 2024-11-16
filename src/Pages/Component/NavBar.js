import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Component/logo'

function Navbar() {
  return (
    <div className='border-b-2 border-gray-300'>
      <div className="flex items-center justify-between container w-auto m-auto ">

        {/** Navbar **/}
        <nav className="flex items-center justify-start bg-transparent p-4">
          <div className='logo ml-10'>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex gap-0 justify-center space-x-6">
            <li className='m-0'>
              <Link 
                to="/" 
                className="text-black hover:text-white hover:bg-black px-3 rounded-md text-sm font-medium"
              >
                <i className="fas fa-home ml-2"></i>
                <span>الرئيسية</span>
              </Link>
            </li>

            <li className='m-auto'>
              <Link 
                to="/pod" 
                className="text-black hover:text-white hover:bg-black px-3 rounded-md text-sm font-medium"
              >
                <i className="fas fa-microphone-alt ml-2"></i>
                <span>البودكاست</span>
              </Link>
            </li>

            <li>
              <Link 
                to="/Version" 
                className="text-black hover:text-white hover:bg-black px-3 rounded-md text-sm font-medium"
              >
                <i className="fas fa-book ml-2"></i>
                <span>ااااالتصدير</span>
              </Link>
            </li>

            <li>
              <Link 
                to="/Video" 
                className="text-black hover:text-white hover:bg-black px-3 rounded-md text-sm font-medium"
              >
                <i className="fas fa-video ml-2"></i>
                <span>الفيديوهات</span>
              </Link>
            </li>
              
            <li>
              <Link 
                to="/Blog" 
                className="text-black hover:text-white hover:bg-black px-3 rounded-md text-sm font-medium"
              >
                <i class="fa-solid fa-newspaper ml-2"></i>
                <span>المدونة</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/** Feild Navbar **/}
        <div className="data-navbar">
          <div className="flex">
            <div className='search-field flex items-center border-b-2 border-gray-200 bg-transparent px-2 py-2 rounded'>
              <input 
                type="text" 
                placeholder="ابحث هنا..." 
                className='bg-transparent focus:outline-none text-sm'
              />
              <i className="fas fa-search text-lg"></i>
            </div>
            <button 
              className="btn-login mx-2 text-white text-sm rounded px-2"
            >
              تسجيل الدخول
            </button>
            <button 
              className="btn-signup mx-2 bg-white text-sm px-2 rounded"
            >
              الاشتراك
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
