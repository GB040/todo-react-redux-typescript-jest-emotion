import styled from '@emotion/styled';

const StyledTodoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 550px;
  
  .todo-section {
    &__title {
      font-size: 70px;
      text-transform: uppercase;  
      margin: 15px 0;
    }
  }
`;

export default StyledTodoSection;
