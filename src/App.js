import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    interests: []
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox'
        ? checked
          ? [...prevForm.interests, value]
          : prevForm.interests.filter((interest) => interest !== value)
        : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <fieldset>
          <legend>Interests</legend>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Interest1"
              checked={form.interests.includes('Interest1')}
              onChange={handleChange}
            />
            Interest 1
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Interest2"
              checked={form.interests.includes('Interest2')}
              onChange={handleChange}
            />
            Interest 2
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Interest3"
              checked={form.interests.includes('Interest3')}
              onChange={handleChange}
            />
            Interest 3
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p>
          Form submitted successfully!<br />
          Name: {form.name}<br />
          Email: {form.email}<br />
          Interests: {form.interests.join(', ')}
        </p>
      )}
    </main>
  );
}

export default App;
