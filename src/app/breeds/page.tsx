
import BreedOption from '../components/BreedOption';


type BreedName = {
  name: string;
  id: string;
  rest?: any;
};

type CafInfoManagerProps = {
};

const CatInfoManager = async ({params, searchParams}:
    {params: any, searchParams: any}
) => {
  
  /* const searchParams : ReadonlyURLSearchParams  = ;
  const selectedColor = searchParams.get('color') || 'black'; */
  //const [queriedBreed, setQueriedBreed] = useState([])
    let breedNames = [{
        name: "hi",
        id:"omo"
    }]
    console.log("hi")
  try {
    const breeds = await fetch("/api/breeds").then(x => x.json()).then(y => y.data)
    const breedNames = await breeds.map((breed: { name: string, id: string }) => ({name: breed.name, id: breed.id}))
    
  } catch (error) {
    console.log(error)
  }



  
  return (
    <>
        <div className='flex items-end'>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                <span className="label-text">Pick your breed of interest</span>
                </div>
                <select defaultValue='' name='cat-breed-list'  className="select select-bordered select-error bg-transparent max-w-xs mr-3" disabled={!breedNames?true:false}>
                <option className='to-hide' value='' disabled>
                    {breedNames? "Loading..." : "Select a breed"}
                </option>
                    {breedNames.map((breedName: BreedName) => {
                    return (
                        <BreedOption key={breedName.id} name={breedName.name} id={breedName.id}>
                            {breedName.name}
                        </BreedOption>
                    )
                    })}
                </select>
            </label>
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