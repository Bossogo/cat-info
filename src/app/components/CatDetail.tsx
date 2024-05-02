import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type BreedProps = {
    breedInfo:
        {id: string,
        name: string,
        description: string,
        temperament: string,
        origin: string,
        life_span: string,
        wikipedia_url: string,
        image: {
            width: number,
            height: number,
            url: string
        }
    }
}

const BreedInfo = ({breedInfo} : BreedProps) => {
    const { id, name, description, temperament, origin, life_span, wikipedia_url, image } = breedInfo;

  return (
    <>
        <div className='info-display w-1/2'>
            <h1 className='text-4xl mb-2 font-bold text-center'>{name}</h1>
            <p className='text-lg'>{description}</p>

            <p className='text-lg'>They are seen as: {temperament}</p>
            <p className='text-lg'>Origin: {origin}</p>
            <p className='text-lg'>Life Span: {life_span}</p>

        </div>
        <div className='cat-image'>
            <Link href={wikipedia_url}>
        
                <div className="cat-image-wrapper">
                    <Image
                        src={image.url}
                        alt={name}
                        width={500}
                        height={500}
                        className='cursor-pointer'
                    />
                </div>
            </Link>
        </div>
    </>
  )
}

export default BreedInfo