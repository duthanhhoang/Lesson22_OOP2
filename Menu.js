class Menu{
    constructor(name){
        this.name = name;
        this.items = this.load();
    }

    showAll(idTag){
        let str = '';
        for (let i = 0; i < this.items.length; i++) {
            str += `<div class="card">
                    <div id="img-border">
                        <img src="assets/${this.items[i].img}" alt="Denim Jeans" style="width:100%">
                    </div>
                    <h1>${this.items[i].name}</h1>
                    <p class="price">${this.convertMoney(this.items[i].price)} VNĐ</p>
                    <p><button onclick="addToOrder(${i})">Order</button></p>
                </div>`;
        }
        document.getElementById(idTag).innerHTML = str;
        
    }

    addItemToMenu(item){
        console.log(this.items);
        this.items.push(item);
        this.save();
    }

    convertMoney(money) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(money);
    }

    save() {
        localStorage.setItem("menu", JSON.stringify(this.items))
    }
    
    load() {
        // let items = [];
        // if(localStorage.hasOwnProperty("menu")){
        //     items = JSON.parse(localStorage.getItem("menu"));
        // }else{
        //     items = [];
        // }
        // return items;
        return JSON.parse(localStorage.getItem("menu")) ?? [];

    }
}