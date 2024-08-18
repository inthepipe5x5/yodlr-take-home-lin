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

        // Check if the error has a response object
        if (err.response) {
            console.error("Response data:", err.response.data);
            console.error("Response status:", err.response.status);
            console.error("Response headers:", err.response.headers);

            // Extract the error message
            let message = err?.response?.data?.error?.message || "An unknown error occurred.";
            throw Array.isArray(message) ? message : [message];
        } else {
            // Handle errors without a response (e.g., network issues)
            console.error("Error without response:", err);
            throw ["An error occurred while connecting to the server. Please try again later."];
        }
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

  static async putUser(id, userData) {
    if (!userData || id === undefined || !id)
      throw new Error(`Bad Client Patch Request`, 400);
    try {
      let res = await this.request(`users/${id}`, userData, "put");
      return res?.user || res;
    } catch (error) {
      console.error("Error in user PUT request attempt", error);
      return new Error(error, 400);
    }
  }

  static async deleteUser(id) {
    try {
      let resp = await this.request(`users/${id}`, {id}, "delete")
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