import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';

const CLIENT_ID = '825065057107-imoldg35o4u22sfaf91ghpv07fojq1t1.apps.googleusercontent.com';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState(null);

  const responseGoogleSuccess = (response) => {
    console.log('Login Success:', response);
    setUserData(response.profileObj);
    setIsLoggedIn(true);

    // Save the token to local storage
    localStorage.setItem('token', response.tokenId);
  };

  const responseGoogleFailure = (response) => {
    console.log('Login Failed:', response);
    setIsLoggedIn(false);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    console.log('Logout Success');

    // Remove the token from local storage
    localStorage.removeItem('token');
  };

  return (
    <div>
      <h2>Login with Google</h2>
      {!isLoggedIn ? (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFailure}
          cookiePolicy={'single_host_origin'}
          scope="https://www.googleapis.com/auth/calendar.events"
        />
      ) : (
        <div>
          <h3>Welcome, {userData.name}</h3>
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
