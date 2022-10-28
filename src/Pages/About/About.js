import React from 'react';
import './About.css'
import { Link, Outlet } from 'react-router-dom';

function About() {
    return (
        <div>
            <nav>
                <Link className='nav-link' to="/about/players">Players</Link>
            </nav>

            <article>
                <p>The Los Angeles Lakers are an American professional basketball team based in Los Angeles. The Lakers compete in the National Basketball Association (NBA) as a member of the league's Western Conference Pacific Division. The Lakers play their home games at Crypto.com Arena, an arena shared with the NBA's Los Angeles Clippers, the Los Angeles Sparks of the Women's National Basketball Association, and the Los Angeles Kings of the National Hockey League. The Lakers are one of the most successful teams in the history of the NBA, and have won 17 NBA championships, tied with the Boston Celtics for the most in NBA history</p>
            </article>

            <Outlet />
        </div>
    )
}

export default About;
