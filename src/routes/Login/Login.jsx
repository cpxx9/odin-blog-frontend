import axios from '../../api/axios';
import { useEffect, useRef, useContext, useState } from 'react';
import AuthContext from '../../../context/AuthProvider';
import { Link } from 'react-router-dom';
import StyledLogin from './StyledLogin';

const LOGIN_URL = '/login';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(LOGIN_URL, JSON.stringify({ username: user, password: pwd }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      console.log(JSON.stringify(res?.data));
      const accessToken = res?.data?.token;
      const userInfo = res?.data?.user;
      setAuth(user, pwd, userInfo, accessToken);
      setPwd('');
      setSuccess(true);
    } catch (err) {
      setErrMsg(err.response.data.msg);
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link to="/">Go to home</Link>
          </p>
        </section>
      ) : (
        <StyledLogin>
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
            {errMsg}
          </p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign in</button>
          </form>
          <p>
            Need an account?
            <br />
            <span className="line">
              <Link to="/register">Sign up</Link>
            </span>
          </p>
        </StyledLogin>
      )}
    </>
  );
};

export default Login;
