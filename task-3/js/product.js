export class Product {
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }

  static selectByCondition(products, condition) {
    const filterParams = condition.split("&");

    const filteredProducts = products.filter((product) => {
      for (let filterParam of filterParams) {
        const [key, operator, value] = this.#parseFilterParam(filterParam);

        const result = this.#operators[operator](product[key], value);
        if (!result) return false;
      }

      return true;
    });

    return filteredProducts;
  }

  static #parseFilterParam(filterParam) {
    const partsParam = filterParam.split("-");

    if (partsParam.length !== 3) {
      const value = partsParam[1].match(/\d+/);

      partsParam.push(value[0]);
      partsParam[1] = partsParam[1].replace(value, "");
    }

    return partsParam;
  }

  static #operators = {
    contains: (value, valueComparison) => value.includes(valueComparison),
    starts: (value, valueComparison) => value.startsWith(valueComparison),
    ends: (value, valueComparison) => value.endsWith(valueComparison),
    "=": (value, valueComparison) => value === +valueComparison,
    "<": (value, valueComparison) => value < +valueComparison,
    ">": (value, valueComparison) => value > +valueComparison,
    "<=": (value, valueComparison) => value <= +valueComparison,
    ">=": (value, valueComparison) => value >= +valueComparison,
  };
}
