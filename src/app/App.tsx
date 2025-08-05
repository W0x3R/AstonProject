import { MainLayout } from "../shared/layouts/MainLayout"
import { PostList } from "../widgets/PostList/PostList"
import { Header } from "../widgets/LayoutHeader/Header"
import { Footer } from "../widgets/LayoutFooter/Footer"

export const App = () => {
	return (
		<MainLayout
			header={<Header />}
			footer={<Footer />}
			postList={<PostList />}
		/>
	)
}
