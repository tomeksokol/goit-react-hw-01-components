import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/task1_profile/Profile";
import user from "./components/task1_profile/user.json";

import Statistics from "./components/task2_statistics/Statistics";
import data from "./components/task2_statistics/data.json";

const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className="App">
      <div>
        <p>Task 1 - social media profile</p>
        <a href="https://#" target="_blank" rel="noreferrer">
          Link to GitHub
        </a>
      </div>

      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <div>
        <p>Task 2 - statistics</p>
        <a href="https://#" target="_blank" rel="noreferrer">
          Link to GitHub
        </a>
      </div>
      
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

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
