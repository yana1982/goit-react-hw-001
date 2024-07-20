// import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
function FriendList({ friends }) {
  return (
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
  );
}
export default FriendList;
