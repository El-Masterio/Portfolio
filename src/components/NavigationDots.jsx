import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div
      className="app__navigation"
      style={{ flexDirection: 'column', padding: '1rem' }}
    >
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
            aria-label="Navigation Dot"
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
