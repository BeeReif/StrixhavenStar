import { Club, Faculty, Location } from "../Models";
import { BIBLIOPLEX, BLISS_HALL, COMMONS, CULTIVARIUM, DORMS_SILV, DRAGONSBREATH, GUARDIAN_HALL, MARIONNETTE_HALL, SANCTUARY, STADIUM, WHITERAVEN } from "./Locations";

export const BOOK_CLUB: Club = {
    name: "Book Club",
    shortName: "Book Club",
    location: BIBLIOPLEX
}

export const SPARRING: Club = {
    name: "Sparring",
    shortName: "Sparring",
    location: STADIUM
}

export const DEAD_LANGUAGES: Club = {
    name: "The Dead Languages Society",
    shortName: "Dead Languages",
    location: GUARDIAN_HALL,
}

export const FINE_ARTS: Club = {
    name: "The Distinguished Society of Fine Arts",
    shortName: "Fine Arts",
    location: SANCTUARY
}

export const DRAGONCHESS: Club = {
    name: "Dragonchess Club",
    shortName: "Dragonchess",
    location: CULTIVARIUM
}

export const DEBATE: Club = {
    name: "The Strixhaven Speech and Debate Team",
    shortName: "Debate",
    location: WHITERAVEN
}

export const HORTICULTURE: Club = {
    name: "Fantastical Horticulture",
    shortName: "Horticulture",
    location: BLISS_HALL
}

export const ENTREPRENEURS: Club = {
    name: "The Future Entrepreneurs of Strixhaven",
    shortName: "Entrepreneurs",
    location: MARIONNETTE_HALL
}


export const SILKBALL: Club = {
    name: "Intramural Silkball",
    shortName: "Silkball",
    location: STADIUM
}

export const CHEER: Club = {
    name: "Mage Tower Cheer Squad",
    shortName: "Cheer",
    location: STADIUM
}

export const MAGE_TOWER: Club = {
    name: "The Mage Tower Team",
    shortName: "Mage Tower",
    location: STADIUM
}

export const LIFTERS: Club = {
    name: "The Strixhaven Iron-Lifters Society",
    shortName: "Iron Lifters",
    location: COMMONS
}

export const STAR: Club = {
    name: "The Strixhaven Star",
    shortName: "The Star",
    location: WHITERAVEN
}

export const FAITH: Club = {
    name: "The Student-Mages of Faith",
    shortName: "Faith",
    location: COMMONS
}

export const PARTY: Club = {
    name: "Felix's Parties",
    shortName: "Parties",
    location: DORMS_SILV
}

export const BAND: Club = {
    name: "Ray's Band",
    shortName: "Ray's Band",
    location: DRAGONSBREATH
}

export const CLUBS: Club[] = [
    BOOK_CLUB,
    SPARRING,
    DEAD_LANGUAGES,
    FINE_ARTS,
    DRAGONCHESS,
    DEBATE,
    HORTICULTURE,
    ENTREPRENEURS,
    SILKBALL,
    CHEER,
    MAGE_TOWER,
    LIFTERS,
    STAR,
    FAITH,
    PARTY,
    BAND
].sort((a,b) => a.shortName.localeCompare(b.shortName)) as Club[]

export function getClubByShortName(name: string) : Club | undefined {
    return CLUBS.find((club) => club.shortName === name)
}

export function getClubsAtLocation(loc: Location): Club[] {
    const clubsAtLoc: Club[] = []
    CLUBS.forEach((club) => {
        if (club.location === loc) {
            clubsAtLoc.push(club)
        }
    })
    return clubsAtLoc.sort((a,b) => a.shortName.localeCompare(b.shortName))
} 

export function getClubsByFaculty(faculty: Faculty): Club[] {
    const clubs: Club[] = []
    CLUBS.forEach((club) => {
        if (club.faculty === faculty.shortName) {
            clubs.push(club)
        }
    })
    return clubs.sort((a,b) => a.shortName.localeCompare(b.shortName))
}