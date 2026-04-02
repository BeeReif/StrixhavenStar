import { COMMONS } from "./Locations";
import { Class, Location } from "./Models";

export const EXAMPLE_CLASS: Class = {
    name: "Example Class",
    shortName: "Class",
    location: COMMONS,
    period: "1st"
}

export const CLASSES: Class[] = []

export function getClassByShortName(name: string) : Class | undefined {
    return CLASSES.find((cls) => cls.shortName === name)
}

export function getClassesAtLocation(loc: Location): Class[] {
    const classesAtLoc: Class[] = []
    CLASSES.forEach((cls) => {
        if (cls.location === loc) {
            classesAtLoc.push(cls)
        }
    })
    return classesAtLoc.sort((a,b) => a.shortName.localeCompare(b.shortName))
}