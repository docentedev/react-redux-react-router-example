import { useSelector } from 'react-redux'

const Contact = () => {
    const number = useSelector((s) => s.counter.number)

    return (
        <div>Contact {number}</div>
    )
}

export default Contact
