// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(teach) {
        super(teach);
        this.specialty = teach.specialty;
        this.favLanguage = teach.favLanguage;
        this.catchPhrase = teach.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    givePoints(student) {
        let points = Math.floor((Math.random() * 10));
        if (Math.random() < 0.5) {
            student.grade += points;
            console.log(`${student.name} received ${points} points. Total grade now ${student.grade}`);
        } else {
            student.grade -= points;
            console.log(`${student.name} lost ${points} points. Total grade now ${student.grade}`);
        }
    }
}

class Student extends Person {
    constructor(learn) {
        super(learn);
        this.previousBackground = learn.previousBackground;
        this.className = learn.className;
        this.favSubjects = learn.favSubjects;
        this.grade = learn.grade;
    }
    listsSubjects() {
        // console.log(this.favSubjects.forEach(item => item));
        const list = this.favSubjects;
        list.forEach(item => console.log(item));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        if (this.grade >= 70) {
            console.log(`Congratulations, ${this.name}! You graduated!`);
        } else {
            console.log(`Keep working, ${this.name}!`);
        }
    }
}

class ProjectManagers extends Instructor {
    constructor(help) {
        super(help);
        this.gradClassName = help.gradClassName;
        this.favInstructor = help.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

////////////////////////////objects/////////////////////////////

const worf = new ProjectManagers({
    name: "Worf",
    age: 36,
    location: "Qr'onus",
    gender: "M",
    specialty: "Honor",
    favLanguage: "Django",
    catchPhrase: "It is a good day to die",
    gradClassName: "WEB50",
    favInstructor: "picard",
})

const troy = new ProjectManagers({
    name: "Deanna",
    age: 28,
    location: "Betazed",
    gender: "F",
    specialty: "Psychology",
    favLanguage: "React",
    catchPhrase: "What do you think?",
    gradClassName: "UX5",
    favInstructor: "riker",
})

const paris = new Student({
    name: "Tom",
    age: 18,
    location: "Earth",
    gender: "M",
    previousBackground: "Prison",
    className: "CS31",
    favSubjects: ['Python', 'GO', 'Java', 'C#'],
    grade: 70,
})

const ro = new Student({
    name: "Laren",
    age: 24,
    location: "Bajor",
    gender: "F",
    previousBackground: "refugee",
    className: "IOS9",
    favSubjects: ['React', 'Less', 'JavaScript', 'Python'],
    grade: 90,
})

const crusher = new Student({
    name: "Wesley",
    age: 18,
    location: "San Francisco",
    gender: "M",
    previousBackground: "cadet",
    className: "WEB19",
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 60,
})

const riker = new Instructor({
    name: "William",
    age: 32,
    location: "Alaska",
    gender: "M",
    specialty: "tactical",
    favLanguage: "C++",
    catchPhrase: "I never bluff."
})

const picard = new Instructor({
    name: "Jean-Luc",
    age: 42,
    location: "France",
    gender: "M",
    specialty: "Diplomacy",
    favLanguage: "C",
    catchPhrase: "Make it so."
})

console.log("------ \n Welcom to Lambda School! \n------ ");
worf.speak();
troy.grade(crusher, "CSS");
riker.demo("preprocessors");
paris.listsSubjects();
ro.PRAssignment("Sass");
crusher.sprintChallenge("JavaScript");
worf.standUp("#CS32_worf");
troy.debugsCode(paris, "Python");
console.log(picard.catchPhrase);
picard.givePoints(crusher);
crusher.graduate();
riker.givePoints(paris);
paris.graduate();
troy.givePoints(ro);
ro.graduate();