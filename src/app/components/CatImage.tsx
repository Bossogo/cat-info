import { get } from 'http'
import Image from 'next/image'
import { useEffect } from 'react'
import axios from 'axios'

type CatImageProps = {
  color: string,
  says: string,
  fontSize: number,
  fontColor: string,
  cacheBuster: string
}

const CatImage = ({ color, says, fontSize, fontColor, cacheBuster }: CatImageProps) => {
  const imageLink: string = `https://cataas.com/cat/${color}` + 
    (
      (says)? 
      (`/says/${says}` + `?fontSize=${fontSize}&fontColor=${fontColor}&time=${cacheBuster}`) 
    : `?time=${cacheBuster}`
    )

    useEffect(() => {
      const getCats = async () => {
        try{
          const catObj = await axios.get('https://api.thecatapi.com/v1/images/search?limit=1')
        const catData = catObj.data
        console.log(catObj)
        console.log(catData)
        } catch(e){
          console.log('Error: ' + e)
        }
      }
      getCats()
    },[])
  return (
    <>
        <div className='cat-image'>
        <Image
          src={ imageLink
            /* `https://cataas.com/cat/${color}/says/${says}?fontSize=${fontSize}&fontColor=:${fontColor}&time=${cacheBuster}` */
          }
          alt="Logo"
          width={500}
          height={500}
          className="cursor-pointer"
          unoptimized
        />
        </div>
    </>
  )
}

export default CatImage