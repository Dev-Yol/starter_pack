import Province from "./Province";

export default class City extends Province{
    constructor(id, title, zipcode) {
        super(id, title)
        this.zipcode = zipcode;
    }
}
