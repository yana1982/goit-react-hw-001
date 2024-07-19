import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

//_________________Profile_____________//
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";

//_________________FriendListItem_____________//
import FriendListItem from "./components/FriendList/FriendList";
import friends from "../friends.json";

//_________________TransactionHistory_____________//
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <>
        <ul>
          {friends.map((friendListItem) => {
            return (
              <li key={friendListItem.id}>
                <FriendListItem
                  avatar={friendListItem.avatar}
                  name={friendListItem.name}
                  isOnline={friendListItem.isOnline}
                />
              </li>
            );
          })}
        </ul>
      </>
      <>
        <TransactionHistory items={transactions} />
      </>
    </>
  );
}
export default App;
