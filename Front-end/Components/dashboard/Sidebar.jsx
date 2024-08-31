"use client"

import { BaggageClaim, BarChart4, Blocks, BrainCircuit, ChevronDown, ChevronLeft, ChevronRight, File, FilesIcon, Flag, FolderClosed, Home, Plus, PlusCircle, ShoppingBasket, ShoppingCart, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import SalesSideBarComponent from './SideBarComponents/SalesSideBarComponent'
import InventorySideBarComponent from './SideBarComponents/InventorySideBarComponent'
import PurchaseSideBarComponent from './SideBarComponents/PurchaseSideBarComponent'
import UserManagement from './SideBarComponents/UserManagement'


function Sidebar() {
 

  return (
 
       <div className='  flex-col w-60 min-h-screen bg-slate-800  text-slate-50 justify-between fixed hidden sm:flex'> 
       {
        /*top part*/
       }
       
       <div className='flex-col '>
       {
        /*Logo*/
       }
       <Link href={"#"} className='flex space-x-2 bg-slate-950 items-center py-3 px-2'>
        <ShoppingCart/>
        <span className='font-semibold text-l '>Inventory</span>
       </Link>
       {
        /*Links*/
       }
       <nav className='flex flex-col gap-3 px-3 py-6'>
        <Link href={"#"} className='flex items-center space-x-2 bg-blue-500  p-2 rounded-md'>
        <Home className='w-4 h-4'/>
       <span> Home</span> 
       </Link>
       
      
       
        <InventorySideBarComponent/>


{/*                            */}
       <SalesSideBarComponent/>
       
    
      <PurchaseSideBarComponent/>
      <UserManagement/>

       <Link href={"#"} className='flex items-center space-x-2 p-2'>
        <BrainCircuit className='w-4 h-4'/>
       <span> AI</span> 
       </Link>

       <Link href={"#"} className='flex items-center space-x-2 p-2'>
        <BarChart4 className='w-4 h-4'/>
       <span> Reports</span> 
       </Link>

       <Link href={"#"} className='flex items-center space-x-2 p-2'>
        <FolderClosed className='w-4 h-4'/>
       <span> Documents</span> 
       </Link>

       </nav>
       </div>
       
      {
        /*bottom  part*/
       }
    <div className='flex-col '>
       <button className='flex flex-col bg-slate-950 justify-end w-full items-center'>
        
       <div className='flex space-x-2  items-center py-3 px-2'>
        <ChevronLeft/>
     
       </div>
       </button>
       </div>
         {
        /*Subscription Card*/
       }
         {
        /*footer icon*/
       }
       
       </div>
    
  )
}

export default Sidebar
