/*
Tạo 1 mảng products chứa các tên sản phẩm sau: mercedes, audi, ford, lamborghini
viết 1 hàm showProduct thực hiện chức năng hiển thị ra tất cả các sản phẩm trong mảng
kiểm tra xem mảng product có phải là mảng rỗng hay không (2 điểm)
nếu là mảng rỗng log ra "không có sản phẩm để hiển thị"
nếu mảng có dữ liệu thì log ra tất cả tên sản phẩm trong mảng
viết 1 hàm addProduct để thực hiện việc thêm sản phẩm  ( 2 điểm )
tên sản phẩm nhập vào từ bàn phím
kiểm tra nếu tên sản phẩm nhỏ hơn 5 ký tự thì bắt nhập lại 
nếu dữ liệu nhập vào hợp lệ thì cho phép thêm vào mảng products
viết 1 hàm removeProduct để thực hiện việc xóa sản phẩm ( 2 điểm )
nhập tên sản phẩm cần xóa từ bàn phím
nếu tìm thấy tên sản phẩm cần xóa thì thực hiện việc xóa tên sản phẩm đó khỏi mảng
nếu không tìm thấy thì log ra thông báo "không tìm thấy sản phẩm cần xóa"
hiển thị lại dữ liệu trong mảng sau khi đã xóa sản phẩm thành công
viết 1 hàm updateProduct thực hiện cập nhật sản phẩm  ( 2 điểm )
nhập tên sản phẩm cần cập nhật từ bàn phím
nếu không tìm thấy thì log ra thông báo "không tìm thấy sản phẩm cần cập nhật"
nếu tìm thấy thì thực hiện cập nhật giá trị tên sản phẩm đó 
hiển thị lại dữ liệu trong mảng sau khi đã cập nhật thành công
viết 1 hàm removeAllProduct thực hiện việc xóa toàn bộ sản phẩm trong mảng, sau đó bên trong hàm này sẽ gọi lại hàm showProduct để thực hiện ( 2 điểm )
*/

const products=['mercedes','audi','ford','lamborghini'];
const box =document.querySelector('#box1')
const showProduct=(arr) =>{
    if(arr.length == 0 ){
        console.log("không có sản phầm nào để hiển thị")
    }else{
      let html= arr.map(item=>{
           console.log(item)
           return `
           <div>
           <h3>${item}</h3>
           </div>
           `
        }).join('')
        box.innerHTML=html
    }
}
showProduct(products);

const addProduct=arr=>{
    const button =document.querySelector('#button')
    button.onclick=function(){
        const input=document.querySelector('#input').value;
        if(input.length < 5){
            console.log('xin mời nhập lại')
        }else{
            arr.push(input);
            showProduct(products);
        }
    }
}
addProduct(products)


const removeProduct=(arr)=>{
    const button2=document.querySelector('#delete')
    button2.onclick=function(){
        const input=document.querySelector('#input').value;
    const a= arr.filter(item=>{
        return item !== input
       })
       
    }
}

removeProduct(products)