import axios from 'axios'
//axios.defaults.baseURL = "api"
axios.interceptors.request.use((req) => {
    console.log(req);
    if (window.sessionStorage.uid) {
        alert("请先登录")
    } else {
        return req
    }
})
axios.interceptors.response.use((res) => {
    if (res.status == 200) {
        return res;
    }

})
export default {
    axios
}