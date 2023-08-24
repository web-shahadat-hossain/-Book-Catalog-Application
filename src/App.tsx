import { Fragment ,useEffect} from "react";
import MainLayout from "./layouts/MainLayout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useAppDispatch } from "./redux/hook";
import { setLoading, setUser } from "./redux/feature/user/userSlice";

function App() {

const dispatch=useAppDispatch()


useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    dispatch(setLoading(true))
    if (user) {
     
     dispatch(setUser(user.email))
     dispatch(setLoading(false))
    } else{
      dispatch(setLoading(false))    }
  });
},[dispatch]);
  return (
    <Fragment>
      <MainLayout />
    </Fragment>
  );
}

export default App;
