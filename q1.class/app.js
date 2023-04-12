class Macbook {
	constructor(obj){
    this.cpu = 'M2';
    this.memory = '16GB';
    this.screenWidth = obj.screenWidth;
    this.color = obj.color;
  }
  
  showSpec() {
    document.getElementById("spec").innerHTML = `CPU:${this.cpu}、メモリ：${this.memory}、画面幅：${this.screenWidth}インチ、カラー：${this.color}です`;
  }

  showPrice() {
    let price = "";
    if(this.screenWidth >= 14){
      price = "17~45万円"
    } else if(this.screenWidth === 15){
      price = "35~50万円"
    } else {
      price = "特注"
    }
    document.getElementById("price").innerHTML = `${price}で購入できます`;
  }
}

const myMachine = new Macbook({
  screenWidth: 13,
  color: "Black"
});

// Q1
myMachine.showSpec();

// Q2
myMachine.showPrice();