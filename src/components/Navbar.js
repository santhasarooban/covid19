import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div class="stick">
       
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">COVID-19 &ensp;
                    <i className="fas fa-virus"></i>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav navbar-right pull-right">
                            <li class="nav-item">
                                <Link to='/mainpart' class="nav-link active" aria-current="page" >
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/symptoms' class="nav-link active" aria-current="page" >
                                    Symptoms
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/tiles' class="nav-link active" aria-current="page" >
                                    Advices
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/vaccines' class="nav-link active" aria-current="page" >
                                    Vaccines
                                </Link>
                            </li>
                            <li>
            
                            </li>
                            <li class="nav-item dropdown">
                                <Link to='/' class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More Information
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a href='https://en.wikipedia.org/wiki/Coronavirus' target='_blank' class="dropdown-item">Know about Corona</a></li>
                                    <li><a href='https://en.wikipedia.org/wiki/Omicron' target='_blank' class="dropdown-item">Know about Omicron</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            

        </div>
    )
}

export default Navbar
