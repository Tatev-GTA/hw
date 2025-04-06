import React, { useState, ChangeEvent } from 'react';
import s from './HW4.module.css';
import { Button } from './Button';
import { Input } from './Input';

export const HW4 = () => {
    const [currentText, setCurrentText] = useState('');
    const [texts, setTexts] = useState<string[]>([
        'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
    ]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentText(event.target.value);
    };

    const handleSave = () => {
        setTexts([currentText, ...texts]);
        setCurrentText('');
    };

    return (
        <div id={'hw04'}>
            {currentText ? (
                <h1 id={'hw04-text'}>{currentText}</h1>
            ) : (
                <h1 id={'hw04-default-text'}>Здесь появится новое дело</h1>
            )};

            <Input
                currentText={currentText}
                onChange={handleChange}
                // Remove the placeholder prop if not supported
            />

            <Button name={'Сохранить'} callBack={handleSave} />

            <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

            <ol id={'hw04-tasks'}>
                {texts.map((el, index) => {
                    return (
                        <li key={index} id={`hw04-task-${index}`} className={index % 2 === 0 ? s.chetNechet : ''}>
                            {el}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};