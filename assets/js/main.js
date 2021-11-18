function get(id){
    return document.getElementById(id);
}

var service = new ProductService();

function getListProduct(){
    service
    .getListProductApi()
    .then(function(result){
        renderData(result.data);
    })
    .catch(function(error) {
        console.log(error);
    });
}
getListProduct();

function renderData(data) {
    var content = "";
    data.forEach(function(item) {
        content += `
        <tr>
            <td>${item.id}</td>
            <td>${item.tenSP}</td>
            <td>${item.gia}</td>
            <td><img src="../../assets/img/${item.hinhAnh}" alt="product_img"></td>
            <td>${item.moTa}</td>
            <td>
                <button type="button" class="btn btn-info">Sửa</button>
                <button type="button" class="btn btn-danger">Xóa</button>
            </td>
        </tr>
        `;

    });
    get("tblDanhSachSP").innerHTML = content;
}
    