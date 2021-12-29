function calculate() {
    let adults = document.getElementById("adults");
    let kids = document.getElementById("kids");
    let duration = document.getElementById("duration");

    let meet;
    let beer;
    let soda;
    if (duration.value < 6) {
        meet = (adults.value * 450) + ((kids.value * 0.5) * 450);
        beer = (adults.value * 1200);
        soda = (adults.value * 1000) + ((kids.value * 0.5) * 1000);
    }
    else {
        meet = (adults.value * 650) + ((kids.value * 0.5) * 650);
        beer = (adults.value * 2000);
        soda = (adults.value * 1500) + ((kids.value * 0.5) * 1500);
    }


    document.getElementById("meet").textContent = `${parseFloat(meet/100)} KG`;
    document.getElementById("beer").textContent = `${parseFloat(beer/100)} L`;
    document.getElementById("soda").textContent = `${parseFloat(soda/100)} L`;
    /*function calcualted() {
        //meet
        let paim = document.getElementById("containerForm");//pai

        let imgm = document.createElement("img");//imagem filho que vai ser criado
        imgm.src = "./img/meet.png";


        let pm = document.createElement("p");//filho que vai ser criado
        pm.className = "meet";
        pm.textContent = `• ${meet} G de Carne`;

        paim.appendChild(imgm);//criando
        paim.appendChild(pm);//criando


        //beer
        let paib = document.getElementById("containerForm");//pai

        let imgb = document.createElement("img");//imagem filho que vai ser criado
        imgb.src = "./img/beer.png";


        let pb = document.createElement("p");//filho que vai ser criado
        pb.className = "beer";
        pb.textContent = `• ${beer} ML of beer`;

        paib.appendChild(imgb);//criando
        paib.appendChild(pb);//criando


        //soda
        let pais = document.getElementById("containerForm");//pai

        let imgs = document.createElement("img");
        imgs.src = "./img/soda.png";


        let ps = document.createElement("p");//filho que vai ser criado
        ps.id = "soda";
        ps.textContent = `• ${soda} ML of soda`;

        pais.appendChild(imgs);//criando
        pais.appendChild(ps);//criando
    }
    calcualted();
    */
}