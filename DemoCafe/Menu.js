class Menu{
    constructor(){
        this.items = this.load();
    }

    addItem(item){
        this.items.push(item);
        this.save();
    }

    displayAll(idTag){
        let str = '';
        for (let i = 0; i < this.items.length; i++) {
            str += `<div class="col-4 mb-2">
                        <div class="card" style="width: 100%">
                        <div class="img-border">
                            <img src="${this.items[i].img}" class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${this.items[i].name}</h5>
                            <p class="card-text">
                            ${this.items[i].price} VNĐ
                            </p>
                            <a href="#" class="btn btn-primary">ADD TO ORDER</a>
                        </div>
                        </div>
                    </div>`;
        }
        document.getElementById(idTag).innerHTML = str;
    }

    save(){
        let dataJson = JSON.stringify(this.items)
        localStorage.setItem('items', dataJson)
    }

    load(){
        if(localStorage.hasOwnProperty('items')){
            return JSON.parse(localStorage.getItem('items')); // string -> object/array
        }else{
            return [];
        }
    }
}