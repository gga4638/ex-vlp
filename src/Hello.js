import React from "react";

export default function Hello({name, isSpecial}) {
    return (
        <div>
        { isSpecial ? <b>*</b> : null }
        안녕하세요 {name}
        </div>
    );
}