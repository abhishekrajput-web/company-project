// // frontend/src/components/cards/CompanyCard.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import StarRating from '../ui/StarRating';

// import logo1 from '../../assets/company-logo-1.png';
// import logo2 from '../../assets/company-logo-2.png';
// import logo3 from '../../assets/company-logo-3.png';

// const logoMap = {
//   '/assets/company-logo-1.png': logo1,
//   '/assets/company-logo-2.png': logo2,
//   '/assets/company-logo-3.png': logo3,
// };

// const CompanyCard = ({ company }) => {
//   return (
//     <div key={company._id} className="bg-white p-5 rounded-lg shadow-md border border-gray-200 flex items-center justify-between transition hover:shadow-lg hover:border-purple-300">
//       <div className="flex items-center space-x-6 min-w-0">
//         <img src={logoMap[company.logo]} alt={`${company.name} logo`} className="w-20 h-20 object-contain flex-shrink-0" />
//         <div className="min-w-0">
//           <h3 className="text-xl font-bold text-gray-800 truncate">{company.name}</h3>
//           <p className="text-sm text-gray-500 mt-1 truncate">
//             <i className="fas fa-map-marker-alt mr-2 text-xs"></i>
//             {company.location}
//           </p>
//           <div className="flex items-center mt-2 space-x-2">
//             <span className="font-bold text-base text-gray-700">
//               {(company.rating || 0).toFixed(1)}
//             </span>
//             <StarRating value={company.rating || 0} />
//             {/* CORRECTED STYLING FOR REVIEWS TEXT */}
//             <span className="text-sm text-black font-bold">
//               ({company.numReviews || 0} Reviews)
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="text-right flex-shrink-0 ml-6">
//         {/* CORRECTED SPACING FOR FOUNDED ON DATE */}
//         <p className="text-xs text-gray-500 mb-8"> 
//           Founded on: {company.foundedOn ? new Date(company.foundedOn).toLocaleDateString('en-GB') : 'N/A'}
//         </p>
//         <Link to={`/company/${company._id}`} className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-900 transition-all text-sm">
//           Detail Review
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CompanyCard;


// frontend/src/components/cards/CompanyCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../ui/StarRating';

import logo1 from '../../assets/company-logo-1.png';
import logo2 from '../../assets/company-logo-2.png';
import logo3 from '../../assets/company-logo-3.png';

const logoMap = {
  '/assets/company-logo-1.png': logo1,
  '/assets/company-logo-2.png': logo2,
  '/assets/company-logo-3.png': logo3,
};

const CompanyCard = ({ company }) => {
  // Helper function to format the date correctly
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div key={company._id} className="bg-white p-5 rounded-lg shadow-md border border-gray-200 flex items-center justify-between transition hover:shadow-lg hover:border-purple-300">
      <div className="flex items-center space-x-6 min-w-0">
        <img src={logoMap[company.logo]} alt={`${company.name} logo`} className="w-20 h-20 object-contain flex-shrink-0" />
        <div className="min-w-0">
          <h3 className="text-xl font-bold text-gray-800 truncate">{company.name}</h3>
          <p className="text-sm text-gray-500 mt-1 truncate">
            <i className="fas fa-map-marker-alt mr-2 text-xs"></i>
            {company.location}
          </p>
          <div className="flex items-center mt-2 space-x-2">
            <span className="font-bold text-base text-gray-700">
              {(company.rating || 0).toFixed(1)}
            </span>
            <StarRating value={company.rating || 0} />
            {/* FIX: REMOVED BRACKETS */}
            <span className="text-sm text-black font-bold">
              {company.numReviews || 0} Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="text-right flex-shrink-0 ml-6">
        {/* FIX: INCREASED SPACING */}
        <p className="text-xs text-gray-500 mb-8"> 
          {/* FIX: FORMATTED DATE WITH HYPHENS */}
          Founded on {formatDate(company.foundedOn)}
        </p>
        <Link to={`/company/${company._id}`} className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-900 transition-all text-sm">
          Detail Review
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard;