import { useContext } from "react"
import { UserContext } from "../App"

function DisplayComp () {
    const user = useContext(UserContext)
    return (
        <h1>
            Hello { user }
        </h1>
    )
}

export default DisplayComp