
import friends from "../../data/friends.json";
import css from "./friendListItem.module.css";

const FriendListItem = () =>
{ return friends.map(({avatar,name, isOnline, id})=>(
    <li className={css.item} key={id}>
  <span className={isOnline ? `${css.is_online}`: `${css.status}`}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
))}


export default FriendListItem;