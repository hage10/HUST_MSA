import BaseApi from "../base/BaseApi.js"
import BaseApiConfig from "../base/BaseApiConfig.js"

class AssignmentApi extends BaseApi {
    constructor() {
        super();
        this.apiController = "api/Assignment";
    }
    getAssignmentByClassId(id) {
        return BaseApiConfig.get(`${this.apiController}/Class/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.getItem("token"),
            }
        });
    }
}

export default new AssignmentApi();