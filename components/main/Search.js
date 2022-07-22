import { useState } from "react"
import Input from '../common/input'


export default function Search ({setSearchTerm}) {

    const search = (value) => {
        
        setSearchTerm(value)
    }


    return <Input style={{width: "100%" }}  placeholder={"Search something"} handleSetValue={search} />
}