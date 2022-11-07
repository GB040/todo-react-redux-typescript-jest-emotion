import styled from '@emotion/styled';

const StyledAddTodo = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 5px grey;
  padding: 15px;

  .add-todo {
    &__input {
      border: none;
      margin: 0;
      padding: 0;
      font-size: 24px;
      outline: transparent;

      &::placeholder {
        color: #cacaca;
      }
    }

    &__add-btn {
      border: 1px solid #eecccc;
      border-radius: 5px;
      font-size: 24px;
      transition: opacity ${props => props.theme.transition};

      &:hover { 
        opacity: ${props => props.theme.opacity}; 
      } 
    }
  }
`;

export default StyledAddTodo;
