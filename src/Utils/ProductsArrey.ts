export type Products = {
    id: number
    title: string
    description: string
    type: string
    copacity: string
    price: number
    images: string
    category: string
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
        category: 'phones',
    },
    {
        id: 2,
        title: 'iPhone 14 pro',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '128 GB',
        price: 1250,
        images: '/images/iphone13-pink.jpg',
        category: 'phones',
    },
    {
        id: 3,
        title: 'iPhone 13 pro',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '64 GB',
        price: 1150,
        images: '/images/iphone12.jpg',
        category: 'phones',
    },
    {
        id: 4,
        title: 'iPhone 13 pro Max',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '512 GB',
        price: 1200,
        images: '/images/iphone12-pro.jpg',
        category: 'phones',
    },
    {
        id: 5,
        title: 'iPhone 13 pro',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '256 GB',
        price: 1090,
        images: '/images/iphone11.jpg',
        category: 'phones',
    },
    {
        id: 6,
        title: 'iPhone 13',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '128 GB',
        price: 1300,
        images: '/images/iphone11-y.jpg',
        category: 'phones',
    },
    {
        id: 7,
        title: 'iPhone 8 pro',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '256 GB',
        price: 600,
        images: '/images/iphone11.jpg',
        category: 'phones',
    },
    {
        id: 8,
        title: 'iPhone 10',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '128 GB',
        price: 750,
        images: '/images/iphone11-y.jpg',
        category: 'phones',
    },
    {
        id: 9,
        title: 'iPhone 10 pro',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '64 GB',
        price: 950,
        images: '/images/iphone11-y.jpg',
        category: 'phones',
    },
    {
        id: 13,
        title: 'Apple AirPods 3',
        description:
            '- 100% ОРИГІНАЛЬНІ Apple AirPods ГАРАНТІЯ 1 РІК ЗАВОДСЬКА УПАКОВКА',
        type: 'Навушники',
        copacity: '',
        price: 790,
        images: 'https://estore.ua/ua/media/catalog/product/cache/9/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/a/p/apple-airpods-pro-2-mqd83_1_.jpeg',
        category: 'headphones',
    },
    {
        id: 14,
        title: 'Apple AirPods 2',
        description:
            '- 100% ОРИГІНАЛЬНІ Apple AirPods ГАРАНТІЯ 1 РІК ЗАВОДСЬКА УПАКОВКА',
        type: 'Навушники',
        copacity: '',
        price: 750,
        images: 'https://estore.ua/ua/media/catalog/product/cache/9/image/600x600/9df78eab33525d08d6e5fb8d27136e95/m/v/mv7n2_1-newpic.jpg',
        category: 'headphones',
    },
    {
        id: 15,
        title: 'Apple AirPods Max Space Gray',
        description: 'bebebebeb',
        type: 'Навушники',
        copacity: '',
        price: 950,
        images: 'https://estore.ua/ua/media/catalog/product/cache/9/image/600x600/9df78eab33525d08d6e5fb8d27136e95/a/i/airpods-max-space-gray_1.jpeg',
        category: 'headphones',
    },
    {
        id: 16,
        title: 'Ноутбук Apple MacBook Pro',
        description: '16" M2 Pro 1TB 2023 Space Gray',
        type: 'Ноутбук',
        copacity: '',
        price: 1900,
        images: 'https://content1.rozetka.com.ua/goods/images/big/308887781.jpg',
        category: 'laptops',
    },
    {
        id: 17,
        title: 'Ноутбук Apple MacBook Air',
        description: '13" M1 256GB 2020',
        type: 'Ноутбук',
        copacity: '',
        price: 1150,
        images: 'https://content.rozetka.com.ua/goods/images/big/30872664.jpg',
        category: 'laptops',
    },
    {
        id: 18,
        title: 'Ноутбук Apple MacBook Air',
        description: '13.6" M2 256GB 2022 Space Gray',
        type: 'Ноутбук',
        copacity: '',
        price: 1450,
        images: 'https://content2.rozetka.com.ua/goods/images/big/269256825.jpg',
        category: 'laptops',
    },

    // ____________________________________________________________________________________________
    // ____________________________________________________________________________________________
    {
        id: 10,
        title: 'iPhone 140 pro',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '256 GB',
        price: 600,
        images: '/images/iphone11.jpg',
        category: 'task2',
    },
    {
        id: 11,
        title: 'iPhone 100',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '128 GB',
        price: 750,
        images: '/images/iphone11-y.jpg',
        category: 'task2',
    },
    {
        id: 12,
        title: 'iPhone 110 pro',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '64 GB',
        price: 950,
        images: '/images/iphone11-y.jpg',
        category: 'task2',
    },
    // ____________________________________________________________________________________________
    // ____________________________________________________________________________________________
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
