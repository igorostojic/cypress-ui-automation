export default class Products {
  readonly btn: {
    submitSearch: string;
    addToCart: string;
    viewProduct: string;
    continueShopping: string;
  };

  readonly input: {
    search: string;
  };

  readonly link: {
    viewCart: string;
    polo: string;
    hm: string;
    madame: string;
    mastHarbour: string;
    babyhug: string;
    allenSollyJunior: string;
    kookieKids: string;
    biba: string;
  };

  readonly label: {
    productAddedHeader: string;
    productAddedBody: string;
  };

  constructor() {
    this.btn = {
      submitSearch: "#search_product",
      addToCart: '.productinfo > [data-product-id="1"]',
      viewProduct: '[href="/product_details/1"]',
      continueShopping: '[data-dismiss="modal"]',
    };

    this.input = {
      search: "#search_product",
    };

    this.link = {
      viewCart: '.modal-body > p > [href="/view_cart"]',
      polo: '[href="/brand_products/Polo"]',
      hm: '[href="/brand_products/H&M"]',
      madame: '[href="/brand_products/Madame"]',
      mastHarbour: '[href="/brand_products/Mast & Harbour"]',
      babyhug: '[href="/brand_products/Babyhug"]',
      allenSollyJunior: '[href="/brand_products/Allen Solly Junior"]',
      kookieKids: '[href="/brand_products/Allen Solly Junior"]',
      biba: '[href="/brand_products/Biba"]',
    };

    this.label = {
      productAddedHeader: ".modal-header > h4",
      productAddedBody: ".modal-body",
    };
  }
}
