import React from 'react';
import './LogoLink.css';
import { Link } from "react-router-dom";

function LogoLink() {

  return (
    <Link to={`/`} className="logoLink"/>
  )
}

export default LogoLink;