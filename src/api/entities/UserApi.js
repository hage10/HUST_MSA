import BaseApi from "../base/BaseApi.js"
import BaseApiConfig from "../base/BaseApiConfig.js"

class UserApi extends BaseApi {
    constructor() {
        super();
        this.apiController = "api/Users";
    }
    search(paramStrs){
        return BaseApiConfig.get(`${this.apiController}/search?keyword=${paramStrs}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.getItem("token"),
            }
        });
    }
}

export default new UserApi();