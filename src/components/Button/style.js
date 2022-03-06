import styled, {css} from 'styled-components';

export const TouchableOpacity = styled.TouchableOpacity`

  border: 1px solid #EB1414;
  border-radius: 5px;
  padding: 10px 40px;
  max-width: 190px;

  display: flex;
  justify-content: center;
  align-items: center;


  ${({ theme }) => theme = 'primary' && css`
     background-color: #EB1414;
  `}
`

export const Text = styled.Text`



  color: #EB1414;



  ${({ theme }) => theme = 'primary' && css`
     color: #FFFFFF;
  `}
`
