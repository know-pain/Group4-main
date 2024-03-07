// const exchangeUrl = "https://api.fastforex.io/fetch-multi?from=USD&to=NGN&api_key=0ffdca4416-4f882607f1-s9myt6"

//import axios from 'axios';
import toast from 'react-hot-toast';

export const exchange = async(amount,from,to)=>{
    try {
    const out =  await  fetch(`https://api.fastforex.io/fetch-multi?from=${from}&to=${to}&api_key=0ffdca4416-4f882607f1-s9myt6`)
    const res = await out.json()
    const result = res.results[to]
    return result*amount
    } catch (error) {
        if (error.response) {
            const errorBody = error.response.data.body;
            return toast.error(`${errorBody.status == 422
              ? errorBody.data['errors'][0].msg
              : errorBody.data.msg}`)
          } else {
            return toast.error(error.message.toLowerCase ())
          }
    }
}

