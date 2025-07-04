// import React, { useState } from 'react';
// import axios from 'axios';

// const AddCompanyModal = ({ isOpen, onClose, onCompanyAdded }) => {
//   const [name, setName] = useState('');
//   const [location, setLocation] = useState('');
//   const [foundedOn, setFoundedOn] = useState('');
//   const [city, setCity] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !location || !foundedOn || !city) {
//         setError('Please fill in all fields.');
//         return;
//     }
//     setLoading(true);
//     setError('');
//     try {
//         await axios.post('http://localhost:3000/api/companies', { name, location, foundedOn, city });
//         onCompanyAdded();
//         onClose();
//         // Reset form fields
//         setName('');
//         setLocation('');
//         setFoundedOn('');
//         setCity('');
//     } catch (err) {
//         setError(err.response?.data?.message || 'Failed to add company. Please try again.');
//     } finally {
//         setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
//       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md relative">
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">×</button>
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Add Company</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {error && <p className="text-red-500 text-sm text-center bg-red-100 p-2 rounded-md">{error}</p>}
//           <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Company name</label>
//               <input type="text" placeholder="Enter..." value={name} onChange={(e) => setName(e.target.value)} className="input-style"/>
//           </div>
//           <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
//               <input type="text" placeholder="e.g., 816, Shekhar Central, Indore" value={location} onChange={(e) => setLocation(e.target.value)} className="input-style"/>
//           </div>
//           <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Founded on</label>
//               <input type="date" value={foundedOn} onChange={(e) => setFoundedOn(e.target.value)} className="input-style"/>
//           </div>
//           <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
//               <input type="text" placeholder="e.g., Indore" value={city} onChange={(e) => setCity(e.target.value)} className="input-style"/>
//           </div>
//           <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 transition-all" disabled={loading}>
//               {loading ? 'Saving...' : 'Save'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddCompanyModal;

// import React, { useState } from 'react';
// import axios from 'axios';

// const AddCompanyModal = ({ isOpen, onClose, onCompanyAdded }) => {
//   const [name, setName] = useState('');
//   const [location, setLocation] = useState('');
//   const [foundedOn, setFoundedOn] = useState('');
//   const [city, setCity] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !location || !foundedOn || !city) {
//         setError('Please fill in all fields.');
//         return;
//     }
//     setLoading(true);
//     setError('');
//     try {
//         await axios.post('http://localhost:5001/api/companies', { name, location, foundedOn, city });
//         onCompanyAdded();
//         onClose();
//     } catch (err) {
//         setError(err.response?.data?.message || 'Failed to add company.');
//     } finally {
//         setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     // MODAL CONTAINER: No transparency, just a fixed overlay
//     <div className="fixed inset-0 flex justify-center items-center z-50 p-4">
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden">
//         {/* BUBBLE DESIGN */}
//         <div className="absolute -top-16 -left-16 w-48 h-48">
//           <div className="absolute w-48 h-48 bg-purple-200 rounded-full opacity-50"></div>
//           <div className="absolute w-32 h-32 ml-10 mt-10 bg-purple-400 rounded-full opacity-50"></div>
//         </div>
        
//         <div className="relative z-10 p-8">
//           <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">×</button>
          
//           <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Add Company</h2>
          
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {error && <p className="text-red-500 text-sm text-center bg-red-100 p-2 rounded-md">{error}</p>}
            
//             {/* EACH FIELD IS NOW ON A NEW LINE */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Company name</label>
//               <div className="form-input-container">
//                 <input type="text" placeholder="Enter..." value={name} onChange={(e) => setName(e.target.value)} className="form-input !pl-4"/>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
//               <div className="form-input-container">
//                 <input type="text" placeholder="Select Location" value={location} onChange={(e) => setLocation(e.target.value)} className="form-input !pl-4"/>
//                 <i className="fa-solid fa-location-dot form-input-icon-right"></i>
//               </div>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Founded on</label>
//               <div className="form-input-container">
//                 <input 
//                   type="text" 
//                   placeholder="DD/MM/YYYY" 
//                   value={foundedOn} 
//                   onChange={(e) => setFoundedOn(e.target.value)}
//                   onFocus={(e) => e.target.type='date'} // Change to date type on focus
//                   onBlur={(e) => e.target.type='text'} // Change back to text on blur if empty
//                   className="form-input !pl-4"
//                 />
//                  <i className="fa-regular fa-calendar-days form-input-icon-right"></i>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
//               <div className="form-input-container">
//                  <input type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} className="form-input !pl-4"/>
//               </div>
//             </div>
            
//             {/* Centered Save Button */}
//             <div className="flex justify-center pt-4">
//               <button type="submit" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-12 rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 transition-all text-base" disabled={loading}>
//                   {loading ? 'Saving...' : 'Save'}
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCompanyModal;



import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../utils/baseUrl';

const AddCompanyModal = ({ isOpen, onClose, onCompanyAdded }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [foundedOn, setFoundedOn] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !location || !foundedOn || !city) {
        setError('Please fill in all fields.');
        return;
    }
    setLoading(true);
    setError('');
    try {
        await axios.post(`${BASE_URL}/api/companies`, { name, location, foundedOn, city });
        onCompanyAdded();
        onClose();
    } catch (err) {
        setError(err.response?.data?.message || 'Failed to add company.');
    } finally {
        setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-48 h-48">
          <div className="absolute w-48 h-48 bg-purple-200 rounded-full opacity-50"></div>
          <div className="absolute w-32 h-32 ml-10 mt-10 bg-purple-400 rounded-full opacity-50"></div>
        </div>
        
        <div className="relative z-10 p-8">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">×</button>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Add Company</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && <p className="text-red-500 text-sm text-center bg-red-100 p-2 rounded-md">{error}</p>}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company name</label>
              <input type="text" placeholder="Enter..." value={name} onChange={(e) => setName(e.target.value)} className="form-input !pl-4"/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <div className="form-input-container">
                <input type="text" placeholder="Select Location" value={location} onChange={(e) => setLocation(e.target.value)} className="form-input !pl-4"/>
                <i className="fa-solid fa-location-crosshairs form-input-icon-right"></i>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Founded on</label>
              <div className="form-input-container">
                {/* FIX: This input now correctly functions as a date picker while showing a placeholder */}
                <input 
                  type="date"
                  value={foundedOn} 
                  onChange={(e) => setFoundedOn(e.target.value)}
                  className="form-input !pl-4 appearance-none text-gray-500 [&:not(:placeholder-shown)]:text-black"
                  placeholder="DD/MM/YYYY"
                />
                 <i className="fa-regular fa-calendar-days form-input-icon-right"></i>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} className="form-input !pl-4"/>
            </div>
            
            <div className="flex justify-center pt-4">
              <button type="submit" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-12 rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 transition-all text-base" disabled={loading}>
                  {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCompanyModal;