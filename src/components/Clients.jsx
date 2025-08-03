import React from 'react';
import '../styles/Clients.css';
import { assets } from '../assets/assets';

const Clients = () => {
  return (
    <section id="clients">
        <h1 className="clientTitle">My Clients</h1>
        <p className="clientDesc">
            I have had the opportunity to work with a diverse group of companies.
            Some of the notable companies I have worked with includes
        </p>

        <div className="clientImgs">
            <img src={assets.walmart} alt="Walmart" className="clientImg" />
            <img src={assets.adobe} alt="Adobe" className="clientImg" />
            <img src={assets.microsoft} alt="Microsoft" className="clientImg" />
            <img src={assets.facebook} alt="Facebook" className="clientImg" />
        </div>
    </section>
  )
}

export default Clients;