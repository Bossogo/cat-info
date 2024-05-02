'use client'
//import CatInfoDisplay from './CatInfoDisplay'
//import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'


type BreedName = {
  name: string;
  id: string;
  rest?: any;
};

type CafInfoManagerProps = {
  onInfo: (info: string) => void,
  data: BreedName[],
  loading: boolean
};

const CatInfoManager = ({onInfo, data, loading}:CafInfoManagerProps) => {
  
  /* const searchParams : ReadonlyURLSearchParams  = useSearchParams();
  const selectedColor = searchParams.get('color') || 'black'; */
  //const [queriedBreed, setQueriedBreed] = useState([])

  const [breeds, setBreeds] = useState<BreedName[]>([])
  const [breedNames, setBreedNames] = useState<BreedName[]>([])
  const [selectedBreed, setSelectedBreed] = useState<string>("")

  const selectBreedRef = useRef<HTMLSelectElement>(null)
  

  

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBreed(e.target.value)
  }

  useEffect(() => {
    setBreedNames(breeds.map((breed: { name: string, id: string }) => ({name: breed.name, id: breed.id})))
  },[breeds])

  useEffect(() => {
    setBreeds(data)
  },[data])

  
  return (
    <>
        <div className='flex items-end'>
        <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick your breed of interest</span>
            </div>
            <select ref={selectBreedRef} name='cat-breed-list' onChange={handleSelection} className="select select-bordered select-error bg-transparent max-w-xs mr-3" disabled={loading?true:false}>
              <option className='hidden' selected disabled>
                 {loading ? "Loading..." : "Select a breed"}
              </option>
                {breedNames.map((breedName: BreedName) => {
                  return (
                    <option key={breedName.id} className="" value ={breedName.name}>
                        {breedName.name}  
                    </option>
                  )
                })}
            </select>
        </label>
          <button onClick={() => onInfo(selectedBreed)} className='btn btn-outline btn-circle  btn-primary '>Go</button>
        </div>
      
        
        <br />

        <section className="w-100 flex-col flex-center mt-10">
          <h1 className=" text-5xl mb-2 font-bold text-center">
          Welcome to
          <br className="lg:hidden" />
          <span className="orange_gradient">, Bree-Info</span>
          </h1>

          <p className="desc text-center text-xl">A place to find and save pics and info on cats</p>
        </section>
    </>
  )
}

export default CatInfoManager