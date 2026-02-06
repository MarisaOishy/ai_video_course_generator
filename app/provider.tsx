"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserDetailContext } from "@/context/UserDetailContext";

function Provider({ children }: { children: React.ReactNode }) {

  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = async () => {
    try {
      const result = await axios.post("/api/user", {});
      setUserDetail(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Create user error:", error);
    }
  };

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div className="max-w-10xl mx-auto">
        {children}
      </div>
     
    </UserDetailContext.Provider>
  );
}

export default Provider;
