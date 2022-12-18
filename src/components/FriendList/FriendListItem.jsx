import PropTypes from 'prop-types';

export function FriendListItem({ avatar, name, isOnline }) {
  let friendStatus =  isOnline ? "online" : "offline" ;
return (<>
  <span className={"status " + friendStatus}></span>
  <img className="avatar" src={avatar} alt={name + "avatar"} width="48" />
  <p className="name">{name}</p>
  </>)
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};