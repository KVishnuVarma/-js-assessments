// src/Coding.jsx
import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import './Coding.css'; // Import your CSS file here

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Lazy load the HeavyComponent
const HeavyComponent = lazy(() => import('./HeavyComponents/HeavyComponent'));

// LineChart Component
const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Data',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return ` ${context.dataset.label}: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="chart-container">
      <h2>Line Chart Example</h2>
      <Line data={data} options={options} />
    </div>
  );
};

// InfiniteScroll Component
const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  // Fetch items
  const fetchItems = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.example.com/items?page=${pageNumber}`);
      setItems((prevItems) => [...prevItems, ...response.data]);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(page);
  }, [page]);

  useEffect(() => {
    const handleIntersection = ([entry]) => {
      if (entry.isIntersecting && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loading]);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      <div ref={loader} />
    </div>
  );
};

// Main Component
const Coding = () => {
  return (
    <div className="coding-container">
      <LineChart />
      <InfiniteScroll />
      <Suspense fallback={<div>Loading Heavy Component...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};

export default Coding;
