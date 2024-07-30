"use client"
import { useForm } from "react-hook-form";
import React from 'react';
import FormHeader from '../../InventoryComponents/FormHeaders';
import TextInput from "@/Components/FormInputs/TextInput";
import toast from "react-hot-toast";
import SubumitButton from "@/Components/FormInputs/SubumitButton";
import TextAreaInputs from "@/Components/FormInputs/TextAreaInputs";
import makePOSTApiRequest from "@/actions/storeActions/StoreGeneralCrudRequests/PostRequest";
import makePUTApiRequest from "@/actions/storeActions/StoreGeneralCrudRequests/PutRequests";

export default function NewWareHouse(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading,setLoading]=React.useState(false)
console.log('from warehouse',props)
var done=false
  async function onSubmit(data){

    if(props.isupdate){
      // Update Request 
      try {
       await makePUTApiRequest(`WareHouse/${props.initialData.id}`,setLoading,data,'WareHouse')
         done=true
         if(done==true){
          router.replace('/dashboard/inventory/WareHouse')
       }
      } catch (error) {
        console.log(error)
      }
     
    }
    else{
      makePOSTApiRequest('WareHouse',setLoading,data,'WareHouse')
    }

  }
  return (
    <div>
      {/* { header } */}
      <FormHeader title={`${props.isupdate?'Update Warehouse Information':'New WareHouse'}`} link={'/dashboard/inventory/WareHouse/'} />
      {/* { Form } */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
         <TextInput label="WareHouse Name" name="WareHouseName" defaultValue={props.initialData?.WareHouseName || ''}  type="text" width='full'   register={register}  errors={errors}/>
         <TextInput label="WareHouse Location" name="WareHouseLocation" defaultValue={props.initialData?.WareHouseLocation || ''}   type="text" width='full'   register={register}  errors={errors}/>
         <TextAreaInputs  label="WareHouse Description " name="WareHouseDescription"    type="text" width='full'  defaultValue={props.initialData?.WareHouseDescription || ''}   register={register}  errors={errors}/>
         {/* <TextInput label="Brand Name" name="WareHouseName"  type="text" width='full'   register={register}  errors={errors}/> */}
        

         <div className="flex items-center mb-4">
<input
    id="default-radio-1"
    type="radio"
    value={props?.initialData || ''} 
    name="Main"
    {...register("WareHouseType", { required: "This field is required" })}
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  />
  <label
    htmlFor="default-radio-1"
    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    Main
  </label>
</div>
         <div className="flex items-center mb-4">
        
          
  <input
    id="default-radio-1"
    type="radio"
    value="Personal"
    name="Personal"
    {...register("WareHouseType", { required: "This field is required" })}
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  />
  <label
    htmlFor="default-radio-1"
    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    Personal
  </label>
</div>

<div className="flex items-center">
  <input
    id="default-radio-2"
    type="radio"
    value="Shared"
    name="Shared"
    {...register("WareHouseType", { required: "This field is required" })}
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  />
  <label
    htmlFor="default-radio-2"
    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    Shared
  </label>
</div>

        
        
        



        </div>
       <SubumitButton title={`${props.isupdate?'Updated Warehouse informations':'New Warehouse'}`} isLoading={loading}/>

      </form>
    </div>
  )
}
