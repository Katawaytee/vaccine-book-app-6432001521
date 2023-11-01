"use client"
import { cancelBooking } from "@/redux/features/bookSlice"
import { useAppSelector } from "@/redux/store"
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function MyBooking() {
  
  const bookingItem = useAppSelector((state)=>state.bookSlice.bookingItem)
  const dispatch = useDispatch<AppDispatch>()

  if (bookingItem.nationalId === "") {
    return(
      <main className="w-[100%] flex flex-col items-center space-y-4">
        <div className="px-10 py-5 my-5 flex flex-col items-center">
          <h1 className="text-xl"> No Vaccine Booking </h1>
        </div>
      </main>
    )
  } else {
    return(
      <main className="w-[100%] flex flex-col items-center space-y-4">
        <div className="bg-slate-200 rounded w-1/4 px-5 mx-5 py-2 my-2">
          <div className="text-xl">{bookingItem.name} {bookingItem.surname}</div>
          <div className="text-sm">เลขบัตรประจำตัวประชาชน: {bookingItem.nationalId}</div>
          <div className="text-sm">โรงพยาบาล: {bookingItem.hospital}</div>
          <div className="text-sm">วันที่ต้องการรับวัคซีน: {bookingItem.vaccinationDate}</div>
          <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1
          text-white shadow-sm" onClick={()=>dispatch(cancelBooking(bookingItem))}>
            ยกเลิกการจอง
          </button>
        </div>
      </main>
    )
  }
}