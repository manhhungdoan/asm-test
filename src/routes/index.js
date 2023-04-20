import { Bai1, Bai6 } from "../pages";
import { route } from "../utils/constants/config";
import { Route, Routes } from "react-router-dom";

const PageContent = () => {
    return (
        <Routes>
            <Route path={route.BAI1} element={<Bai1 />} />
            <Route path={route.BAI6} element={<Bai6 />} />
        </Routes>
    )
}
export default PageContent;