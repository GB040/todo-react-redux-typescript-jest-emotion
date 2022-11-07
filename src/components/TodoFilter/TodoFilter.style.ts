import styled from '@emotion/styled';

const StyledTodoFilter = styled.fieldset`
  display: flex;
  border: none;
  margin: 0;
  padding: 0;

  .todo-filter {
    &__radio-btn {
      position: absolute;
      clip: rect(0, 0, 0, 0);

      &:checked + label {
        border: 1px solid #eecccc;
        border-radius: 5px;
      }
    }

    &__label {
      margin-right: 20px;
      padding: 5px;
      transition: opacity ${props => props.theme.transition}; 
  
      &:hover {
        cursor: pointer;
        opacity: ${props => props.theme.opacity}; 
      }
    }
  }
`;

export default StyledTodoFilter;
