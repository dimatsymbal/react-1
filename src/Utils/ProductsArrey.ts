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
        quantity: 0,
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
        quantity: 11,
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
        images: 'https://content.rozetka.com.ua/goods/images/big/275056540.jpg',
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
        quantity: 0,
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
    {
        id: 40,
        title: 'Sony PlayStation 5 White з Blu-Ray',
        description:
            'Процесор 8-ядерний x86-64 AMD Ryzen Zen 2 (Частота: до 3.5 ГГц)',
        type: 'Ігровa консоль',
        copacity:
            'Оперативна пам`ять GDDR6 16 ГБ AMD Radeon RDNA 2 Bluetooth LAN Wi-Fi',
        price: 1000,
        images: 'https://content2.rozetka.com.ua/goods/images/big/277718304.jpg',
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
        id: 41,
        title: 'Sony PlayStation 5 White Digital Edition',
        description:
            'Процесор 8-ядерний x86-64 AMD Ryzen Zen 2 (Частота: до 3.5 ГГц)',
        type: 'Ігровa консоль',
        copacity:
            'Оперативна пам`ять GDDR6 16 ГБ AMD Radeon RDNA 2 Bluetooth LAN Wi-Fi',
        price: 850,
        images: 'https://content.rozetka.com.ua/goods/images/big/326770453.jpg',
        quantity: 9,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 42,
        title: 'Microsoft Xbox Series X',
        description:
            'Процесор 8-ядерний процесор Custom Zen 2 з тактовою частотою @ 3.8 ГГц',
        type: 'Ігровa консоль',
        copacity: 'Оперативна пам`ять 16 ГБ GDDR6 з 320-бітною шиною',
        price: 850,
        images: 'https://content1.rozetka.com.ua/goods/images/big/276682666.jpg',
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
        id: 43,
        title: 'Бандл Ігрова приставка PS5 PlayStation 5',
        description:
            'Процесор 8-ядерний x86-64 AMD Ryzen Zen 2 (Частота: до 3.5 ГГц)',
        type: 'Ігровa консоль',
        copacity:
            'Оперативна пам`ять GDDR6 16 ГБ AMD Radeon RDNA 2 Bluetooth LAN Wi-Fi',
        price: 1050,
        images: 'https://content2.rozetka.com.ua/goods/images/big/321866143.jpg',
        quantity: 9,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 44,
        title: 'Microsoft Xbox Series S',
        description: 'Оперативна пам`ять 10 ГБ GDDR6, 128-бітна шина',
        type: 'Ігровa консоль',
        copacity:
            'Процесор 8-ядерний процесор Custom Zen 2 з тактовою частотою @ 3.6 ГГц (3.4 ГГЦ із SMT)',
        price: 650,
        images: 'https://content.rozetka.com.ua/goods/images/big/276694901.jpg',
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
        id: 45,
        title: 'Ігрова приставка PlayStation 5 God of War Ragnarok',
        description:
            'Процесор 8-ядерний x86-64 AMD Ryzen Zen 2 (Частота: до 3.5 ГГц)',
        type: 'Ігровa консоль',
        copacity:
            'Оперативна пам`ять GDDR6 16 ГБ AMD Radeon RDNA 2 Bluetooth LAN Wi-Fi',
        price: 1150,
        images: 'https://content1.rozetka.com.ua/goods/images/big/296660377.jpg',
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
        id: 46,
        title: 'Sony Playstation 4 Slim 500GB + Call Of Duty Modern Warfare II',
        description:
            'Процесор 8-ядерний x86-64 AMD Ryzen Zen 2 (Частота: до 3.5 ГГц)',
        type: 'Ігровa консоль',
        copacity:
            'Оперативна пам`ять GDDR6 16 ГБ AMD Radeon RDNA 2 Bluetooth LAN Wi-Fi',
        price: 750,
        images: 'https://content.rozetka.com.ua/goods/images/big/319798457.jpg',
        quantity: 0,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 551,
        title: 'LG OLED65CXPUA 65" 4K Smart OLED TV',
        description: '4K UHD (3840 x 2160) Resolution',
        type: 'Телевізори',
        copacity: 'Dolby Vision IQ, Dolby Atmos, webOS Smart Platform',
        price: 2199,
        images: 'https://content1.rozetka.com.ua/goods/images/big/303985191.jpg',
        quantity: 9,
        extraDesc:
            'Dolby Vision IQ and Dolby Atmos combine to deliver exceptional imaging and audio quality',
        extraDesc2:
            'This LG smart TV features webOS, allowing you to stream your favorite entertainment apps with ease Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 552,
        title: 'Телевізор Hisense 43A63H UltraHD 4K SmartTV',
        description: '4K UHD (3840 x 2160) Resolution',
        type: 'Телевізори',
        copacity: 'Діагональ екрана43" Роздільна здатність 3840x2160',
        price: 1700,
        images: 'https://content.rozetka.com.ua/goods/images/big/327493665.jpg',
        quantity: 2,
        extraDesc:
            'Dolby Vision IQ and Dolby Atmos combine to deliver exceptional imaging and audio quality',
        extraDesc2:
            'This LG smart TV features webOS, allowing you to stream your favorite entertainment apps with ease Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 553,
        title: 'Телевізор LG 43UQ81006LB',
        description: 'LG UHD автоматично розпізнає жанри і оптимізує звучання.',
        type: 'Телевізори',
        copacity:
            'Процесор α5 5-го покоління на основі штучного інтелекту перетворює двоканальний звук на 5.1.2-канальний.',
        price: 2200,
        images: 'https://content1.rozetka.com.ua/goods/images/big/314481842.jpg',
        quantity: 0,
        extraDesc:
            'Dolby Vision IQ and Dolby Atmos combine to deliver exceptional imaging and audio quality',
        extraDesc2:
            'This LG smart TV features webOS, allowing you to stream your favorite entertainment apps with ease Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 554,
        title: 'Телевізор Kivi 43F750NB',
        description: 'Mінімалістичний дизайн з високотехнологічними екранами.',
        type: 'Телевізори',
        copacity:
            'Для нової лінійки KIVI Smart TV 2022 використано сучасний потужний процесор.',
        price: 1650,
        images: 'https://content1.rozetka.com.ua/goods/images/big/306957053.jpg',
        quantity: 1,
        extraDesc:
            'Dolby Vision IQ and Dolby Atmos combine to deliver exceptional imaging and audio quality',
        extraDesc2:
            'This LG smart TV features webOS, allowing you to stream your favorite entertainment apps with ease Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 601,
        title: 'Смарт-годинник Apple Watch Ultra GPS',
        description: 'Cellular 49mm Titanium Case with Blue/Gray Trail Loop',
        type: 'Годинник',
        copacity:
            '49-міліметровий корпусіз титану, який використовується в аерокосмічній галузі, цілодобова робота',
        price: 850,
        images: 'https://content.rozetka.com.ua/goods/images/big/325618213.jpg',
        quantity: 6,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto:
            'https://content.rozetka.com.ua/files/images/original/308935906.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 602,
        title: 'Смарт-годинник Amazfit T-Rex 2 Wild Green',
        description: 'Перед вами модель, що орієнтована на найжорсткіші умови.',
        type: 'Годинник',
        copacity:
            'Amazfit T-Rex 2 — відчуйте справжню силу. "Виживальщики" зможуть сміливо використовувати девайс.',
        price: 1300,
        images: 'https://content1.rozetka.com.ua/goods/images/big/302569547.jpg',
        quantity: 1,
        extraDesc:
            'Dolby Vision IQ and Dolby Atmos combine to deliver exceptional imaging and audio quality',
        extraDesc2:
            'This LG smart TV features webOS, allowing you to stream your favorite entertainment apps with ease Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto: 'https://mediaonecentre.com/images/default/post.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 603,
        title: 'Смарт-годинник Apple Watch Ultra GPS',
        description: 'Cellular 49mm Titanium Case with White Ocean Band',
        type: 'Годинник',
        copacity:
            '49-міліметровий корпусіз титану, який використовується в аерокосмічній галузі, цілодобова робота',
        price: 850,
        images: 'https://content2.rozetka.com.ua/goods/images/big/325621259.jpg',
        quantity: 2,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto:
            'https://content.rozetka.com.ua/files/images/original/308935906.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 604,
        title: 'Смарт-годинник Apple Watch SE (2022) GPS',
        description: '40mm Midnight Aluminium Case with Midnight Sport Band',
        type: 'Годинник',
        copacity:
            '49-міліметровий корпусіз титану, який використовується в аерокосмічній галузі, цілодобова робота',
        price: 550,
        images: 'https://content1.rozetka.com.ua/goods/images/big/325584586.jpg',
        quantity: 12,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto:
            'https://content.rozetka.com.ua/files/images/original/308935906.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
    },
    {
        id: 605,
        title: 'Смарт-годинник Amazfit GTS 4',
        description:
            'Спортивно орієнтований годинник Amazfit GTS 4: отримайте 150+ силових',
        type: 'Годинник',
        copacity:
            'Крім цього, контролюйте дзвінки та відповідайте на них за допомогою зєднання Bluetooth.',
        price: 650,
        images: 'https://content1.rozetka.com.ua/goods/images/big/302566567.jpg',
        quantity: 1,
        extraDesc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraDesc2:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste iusto distinctio at. Cupiditate dolore fugiat excepturi, vero animi, pariatur laborum adipisci temporibus quae magnam ratione consequuntur harum delectus? Vel!',
        extraPhoto:
            'https://content.rozetka.com.ua/files/images/original/308935906.png',
        extraPhoto2:
            'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
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

const productsJson = JSON.stringify(productsArrey)
console.log(productsJson)
