import Hospital from "@/db/models/Hospital"
import { dbConnect } from "@/db/dbConnect"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default function AddHospitalForm() {
  
  const addHospital = async (addHospitalForm:FormData) => {
    "use server"
    const name = addHospitalForm.get("name")
    const address = addHospitalForm.get("address")
    const district = addHospitalForm.get("district")
    const province = addHospitalForm.get("province")
    const postalcode = addHospitalForm.get("postalcode")
    const tel = addHospitalForm.get("tel")
    const picture = addHospitalForm.get("picture")

    try {
      await dbConnect()
      const hospital = await Hospital.create({
        "name": name,
        "address": address,
        "district": district,
        "province": province,
        "postalcode": postalcode,
        "tel": tel,
        "picture": picture
      })
    } catch (error) {
      console.log(error)
    }
    revalidateTag("hospitals")
    redirect("/hospital")
  }

  return(
    <form action={addHospital} className="bg-slate-100 m-5 p-5 flex flex-col items-center">
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="name">โรงพยาบาล</label>
        <input type="text" required id="name" name="name" placeholder="ชื่อโรงพยาบาล"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="address">ที่อยู่ ถนน</label>
        <input type="text" required id="address" name="address" placeholder="ที่อยู่ ถนน"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="district">เขต/อำเภอ</label>
        <input type="text" required id="district" name="district" placeholder="เขต/อำเภอ"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="province">จังหวัด</label>
        <input type="text" required id="province" name="province" placeholder="จังหวัด"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="postalcode">รหัสไปรษณีย์</label>
        <input type="text" required id="postalcode" name="postalcode" placeholder="รหัสไปรษณีย์"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="tel">หมายเลขโทรศัพท์</label>
        <input type="text" required id="tel" name="tel" placeholder="หมายเลขโทรศัพท์"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="picture">รูปภาพโรงพยาบาล</label>
        <input type="text" required id="picture" name="picture" placeholder="URL"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700
      text-white p-2 mt-4 rounded">
        เพิ่มโรงพยาบาล
      </button>
    </form>
  )
}