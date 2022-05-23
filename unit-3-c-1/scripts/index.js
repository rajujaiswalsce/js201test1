//store the products array in localstorage as "products"






function Product(t,d,p,im){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = im
}


function addData(e){
   e.preventDefault();
   
   let form = document.getElementById("products");

   let type = form.type.value;
   let desc = form.desc.value;
   let price = form.price.value;
   let image = form.image.value;
   
   let s1 = new Product(type,desc,price,image)
//    console.log(s1)

let data = JSON.parse(localStorage.getItem("products")) || [];
 data.push(s1)

 localStorage.setItem("products" , JSON.stringify(data))
 console.log(data)
 alert("Add the Iteam product")

}
