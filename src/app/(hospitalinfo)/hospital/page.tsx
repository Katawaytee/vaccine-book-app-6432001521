import getHospitals from '@/libs/getHospitals';
import HospitalCatalog from '@/components/HospitalCatalog';
import { Suspense } from 'react';
import { LinearProgress } from '@mui/material';
import AddHospitalForm from '@/components/AddHospitalForm';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from "next-auth/next";
import getUserProfile from "@/libs/getUserProfile";

export default async function Hospital() {
  
  const hospitals = getHospitals();

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) {
    return(
      <main className="text-center p-5">
        <h1 className="text-xl font-medium">Select Hospital</h1>
        <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
          <HospitalCatalog hospitalJson={hospitals}/>
        </Suspense>
      </main>
    );
  } else {
    const profile = await getUserProfile(session.user.token);
    return(
      <main className="text-center p-5">
        <h1 className="text-xl font-medium">Select Hospital</h1>
        <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
          <HospitalCatalog hospitalJson={hospitals}/>
          {
            (profile.data.role == "admin")?
            <AddHospitalForm/>
            :null
          }
        </Suspense>
      </main>
    );
  }
}