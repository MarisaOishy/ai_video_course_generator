"use client"
import React, { useEffect } from 'react'
import axios from 'axios';
import { User } from 'lucide-react';
function Provider({ children }: { children: React.ReactNode }) {
   const [userDetail,setUserDetail] = useState(null);
  useEffect(() => {
    CreateNewUser();
  }, [])
  const CreateNewUser=async()=>{
    // user ApI call to create new user
    const result=await axios.post('/api/user',{});
    console.log(result.data);
    setUserDetail(result.data);
  }
    return (
    <div>
      <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
        {children}
      </UserDetailContext.Provider>
      </div>
  )
}

export default Provider