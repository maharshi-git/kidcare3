import React from 'react';

const BackgroundImage = ({ imageUrl, children }) => {
  const styles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <div style={styles}>
      {children}
    </div>
  );
};

export default BackgroundImage;
