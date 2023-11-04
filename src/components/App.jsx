import Profile from "./profile/profile";
import user from 'data/user.json';
import  data from "data/data.json";
import Statistics from "./statistics/statistics";
import friends from "data/friends.json";
import FriendList from "./friendList/friendList";
import transactions from "data/transactions.json";
import { TransactionHistory } from "./transactionHistory/transactionHistory";
import { ReactDOM } from "react";


export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'block',
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: "#dbfafd",
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
    </div>
  );
};
