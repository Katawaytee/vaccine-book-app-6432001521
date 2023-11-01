import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BookingItem } from "../../../interface"

type BookingState = {
  bookingItem: BookingItem;
}

const initialState:BookingState = { 
  bookingItem: {
    name: "",
    surname: "",
    nationalId: "",
    hospital: "",
    vaccinationDate: ""
  }
}

export const bookSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action:PayloadAction<BookingItem>)=>{
      state.bookingItem.name = action.payload.name;
      state.bookingItem.surname = action.payload.surname;
      state.bookingItem.nationalId = action.payload.nationalId;
      state.bookingItem.hospital = action.payload.hospital;
      state.bookingItem.vaccinationDate = action.payload.vaccinationDate;
    },
    cancelBooking: (state, action:PayloadAction<BookingItem>)=>{
      state.bookingItem.name = "";
      state.bookingItem.surname = "";
      state.bookingItem.nationalId = "";
      state.bookingItem.hospital = "";
      state.bookingItem.vaccinationDate = "";
    }
  }
})

export const { addBooking, cancelBooking } = bookSlice.actions
export default bookSlice.reducer