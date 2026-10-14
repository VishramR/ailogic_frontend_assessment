export interface Product{
    id: number;
    name: string;
    image: string;
    price: number
}

export interface CartItem{
    product: Product;
    quantity: number;
}

export interface AuthState{
    isAuthenticated: boolean
}
