import { LoadingSpinner } from "../../ui/LoadingSpinner/LoadingSpinner"

export const withLoading = (Component) => {
	return function WithLoadingComponent({ isLoading, ...props }) {
		if (isLoading) {
			return <LoadingSpinner size="small" />
		}
		return <Component {...props} />
	}
}
