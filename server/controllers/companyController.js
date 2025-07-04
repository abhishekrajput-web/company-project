// // backend/controllers/companyController.js
// import Company from '../models/CompanyModel.js';

// // @desc    Fetch all companies, with search
// export const getCompanies = async (req, res) => {
//   try {
//     const search = req.query.search
//       ? { name: { $regex: req.query.search, $options: 'i' } }
//       : {};
//     const companies = await Company.find({ ...search });
//     res.json(companies);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // @desc    Fetch a single company by its ID
// export const getCompanyById = async (req, res) => {
//   try {
//     const company = await Company.findById(req.params.id);
//     if (company) {
//       res.json(company);
//     } else {
//       res.status(404).json({ message: 'Company not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // @desc    Add a new company
// export const addCompany = async (req, res) => {
//   const { name, location, city, foundedOn } = req.body;
//   const companyExists = await Company.findOne({ name });
//   if (companyExists) {
//     return res.status(400).json({ message: 'A company with this name already exists' });
//   }
//   const logos = ['/assets/company-logo-1.png', '/assets/company-logo-2.png', '/assets/company-logo-3.png'];
//   const randomLogo = logos[Math.floor(Math.random() * logos.length)];
//   const company = new Company({ name, location, city, foundedOn, logo: randomLogo });
//   try {
//     const createdCompany = await company.save();
//     res.status(201).json(createdCompany);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // @desc    Add a new review to a company
// export const addCompanyReview = async (req, res) => {
//   const { rating, comment, name, subject } = req.body;
//   try {
//     const company = await Company.findById(req.params.id);
//     if (company) {
//       const review = { name, rating: Number(rating), subject, comment };
//       company.reviews.push(review);
//       company.numReviews = company.reviews.length;
//       company.rating = company.reviews.reduce((acc, item) => item.rating + acc, 0) / company.reviews.length;
//       await company.save();
//       res.status(201).json({ message: 'Review added successfully' });
//     } else {
//       res.status(404).json({ message: 'Company not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };


// import Company from '../models/companyModel.js';

// export const getCompanies = async (req, res) => {
//   try {
//     const query = {};
//     if (req.query.search) {
//       query.name = { $regex: req.query.search, $options: 'i' };
//     }
//     // NEW: Add location filtering logic
//     if (req.query.location) {
//       query.city = { $regex: req.query.location, $options: 'i' };
//     }
    
//     const companies = await Company.find(query);
//     res.json(companies);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // ... a-l-l o-t-h-e-r c-o-n-t-r-o-l-l-e-r f-u-n-c-t-i-o-n-s a-r-e t-h-e s-a-m-e ...

// export const getCompanyById = async (req, res) => {
//   try {
//     const company = await Company.findById(req.params.id);
//     if (company) { res.json(company); } 
//     else { res.status(404).json({ message: 'Company not found' }); }
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// export const addCompany = async (req, res) => {
//   const { name, location, city, foundedOn } = req.body;
//   const companyExists = await Company.findOne({ name });
//   if (companyExists) { return res.status(400).json({ message: 'A company with this name already exists' }); }
//   const logos = ['/assets/company-logo-1.png', '/assets/company-logo-2.png', '/assets/company-logo-3.png'];
//   const randomLogo = logos[Math.floor(Math.random() * logos.length)];
//   const company = new Company({ name, location, city, foundedOn, logo: randomLogo });
//   try {
//     const createdCompany = await company.save();
//     res.status(201).json(createdCompany);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// export const addCompanyReview = async (req, res) => {
//   const { rating, comment, name, subject } = req.body;
//   try {
//     const company = await Company.findById(req.params.id);
//     if (company) {
//       const review = { name, rating: Number(rating), subject, comment };
//       company.reviews.push(review);
//       company.numReviews = company.reviews.length;
//       company.rating = company.reviews.reduce((acc, item) => item.rating + acc, 0) / company.reviews.length;
//       await company.save();
//       res.status(201).json({ message: 'Review added successfully' });
//     } else {
//       res.status(404).json({ message: 'Company not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };












import Company from '../models/companyModel.js';


export const getCompanies = async (req, res) => {
  try {
    const query = {};
    if (req.query.search) {
      query.name = { $regex: req.query.search, $options: 'i' };
    }
    if (req.query.location) {
      query.city = { $regex: req.query.location, $options: 'i' };
    }
    
    const companies = await Company.find(query);
    
    // Best Practice: Always send a response, even if it's an empty array.
    res.status(200).json(companies);

  } catch (error) {
    console.error('Error in getCompanies:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (company) {
      res.status(200).json(company);
    } else {
      // Best Practice: Use 404 for resources that are not found.
      res.status(404).json({ message: 'Company not found' });
    }
  } catch (error) {
    console.error('Error in getCompanyById:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const addCompany = async (req, res) => {
  try {
    const { name, location, city, foundedOn } = req.body;

    // Best Practice: Explicit input validation.
    if (!name || !location || !city || !foundedOn) {
      return res.status(400).json({ message: 'Please provide all required fields: name, location, city, and foundedOn' });
    }

    const companyExists = await Company.findOne({ name });
    if (companyExists) {
      // Use 400 for a client error (duplicate entry).
      return res.status(400).json({ message: 'A company with this name already exists' });
    }

    const logos = ['/assets/company-logo-1.png', '/assets/company-logo-2.png', '/assets/company-logo-3.png'];
    const randomLogo = logos[Math.floor(Math.random() * logos.length)];

    const company = new Company({ name, location, city, foundedOn, logo: randomLogo });
    
    const createdCompany = await company.save();
    
    // Best Practice: Use 201 for successful resource creation.
    res.status(201).json(createdCompany);

  } catch (error) {
    console.error('Error in addCompany:', error);
    // Handle potential validation errors from Mongoose
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const addCompanyReview = async (req, res) => {
  try {
    const { rating, comment, name, subject } = req.body;

    // Best Practice: Explicit input validation.
    if (!rating || !comment || !name || !subject) {
      return res.status(400).json({ message: 'Please provide all required fields: rating, comment, name, and subject' });
    }

    const company = await Company.findById(req.params.id);

    if (company) {
      const review = { name, rating: Number(rating), subject, comment };
      company.reviews.push(review);
      company.numReviews = company.reviews.length;
      company.rating = company.reviews.reduce((acc, item) => item.rating + acc, 0) / company.reviews.length;
      
      await company.save();
      
      // Best Practice: Use 201 for successful resource creation.
      res.status(201).json({ message: 'Review added successfully' });
    } else {
      res.status(404).json({ message: 'Company not found' });
    }
  } catch (error) {
    console.error('Error in addCompanyReview:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};