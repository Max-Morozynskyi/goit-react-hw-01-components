import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendCard } from './FriendList.styled';
// import "./FriendList.css";

// [
//   {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812
//   },

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendCard key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </FriendCard>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
