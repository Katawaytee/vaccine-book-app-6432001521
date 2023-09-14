'use client'
import { useReducer } from "react";
import InformationCard from "./InformationCard";

export default function CardPanel() {

  const ratingReducer = (ratingMap:Map<string,number>, action:{type:string,hospitalRating:any[]})=>{
    switch(action.type) {
      case 'set': {
        if (action.hospitalRating[1] == null) {
          ratingMap.delete(action.hospitalRating[0]);
          return new Map(ratingMap);
        } else {
          return new Map(ratingMap.set(action.hospitalRating[0],action.hospitalRating[1]));
        }
      }
      case 'remove': {
        ratingMap.delete(action.hospitalRating[0]);
        return new Map(ratingMap);
      }
      default: return ratingMap;
    }
  }
  
  function getRating(hosName:string) {
    let a = ratingMap.get(hosName);
    if (a == undefined) {
      return 0;
    } else {
      return a;
    }
  }

  const [ratingMap, dispatchRating] = useReducer(ratingReducer, new Map<string,number>);

  return(
    <div className='m-5 flex flex-row content-around justify-center gap-x-32 flex-wrap'>
      <InformationCard HospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg'
      value = {getRating('Chulalongkorn Hospital')}
      onRating={(hospital:any[])=>dispatchRating({type:'set', hospitalRating:hospital})}/>
      <InformationCard HospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'
      value = {getRating('Rajavithi Hospital')}
      onRating={(hospital:any[])=>dispatchRating({type:'set', hospitalRating:hospital})}/>
      <InformationCard HospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg'
      value = {getRating('Thammasat University Hospital')}
      onRating={(hospital:any[])=>dispatchRating({type:'set', hospitalRating:hospital})}/>
      <div className="basis-full w-0 flex flex-col items-center mt-10">
        {Array.from(ratingMap).map((hospital)=><div className="w-1/4" key={hospital[0]}
        onClick={()=>dispatchRating({type:'remove', hospitalRating:hospital})}>{hospital[0]} Rating = {hospital[1]}</div>)}
      </div>
    </div>
  );
}