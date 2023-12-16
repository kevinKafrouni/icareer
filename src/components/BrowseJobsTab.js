import {useState } from "react";
import JobsGrid from "./JobsGrid";
function BrowseJobsTab(){

    const [activeTab,setActiveTab] = useState('industry');

    const handleTabClick = (id)=>{
        setActiveTab(id);
    }

    return(        
        <div className="w-fill mr-12 ">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="me-2" role="presentation">
                <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'industry' ? 'border-blue-500' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                    id="industry-tab"
                    data-tabs-target="#industry"
                    type="button"
                    role="tab"
                    aria-controls="industry"
                    aria-selected={activeTab === 'industry' ? 'true' : 'false'}
                    onClick={() => handleTabClick('industry')}
                    >
              Jobs by industry
            </button>
                </li>
                <li className="me-2" role="presentation">
                <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'recent' ? 'border-blue-500' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                    id="recent-tab"
                    data-tabs-target="#recent"
                    type="button"
                    role="tab"
                    aria-controls="recent"
                    aria-selected={activeTab === 'recent' ? 'true' : 'false'}
                    onClick={() => handleTabClick('recent')}
                    >
              Recent Jobs
            </button>
                </li>
                <li className="me-2" role="presentation">
                <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'spec' ? 'border-blue-500' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                    id="spec-tab"
                    data-tabs-target="#spec"
                    type="button"
                    role="tab"
                    aria-controls="spec"
                    aria-selected={activeTab === 'spec' ? 'true' : 'false'}
                    onClick={() => handleTabClick('spec')}
                    >
              Jobs by Specialization
            </button>    
                </li>
                <li role="presentation">
                <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'company' ? 'border-blue-500' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                    id="company-tab"
                    data-tabs-target="#company"
                    type="button"
                    role="tab"
                    aria-controls="company"
                    aria-selected={activeTab === 'company' ? 'true' : 'false'}
                    onClick={() => handleTabClick('company')}
                    >
              Jobs by Company
            </button>  
                    
                </li>
            </ul>
        </div>
        <div id="default-tab-content">
            <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === 'industry' ? '' : 'hidden'}`} id="industry" role="tabpanel" aria-labelledby="industry-tab">
                {activeTab=="industry" &&<JobsGrid
                                            list={[ "Information Technology", "Healthcare", "Finance", "Education", "Entertainment", "Automotive", "Retail", "Hospitality", "Telecommunications", "Real Estate", "Agriculture", "Energy", "Manufacturing", "Media", "Biotechnology"]}

                
                />}
            </div>
            <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === 'recent' ? '' : 'hidden'}`} id="recent" role="tabpanel" aria-labelledby="recent-tab">
                {activeTab=="recent"&&<JobsGrid 
                                        list={ ["Senior Software Engineer",
                                        "Marketing Manager",
                                        "Data Analyst",
                                        "Customer Support Specialist",
                                        "Financial Analyst",
                                        "Graphic Designer",
                                        "Human Resources Coordinator",
                                        "Sales Representative",
                                        "Content Writer",
                                        "Operations Manager"
                                      ]}
                />}
            </div>
            <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === 'spec' ? '' : 'hidden'}`} id="spec" role="tabpanel" aria-labelledby="spec-tab">
                {activeTab=="spec"&&<JobsGrid 
                                        list={["Web Development",
                                        "Nursing",
                                        "Investment Banking",
                                        "Elementary Education",
                                        "Film Production",
                                        "Automotive Engineering",
                                        "Visual Merchandising",
                                        "Hotel Management",
                                        "Network Engineering",
                                        "Property Management",
                                        "Agricultural Economics",
                                        "Renewable Energy",
                                        "Lean Manufacturing"]}
                />}
            </div>
            <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === 'company' ? '' : 'hidden'}`} id="company" role="tabpanel" aria-labelledby="company-tab">
                {activeTab=="company"&&<JobsGrid 
                                         list={["TechNova Solutions",
                                         "HealthCom Innovations",
                                         "FinancePlus Group",
                                         "EduPrime Technologies",
                                         "EntertainMasters Inc.",
                                         "AutoVanguard Industries",
                                         "RetailWorks Co.",
                                         "HospitaliServe Corp.",
                                         "TeleCompass Networks",
                                         "RealEstify Ventures",
                                         "AgriGrowth Enterprises",
                                         "EcoEnerGen Inc.",
                                         "ManuTech Solutions",
                                         "MediaPulse Studios",
                                         "BioTechPro Innovations",
                                         "Global Services Ltd.",
                                         "InnoTech Innovations",
                                         "BrightSolutions Co.",
                                         "NexGen Innovators",
                                         "VisionCorp Industries"]}
                />}
            </div>
        </div>
        </div>
    );
}
export default BrowseJobsTab;