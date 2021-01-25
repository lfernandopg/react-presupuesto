import { useState } from 'react';

const useForm = <T extends {} >( initialState : T ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target } : {target : any}) => {
        let property : string = target.name
        let value : any = target.value
        
        if (values.hasOwnProperty(property)) {
            console.log(target)
            setValues({
                ...values,
                [ property ]: value 
            });
        }
    }

    return { values, handleInputChange, reset };
}

export default useForm