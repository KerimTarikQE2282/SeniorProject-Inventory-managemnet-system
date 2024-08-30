"use client"
import { Columns, Pencil, Trash, Upload } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import DeleteBtn from '../../app/(back-office)/GeneralComponents/DeleteBtn'
import { useGetData } from '@/hooks/useGetData'
import Loader from '../../Components/dashboard/Loader'
import 'react-loading-skeleton/dist/skeleton.css'
import exportFromJSON from 'export-from-json'
export default function DataTable({name,columns=[''],resourceTitle}) {

  const {isLoading,data,isError,error,isFetching}=useGetData(name);

  const Data=data?.data?.[name]
  console.log("🚀 ==> file: DataTable.jsx:15 ==> DataTable ==> Data:", typeof Data);

  console.log("🚀 ==> file: DataTable.jsx:15 ==> DataTable ==> Data:", Data);

 

  const exportJson=()=>{
    const fileName = 'name_data'
const exportType =  exportFromJSON.types.csv

exportFromJSON({ data:Data, fileName, exportType })
  }
  
  if(isLoading){
    return (
      <>
   <Loader/>
</>
  )
  }
else{
  return (
  
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className='flex flex-row justify-between px-10'>
        <div className=' w-[20vw] mb-5'>
          
            <form class="max-w-md mx-auto">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                  <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
          </form>

        </div>
      <button href={"/dashboard/inventory/items/new"} className="p-1 bg-blue-600 rounded-md flex items-center space-x-2 px-3 mb-5" onClick={exportJson}>
          <Upload className="text-white w-4 h-4" />
          <span className='text-white'>Export</span>
        </button>
        </div>
       <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
           <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
               <tr  >
               {
                   columns.map((title) => {
                       return (
                           title !== 'id' ? (<th className="px-6 py-4">{title}</th>) : null
                       )
                   })
                 }
              <th>Edit</th>
              <th>Delete</th>
              
               </tr>
           </thead>
           <tbody>
   
       {Data?.map((mydata)=>{
           return(
           <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 " key={mydata.title}>
               
                  {
                   // columns.map((title) => {
                   //     return (
                   //         title !== 'id' ? (<td className="px-14 py-4 ">{mydata[title]}</td>) : null
                   //     )
                   // }
                   
                   //)
                   columns.map((title, i) => (
                     <td key={i} className="px-6 py-4">
                       {title.includes(".") ? (
                         // If the column name contains a dot, it's a nested object
                         // Access the nested key using reduce
                         title.split(".").reduce((obj, key) => obj[key], mydata)
                       ) : title === "createdAt" ||
                       title === "updatedAt" ? (
                         // Convert date columns to a more readable format
                         new Date(mydata[title]).toLocaleDateString()
                       ) : title === "imageUrl" ? (
                         // Special handling for imageUrl to render an image
                         <img
                           src={mydata[title]}
                           alt={`Image for ${resourceTitle}`}
                           className="w-10 h-10 object-cover rounded-full"
                         />
                       ) : (
                         // Otherwise, display the value as is
                         mydata[title]
                       )}
                     </td>
                   ))}
                    
                  
                  <td className=" py-4 flex gap-10  ">
                       <Link href={`/storing/${resourceTitle}/update/${mydata._id}`} className='font-medium text-blue item-center space-x-2 text-blue-500'><Pencil className='text'/></Link>
                      
                   </td>
                   <td>
                  <DeleteBtn resourceTitle={resourceTitle} id={mydata?._id}/>
                   </td>
               </tr>
           )
       })
   
   
       }
   
               
               
           </tbody>
       </table>
   </div>
   
     
   
   
   )
}
  
}
