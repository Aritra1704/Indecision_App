class Person {
    constructor(name = 'Anonymous', age = 0)  {
        this.name = name;
        this.age = age;
    }
    
    getGreeting() {
        return `Hi! I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;// Flip it twice to give a boolean value if any value is available.
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` My major is ${this.major}.`
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        greeting += ` I'm visiting from ${this.homeLocation}.`
        return greeting;
    }
}

const me = new Student('Aritra Pal', 31, 'ECE');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const traveller = new Traveller('Jeet', 30, 'Hyderabad');
console.log(traveller.getGreeting());