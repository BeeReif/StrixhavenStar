import { Location, School } from "./Models";
import Arithmo from "./images/places/Arithmo.png"
import Biblioplex from "./images/places/Biblioplex.png"
import Bog from "./images/places/Bog.png"
import Bliss from "./images/places/Bliss.png"
import Cafe from "./images/places/Cafe.png"
import Commons from "./images/places/Commons.png"
import Consularium from "./images/places/Consularium.png"
import Culti from "./images/places/Culti.png"
import Dragons from "./images/places/Dragons.png"
import Fens from "./images/places/Fens.png"
import Guardian from "./images/places/Guardian.png"
import Mario from "./images/places/Mario.png"
import Opus from "./images/places/Opus.png"
import Pillardrop from "./images/places/Pillardrop.png"
import Rose from "./images/places/Rose.png"
import Row from "./images/places/Row.png"
import Sanctuary from "./images/places/Sanctuary.png"
import Stadium from "./images/places/Stadium.png"
import Tavern from "./images/places/Tavern.png"
import WhiteRaven from "./images/places/WhiteRaven.png"


export const COMMONS: Location = new Location(
    "Archway Commons",
    "Commons",
    "Central",
    Commons
)

export const BIBLIOPLEX: Location = new Location(
    "Biblioplex",
    "Biblioplex",
    "Central",
    Biblioplex
)

export const CAFE: Location = new Location(
    "The Firejolt Cafe",
    "Firejolt",
    "Central",
    Cafe
)

export const TAVERN: Location = new Location(
    "The Bow's End Tavern",
    "Bow's End",
    "Central",
    Tavern
)

export const STADIUM: Location = new Location(
    "Strixhaven Stadium",
    "Stadium",
    "Central",
    Stadium
)

export const PILLARDROP: Location = new Location(
    "Pillardrop",
    "Pillardrop",
    "Lorehold",
    Pillardrop
)

export const LEGACY_ROW: Location = new Location(
    "Legacy Row",
    "Legacy Row",
    "Lorehold",
    Row
)

export const GUARDIAN_HALL: Location = new Location(
    "The Hall of the Guardian",
    "Guardian Hall",
    "Lorehold",
    Guardian
)

export const SANCTUARY: Location = new Location(
    "Sanctuary",
    "Sanctuary",
    "Prismari",
    Sanctuary
)

export const OPUS: Location = new Location(
    "Opus Walk",
    "Opus Walk",
    "Prismari",
    Opus
)

export const DRAGONSBREATH: Location = new Location(
    "Dragonsbreath",
    "Dragonsbreath",
    "Prismari",
    Dragons
)

export const MARIONNETTE_HALL: Location = new Location(
    "The Hall of Marionettes",
    "Marionette Hall",
    "Quandrix",
    Mario
)

export const ARITHMODROME: Location = new Location(
    "The Arithmodrome",
    "Arithmodrome",
    "Quandrix",
    Arithmo
)

export const CULTIVARIUM: Location = new Location(
    "The Cultivarium",
    "Cultivarium",
    "Quandrix",
    Culti
)

export const WHITERAVEN: Location = new Location(
    "Whiteraven Hall",
    "Whiteraven Hall",
    "Silverquill",
    WhiteRaven
)

export const ROSE_STAGE: Location = new Location(
    "The Rose Stage",
    "Rose Stage",
    "Silverquill",
    Rose
)

export const CONSULARIUM: Location = new Location(
    "The Consularium",
    "Consularium",
    "Silverquill",
    Consularium
)

export const FENS: Location = new Location(
    "The Fens",
    "Fens",
    "Witherbloom",
    Fens
)

export const BLISS_HALL: Location = new Location(
    "Hall of Bliss",
    "Bliss Hall",
    "Witherbloom",
    Bliss
)

export const BOG: Location = new Location(
    "The Banshee's Bog",
    "Bog",
    "Witherbloom",
    Bog
)

export const DORMS_COMMON: Location = new Location(
    "Freshman Dorms",
    "Freshman Dorms",
    "Central",
)

export const DORMS_LORE: Location = new Location(
    "Lorehold Dorms",
    "Lorehold Dorms",
    "Lorehold",
)

export const DORMS_PRIS: Location = new Location(
    "Prismari Dorms",
    "Prismari Dorms",
    "Prismari",
)

export const DORMS_QUAN: Location = new Location(
    "Quandrix Dorms",
    "Quandrix Dorms",
    "Quandrix",
)

export const DORMS_SILV: Location = new Location(
    "Silverquill Dorms",
    "Silverquill Dorms",
    "Silverquill",
)

export const DORMS_WITH: Location = new Location(
    "Witherbloom Dorms",
    "Witherbloom Dorms",
    "Witherbloom",
)

export const LOCATIONS: Location[] = [
    COMMONS,
    BIBLIOPLEX,
    CAFE,
    TAVERN,
    STADIUM,
    PILLARDROP,
    LEGACY_ROW,
    GUARDIAN_HALL,
    SANCTUARY,
    OPUS,
    DRAGONSBREATH,
    MARIONNETTE_HALL,
    ARITHMODROME,
    CULTIVARIUM,
    WHITERAVEN,
    ROSE_STAGE,
    CONSULARIUM,
    FENS,
    BLISS_HALL,
    BOG,
    DORMS_COMMON,
    DORMS_LORE,
    DORMS_PRIS,
    DORMS_QUAN,
    DORMS_SILV,
    DORMS_WITH
].sort((a,b) => a.shortName.localeCompare(b.shortName)) as Location[]

export function getLocationByShortName(name: string): Location | undefined {
    return LOCATIONS.find((location) => location.shortName === name)
}

export function getLocationsByCampus(campus: School | "Central"): Location[] {
    const locsOnCampus: Location[] = []
        LOCATIONS.forEach((loc) => {
            if (loc.campus === campus) {
                locsOnCampus.push(loc)
            }
        })
        return locsOnCampus.sort((a,b) => a.name.localeCompare(b.name))
}