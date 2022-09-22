import BaseApi from "../base/BaseApi.js"

class UserApi extends BaseApi {
    constructor() {
        super();
        this.apiController = "api/Users";
    }
}

export default new UserApi();