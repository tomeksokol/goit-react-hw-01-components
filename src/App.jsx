import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/task1_profile/Profile";
import user from "./components/task1_profile/user.json";

const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className="App">
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
