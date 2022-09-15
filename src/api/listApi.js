import {FAKE_LIST} from './fake-data.js'
const getAll = () =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(FAKE_LIST);
        },300)
    })
}
export default{
    getAll,
}