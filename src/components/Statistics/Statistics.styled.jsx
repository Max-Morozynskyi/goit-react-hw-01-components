import styled from '@emotion/styled';


export const StatisticsWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 300px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Title = styled.h2`
  margin: 20px auto;
  text-transform: uppercase;
  color: rgb(120, 120, 120);
  font-size: 20px;
  font-weight: 500;
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  & li {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
    color: #fff;
  }
  & .percentage {
    font-size: 20px;
  }
`;
