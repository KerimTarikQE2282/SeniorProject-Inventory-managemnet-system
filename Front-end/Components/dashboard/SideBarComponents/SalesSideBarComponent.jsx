import { ArrowDownUp, BadgeDollarSign, BaggageClaim, Bookmark, CheckCheck, ChevronDown, ChevronRight, CircleOff, Container, GalleryVerticalEnd, Layers3, NotebookTabsIcon, Package, PlusCircle, ReceiptIcon, ReceiptRussianRuble, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
function SalesSideBarComponent() {
    const [inventoryOpen,setInventoryopen]=React.useState(false)

    const inventoryLinks=[
      {
        name:"All",
        link:"/selling",
        icon:<GalleryVerticalEnd className='w-4 h-4'/>
      },
      {
        name:"Customer",
        link:"/selling/customer",
        icon:<User className='w-4 h-4'/>
      },
      {
        name:"Sales Order",
        link:"/selling/salesorder",
        icon:<ArrowDownUp className='w-4 h-4'/>
      },
      // {
      //   name:"Packages",
      //   link:"/dashboard/inventory",
      //   icon:<Package className='w-4 h-4'/>
      // }
    
      ,
      {
        name:"Invoice",
        link:"/selling/invoice",
        icon:<BadgeDollarSign className='w-4 h-4'/>
      }
      ,
      {
        name:"Sales Reciepts",
        link:"/selling/salesreciepts",
        icon:<ReceiptIcon className='w-4 h-4'/>
      }
      ,
      {
        name:"Paymets Recieved",
        link:"/selling/paymentsrecieved",
        icon:<CheckCheck className='w-4 h-4'/>
      }
      ,
      {
        name:"Sales Returns",
        link:"/selling/salesreturn",
        icon:<ReceiptRussianRuble className='w-4 h-4'/>
      }
      ,
      {
        name:"Credit ",
        link:"/selling/credits",
        icon:<Bookmark className='w-4 h-4'/>
      },
      {
        name:"Unpayed Credits",
        link:"/selling/unpayedcredits",
        icon:<CircleOff className='w-4 h-4'/>
      }
    ]
    const InventoryList=inventoryLinks.map((link)=>{
        return(
            <Link href={link.link} key={link.name} className='flex items-center justify-between hover:bg-slate-900 transition-all duration-500 ease-in-out pl-8 pr-2 py-2.5 ml-5 rounded-lg text-sm ' > 
              
              <span>{link.name}</span>
               {link.icon}
              
              </Link>
        );
      })
  return (
    <div>
      <Collapsible>
      <CollapsibleTrigger CollapsibleTrigger className='flex items-center space-x-2 p-2 ' onClick={()=>setInventoryopen(!inventoryOpen)}>
        <ShoppingCart className='w-4 h-4'/>
        
        <span> Sales</span>
        { inventoryOpen ? <ChevronDown className='relative  left-[5.5vw] w-4 h-4'/>: < ChevronRight className='relative left-[5.5vw]  w-4 h-4'/>}
         </CollapsibleTrigger>
        <CollapsibleContent >
        
        
        {InventoryList}
        {/* <Link>Item Groups</Link>
         <Link>Inventory Adjustments</Link> */}
       </CollapsibleContent>
        </Collapsible>





    </div>
  )
}

export default SalesSideBarComponent
