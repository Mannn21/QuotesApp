import { styled } from "styled-components";

export const Container = styled.div`
	background-color: #d1cfcf;
	width: 100%;
	height: 63px;
	position: fixed;
	bottom: 0;
`;

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 100px;
	align-items: center;

	@media screen and (max-width: 655px) {
		gap: 0;
		justify-content: space-evenly;
	}
`;

export const BoxPicker = styled.div`
	padding: 2px;
	display: flex;
	flex-direction: column;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 80%;
`;

export const InputHeader = styled.span`
	font-size: 16px;

	@media screen and (max-width: 512px) {
		font-size: 14px;
	}
`;

export const InputColor = styled.input`
	width: 90%;
	height: 25px;
	cursor: pointer;
`;

export const InputFont = styled.select`
	height: 25px;
	width: 250px;
	cursor: pointer;
	font-size: 14px;

	@media screen and (max-width: 512px) {
		font-size: 12px;
		width: 150px;
	}
`;

export const FontOption = styled.option`
	font-family: ${props => props.font};
	font-size: 14px;

	@media screen and (max-width: 512px) {
		font-size: 12px;
	}
`;

export const InputText = styled.button`
	height: 25px;
	width: 50%;
	font-size: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	cursor: pointer;
`;
