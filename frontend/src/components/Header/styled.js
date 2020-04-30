import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
  padding: 3rem 2rem 6rem;
`;

export const HeaderGroup = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const HeaderGroupItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
`;

export const HeaderGroupControllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const HeaderGroupLabel = styled.label`
  font-size: 1.25rem;
`;

export const HeaderGroupItemValue = styled.span`
  display: inline-block;
  padding: .25rem .5rem;
  min-width: 1rem;
  height: 2rem;
  background: #057bfe;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: .25rem;
`;

export const HeaderGroupButton = styled.button`
  background: #6c757e;
  display: flex;
  aling-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 2rem;
  margin-left: 1rem;
  border: none;
  color: #fff;
  border-radius: .25rem;
  font-size: 1.15rem;

  &:hover {
    cursor: pointer;
  }

  &:focus,
  &:active {
    box-shadow: none;
    outline: none;
    border: none;
  }
`

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 10rem;
  height: 2.5rem;
  font-size: 1rem;
  border-radius: .25rem;
  border: none;
  background: #057bfe;
  color: #fff;

  &:hover {
    cursor: pointer;
  }

  &:active,
  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;