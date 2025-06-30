import React from 'react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

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
      <section>
        <Contact></Contact>
      </section>
    </div>
  );
};

export default HomePage;
