import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/layout/Header';
import StarRating from '../components/ui/StarRating';
import Loader from '../components/ui/Loader';
import AddReviewModal from '../components/modals/AddReviewModal';
import logo1 from '../assets/company-logo-1.png';
import logo2 from '../assets/company-logo-2.png';
import logo3 from '../assets/company-logo-3.png';

import BASE_URL from '../utils/baseUrl';

const logoMap = {
  '/assets/company-logo-1.png': logo1,
  '/assets/company-logo-2.png': logo2,
  '/assets/company-logo-3.png': logo3,
};

const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

const CompanyPage = () => {
    const { id } = useParams();
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
      
    const fetchCompany = useCallback(async () => {
      setLoading(true);
      try {
          const { data } = await axios.get(`${BASE_URL}/api/companies/${id}`);
          setCompany(data);
      } catch (err) {
          setError('Company not found or an error occurred.');
      } finally {
          setLoading(false);
      }
    }, [id]);
      
    useEffect(() => {
      fetchCompany();
    }, [fetchCompany]);

    if (loading) return <><Header onSearch={() => {}} /><Loader /></>;
    if (error) return (
      <>
        <Header onSearch={() => {}} />
        <div className="text-center py-10">
          <p className="text-red-500 text-xl">{error}</p>
          <Link to="/" className="mt-4 inline-block bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700">Go Back Home</Link>
        </div>
      </>
    );

    return (
        <>
            <Header onSearch={() => {}} />
            <AddReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} companyId={id} onReviewAdded={fetchCompany}/>
            
            <main className="container mx-auto px-8 py-8 max-w-6xl">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <img src={logoMap[company.logo]} alt={`${company.name} logo`} className="w-24 h-24 object-contain rounded-md" />
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">{company.name}</h2>
                                <p className="text-sm text-gray-500 mt-1"><i className="fas fa-map-marker-alt mr-2 text-xs"></i>{company.location}</p>
                                <div className="flex items-center mt-3 space-x-3">
                                    <strong className="text-lg font-bold text-gray-800">{(company.rating || 0).toFixed(1)}</strong>
                                    <StarRating value={company.rating || 0} />
                                    <span className="text-sm text-black font-bold">{company.numReviews || 0} Reviews</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                           <p className="text-xs text-gray-500 mb-4">Founded on {formatDate(company.foundedOn)}</p>
                           <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition-all text-sm">+ Add Review</button>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-sm text-gray-500 mb-4 font-medium">
                        Result Found: {company?.reviews?.length || 0}
                    </p>
                    
                    <hr className="border-t border-gray-200 mb-4" />

                    <div className="space-y-8">
                        {company?.reviews?.length > 0 ? company.reviews.map((review) => (
                            <div key={review._id} className="flex space-x-4">
                                <img src={`https://i.pravatar.cc/60?u=${review._id}`} alt={review.name} className="w-12 h-12 rounded-full flex-shrink-0 mt-1"/>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-800">{review.name}</h4>
                                            <p className="text-xs text-gray-500">
                                                {new Date(review.createdAt).toLocaleString('en-GB', {
                                                    day: '2-digit', month: '2-digit', year: 'numeric',
                                                    hour: '2-digit', minute: '2-digit', hour12: false
                                                }).replace(/\//g, '-')}
                                            </p>
                                        </div>
                                        <StarRating value={review.rating} />
                                    </div>
                                    <p className="mt-3 text-gray-700 leading-relaxed break-all">{review.comment}</p>
                                </div>
                            </div>
                        )) : (
                        <div className="text-center py-8">
                            <h3 className="text-lg font-semibold text-gray-700">No Reviews Yet</h3>
                            <p className="text-gray-500 mt-1">Be the first to add a review!</p>
                        </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
};

export default CompanyPage;