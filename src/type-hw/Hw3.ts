/*
Intro:
    Since we already have some of the additional
    information about our users, it's a good idea
    to output it in a nice way.
Exercise:
    Fix type errors in logPerson function.
    logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: occupation for User and role for Admin.
*/
interface Bio {
  name: string;
  age: number;
}

interface User extends Bio {
  occupation: string;
}

interface Admin extends Bio {
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
];

export function logPerson(person: Person) {
  let additionalInformation: string;
  if ('role' in person) {
    additionalInformation = person.role;
  } else {
    return person.occupation;
  }
  return console.debug(
    ` - ${person.name}, ${person.age}, ${additionalInformation}`
  );
}

console.debug('Persons:');
console.debug(persons.map(logPerson));

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing
