'use client'
import CatImage from './CatImage'
import Link from 'next/link'
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { useRef } from 'react'

type Props = {}

const fontColorVariants : string[] = ['black', 'blue', 'red', 'white']
const colorVariants : string[] = ['black', 'orange', 'white']
const fontSizeVariants : number[] = [ 20, 40, 60, 80, 100]

const CatImageGenerator = (props: Props) => {

  const searchParams : ReadonlyURLSearchParams  = useSearchParams();
  const selectedColor = searchParams.get('color') || 'black';
  const says = searchParams.get('says') || 'hi';
  const selectedFontSize = Number(searchParams.get('fontSize')) || 0;
  const selectedFontColor = searchParams.get('fontColor') || 'blue';

  const cacheBuster = new Date().toISOString();

  const sayRef = useRef<HTMLInputElement>(null)
  return (
    <>
        <div className='generator flex'>
            <CatImage color={selectedColor} says={says} fontSize={selectedFontSize} fontColor={selectedFontColor} cacheBuster = {cacheBuster}/>
            
            <div className='generator-inputs fade-in-left ml-5'>
                
                <div className='mb-6'>
                    <h1>Colors</h1>
                      {colorVariants.map((color, index) => {
                        return(
                          <Link 
                            key={index}
                            href={
                              `?color=${color}&says=${says}&fontSize=${selectedFontSize}&fontColor=${selectedFontColor}`
                              } 
                            className={
                              `btn  ${color === selectedColor ? ' btn-primary' : 'btn-outline btn-primary'} mr-3`
                            }
                          >{color[0].toUpperCase() + color.slice(1)}
                          </Link>
                        )})
                      }
                </div>

                <div className='mb-6'>
                    <h1>Says</h1>
                    <input 
                      className='rounded mr-2'
                      type="text" 
                      ref={sayRef}
                    />
                    <Link className='btn btn-sm btn-secondary' 
                      href={`?says=${sayRef.current?.value || ''}&fontSize=${selectedFontSize}&color=${selectedColor}&fontColor=${selectedFontColor}`}
                    > Add text
                    </Link>
                </div>

                <div className='mb-6'>
                    <h1>Font Sizes</h1>
                    {fontSizeVariants.map((fontSize, fontSizeIndex) => {
                        return(
                          <Link 
                            key={fontSizeIndex}
                            href={
                              `?fontSize=${fontSize}&color=${selectedColor}&says=${says}&fontColor=${selectedFontColor}`
                              } 
                            className={
                              `btn  ${fontSize === selectedFontSize ? ' btn-primary' : 'btn-outline btn-primary'} mr-3`
                            }
                          >{fontSize}
                          </Link>
                        )
                    })}
                </div>

                <div className='mb-6'>
                    <h1>Font Colors</h1>
                    {fontColorVariants.map((fontColor, fontColorIndex) => {
                        return(
                          <Link 
                            key={fontColorIndex}
                            href={
                              `?fontColor=${fontColor}&color=${selectedColor}&says=${says}&fontSize=${selectedFontSize}`
                              } 
                            className={
                              `btn  ${fontColor === selectedFontColor ? ' btn-primary' : 'btn-outline btn-primary'} mr-3`
                            }
                          >{fontColor[0].toUpperCase() + fontColor.slice(1)}
                          </Link>
                        )})
                    }
                </div>
                
            </div>
        </div>
    </>
  )
}

export default CatImageGenerator