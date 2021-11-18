function ProductService() {
    this.arr = [];
    this.getListProductApi = function() {
        return axios({
            url: "https://618dd53dfe09aa00174408cd.mockapi.io/api/products",
            method: "GET",
        })
    };
}