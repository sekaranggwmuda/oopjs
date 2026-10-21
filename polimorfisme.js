class Kucing{
    bersuara(){
        console.log("Meong...");
    }
}

class Anjing{

    bersuara(){
        console.log("hey antek antek asing");
    }
}

class Singalaut{

    bersuara(){
        console.log("Aug aug aug.....");
    }
}
const Hewan = [new Kucing(), new Anjing()];
Hewan.forEach(Hewan => Hewan.bersuara());

const hewan3 = new Singalaut();
hewan3.bersuara();

//buat file baru polimorfismepplg