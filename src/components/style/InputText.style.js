import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 180px;
    flex-direction: column;
    gap: 20px;
	justify-content: center;
	align-items: center;
	background-color: rgba(33, 33, 32, 0.8);
    display: ${props => props.display === true ? "fixed" : "none"};
    top: ${props => props.display === true ? "0" : '0'}
`;

export const Input = styled.input`
	height: 30px;
	width: 90%;
    font-size: 16px;
`;

export const ExitWrapper = styled.div`
    cursor: pointer;
`

export const Button = styled.button`
    height: 30px;
    width: 70px;
    font-size: 20px;
    cursor: pointer;
`;
