import React, { ChangeEvent } from 'react';

type InputPropsType = {
	currentText: string;
	setCurrentText: (text: string) => void;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string; // Add this line
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event.target.value);
	};

	return (
		<input
			id={'hw04-input'}
			type="text"
			value={props.currentText}
			onChange={onChangeHandler}
		/>
	);
};