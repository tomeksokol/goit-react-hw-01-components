import "./App.css";
//Task-1
import Profile from "./components/task1_profile/Profile";
import user from "./components/task1_profile/user.json";
//Task-2
import Statistics from "./components/task2_statistics/Statistics";
import data from "./components/task2_statistics/data.json";
//Task-3
import FriendList from "./components/task3_friends/FriendList";
import friends from "./components/task3_friends/friends.json";
//Task-4
import TransactionHistory from "./components/task4_transactions/TransactionHistory";
import transactions from "./components/task4_transactions/transactions.json";

const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Task 1 - social media profile</h1>
          <a
            href="https://github.com/tomeksokol/goit-react-hw-01-components/tree/main/src/components/task1_profile"
            target="_blank"
            rel="noreferrer">
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
        {/* second way */}
        {/* <Profile {...user} /> */}

        <div>
          <h1 className="task-header">Task 2 - statistics</h1>
          <a
            href="https://github.com/tomeksokol/goit-react-hw-01-components/tree/main/src/components/task2_statistics"
            target="_blank"
            rel="noreferrer">
            Link to GitHub
          </a>
        </div>

        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />

        <div>
          <h1 className="task-header">Task 3 - Friends</h1>
          <a
            href="https://github.com/tomeksokol/goit-react-hw-01-components/tree/main/src/components/task3_friends"
            target="_blank"
            rel="noreferrer">
            Link to GitHub
          </a>
        </div>

        <FriendList friends={friends} />

        <div>
          <h1 className="task-header">Task 4 - Transactions</h1>
          <a
            href="https://github.com/tomeksokol/goit-react-hw-01-components/tree/main/src/components/task4_transactions"
            target="_blank"
            rel="noreferrer">
            Link to GitHub
          </a>
        </div>

        <TransactionHistory items={transactions} />
      </header>
    </div>
  );
};

export default App;
