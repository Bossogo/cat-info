import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import breedRating from '../../../models/breedRating';
import connectMongoDB from '../../../libs/connect'


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
    let rating = 4;
    /* try{
        await connectMongoDB();
        const breedRatingData = await breedRating.findOne({breedID: id}).exec();
        if(!breedRatingData){
            await breedRating.create({breedID: id, breedName: name, rating: 5});
        }else{
            rating = await breedRatingData.rating;
        }
    } catch (error) {
        console.error("Error fetching breed rating:", error);
    } */

  return (
    <>
        <div className='info-display w-1/2'>
            <h1 className='text-4xl mb-2 font-bold text-center'>{name}</h1>
            <div className="rating gap-1">
                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" checked={(rating==1?true:false)}/>
                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked={(rating==2?true:false)} />
                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" checked={(rating==3?true:false)}/>
                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" checked={(rating==4?true:false)}/>
                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" checked={(rating==5?true:false)}/>
            </div>

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