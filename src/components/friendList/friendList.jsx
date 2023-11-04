import "../../data/friends.json";
 import FriendListItem from "../friendlistitem/friendlistitem"
 import css from "../friendlistitem/friendListItem.module.css";

 const FriendList = () => (
<ul className={css.friend_list}>
  <FriendListItem/>
</ul>)
export default FriendList;