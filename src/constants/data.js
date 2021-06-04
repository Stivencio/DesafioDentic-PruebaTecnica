import axios from "axios"

axios({
    method:'GET',
    url:'https://60b9129080400f00177b619f.mockapi.io/api/v1/products/'
}).then(res=>{
    console.log(res.data)
}).catch(err=>console.log(err))

