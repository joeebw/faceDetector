import { useState } from "react";

export const LocalStorage = (key, initialValue) => {
        const [value , setValue] = useState(() => {
                try {
                    const valueStorage = window.localStorage.getItem(key);
                    if(!valueStorage.toString) return initialValue;
                    return JSON.parse(valueStorage); 

                } catch (error) {
                    return initialValue
                }
            })

            const setCurrentValue = (value) => {
                try {
                    setValue(value);
                    window.localStorage.setItem(key, JSON.stringify(value));
                } catch(error) {
                    console.error(error)
                }
            } 



            return  [value, setCurrentValue ];
}  