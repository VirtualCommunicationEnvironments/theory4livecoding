

class Student {

  defaultImgLink = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/RedcrestedTuraco.jpg/300px-RedcrestedTuraco.jpg';

  constructor(name, surname, age, imgLink){

    this.name = name;
    this.surname = surname;
    this.age = age;

    this.imgLink = imgLink || this.defaultImgLink;

  }

  getFullName = () => {
    return this.name + ' ' + this.surname;
  }


}