export default class HomePage {
  readonly link: {
    homePage: string;
    products: string;
    cart: string;
    login: string;
    logout: string;
    deleteAccount: string;
  };

  readonly label: {
    name: string;
    carouselHeading: string;
  };

  constructor() {
    this.link = {
      homePage: '[href="/"]',
      products: '[href="/products"]',
      cart: '[href="/view_cart"]',
      login: '[href="/login"]',
      logout: '[href="/logout"]',
      deleteAccount: '[href="/delete_account"]',
    };

    this.label = {
      name: ".fa-user + b",
      carouselHeading: ".carousel-inner > .item.active  > div > h2",
    };
  }
}
