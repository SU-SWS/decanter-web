import React from 'react';

export const Homepage = () => {
  return (
    <div id="main-content" className="su-w-full su-h-full su-basefont-20 su-bg-gradient-to-r su-from-black su-to-plum">
      <section className="su-rs-py-5 su-px-30 lg:su-px-80">
        <div className="su-max-w-900 su-mx-auto">
          <h1 className="su-type-4 su-text-white">Welcome to the Decanter Style Guide and Pattern Library</h1>
          <p className="su-text-white su-intro-text">
          Decanter is a web design and development system for Stanford University.
          It includes a responsive layout system and a browsable collection of design patterns that can be used in any Stanford project.
          </p>
        </div>
      </section>
    </div>
  );
};