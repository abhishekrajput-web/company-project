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

    if (!name || !location || !city || !foundedOn) {
      return res.status(400).json({ message: 'Please provide all required fields: name, location, city, and foundedOn' });
    }

    const companyExists = await Company.findOne({ name });
    if (companyExists) {
      return res.status(400).json({ message: 'A company with this name already exists' });
    }

    const logos = ['/assets/company-logo-1.png', '/assets/company-logo-2.png', '/assets/company-logo-3.png'];
    const randomLogo = logos[Math.floor(Math.random() * logos.length)];

    const company = new Company({ name, location, city, foundedOn, logo: randomLogo });
    
    const createdCompany = await company.save();
    
    res.status(201).json(createdCompany);

  } catch (error) {
    console.error('Error in addCompany:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const addCompanyReview = async (req, res) => {
  try {
    const { rating, comment, name, subject } = req.body;

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
      
      res.status(201).json({ message: 'Review added successfully' });
    } else {
      res.status(404).json({ message: 'Company not found' });
    }
  } catch (error) {
    console.error('Error in addCompanyReview:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};