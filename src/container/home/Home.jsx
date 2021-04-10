import { useDispatch, useSelector } from 'react-redux'
import { counterAdd, counterSubs } from '../../store/counter/actions'
const Home = () => {
    const dispatch = useDispatch()
    const number = useSelector((s) => s.counter.number)

    const handleAddNumber = () => {
        dispatch(counterAdd(number))
    }
    const handleSubsNumber = () => {
        dispatch(counterSubs(number))
    }

    return (
        <div>
            <div>Home</div>
            <button onClick={handleAddNumber}>{number}</button>
            <button onClick={handleSubsNumber}>{number}</button>
        </div>
    )
}

export default Home
