export type Products = {
    id: number
    title: string
    description: string
    type: string
    copacity: string
    price: number
    images: string
    quantity: number
    extraDesc?: string
    extraDesc2?: string
    extraPhoto?: string
    extraPhoto2?: string

    category?: string
}

const productsArrey: Products[] = [
    {
        id: 1,
        title: 'iPhone 14 pro Max',
        description: 'Экран (6.1", OLED (Super Retina XDR), 2532x1170)',
        type: 'Телефон',
        copacity:
            'Apple A15 Bionic / двойная основная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ',
        price: 1400,
        images: '/images/iphone13.jpg',
        quantity: 14,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 2,
        title: 'iPhone 13',
        description: 'Екран (6.1", OLED (Super Retina XDR), 2532x1170)',
        type: 'Телефон',
        copacity:
            'Apple A14 Bionic / подвійна основна камера: 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128',
        price: 1250,
        images: '/images/iphone13-pink.jpg',
        quantity: 17,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 3,
        title: 'iPhone 13 pro',
        description: 'Екран (6.1", OLED (Super Retina XDR), 2532x1170)',
        type: 'Телефон',
        copacity:
            'Apple A15 Bionic / подвійна основна камера: 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128',
        price: 1150,
        images: '/images/iphone12.jpg',
        quantity: 8,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 4,
        title: 'iPhone 14 Pro Max',
        description: 'Екран (6.7", OLED (Super Retina XDR), 2796x1290) ',
        type: 'Телефон',
        copacity:
            'Apple A16 Bionic / основна квадро-камера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 256',
        price: 1200,
        images: 'https://content1.rozetka.com.ua/goods/images/big/284920914.jpg',
        quantity: 1,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 5,
        title: 'iPhone 13 pro',
        description: 'Екран (6.1", OLED (Super Retina XDR), 2556x1179) ',
        type: 'Телефон',
        copacity:
            'Apple A15 Bionic / подвійна основна камера: 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 256',
        price: 1090,
        images: 'https://content.rozetka.com.ua/goods/images/big/259416456.jpg',
        quantity: 18,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 6,
        title: 'iPhone 14 Pro',
        description: 'Екран (6.1", OLED (Super Retina XDR), 2532x1170)',
        type: 'Телефон',
        copacity:
            'Apple A16 Bionic / основна квадро-камера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 512',
        price: 1300,
        images: 'https://content2.rozetka.com.ua/goods/images/big/284920812.jpg',
        quantity: 3,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 7,
        title: 'iPhone 14 Plus',
        description: 'Екран (6.7", OLED (Super Retina XDR), 2778x1284)',
        type: 'Телефон',
        copacity:
            'Apple A15 Bionic / подвійна основна камера: 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128',
        price: 600,
        images: 'https://content1.rozetka.com.ua/goods/images/big/284920900.jpg',
        quantity: 8,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 8,
        title: 'iPhone 14',
        description: 'Екран (6.1", OLED (Super Retina XDR), 2532x1170)',
        type: 'Телефон',
        copacity:
            'Apple A16 Bionic / основна квадро-камера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128 ',
        price: 750,
        images: 'https://content.rozetka.com.ua/goods/images/big/284920823.jpg',
        quantity: 21,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 9,
        title: 'iPhone 14 Pro Max',
        description: 'Екран (6.1", OLED (Super Retina XDR), 2556x1179) ',
        type: 'Телефон',
        copacity:
            'Apple A15 Bionic / подвійна основна камера: 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128',
        price: 950,
        images: 'https://content2.rozetka.com.ua/goods/images/big/284920883.jpg',
        quantity: 4,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 113,
        title: 'Apple AirPods 3',
        description:
            '- 100% ОРИГІНАЛЬНІ Apple AirPods ГАРАНТІЯ 1 РІК ЗАВОДСЬКА УПАКОВКА',
        type: 'Навушники',
        copacity:
            'Apple AirPods 2 — вушні вкладки, які встановлюють у зовнішній частині вушної раковини. . ',
        price: 790,
        images: 'https://estore.ua/ua/media/catalog/product/cache/9/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/a/p/apple-airpods-pro-2-mqd83_1_.jpeg',
        quantity: 10,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 114,
        title: 'Apple AirPods 2',
        description:
            '- 100% ОРИГІНАЛЬНІ Apple AirPods ГАРАНТІЯ 1 РІК ЗАВОДСЬКА УПАКОВКА',
        type: 'Навушники',
        copacity: ' (2-го покоління)',
        price: 750,

        images: 'https://estore.ua/ua/media/catalog/product/cache/9/image/600x600/9df78eab33525d08d6e5fb8d27136e95/m/v/mv7n2_1-newpic.jpg',
        quantity: 24,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 115,
        title: 'Apple AirPods Max Space Gray',
        description:
            'AirPods (один наушник): 5.3 г Футляр с поддержкой беспроводной зарядки: 45.2 г',
        type: 'Навушники',
        copacity: ' (3-го покоління)',
        price: 950,
        images: 'https://estore.ua/ua/media/catalog/product/cache/9/image/600x600/9df78eab33525d08d6e5fb8d27136e95/a/i/airpods-max-space-gray_1.jpeg',
        quantity: 1,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 116,
        title: 'EarPods with Lightning Connector',
        description:
            'AirPods (один наушник): 5.3 г Футляр с поддержкой беспроводной зарядки: 45.2 г',
        type: 'Навушники',
        copacity:
            'Якісне звучання без зайвих вібрацій і надійність виробника робить цю гарнітуру популярною',
        price: 650,
        images: 'https://stylus.ua/thumbs/378x378/a2/6f/2648120.jpeg',
        quantity: 2,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 16,
        title: 'Ноутбук Apple MacBook Air 13"',
        description: 'Экран 13.3" Retina (2560x1600) WQXGA, глянцевый',
        type: 'Ноутбук',
        copacity:
            'pple M1 / RAM 8 ГБ / SSD 256 ГБ / Apple M1 Graphics / Wi-Fi / Bluetooth',
        price: 1900,
        images: 'https://content1.rozetka.com.ua/goods/images/big/308887781.jpg',
        quantity: 14,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 17,
        title: 'Ноутбук Apple MacBook Air 13.6"',
        description: 'Экран 13.6" Liquid Retina (2560x1664), глянцевый',
        type: 'Ноутбук',
        copacity:
            'RAM 8 ГБ / SSD 256 ГБ / Apple M2 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Monterey / 1.24 кг / золотой',
        price: 1150,
        images: 'https://content.rozetka.com.ua/goods/images/big/269257669.jpg',
        quantity: 15,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 18,
        title: 'Ноутбук Apple MacBook Pro 16"',
        description:
            'Экран 16.2" Liquid Retina XDR (3456x2234) 120 Гц, глянцевый',
        type: 'Ноутбук',
        copacity:
            'Apple M1 Pro / RAM 16 ГБ / SSD 512 ГБ / Apple M1 Pro Graphics (16 ядер) / Bluetooth ',
        price: 1450,
        images: 'https://content2.rozetka.com.ua/goods/images/big/269256825.jpg',
        quantity: 13,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 19,
        title: 'Ноутбук ACER Nitro 5 AN515-57',
        description: 'Экран 15.6" TN (1920x1080) Full HD, матовый ',
        type: 'Ноутбук',
        copacity:
            'Intel Core i3-1115G4 (3.0 - 4.1 ГГц) / RAM 8 ГБ / SSD 512 ГБ / Intel UHD Graphics',
        price: 950,
        images: 'https://content.rozetka.com.ua/goods/images/big/320954862.jpg',
        quantity: 2,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 20,
        title: 'Ноутбук Lenovo IdeaPad Gaming 3',
        description: 'Экран 15.6" IPS (1920x1080) Full HD 120 Гц, матовый',
        type: 'Ноутбук',
        copacity:
            ' Intel Core i5-12450H (3.3 - 4.4 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050 Ti, 4 ГБ',
        price: 1050,
        images: 'https://content1.rozetka.com.ua/goods/images/big/320917424.jpg',
        quantity: 1,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 21,
        title: 'Ноутбук Acer Aspire 5 A515-45G-R7C8',
        description:
            'Экран 15.6" IPS (1920x1080) Full HD, матовый / AMD Ryzen 3 5300U',
        type: 'Ноутбук',
        copacity: 'RAM 8 ГБ / SSD 512 ГБ / AMD Radeon RX 640, 2 ГБ',
        price: 950,
        images: 'https://content1.rozetka.com.ua/goods/images/big/289930043.jpg',
        quantity: 3,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 22,
        title: 'Ноутбук ASUS Vivobook 16X',
        description: 'Экран 16” IPS (1920x1200) WUXGA+, глянцевый',
        type: 'Ноутбук',
        copacity:
            'AMD Ryzen 5 4600H (3.0 - 4.0 ГГц) / RAM 12 ГБ / SSD 512 ГБ / AMD Radeon Graphics / без ОД ',
        price: 1300,
        images: 'https://content.rozetka.com.ua/goods/images/big/302547833.jpg',
        quantity: 6,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 23,
        title: 'Ноутбук Lenovo IdeaPad 1 15IGL7',
        description: 'Экран 15.6" TN, HD, матовый ',
        type: 'Ноутбук',
        copacity:
            'Intel Celeron N5030 (1.1 - 3.1 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics 600',
        price: 1190,
        images: 'https://content.rozetka.com.ua/goods/images/big/304993193.jpg',
        quantity: 24,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 24,
        title: 'Ноутбук ASUS VivoBook 15',
        description: 'Экран 15.6" OLED (1920x1080) Full HD, глянцевый',
        type: 'Ноутбук',
        copacity:
            'Intel Core i3-1115G4 (3.0 - 4.1 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics',
        price: 1000,
        images: 'https://content.rozetka.com.ua/goods/images/big/298509428.jpg',
        quantity: 14,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 25,
        title: 'Ноутбук ASUS Laptop X515EA',
        description: 'Экран 15.6” IPS (1920x1080) Full HD, матовый',
        type: 'Ноутбук',
        copacity:
            'Intel Core i3-1115G4 (3.0 - 4.1 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics',
        price: 800,
        images: 'https://content1.rozetka.com.ua/goods/images/big/304210461.jpg',
        quantity: 7,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
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
        quantity: 14,
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
        quantity: 14,
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
        quantity: 14,
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
