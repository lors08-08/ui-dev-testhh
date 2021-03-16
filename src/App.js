import React from "react";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { loadItems } from "./redux/actions";
import Loader from "./components/Loader";
import Body from "./components/Body/index";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="main-wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <Body searchValue={searchValue} />
        <Footer />
      </div>
    );
  }
}

export default App;
