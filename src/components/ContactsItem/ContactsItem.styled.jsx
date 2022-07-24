import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-bottom: 10px;
  .MuiAvatar-circular {
    margin-right: 10px;
  }
  button {
    margin-left: 15px;
    padding: 2px 5px;
    font-size: 12px;
    .MuiButton-startIcon {
      margin-right: 5px;
    }
  }
`;
