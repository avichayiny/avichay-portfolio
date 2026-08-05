import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  /* reserve space for the fixed header so hero content isn't covered */
  min-height: calc(100vh - var(--nav-height));
  height: 100vh;
  padding-top: var(--nav-height);
  padding-bottom: 0;
  box-sizing: border-box;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    /* keep a small top offset on very small screens */
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 20px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 720px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Avichay Iny.</h2>;
  const three = (
    <h3 className="big-heading">Software Developer building backend and AI systems.</h3>
  );
  const four = (
    <>
      <p>
        I’m a recent Computer Science graduate, with motivation and ambition for software
        development and problem-solving. My experience spans the full development process: from
        designing core algorithms and AI integrations to building robust, end-to-end backend
        solutions. I am currently seeking my first full-time software development position to
        kickstart my career.{' '}
      </p>
    </>
  );
  const five = (
    <a href="#projects" className="email-link">
      Check out my projects!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
