import styled from '@emotion/styled'

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 350px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  color: rgb(180, 180, 180);
  & img {
    width: 120px;
    border-radius: 50%;
  }
`;

export const Name = styled.p`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #000;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  margin-top: auto;
  height: 60px;
  width: 100%;
  background-color: rgb(220, 220, 220);
  & li {
    width: 33.34%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(180, 180, 180);
    }
  & .label {  font-size: 14px;  }
  & .quantity {  font-weight: 700;  }
`