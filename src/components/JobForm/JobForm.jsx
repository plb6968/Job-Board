import { useState } from 'react';

export default function JobForm() {
 return (
  <div>
    <div>
      <form>
        <label>Job Title</label>
        <input type="text" name="title" />
        <label>Company Name</label>
        <input type="text" name="company" />
        <label>Location</label>
        <input type="text" name="location" />
        <label>Description</label>
        <input type="text-area" name="Description" />
        <label>Responcibilities</label>
        <input type="text-area" name="Responcibilities" />
        <label>Skills Required</label>
        <input type="text-area" name="skillsRequired" />
        <label>Benifets</label>
        <input type="text" name="benifets" />
      </form>
    </div>
  </div>
 );
}