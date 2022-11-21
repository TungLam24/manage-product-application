let product_arr = ["Sony Experia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iPhone 6S", "Xiaomi Mi 5s Plus", "Apple iPone 8 Plus", "Fujitsu F-04E", "Oppo A71"]
let table = "<tr><td style='font-weight: bold;'>Product Name</td></tr>"
function displayProduct() {
    for(i of product_arr) {
        // table += `<tr><td id='${i}'><button onclick='edit("${i}")' value='${i}' class='name'>${i}</button></td><td><button class='button'>Edit</button><button class='button'>Delete</button></td></tr>`
        table += "<tr><td id='" + i + "'><button onclick='edit(\"" + i + "\")' value='" + i + "' class='name'>" + i + "</button></td><td><button class='button' onclick='confirmEdit(this)' value='" + i + "'>Edit</button><button class='button' onclick='remove(this)' value='" + i + "'>Delete</button></td></tr>"
    }
    document.getElementById("display").innerHTML = table
}
displayProduct()
function add() {
    x = document.getElementById("add").value
    product_arr.push(x)
    table += "<tr><td id='" + x + "'><button onclick='edit(\"" + x + "\")' value='" + x + "' class='name'>" + x + "</button></td><td><button class='button' onclick='confirmEdit(this)' value='" + x + "'>Edit</button><button class='button' onclick='remove(this)' value='" + x + "'>Delete</button></td></tr>"
    document.getElementById("display").innerHTML = table
    
    console.log(product_arr)    
}
function edit(x) {
    document.getElementById(x).innerHTML = "<input id='edit' type='text' value='" + x + "'></input>"
}
function confirmEdit(x) {
    let index = product_arr.indexOf(x.value)
    product_arr[index] = document.getElementById("edit").value
    table = "<tr><td style='font-weight: bold;'>Product Name</td></tr>"
    for(i of product_arr) {
        table += "<tr><td id='" + i + "'><button onclick='edit(\"" + i + "\")' value='" + i + "' class='name'>" + i + "</button></td><td><button class='button' onclick='confirmEdit(this)' value='" + i + "'>Edit</button><button class='button' onclick='remove(this)' value='" + i + "'>Delete</button></td></tr>"
    }
    document.getElementById("display").innerHTML = table
}
function remove(x) {
    let index = product_arr.indexOf(x.value)
    product_arr.splice(index, 1)
    table = "<tr><td style='font-weight: bold;'>Product Name</td></tr>"
    for(i of product_arr) {
        table += "<tr><td id='" + i + "'><button onclick='edit(\"" + i + "\")' value='" + i + "' class='name'>" + i + "</button></td><td><button class='button' onclick='confirmEdit(this)' value='" + i + "'>Edit</button><button class='button' onclick='remove(this)' value='" + i + "'>Delete</button></td></tr>"
    }
    document.getElementById("display").innerHTML = table
}
