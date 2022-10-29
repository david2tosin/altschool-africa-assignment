import React from 'react';
import './About.css'
import { Link, Outlet } from 'react-router-dom';

function About() {
    return (
      <div>
        <nav>
          <Link className="nav-link" to="/about/players">
            Selections
          </Link>
        </nav>

        <article>
          <p>
            NBA Player Props are increasingly popular where you can make the
            most of favorable spots on players to hit over or under lines on
            stats like, points, assist, rebounds or a combination of them
          </p>
        </article>

        <Outlet />
      </div>
    );
}

export default About;
