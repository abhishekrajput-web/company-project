// import React, { useState } from 'react';
// import axios from 'axios';

// const AddReviewModal = ({ isOpen, onClose, onReviewAdded, companyId }) => {
//   const [name, setName] = useState('');
//   const [subject, setSubject] = useState('');
//   const [comment, setComment] = useState('');
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !subject || !comment || rating === 0) {
//       setError('Please fill all fields and provide a rating.');
//       return;
//     }
//     setLoading(true);
//     setError('');
//     try {
//       await axios.post(`http://localhost:3000/api/companies/${companyId}/reviews`, { name, subject, comment, rating });
//       onReviewAdded();
//       onClose();
//       // Reset form fields
//       setName('');
//       setSubject('');
//       setComment('');
//       setRating(0);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to submit review.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
//       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg relative">
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">×</button>
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Add Review</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {error && <p className="text-red-500 text-sm text-center bg-red-100 p-2 rounded-md">{error}</p>}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//               <input type="text" placeholder="Enter" value={name} onChange={(e) => setName(e.target.value)} className="input-style" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
//               <input type="text" placeholder="Enter" value={subject} onChange={(e) => setSubject(e.target.value)} className="input-style" />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Enter your Review</label>
//             <textarea placeholder="Description" value={comment} onChange={(e) => setComment(e.target.value)} rows="4" className="input-style" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
//             <div className="flex items-center space-x-2">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <i
//                   key={star}
//                   className={`cursor-pointer text-3xl transition-colors ${ (hoverRating || rating) >= star ? 'fas fa-star text-yellow-400' : 'far fa-star text-gray-300'}`}
//                   onClick={() => setRating(star)}
//                   onMouseEnter={() => setHoverRating(star)}
//                   onMouseLeave={() => setHoverRating(0)}
//                 ></i>
//               ))}
//               <span className="text-gray-600 ml-4 font-medium">
//                 {rating > 0 ? `${rating} Star${rating > 1 ? 's' : ''} - Satisfied` : 'Select a rating'}
//               </span>
//             </div>
//           </div>
//           <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 transition-all" disabled={loading}>
//             {loading ? 'Submitting...' : 'Save'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddReviewModal;




import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../utils/baseUrl';

const AddReviewModal = ({ isOpen, onClose, onReviewAdded, companyId }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0); // This state is for visual hover effect only
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !subject || !comment || rating === 0) {
      setError('Please fill all fields and provide a rating.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      // Corrected the URL to use the backend port
      await axios.post(`${BASE_URL}/api/companies/${companyId}/reviews`, { name, subject, comment, rating });
      onReviewAdded();
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit review.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    // MODAL CONTAINER: No transparency
    <div className="fixed inset-0 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg relative overflow-hidden">
        {/* BUBBLE DESIGN */}
        <div className="absolute -top-16 -left-16 w-48 h-48">
          <div className="absolute w-48 h-48 bg-purple-200 rounded-full opacity-50"></div>
          <div className="absolute w-32 h-32 ml-10 mt-10 bg-purple-400 rounded-full opacity-50"></div>
        </div>

        <div className="relative z-10 p-8">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">×</button>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Add Review</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && <p className="text-red-500 text-sm text-center bg-red-100 p-2 rounded-md">{error}</p>}
            
            {/* EACH FIELD IS NOW ON A NEW LINE */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="form-input-container">
                <input type="text" placeholder="Enter" value={name} onChange={(e) => setName(e.target.value)} className="form-input !pl-4" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <div className="form-input-container">
                <input type="text" placeholder="Enter" value={subject} onChange={(e) => setSubject(e.target.value)} className="form-input !pl-4" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Enter your Review</label>
              <textarea placeholder="Description" value={comment} onChange={(e) => setComment(e.target.value)} rows="4" className="w-full px-4 py-3 text-base border-none bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500" />
            </div>

            <div>
              <label className="block text-lg font-bold text-gray-800 mb-2">Rating</label>
              <div className="flex items-center space-x-2">
                {/* STAR RATING LOGIC FIX */}
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`cursor-pointer text-4xl transition-colors ${
                      (hoverRating || rating) >= star 
                        ? 'fas fa-star text-yellow-400' 
                        : 'far fa-star text-gray-300'
                    }`}
                    onClick={() => setRating(star)} // This sets the permanent rating
                    onMouseEnter={() => setHoverRating(star)} // This is for visual feedback on hover
                    onMouseLeave={() => setHoverRating(0)} // Reset hover effect
                  ></i>
                ))}
                <span className="text-gray-600 ml-4 font-medium">
                  {rating > 0 && "Satisfied"}
                </span>
              </div>
            </div>
            
            {/* Centered Save Button */}
            <div className="flex justify-center pt-4">
                <button type="submit" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-12 rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 transition-all text-base" disabled={loading}>
                {loading ? 'Submitting...' : 'Save'}
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviewModal;