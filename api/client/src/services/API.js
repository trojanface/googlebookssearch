import axios from "axios";

export default {
    testRoute: function() {
        return axios.get("/testAPI");
    }
}


