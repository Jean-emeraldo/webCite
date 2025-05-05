import React from "react";
import "./Companies.css";

const Companies: React.FC = () => {
  return (
    <section>
      <div className="paddings innerWidth flexCenter c-container">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" width="30" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" width="30" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" alt="YouTube" width="30" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" width="30" />
        </a>
      </div>
    </section>
  );
};

export default Companies;
