'use client'
import Image from "next/image";
import CatInfoManager from "./components/CatInfoManager";
import "./CatImagePage.css"
import { useState, useEffect} from "react";
import CatDetail from "./components/CatDetail";
import axios from "axios";
import { ReadonlyURLSearchParams, useSearchParams, useRouter } from "next/navigation";
 
type BreedInfo = {
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
  wikipedia_url: string;
  image: {
    width: number;
    height: number;
    url: string;
  };
};

export default function Home(props : any, params : any) {
  const searchParams : ReadonlyURLSearchParams  = useSearchParams();
  const router = useRouter()

  const [breedData, setBreedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const s = searchParams.get('breed') || null;
  const [selectedBreed, setSelectedBreed] = useState(s || null);
  const [selectedBreedInfo, setSelectedBreedInfo] = useState<BreedInfo | null>();
  /* const [breedInfo, setbreedInfo] = useState({
    id: "",
    name: "",
    description: "",
    temperament: "",
    origin: "",
    life_span: "",
    wikipedia_url: "",
    image: {
      url: "",
    },
  }); */

  const onInfoHandler = (info: string) => {
    if(info)
      router.push(`/?breed=${info}`)
    else return;
  };

  async function fetchBreeds(){
    axios.get(`/api/breeds`)
    .then(response => {
      setBreedData(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error("Error fetching breeds:", error);
    });
    //setQueriedBreed([...breedNames])
  }

  useEffect(() => {
    fetchBreeds()    
    console.log(params)
  },[])

  useEffect(() => {
      setSelectedBreed(s);
  },[s]);

  useEffect(() => {
    if(selectedBreed){
      setSelectedBreedInfo(
        breedData?.find((breed: { name: string }) => breed.name === selectedBreed)
      );
    }else{
      setSelectedBreedInfo(null);
    }
    
  },[breedData, selectedBreed]);


  return (
    <>
      <main className="flex flex-col items-center">
        {!selectedBreed && <CatInfoManager data={breedData} onInfo={onInfoHandler} loading={loading}/>}
        {!!selectedBreed && selectedBreedInfo && <CatDetail breedInfo={selectedBreedInfo} />}
      </main>
    </>
  );
}
