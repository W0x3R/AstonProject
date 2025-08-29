type TItemListProps<T> = {
	items: T[]
	renderItem: (item: T, index: number) => React.ReactNode
}

export const ItemList = <T,>({ items, renderItem }: TItemListProps<T>) => {
	return <>{items.map((item, index) => renderItem(item, index))}</>
}
