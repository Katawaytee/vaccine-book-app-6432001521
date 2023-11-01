"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, TextField } from "@mui/material"
import { useState } from "react"
import { Dayjs } from "dayjs"
import dayjs from "dayjs"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { addBooking } from "@/redux/features/bookSlice"
import { BookingItem } from "../../interface"

export default function BookingForm() {
  
  const [name, setName] = useState("");
  const [nationalId, setId] = useState("");
  const [hospital, setHospital] = useState("");
  const [reserveDate, setReserveDate] = useState<Dayjs|null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const makeBooking = () => {
    if (name && nationalId && hospital && reserveDate) {
      const item:BookingItem = {
        name: name.split(/\s+/)[0],
        surname: name.split(/\s+/)[1],
        nationalId: nationalId,
        hospital: hospital,
        vaccinationDate: dayjs(reserveDate).format("YYYY/MM/DD")
      }
      dispatch(addBooking(item))
    }
  };

  return(
    <div className=" bg-slate-100 rounded-lg space-y-2 w-1/3 px-10 py-5 my-5
    flex flex-col items-center">
      <TextField fullWidth label="ชื่อ - นามสกุล" variant="outlined" className="bg-white"
      value={name} onChange={(event)=>{setName(event.target.value);}}/>
      <TextField fullWidth label="รหัสประจำตัวประชาชน" variant="outlined" className="bg-white"
      value={nationalId} onChange={(event)=>{setId(event.target.value);}}/>
      <TextField variant="outlined" label="โรงพยาบาล" className="bg-white" fullWidth select
      value={hospital} onChange={(event)=>{setHospital(event.target.value);}}>
        <MenuItem value="">เลือกโรงพยาบาล</MenuItem>
        <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
        <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
        <MenuItem value="Thammasat University Hospital">Thammasat University Hospital</MenuItem>
      </TextField>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white"
        value={reserveDate}
        onChange={(value)=>{setReserveDate(value);}}/>
      </LocalizationProvider>
      <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1
      text-white shadow-sm" onClick={makeBooking}>
        จองวัคซีน
      </button>
    </div>
  );
}