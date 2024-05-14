'use client'
import React from 'react'
import { redirect } from 'next/navigation'

type Props = {
    id: string,
    name: string,
    children: string
}

const BreedOption = ({ id, name, children}: Props) => {
    console.log("test")
    const handleSelection = (name : string) => {
        redirect(`/breeds/${name}`)
    }
  return (<>
        <option className="" onClick={() => {handleSelection(name)}} value ={name}>
            {children}  
        </option>
    </>
  )
}

export default BreedOption