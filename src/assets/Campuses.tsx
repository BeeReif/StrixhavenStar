import { Campus } from "./Models";

export const CENTRAL: Campus = {
    name: "Central",
}

export const LORE: Campus = {
    name: "Lorehold",
    subtitle: "Archaeomancy",
    colors: "Red and Orange",
    study: ["History", "Archaeology", "Anthropology", "Psychology", "Sociology", "Religion", "Economics"],
    dichotomy: "Order and Chaos"
}

export const PRIS: Campus = {
    name: "Prismari",
    subtitle: "Elemental Arts",
    colors: "Red and Blue",
    study: ["Visual Arts", "Performing Arts"],
    dichotomy: "Perfection and Expression"
}

export const QUAN: Campus = {
    name: "Quandrix",
    subtitle: "Numeromancy",
    colors: "Blue and Green",
    study: ["Mathematics", "Physics", "Logic", "Statistics", "Metaphysics", "Theoretical Magic"],
    dichotomy: "Substance and Theory"
}

export const SILV: Campus = {
    name: "Silverquill",
    subtitle: "Eloquence",
    colors: "Black and White",
    study: ["Literature", "Languages", "Linguistics", "Oratory", "Rhetoric", "Dramatic Performance"],
    dichotomy: "Radiance and Shadow"
}

export const WITH: Campus = {
    name: "Witherbloom",
    subtitle: "Essence Studies",
    colors: "Black and Green",
    study: ["Biology", "Ecology", "Botany", "Chemistry", "Positive and Negative Planes"],
    dichotomy: "Growth and Decay"
}

export const CAMPUSES: Campus[] = [
    CENTRAL,
    LORE,
    PRIS,
    QUAN,
    SILV,
    WITH
]

export function findCampusByName(name: string): Campus | undefined {
    return CAMPUSES.find((campus) => name === campus.name)
}