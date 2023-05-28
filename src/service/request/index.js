import axios from "axios";
import useMainStore from "@/stores/modules/mian";
import {BASE_URL, TIMEOUT} from './config'
import { storeToRefs } from "pinia";

const mainStore = useMainStore()
class qbRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    // 添加loading效果
    this.instance.interceptors.request.use((config) => {
      mainStore.isLoadingShow = true
      return config
    }, (err) => {
      return err
    })
    this.instance.interceptors.response.use((res) => {
      mainStore.isLoadingShow = false
      return res
    }, (err) => {
      return err
    })
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({...config, method: "get"})
  }
  post(config) {
    return this.request({...config, method: "post"})
  }

}   
   
export default new qbRequest(BASE_URL, TIMEOUT)


