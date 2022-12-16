import { useState } from 'react';

export default function JobForm({handleNewJob}) {
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    responcibilities: '',
    description: '',
    skills: '',
    benifets: ''
  });
  
  function handleChange(evt) {
    setNewJob({...newJob, [evt.target.name]: evt.target.value});
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleNewJob(newJob);
    console.log(newJob);
    setNewJob({
    title: '',
    company: '',
    location: '',
    description: '',
    responcibilities: '',
    description: '',
    skills: '',
    benifets: ''
    });
  }
 
  return (
  <div>
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Job Title</label>
        <input type="text" name="title" value={newJob.title} onChange={handleChange} required />
        <label>Company Name</label>
        <input type="text" name="company" value={newJob.company} onChange={handleChange} required />
        <label>Location</label>
        <input type="text" name="location" value={newJob.location} onChange={handleChange} required />
        <label>Description</label>
        <textarea name="description" className="form-text-area" value={newJob.description} onChange={handleChange} required />
        <label>Responcibilities</label>
        <textarea name="responcibilities" className="form-text-area" value={newJob.responcibilities} onChange={handleChange} required />
        <label>Skills Required</label>
        <textarea name="skills" className="form-text-area" value={newJob.skills} onChange={handleChange} required />
        <label>Benifets</label>
        <input type="text" name="benifets" value={newJob.benifets} onChange={handleChange} />
        <button type="submit">Add Job</button>
      </form>
    </div>
  </div>
 );
}