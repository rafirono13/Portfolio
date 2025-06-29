import React from 'react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';

const HomePage = () => {
  return (
    <div>
      <section>
        <Hero></Hero>
        <AboutMe></AboutMe>
      </section>
      <main>
        <Projects></Projects>
      </main>
    </div>
  );
};

export default HomePage;
