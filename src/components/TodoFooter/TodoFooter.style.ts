import styled from '@emotion/styled';

const StyledTodoFooter = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  background-color: white;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgb(0 0 0 / 20%), 0 2px 5px grey;

  .todo-footer {
    &__items-left, 
    &__clear-btn {
      position: absolute;
      top: 20px;
    }

    &__items-left {
      left: 15px;
    }
    
    &__clear-btn {
      right: 15px;
      font-size: 16px;
      border: none;
      background-color: white;
      padding: 0;
      transition: opacity ${props => props.theme.transition}; 

      &:hover {
        opacity: ${props => props.theme.opacity}; 
      }
    }
  }
`;

export default StyledTodoFooter;
