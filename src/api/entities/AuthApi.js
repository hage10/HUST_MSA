import BaseApi from "../base/BaseApi.js"
import BaseApiConfig from "../base/BaseApiConfig.js"

class AuthApi extends BaseApi {
    constructor() {
        super();
        this.apiController = "api/Auth";
    }

    login(email, password){
        return BaseApiConfig.post(`${this.apiController}/login`, {email,password});
    }
}
export default new AuthApi();