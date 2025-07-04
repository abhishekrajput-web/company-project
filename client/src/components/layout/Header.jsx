// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = ({ onSearch }) => (
//   <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
//     <div className="container mx-auto px-4 flex justify-between items-center">
//       <Link to="/" className="text-2xl font-bold text-gray-800">Review<span className="text-purple-600">&</span>RATE</Link>
//       <div className="relative flex-1 max-w-xl mx-8">
//         <input type="text" placeholder="Search companies..." onChange={(e) => onSearch(e.target.value)} className="border border-gray-300 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"/>
//         <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
//       </div>
//       <div className="flex items-center space-x-4">
//         <button className="text-gray-600 font-medium hover:text-purple-600 transition">SignUp</button>
//         <button className="text-purple-600 font-medium border border-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white transition">Login</button>
//       </div>
//     </div>
//   </header>
// );
// export default Header;


// frontend/src/components/layout/Header.js

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = ({ onSearch }) => (
//   <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
//     <div className="container mx-auto px-4 flex justify-between items-center">
//       <Link to="/" className="flex items-center space-x-2">
//         <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
//           <i className="fa-solid fa-star text-white text-lg"></i>
//         </div>
//         <span className="text-2xl font-bold text-gray-800">Review<span className="text-purple-600">&</span>RATE</span>
//       </Link>
//       <div className="relative flex-1 max-w-xl mx-8">
//         <input 
//           type="text" 
//           placeholder="Search companies..." 
//           onChange={(e) => onSearch(e.target.value)}
//           className="border border-gray-300 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-1 focus:ring-purple-500"
//         />
//         <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
//       </div>
//       <div className="flex items-center space-x-6">
//         <button className="text-gray-600 font-medium hover:text-purple-600 transition">SignUp</button>
//         {/* CORRECTED LOGIN BUTTON STYLING */}
//         <button className="text-gray-600 font-medium hover:text-purple-600 transition">Login</button>
//       </div>
//     </div>
//   </header>
// );

// export default Header;





// frontend/src/components/layout/Header.js

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = ({ onSearch }) => (
//   <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
//     <div className="container mx-auto px-4 flex justify-between items-center">
//       {/* Left Side: Logo and Title */}
//       <Link to="/" className="flex items-center space-x-2">
//         <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
//           <i className="fa-solid fa-star text-white text-lg"></i>
//         </div>
//         <span className="text-2xl font-bold text-gray-800">Review<span className="text-purple-600">&</span>RATE</span>
//       </Link>

//       {/* Right Side: Search Bar and Auth Buttons Grouped Together */}
//       <div className="flex items-center space-x-6">
//         {/* Search Bar with Icon on the Right */}
//         <div className="relative">
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             onChange={(e) => onSearch(e.target.value)}
//             className="border border-gray-300 rounded-md py-1 pl-4 pr-10 w-64 md:w-80 focus:outline-none focus:ring-1 focus:ring-purple-500"
//           />
//           {/* THE FIX IS HERE */}
//           <button className="absolute inset-y-0 right-0 flex items-center pr-3">
//             <i className="fas fa-search text-purple-600"></i>
//           </button>
//         </div>

//         {/* Auth Buttons */}
//         <div className="flex items-center space-x-6">
//           <button className="text-black font-normal hover:text-purple-600 transition">SignUp</button>
//           <button className="text-black font-normal hover:text-purple-600 transition">Login</button>
//         </div>
//       </div>
//     </div>
//   </header>
// );

// export default Header;





// frontend/src/components/layout/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => (
  // FIX: ADDED border-b and border-gray-200
  <header className="bg-white py-4 shadow-sm sticky top-0 z-50 border-b border-gray-200">
    <div className="container mx-auto px-4 flex justify-between items-center">
      {/* Left Side: Logo and Title */}
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <i className="fa-solid fa-star text-white text-lg"></i>
        </div>
        <span className="text-2xl font-bold text-gray-800">Review<span className="text-purple-600">&</span>RATE</span>
      </Link>

      {/* Right Side: Search Bar and Auth Buttons Grouped Together */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={(e) => onSearch(e.target.value)}
            className="border border-gray-300 rounded-md py-2 pl-4 pr-10 w-64 md:w-80 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
          <button className="absolute inset-y-0 right-0 flex items-center pr-3">
            <i className="fas fa-search text-purple-600"></i>
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 font-medium hover:text-purple-600 transition">SignUp</button>
          <button className="text-gray-600 font-medium hover:text-purple-600 transition">Login</button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;