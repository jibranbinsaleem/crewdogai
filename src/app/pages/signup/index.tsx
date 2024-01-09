import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

interface SignupProps {
  history: any;
}

export function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://your-backend-api/signup', {
        username,
        password,
      });
      // Assuming you want to redirect to the login page after successful signup
      // history.push('/login');
    } catch (error) {
      console.error('Signup failed', error);
      // Handle error, show a message, etc.
    }
  };

  const styles: { [key: string]: React.CSSProperties } = {
    body: {
      backgroundColor: '#F2E8CF', // Set your desired background color here
      margin: 0, // Remove default margin
      padding: 0, // Remove default padding
      fontFamily: 'Your preferred font stack', // Set your preferred font stack
    },
    signupContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    },
    container: {
      flex: '1',
      textAlign: 'center',
      padding: '20px',
    },
    logo: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    formContainer: {
      flex: '1',
      maxWidth: '400px',
      width: '100%',
      padding: '20px',
      backgroundColor: '#F6EFEE',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      textAlign: 'center',
      margin: '0 20px', // Added margin to balance the layout
    },
    h2: {
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputContainer: {
      position: 'relative',
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginTop: '5px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    icon: {
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
      color: '#aaa',
    },
    button: {
      backgroundColor: '#FADF63',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#2980b9',
    },
  };

  return (
    <div style={styles.body}>
      <Helmet>
        <title>Signup</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <div style={styles.signupContainer}>
        <div style={styles.container}>
          <img src="\Logo_no_bg.png" alt="" style={styles.logo} />
        </div>
        <div style={styles.container}>
          <div style={styles.formContainer}>
            <h2 style={styles.h2}>Signup</h2>
            <form style={styles.form} onSubmit={handleSignup}>
              <div style={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  style={styles.input}
                />
                <i className="fas fa-user" style={styles.icon}></i>
              </div>
              <div style={styles.inputContainer}>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={styles.input}
                />
                <i className="fas fa-lock" style={styles.icon}></i>
              </div>
              <button type="submit" style={styles.button}>
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
