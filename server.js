const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const businessIdeas = {
    "30,000-50,000": {
        "software-developer": ["Freelance Web Development", "App Development for Small Businesses"],
        "teacher": ["Online Tutoring Service", "Educational YouTube Channel"],
        "doctor": ["Health Blog", "Telemedicine Consultation"],
        "nurse": ["Home Health Care Service", "Online Nursing Advice"],
        "engineer": ["Technical Consulting", "Product Design and Prototyping"],
        "accountant": ["Small Business Accounting Services", "Financial Coaching"],
        "lawyer": ["Legal Consulting for Startups", "Online Legal Advice"],
        "graphic-designer": ["Freelance Logo Design", "Print-on-Demand Store"],
        "data-analyst": ["Data Visualization Services", "Freelance Data Analysis"],
        "marketing-specialist": ["Social Media Management", "Content Marketing Service"]
    },
    "50,000-70,000": {
        "software-developer": ["Custom Software Development", "SaaS Startup"],
        "teacher": ["Private Coaching Center", "Educational Mobile App"],
        "doctor": ["Wellness Clinic", "Health Coaching"],
        "nurse": ["Mobile Nursing Services", "Health Blogging"],
        "engineer": ["Renewable Energy Consulting", "Automation Services"],
        "accountant": ["Bookkeeping Business", "Tax Preparation Service"],
        "lawyer": ["Corporate Legal Advisory", "Legal Document Review"],
        "graphic-designer": ["Branding Agency", "Custom Illustration Services"],
        "data-analyst": ["AI & Machine Learning Consultancy", "Business Intelligence Services"],
        "marketing-specialist": ["SEO Consulting", "Email Marketing Services"]
    },
    "70,000-100,000": {
        "software-developer": ["Tech Startup", "AI-based Applications"],
        "teacher": ["EdTech Startup", "Online Course Platform"],
        "doctor": ["Private Clinic", "Medical Research Firm"],
        "nurse": ["Specialized Nursing Facility", "Wellness Retreat"],
        "engineer": ["Engineering Consultancy Firm", "Smart Home Automation Business"],
        "accountant": ["Financial Advisory Firm", "Investment Consultancy"],
        "lawyer": ["High-profile Legal Consultancy", "Litigation Firm"],
        "graphic-designer": ["UX/UI Design Firm", "Game Design Studio"],
        "data-analyst": ["Big Data Consulting", "Predictive Analytics Service"],
        "marketing-specialist": ["Advertising Agency", "Influencer Marketing Agency"]
    },
    "100,000-150,000": {
        "software-developer": ["AI-driven Software Company", "Tech Innovation Hub"],
        "teacher": ["International School", "E-learning Platform"],
        "doctor": ["Specialized Medical Center", "Medical Equipment Supply"],
        "nurse": ["Luxury Healthcare Services", "Home Nursing Agency"],
        "engineer": ["High-tech Engineering Firm", "AI-driven Robotics Startup"],
        "accountant": ["Corporate Finance Firm", "Wealth Management Agency"],
        "lawyer": ["International Law Firm", "Corporate M&A Advisory"],
        "graphic-designer": ["Luxury Branding Agency", "Animation Studio"],
        "data-analyst": ["AI-based Predictive Analysis", "Cybersecurity Analytics Firm"],
        "marketing-specialist": ["Global Digital Marketing Firm", "Luxury Brand Consulting"]
    },
    "150,000+": {
        "software-developer": ["Tech Conglomerate", "AI Research Lab"],
        "teacher": ["International Education Network", "EdTech Franchise"],
        "doctor": ["Hospital Chain", "Biotech Startup"],
        "nurse": ["Healthcare Chain", "Retirement Home Franchise"],
        "engineer": ["Space Tech Company", "Energy Solutions Corporation"],
        "accountant": ["Global Accounting Firm", "Hedge Fund Advisory"],
        "lawyer": ["Global Legal Firm", "Government Policy Advisory"],
        "graphic-designer": ["Multinational Branding Firm", "Movie Production Studio"],
        "data-analyst": ["AI Research Center", "Quantum Computing Analytics"],
        "marketing-specialist": ["International PR Firm", "Fortune 500 Consulting"]
    }
};

app.post('/api/generate-ideas', (req, res) => {
    const { salaryRange, occupation } = req.body;
    if (businessIdeas[salaryRange] && businessIdeas[salaryRange][occupation]) {
        res.json({ ideas: businessIdeas[salaryRange][occupation] });
    } else {
        res.json({ ideas: ["No business ideas found for the selected criteria."] });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
