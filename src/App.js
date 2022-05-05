import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import SignUp from "./Components/SignUp/SignUp";
import NotFound from "./Components/NotFound/NotFound";
import ManageItem from "./Components/ManageItem/ManageItem";
import AddItem from "./Components/AddItem/AddItem";
import UpdateItem from "./Components/UpdateItem/UpdateItem";
import MyItems from "./Components/MyItems/MyItems";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import "react-toastify/dist/ReactToastify.min.css";
import Footer from "./Components/Footer/Footer";
import Blogs from "./Components/Blogs/Blogs";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route
          path="/manageitem"
          element={
            <RequireAuth>
              <ManageItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/item/:id"
          element={
            <RequireAuth>
              <UpdateItem />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
