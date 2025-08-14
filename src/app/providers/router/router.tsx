import { createBrowserRouter, Navigate } from "react-router"
import { MainLayout } from "../../../shared/layouts/MainLayout"
import { Header } from "../../../widgets/LayoutHeader/Header"
import { Footer } from "../../../widgets/LayoutFooter/Footer"
import { PostsPage } from "../../../pages/PostsPage/PostsPage"
import { PostPage } from "../../../pages/PostPage/PostPage"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout header={<Header />} footer={<Footer />} />,
		children: [
			{ index: true, element: <Navigate to="posts" /> },

			{ path: "posts", element: <PostsPage /> },
			{ path: "posts/:id", element: <PostPage /> },
			{ path: "albums", element: <div>123</div> },
			{ path: "users", element: <div>123</div> },
		],
	},
])
