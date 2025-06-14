import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Component/Navbar";
import Carousel from "../Component/Carousel";
import Footer from "../Component/Footer";

function Home() {
  const [protectedData, setProtectedData] = useState(null);
  const [error, setError] = useState(null);

 useEffect(() => {
  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await axios.get('http://localhost:5000/api/protected-route', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Protected data:', response.data);
    } catch (error) {
      console.error('Error fetching protected data:', error.response?.data || error.message);
    }
  };

  fetchProtectedData();
}, []);


  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <h1>Welcome to the Home Page</h1>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {protectedData && (
          <div>
            <h3>Protected Data:</h3>
            <pre>{JSON.stringify(protectedData, null, 2)}</pre>
          </div>
        )}

        <Carousel />
      </div>
      <Footer />
    </>
  );
}

export default Home;


