import { v4 as uuid } from 'uuid';

export const DB_NAME = 'ecommerce';

export const products = [
  {
    name: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)',
    images: {
      url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
      detailUrl:
        'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
    },
    category: 'Home & Kitchen',

    price: 625,

    quantity: 1,
    description:
      'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
    discount: 'Extra 10% Off',
    tagline: 'Deal of the day',
    user: '6671a136f83bacce175418d6',
  },
  {
    name: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)',
    images: {
      url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
      detailUrl:
        'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
    },

    category: 'Sandwich Makers',
    price: 1499,
    quantity: 1,
    description:
      'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
    discount: 'From 99+5% Off',
    tagline: 'Pestige, Nova & more',
    user: '6671a136f83bacce175418d6',
  },
  {
    images: {
      url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70',
      detailUrl:
        'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70',
    },
    category: 'Fitness Gear',
    name: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)',

    price: 499,

    quantity: 1,
    description:
      'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
    discount: 'Upto 70% Off',
    tagline: 'Deal of the Day',
    user: '6671a136f83bacce175418d6',
  },
  {
    images: {
      url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
      detailUrl:
        'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
    },
    category: 'Smart Watches',
    name: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
    price: 6999,

    quantity: 1,
    description:
      'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
    discount: 'Grab Now',
    tagline: 'Best Seller',
    user: '6671a136f83bacce175418d6',
  },
  {
    images: {
      url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
      detailUrl:
        'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
    },
    category: 'Trimmers, Dryers & more',
    name: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)',

    price: 1899,

    quantity: 1,
    description: 'Very good trimmer',
    discount: 'From ₹499',
    tagline: 'Kubra, Nova & more',
    user: '6671a136f83bacce175418d6',
  },
  {
    images: {
      url: 'https://rukminim1.flixcart.com/image/150/150/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70',
      detailUrl:
        'https://rukminim1.flixcart.com/image/416/416/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70',
    },
    category: 'Table Fans',
    name: 'Portable 300 mm Ultra High Speed 3 Blade Table Fan  (Black, Pack of 1)',
    price: 2250,

    quantity: 1,
    description:
      'Table Fan. Perfect size fan for use on a table, desk or in an RV. Whisper quiet, powerful airflow and reliable operation in a compact 6" size. Two adjustable speeds to customize airflow: high or low settings. Tough break-resistant ABS plastic blades. ',
    discount: 'Minimum 40% Off',
    tagline: 'Top Selling',
    user: '6671a136f83bacce175418d6',
  },
  {
    images: {
      url: 'https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70',
      detailUrl:
        'https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70',
    },
    category: 'Headphones',
    name: 'boAt Rockerz 235v2 with ASAP charging Version 5.0 Bluetooth Headset ',

    price: 2990,
    quantity: 1,
    description:
      'Let music brighten up your mood anytime, anywhere with the boAt 235v2 Fast Charging Bluetooth Headset. This Bluetooth headset features a Call Vibration Alert, a Fast Charging Technology, and Easy Access Controls to listen to and manage your favorite music with ease.',
    discount: 'Minimum 50% Off',
    tagline: 'Grab Now!',
    user: '6671a136f83bacce175418d6',
  },
];

const paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;

const paytmParams = {};

paytmParams['MID'] = process.env.PAYTM_MID;

paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
paytmParams['EMAIL'] = 'kunaltyagi@gmail.com';
paytmParams['MOBILE_NO'] = '1234567852';

export { paytmMerchantkey, paytmParams };
