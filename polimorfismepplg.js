// class Kucing{
//     bersuara(){
//         console.log("Meong...");
//     }
// }

// class Anjing{

//     bersuara(){
//         console.log("hey antek antek asing");
//     }
// }

// class Singalaut{

//     bersuara(){
//         console.log("Aug aug aug.....");
//     }
// }
// const Hewan = [new Kucing(), new Anjing()];
// Hewan.forEach(Hewan => Hewan.bersuara());

// const hewan3 = new Singalaut();
// hewan3.bersuara();

//buat file baru polimorfismepplg

class siswaPPLG{
    constructor(nama, skill, level){
        this.nama = nama;
        this.skill = skill;
        this.level = level;
    }

    tampilkan_nama(){
        console.log("nama siswa ini" + this.nama);
    }

    tampilkan_skill(){
        console.log("siswa ini" + this.skill);
    }

    tampilkan_lvl(){
        console.log("siswa ini level" + this.level)
    }
}

const siswaPPLG1 = new siswaPPLG("Kawn", "Ahli", "15");
siswaPPLG1.tampilkan_nama();
siswaPPLG1.tampilkan_skill();
siswaPPLG1.tampilkan_lvl();

const siswaPPLG2 = new siswaPPLG("Shwagger", "Ahli", "25");
siswaPPLG2.tampilkan_nama();
siswaPPLG2.tampilkan_skill();
siswaPPLG2.tampilkan_lvl();

const siswaPPLG3 = new siswaPPLG("Akmal", "Ahli", "67");
siswaPPLG3.tampilkan_nama();
siswaPPLG3.tampilkan_skill();
siswaPPLG3.tampilkan_lvl();

const siswaPPLG4 = new siswaPPLG("Reja", "Ahli", "30");
siswaPPLG4.tampilkan_nama();
siswaPPLG4.tampilkan_skill();
siswaPPLG4.tampilkan_lvl();

