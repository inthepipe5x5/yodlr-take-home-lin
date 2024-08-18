import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL || import.meta.env.REACT_APP_BASE_URL || "http://localhost:3000"

class YodlrApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);
    
    const url = `${BASE_URL || import.meta.env.VITE_REACT_APP_BASE_URL}/${endpoint}`;
    const params = method === "get" ? data : {};

    try {
      return await axios({ url, method, data, params });
    } catch (err) {
      console.error("API Error:", err.message);
      console.error(err, err.response)
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  static async registerNewUser(userData) {
    const { firstName, lastName, email } = userData;
    let res = await this.request(
      `users`,
      { firstName, lastName, email },
      "post"
    );
    return res;
  }

  static async patchUser(id, userData) {
    if (!userData || id === undefined || !id)
      throw new Error(`Bad Client Patch Request`, 400);
    try {
      let res = await this.request(`users/${id}`, userData, "patch");
      return res?.user || res;
    } catch (error) {
      console.error("Error in user patch attempt", error);
      return new Error(error, 400);
    }
  }

  static async deleteUser(id) {
    try {
      let resp = await this.request(`users/${id}`,"delete")
      console.log(`User ${resp.data.user} deleted`)
    } catch (error) {
      console.error(error)
    }
  }

  static async getUser(id) {
    try {
      if (!id)
        throw new Error(`Bad get user request: id= ${id}`);
      const res = await this.request(`users/${id}`);
      console.debug(`getUser api result = ${res.data.user}`);
      return res?.user || res;
    } catch (error) {
      console.error(`API call: getUser ERR ${error}`);
      const res = { status: error.status, message: error.message };
      return res;
    }
  }

  
}
export default YodlrApi;