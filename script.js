function hrgn(a){

}

class Random {
    constructor(seed = 88675123) {
      this.x = 136489334497945317447;
      this.y = 176418557660385764671;
      this.z = 521212451872250623519;
      this.w = seed;
    }
    
    // XorShift
    next() {
      const t = this.x ^ (this.x << 11);
      this.x = this.y;
      this.y = this.z;
      this.z = this.w;
      return this.w = (this.w ^ (this.w >>> 19)) ^ (t ^ (t >>> 8));
    }
    
    // min 以上 max 以下の乱数を生成する
    nextInt(min, max) {
      const r = Math.abs(this.next());
      return min + (r % (max + 1 - min));
    }
  }

let d = Math.floor(Date.now() / 1000 / 60 / 5);
console.log(d);
  
const seed = d;  // 任意のシード値を決める
const random = new Random(seed);

const hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん"

let odai = document.getElementById('odai');
console.debug(odai);
odai.textContent = "odaitayo!";

for(let i = 0; i < 99; i++) {
    console.log(random.nextInt(10**9, 10**10-1));
}

odai_seed = random.nextInt(10**9, 10**10-1).toString()

console.log(odai_seed)
a = odai_seed[0] % 3 + 4
console.log(a)
b = odai_seed[1] % 2
console.log(b)


let c;

if (a%2 == 0){
  c = a / 2
}
else{
if (b==1){
  c = (a-1)/2
}else{
  c = (a+1)/2
}
}
console.log(c)

let e = []

for (let i= 0; i < c; i++){
  e.push(odai_seed[i + 2] % 2 + 1);
}

console.log(e);

let odaidayo = "";
let k = 0;

for (let i = 0; i < a; i++){
  if (b==0){
    b = 1;
    for (let j = 0;j<e[k];j++){
    odaidayo = odaidayo + hiragana[random.nextInt(0, hiragana.length -1)]
    }
    k++;
    console.log("k" + k)
  }else{
    b = 0;
    odaidayo = odaidayo + "(　)";
  }
}

console.log(odaidayo);
odai.textContent = odaidayo;