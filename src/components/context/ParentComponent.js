import React, { createContext } from 'react';
import ChildComponent from './ChildComponent';

// 1. 컨텍스트 객체 생성 (createContext)
export const ThemeContext = createContext();

const ParentComponent = () => {
    // 2. 렌더링하고자 하는 자식 요소를 Provider로 감싸주기 (value는 필수)
    return <ThemeContext.Provider value={"light"}>
        <ChildComponent />
    </ThemeContext.Provider>
}

export default ParentComponent;