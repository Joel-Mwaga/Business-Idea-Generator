const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const businessIdeas = {
    "30,000-50,000": {
        "software-developer": [
            { title: "Freelance Web Development", description: "Offer web development services to small businesses and startups." },
            { title: "App Development for Small Businesses", description: "Create mobile apps tailored to small businesses to streamline operations." }
        ],
        "teacher": [
            { title: "Online Tutoring Service", description: "Provide online tutoring for students in various subjects." },
            { title: "Educational YouTube Channel", description: "Start a YouTube channel to share educational content and monetize it." }
        ],
        "doctor": [
            { title: "Health Blog", description: "Start a health blog to share medical knowledge and advice." },
            { title: "Telemedicine Consultation", description: "Offer remote medical consultations to patients." }
        ],
        "nurse": [
            { title: "Home Health Care Service", description: "Provide in-home healthcare services for elderly or disabled patients." },
            { title: "Online Nursing Advice", description: "Offer online nursing advice and support for patients." }
        ],
        "engineer": [
            { title: "Technical Consulting", description: "Provide technical consulting services to businesses." },
            { title: "Product Design and Prototyping", description: "Design and prototype products for startups and small businesses." }
        ],
        "accountant": [
            { title: "Small Business Accounting Services", description: "Offer accounting and bookkeeping services to small businesses." },
            { title: "Financial Coaching", description: "Provide financial coaching to individuals and businesses." }
        ],
        "lawyer": [
            { title: "Legal Consulting for Startups", description: "Offer legal consulting services to startups." },
            { title: "Online Legal Advice", description: "Provide online legal advice to clients." }
        ],
        "graphic-designer": [
            { title: "Freelance Logo Design", description: "Design logos for small businesses and startups." },
            { title: "Print-on-Demand Store", description: "Create designs for print-on-demand products like t-shirts and mugs." }
        ],
        "data-analyst": [
            { title: "Data Visualization Services", description: "Provide data visualization services to businesses." },
            { title: "Freelance Data Analysis", description: "Offer freelance data analysis services to companies." }
        ],
        "marketing-specialist": [
            { title: "Social Media Management", description: "Manage social media accounts for businesses." },
            { title: "Content Marketing Service", description: "Provide content marketing services to businesses." }
        ]
    },
    "50,000-70,000": {
        "software-developer": [
            { title: "Custom Software Development", description: "Develop custom software solutions for medium-sized businesses." },
            { title: "AI-Powered Tools", description: "Create AI-powered tools to automate business processes." }
        ],
        "teacher": [
            { title: "Online Course Creation", description: "Develop and sell online courses in your area of expertise." },
            { title: "Educational Consulting", description: "Provide consulting services to schools and educational institutions." }
        ],
        "doctor": [
            { title: "Specialized Health Clinics", description: "Open a clinic specializing in a specific medical field." },
            { title: "Health App Development", description: "Create apps to help patients manage their health." }
        ],
        "nurse": [
            { title: "Nursing Agency", description: "Start an agency to connect nurses with healthcare facilities." },
            { title: "Health Coaching", description: "Provide health coaching services to individuals." }
        ],
        "engineer": [
            { title: "Engineering Consultancy", description: "Offer consultancy services for large-scale engineering projects." },
            { title: "Renewable Energy Solutions", description: "Develop renewable energy solutions for businesses." }
        ],
        "accountant": [
            { title: "Tax Advisory Services", description: "Provide tax advisory services to individuals and businesses." },
            { title: "Financial Planning", description: "Offer financial planning services to high-income clients." }
        ],
        "lawyer": [
            { title: "Corporate Legal Services", description: "Provide legal services to corporations and large businesses." },
            { title: "Intellectual Property Consulting", description: "Help businesses protect their intellectual property." }
        ],
        "graphic-designer": [
            { title: "Brand Identity Design", description: "Create complete brand identity packages for businesses." },
            { title: "UX/UI Design Services", description: "Offer UX/UI design services for websites and apps." }
        ],
        "data-analyst": [
            { title: "Big Data Analytics", description: "Provide big data analytics services to large organizations." },
            { title: "Data Science Consulting", description: "Offer consulting services in data science and machine learning." }
        ],
        "marketing-specialist": [
            { title: "Digital Marketing Agency", description: "Start a digital marketing agency to serve medium-sized businesses." },
            { title: "SEO Optimization Services", description: "Provide SEO services to improve website rankings." }
        ]
    },
    "70,000-100,000": {
        "software-developer": [
            { title: "Enterprise Software Development", description: "Build enterprise-grade software for large organizations." },
            { title: "Cloud Solutions", description: "Develop cloud-based solutions for businesses." }
        ],
        "teacher": [
            { title: "Private Educational Institution", description: "Start a private school or educational institution." },
            { title: "Advanced Online Learning Platforms", description: "Develop advanced e-learning platforms for students." }
        ],
        "doctor": [
            { title: "Specialized Surgery Clinics", description: "Open a clinic specializing in advanced surgical procedures." },
            { title: "Medical Research", description: "Invest in medical research and innovation." }
        ],
        "nurse": [
            { title: "Luxury Home Care Services", description: "Provide premium home care services for high-income clients." },
            { title: "Nursing Education Programs", description: "Start programs to train aspiring nurses." }
        ],
        "engineer": [
            { title: "Robotics Development", description: "Develop robotics solutions for industrial automation." },
            { title: "Smart City Solutions", description: "Design and implement smart city technologies." }
        ],
        "accountant": [
            { title: "Corporate Accounting Services", description: "Provide accounting services to large corporations." },
            { title: "Investment Advisory", description: "Offer investment advisory services to high-net-worth individuals." }
        ],
        "lawyer": [
            { title: "International Legal Consulting", description: "Provide legal consulting for international businesses." },
            { title: "Mergers and Acquisitions", description: "Specialize in legal services for mergers and acquisitions." }
        ],
        "graphic-designer": [
            { title: "Motion Graphics Studio", description: "Start a studio specializing in motion graphics and animation." },
            { title: "High-End Branding Services", description: "Offer premium branding services for luxury brands." }
        ],
        "data-analyst": [
            { title: "AI and Machine Learning Solutions", description: "Develop AI-driven data analysis tools." },
            { title: "Predictive Analytics Services", description: "Provide predictive analytics services to businesses." }
        ],
        "marketing-specialist": [
            { title: "Global Marketing Campaigns", description: "Manage global marketing campaigns for multinational companies." },
            { title: "Brand Strategy Consulting", description: "Offer consulting services to develop brand strategies." }
        ]
    },
    "100,000-150,000": {
        "software-developer": [
            { title: "AI-Powered Enterprise Solutions", description: "Develop AI-powered software for large enterprises." },
            { title: "Blockchain Development", description: "Create blockchain-based solutions for businesses." }
        ],
        "teacher": [
            { title: "International Education Consulting", description: "Provide consulting services for international education programs." },
            { title: "Elite Private Tutoring", description: "Offer private tutoring services for high-income families." }
        ],
        "doctor": [
            { title: "Luxury Health Clinics", description: "Open luxury health clinics for high-income clients." },
            { title: "Medical Device Innovation", description: "Develop innovative medical devices." }
        ],
        "nurse": [
            { title: "Executive Health Services", description: "Provide health services tailored to executives." },
            { title: "Nursing Leadership Training", description: "Train nurses for leadership roles in healthcare." }
        ],
        "engineer": [
            { title: "Aerospace Engineering Projects", description: "Work on advanced aerospace engineering projects." },
            { title: "Green Energy Infrastructure", description: "Develop infrastructure for green energy solutions." }
        ],
        "accountant": [
            { title: "Wealth Management Services", description: "Offer wealth management services to ultra-high-net-worth individuals." },
            { title: "Corporate Tax Strategy", description: "Develop tax strategies for multinational corporations." }
        ],
        "lawyer": [
            { title: "High-Profile Legal Cases", description: "Handle high-profile legal cases for elite clients." },
            { title: "International Arbitration", description: "Specialize in international arbitration and dispute resolution." }
        ],
        "graphic-designer": [
            { title: "Luxury Brand Design", description: "Design for luxury brands and high-end clients." },
            { title: "Creative Agency", description: "Start a creative agency offering premium design services." }
        ],
        "data-analyst": [
            { title: "Enterprise Data Solutions", description: "Develop enterprise-level data solutions." },
            { title: "AI-Powered Business Intelligence", description: "Create AI-powered business intelligence tools." }
        ],
        "marketing-specialist": [
            { title: "Luxury Brand Marketing", description: "Develop marketing strategies for luxury brands." },
            { title: "Global Advertising Campaigns", description: "Manage advertising campaigns for global brands." }
        ]
    },
    "150,000+": {
        "software-developer": [
            { title: "Tech Startup", description: "Start your own tech company focused on innovative solutions." },
            { title: "AI Research and Development", description: "Invest in AI research and develop cutting-edge technologies." }
        ],
        "teacher": [
            { title: "International Education Franchise", description: "Start a franchise of international schools." },
            { title: "Educational Technology Startup", description: "Develop technology solutions for the education sector." }
        ],
        "doctor": [
            { title: "Private Medical Practice", description: "Open a private medical practice for elite clients." },
            { title: "Medical Research Institution", description: "Establish a research institution for advanced medical studies." }
        ],
        "nurse": [
            { title: "Global Health Initiatives", description: "Lead global health initiatives and projects." },
            { title: "Luxury Health Retreats", description: "Organize luxury health retreats for high-income clients." }
        ],
        "engineer": [
            { title: "Space Exploration Projects", description: "Work on space exploration and satellite projects." },
            { title: "Advanced Robotics Development", description: "Develop advanced robotics for industrial and personal use." }
        ],
        "accountant": [
            { title: "Global Financial Consulting", description: "Provide financial consulting for multinational corporations." },
            { title: "Private Equity Advisory", description: "Advise private equity firms on investments." }
        ],
        "lawyer": [
            { title: "Elite Legal Services", description: "Provide legal services to high-profile clients." },
            { title: "International Trade Law", description: "Specialize in international trade and commerce law." }
        ],
        "graphic-designer": [
            { title: "Global Creative Agency", description: "Start a global creative agency for high-end clients." },
            { title: "Luxury Product Design", description: "Design luxury products for elite brands." }
        ],
        "data-analyst": [
            { title: "AI-Driven Predictive Models", description: "Develop AI-driven predictive models for global businesses." },
            { title: "Data-Driven Investment Strategies", description: "Create data-driven strategies for investment firms." }
        ],
        "marketing-specialist": [
            { title: "Global Marketing Consultancy", description: "Offer consultancy services for global marketing strategies." },
            { title: "Luxury Brand Campaigns", description: "Develop campaigns for luxury and high-end brands." }
        ]
    }
};

app.post('/api/generate-ideas', (req, res) => {
    const { salaryRange, occupation } = req.body;
    const ideas = businessIdeas[salaryRange]?.[occupation] || [];
    res.json({ ideas });
});

app.post('/api/idea-details', (req, res) => {
    const { salaryRange, occupation, title } = req.body;
    const ideas = businessIdeas[salaryRange]?.[occupation];
    const idea = ideas?.find(idea => idea.title === title);
    if (idea) {
        res.json({ idea });
    } else {
        res.status(404).json({ error: "Business idea not found." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
