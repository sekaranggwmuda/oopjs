//buat class parent

class PPLG{

    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }

    perkenalan(){
        console.log("halo nama saya" + this.nama);
        console.log("umur saya" + this.umur);
    }
}

//buat class child

class Siswa extends PPLG{
    constructor(nama, umur, kelas){
        super(nama, umur);
        this.kelas = kelas;
    }

    belajar(){
        console.log(this.nama + "sedang belajar");
    }
}

//buat objek baru
const siswa1 = new Siswa("kawn", 15, "XI PPLG");
//memanggil method yang diwariskan
siswa1.perkenalan();
//memanggil method milik class siswa
siswa1.belajar();
//menampilkan properti class
console.log("kelas : " + siswa1.kelas);