import React, { useState } from "react";

interface JobProps {
    job: {
        id: number;
        title: string;
        description: string;
        location: string;
        salary: string;
    };
}

const JobCard: React.FC<JobProps> = ({ job }) => {
    const[showDetails, setShowDetails] = useState(false);

    return (
        <div className="job-card">
            <h3>{job.title}</h3>
        <p>{job.company} - {job.location}</p>
        <p className="salary">{job.salary}</p>
        <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Hide Details" : "Show Details"}
        </button>
            {showDetails && <p>More job details go here...</p>}
        </div>
    );
};

export default JobCard;