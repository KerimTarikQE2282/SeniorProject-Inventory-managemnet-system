import DataTable from '@/Components/dashboard/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import { getData } from '@/actions/storeActions/StoreGeneralCrudRequests/getData'
import React from 'react'

export default async function Items() {
  const columns=['title','description','sku','imagesUrl','supplier.name']
  const Items=await getData('Item')
  console.log(Items)
  return (
    <div>
       <TabelNavBar link='/dashboard/inventory/items/new' title='Items'/>
       <div className='my-4 p-8'>
    <DataTable Data={Items} resourceTitle={'Item'} columns={columns}/>

    </div>
    </div>
  )
}
