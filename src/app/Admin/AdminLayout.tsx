import React from 'react'
import Navbar from '../components/Navbar';

function AdminLayout({
   children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
         <Navbar/>
 
        {children}
     </div>
  )
}

export default AdminLayout