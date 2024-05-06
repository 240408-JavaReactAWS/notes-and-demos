import axios from "axios";

export const commonFunctions = {
    validateSession: async () => {
        try {
            let res = await axios.get('http://localhost:8080/users/session', {
                withCredentials: true
            });
            console.log(res);
            if (res.status === 200) {
                console.log("Session is valid");
                return true;
            } else{
                console.log("Session is invalid");
                return false;
            }
        } catch (error) {
            console.log("Session is invalid");
            return false;
        }
    },
}