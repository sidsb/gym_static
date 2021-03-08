import React from 'react'
import aboutimage from '../images/about.png'

export default function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt='' />
            </div>
            <div className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum sollicitudin rhoncus nunc ac viverra.
                    Integer molestie, turpis vitae vestibulum viverra, ante nunc interdum velit, vitae varius diam lorem eget eros.
                    Pellentesque venenatis luctus purus nec varius.
                    Mauris sed quam ut odio feugiat ultrices at ut sem.
                    Sed malesuada eros libero, sed elementum ligula fermentum a.
                    Sed cursus in tortor et aliquet. Sed vestibulum, sem nec tempus cursus, erat massa mollis ante, ut mollis augue quam quis diam.
                    Mauris dignissim arcu metus, quis consectetur est blandit id.
                    Donec maximus massa sed ante pharetra, in vehicula augue pharetra.
                    Donec erat dui, mollis vitae placerat sit amet, ullamcorper vel lectus. Suspendisse potenti. Integer id ullamcorper lorem. Nullam quis accumsan lorem, sit amet euismod ligula.
                    Sed sed elementum nulla. Nullam vitae maximus dui.
               </p>
                <button>READ ME</button>
            </div>
        </div>
    )
}
