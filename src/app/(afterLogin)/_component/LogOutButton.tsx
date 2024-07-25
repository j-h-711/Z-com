"use client";
import styles from "./logOutButton.module.css";

export default function LogOutButton() {
  const me = { id: "jh", nickname: "jiddong", image: "/me.jpg" };

  const onLogout = () => {};

  return (
    <>
      <button className={styles.logOutButton} onClick={onLogout}>
        <div className={styles.logOutUserImage}>
          <img src={me.image} alt={me.id} />
        </div>
        <div className={styles.logOutUserName}>
          <div>{me.nickname}</div>
          <div>{me.id}</div>
        </div>
      </button>
    </>
  );
}
