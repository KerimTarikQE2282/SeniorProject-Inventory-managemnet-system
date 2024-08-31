import toast from "react-hot-toast";
import axios from "axios";



const baseUrl = 'http://localhost:3002/api/v1/';



export const makePOSTApiRequest = (endpoint,setLoading,data,name) => async dispatch => {
  setLoading(true);
  console.log('item addddd 222222')
  const url=`${baseUrl}${endpoint}`

  console.log("🚀 ==> file: StoreGeneralCrudRequests.js:13 ==> makePOSTApiRequest ==> url:", url);

  const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

try {
  const res = await axios.post(url, data, config);
dispatch({
  type: `CREATE_${name}_SUCCESS`,
  payload: res.data,
});
 
  setLoading(true);
  if (res.status === 200 || res.status === 201) { // Check for successful response status
    console.log(res.data);
    setLoading(false);
    toast.success(`Successfully Added A ${name}!`, { icon: '✔️' });
   
    if (typeof reset === 'function') {
      reset(); // Ensure reset is defined
    }
  } else {
    setLoading(false);
    toast.error('Something went wrong!', { icon: '❌' });
    dispatch({
      type: `CREATE_${name}_FAILED`,
      payload: res.data,
    });
  }
} catch (error) {
  console.error(error);
  setLoading(false);
  toast.error('Something went wrong!', { icon: '❌' });
  dispatch({
    type: `CREATE_${name}_FAILED`,
    payload: error.response?.data || error.message,
  });
}
};





export const makePUTApiRequest = (endpoint,setLoading,data,name) => async dispatch => {
  console.log(` frommmmmmmmmmmmmmmmmmmmmmmmmmmmmmm update api endpoint ${endpoint}${baseUrl}${endpoint}`)
setLoading(true)
     const config = {
        headers: {
          'Content-Type':  'application/json',
        }
      }
      try {
        
        const response=await axios.patch(`${baseUrl}${endpoint}`,data,config)
        
                console.log("🚀 ==> file: StoreGeneralCrudRequests.js:71 ==> makePUTApiRequest ==> response:", response);

                if(response.statusText=200){
                
                setLoading(false)
                console.log('checker',endpoint,setLoading,data,name)
                toast.success(`Successfully Updated A ${name}!`, {icon: '✔️'})
                dispatch({
                  type:`UPDATE_${name}_SUCCESS`,
                  payload:res.data
                })
               return true
              }else{
                setLoading(false)
                toast.error('Some thing went wrong!', {icon: '❌'})
                dispatch({
                  type:`UPDATE_${name}_FAILED`,
                  payload:res.data
                })
              }
              setLoading(false)
        
      } catch (error) {
        console.log(error)
        setLoading(false)
        dispatch({
          type:`UPDATE_${name}_FAILED`
        })
      }
  
  }










  