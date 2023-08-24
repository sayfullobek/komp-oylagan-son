let random = Number.parseInt(Math.random()*100)
let natijaList = []
let ism = prompt("ismingizni kiriting")
let urinishlarSoni = 0

if (ism===""){
    ism = prompt("ismingizni kiriting (ism bo'sh bo'lmasligi kerak aks holda o'zimiz sizga ism beramiz)")
}

function topdim(){
    let son = document.getElementById("son").value;
        if (son===""){
            result("red", ism+" avval son kiriting")
        }else{
            urinishlarSoni++;
            if (son>100){
                result("red", "100dan katta son kiritish mumkin emas...")
            }else if(son<0){
                result("red", "0dan kichik son kiritish mumkin emas...")
            }else{
                if (son>random){
                    result("yellow", "siz kompyuter o'ylagan sondan katta son kiritdingiz")
                }else if (son<random){
                    result("yellow", "siz kompyuter o'ylagan sondan kichik son kiritdingiz")
                }else{
                    document.getElementById("topish").className = "btn btn-primary mt-5 disabled"
                    result("green", "siz yutdingiz😎😎")
                    if (ism===""){
                        ism = "Hech kim"
                    }
                    let a = {name:ism, urinishlar:urinishlarSoni}
                    natijaList.push(a)
                    javoblar = []
                    natijaList.map(item=>{
                        javoblar.push(
                            `
                                <h4 class="text-center text-primary mt-2">${item.name} ${item.urinishlar}ta urinish 😎😎</h4>
                            `
                        )
                    })
                    javoblar = javoblar.join('')
                    document.getElementById("natijalar").innerHTML = javoblar
        
                    setTimeout(() => {
                        random = Number.parseInt(Math.random()*100)
                        document.getElementById("son").value = ''
                        document.getElementById("javob").style.display="none"
                        ism = prompt("ismingizni kiriting")
                        urinishlarSoni = 0
                        document.getElementById("topish").className = "btn btn-primary mt-5"
                    }, 3000);
                }
            }
        }
}

function result(color, text){
    let javob = document.getElementById("javob")
    javob.style.display = "block";
    javob.style.color = color;
    javob.innerText = text
}