const join = require('url-join');
const _ = require('lodash');

module.exports = {
  getSeoInfo() {
    return (
      {
      "/index/": {
        "url_path": "/index/",
        "title": "UgandaBooking.com - Hotels in Uganda",
        "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
        "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, "
      },
      "/hotels/": {
        "url_path": "/hotels/",
        "title": "UgandaBooking.com - Accommodations in Uganda",
        "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
        "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, "
      },
      "/contact-us/": {
        "url_path": "/contact-us/",
        "title": "UgandaBooking.com - Contact Us",
        "description": "Whether you’re looking for hotels, homes, or holiday rentals in Uganda, you’ll always find the guaranteed lowest price. Browse our  accommodations in over 500 accommodations.",
        "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, "
      },
      "": {
        "url_path": "",
        "title": "UgandaBooking.com - Hotels in Uganda",
        "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
        "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, "
      },
      "/sign-in/": {
        "url_path": "/sign-in/",
        "title": "UgandaBooking.com - Sign In",
        "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
        "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, "
      },
      "/reset-password/": {
        "url_path": "/reset-password/",
        "title": "UgandaBooking.com - Reset Password",
        "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
        "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, "
      },
      "/about-us/": {
        "url_path": "/about-us/",
        "title": "UgandaBooking.com - About Us",
        "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
        "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, "
      },
      "/blogs/": {
        "url_path": "/blogs/",
        "title": "UgandaBooking.com - Blogs",
        "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
        "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, "
      },
      "/my-account/": {
        "url_path": "/my-account/",
        "title": "UgandaBooking.com - My Account",
        "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
        "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, "
      },
      "/terms-of-use/": {
        "url_path": "/terms-of-use/",
        "title": "UgandaBooking.com - Terms of Use",
        "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
        "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, "
      },
      "/privacy-policy/": {
        "url_path": "/privacy-policy/",
        "title": "UgandaBooking.com - Privacy Policy",
        "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
        "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, "
      },
      "/error/": {
        "url_path": "/error/",
        "title": "UgandaBooking.com - Page Not Found",
        "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
        "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, "
      },
      "/your-trip/": {
        "url_path": "/your-trip/",
        "title": "UgandaBooking.com - Your Trip ",
        "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. UgandaBooking also offers detailed vetted country information",
        "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, "
      },
      "/apartment/kampala-glenville-suites/1/": {
        "url_path": "/apartment/kampala-glenville-suites/1/",
        "title": "UgandaBooking.com - Glenville Suites - One Bedroom Serviced Apartments",
        "description": "Glenville Suites has a clean and comfortable fully furnished 16 serviced units. It is located in the Nsambya neighborhood of Kampala. Close to the US Embassy, with ...",
        "keywords": "Glenville Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-apricot-guesthouse/10/": {
        "url_path": "/apartment/kampala-apricot-guesthouse/10/",
        "title": "UgandaBooking.com - Apricot Guesthouse - One Bedroom",
        "description": "Apricot guesthouse is a bed and breakfast in Muyenga, off Roche Close, Tank  Hill Road. It is 5 kms/10 mins drive away from city center",
        "keywords": "Apricot Guesthouse,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-apricot-guesthouse/11/": {
        "url_path": "/apartment/kampala-apricot-guesthouse/11/",
        "title": "UgandaBooking.com - Apricot Guesthouse - Two Bedroom",
        "description": "Apricot guesthouse is a bed and breakfast in Muyenga, off Roche Close, Tank  Hill Road. It is 5 kms/10 mins drive away from city center",
        "keywords": "Apricot Guesthouse,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-apricot-guesthouse/12/": {
        "url_path": "/apartment/kampala-apricot-guesthouse/12/",
        "title": "UgandaBooking.com - Apricot Guesthouse - Three Bedroom",
        "description": "Apricot guesthouse is a bed and breakfast in Muyenga, off Roche Close, Tank  Hill Road. It is 5 kms/10 mins drive away from city center",
        "keywords": "Apricot Guesthouse,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-adonai-guesthouse/16/": {
        "url_path": "/apartment/kampala-adonai-guesthouse/16/",
        "title": "UgandaBooking.com - Adonai Guesthouse - Single Bedroom",
        "description": "Located in Lower Muyenga, off of Lubobo Close, Tank Hill Read a 10 minutes drive from downtown Kampala, within easy walking distance to",
        "keywords": "Adonai Guesthouse,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-adonai-guesthouse/17/": {
        "url_path": "/apartment/kampala-adonai-guesthouse/17/",
        "title": "UgandaBooking.com - Adonai Guesthouse - Twin Bedroom",
        "description": "Located in Lower Muyenga, off of Lubobo Close, Tank Hill Read a 10 minutes drive from downtown Kampala, within easy walking distance to",
        "keywords": "Adonai Guesthouse,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-adonai-guesthouse/18/": {
        "url_path": "/apartment/kampala-adonai-guesthouse/18/",
        "title": "UgandaBooking.com - Adonai Guesthouse - Triple Bedroom",
        "description": "Located in Lower Muyenga, off of Lubobo Close, Tank Hill Read a 10 minutes drive from downtown Kampala, within easy walking distance to",
        "keywords": "Adonai Guesthouse,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-adonai-guesthouse/19/": {
        "url_path": "/apartment/kampala-adonai-guesthouse/19/",
        "title": "UgandaBooking.com - Adonai Guesthouse - Family Wing",
        "description": "Located in Lower Muyenga, off of Lubobo Close, Tank Hill Read a 10 minutes drive from downtown Kampala, within easy walking distance to",
        "keywords": "Adonai Guesthouse,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-papaya-holiday-home/20/": {
        "url_path": "/apartment/kampala-papaya-holiday-home/20/",
        "title": "UgandaBooking.com - Papaya Holiday Home - One Bedroom",
        "description": "Papaya Holiday home is located in Muyenga, a beautiful home with a large garden and fantastic views just 15 minutes drive from downtown",
        "keywords": "Papaya Holiday Home,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-papaya-holiday-home/21/": {
        "url_path": "/apartment/kampala-papaya-holiday-home/21/",
        "title": "UgandaBooking.com - Papaya Holiday Home - Two Bedroom",
        "description": "Papaya Holiday home is located in Muyenga, a beautiful home with a large garden and fantastic views just 15 minutes drive from downtown",
        "keywords": "Papaya Holiday Home,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-tal-cottages/25/": {
        "url_path": "/apartment/kampala-tal-cottages/25/",
        "title": "UgandaBooking.com - Tal Cottages - Main Building Executive",
        "description": "Located in the picturesque neighborhood of Rubaga, The Cottages offer an eclectic mix of accommodation in a family friendly and relaxing ...",
        "keywords": "Tal Cottages,cottage in Kampala,cottage in Uganda,Cottage in Kampala,Cottage in Uganda,UgandaBooking"
      },
      "/apartment/kampala-tal-cottages/26/": {
        "url_path": "/apartment/kampala-tal-cottages/26/",
        "title": "UgandaBooking.com - Tal Cottages - Main Building Deluxe",
        "description": "Located in the picturesque neighborhood of Rubaga, The Cottages offer an eclectic mix of accommodation in a family friendly and relaxing ...",
        "keywords": "Tal Cottages,cottage in Kampala,cottage in Uganda,Cottage in Kampala,Cottage in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mulago-hospital-guest-house/43/": {
        "url_path": "/apartment/kampala-mulago-hospital-guest-house/43/",
        "title": "UgandaBooking.com - Mulago Hospital Guest House - Execuive",
        "description": "Mulago Hospital Guest House is luxarious guest house located infront of Mulago Hospital. Its close proximity to the National Referral Hospital and Medical Training facilities provides ...",
        "keywords": "Mulago Hospital Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mulago-hospital-guest-house/44/": {
        "url_path": "/apartment/kampala-mulago-hospital-guest-house/44/",
        "title": "UgandaBooking.com - Mulago Hospital Guest House - Luxury",
        "description": "Mulago Hospital Guest House is luxarious guest house located infront of Mulago Hospital. Its close proximity to the National Referral Hospital and Medical Training facilities provides ...",
        "keywords": "Mulago Hospital Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mulago-hospital-guest-house/45/": {
        "url_path": "/apartment/kampala-mulago-hospital-guest-house/45/",
        "title": "UgandaBooking.com - Mulago Hospital Guest House - Luxury Twin",
        "description": "Mulago Hospital Guest House is luxarious guest house located infront of Mulago Hospital. Its close proximity to the National Referral Hospital and Medical Training facilities provides ...",
        "keywords": "Mulago Hospital Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mulago-hospital-guest-house/49/": {
        "url_path": "/apartment/kampala-mulago-hospital-guest-house/49/",
        "title": "UgandaBooking.com - Mulago Hospital Guest House - Two Room Apartment",
        "description": "Mulago Hospital Guest House is luxarious guest house located infront of Mulago Hospital. Its close proximity to the National Referral Hospital and Medical Training facilities provides ...",
        "keywords": "Mulago Hospital Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mulago-bed-breakfast/50/": {
        "url_path": "/apartment/kampala-mulago-bed-breakfast/50/",
        "title": "UgandaBooking.com - Mulago Bed & Breakfast - Standard Room",
        "description": "Mulago Bed and Breakfast is a decent, quiet, rustic homely 12 units accomodation 3Km from Kisementi, Wandegeya and Makerere University.",
        "keywords": "Mulago Bed & Breakfast,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mulago-bed-breakfast/51/": {
        "url_path": "/apartment/kampala-mulago-bed-breakfast/51/",
        "title": "UgandaBooking.com - Mulago Bed & Breakfast - Room with Balcony",
        "description": "Mulago Bed and Breakfast is a decent, quiet, rustic homely 12 units accomodation 3Km from Kisementi, Wandegeya and Makerere University.",
        "keywords": "Mulago Bed & Breakfast,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mulago-bed-breakfast/52/": {
        "url_path": "/apartment/kampala-mulago-bed-breakfast/52/",
        "title": "UgandaBooking.com - Mulago Bed & Breakfast - Family Room",
        "description": "Mulago Bed and Breakfast is a decent, quiet, rustic homely 12 units accomodation 3Km from Kisementi, Wandegeya and Makerere University.",
        "keywords": "Mulago Bed & Breakfast,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-bukoto-guest-house/53/": {
        "url_path": "/apartment/kampala-bukoto-guest-house/53/",
        "title": "UgandaBooking.com - Bukoto Guest House - Single Room",
        "description": "Bukoto guest house offers you a unique expereince, where you enjoy the special added comfort and spaciousness of a suite without spending much",
        "keywords": "Bukoto Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-bukoto-guest-house/54/": {
        "url_path": "/apartment/kampala-bukoto-guest-house/54/",
        "title": "UgandaBooking.com - Bukoto Guest House - Double Room",
        "description": "Bukoto guest house offers you a unique expereince, where you enjoy the special added comfort and spaciousness of a suite without spending much",
        "keywords": "Bukoto Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-royal-suites/55/": {
        "url_path": "/apartment/kampala-royal-suites/55/",
        "title": "UgandaBooking.com - Royal Suites - Studio Suite",
        "description": "In the heart of Kampala's up market environs of Bugolobi, Royal Suites is a hub of world class accommodation (short/long stay)",
        "keywords": "Royal Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-royal-suites/56/": {
        "url_path": "/apartment/kampala-royal-suites/56/",
        "title": "UgandaBooking.com - Royal Suites - One Bed Room",
        "description": "In the heart of Kampala's up market environs of Bugolobi, Royal Suites is a hub of world class accommodation (short/long stay)",
        "keywords": "Royal Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-royal-suites/57/": {
        "url_path": "/apartment/kampala-royal-suites/57/",
        "title": "UgandaBooking.com - Royal Suites - Two Bed Room",
        "description": "In the heart of Kampala's up market environs of Bugolobi, Royal Suites is a hub of world class accommodation (short/long stay)",
        "keywords": "Royal Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-royal-suites/58/": {
        "url_path": "/apartment/kampala-royal-suites/58/",
        "title": "UgandaBooking.com - Royal Suites - Three Bed Room",
        "description": "In the heart of Kampala's up market environs of Bugolobi, Royal Suites is a hub of world class accommodation (short/long stay)",
        "keywords": "Royal Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-dolphin-suites/59/": {
        "url_path": "/apartment/kampala-dolphin-suites/59/",
        "title": "UgandaBooking.com - Dolphin Suites - Single Deluxes",
        "description": "Dolphin Suites is one of the leading hotels in Kampala located in Bugolobi a suburb of Kampala, It is a unique hotel offering 27 luxurious rooms ",
        "keywords": "Dolphin Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-dolphin-suites/60/": {
        "url_path": "/apartment/kampala-dolphin-suites/60/",
        "title": "UgandaBooking.com - Dolphin Suites - Twin Rooms",
        "description": "Dolphin Suites is one of the leading hotels in Kampala located in Bugolobi a suburb of Kampala, It is a unique hotel offering 27 luxurious rooms ",
        "keywords": "Dolphin Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-duke-apartments/61/": {
        "url_path": "/apartment/kampala-duke-apartments/61/",
        "title": "UgandaBooking.com - Duke Apartments - Two Bed Room Apartment",
        "description": "Duke Apartments are executive fully furnished apartments located in Naayal, Kampala. This is fully furnshied apartments",
        "keywords": "Duke Apartments,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-eight-winx-hotel/62/": {
        "url_path": "/apartment/kampala-eight-winx-hotel/62/",
        "title": "UgandaBooking.com - Eight Winx Hotel - Single Room",
        "description": "With sophisticated décor, floor to ceiling windows and a great location, this hotel allows visitors to get away from it all, while still enjoying the ...",
        "keywords": "Eight Winx Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-eight-winx-hotel/63/": {
        "url_path": "/apartment/kampala-eight-winx-hotel/63/",
        "title": "UgandaBooking.com - Eight Winx Hotel - Double Room",
        "description": "With sophisticated décor, floor to ceiling windows and a great location, this hotel allows visitors to get away from it all, while still enjoying the ...",
        "keywords": "Eight Winx Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-eight-winx-hotel/64/": {
        "url_path": "/apartment/kampala-eight-winx-hotel/64/",
        "title": "UgandaBooking.com - Eight Winx Hotel - Twin Room",
        "description": "With sophisticated décor, floor to ceiling windows and a great location, this hotel allows visitors to get away from it all, while still enjoying the ...",
        "keywords": "Eight Winx Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-eight-winx-hotel/65/": {
        "url_path": "/apartment/kampala-eight-winx-hotel/65/",
        "title": "UgandaBooking.com - Eight Winx Hotel - Suite Room",
        "description": "With sophisticated décor, floor to ceiling windows and a great location, this hotel allows visitors to get away from it all, while still enjoying the ...",
        "keywords": "Eight Winx Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-vision-hotel/66/": {
        "url_path": "/apartment/kampala-vision-hotel/66/",
        "title": "UgandaBooking.com - Vision Hotel - Single Bed",
        "description": "Nestled near the King’s Palace, Vision Hotel gives guests a clean, comfortable and affordable stay while in Uganda’s capital ...",
        "keywords": "Vision Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-vision-hotel/67/": {
        "url_path": "/apartment/kampala-vision-hotel/67/",
        "title": "UgandaBooking.com - Vision Hotel - Double Bed",
        "description": "Nestled near the King’s Palace, Vision Hotel gives guests a clean, comfortable and affordable stay while in Uganda’s capital ...",
        "keywords": "Vision Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-vision-hotel/68/": {
        "url_path": "/apartment/kampala-vision-hotel/68/",
        "title": "UgandaBooking.com - Vision Hotel - Twin Bed",
        "description": "Nestled near the King’s Palace, Vision Hotel gives guests a clean, comfortable and affordable stay while in Uganda’s capital ...",
        "keywords": "Vision Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-val-heights-hotel/69/": {
        "url_path": "/apartment/kampala-val-heights-hotel/69/",
        "title": "UgandaBooking.com - Val Heights Hotel - Single Bed",
        "description": "Val Heights Hotel gives visitors peace of mind in a clean, modern and comfortable facility. Val Heights Hotel offers travelers ... ",
        "keywords": "Val Heights Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-val-heights-hotel/70/": {
        "url_path": "/apartment/kampala-val-heights-hotel/70/",
        "title": "UgandaBooking.com - Val Heights Hotel - Double Bed",
        "description": "Val Heights Hotel gives visitors peace of mind in a clean, modern and comfortable facility. Val Heights Hotel offers travelers ... ",
        "keywords": "Val Heights Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-val-heights-hotel/71/": {
        "url_path": "/apartment/kampala-val-heights-hotel/71/",
        "title": "UgandaBooking.com - Val Heights Hotel - Twin Bed",
        "description": "Val Heights Hotel gives visitors peace of mind in a clean, modern and comfortable facility. Val Heights Hotel offers travelers ... ",
        "keywords": "Val Heights Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-royal-prince-hotel/72/": {
        "url_path": "/apartment/kampala-royal-prince-hotel/72/",
        "title": "UgandaBooking.com - Royal Prince Hotel - Single Bed",
        "description": "Near major marketplaces and cultural areas such as the King’s Palace, this hotel lets guests settle into the heart of Kampala ...",
        "keywords": "Royal Prince Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-royal-prince-hotel/73/": {
        "url_path": "/apartment/kampala-royal-prince-hotel/73/",
        "title": "UgandaBooking.com - Royal Prince Hotel - Double Bed",
        "description": "Near major marketplaces and cultural areas such as the King’s Palace, this hotel lets guests settle into the heart of Kampala ...",
        "keywords": "Royal Prince Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-royal-prince-hotel/74/": {
        "url_path": "/apartment/kampala-royal-prince-hotel/74/",
        "title": "UgandaBooking.com - Royal Prince Hotel - Luxury Double Bed",
        "description": "Near major marketplaces and cultural areas such as the King’s Palace, this hotel lets guests settle into the heart of Kampala ...",
        "keywords": "Royal Prince Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-royal-prince-hotel/75/": {
        "url_path": "/apartment/kampala-royal-prince-hotel/75/",
        "title": "UgandaBooking.com - Royal Prince Hotel - Executive Bed",
        "description": "Near major marketplaces and cultural areas such as the King’s Palace, this hotel lets guests settle into the heart of Kampala ...",
        "keywords": "Royal Prince Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-sojovalo/76/": {
        "url_path": "/apartment/kampala-hotel-sojovalo/76/",
        "title": "UgandaBooking.com - Hotel Sojovalo - Single Deluxe",
        "description": "With sleek décor and amenities for business and leisure travelers alike, this hotel offers world class service in one of Kampala’s oldest ...",
        "keywords": "Hotel Sojovalo,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-sojovalo/77/": {
        "url_path": "/apartment/kampala-hotel-sojovalo/77/",
        "title": "UgandaBooking.com - Hotel Sojovalo - Twin Deluxe",
        "description": "With sleek décor and amenities for business and leisure travelers alike, this hotel offers world class service in one of Kampala’s oldest ...",
        "keywords": "Hotel Sojovalo,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-sojovalo/78/": {
        "url_path": "/apartment/kampala-hotel-sojovalo/78/",
        "title": "UgandaBooking.com - Hotel Sojovalo - Double Deluxe",
        "description": "With sleek décor and amenities for business and leisure travelers alike, this hotel offers world class service in one of Kampala’s oldest ...",
        "keywords": "Hotel Sojovalo,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-sojovalo/79/": {
        "url_path": "/apartment/kampala-hotel-sojovalo/79/",
        "title": "UgandaBooking.com - Hotel Sojovalo - Executive Suite",
        "description": "With sleek décor and amenities for business and leisure travelers alike, this hotel offers world class service in one of Kampala’s oldest ...",
        "keywords": "Hotel Sojovalo,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-gold-corner-guest-house/80/": {
        "url_path": "/apartment/kampala-gold-corner-guest-house/80/",
        "title": "UgandaBooking.com - Gold Corner Guest House - Single Bed",
        "description": "This guesthouse allows visitors a glimpse into one of Kampala’s oldest neighborhoods, while remaining conveniently located ...",
        "keywords": "Gold Corner Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-gold-corner-guest-house/81/": {
        "url_path": "/apartment/kampala-gold-corner-guest-house/81/",
        "title": "UgandaBooking.com - Gold Corner Guest House - Deluxe Bed",
        "description": "This guesthouse allows visitors a glimpse into one of Kampala’s oldest neighborhoods, while remaining conveniently located ...",
        "keywords": "Gold Corner Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-gold-corner-guest-house/82/": {
        "url_path": "/apartment/kampala-gold-corner-guest-house/82/",
        "title": "UgandaBooking.com - Gold Corner Guest House - Double Bed",
        "description": "This guesthouse allows visitors a glimpse into one of Kampala’s oldest neighborhoods, while remaining conveniently located ...",
        "keywords": "Gold Corner Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-gold-corner-guest-house/83/": {
        "url_path": "/apartment/kampala-gold-corner-guest-house/83/",
        "title": "UgandaBooking.com - Gold Corner Guest House - Master Bed",
        "description": "This guesthouse allows visitors a glimpse into one of Kampala’s oldest neighborhoods, while remaining conveniently located ...",
        "keywords": "Gold Corner Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-crown-jakiba-hotel/101/": {
        "url_path": "/apartment/kampala-crown-jakiba-hotel/101/",
        "title": "UgandaBooking.com - Crown Jakiba Hotel - Single Bed",
        "description": "With sleek design and plenty of amenities, this hotel takes you into the heart of downtown Kampala with unrivaled convenience ...",
        "keywords": "Crown Jakiba Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-crown-jakiba-hotel/102/": {
        "url_path": "/apartment/kampala-crown-jakiba-hotel/102/",
        "title": "UgandaBooking.com - Crown Jakiba Hotel - Single Deluxe",
        "description": "With sleek design and plenty of amenities, this hotel takes you into the heart of downtown Kampala with unrivaled convenience ...",
        "keywords": "Crown Jakiba Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-crown-jakiba-hotel/103/": {
        "url_path": "/apartment/kampala-crown-jakiba-hotel/103/",
        "title": "UgandaBooking.com - Crown Jakiba Hotel - Twin Bed",
        "description": "With sleek design and plenty of amenities, this hotel takes you into the heart of downtown Kampala with unrivaled convenience ...",
        "keywords": "Crown Jakiba Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-crown-jakiba-hotel/104/": {
        "url_path": "/apartment/kampala-crown-jakiba-hotel/104/",
        "title": "UgandaBooking.com - Crown Jakiba Hotel - Executive Suite",
        "description": "With sleek design and plenty of amenities, this hotel takes you into the heart of downtown Kampala with unrivaled convenience ...",
        "keywords": "Crown Jakiba Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-crown-jakiba-hotel/105/": {
        "url_path": "/apartment/kampala-crown-jakiba-hotel/105/",
        "title": "UgandaBooking.com - Crown Jakiba Hotel - Apartment Bed",
        "description": "With sleek design and plenty of amenities, this hotel takes you into the heart of downtown Kampala with unrivaled convenience ...",
        "keywords": "Crown Jakiba Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-crown-jakiba-hotel/106/": {
        "url_path": "/apartment/kampala-crown-jakiba-hotel/106/",
        "title": "UgandaBooking.com - Crown Jakiba Hotel - Triple Room",
        "description": "With sleek design and plenty of amenities, this hotel takes you into the heart of downtown Kampala with unrivaled convenience ...",
        "keywords": "Crown Jakiba Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-oasis-top-hotel/111/": {
        "url_path": "/apartment/kampala-oasis-top-hotel/111/",
        "title": "UgandaBooking.com - Oasis Top Hotel - Single Bed",
        "description": "This clean and secure retreat allows visitors to stay close to the action while still giving them a quiet spot to rest.",
        "keywords": "Oasis Top Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-oasis-top-hotel/112/": {
        "url_path": "/apartment/kampala-oasis-top-hotel/112/",
        "title": "UgandaBooking.com - Oasis Top Hotel - Double Bed",
        "description": "This clean and secure retreat allows visitors to stay close to the action while still giving them a quiet spot to rest.",
        "keywords": "Oasis Top Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-oasis-top-hotel/113/": {
        "url_path": "/apartment/kampala-oasis-top-hotel/113/",
        "title": "UgandaBooking.com - Oasis Top Hotel - Twin Bed",
        "description": "This clean and secure retreat allows visitors to stay close to the action while still giving them a quiet spot to rest.",
        "keywords": "Oasis Top Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-karon-hotel/114/": {
        "url_path": "/apartment/kampala-karon-hotel/114/",
        "title": "UgandaBooking.com - Karon Hotel - Double Room",
        "description": "UgandaBooking.com - Karon Hotel - Double Room",
        "keywords": "Karon Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-karon-hotel/115/": {
        "url_path": "/apartment/kampala-karon-hotel/115/",
        "title": "UgandaBooking.com - Karon Hotel - Single Room",
        "description": "UgandaBooking.com - Karon Hotel - Single Room",
        "keywords": "Karon Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-karon-hotel/116/": {
        "url_path": "/apartment/kampala-karon-hotel/116/",
        "title": "UgandaBooking.com - Karon Hotel - Single Deluxe",
        "description": "UgandaBooking.com - Karon Hotel - Single Deluxe",
        "keywords": "Karon Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-nandyowa-guest-house/117/": {
        "url_path": "/apartment/kampala-nandyowa-guest-house/117/",
        "title": "UgandaBooking.com - Nandyowa Guest House - Single Bed",
        "description": "UgandaBooking.com - Nandyowa Guest House - Single Bed",
        "keywords": "Nandyowa Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-nandyowa-guest-house/118/": {
        "url_path": "/apartment/kampala-nandyowa-guest-house/118/",
        "title": "UgandaBooking.com - Nandyowa Guest House - Double Bed",
        "description": "UgandaBooking.com - Nandyowa Guest House - Double Bed",
        "keywords": "Nandyowa Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-luuka-guest-house/119/": {
        "url_path": "/apartment/kampala-luuka-guest-house/119/",
        "title": "UgandaBooking.com - Luuka Guest House - Single Room",
        "description": "UgandaBooking.com - Luuka Guest House - Single Room",
        "keywords": "Luuka Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-luuka-guest-house/120/": {
        "url_path": "/apartment/kampala-luuka-guest-house/120/",
        "title": "UgandaBooking.com - Luuka Guest House - Double Room",
        "description": "UgandaBooking.com - Luuka Guest House - Double Room",
        "keywords": "Luuka Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-laala-salama-bed-and-breakfast/121/": {
        "url_path": "/apartment/kampala-laala-salama-bed-and-breakfast/121/",
        "title": "UgandaBooking.com - Laala Salama Bed and Breakfast - Single",
        "description": "With stunning views of Lake Victoria and a modern, welcoming atmosphere, guests will transported from the hustle of Kampala to the serenity of this ...",
        "keywords": "Laala Salama Bed and Breakfast,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-laala-salama-bed-and-breakfast/122/": {
        "url_path": "/apartment/kampala-laala-salama-bed-and-breakfast/122/",
        "title": "UgandaBooking.com - Laala Salama Bed and Breakfast - Double",
        "description": "With stunning views of Lake Victoria and a modern, welcoming atmosphere, guests will transported from the hustle of Kampala to the serenity of this ...",
        "keywords": "Laala Salama Bed and Breakfast,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-top-stop-accomodations/123/": {
        "url_path": "/apartment/kampala-top-stop-accomodations/123/",
        "title": "UgandaBooking.com - Top Stop Accomodations - Executive Siute",
        "description": "UgandaBooking.com - Top Stop Accomodations - Executive Siute",
        "keywords": "Top Stop Accomodations,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-top-stop-accomodations/124/": {
        "url_path": "/apartment/kampala-top-stop-accomodations/124/",
        "title": "UgandaBooking.com - Top Stop Accomodations - Double Deluxe",
        "description": "UgandaBooking.com - Top Stop Accomodations - Double Deluxe",
        "keywords": "Top Stop Accomodations,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-sebbo-guest-house/125/": {
        "url_path": "/apartment/kampala-sebbo-guest-house/125/",
        "title": "UgandaBooking.com - Sebbo Guest House - Single Bed",
        "description": "With a sprawling green compound near Lake Victoria, Sebbo Guest House gives visitors a chance to escape the bustle of Kampala – while remaining close ...",
        "keywords": "Sebbo Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-sebbo-guest-house/126/": {
        "url_path": "/apartment/kampala-sebbo-guest-house/126/",
        "title": "UgandaBooking.com - Sebbo Guest House - Double Bed",
        "description": "With a sprawling green compound near Lake Victoria, Sebbo Guest House gives visitors a chance to escape the bustle of Kampala – while remaining close ...",
        "keywords": "Sebbo Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-sebbo-guest-house/127/": {
        "url_path": "/apartment/kampala-sebbo-guest-house/127/",
        "title": "UgandaBooking.com - Sebbo Guest House - Big Double Bed",
        "description": "With a sprawling green compound near Lake Victoria, Sebbo Guest House gives visitors a chance to escape the bustle of Kampala – while remaining close ...",
        "keywords": "Sebbo Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-royal-lake-view-gardens/128/": {
        "url_path": "/apartment/kampala-royal-lake-view-gardens/128/",
        "title": "UgandaBooking.com - Royal Lake View Gardens - Deluxe Single",
        "description": "UgandaBooking.com - Royal Lake View Gardens - Deluxe Single",
        "keywords": "Royal Lake View Gardens,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-royal-lake-view-gardens/129/": {
        "url_path": "/apartment/kampala-royal-lake-view-gardens/129/",
        "title": "UgandaBooking.com - Royal Lake View Gardens - Luxury Single",
        "description": "UgandaBooking.com - Royal Lake View Gardens - Luxury Single",
        "keywords": "Royal Lake View Gardens,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-royal-lake-view-gardens/130/": {
        "url_path": "/apartment/kampala-royal-lake-view-gardens/130/",
        "title": "UgandaBooking.com - Royal Lake View Gardens - Luxury Double",
        "description": "UgandaBooking.com - Royal Lake View Gardens - Luxury Double",
        "keywords": "Royal Lake View Gardens,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-royal-lake-view-gardens/131/": {
        "url_path": "/apartment/kampala-royal-lake-view-gardens/131/",
        "title": "UgandaBooking.com - Royal Lake View Gardens - Twin",
        "description": "UgandaBooking.com - Royal Lake View Gardens - Twin",
        "keywords": "Royal Lake View Gardens,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-tesh-hotel/132/": {
        "url_path": "/apartment/kampala-tesh-hotel/132/",
        "title": "UgandaBooking.com - Tesh Hotel - Double Room",
        "description": "UgandaBooking.com - Tesh Hotel - Double Room",
        "keywords": "Tesh Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-tesh-hotel/133/": {
        "url_path": "/apartment/kampala-tesh-hotel/133/",
        "title": "UgandaBooking.com - Tesh Hotel - Twin Room",
        "description": "UgandaBooking.com - Tesh Hotel - Twin Room",
        "keywords": "Tesh Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-emerald-hotel/134/": {
        "url_path": "/apartment/kampala-emerald-hotel/134/",
        "title": "UgandaBooking.com - Emerald Hotel - Single Bed",
        "description": "UgandaBooking.com - Emerald Hotel - Single Bed",
        "keywords": "Emerald Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-emerald-hotel/135/": {
        "url_path": "/apartment/kampala-emerald-hotel/135/",
        "title": "UgandaBooking.com - Emerald Hotel - Twin Bed",
        "description": "UgandaBooking.com - Emerald Hotel - Twin Bed",
        "keywords": "Emerald Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-emerald-hotel/136/": {
        "url_path": "/apartment/kampala-emerald-hotel/136/",
        "title": "UgandaBooking.com - Emerald Hotel - Suite Bed",
        "description": "UgandaBooking.com - Emerald Hotel - Suite Bed",
        "keywords": "Emerald Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-unik-hotel/137/": {
        "url_path": "/apartment/kampala-unik-hotel/137/",
        "title": "UgandaBooking.com - Unik Hotel - Twin",
        "description": "UgandaBooking.com - Unik Hotel - Twin",
        "keywords": "Unik Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-unik-hotel/138/": {
        "url_path": "/apartment/kampala-unik-hotel/138/",
        "title": "UgandaBooking.com - Unik Hotel - Single",
        "description": "UgandaBooking.com - Unik Hotel - Single",
        "keywords": "Unik Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-unik-hotel/139/": {
        "url_path": "/apartment/kampala-unik-hotel/139/",
        "title": "UgandaBooking.com - Unik Hotel - Double",
        "description": "UgandaBooking.com - Unik Hotel - Double",
        "keywords": "Unik Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-unik-hotel/140/": {
        "url_path": "/apartment/kampala-unik-hotel/140/",
        "title": "UgandaBooking.com - Unik Hotel - Executive",
        "description": "UgandaBooking.com - Unik Hotel - Executive",
        "keywords": "Unik Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-unik-hotel/141/": {
        "url_path": "/apartment/kampala-unik-hotel/141/",
        "title": "UgandaBooking.com - Unik Hotel - Family Siute",
        "description": "UgandaBooking.com - Unik Hotel - Family Siute",
        "keywords": "Unik Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-careana-comfort-guest-house/142/": {
        "url_path": "/apartment/kampala-careana-comfort-guest-house/142/",
        "title": "UgandaBooking.com - Careana Comfort Guest House - Single Bed",
        "description": "UgandaBooking.com - Careana Comfort Guest House - Single Bed",
        "keywords": "Careana Comfort Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-careana-comfort-guest-house/143/": {
        "url_path": "/apartment/kampala-careana-comfort-guest-house/143/",
        "title": "UgandaBooking.com - Careana Comfort Guest House - Double Bed",
        "description": "UgandaBooking.com - Careana Comfort Guest House - Double Bed",
        "keywords": "Careana Comfort Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-la-ponye-hotel-apartments/144/": {
        "url_path": "/apartment/kampala-la-ponye-hotel-apartments/144/",
        "title": "UgandaBooking.com - La Ponye Hotel Apartments - Single",
        "description": "With an incredible location in downtown Kampala, La Ponye welcomes visitors with sleek designs, sophisticated décor, and amenities for the discerning traveler ...",
        "keywords": "La Ponye Hotel Apartments,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-la-ponye-hotel-apartments/145/": {
        "url_path": "/apartment/kampala-la-ponye-hotel-apartments/145/",
        "title": "UgandaBooking.com - La Ponye Hotel Apartments - Double Deluxe Suite",
        "description": "With an incredible location in downtown Kampala, La Ponye welcomes visitors with sleek designs, sophisticated décor, and amenities for the discerning traveler ...",
        "keywords": "La Ponye Hotel Apartments,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-salama-guest-house/146/": {
        "url_path": "/apartment/kampala-salama-guest-house/146/",
        "title": "UgandaBooking.com - Salama Guest House - Single",
        "description": "In the heart of some of Kampala’s best nightlife, this hotel puts visitors in the middle of the action. Salama Guest House offers travelers ...",
        "keywords": "Salama Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-da-harveys-launge/147/": {
        "url_path": "/apartment/kampala-da-harveys-launge/147/",
        "title": "UgandaBooking.com - Da Harvey's Launge - Double Bed",
        "description": "UgandaBooking.com - Da Harvey's Launge - Double Bed",
        "keywords": "Da Harvey's Launge,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mapetex-motel/151/": {
        "url_path": "/apartment/kampala-mapetex-motel/151/",
        "title": "UgandaBooking.com - Mapetex Motel - Double Bed",
        "description": "UgandaBooking.com - Mapetex Motel - Double Bed",
        "keywords": "Mapetex Motel,motel in Kampala,motel in Uganda,Motel in Kampala,Motel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mapetex-motel/152/": {
        "url_path": "/apartment/kampala-mapetex-motel/152/",
        "title": "UgandaBooking.com - Mapetex Motel - Twin Bed",
        "description": "UgandaBooking.com - Mapetex Motel - Twin Bed",
        "keywords": "Mapetex Motel,motel in Kampala,motel in Uganda,Motel in Kampala,Motel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mapetex-motel/153/": {
        "url_path": "/apartment/kampala-mapetex-motel/153/",
        "title": "UgandaBooking.com - Mapetex Motel - Double Deluxe",
        "description": "UgandaBooking.com - Mapetex Motel - Double Deluxe",
        "keywords": "Mapetex Motel,motel in Kampala,motel in Uganda,Motel in Kampala,Motel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-blaze-accommodations/154/": {
        "url_path": "/apartment/kampala-blaze-accommodations/154/",
        "title": "UgandaBooking.com - Blaze Accommodations - Double Bed",
        "description": "Blaze Restaurant, Bar & Accommodation is an all in one facility for the traveler who likes to keep it simple and easy.This guest house offers travelers ...",
        "keywords": "Blaze Accommodations,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-bunga-leisure-gardens/155/": {
        "url_path": "/apartment/kampala-bunga-leisure-gardens/155/",
        "title": "UgandaBooking.com - Bunga Leisure Gardens - Single Bed",
        "description": "Bunga Leisure Gardens is the perfect place to go to get away from the bustle of Kampala. With large, lush green gardens and stylish rooms, it allows visitors ...",
        "keywords": "Bunga Leisure Gardens,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-bunga-leisure-gardens/156/": {
        "url_path": "/apartment/kampala-bunga-leisure-gardens/156/",
        "title": "UgandaBooking.com - Bunga Leisure Gardens - Double Bed",
        "description": "Bunga Leisure Gardens is the perfect place to go to get away from the bustle of Kampala. With large, lush green gardens and stylish rooms, it allows visitors ...",
        "keywords": "Bunga Leisure Gardens,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-bunga-leisure-gardens/157/": {
        "url_path": "/apartment/kampala-bunga-leisure-gardens/157/",
        "title": "UgandaBooking.com - Bunga Leisure Gardens - Twin Bed",
        "description": "Bunga Leisure Gardens is the perfect place to go to get away from the bustle of Kampala. With large, lush green gardens and stylish rooms, it allows visitors ...",
        "keywords": "Bunga Leisure Gardens,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-city-royal-resort-hotel/158/": {
        "url_path": "/apartment/kampala-city-royal-resort-hotel/158/",
        "title": "UgandaBooking.com - City Royal Resort Hotel - Deluxe",
        "description": "City Royal Resort Hotel offers guests a luxury while still in the heart of one of Kampala’s most iconic neighborhoods. Filled with jazz clubs, fine dining ...",
        "keywords": "City Royal Resort Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-city-royal-resort-hotel/159/": {
        "url_path": "/apartment/kampala-city-royal-resort-hotel/159/",
        "title": "UgandaBooking.com - City Royal Resort Hotel - Executive",
        "description": "City Royal Resort Hotel offers guests a luxury while still in the heart of one of Kampala’s most iconic neighborhoods. Filled with jazz clubs, fine dining ...",
        "keywords": "City Royal Resort Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-city-royal-resort-hotel/160/": {
        "url_path": "/apartment/kampala-city-royal-resort-hotel/160/",
        "title": "UgandaBooking.com - City Royal Resort Hotel - Suite",
        "description": "City Royal Resort Hotel offers guests a luxury while still in the heart of one of Kampala’s most iconic neighborhoods. Filled with jazz clubs, fine dining ...",
        "keywords": "City Royal Resort Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-city-royal-resort-hotel/161/": {
        "url_path": "/apartment/kampala-city-royal-resort-hotel/161/",
        "title": "UgandaBooking.com - City Royal Resort Hotel - Twin",
        "description": "City Royal Resort Hotel offers guests a luxury while still in the heart of one of Kampala’s most iconic neighborhoods. Filled with jazz clubs, fine dining ...",
        "keywords": "City Royal Resort Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-eleanorah/162/": {
        "url_path": "/apartment/kampala-hotel-eleanorah/162/",
        "title": "UgandaBooking.com - Hotel Eleanorah - Double Room",
        "description": "Hotel Eleanorah offers travelers single and double rooms in the Kireka neighborhood of Kampala. With close access to supermarkets, bars, and ...",
        "keywords": "Hotel Eleanorah,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-eleanorah/163/": {
        "url_path": "/apartment/kampala-hotel-eleanorah/163/",
        "title": "UgandaBooking.com - Hotel Eleanorah - Single Room",
        "description": "Hotel Eleanorah offers travelers single and double rooms in the Kireka neighborhood of Kampala. With close access to supermarkets, bars, and ...",
        "keywords": "Hotel Eleanorah,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-traingle/164/": {
        "url_path": "/apartment/kampala-hotel-traingle/164/",
        "title": "UgandaBooking.com - Hotel Traingle - Deluxe Single",
        "description": "Hotel Triangle is right in the heart of downtown Kampala, catering to your relaxation in the middle of the bustling city. The hotel offers travelers ...",
        "keywords": "Hotel Traingle,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-traingle/165/": {
        "url_path": "/apartment/kampala-hotel-traingle/165/",
        "title": "UgandaBooking.com - Hotel Traingle - Deluxe Twin Bed",
        "description": "Hotel Triangle is right in the heart of downtown Kampala, catering to your relaxation in the middle of the bustling city. The hotel offers travelers ...",
        "keywords": "Hotel Traingle,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-traingle/166/": {
        "url_path": "/apartment/kampala-hotel-traingle/166/",
        "title": "UgandaBooking.com - Hotel Traingle - Suite Single",
        "description": "Hotel Triangle is right in the heart of downtown Kampala, catering to your relaxation in the middle of the bustling city. The hotel offers travelers ...",
        "keywords": "Hotel Traingle,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-traingle/167/": {
        "url_path": "/apartment/kampala-hotel-traingle/167/",
        "title": "UgandaBooking.com - Hotel Traingle - Suite Double",
        "description": "Hotel Triangle is right in the heart of downtown Kampala, catering to your relaxation in the middle of the bustling city. The hotel offers travelers ...",
        "keywords": "Hotel Traingle,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-traingle/168/": {
        "url_path": "/apartment/kampala-hotel-traingle/168/",
        "title": "UgandaBooking.com - Hotel Traingle - Executive Twin Suite",
        "description": "Hotel Triangle is right in the heart of downtown Kampala, catering to your relaxation in the middle of the bustling city. The hotel offers travelers ...",
        "keywords": "Hotel Traingle,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-interservice-hotel/169/": {
        "url_path": "/apartment/kampala-interservice-hotel/169/",
        "title": "UgandaBooking.com - Interservice Hotel - Deluxe Single",
        "description": "Interservice Hotel gives you modern facilities in one of the trendiest neighborhoods in Kampala. With plenty of amenities and options nearby, visitors can relax ...",
        "keywords": "Interservice Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-interservice-hotel/170/": {
        "url_path": "/apartment/kampala-interservice-hotel/170/",
        "title": "UgandaBooking.com - Interservice Hotel - Deluxe Double",
        "description": "Interservice Hotel gives you modern facilities in one of the trendiest neighborhoods in Kampala. With plenty of amenities and options nearby, visitors can relax ...",
        "keywords": "Interservice Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-interservice-hotel/171/": {
        "url_path": "/apartment/kampala-interservice-hotel/171/",
        "title": "UgandaBooking.com - Interservice Hotel - Deluxe Twin",
        "description": "Interservice Hotel gives you modern facilities in one of the trendiest neighborhoods in Kampala. With plenty of amenities and options nearby, visitors can relax ...",
        "keywords": "Interservice Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-interservice-hotel/172/": {
        "url_path": "/apartment/kampala-interservice-hotel/172/",
        "title": "UgandaBooking.com - Interservice Hotel - Family Suite",
        "description": "Interservice Hotel gives you modern facilities in one of the trendiest neighborhoods in Kampala. With plenty of amenities and options nearby, visitors can relax ...",
        "keywords": "Interservice Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-ivys-hotel/173/": {
        "url_path": "/apartment/kampala-ivys-hotel/173/",
        "title": "UgandaBooking.com - Ivy's Hotel - Standard Room",
        "description": "Ivys Hotel is a thoroughly modern facility in the quiet neighborhood of Rubaga, Offering visitors a world-class hotel, Ivys Hotel treats guests to a luxurious ...",
        "keywords": "Ivy's Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-ivys-hotel/174/": {
        "url_path": "/apartment/kampala-ivys-hotel/174/",
        "title": "UgandaBooking.com - Ivy's Hotel - Deluxe",
        "description": "Ivys Hotel is a thoroughly modern facility in the quiet neighborhood of Rubaga, Offering visitors a world-class hotel, Ivys Hotel treats guests to a luxurious ...",
        "keywords": "Ivy's Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-ivys-hotel/175/": {
        "url_path": "/apartment/kampala-ivys-hotel/175/",
        "title": "UgandaBooking.com - Ivy's Hotel - Suite/Studio",
        "description": "Ivys Hotel is a thoroughly modern facility in the quiet neighborhood of Rubaga, Offering visitors a world-class hotel, Ivys Hotel treats guests to a luxurious ...",
        "keywords": "Ivy's Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-ivys-hotel/176/": {
        "url_path": "/apartment/kampala-ivys-hotel/176/",
        "title": "UgandaBooking.com - Ivy's Hotel - Executive Suite",
        "description": "Ivys Hotel is a thoroughly modern facility in the quiet neighborhood of Rubaga, Offering visitors a world-class hotel, Ivys Hotel treats guests to a luxurious ...",
        "keywords": "Ivy's Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-ivys-hotel/177/": {
        "url_path": "/apartment/kampala-ivys-hotel/177/",
        "title": "UgandaBooking.com - Ivy's Hotel - Twin Deluxe",
        "description": "Ivys Hotel is a thoroughly modern facility in the quiet neighborhood of Rubaga, Offering visitors a world-class hotel, Ivys Hotel treats guests to a luxurious ...",
        "keywords": "Ivy's Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-ivys-hotel/178/": {
        "url_path": "/apartment/kampala-ivys-hotel/178/",
        "title": "UgandaBooking.com - Ivy's Hotel - Triple/Annex Room",
        "description": "Ivys Hotel is a thoroughly modern facility in the quiet neighborhood of Rubaga, Offering visitors a world-class hotel, Ivys Hotel treats guests to a luxurious ...",
        "keywords": "Ivy's Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-land-mark-view-hotel/179/": {
        "url_path": "/apartment/kampala-land-mark-view-hotel/179/",
        "title": "UgandaBooking.com - Land Mark View Hotel - Executive",
        "description": "The Landmark View Hotel offers a lush green oasis and one of the best locations for nightlife Kampala has to offer. This hotel offers travelers numerous options ranging ...",
        "keywords": "Land Mark View Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-land-mark-view-hotel/180/": {
        "url_path": "/apartment/kampala-land-mark-view-hotel/180/",
        "title": "UgandaBooking.com - Land Mark View Hotel - Twin",
        "description": "The Landmark View Hotel offers a lush green oasis and one of the best locations for nightlife Kampala has to offer. This hotel offers travelers numerous options ranging ...",
        "keywords": "Land Mark View Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-land-mark-view-hotel/181/": {
        "url_path": "/apartment/kampala-land-mark-view-hotel/181/",
        "title": "UgandaBooking.com - Land Mark View Hotel - Double",
        "description": "The Landmark View Hotel offers a lush green oasis and one of the best locations for nightlife Kampala has to offer. This hotel offers travelers numerous options ranging ...",
        "keywords": "Land Mark View Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-land-mark-view-hotel/182/": {
        "url_path": "/apartment/kampala-land-mark-view-hotel/182/",
        "title": "UgandaBooking.com - Land Mark View Hotel - Single",
        "description": "The Landmark View Hotel offers a lush green oasis and one of the best locations for nightlife Kampala has to offer. This hotel offers travelers numerous options ranging ...",
        "keywords": "Land Mark View Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-makutano-hotel/183/": {
        "url_path": "/apartment/kampala-makutano-hotel/183/",
        "title": "UgandaBooking.com - Makutano Hotel - Single Room",
        "description": "With modern facilities in a tree-lined compound, Makutano Hotel is a great stop for visitors looking for long or short stays while in Kampala. Located in ...",
        "keywords": "Makutano Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-makutano-hotel/184/": {
        "url_path": "/apartment/kampala-makutano-hotel/184/",
        "title": "UgandaBooking.com - Makutano Hotel - Double Room",
        "description": "With modern facilities in a tree-lined compound, Makutano Hotel is a great stop for visitors looking for long or short stays while in Kampala. Located in ...",
        "keywords": "Makutano Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-makutano-hotel/185/": {
        "url_path": "/apartment/kampala-makutano-hotel/185/",
        "title": "UgandaBooking.com - Makutano Hotel - Twin Bed",
        "description": "With modern facilities in a tree-lined compound, Makutano Hotel is a great stop for visitors looking for long or short stays while in Kampala. Located in ...",
        "keywords": "Makutano Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-sals-hotel/186/": {
        "url_path": "/apartment/kampala-sals-hotel/186/",
        "title": "UgandaBooking.com - Sals Hotel - Single",
        "description": "Sals Hotel offers travelers comfortable rooms in the Kiwatule neighborhood of Kampala. With close access to supermarkets and shops, it gives visitors a ...",
        "keywords": "Sals Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-sals-hotel/187/": {
        "url_path": "/apartment/kampala-sals-hotel/187/",
        "title": "UgandaBooking.com - Sals Hotel - Double",
        "description": "Sals Hotel offers travelers comfortable rooms in the Kiwatule neighborhood of Kampala. With close access to supermarkets and shops, it gives visitors a ...",
        "keywords": "Sals Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-sals-hotel/188/": {
        "url_path": "/apartment/kampala-sals-hotel/188/",
        "title": "UgandaBooking.com - Sals Hotel - Executive Double",
        "description": "Sals Hotel offers travelers comfortable rooms in the Kiwatule neighborhood of Kampala. With close access to supermarkets and shops, it gives visitors a ...",
        "keywords": "Sals Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-sir-jose-hotel/189/": {
        "url_path": "/apartment/kampala-sir-jose-hotel/189/",
        "title": "UgandaBooking.com - Sir Jose Hotel - Single Room",
        "description": "The Sir Jose Hotel in the Ggaba neighborhood of Kampala sits near Lake Victoria. With close access to bars, restaurants, supermarkets and entertainment, it lets ...",
        "keywords": "Sir Jose Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-sir-jose-hotel/190/": {
        "url_path": "/apartment/kampala-sir-jose-hotel/190/",
        "title": "UgandaBooking.com - Sir Jose Hotel - Executive Single Room",
        "description": "The Sir Jose Hotel in the Ggaba neighborhood of Kampala sits near Lake Victoria. With close access to bars, restaurants, supermarkets and entertainment, it lets ...",
        "keywords": "Sir Jose Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-sir-jose-hotel/191/": {
        "url_path": "/apartment/kampala-sir-jose-hotel/191/",
        "title": "UgandaBooking.com - Sir Jose Hotel - Double Room",
        "description": "The Sir Jose Hotel in the Ggaba neighborhood of Kampala sits near Lake Victoria. With close access to bars, restaurants, supermarkets and entertainment, it lets ...",
        "keywords": "Sir Jose Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-sir-jose-hotel/192/": {
        "url_path": "/apartment/kampala-sir-jose-hotel/192/",
        "title": "UgandaBooking.com - Sir Jose Hotel - Deluxe Room",
        "description": "The Sir Jose Hotel in the Ggaba neighborhood of Kampala sits near Lake Victoria. With close access to bars, restaurants, supermarkets and entertainment, it lets ...",
        "keywords": "Sir Jose Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-sir-jose-hotel/193/": {
        "url_path": "/apartment/kampala-sir-jose-hotel/193/",
        "title": "UgandaBooking.com - Sir Jose Hotel - Twin Room",
        "description": "The Sir Jose Hotel in the Ggaba neighborhood of Kampala sits near Lake Victoria. With close access to bars, restaurants, supermarkets and entertainment, it lets ...",
        "keywords": "Sir Jose Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-sir-jose-hotel/194/": {
        "url_path": "/apartment/kampala-sir-jose-hotel/194/",
        "title": "UgandaBooking.com - Sir Jose Hotel - Family Room",
        "description": "The Sir Jose Hotel in the Ggaba neighborhood of Kampala sits near Lake Victoria. With close access to bars, restaurants, supermarkets and entertainment, it lets ...",
        "keywords": "Sir Jose Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-tal-cottages/196/": {
        "url_path": "/apartment/kampala-tal-cottages/196/",
        "title": "UgandaBooking.com - Tal Cottages - Standout Cottages",
        "description": "Located in the picturesque neighborhood of Rubaga, The Cottages offer an eclectic mix of accommodation in a family friendly and relaxing ...",
        "keywords": "Tal Cottages,cottage in Kampala,cottage in Uganda,Cottage in Kampala,Cottage in Uganda,UgandaBooking"
      },
      "/apartment/kampala-tal-cottages/197/": {
        "url_path": "/apartment/kampala-tal-cottages/197/",
        "title": "UgandaBooking.com - Tal Cottages - Family Cottages",
        "description": "Located in the picturesque neighborhood of Rubaga, The Cottages offer an eclectic mix of accommodation in a family friendly and relaxing ...",
        "keywords": "Tal Cottages,cottage in Kampala,cottage in Uganda,Cottage in Kampala,Cottage in Uganda,UgandaBooking"
      },
      "/apartment/kampala-te-882/199/": {
        "url_path": "/apartment/kampala-te-882/199/",
        "title": "UgandaBooking.com - TE 882 - Single Room",
        "description": "TE-882 is a modern guest house offering visitors a host of amenities in the heart of one of Kampala’s most popular neighborhoods ...",
        "keywords": "TE 882,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-te-882/200/": {
        "url_path": "/apartment/kampala-te-882/200/",
        "title": "UgandaBooking.com - TE 882 - Double Room",
        "description": "TE-882 is a modern guest house offering visitors a host of amenities in the heart of one of Kampala’s most popular neighborhoods ...",
        "keywords": "TE 882,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-te-882/201/": {
        "url_path": "/apartment/kampala-te-882/201/",
        "title": "UgandaBooking.com - TE 882 - Twin Room",
        "description": "TE-882 is a modern guest house offering visitors a host of amenities in the heart of one of Kampala’s most popular neighborhoods ...",
        "keywords": "TE 882,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-salama-guest-house/202/": {
        "url_path": "/apartment/kampala-salama-guest-house/202/",
        "title": "UgandaBooking.com - Salama Guest House - Double",
        "description": "In the heart of some of Kampala’s best nightlife, this hotel puts visitors in the middle of the action. Salama Guest House offers travelers ...",
        "keywords": "Salama Guest House,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-laala-salama-bed-and-breakfast/203/": {
        "url_path": "/apartment/kampala-laala-salama-bed-and-breakfast/203/",
        "title": "UgandaBooking.com - Laala Salama Bed and Breakfast - Double Medium",
        "description": "With stunning views of Lake Victoria and a modern, welcoming atmosphere, guests will transported from the hustle of Kampala to the serenity of this ...",
        "keywords": "Laala Salama Bed and Breakfast,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-laala-salama-bed-and-breakfast/204/": {
        "url_path": "/apartment/kampala-laala-salama-bed-and-breakfast/204/",
        "title": "UgandaBooking.com - Laala Salama Bed and Breakfast - Double Big",
        "description": "With stunning views of Lake Victoria and a modern, welcoming atmosphere, guests will transported from the hustle of Kampala to the serenity of this ...",
        "keywords": "Laala Salama Bed and Breakfast,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-land-mark-view-hotel/205/": {
        "url_path": "/apartment/kampala-land-mark-view-hotel/205/",
        "title": "UgandaBooking.com - Land Mark View Hotel - Cottage Single Room",
        "description": "The Landmark View Hotel offers a lush green oasis and one of the best locations for nightlife Kampala has to offer. This hotel offers travelers numerous options ranging ...",
        "keywords": "Land Mark View Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-bulondos-apartments/212/": {
        "url_path": "/apartment/kampala-bulondos-apartments/212/",
        "title": "UgandaBooking.com - Bulondos Apartments - Single Room",
        "description": "This spacious and comfortable complex allows visitors to relax in the peace and quiet of Kampala’s suburbs. \nBulondo’s Apartments offers ...",
        "keywords": "Bulondos Apartments,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-bulondos-apartments/213/": {
        "url_path": "/apartment/kampala-bulondos-apartments/213/",
        "title": "UgandaBooking.com - Bulondos Apartments - Double Room",
        "description": "This spacious and comfortable complex allows visitors to relax in the peace and quiet of Kampala’s suburbs. \nBulondo’s Apartments offers ...",
        "keywords": "Bulondos Apartments,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-bulondos-apartments/214/": {
        "url_path": "/apartment/kampala-bulondos-apartments/214/",
        "title": "UgandaBooking.com - Bulondos Apartments - Executive Room",
        "description": "This spacious and comfortable complex allows visitors to relax in the peace and quiet of Kampala’s suburbs. \nBulondo’s Apartments offers ...",
        "keywords": "Bulondos Apartments,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-caravan-hotel/215/": {
        "url_path": "/apartment/kampala-caravan-hotel/215/",
        "title": "UgandaBooking.com - Caravan Hotel - Single Room",
        "description": "Set in a 3 story revival house off the main road, this hotel embodies Ugandan hospitality. Caravan Hotel offers travelers Single and Double rooms in the ...\n",
        "keywords": "Caravan Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-caravan-hotel/216/": {
        "url_path": "/apartment/kampala-caravan-hotel/216/",
        "title": "UgandaBooking.com - Caravan Hotel - Double Room",
        "description": "Set in a 3 story revival house off the main road, this hotel embodies Ugandan hospitality. Caravan Hotel offers travelers Single and Double rooms in the ...\n",
        "keywords": "Caravan Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-east-africa-guesthouse/221/": {
        "url_path": "/apartment/kampala-east-africa-guesthouse/221/",
        "title": "UgandaBooking.com - East Africa Guesthouse - Single Room",
        "description": "East Africa Guest House and Restaurant offers travelers Single and Double rooms in the Bwaise neighborhood Kampala. With close access to supermarkets ...",
        "keywords": "East Africa Guesthouse,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-east-africa-guesthouse/222/": {
        "url_path": "/apartment/kampala-east-africa-guesthouse/222/",
        "title": "UgandaBooking.com - East Africa Guesthouse - Twin Room",
        "description": "East Africa Guest House and Restaurant offers travelers Single and Double rooms in the Bwaise neighborhood Kampala. With close access to supermarkets ...",
        "keywords": "East Africa Guesthouse,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hbt-hotel-russel/227/": {
        "url_path": "/apartment/kampala-hbt-hotel-russel/227/",
        "title": "UgandaBooking.com - HBT Hotel Russel - Standard Room",
        "description": "Spacious rooms and a sleek design in the heart of downtown Kampala allows this hotel to stand out from the rest. HBT Russell Hotel offers travelers a variety ...",
        "keywords": "HBT Hotel Russel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hbt-hotel-russel/228/": {
        "url_path": "/apartment/kampala-hbt-hotel-russel/228/",
        "title": "UgandaBooking.com - HBT Hotel Russel - Deluxe Room",
        "description": "Spacious rooms and a sleek design in the heart of downtown Kampala allows this hotel to stand out from the rest. HBT Russell Hotel offers travelers a variety ...",
        "keywords": "HBT Hotel Russel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hbt-hotel-russel/229/": {
        "url_path": "/apartment/kampala-hbt-hotel-russel/229/",
        "title": "UgandaBooking.com - HBT Hotel Russel - Executive Room",
        "description": "Spacious rooms and a sleek design in the heart of downtown Kampala allows this hotel to stand out from the rest. HBT Russell Hotel offers travelers a variety ...",
        "keywords": "HBT Hotel Russel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hbt-hotel-russel/230/": {
        "url_path": "/apartment/kampala-hbt-hotel-russel/230/",
        "title": "UgandaBooking.com - HBT Hotel Russel - Twin Room",
        "description": "Spacious rooms and a sleek design in the heart of downtown Kampala allows this hotel to stand out from the rest. HBT Russell Hotel offers travelers a variety ...",
        "keywords": "HBT Hotel Russel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-barbodas-international/231/": {
        "url_path": "/apartment/kampala-hotel-barbodas-international/231/",
        "title": "UgandaBooking.com - Hotel Barbodas International - Single Standard",
        "description": "This hotel sits along the main road in one of Kampala’s oldest neighborhoods. Simple and convenient it allows for comfort and relaxation in a vibrant ...",
        "keywords": "Hotel Barbodas International,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-barbodas-international/232/": {
        "url_path": "/apartment/kampala-hotel-barbodas-international/232/",
        "title": "UgandaBooking.com - Hotel Barbodas International - Double",
        "description": "This hotel sits along the main road in one of Kampala’s oldest neighborhoods. Simple and convenient it allows for comfort and relaxation in a vibrant ...",
        "keywords": "Hotel Barbodas International,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-barbodas-international/233/": {
        "url_path": "/apartment/kampala-hotel-barbodas-international/233/",
        "title": "UgandaBooking.com - Hotel Barbodas International - Deluxe",
        "description": "This hotel sits along the main road in one of Kampala’s oldest neighborhoods. Simple and convenient it allows for comfort and relaxation in a vibrant ...",
        "keywords": "Hotel Barbodas International,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-voyager-hotels-and-suites/246/": {
        "url_path": "/apartment/kampala-voyager-hotels-and-suites/246/",
        "title": "UgandaBooking.com - Voyager Hotels and Suites - Single Rooms",
        "description": "Voyager Hotel and Suites offers travelers Single, Double and Executive rooms in the Kitintale neighborhood of Kampala. With close access to supermarkets and ...",
        "keywords": "Voyager Hotels and Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-voyager-hotels-and-suites/247/": {
        "url_path": "/apartment/kampala-voyager-hotels-and-suites/247/",
        "title": "UgandaBooking.com - Voyager Hotels and Suites - Twin Deluxe Room",
        "description": "Voyager Hotel and Suites offers travelers Single, Double and Executive rooms in the Kitintale neighborhood of Kampala. With close access to supermarkets and ...",
        "keywords": "Voyager Hotels and Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-voyager-hotels-and-suites/248/": {
        "url_path": "/apartment/kampala-voyager-hotels-and-suites/248/",
        "title": "UgandaBooking.com - Voyager Hotels and Suites - Double Room",
        "description": "Voyager Hotel and Suites offers travelers Single, Double and Executive rooms in the Kitintale neighborhood of Kampala. With close access to supermarkets and ...",
        "keywords": "Voyager Hotels and Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-voyager-hotels-and-suites/249/": {
        "url_path": "/apartment/kampala-voyager-hotels-and-suites/249/",
        "title": "UgandaBooking.com - Voyager Hotels and Suites - Executive Double Room",
        "description": "Voyager Hotel and Suites offers travelers Single, Double and Executive rooms in the Kitintale neighborhood of Kampala. With close access to supermarkets and ...",
        "keywords": "Voyager Hotels and Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-wyne-hotel/250/": {
        "url_path": "/apartment/kampala-wyne-hotel/250/",
        "title": "UgandaBooking.com - Wyne Hotel - Single Room",
        "description": "Wyne hotel offers travelers Single, Double and Deluxe rooms in the Kawempe neighborhood of Kampala. With close access to shops and restaurants, it offers ...",
        "keywords": "Wyne Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-wyne-hotel/251/": {
        "url_path": "/apartment/kampala-wyne-hotel/251/",
        "title": "UgandaBooking.com - Wyne Hotel - Double Room",
        "description": "Wyne hotel offers travelers Single, Double and Deluxe rooms in the Kawempe neighborhood of Kampala. With close access to shops and restaurants, it offers ...",
        "keywords": "Wyne Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-wyne-hotel/252/": {
        "url_path": "/apartment/kampala-wyne-hotel/252/",
        "title": "UgandaBooking.com - Wyne Hotel - Deluxe Room",
        "description": "Wyne hotel offers travelers Single, Double and Deluxe rooms in the Kawempe neighborhood of Kampala. With close access to shops and restaurants, it offers ...",
        "keywords": "Wyne Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-wyne-hotel/253/": {
        "url_path": "/apartment/kampala-wyne-hotel/253/",
        "title": "UgandaBooking.com - Wyne Hotel - Executive Room",
        "description": "Wyne hotel offers travelers Single, Double and Deluxe rooms in the Kawempe neighborhood of Kampala. With close access to shops and restaurants, it offers ...",
        "keywords": "Wyne Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-acacia-hotel/254/": {
        "url_path": "/apartment/kampala-acacia-hotel/254/",
        "title": "UgandaBooking.com - Acacia Hotel - Single Room",
        "description": "UgandaBooking.com - Acacia Hotel - Single Room",
        "keywords": "Acacia Hotel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-acacia-hotel/255/": {
        "url_path": "/apartment/kampala-acacia-hotel/255/",
        "title": "UgandaBooking.com - Acacia Hotel - Double Standard",
        "description": "UgandaBooking.com - Acacia Hotel - Double Standard",
        "keywords": "Acacia Hotel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-acacia-hotel/256/": {
        "url_path": "/apartment/kampala-acacia-hotel/256/",
        "title": "UgandaBooking.com - Acacia Hotel - Double Delux",
        "description": "UgandaBooking.com - Acacia Hotel - Double Delux",
        "keywords": "Acacia Hotel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-acacia-hotel/257/": {
        "url_path": "/apartment/kampala-acacia-hotel/257/",
        "title": "UgandaBooking.com - Acacia Hotel - Double With Balcony",
        "description": "UgandaBooking.com - Acacia Hotel - Double With Balcony",
        "keywords": "Acacia Hotel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-acacia-hotel/258/": {
        "url_path": "/apartment/kampala-acacia-hotel/258/",
        "title": "UgandaBooking.com - Acacia Hotel - Executive",
        "description": "UgandaBooking.com - Acacia Hotel - Executive",
        "keywords": "Acacia Hotel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-alcom-hotel/259/": {
        "url_path": "/apartment/kampala-alcom-hotel/259/",
        "title": "UgandaBooking.com - Alcom Hotel - Double Rooms",
        "description": "UgandaBooking.com - Alcom Hotel - Double Rooms",
        "keywords": "Alcom Hotel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-alcom-hotel/260/": {
        "url_path": "/apartment/kampala-alcom-hotel/260/",
        "title": "UgandaBooking.com - Alcom Hotel - Deluxe Rooms",
        "description": "UgandaBooking.com - Alcom Hotel - Deluxe Rooms",
        "keywords": "Alcom Hotel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-buziga-country-resort/261/": {
        "url_path": "/apartment/kampala-buziga-country-resort/261/",
        "title": "UgandaBooking.com - Buziga Country Resort - Single Cottage",
        "description": "UgandaBooking.com - Buziga Country Resort - Single Cottage",
        "keywords": "Buziga Country Resort,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-buziga-country-resort/262/": {
        "url_path": "/apartment/kampala-buziga-country-resort/262/",
        "title": "UgandaBooking.com - Buziga Country Resort - Double Cottage",
        "description": "UgandaBooking.com - Buziga Country Resort - Double Cottage",
        "keywords": "Buziga Country Resort,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-buziga-country-resort/263/": {
        "url_path": "/apartment/kampala-buziga-country-resort/263/",
        "title": "UgandaBooking.com - Buziga Country Resort - Standard Room",
        "description": "UgandaBooking.com - Buziga Country Resort - Standard Room",
        "keywords": "Buziga Country Resort,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-buziga-country-resort/264/": {
        "url_path": "/apartment/kampala-buziga-country-resort/264/",
        "title": "UgandaBooking.com - Buziga Country Resort - Twin Room",
        "description": "UgandaBooking.com - Buziga Country Resort - Twin Room",
        "keywords": "Buziga Country Resort,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-buziga-country-resort/265/": {
        "url_path": "/apartment/kampala-buziga-country-resort/265/",
        "title": "UgandaBooking.com - Buziga Country Resort - Suite",
        "description": "UgandaBooking.com - Buziga Country Resort - Suite",
        "keywords": "Buziga Country Resort,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-mansy/266/": {
        "url_path": "/apartment/kampala-hotel-mansy/266/",
        "title": "UgandaBooking.com - Hotel Mansy - Single",
        "description": "UgandaBooking.com - Hotel Mansy - Single",
        "keywords": "Hotel Mansy,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-mansy/267/": {
        "url_path": "/apartment/kampala-hotel-mansy/267/",
        "title": "UgandaBooking.com - Hotel Mansy - Double",
        "description": "UgandaBooking.com - Hotel Mansy - Double",
        "keywords": "Hotel Mansy,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-mansy/268/": {
        "url_path": "/apartment/kampala-hotel-mansy/268/",
        "title": "UgandaBooking.com - Hotel Mansy - Twin",
        "description": "UgandaBooking.com - Hotel Mansy - Twin",
        "keywords": "Hotel Mansy,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-mansy/269/": {
        "url_path": "/apartment/kampala-hotel-mansy/269/",
        "title": "UgandaBooking.com - Hotel Mansy - King",
        "description": "UgandaBooking.com - Hotel Mansy - King",
        "keywords": "Hotel Mansy,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-olypia/270/": {
        "url_path": "/apartment/kampala-hotel-olypia/270/",
        "title": "UgandaBooking.com - Hotel Olypia - Double",
        "description": "UgandaBooking.com - Hotel Olypia - Double",
        "keywords": "Hotel Olypia,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-marble-arch-hotel/271/": {
        "url_path": "/apartment/kampala-marble-arch-hotel/271/",
        "title": "UgandaBooking.com - Marble Arch Hotel - Single Room",
        "description": "UgandaBooking.com - Marble Arch Hotel - Single Room",
        "keywords": "Marble Arch Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-marble-arch-hotel/272/": {
        "url_path": "/apartment/kampala-marble-arch-hotel/272/",
        "title": "UgandaBooking.com - Marble Arch Hotel - Double Room",
        "description": "UgandaBooking.com - Marble Arch Hotel - Double Room",
        "keywords": "Marble Arch Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-marble-arch-hotel/273/": {
        "url_path": "/apartment/kampala-marble-arch-hotel/273/",
        "title": "UgandaBooking.com - Marble Arch Hotel - Executive Room",
        "description": "UgandaBooking.com - Marble Arch Hotel - Executive Room",
        "keywords": "Marble Arch Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-massawa-hotel/274/": {
        "url_path": "/apartment/kampala-massawa-hotel/274/",
        "title": "UgandaBooking.com - Massawa Hotel - Double Room",
        "description": "UgandaBooking.com - Massawa Hotel - Double Room",
        "keywords": "Massawa Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-palm-hotel/275/": {
        "url_path": "/apartment/kampala-palm-hotel/275/",
        "title": "UgandaBooking.com - Palm Hotel - Single Room",
        "description": "UgandaBooking.com - Palm Hotel - Single Room",
        "keywords": "Palm Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-platinum-royal-hotel/276/": {
        "url_path": "/apartment/kampala-platinum-royal-hotel/276/",
        "title": "UgandaBooking.com - Platinum Royal Hotel - Single Room",
        "description": "UgandaBooking.com - Platinum Royal Hotel - Single Room",
        "keywords": "Platinum Royal Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-platinum-royal-hotel/277/": {
        "url_path": "/apartment/kampala-platinum-royal-hotel/277/",
        "title": "UgandaBooking.com - Platinum Royal Hotel - Double Room",
        "description": "UgandaBooking.com - Platinum Royal Hotel - Double Room",
        "keywords": "Platinum Royal Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-platinum-royal-hotel/278/": {
        "url_path": "/apartment/kampala-platinum-royal-hotel/278/",
        "title": "UgandaBooking.com - Platinum Royal Hotel - King-Delux Room",
        "description": "UgandaBooking.com - Platinum Royal Hotel - King-Delux Room",
        "keywords": "Platinum Royal Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-vegas-hotel/279/": {
        "url_path": "/apartment/kampala-vegas-hotel/279/",
        "title": "UgandaBooking.com - Vegas Hotel - Single Room",
        "description": "UgandaBooking.com - Vegas Hotel - Single Room",
        "keywords": "Vegas Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-enkombe-place-comfort-villas/280/": {
        "url_path": "/apartment/kampala-enkombe-place-comfort-villas/280/",
        "title": "UgandaBooking.com - Enkombe Place Comfort Villas - One Beedroom",
        "description": "UgandaBooking.com - Enkombe Place Comfort Villas - One Beedroom",
        "keywords": "Enkombe Place Comfort Villas,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-enkombe-place-comfort-villas/281/": {
        "url_path": "/apartment/kampala-enkombe-place-comfort-villas/281/",
        "title": "UgandaBooking.com - Enkombe Place Comfort Villas - Two Beedroom",
        "description": "UgandaBooking.com - Enkombe Place Comfort Villas - Two Beedroom",
        "keywords": "Enkombe Place Comfort Villas,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-enkombe-place-comfort-villas/282/": {
        "url_path": "/apartment/kampala-enkombe-place-comfort-villas/282/",
        "title": "UgandaBooking.com - Enkombe Place Comfort Villas - Three Beedroom",
        "description": "UgandaBooking.com - Enkombe Place Comfort Villas - Three Beedroom",
        "keywords": "Enkombe Place Comfort Villas,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-enkombe-place-comfort-villas/283/": {
        "url_path": "/apartment/kampala-enkombe-place-comfort-villas/283/",
        "title": "UgandaBooking.com - Enkombe Place Comfort Villas - Four Beedroom",
        "description": "UgandaBooking.com - Enkombe Place Comfort Villas - Four Beedroom",
        "keywords": "Enkombe Place Comfort Villas,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-bmk-house-apartments/284/": {
        "url_path": "/apartment/kampala-bmk-house-apartments/284/",
        "title": "UgandaBooking.com - BMK House Apartments - Studio Suites",
        "description": "UgandaBooking.com - BMK House Apartments - Studio Suites",
        "keywords": "BMK House Apartments,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-bmk-house-apartments/285/": {
        "url_path": "/apartment/kampala-bmk-house-apartments/285/",
        "title": "UgandaBooking.com - BMK House Apartments - One Bedroom Suites",
        "description": "UgandaBooking.com - BMK House Apartments - One Bedroom Suites",
        "keywords": "BMK House Apartments,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-bmk-house-apartments/286/": {
        "url_path": "/apartment/kampala-bmk-house-apartments/286/",
        "title": "UgandaBooking.com - BMK House Apartments - Two Bedroom Suites",
        "description": "UgandaBooking.com - BMK House Apartments - Two Bedroom Suites",
        "keywords": "BMK House Apartments,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-bmk-house-apartments/287/": {
        "url_path": "/apartment/kampala-bmk-house-apartments/287/",
        "title": "UgandaBooking.com - BMK House Apartments - Three Bedroom Suites",
        "description": "UgandaBooking.com - BMK House Apartments - Three Bedroom Suites",
        "keywords": "BMK House Apartments,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-jicca-hotel/288/": {
        "url_path": "/apartment/kampala-jicca-hotel/288/",
        "title": "UgandaBooking.com - Jicca Hotel - Executive Twin Room",
        "description": "UgandaBooking.com - Jicca Hotel - Executive Twin Room",
        "keywords": "Jicca Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-jicca-hotel/289/": {
        "url_path": "/apartment/kampala-jicca-hotel/289/",
        "title": "UgandaBooking.com - Jicca Hotel - Double Room",
        "description": "UgandaBooking.com - Jicca Hotel - Double Room",
        "keywords": "Jicca Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-jicca-hotel/290/": {
        "url_path": "/apartment/kampala-jicca-hotel/290/",
        "title": "UgandaBooking.com - Jicca Hotel - Extra Double Room",
        "description": "UgandaBooking.com - Jicca Hotel - Extra Double Room",
        "keywords": "Jicca Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-jicca-hotel/291/": {
        "url_path": "/apartment/kampala-jicca-hotel/291/",
        "title": "UgandaBooking.com - Jicca Hotel - Executive ",
        "description": "UgandaBooking.com - Jicca Hotel - Executive ",
        "keywords": "Jicca Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-jicca-hotel/292/": {
        "url_path": "/apartment/kampala-jicca-hotel/292/",
        "title": "UgandaBooking.com - Jicca Hotel - Single Room",
        "description": "UgandaBooking.com - Jicca Hotel - Single Room",
        "keywords": "Jicca Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-ministers-village-hotel/293/": {
        "url_path": "/apartment/kampala-ministers-village-hotel/293/",
        "title": "UgandaBooking.com - Minister's Village Hotel - Deluxe Double",
        "description": "UgandaBooking.com - Minister's Village Hotel - Deluxe Double",
        "keywords": "Minister's Village Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-ministers-village-hotel/294/": {
        "url_path": "/apartment/kampala-ministers-village-hotel/294/",
        "title": "UgandaBooking.com - Minister's Village Hotel - Executive Suites",
        "description": "UgandaBooking.com - Minister's Village Hotel - Executive Suites",
        "keywords": "Minister's Village Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-ministers-village-hotel/295/": {
        "url_path": "/apartment/kampala-ministers-village-hotel/295/",
        "title": "UgandaBooking.com - Minister's Village Hotel - Spacious Suites",
        "description": "UgandaBooking.com - Minister's Village Hotel - Spacious Suites",
        "keywords": "Minister's Village Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-ministers-village-hotel/296/": {
        "url_path": "/apartment/kampala-ministers-village-hotel/296/",
        "title": "UgandaBooking.com - Minister's Village Hotel - Standard Twin",
        "description": "UgandaBooking.com - Minister's Village Hotel - Standard Twin",
        "keywords": "Minister's Village Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-ministers-village-hotel/297/": {
        "url_path": "/apartment/kampala-ministers-village-hotel/297/",
        "title": "UgandaBooking.com - Minister's Village Hotel - Apartment Two Bedroom",
        "description": "UgandaBooking.com - Minister's Village Hotel - Apartment Two Bedroom",
        "keywords": "Minister's Village Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-ministers-village-hotel/298/": {
        "url_path": "/apartment/kampala-ministers-village-hotel/298/",
        "title": "UgandaBooking.com - Minister's Village Hotel - Standard Single",
        "description": "UgandaBooking.com - Minister's Village Hotel - Standard Single",
        "keywords": "Minister's Village Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-caravan-hotel/299/": {
        "url_path": "/apartment/kampala-caravan-hotel/299/",
        "title": "UgandaBooking.com - Caravan Hotel - Twin Room",
        "description": "Set in a 3 story revival house off the main road, this hotel embodies Ugandan hospitality. Caravan Hotel offers travelers Single and Double rooms in the ...\n",
        "keywords": "Caravan Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-central-view-hotel/300/": {
        "url_path": "/apartment/kampala-central-view-hotel/300/",
        "title": "UgandaBooking.com - Central View Hotel - Double Room",
        "description": "UgandaBooking.com - Central View Hotel - Double Room",
        "keywords": "Central View Hotel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-central-view-hotel/301/": {
        "url_path": "/apartment/kampala-central-view-hotel/301/",
        "title": "UgandaBooking.com - Central View Hotel - Twin Room",
        "description": "UgandaBooking.com - Central View Hotel - Twin Room",
        "keywords": "Central View Hotel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-home-inn-hotel/302/": {
        "url_path": "/apartment/kampala-home-inn-hotel/302/",
        "title": "UgandaBooking.com - Home Inn Hotel - Double Room",
        "description": "UgandaBooking.com - Home Inn Hotel - Double Room",
        "keywords": "Home Inn Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-home-inn-hotel/303/": {
        "url_path": "/apartment/kampala-home-inn-hotel/303/",
        "title": "UgandaBooking.com - Home Inn Hotel - Single Room",
        "description": "UgandaBooking.com - Home Inn Hotel - Single Room",
        "keywords": "Home Inn Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-home-inn-hotel/304/": {
        "url_path": "/apartment/kampala-home-inn-hotel/304/",
        "title": "UgandaBooking.com - Home Inn Hotel - Twin Room",
        "description": "UgandaBooking.com - Home Inn Hotel - Twin Room",
        "keywords": "Home Inn Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-land-star-hotel/305/": {
        "url_path": "/apartment/kampala-land-star-hotel/305/",
        "title": "UgandaBooking.com - Land Star Hotel - Deluxe Room",
        "description": "UgandaBooking.com - Land Star Hotel - Deluxe Room",
        "keywords": "Land Star Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-land-star-hotel/306/": {
        "url_path": "/apartment/kampala-land-star-hotel/306/",
        "title": "UgandaBooking.com - Land Star Hotel - Twin Room",
        "description": "UgandaBooking.com - Land Star Hotel - Twin Room",
        "keywords": "Land Star Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-land-star-hotel/307/": {
        "url_path": "/apartment/kampala-land-star-hotel/307/",
        "title": "UgandaBooking.com - Land Star Hotel - Executive Room",
        "description": "UgandaBooking.com - Land Star Hotel - Executive Room",
        "keywords": "Land Star Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mackinnon-suites/308/": {
        "url_path": "/apartment/kampala-mackinnon-suites/308/",
        "title": "UgandaBooking.com - Mackinnon Suites - Studio Room",
        "description": "UgandaBooking.com - Mackinnon Suites - Studio Room",
        "keywords": "Mackinnon Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mackinnon-suites/309/": {
        "url_path": "/apartment/kampala-mackinnon-suites/309/",
        "title": "UgandaBooking.com - Mackinnon Suites - Deluxe",
        "description": "UgandaBooking.com - Mackinnon Suites - Deluxe",
        "keywords": "Mackinnon Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mackinnon-suites/310/": {
        "url_path": "/apartment/kampala-mackinnon-suites/310/",
        "title": "UgandaBooking.com - Mackinnon Suites - Executive",
        "description": "UgandaBooking.com - Mackinnon Suites - Executive",
        "keywords": "Mackinnon Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mackinnon-suites/311/": {
        "url_path": "/apartment/kampala-mackinnon-suites/311/",
        "title": "UgandaBooking.com - Mackinnon Suites - Twin Room",
        "description": "UgandaBooking.com - Mackinnon Suites - Twin Room",
        "keywords": "Mackinnon Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mamba-hotel/312/": {
        "url_path": "/apartment/kampala-mamba-hotel/312/",
        "title": "UgandaBooking.com - Mamba Hotel - Single Bed",
        "description": "UgandaBooking.com - Mamba Hotel - Single Bed",
        "keywords": "Mamba Hotel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mamba-hotel/313/": {
        "url_path": "/apartment/kampala-mamba-hotel/313/",
        "title": "UgandaBooking.com - Mamba Hotel - Standard Double",
        "description": "UgandaBooking.com - Mamba Hotel - Standard Double",
        "keywords": "Mamba Hotel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mamba-hotel/314/": {
        "url_path": "/apartment/kampala-mamba-hotel/314/",
        "title": "UgandaBooking.com - Mamba Hotel - Twin Bed",
        "description": "UgandaBooking.com - Mamba Hotel - Twin Bed",
        "keywords": "Mamba Hotel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mamba-hotel/315/": {
        "url_path": "/apartment/kampala-mamba-hotel/315/",
        "title": "UgandaBooking.com - Mamba Hotel - Standard suite",
        "description": "UgandaBooking.com - Mamba Hotel - Standard suite",
        "keywords": "Mamba Hotel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/apartment/kampala-mid-land-motel/316/": {
        "url_path": "/apartment/kampala-mid-land-motel/316/",
        "title": "UgandaBooking.com - Mid-Land Motel - Executive Room",
        "description": "UgandaBooking.com - Mid-Land Motel - Executive Room",
        "keywords": "Mid-Land Motel,guest house in Kampala,guest house in Uganda,Guest house in Kampala,Guest house in Uganda,UgandaBooking"
      },
      "/blog/1/": {
        "url_path": "/blog/1/",
        "title": "UgandaBooking.com - Queen Elizabeth National Park",
        "description": "Queen Elizabeth National Park (QENP) is one of the best and well known parks in Uganda. From the diverse species of rain forest, grown expansively along its area, to its humid and fertile wetlands and sparking lakes, this park has been a perfect dwelling ",
        "keywords": "Queen Elizabeth National Park,Uganda, uganda, Kampala, kampala,UgandaBooking"
      },
      "/blog/3/": {
        "url_path": "/blog/3/",
        "title": "UgandaBooking.com - Bwindi Impenetrable National Park",
        "description": "Bwindi Impenetrable National Park (BINP) is situated in the middle of one of Uganda's most biologically diverse, and certainly the oldest rain forest ever, Bwindi Impenetrable National Park is a park covering an area of 331 square kilometers of both mount",
        "keywords": "Bwindi Impenetrable National Park,Uganda, uganda, Kampala, kampala,UgandaBooking"
      },
      "/blog/4/": {
        "url_path": "/blog/4/",
        "title": "UgandaBooking.com - Murchison Falls National Park",
        "description": "Murchison Falls National Park is one of the most prominent national parks in Uganda which lies at the northern end of the Albertine Rift Valley where the sweeping Bunyoro escarpment tumbles into vast, palm-dotted savanna. This park, along with other two w",
        "keywords": "Murchison Falls National Park,Uganda, uganda, Kampala, kampala,UgandaBooking"
      },
      "/blog/5/": {
        "url_path": "/blog/5/",
        "title": "UgandaBooking.com - Mgahinga Gorilla National Park",
        "description": "Mgahinga Gorilla National Park, the smallest National Park in Uganda, is located in South West of Uganda. It has a small area of about 33.7 sq.km. It is a part of the much larger Virunga Conservation Area, which includes adjacent parks in the bordering co",
        "keywords": "Mgahinga Gorilla National Park,Uganda, uganda, Kampala, kampala,UgandaBooking"
      },
      "/blog/6/": {
        "url_path": "/blog/6/",
        "title": "UgandaBooking.com - Kibale National Park",
        "description": "Kibale National Park is found in southern Uganda, in the districts of Kabarole. Covering an area of 766 sq.km. It is one of the biggest and most important parks of Uganda. This impressive park is a haven for the greatest variety and concentration of wildl",
        "keywords": "Kibale National Park,Uganda, uganda, Kampala, kampala,UgandaBooking"
      },
      "/blog/7/": {
        "url_path": "/blog/7/",
        "title": "UgandaBooking.com - Lake Mburo National park",
        "description": "Lake Mburo National park is the smallest Savannah National parks in Uganda, covering a small area of 260 sq.km. It is located in the district of Kiruhura, about 240 km west of Kampala, the capital city of Uganda.",
        "keywords": "Lake Mburo National park,Uganda, uganda, Kampala, kampala,UgandaBooking"
      },
      "/blog/8/": {
        "url_path": "/blog/8/",
        "title": "UgandaBooking.com - Kidepo National Park",
        "description": "Kidepo National Park is the most isolated National Park in Uganda, located in the northeastern corner of Uganda, in the Karamoja region, just between Uganda’s borders with south Sudan and Kenya. It covers an area of 1442 sq.km.",
        "keywords": "Kidepo National Park,Uganda, uganda, Kampala, kampala,UgandaBooking"
      },
      "/blog/9/": {
        "url_path": "/blog/9/",
        "title": "UgandaBooking.com - Rwenzori Mountain National Park",
        "description": "Rwenzori Mountain National Park, located on the east side of the western African rift valley along Uganda and Congo’s border, in south western Uganda, is one of the most interesting and adventurous national parks in Uganda. It is located in the Rwenzori M",
        "keywords": "Rwenzori Mountain National Park,Uganda, uganda, Kampala, kampala,UgandaBooking"
      },
      "/blog/10/": {
        "url_path": "/blog/10/",
        "title": "UgandaBooking.com - Mount Elgon National Park",
        "description": "Mount Elgon National Park, named after Mount Elgon, is one of the oldest and largest volcanic mountains in East Africa. It is located on the northeast of Lake Victoria, just on the Uganda-Kenya border. It covers an area of 1279 sq.km, where the Ugandan pa",
        "keywords": "Mount Elgon National Park,Uganda, uganda, Kampala, kampala,UgandaBooking"
      },
      "/blog/11/": {
        "url_path": "/blog/11/",
        "title": "UgandaBooking.com - Semuliki National Park",
        "description": "Semuliki National Park, one of the newest national parks of Uganda, is located in the remote part of the Bundigyo District, across the floor of the Semuliki Valley, in western Uganda. The park lies to the western side of Rwenzori mountains, within the Alb",
        "keywords": "Semuliki National Park,Uganda, uganda, Kampala, kampala,UgandaBooking"
      },
      "/your-trip/uganda-overview-/1/": {
        "url_path": "/your-trip/uganda-overview-/1/",
        "title": "UgandaBooking.com - Uganda Overview: ",
        "description": "Uganda Overview: . Find detailed information in UgandaBooking.com",
        "keywords": "Uganda Uganda Overview,kampala Uganda Overview,Uganda Overview ,Uganda, uganda, kampala, Kampala, UgandaBooking"
      },
      "/your-trip/uganda-overview-practicalities/2/": {
        "url_path": "/your-trip/uganda-overview-practicalities/2/",
        "title": "UgandaBooking.com - Uganda Overview: Practicalities",
        "description": "Uganda Overview: Practicalities. Find detailed information in UgandaBooking.com",
        "keywords": "Uganda Uganda Overview,kampala Uganda Overview,Uganda Overview Practicalities,Uganda, uganda, kampala, Kampala, UgandaBooking"
      },
      "/your-trip/national-parks-bwindi-impenetrable/3/": {
        "url_path": "/your-trip/national-parks-bwindi-impenetrable/3/",
        "title": "UgandaBooking.com - National Parks: Bwindi Impenetrable",
        "description": "National Parks: Bwindi Impenetrable. Find detailed information in UgandaBooking.com",
        "keywords": "Uganda National Parks,kampala National Parks,National Parks Bwindi Impenetrable,Uganda, uganda, kampala, Kampala, UgandaBooking"
      },
      "/your-trip/national-parks-mgahinga-gorilla/4/": {
        "url_path": "/your-trip/national-parks-mgahinga-gorilla/4/",
        "title": "UgandaBooking.com - National Parks: Mgahinga Gorilla",
        "description": "National Parks: Mgahinga Gorilla. Find detailed information in UgandaBooking.com",
        "keywords": "Uganda National Parks,kampala National Parks,National Parks Mgahinga Gorilla,Uganda, uganda, kampala, Kampala, UgandaBooking"
      },
      "/your-trip/national-parks-kibale/5/": {
        "url_path": "/your-trip/national-parks-kibale/5/",
        "title": "UgandaBooking.com - National Parks: Kibale",
        "description": "National Parks: Kibale. Find detailed information in UgandaBooking.com",
        "keywords": "Uganda National Parks,kampala National Parks,National Parks Kibale,Uganda, uganda, kampala, Kampala, UgandaBooking"
      },
      "/your-trip/national-parks-mount-elgon/6/": {
        "url_path": "/your-trip/national-parks-mount-elgon/6/",
        "title": "UgandaBooking.com - National Parks: Mount Elgon",
        "description": "National Parks: Mount Elgon. Find detailed information in UgandaBooking.com",
        "keywords": "Uganda National Parks,kampala National Parks,National Parks Mount Elgon,Uganda, uganda, kampala, Kampala, UgandaBooking"
      },
      "/your-trip/national-parks-queen-elizabeth/7/": {
        "url_path": "/your-trip/national-parks-queen-elizabeth/7/",
        "title": "UgandaBooking.com - National Parks: Queen Elizabeth",
        "description": "National Parks: Queen Elizabeth. Find detailed information in UgandaBooking.com",
        "keywords": "Uganda National Parks,kampala National Parks,National Parks Queen Elizabeth,Uganda, uganda, kampala, Kampala, UgandaBooking"
      },
      "/your-trip/national-parks-kidepo-valley/8/": {
        "url_path": "/your-trip/national-parks-kidepo-valley/8/",
        "title": "UgandaBooking.com - National Parks: Kidepo Valley",
        "description": "National Parks: Kidepo Valley. Find detailed information in UgandaBooking.com",
        "keywords": "Uganda National Parks,kampala National Parks,National Parks Kidepo Valley,Uganda, uganda, kampala, Kampala, UgandaBooking"
      },
      "/your-trip/national-parks-lake-mburo/9/": {
        "url_path": "/your-trip/national-parks-lake-mburo/9/",
        "title": "UgandaBooking.com - National Parks: Lake Mburo",
        "description": "National Parks: Lake Mburo. Find detailed information in UgandaBooking.com",
        "keywords": "Uganda National Parks,kampala National Parks,National Parks Lake Mburo,Uganda, uganda, kampala, Kampala, UgandaBooking"
      },
      "/your-trip/national-parks-murchison-falls/10/": {
        "url_path": "/your-trip/national-parks-murchison-falls/10/",
        "title": "UgandaBooking.com - National Parks: Murchison Falls",
        "description": "National Parks: Murchison Falls. Find detailed information in UgandaBooking.com",
        "keywords": "Uganda National Parks,kampala National Parks,National Parks Murchison Falls,Uganda, uganda, kampala, Kampala, UgandaBooking"
      },
      "/your-trip/national-parks-rwenzori-mountains/11/": {
        "url_path": "/your-trip/national-parks-rwenzori-mountains/11/",
        "title": "UgandaBooking.com - National Parks: Rwenzori Mountains",
        "description": "National Parks: Rwenzori Mountains. Find detailed information in UgandaBooking.com",
        "keywords": "Uganda National Parks,kampala National Parks,National Parks Rwenzori Mountains,Uganda, uganda, kampala, Kampala, UgandaBooking"
      },
      "/your-trip/national-parks-semuliki/12/": {
        "url_path": "/your-trip/national-parks-semuliki/12/",
        "title": "UgandaBooking.com - National Parks: Semuliki",
        "description": "National Parks: Semuliki. Find detailed information in UgandaBooking.com",
        "keywords": "Uganda National Parks,kampala National Parks,National Parks Semuliki,Uganda, uganda, kampala, Kampala, UgandaBooking"
      },
      "/apartment/kampala-etana-motel/317/": {
        "url_path": "/apartment/kampala-etana-motel/317/",
        "title": "UgandaBooking.com - Etana Motel - Standard Room",
        "description": "UgandaBooking.com - Etana Motel - Standard Room",
        "keywords": "Etana Motel,motel in Kampala,motel in Uganda,Motel in Kampala,Motel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-kt-estate-apartments/321/": {
        "url_path": "/apartment/kampala-kt-estate-apartments/321/",
        "title": "UgandaBooking.com - Kt Estate Apartments - King Size",
        "description": "UgandaBooking.com - Kt Estate Apartments - King Size",
        "keywords": "Kt Estate Apartments,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-kt-estate-apartments/322/": {
        "url_path": "/apartment/kampala-kt-estate-apartments/322/",
        "title": "UgandaBooking.com - Kt Estate Apartments - Double",
        "description": "UgandaBooking.com - Kt Estate Apartments - Double",
        "keywords": "Kt Estate Apartments,apartment in Kampala,apartment in Uganda,Apartment in Kampala,Apartment in Uganda,UgandaBooking"
      },
      "/apartment/kampala-pacify-executive-hotel/323/": {
        "url_path": "/apartment/kampala-pacify-executive-hotel/323/",
        "title": "UgandaBooking.com - Pacify Executive Hotel - Twin Room",
        "description": "UgandaBooking.com - Pacify Executive Hotel - Twin Room",
        "keywords": "Pacify Executive Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-pacify-executive-hotel/324/": {
        "url_path": "/apartment/kampala-pacify-executive-hotel/324/",
        "title": "UgandaBooking.com - Pacify Executive Hotel - Executive Room",
        "description": "UgandaBooking.com - Pacify Executive Hotel - Executive Room",
        "keywords": "Pacify Executive Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-pacify-executive-hotel/325/": {
        "url_path": "/apartment/kampala-pacify-executive-hotel/325/",
        "title": "UgandaBooking.com - Pacify Executive Hotel - Presidential Room",
        "description": "UgandaBooking.com - Pacify Executive Hotel - Presidential Room",
        "keywords": "Pacify Executive Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-samppro-hotels/326/": {
        "url_path": "/apartment/kampala-samppro-hotels/326/",
        "title": "UgandaBooking.com - Samppro Hotels - Double",
        "description": "UgandaBooking.com - Samppro Hotels - Double",
        "keywords": "Samppro Hotels,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-samppro-hotels/327/": {
        "url_path": "/apartment/kampala-samppro-hotels/327/",
        "title": "UgandaBooking.com - Samppro Hotels - Suite",
        "description": "UgandaBooking.com - Samppro Hotels - Suite",
        "keywords": "Samppro Hotels,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-top-five-hotel/328/": {
        "url_path": "/apartment/kampala-top-five-hotel/328/",
        "title": "UgandaBooking.com - Top Five Hotel - Single Room",
        "description": "UgandaBooking.com - Top Five Hotel - Single Room",
        "keywords": "Top Five Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-top-five-hotel/329/": {
        "url_path": "/apartment/kampala-top-five-hotel/329/",
        "title": "UgandaBooking.com - Top Five Hotel - Double Room",
        "description": "UgandaBooking.com - Top Five Hotel - Double Room",
        "keywords": "Top Five Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-top-five-hotel/330/": {
        "url_path": "/apartment/kampala-top-five-hotel/330/",
        "title": "UgandaBooking.com - Top Five Hotel - Twin Room",
        "description": "UgandaBooking.com - Top Five Hotel - Twin Room",
        "keywords": "Top Five Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-vinetea-hotel/331/": {
        "url_path": "/apartment/kampala-vinetea-hotel/331/",
        "title": "UgandaBooking.com - Vinetea Hotel - King",
        "description": "UgandaBooking.com - Vinetea Hotel - King",
        "keywords": "Vinetea Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-vinetea-hotel/332/": {
        "url_path": "/apartment/kampala-vinetea-hotel/332/",
        "title": "UgandaBooking.com - Vinetea Hotel - Deluxe",
        "description": "UgandaBooking.com - Vinetea Hotel - Deluxe",
        "keywords": "Vinetea Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-africana/333/": {
        "url_path": "/apartment/kampala-hotel-africana/333/",
        "title": "UgandaBooking.com - Hotel Africana - Executive Deluxe",
        "description": "UgandaBooking.com - Hotel Africana - Executive Deluxe",
        "keywords": "Hotel Africana,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-africana/334/": {
        "url_path": "/apartment/kampala-hotel-africana/334/",
        "title": "UgandaBooking.com - Hotel Africana - Executive Twin",
        "description": "UgandaBooking.com - Hotel Africana - Executive Twin",
        "keywords": "Hotel Africana,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-africana/335/": {
        "url_path": "/apartment/kampala-hotel-africana/335/",
        "title": "UgandaBooking.com - Hotel Africana - Family room",
        "description": "UgandaBooking.com - Hotel Africana - Family room",
        "keywords": "Hotel Africana,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-africana/336/": {
        "url_path": "/apartment/kampala-hotel-africana/336/",
        "title": "UgandaBooking.com - Hotel Africana - Executive Suite",
        "description": "UgandaBooking.com - Hotel Africana - Executive Suite",
        "keywords": "Hotel Africana,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-hotel-africana/337/": {
        "url_path": "/apartment/kampala-hotel-africana/337/",
        "title": "UgandaBooking.com - Hotel Africana - Apartment",
        "description": "UgandaBooking.com - Hotel Africana - Apartment",
        "keywords": "Hotel Africana,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-silver-spring-hotel/338/": {
        "url_path": "/apartment/kampala-silver-spring-hotel/338/",
        "title": "UgandaBooking.com - Silver Spring Hotel - Standard Rooms",
        "description": "UgandaBooking.com - Silver Spring Hotel - Standard Rooms",
        "keywords": "Silver Spring Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-silver-spring-hotel/339/": {
        "url_path": "/apartment/kampala-silver-spring-hotel/339/",
        "title": "UgandaBooking.com - Silver Spring Hotel - Executive Deluxe Rooms",
        "description": "UgandaBooking.com - Silver Spring Hotel - Executive Deluxe Rooms",
        "keywords": "Silver Spring Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-silver-spring-hotel/340/": {
        "url_path": "/apartment/kampala-silver-spring-hotel/340/",
        "title": "UgandaBooking.com - Silver Spring Hotel - Executive Deluxe Suites",
        "description": "UgandaBooking.com - Silver Spring Hotel - Executive Deluxe Suites",
        "keywords": "Silver Spring Hotel,hotel in Kampala,hotel in Uganda,Hotel in Kampala,Hotel in Uganda,UgandaBooking"
      },
      "/apartment/kampala-crystal-suites/341/": {
        "url_path": "/apartment/kampala-crystal-suites/341/",
        "title": "UgandaBooking.com - Crystal Suites - Executive Single",
        "description": "UgandaBooking.com - Crystal Suites - Executive Single",
        "keywords": "Crystal Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-crystal-suites/342/": {
        "url_path": "/apartment/kampala-crystal-suites/342/",
        "title": "UgandaBooking.com - Crystal Suites - Executive Twin",
        "description": "UgandaBooking.com - Crystal Suites - Executive Twin",
        "keywords": "Crystal Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-crystal-suites/343/": {
        "url_path": "/apartment/kampala-crystal-suites/343/",
        "title": "UgandaBooking.com - Crystal Suites - Royal Executive Suite",
        "description": "UgandaBooking.com - Crystal Suites - Royal Executive Suite",
        "keywords": "Crystal Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      },
      "/apartment/kampala-crystal-suites/344/": {
        "url_path": "/apartment/kampala-crystal-suites/344/",
        "title": "UgandaBooking.com - Crystal Suites - Two Bedroom Apartment",
        "description": "UgandaBooking.com - Crystal Suites - Two Bedroom Apartment",
        "keywords": "Crystal Suites,suite in Kampala,suite in Uganda,Suite in Kampala,Suite in Uganda,UgandaBooking"
      }
    }
    )
  },

  getMetaDataByUrl(url) {
      let seoData = this.getSeoInfo();
      let data = _.get(seoData, url);

      if (data == undefined) {
          // Fall-back to home meta information if not defined
          data = _.get(seoData, "");
      }

      return data;
  }

};
