function sayHello(person: string): string {
  return "Hello, " + person;
}

var user = "Person exercise for different elements, wage and certifications!!!";
document.getElementById("wordToReplace").innerHTML = sayHello(user);

class person {
  private Firstname: string;
  private Lastname: string;
  private Age: number;
  private Phonenumber: string;
  private State: string;
  private Zipcode: string;
  private Occupation: string;
  private Weekwage: number;
  private Weekhours: number;
  private certifications: string[] = [];

  constructor(
    Firstname: string,
    Lastname: string,
    Age: number,
    Phonenumber: string,
    State: string,
    Zipcode: string,
    Occupation: string,
    Weekwage: number,
    Weekhours: number
  ) {
    this.Firstname = Firstname;
    this.Lastname = Lastname;
    this.Age = Age;
    this.Phonenumber = Phonenumber;
    this.State = State;
    this.Zipcode = Zipcode;
    this.Occupation = Occupation;
    this.Weekwage = Weekwage;
    this.Weekhours = Weekhours;
  }

  getFirstname(): string {
    return "Person's first name is : " + this.Firstname;
  }

  getLastname(): string {
    return "Person's last name is : " + this.Lastname;
  }

  setFirstname(Firstname: string): void {
    this.Firstname = Firstname;
  }

  setLastname(Lastname: string): void {
    this.Lastname = Lastname;
  }
  getPhonenumber(): string {
    return this.Phonenumber;
  }
  setPhonenumber(Phonenumber: string): void {
    this.Phonenumber = Phonenumber;
  }
  getState(): string {
    return this.State;
  }
  setState(State: string): void {
    this.State = State;
  }
  getZipcode(): string {
    return this.Zipcode;
  }
  setZipcode(Zipcode: string): void {
    this.Zipcode = this.Zipcode;
  }
  getOccupation(): string {
    return this.Occupation;
  }
  setOccupation(Occupation: string): void {
    this.Occupation = this.Occupation;
  }
  getWage(): string {
    if (this.Weekhours == null) {
      return (
        this.Firstname +
        " " +
        this.Lastname +
        " - " +
        "Weekly wage : $" +
        40 * this.Weekwage
      );
    } else {
      return (
        this.Firstname +
        " " +
        this.Lastname +
        " - " +
        "Weekly wage : $" +
        this.Weekhours * this.Weekwage
      );
    }
  }
  addCerts(...args: string[]) {
    this.certifications.push(...args);
    return "Certifications: " + this.certifications.join(", ");
  }
}

let person1 = new person(
  "Aprajita",
  "Yadav",
  36,
  "1234567890",
  "NC",
  "28277",
  "Engineer",
  20,
  50
);

let person2 = new person(
  "Michaela",
  "Hopkins",
  46,
  "4354567890",
  "NC",
  "28217",
  "Accountanta",
  30,
  null
);

// Defined the interface with 3 elements.
interface PersonOptions {
  Fname?: string;
  Lname?: string;
  Age?: number;
}

//Function to check the changes for the 3 elements.
function PersonOptions(
  config: PersonOptions
): { Fname: string; Lname: string; Age: number } {
  let newPerson = {
    Fname: "Nikunj",
    Lname: "Bachchan",
    Age: 36,
  };
  if (config.Fname) {
    newPerson.Fname = config.Fname;
  }
  if (config.Lname) {
    newPerson.Lname = config.Lname;
  }
  if (config.Age) {
    newPerson.Age = config.Age + 5;
  }
  return newPerson; //Returning the new changed values.
}

//Calling the PersonOptions functions with new values passed and checked.
let myPerson = PersonOptions({
  Fname: "Mark",
  Lname: "",
  Age: 54,
});

document.getElementById("p1firstname").innerHTML = person1.getFirstname();
document.getElementById("p1lastname").innerHTML = person1.getLastname();
document.getElementById("p2firstname").innerHTML = person2.getFirstname();
document.getElementById("p2lastname").innerHTML = person2.getLastname();
document.getElementById("p1wage").innerHTML = person1.getWage();
document.getElementById("p2wage").innerHTML = person2.getWage();
document.getElementById("p1cert").innerHTML = person1.addCerts("MBA", "MD");
document.getElementById("p2cert").innerHTML = person2.addCerts("BTECH", "BSC");

//Display new values on HTML
document.getElementById("newperson").innerHTML =
  "New details of person using interface are: " +
  myPerson.Fname +
  " " +
  myPerson.Lname +
  " - Age: " +
  myPerson.Age;
