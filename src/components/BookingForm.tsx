"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, TextField } from "@mui/material"

export default function BookingForm() {
  return(
    <div className=" bg-slate-100 rounded-lg space-y-2 w-1/3 px-10 py-5 my-5
    flex flex-col items-center">
      <TextField fullWidth label="ชื่อ - นามสกุล" variant="outlined" className="bg-white"/>
      <TextField fullWidth label="รหัสประจำตัวประชาชน" variant="outlined" className="bg-white"/>
      <TextField variant="outlined" label="โรงพยาบาล" className="bg-white" fullWidth select>
        <MenuItem value="">เลือกโรงพยาบาล</MenuItem>
        <MenuItem value="CUH">Chulalongkorn Hospital</MenuItem>
        <MenuItem value="RVT">Rajavithi Hospital</MenuItem>
        <MenuItem value="TUH">Thammasat University Hospital</MenuItem>
      </TextField>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white"/>
      </LocalizationProvider>
    </div>
  );
}