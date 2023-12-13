import { useCallback, useState } from "react"

const useToggle = (initial) =>{
    const [value, setValue] = useState(initial);
    
    const toggle = useCallback( () => {
        setValue(state => !state);
    }, []);

    return [value, toggle]
}

export default useToggle;