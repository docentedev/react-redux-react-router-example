import { useContext, useState, lazy, Suspense } from 'react'
import { MyContext } from '../../App'

const LazyCard = lazy(() => import('../lazy-card/LazyCard'))

const Card = ({ show }) => {
    const [d, setD] = useState(new Date().getTime())
    const myContext = useContext(MyContext)
    return show ? (
        <div>
            Card {JSON.stringify(myContext)} | {d}
            <Suspense fallback={<div>Loading...</div>}>
                <LazyCard />
            </Suspense>
        </div>
    ) : (<span />)
}

export default Card
