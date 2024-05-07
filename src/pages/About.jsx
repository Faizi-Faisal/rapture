import React from 'react';
import './about.css'

const About = () => {
  return (
    <>
<section class="Aboutussection py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div class="col-12 col-lg-6 col-xl-5">
        <img class="img-fluid rounded" loading="lazy" 
        src="/about1.jpg"
         alt="Rapture Therapy Centre - Best Speech Therapy Centre"/>
      </div>
      <div class="col-12 col-lg-6 col-xl-7">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-11">
            <h2 class="h1 mb-3">About Us</h2>
            <p class="mb-5">
            At Rapture Therapy Centre, we understand that every journey is unique. That's why we take a patient-centered approach, creating individualized treatment plans tailored to your specific goals and needs. Our interdisciplinary team collaborates closely, ensuring you receive comprehensive and coordinated care every step of the way.
            Don't let challenges hold you back any longer. Call Rapture Therapy Centre today and unlock your full potential for a healthier, happier, and more fulfilling life!
                </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default About;
