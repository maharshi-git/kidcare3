import React, { useState } from 'react';

const GoogleSignIn = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const handleSignIn = () => {
    window.gapi.auth2.getAuthInstance().signIn().then(() => {
      setIsSignedIn(true);
      const profile = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
      setUserProfile({
        name: profile.getName(),
        email: profile.getEmail(),
        imageUrl: profile.getImageUrl()
      });
    });
  };

  const handleSignOut = () => {
    window.gapi.auth2.getAuthInstance().signOut().then(() => {
      setIsSignedIn(false);
      setUserProfile(null);
    });
  };

  const renderSignInButton = () => {
    window.gapi.signin2.render('google-sign-in-button', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: handleSignIn
    });
  };

  const renderSignOutButton = () => {
    return (
      <div>
        <p>Welcome, {userProfile.name}</p>
        <img src={userProfile.imageUrl} alt={userProfile.name} />
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  };

  React.useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '<YOUR_GOOGLE_CLIENT_ID>',
      }).then(() => {
        const isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();
        setIsSignedIn(isSignedIn);
        if (isSignedIn) {
          const profile = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
          setUserProfile({
            name: profile.getName(),
            email: profile.getEmail(),
            imageUrl: profile.getImageUrl()
          });
        }
        renderSignInButton();
      });
    });
  }, []);

  return (
    <div>
      {isSignedIn ? renderSignOutButton() : <div id="google-sign-in-button" />}
    </div>
  );
};

export default GoogleSignIn;
