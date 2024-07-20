import clsx from "clsx";

import css from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendListItem}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
export default FriendListItem;
