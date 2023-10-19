import Link from "next/link";
import InformationCard from "./InformationCard";

export default async function HospitalCatalog({hospitalJson}:{hospitalJson:Object}) {
  const hospitalJsonReady = await hospitalJson;
  return(
    <>
      <div style={{margin:"20px", display:"flex",
      flexDirection:"row", alignContent:"space-around",
      justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>

        {
          hospitalJsonReady.data.map((hosItem:Object)=>(
            
            <Link href={`/hospital/${hosItem.id}`} className="w-1/6">
              <InformationCard HospitalName={hosItem.name} imgSrc={hosItem.picture}/>
            </Link>
            
            )
          )
        }
        
      </div>
    </>
  );
}