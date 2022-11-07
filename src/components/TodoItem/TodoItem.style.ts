import styled from '@emotion/styled';

const StyledTodoItem = styled.li`
  display: flex;
  align-items: center;
  box-sizing: inherit;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  padding: 0 15px;

  &:last-of-type {
    border: 0;
  }

  &:hover .todo-item__delete-icon {
    opacity: 1; 
  }

  .todo-item {
    &__checkbox.Mui-checked {
      color: green;

      & + span {
        text-decoration: line-through;
        color: #cacaca;
      }
    }

    &__title {
      font-size: 24px;
    }

    &__delete-btn {
      margin-left: auto;
    }

    &__delete-icon {
      opacity: 0;
      fill: red;
      transition: opacity ${props => props.theme.transition};
      
      &:hover {
        cursor: pointer;
        opacity: ${props => props.theme.opacity}; 
      }
    }
  }
`;

export default StyledTodoItem;
