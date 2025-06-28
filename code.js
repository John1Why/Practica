function duplicate() {
        if(document.getElementById("Animation_a")){
            document.getElementById("Animation_a").remove()
        }
    if(document.getElementById("text").value !=""){
        const t = document.getElementById("text").value
        document.getElementById("text").value = ""

        let ramka = document.getElementById("ramka")
        let firstChild_ramka = ramka.firstChild
        let newSMS = document.createElement("table")
        newSMS.classList.add("sms-from-us")
        id = document.getElementById("ramka").childElementCount
        newSMS.id = id+1

        ramka.insertBefore(newSMS, firstChild_ramka)

        let sms = document.createElement("td")
        sms.classList.add("otstup")
        sms.id = newSMS.id + "_sms"
        let ava = document.createElement("td")
        ava.classList.add("razmer")
        ava.id = newSMS.id + "_ava"
        newSMS.appendChild(ava)
        newSMS.appendChild(sms)

        let pic = document.createElement("div")
        pic.classList.add("avatarka")
        pic.id = newSMS.id + "_pic"
        let txt = document.createElement("div")
        txt.classList.add("sms")
        txt.id = newSMS.id + "_txt"
        txt.innerHTML = t
        txt.disabled = true
        
        ava.appendChild(pic)
        sms.appendChild(txt)




        let strelka = document.getElementById("strelka")
        strelka.style.backgroundImage = 'url("Серая средняя.png")'

    
    let num1 = document.getElementById("num1").innerHTML;
    console.log(num1)
    let num2 = document.getElementById("num2").innerHTML;

    function createBotMessage(message) {
        let ramka = document.getElementById("ramka");
        let firstChild_ramka = ramka.firstChild;
        let newSMS = document.createElement("table");
        newSMS.classList.add("sms-from-us");
        let id = ramka.childElementCount;
        newSMS.id = id + 1;

        ramka.insertBefore(newSMS, firstChild_ramka);

        let sms = document.createElement("td");
        sms.classList.add("otstup");
        sms.id = newSMS.id + "_sms";
        let ava = document.createElement("td");
        ava.classList.add("razmer");
        ava.id = newSMS.id + "_ava";
        newSMS.appendChild(ava);
        newSMS.appendChild(sms);

        let pic = document.createElement("div");
        pic.classList.add("avatarka-bot");
        pic.id = newSMS.id + "_pic";
        let txt = document.createElement("div");
        txt.classList.add("sms-bot");
        txt.id = newSMS.id + "_txt";
        txt.innerHTML = message;
        txt.disabled = true;

        ava.appendChild(pic);
        sms.appendChild(txt);
    }

    let flag = false;

    if (t == "/start") {
        if (!flag) {
            createBotMessage("Привет, меня зовут Чат-бот, а как зовут тебя?");
            flag = true;
        }
    } else if(t == "/stop"){
        createBotMessage("Всего доброго, если хочешь поговорить пиши /start");
            flag = false;
    }else if (t.includes("/name: ")) { // 7
        const name = t.slice(7).trim();
        createBotMessage(`Привет ${name}, приятно познакомиться. Я умею считать, введи числа которые надо посчитать`);


    } else if (t.startsWith("/number:")) {
        let numbersStr = t.substring(8).trim().split(','); // Вырезаем строку после "/number:" и разбираем на массив по запятым
        num1 = parseFloat(numbersStr[0]);
        document.getElementById("num1").innerHTML = num1
        num2 = parseFloat(numbersStr[1]);
        document.getElementById("num2").innerHTML = num2

        if (!isNaN(num1) && !isNaN(num2)) {
            createBotMessage(`Вы ввели следующие числа: ${num1}, ${num2}.  Выберите одну из операций {-, +, *, /}`);
        } else {
            createBotMessage("введите числа нормально");
            num1 = null;
            num2 = null;

        }
    } else if (t == "/" || t == "*" || t == "+" || t == "-") {
        if (num1 === null || num2 === null) {
            createBotMessage("!!!!Сначала введите числа!!!!");
        } else {
            let result;
            switch (t) {
                case "/":
                    result = num1 / num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "+":
                    result = Number(num1) + Number(num2);
                    break;
                case "-":
                    result = num1 - num2;
                    break;
            }
            if(isNaN(result)){
                createBotMessage(`Результат: ${result}`);
            } else {
                createBotMessage(`Результат: ${result}`);
            }
        }

    } else {
        createBotMessage("Я не понимаю, введите другую команду!");
    }

        }


        // let original = document.getElementById('zagotovka');  
        // let clone = original.cloneNode(true);
        
        // clone.hidden = false
        // id = document.getElementById("ramka").childElementCount
        // clone.id =id+1
        // clone.lastChild = clone.id + "ava"
        // document.getElementById("txt").innerHTML = t
        
        // console.log (document.getElementById(id+1).firstChild)

    } 
function forText(){
    document.getElementById("text").addEventListener('input', function(){
        let strelka = document.getElementById("strelka")
        if(document.getElementById("text").value !=""){
            strelka.style.backgroundImage = 'url(icons8-paper-plane-48.png)'
            if(document.getElementById("Animation_a") ==null){
                let ramka = document.getElementById("ramka")
                let firstChild_ramka = ramka.firstChild
                let newSMS = document.createElement("table")
                newSMS.classList.add("sms-from-us")
                newSMS.id = "Animation_a"

                ramka.insertBefore(newSMS, firstChild_ramka)

                let sms = document.createElement("td")
                sms.classList.add("otstup")
                sms.id = newSMS.id + "_sms"
                let ava = document.createElement("td")
                ava.classList.add("razmer")
                ava.id = newSMS.id + "_ava"
                newSMS.appendChild(ava)
                newSMS.appendChild(sms)

                let pic = document.createElement("div")
                pic.classList.add("avatarka")
                pic.id = newSMS.id + "_pic"
                let txt = document.createElement("div")
                txt.classList.add("anim")
                txt.id = newSMS.id + "_txt"
                ava.appendChild(pic)
                sms.appendChild(txt)


                let point_1 = document.createElement("div")
                point_1.classList.add("point1")
                point_1.id = newSMS.id + "_point_1"

                let point_2 = document.createElement("div")
                point_2.classList.add("point2")
                point_2.id = newSMS.id + "_point_2"

                let point_3 = document.createElement("div")
                point_3.classList.add("point3")
                point_3.id = newSMS.id + "_point_23"

                txt.appendChild(point_1)
                txt.appendChild(point_2)
                txt.appendChild(point_3)
            }
        }else{
            strelka.style.backgroundImage = 'url("Серая средняя.png")'
            if(document.getElementById("Animation_a")){
                document.getElementById("Animation_a").remove()
            }
        }
    })
}



        
