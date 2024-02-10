export interface IShopItem {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

export interface ICategory {
    id: number;
    name: string
}

export interface ICartItem {
    id: number;
    item_id: number;
    quantity: number;
    item?: IShopItem;
}

export interface IGrandTotal {
    item_count: number;
    discount: number;
    total_before_discount: number;
    total_after_discount: number
}

export type TShopItems = Array<IShopItem>;

export type TCartItems = Array<ICartItem>;