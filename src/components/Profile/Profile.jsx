import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.profile}>
        <img className={css.avatar} src={image} alt={name} />
        <p className={css.nameText}>{name}</p>
        <p className={css.infoText}>@{tag}</p>
        <p className={css.infoText}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.statsInfo}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.statsInfo}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.statsInfo}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
