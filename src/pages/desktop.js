import React, { useRef } from 'react';
import { Layout, Header, Home, About, Experience, Projects, Contact } from '@components';

const DesktopSite = () => {
  const [currentSection, setCurrentSection] = React.useState(0);
  const next = useRef(currentSection);
  const [increment, setIncrement] = React.useState(0);
  
  const sectionProps = {
    current: currentSection,
    setCurrent: setCurrentSection,
    next: next,
    increment: increment,
    setIncrement: setIncrement
  };

  return (
    <Layout current={currentSection}>
      <Header current={currentSection} setIncrement={setIncrement} />
      <Home id={0} {...sectionProps} />
      <About id={1} {...sectionProps} />
      <Experience id={2} {...sectionProps} />
      <Projects id={3} {...sectionProps} />
      <Contact id={4} {...sectionProps} />
    </Layout>
  );
}

export default DesktopSite;