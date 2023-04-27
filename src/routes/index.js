import { Bai1, Bai2, Bai3, Bai4, Bai5, Bai6, Bai7, Bai8 } from "../pages";
import { route } from "../utils/constants/config";
import { Route, Routes } from "react-router-dom";

const PageContent = () => {
    return (
        <Routes>
            <Route path={route.BAI1} element={<Bai1 />} />
            <Route path={route.BAI6} element={<Bai6 />} />
            <Route path={route.BAI2} element={<Bai2 />} />
            <Route path={route.BAI3} element={<Bai3 />} />
            <Route path={route.BAI4} element={<Bai4 />} />
            <Route path={route.BAI5} element={<Bai5 />} />
            <Route path={route.BAI7} element={<Bai7 />} />
            <Route path={route.BAI8} element={<Bai8 />} />
        </Routes>
    )
}
export default PageContent;