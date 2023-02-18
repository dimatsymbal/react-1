export type Products = {
    id: number
    title: string
    description: string
    type: string
    copacity: string
    price: number
    images: string
}

const productsArrey: Products[] = [
    {
        id: 1,
        title: 'iPhone 14 pro Max',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '256 GB',
        price: 1400,
        images: '/images/iphone13.jpg',
    },
    {
        id: 2,
        title: 'iPhone 14 pro',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '128 GB',
        price: 1250,
        images: '/images/iphone13-pink.jpg',
    },
    {
        id: 3,
        title: 'iPhone 14',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '64 GB',
        price: 1150,
        images: '/images/iphone12.jpg',
    },
    {
        id: 4,
        title: 'iPhone 13 pro Max',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '512 GB',
        price: 1200,
        images: '/images/iphone12-pro.jpg',
    },
    {
        id: 5,
        title: 'iPhone 13 pro',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '256 GB',
        price: 1090,
        images: '/images/iphone11.jpg',
    },
    {
        id: 6,
        title: 'iPhone 13',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '128 GB',
        price: 1300,
        images: '/images/iphone11-y.jpg',
    },
    {
        id: 7,
        title: 'iPhone 8 pro',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '256 GB',
        price: 600,
        images: '/images/iphone11.jpg',
    },
    {
        id: 8,
        title: 'iPhone 10',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '128 GB',
        price: 750,
        images: '/images/iphone11-y.jpg',
    },
    {
        id: 9,
        title: 'iPhone 10 pro',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '64 GB',
        price: 950,
        images: '/images/iphone11-y.jpg',
    },
]

export const getProductsObject = (array: Products[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArrey
