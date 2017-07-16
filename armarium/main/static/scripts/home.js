window.onload = function(e){
  console.info("HOME TEMPLATE");

 document.getElementById("addProduct").addEventListener("click", function(e){
   e.preventDefault();
location.href="/addProduct"
});

}
