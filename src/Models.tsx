
export type School = "Lorehold" | "Prismari" | "Silverquill" | "Quandrix" | "Witherbloom"

export interface Person {
name: string,
pronouns: string
shortName: string,
frequents: Location[],
}

export interface Faculty extends Person {
school: School,
classes: Class[],
}

export interface Student extends Person{
school: School,
year: "1st" | "2nd" | "3rd" | "4th",
clubs: Club[],
jobs: Job[],
roommates: string[]
freshRoomies?: string[]
image?: string
connections?: string[]
}

export interface Club {
    name: string,
    shortName: string,
    location?: Location
    faculty?: string[]
}

export interface Class {
    name: string,
    shortName: string,
    location: Location,
    period: string,    
}

export class Location {
    name: string
    shortName: string
    campus: "Central" | School
    image?: string

    constructor(name: string, shortName: string, campus: "Central" | School, image?: string) {
        this.name = name;
        this.shortName = shortName;
        this.campus = campus;
        this.image = image;
    }

    toString(): string {
        return this.name
    }
}

export interface Campus {
    name: School | "Central"
    subtitle?: string
    study?: string[]
    colors?: string
    dichotomy?: string
}

export class Job {
    name: string
    location: Location | string

    constructor(name: string, location: Location | string) {
        this.name = name;
        this.location = location;
    }
}