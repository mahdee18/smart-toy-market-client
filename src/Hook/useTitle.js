import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Smart Toy Market | ${title}`
    },[title])

}

export default useTitle;