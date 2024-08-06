import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import your CSS file here
import Coding from './Coding'; // Import the Coding component
import LineChart from './Coding'; // Import the LineChart component

// Home Component
const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the Home Page!</p>
  </div>
);

// About Component
const About = () => (
  <div>
    <h2>About Page</h2>
    <p>Learn more about us on this page.</p>
  </div>
);

// Contact Component
const Contact = () => (
  <div>
    <h2>Contact Page</h2>
    <p>Get in touch with us through this page.</p>
  </div>
);

// ItemList Component
const ItemList = ({ items }) => (
  <div>
    <h2>Item List</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// FormComponent
const FormComponent = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required.';
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? '' : 'Email is not valid.';
    tempErrors.password = formData.password ? '' : 'Password is required.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// PaginationComponent
const PaginationComponent = ({ itemsPerPage, items }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleClick = (event, number) => {
    event.preventDefault();
    setCurrentPage(number);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        {pageNumbers.map((number) => (
          <button key={number} onClick={(e) => handleClick(e, number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

// Fetches Component
const Fetches = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Counter Component
const Counter = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

// Main App Component with Routing
const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="navbar-right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/chart">Chart</Link></li> {/* Link for LineChart */}
          </ul>
          <ul className="navbar-left">
            <li><Link to="/items">Items</Link></li>
            <li><Link to="/pagination">Pagination</Link></li>
            <li><Link to="/fetches">Fetches</Link></li>
            <li><Link to="/infinite-scroll">Infinite Scroll</Link></li> {/* Link for Infinite Scroll */}
          </ul>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/items" element={<ItemList items={items} />} />
            <Route path="/form" element={<FormComponent />} />
            <Route path="/pagination" element={<PaginationComponent itemsPerPage={2} items={items} />} />
            <Route path="/fetches" element={<Fetches />} />
            <Route path="/chart" element={<LineChart />} /> {/* Route for LineChart */}
            <Route path="/infinite-scroll" element={<Coding />} /> {/* Route for Infinite Scroll */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
