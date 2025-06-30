import React from 'react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

const HomePage = () => {
  return (
    <div>
      <section>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
      </section>
      <main>
        <Projects></Projects>
      </main>
      <section>
        <Contact></Contact>
      </section>
    </div>
  );
};

export default HomePage;
