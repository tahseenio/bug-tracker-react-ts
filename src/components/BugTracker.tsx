import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const BugTracker = () => {
  const { details } = useContext(UserContext);

  return (
    <>
      <div>
        <h1>{details.name}</h1>
        <p>Software project</p>
        <button>Back to project</button>
        <h2>Filters</h2>
        <ul>
          <li>All issues</li>
          <li>My open issues</li>
          <li>Reported by me</li>
          <li>Open issues</li>
          <li>Done issues</li>
          <li>Viewed recently</li>
          <li>Resolved recently</li>
          <li>Updated recently</li>
          <li>all Issues</li>
        </ul>
        <p>You're in a company-managed project</p>
        <a href='#'>Learn more</a>
      </div>
      <h3>Projects / {details.name}</h3>
      <div>
        <h2>Issues</h2>
        <button>Share</button>
        <button>Export issues</button>
        <button>Go to advanced search</button>
        <span>
          <button>LIST VIEW</button>
          <button>DETAILED VIEW</button>
        </span>
        <button>...</button>
      </div>
      <div>
        <input type='text' placeholder='Search issues' />
        <button>Project : {details.name}</button>
        <button>Type</button>
        <button>Status</button>
        <button>Assignee</button>
        <span>
          <button>BASIC</button>
          <button>JQL</button>
        </span>
      </div>
      <div>
        <button>More + </button>
        <button>Reset</button>
        <button>Save Filter</button>
      </div>
      <p>No issues were found matching your search</p>
      <p>Give feedback</p>
    </>
  );
};
