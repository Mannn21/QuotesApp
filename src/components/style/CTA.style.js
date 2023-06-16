import styled from "styled-components";

export const Container = styled.div`
	box-sizing: border-box;
	height: ${props =>
		props.height === true ? `calc(100vh - 243px)` : `calc(100vh - 63px)`};
	width: 100%;
	background-color: ${props => props.backgroundColor};
`;

export const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	background-color: ${props => props.backgroundColor};
	gap: 40px;

	@media screen and (max-width: 992px) {
		justify-content: center;
		align-items: center;
		flex-direction: column-reverse;
		gap: 10px;
	}
`;

export const HeaderWrapper = styled.div`
	height: 100%;
	width: 60%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media screen and (max-width: 992px) {
		height: 45%;
		width: 100%;
		justify-content: center;
		align-items: flex-start;
	}
`;

export const Text = styled.span`
	font-size: 30px;
	font-weight: 600px;
	text-align: justify;
	font-family: ${props => props.font};
	color: ${props => (props.color === "Light" ? "black" : "white")};

	@media screen and (max-width: 992px) {
		font-size: 24px;
		text-align: center;
		padding-top: 20px;
	}

	@media screen and (max-width: 992px) and (min-width: 512px) {
		font-size: 30px;
	}

	@media screen and (max-width: 512px) {
			font-size: 22px;
	}
`;

export const AvatarWrapper = styled.div`
	height: 100%;
	width: 40%;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	@media screen and (max-width: 992px) {
		height: 65%;
		width: 100%;
		justify-content: center;
		align-items: flex-end;
	}
`;

export const ImageWrapper = styled.div`
	margin-top: -100px;
	height: 300px;
	width: 300px;

	@media screen and (max-width: 512px) {
		height: 100%;
		width: 90%;
		margin-top: -20px;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	@media screen and (max-width: 992px) and (min-width: 512px) {
		/* height: 20%; */
		width: 350px;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
`;
