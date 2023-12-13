import React, { useContext } from "react";
import { ThemeContext } from "./ParentComponent";

const ChildComponent = () =>{
    // 3. useContext hook을 활용. 자식 요소에서 컨텍스트 구독
    const theme = useContext(ThemeContext)

    return <div>
        {/* 4. context 값을 사용 */}
        {theme}        
    </div>
}

export default ChildComponent;