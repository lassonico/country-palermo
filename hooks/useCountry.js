import { useContext } from 'react'
import  Countrycontext  from '../context/Countryprovider'

const useContry = () => {
    return useContext(Countrycontext)
}

export default useContry
