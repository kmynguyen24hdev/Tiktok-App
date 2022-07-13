import { useEffect, useState } from "react";

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] =useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay)

        //cleanup func
        return () => clearTimeout(handler)
    })

    return debouncedValue;
}

export default useDebounce;