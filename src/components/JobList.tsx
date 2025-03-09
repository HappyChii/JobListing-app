import { useState } from "react";
import JobCard from "./JobCard";
import jobs from "../jobsData"; // Ensure this path is correct

const JobList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a job..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Job Listings */}
      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
