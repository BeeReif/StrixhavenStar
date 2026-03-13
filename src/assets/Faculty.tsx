import { Faculty } from "../Models";

export const FACULTY: Faculty[] = [
    {
        name: "Mara",
        pronouns: "She/Her",
        shortName: "Mara",
        frequents: [],
        school: "Lorehold",
        classes: [],
    }
]

export function getFacultyByShortName(name: String): Faculty | undefined  {
    return FACULTY.find((faculty) => faculty.shortName === name)
}
