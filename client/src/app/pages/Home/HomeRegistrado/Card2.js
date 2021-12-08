import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 900px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 2rem;
`;

export const Title = styled.h1`
  color: #22201C;
  font-family: 'Signika', sans-serif;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  line-height: 35px;
  color: #6c757d;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: auto;
  width: 100%;
  color: #fff;
  background-color: #5C636A;
  border-color: #28a745;
  display: block;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #5C636A;
    border-color: #1e7e34;
  }
`;
