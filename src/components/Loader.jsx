import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Loader = (props) => {
return(
    <div>
    <h1>{props.title || <Skeleton />}</h1>
    {props.body || <Skeleton count={10} />}
  </div>
)
}
export default Loader