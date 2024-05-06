import axios from "axios";

export const commonFunctions = {
    validateSession: async () => {
        try {
            let res = await axios.get('http://ec2-54-221-99-230.compute-1.amazonaws.com/users/session', {
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