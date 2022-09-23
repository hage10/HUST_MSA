import BaseApi from "../base/BaseApi.js"
import BaseApiConfig from "../base/BaseApiConfig.js"

class ClassApi extends BaseApi {
    constructor() {
        super();
        this.apiController = "api/Class";
    }
    getUserByClassId(id) {
        return BaseApiConfig.get(`${this.apiController}/${id}/users`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.getItem("token"),
            }
        });
    }
}

export default new ClassApi();