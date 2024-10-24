export default class Cart {
  readonly btn: {
    proceedToCheckout: string;
    deleteProduct: string;
  };

  readonly tableField: {
    item: string;
    description: string;
    price: string;
    quantity: string;
    total: string;
  };

  readonly label: {
    emptyCart: string;
  };

  constructor() {
    this.btn = {
      proceedToCheckout: ".check_out",
      deleteProduct: ".cart_quantity_delete",
    };

    this.tableField = {
      item: ".cart_product",
      description: ".cart_description",
      price: ".cart_price",
      quantity: ".cart_quantity",
      total: ".cart_total",
    };

    this.label = {
      emptyCart: "#empty_cart > p > b",
    };
  }
}
