import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  display: table;
  margin-top: 20px;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: #fff;
  width: 100%;

  thead {
    background-color: rgb(45, 209, 221);
    color: white;
  }
  tbody {
    font-size: 14px;
  }
  th {
    text-transform: uppercase;
    padding: 8px;
    border: 1px solid rgb(200, 200, 200);
  }
  tr:nth-of-type(even) {
    background-color: rgba(128, 128, 128, 0.244);
  }
  td {
    text-align: center;
    padding: 8px;
    border: 1px solid rgb(200, 200, 200);
  }
  td:first-of-type {
    text-align: start;
    text-transform: capitalize;
    padding-left: 20px;
  }
`;
