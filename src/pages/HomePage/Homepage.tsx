import { useDispatch } from 'react-redux'
// import {useNavigate} from 'react-router-dom'
// import { resetUser } from '../../redux/actions'
import { resetUser } from '../../redux/slice'

const Homepage = () => {
    const dispatch = useDispatch()
    // const navigate=useNavigate()
    const logout = () => {
        dispatch(resetUser())
        // navigate('/authpage')
    }
    return <><>Homepage</>
        <button type='button' onClick={logout}>logout
        </button></>
}
export default Homepage