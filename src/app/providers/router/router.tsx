import { lazy } from "react"
import { createBrowserRouter, Navigate } from "react-router"

const MainLayoutLazy = lazy(() => import("@shared/layouts/MainLayout"))
const HeaderLazy = lazy(() => import("@widgets/LayoutHeader/ui/Header"))
const FooterLazy = lazy(() => import("@widgets/LayoutFooter/ui/Footer"))
const PostsPageLazy = lazy(() => import("@pages/PostsPage/PostsPage"))
const PostPageLazy = lazy(() => import("@pages/PostPage/PostPage"))
const AlbumsPageLazy = lazy(() => import("@pages/AlbumsPage/AlbumsPage"))
const AlbumPhotosPageLazy = lazy(
	() => import("@pages/AlbumPhotosPage/AlbumPhotosPage")
)
const UsersPageLazy = lazy(() => import("@pages/UsersPage/UsersPage"))
const UserAlbumsPageLazy = lazy(
	() => import("@pages/UserAlbumsPage/UserAlbumsPage")
)
const UserTodosPageLazy = lazy(
	() => import("@pages/UserTodosPage/UserTodosPage")
)

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayoutLazy header={<HeaderLazy />} footer={<FooterLazy />} />,
		children: [
			{ index: true, element: <Navigate to="posts" /> },

			{ path: "posts", element: <PostsPageLazy /> },
			{ path: "posts/:id", element: <PostPageLazy /> },
			{ path: "albums", element: <AlbumsPageLazy /> },
			{
				path: "albums/:id/photos",
				element: <AlbumPhotosPageLazy />,
			},
			{ path: "users", element: <UsersPageLazy /> },
			{
				path: "users/:id/posts",
				element: <UserAlbumsPageLazy />,
			},
			{
				path: "users/:id/albums",
				element: <UserAlbumsPageLazy />,
			},
			{
				path: "users/:id/todos",
				element: <UserTodosPageLazy />,
			},
		],
	},
])
