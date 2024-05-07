import React from 'react';
import './MeetandGreet.css'; // Import the external CSS file

const MeetandGreet = () => {
  return (
    <div className="container999">
      <h2>-  We Provide Best Treatment  -</h2>
      <hr />
      <div className="row">
        <div className="leftsidetreatment col">
          <img src="your-image-url.jpg" alt="Treatment" />
        </div>
        <div className="rightsidetreatment col">
          <h3>Our Treatment:</h3>
          <ul>
            <li>Sensory integration / Sensory based treatment.</li>
            <p style={{fontSize:'12px'}}>(ie, Proprioceptive awareness, sensory modulation)</p>
            <li>Developing emotion / Self-regulation skills.</li>
            <li>Developing play and social skills.</li>
            <li>Developing executive functions skill.</li>
            <p style={{fontSize:'12px'}}>(ie, Attention, Organaization, Judgement, Coping strategies, Awareness)</p>
            <li>Developing gross motor skills such as motor planing / prarcis, balance, coordination, body awareness and
                bilateral coordination.
            </li>
            <li>Developing fine motor skills including handwriting and hand strength.</li>
            <li>Developing visual perceptual integration skills.</li>
            <li>Developing self-care skills.</li>
            <li>Helping with challenging behaviours.</li>
            <li>Environmental adaptations for home and school settings.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MeetandGreet;
