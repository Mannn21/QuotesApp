import React from "react";
import { Container, Input, Button, ExitWrapper } from "./style/InputText.style";
import { AiOutlineClose } from "react-icons/ai";
import { GlobalState } from "../app";
import { useContext, useState } from "preact/hooks";

const InputText = () => {
	const { textHooks, modeHooks } = useContext(GlobalState);
	const [changeText, setChangeText] = useState(textHooks.text);

	const mode = modeHooks.mode;

	const submitText = (e) => {
        modeHooks.handleMode(!mode)
		textHooks.handleText(changeText);
        e.preventDefault()
        setChangeText('')
	};

	return (
		<Container display={mode}>
			<ExitWrapper onClick={() => modeHooks.handleMode(!mode)}>
				<AiOutlineClose fontSize={30} />
			</ExitWrapper>
			<Input
				type="text"
                value={changeText}
				onChange={({ target }) => setChangeText(target.value)}
			/>
			<Button onClick={e => submitText(e)}>Submit</Button>
		</Container>
	);
};

export default InputText;
