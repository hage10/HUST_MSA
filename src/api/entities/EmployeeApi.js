import BaseApi from "../base/BaseApi.js"

class EmployeeApi extends BaseApi {
    constructor() {
        super();
        this.apiController = "account";
    }
}

export default new EmployeeApi();