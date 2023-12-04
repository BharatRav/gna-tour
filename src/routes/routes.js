import HomePage from "../pages/HomePage";
import CategoriesPage from "../pages/CategoriesPage";
const routes = [
    { index: true, element: <HomePage />, state: "home" },
    { path:"/categories", element: <CategoriesPage />, state: "categories" },
]

export default routes;