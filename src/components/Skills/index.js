import React from 'react';

import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from '../../animate/AnimatedProgressProvider';

class Skills extends React.Component {
  render() {
    const html = 78;
    const css = 86;
    const javascript = 80;
    const react = 50;

    return (
      <div className="content">
        <div id="skills-bar">
          <div className="skills__logo">
            <span>HABILIDADES</span>
          </div>

          <span id="progress-title">HTML/CSS</span>
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={html}
            duration={4.5}
            easingFunction={easeQuadInOut}
          >
            {value => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                  styles={buildStyles({ pathTransition: 'none' })}
                />
              );
            }}
          </AnimatedProgressProvider>
          <span id="progress-title">JAVASCRIPT</span>

          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={css}
            duration={4.5}
            easingFunction={easeQuadInOut}
          >
            {value => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                  styles={buildStyles({ pathTransition: 'none' })}
                />
              );
            }}
          </AnimatedProgressProvider>
          <span id="progress-title">PHOTOSHOP</span>

          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={javascript}
            duration={4.5}
            easingFunction={easeQuadInOut}
          >
            {value => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                  styles={buildStyles({ pathTransition: 'none' })}
                />
              );
            }}
          </AnimatedProgressProvider>
          <span id="progress-title">REACT</span>

          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={react}
            duration={4.5}
            easingFunction={easeQuadInOut}
          >
            {value => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                  styles={buildStyles({ pathTransition: 'none' })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </div>
      </div>
    );
  }
}

export default Skills;
