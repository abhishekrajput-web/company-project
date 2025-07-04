


// // frontend/src/pages/HomePage.js

// import React, { useState, useEffect, useCallback, useMemo } from 'react';
// import axios from 'axios';
// import Header from '../components/layout/Header';
// import Loader from '../components/ui/Loader';
// import AddCompanyModal from '../components/modals/AddCompanyModal';
// import CompanyCard from '../components/cards/CompanyCard'; // Import the new component
// import BASE_URL from '../utils/baseUrl';

// const HomePage = () => {
//     const [companies, setCompanies] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [searchQuery, setSearchQuery] = useState('');
//     const [locationQuery, setLocationQuery] = useState('');
//     const [sortOption, setSortOption] = useState('name');
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const fetchCompanies = useCallback(async () => {
//         setLoading(true);
//         try {
//             const { data } = await axios.get(`${BASE_URL}/api/companies?search=${searchQuery}&location=${locationQuery}`);
//             setCompanies(data);
//         } catch (err) {
//             setError('Failed to fetch companies. Please try again later.');
//             setCompanies([]);
//         } finally {
//             setLoading(false);
//         }
//     }, [searchQuery, locationQuery]);

//     useEffect(() => {
//         fetchCompanies(); // Fetch on initial load
//         const timer = setTimeout(() => { fetchCompanies(); }, 500);
//         return () => clearTimeout(timer);
//     }, [searchQuery, locationQuery, fetchCompanies]);

//     const sortedCompanies = useMemo(() => {
//         const sorted = [...companies];
//         sorted.sort((a, b) => {
//             if (sortOption === 'rating') return (b.rating || 0) - (a.rating || 0);
//             if (sortOption === 'location') return (a.location || '').localeCompare(b.location || '');
//             return (a.name || '').localeCompare(b.name || '');
//         });
//         return sorted;
//     }, [companies, sortOption]);

//     return (
//     <>
//       <Header onSearch={setSearchQuery} />
//       <AddCompanyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCompanyAdded={fetchCompanies} />
      
//       <main className="container mx-auto px-32 py-8">
//         {/* NEW LAYOUT FOR CONTROLS */}
//         <div className="flex justify-between items-end mb-6">
//           {/* Left Side Controls */}
//           <div className="flex items-end space-x-4">
//             <div>
//               <label htmlFor="city-select" className="block text-xs font-medium text-gray-500 mb-1">Select City</label>
//               <div className="relative">
//                 <input 
//                   id="city-select"
//                   type="text" 
//                   placeholder="e.g., Indore"
//                   value={locationQuery}
//                   onChange={(e) => setLocationQuery(e.target.value)}
//                   className="border border-gray-300 rounded-md py-1 pl-4 pr-10 w-72 focus:outline-none focus:ring-1 focus:ring-purple-500" />
//                 <i className="fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 right-3 text-purple-500"></i>
//               </div>
//             </div>
//             <button onClick={fetchCompanies} className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all text-sm">Find Company</button>
//             <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all text-sm ml-48">+ Add Company</button>
//           </div>
          
//           {/* Right Side Sort Control */}
//           <div>
//             <label htmlFor="sort-by" className="block text-xs font-medium text-gray-500 mr-2 mb-1">Sort:</label>
//             <select 
//                 id="sort-by" 
//                 value={sortOption} 
//                 onChange={(e) => setSortOption(e.target.value)}
//                 className="border border-gray-300 rounded-md py-2 px-3 w-40 focus:outline-none focus:ring-1 focus:ring-purple-500"
//             >
//                 <option value="name">Name</option>
//                 <option value="rating">Average Rating</option>
//                 <option value="location">Location</option>
//             </select>
//           </div>
//         </div>

        
//         <div className="text-sm text-gray-500 mb-24 font-medium">
//             Result Found: {loading ? '...' : sortedCompanies.length}
//         </div>
        
//         {loading ? <Loader /> : error ? <p className="text-center text-red-500">{error}</p> : (
//             <div className="space-y-4">
//                 {sortedCompanies.length > 0 ? sortedCompanies.map(company => (
//                     // USING THE NEW COMPONENT
//                     <CompanyCard key={company._id} company={company} />
//                 )) : (
//                   <div className="text-center py-10 bg-white rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold text-gray-700">No Companies Found</h3>
//                     <p className="text-gray-500 mt-2">Try adjusting your search or add a new company!</p>
//                   </div>
//                 )}
//             </div>
//         )}
//       </main>
//     </>
//   );
// };

// export default HomePage;


import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import Header from '../components/layout/Header';
import Loader from '../components/ui/Loader';
import AddCompanyModal from '../components/modals/AddCompanyModal';
import CompanyCard from '../components/cards/CompanyCard';

import BASE_URL from '../utils/baseUrl';
const HomePage = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');
    const [sortOption, setSortOption] = useState('name');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // useCallback is still good practice for the function passed as a prop
    const fetchCompanies = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${BASE_URL}/api/companies?search=${searchQuery}&location=${locationQuery}`);
            setCompanies(data);
        } catch (err) {
            setError('Failed to fetch companies. Please try again later.');
            setCompanies([]);
        } finally {
            setLoading(false);
        }
    }, [searchQuery, locationQuery]);

    // THE FIX IS HERE: Refactored useEffect
    useEffect(() => {
        // This effect now runs ONLY when searchQuery or locationQuery changes.
        // It includes debouncing to prevent API calls on every keystroke.
        const timer = setTimeout(() => {
            fetchCompanies();
        }, 500); // 500ms debounce timer

        // This is the cleanup function. It runs when the component unmounts
        // or before the effect runs again. It's crucial for preventing race conditions.
        return () => {
            clearTimeout(timer);
        };
    }, [fetchCompanies]); // The dependency is now the memoized fetchCompanies function.

    const sortedCompanies = useMemo(() => {
        const sorted = [...companies];
        sorted.sort((a, b) => {
            if (sortOption === 'rating') return (b.rating || 0) - (a.rating || 0);
            if (sortOption === 'location') return (a.location || '').localeCompare(b.location || '');
            return (a.name || '').localeCompare(b.name || '');
        });
        return sorted;
    }, [companies, sortOption]);

    return (
    <>
      <Header onSearch={setSearchQuery} />
      <AddCompanyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCompanyAdded={fetchCompanies} />
      
      <main className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="flex justify-between items-end mb-6">
          <div className="flex items-end space-x-4">
            <div>
              <label htmlFor="city-select" className="block text-xs font-medium text-gray-500 mb-1">Select City</label>
              <div className="relative">
                <input 
                  id="city-select"
                  type="text" 
                  placeholder="e.g., Indore"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  className="border border-gray-300 rounded-md py-1 pl-4 pr-10 w-72 focus:outline-none focus:ring-1 focus:ring-purple-500" />
                <i className="fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 right-3 text-purple-500"></i>
              </div>
            </div>
            <button onClick={fetchCompanies} className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all text-sm">Find Company</button>
            {/* REMOVED ml-48 to fix the layout */}
            <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all text-sm ml-62">+ Add Company</button>
          </div>
          
          <div>
            <label htmlFor="sort-by" className="block text-xs font-medium text-gray-500 mr-2 mb-1">Sort:</label>
            <select 
                id="sort-by" 
                value={sortOption} 
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-gray-300 rounded-md py-1 px-3 w-40 focus:outline-none focus:ring-1 focus:ring-purple-500"
            >
                <option value="name">Name</option>
                <option value="rating">Average Rating</option>
                <option value="location">Location</option>
            </select>
          </div>
        </div>

        <div className="text-sm text-gray-500 mb-4 font-medium">
            Result Found: {loading ? '...' : sortedCompanies.length}
        </div>
        
        {loading ? <Loader /> : error ? <p className="text-center text-red-500">{error}</p> : (
            <div className="space-y-4">
                {sortedCompanies.length > 0 ? sortedCompanies.map(company => (
                    <CompanyCard key={company._id} company={company} />
                )) : (
                  <div className="text-center py-10 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-700">No Companies Found</h3>
                    <p className="text-gray-500 mt-2">Try adjusting your search or add a new company!</p>
                  </div>
                )}
            </div>
        )}
      </main>
    </>
  );
};

export default HomePage;