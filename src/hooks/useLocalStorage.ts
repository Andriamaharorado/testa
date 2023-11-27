import { useEffect, useState } from "react"

// Modifier le retour de la fonction useLocalStorage pour spécifier explicitement les types
function useLocalStorage<T>( key: string, initialValue:T | (()=>T)) {
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === "function"){
            return (initialValue as () => T)()
        } else{
            return initialValue
        }
    })
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))}
        , [key,value]
    )
    return [value, setValue] as const; // Retourner le tuple de manière immuable
    //return [value, setValue as [typeof value, typeof setValue]]
}

export default useLocalStorage
