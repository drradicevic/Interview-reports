
import { useHistory } from "react-router-dom"

const useTokenValidator = () => {
    const history = useHistory()

    const validate = (response) => {
        if (response === "jwt expired") {
            localStorage.removeItem("token");
            history.push("/login");
        }
    }

    return validate;
}

export default useTokenValidator;