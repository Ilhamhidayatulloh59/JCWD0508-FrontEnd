import { useSelector } from "react-redux"
import { RootState } from "../store/store"

function DisplayCounter () {
    const count = useSelector((state: RootState) => state.counter.value)
    return (
        <h1>
            {count}
        </h1>
    )
}

export default DisplayCounter