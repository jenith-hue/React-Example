import React, { useLayoutEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import ChildComponent from "../Components/childComponent";
import ParentComponent from "../Components/parentComponent";
import MemoComponent from "../Components/memoComponent";
import ReducerComponent from "../Components/reducerComponent";
import ReferenceComponent from "../Components/referenceComponent";
import ReducerWC from "../Components/reducerWC";
import DynamicDropDown from "../Components/dynamicDropDown";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
export default function RouteDecider() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/child">Child Component</Link>
        </div>
        <div>
          <Link to="/memocomponent">Memo Component</Link>
        </div>
        <div>
          <Link to="/reducercomponent">Reducer Component</Link>
        </div>
        <div>
          <Link to="/referencecomponent">Reference Component</Link>
        </div>
        <div>
          <Link to="/reducerwc">Reducer With Context</Link>
        </div>
        <div>
          <Link to="/dynamicdropdown">Dynamic Drop Down Populate</Link>
        </div>
      <Routes>
        <Route path="/" element={<ParentComponent />} />
        <Route path="/child" element={<ChildComponent />} />
        <Route path="/memocomponent" element={<MemoComponent />} />
        <Route path="/reducercomponent" element={<ReducerComponent />} />
        <Route path="/referencecomponent" element={<ReferenceComponent />} />
        <Route path="/reducerwc" element={<ReducerWC />} />
        <Route path="/dynamicdropdown" element={<DynamicDropDown />} />
      </Routes>
    </BrowserRouter>
  );
}
