import React, { useRef, useState } from "react";

export default function InputMany() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus();
    }
    return (
        <div>
            <input name="name" onChange={onChange} placeholder="이름" value={name} ref={nameInput} /> <br />
            <input name="nickname" onChange={onChange} placeholder="닉네임" value={nickname} /> <br />
            <button onClick={onReset}>초기화</button>
            <b>값: {name}({nickname})</b>
        </div>
    );
}