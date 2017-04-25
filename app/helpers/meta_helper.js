const join = require('url-join');
const _ = require('lodash');

module.exports = {
  getSeoInfo() {
    return (
      {
        "/index/": {
          "id": 1,
          "user_id": 1,
          "full_url": "/index/",
          "title": "UgandaBooking.com - Hotels in Uganda",
          "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
          "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, ",
          "created_at": "2017-04-02 08:35:34",
          "updated_at": "2017-04-02 08:35:34",
          "deleted_at": null
        },
        "/guest-houses/": {
          "id": 2,
          "user_id": 1,
          "full_url": "/guest-houses/",
          "title": "UgandaBooking.com - Accommodations in Uganda",
          "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
          "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, ",
          "created_at": "2017-04-02 08:35:34",
          "updated_at": "2017-04-02 08:35:34",
          "deleted_at": null
        },
        "/contact-us/": {
          "id": 5,
          "user_id": 1,
          "full_url": "/contact-us/",
          "title": "UgandaBooking.com - Contact Us",
          "description": "Whether you’re looking for hotels, homes, or holiday rentals in Uganda, you’ll always find the guaranteed lowest price. Browse our  accommodations in over 500 accommodations.",
          "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, ",
          "created_at": "2017-04-25 08:35:34",
          "updated_at": "2017-04-25 08:35:34",
          "deleted_at": null
        },
        "": {
          "id": 6,
          "user_id": 1,
          "full_url": "",
          "title": "UgandaBooking.com - Hotels in Uganda",
          "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
          "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, ",
          "created_at": "2017-04-25 08:35:34",
          "updated_at": "2017-04-25 08:35:34",
          "deleted_at": null
        },
        "/sign-in/": {
          "id": 7,
          "user_id": 1,
          "full_url": "/sign-in/",
          "title": "UgandaBooking.com - Sign In",
          "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
          "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, ",
          "created_at": "2017-04-25 08:35:34",
          "updated_at": "2017-04-25 08:35:34",
          "deleted_at": null
        },
        "/reset-password/": {
          "id": 8,
          "user_id": 1,
          "full_url": "/reset-password/",
          "title": "UgandaBooking.com - Reset Password",
          "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
          "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, ",
          "created_at": "2017-04-25 08:35:34",
          "updated_at": "2017-04-25 08:35:34",
          "deleted_at": null
        },
        "/about-us/": {
          "id": 9,
          "user_id": 1,
          "full_url": "/about-us/",
          "title": "UgandaBooking.com - About Us",
          "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
          "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, ",
          "created_at": "2017-04-25 08:35:34",
          "updated_at": "2017-04-25 08:35:34",
          "deleted_at": null
        },
        "/blogs/": {
          "id": 10,
          "user_id": 1,
          "full_url": "/blogs/",
          "title": "UgandaBooking.com - Blogs",
          "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
          "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, ",
          "created_at": "2017-04-25 08:35:34",
          "updated_at": "2017-04-25 08:35:34",
          "deleted_at": null
        },
        "/my-account/": {
          "id": 11,
          "user_id": 1,
          "full_url": "/my-account/",
          "title": "UgandaBooking.com - My Account",
          "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
          "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, ",
          "created_at": "2017-04-25 08:35:34",
          "updated_at": "2017-04-25 08:35:34",
          "deleted_at": null
        },
        "/terms-of-use/": {
          "id": 12,
          "user_id": 1,
          "full_url": "/terms-of-use/",
          "title": "UgandaBooking.com - Terms of Use",
          "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
          "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, ",
          "created_at": "2017-04-25 08:35:34",
          "updated_at": "2017-04-25 08:35:34",
          "deleted_at": null
        },
        "/privacy-policy/": {
          "id": 13,
          "user_id": 1,
          "full_url": "/privacy-policy/",
          "title": "UgandaBooking.com - Privacy Policy",
          "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
          "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, ",
          "created_at": "2017-04-25 08:35:34",
          "updated_at": "2017-04-25 08:35:34",
          "deleted_at": null
        },
        "/error/": {
          "id": 14,
          "user_id": 1,
          "full_url": "/error/",
          "title": "UgandaBooking.com - Page Not Found",
          "description": "UgandaBooking.com’s Official Website! Located in Uganda and have hundreds of hotels online. Get Instant Confirmation · No Booking Fees · Cheap Price",
          "keywords": "guest houses, bed and breakfast,  accommodation, guesthouses, cheap hotels in uganda, cheap guesthouses, guesthouses in kampala ,guesthouses in uganda, affordable accommodation in uganda, safari guesthouses in uganda, hotels in uganda, hotels in kampala, ",
          "created_at": "2017-04-25 08:35:34",
          "updated_at": "2017-04-25 08:35:34",
          "deleted_at": null
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
