import { useCallback, useReducer } from "react";

function reducer(state, action) {
    switch(action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value
            };
        case 'RESET':
            // return {email: '', username: ''}
            // arr.reduce(callback[, initialValue])
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
              }, {});   // 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.

        default:
            return state;
    }

}

function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);

    console.log("form: ", form);
    // change
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: 'CHANGE',
            name,
            value
        });
    }, []);

    const reset = useCallback(() => {
        dispatch({ type: 'RESET' });
    }, []);
        
    return [form, onChange, reset];
}

export default useInputs;