import { createBrowserRouter } from "react-router"
import { PostsPage } from "../../../pages/PostsPage/PostsPage"
import { MainLayout } from "../../../shared/layouts/MainLayout"
import { Header } from "../../../widgets/LayoutHeader/Header"
import { Footer } from "../../../widgets/LayoutFooter/Footer"
import { PostPage } from "../../../pages/PostPage/PostPage"

export const router = createBrowserRouter([
	{
		path: "/posts",
		element: <MainLayout header={<Header />} footer={<Footer />} />,
		children: [
			{ index: true, element: <PostsPage /> },
			{ path: ":id", element: <PostPage /> },
		],
	},
])
