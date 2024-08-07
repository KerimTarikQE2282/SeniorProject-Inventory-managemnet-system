import React from 'react'
import SalesActivity from './SalesActivity'
import InventorySummary from './InventorySummary'

export default function SalesOverview() {
    
  return (
    <div className='bg-[#d9eafd] border-b border-slate-300 p-8 grid grid-cols-12 gap-5 '>
   
      <SalesActivity/>

      <InventorySummary/>
      
  </div>
  
   
  
   
  )
}
