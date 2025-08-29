import { LoadingSpinner } from "../../ui/LoadingSpinner/LoadingSpinner"

export const withLoading = <T extends object>(
	Component: React.ComponentType<T>
) => {
	return function WithLoadingComponent(props: T & { isLoading: boolean }) {
		const { isLoading, ...rest } = props
		if (isLoading) {
			return <LoadingSpinner />
		}
		return <Component {...(rest as T)} />
	}
}
