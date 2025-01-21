

class Student {

    constructor(name, surname, age){

        this.name = name;
        this.surname = surname;
        this.age = age;


    }

    getFullName = () => {
        return this.name + " " + this.surname;
    }
}