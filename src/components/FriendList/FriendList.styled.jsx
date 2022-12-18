import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: #fff;
  border-radius: 8px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const setOnlineStatus = props => {
  return props.isOnline ? 'rgb(26, 252, 26)' : 'rgb(253, 61, 61)';
};

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-left: 15px;
  border-radius: 50%;
  background-color: ${setOnlineStatus};
`;
