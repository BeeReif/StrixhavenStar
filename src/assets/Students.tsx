import { Club, Job, Location, School, Student } from "../Models"
import { BOOK_CLUB, CHEER, DEAD_LANGUAGES, DEBATE, DRAGONCHESS, ENTREPRENEURS, FAITH, FINE_ARTS, HORTICULTURE, LIFTERS, MAGE_TOWER, PARTY, BAND, SILKBALL, SPARRING, STAR } from "./Clubs"
import { BARISTA, GROUNDS_DRAG, GROUNDS_FENS, LABS, LIBRARIAN, RA_LORE, RA_PRIS, RA_QUAN, RA_SILV, RA_WITH, WAITER } from "./Jobs"
import { ARITHMODROME, BIBLIOPLEX, BLISS_HALL, BOG, CAFE, COMMONS, CONSULARIUM, CULTIVARIUM, DORMS_COMMON, DRAGONSBREATH, FENS, PILLARDROP, ROSE_STAGE, STADIUM, TAVERN, WHITERAVEN } from "./Locations"
import Cass from "./images/people/Cass.png"
import Dusty from "./images/people/Dusty.png"
import Ace from "./images/people/Ace.png"
import Alexis from "./images/people/Alexis.png"
import Ariel from "./images/people/Ariel.png"
import Arsene from "./images/people/Arsene.png"
import Brilliance from "./images/people/Brilliance.png"
import Brynn from "./images/people/Brynn.png"
import Carrion from "./images/people/Carrion.png"
import Cerise from "./images/people/Cerise.png"
import Ciaran from "./images/people/Ciaran.png"
import Cyr from "./images/people/Cyr.png"
import Elowen from "./images/people/Elowen.png"
import Evander from "./images/people/Evander.png"
import Farren from "./images/people/Farren.png"
import Felix from "./images/people/Felix.png"
import Grace from "./images/people/Grace.png"
import Hennie from "./images/people/Hennie.png"
import Hildegard from "./images/people/Hildegard.png"
import Jasmine from "./images/people/Jasmine.png"
import Jewel from "./images/people/Jewel.png"
import Lux from "./images/people/Lux.png"
import Page from "./images/people/Page.png"
import Petra from "./images/people/Petra.png"
import Pyre from "./images/people/Pyre.png"
import Ramona from "./images/people/Ramona.png"
import Ray from "./images/people/Ray.png"
import Sasha from "./images/people/Sasha.png"
import Shaw from "./images/people/Shaw.png"
import Thijs from "./images/people/Thijs.png"
import Tomas from "./images/people/Tomas.png"
import Viv from "./images/people/Viv.png"
import Worth from "./images/people/Worth.png"
import Zephyr from "./images/people/Zephyr.png"
import Zinnia from "./images/people/Zinnia.png"
import Zoey from "./images/people/Zoey.png"
// import Morgan from "./images/people/Morgan.png"
// import Oscar from "./images/people/Oscar.png"
// import Khalil from "./images/people/Khalil.png"
// import Elio from "./images/people/Elio.png"
import Andy from "./images/people/Andy.png"


export const STUDENTS: Student[] = [
    {
        name: 'Cassius "Cass" Elmbrant',
        shortName: "Cass",
        pronouns: "He/Him",
        year: "4th",
        school: "Lorehold",
        jobs: [LIBRARIAN].sort((a,b) => {return a.name.localeCompare(b.name)}),
        clubs: [BOOK_CLUB, SPARRING, DRAGONCHESS].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [BIBLIOPLEX, STADIUM, CAFE, FENS].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Dusty"].sort(),
        freshRoomies: ["Dusty"].sort(),
        image: Cass,
        connections: ["Zoey"]
    },
    {
        name: 'Dusty Oleastro',
        shortName: "Dusty",
        pronouns: "Any",
        year: "4th",
        school: "Lorehold",
        jobs: [],
        clubs: [SPARRING, DEBATE, HORTICULTURE, BOOK_CLUB, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [PILLARDROP, CULTIVARIUM, FENS, BOG].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Cass"].sort(),
        freshRoomies: ["Cass"],
        image: Dusty
    },
    {
        name: 'Ramona',
        shortName: "Ramona",
        pronouns: "She/Her",
        year: "4th",
        school: "Silverquill",
        jobs: [LIBRARIAN].sort((a,b) => {return a.name.localeCompare(b.name)}),
        clubs: [FINE_ARTS, SILKBALL].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [BIBLIOPLEX, TAVERN].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Hildegard"],
        freshRoomies: ["Pyre"].sort(),
        image: Ramona
    },
    {
        name: 'Vivian Olenta',
        shortName: "Viv",
        pronouns: "She/Her",
        year: "4th",
        school: "Witherbloom",
        jobs: [],
        clubs: [SPARRING, SILKBALL].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [BOG,BLISS_HALL,CULTIVARIUM, WHITERAVEN, CONSULARIUM].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Farren"],
        freshRoomies: ["Zoey"].sort(),
        image: Viv
    },
    {
        name: 'Zoey Allans',
        shortName: "Zoey",
        pronouns: "She/Her",
        year: "4th",
        school: "Lorehold",
        jobs: [LABS],
        clubs: [SPARRING, BOOK_CLUB, SILKBALL].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [BIBLIOPLEX].sort((a,b) => {return a.name.localeCompare(b.name)}),
        freshRoomies: ["Viv"].sort(),
        roommates: ["Jasmine"],
        image: Zoey,
        connections: ["Lux", "Cass"]
    },
    {
        name: 'Ariel',
        shortName: "Ariel",
        pronouns: "He/Him",
        year: "4th",
        school: "Lorehold",
        jobs: [],
        clubs: [SPARRING, BOOK_CLUB, DRAGONCHESS, HORTICULTURE, MAGE_TOWER, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [BIBLIOPLEX, PILLARDROP].sort((a,b) => {return a.name.localeCompare(b.name)}),
        freshRoomies: ["Hildegard", "Jasmine"].sort(),
        roommates: ["Page"],
        image: Ariel
    },
    {
        name: 'Pyre',
        shortName: "Pyre",
        pronouns: "She/Her",
        year: "4th",
        school: "Prismari",
        jobs: [],
        clubs: [BOOK_CLUB, BAND, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [TAVERN, CONSULARIUM].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Evander"],
        freshRoomies: ["Ramona"].sort(),
        image: Pyre,
        connections: ["Glass"]
    },
    {
        name: 'Glass',
        shortName: "Glass",
        pronouns: "He/Him",
        year: "4th",
        school: "Witherbloom",
        jobs: [],
        clubs: [FINE_ARTS, MAGE_TOWER, SPARRING, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Cerise"],
        freshRoomies: ["Farren", "Evander"].sort(),
        connections: ["Pyre"]
    },
    {
        name: 'Evander',
        shortName: "Evander",
        pronouns: "He/Him",
        year: "4th",
        school: "Prismari",
        jobs: [],
        clubs: [MAGE_TOWER, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Pyre"],
        freshRoomies: ["Glass", "Farren"].sort(),
        image: Evander
    },
    {
        name: 'Alexis',
        shortName: "Alexis",
        pronouns: "She/Her",
        year: "4th",
        school: "Quandrix",
        jobs: [],
        clubs: [DRAGONCHESS, ENTREPRENEURS, MAGE_TOWER, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Zephyr"],
        freshRoomies: ["Carrion"].sort(),
        image: Alexis
    },
    {
        name: 'Carrion',
        shortName: "Carrion",
        pronouns: "They/Them",
        year: "4th",
        school: "Silverquill",
        jobs: [LIBRARIAN],
        clubs: [DEBATE, STAR, BOOK_CLUB, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Thijs", "Tomas"],
        freshRoomies: ["Alexis"].sort(),
        image: Carrion
    },
    {
        name: 'Hildegard',
        shortName: "Hildegard",
        pronouns: "They/Them",
        year: "4th",
        school: "Silverquill",
        jobs: [RA_SILV],
        clubs: [STAR, FAITH, SPARRING].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Ramona"],
        freshRoomies: ["Ariel", "Jasmine"].sort(),
        image: Hildegard
    },
    {
        name: 'Farren',
        shortName: "Farren",
        pronouns: "They/Them",
        year: "4th",
        school: "Witherbloom",
        jobs: [RA_WITH],
        clubs: [SPARRING, DEAD_LANGUAGES, FAITH, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Viv"],
        freshRoomies: ["Glass", "Evander"].sort(),
        image: Farren
    },
    {
        name: 'Jasmine',
        shortName: "Jasmine",
        pronouns: "She/Her",
        year: "4th",
        school: "Lorehold",
        jobs: [RA_LORE],
        clubs: [BOOK_CLUB, SPARRING, ENTREPRENEURS, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        freshRoomies: ["Ariel", "Hildegard"].sort(),
        roommates: ["Zoey"],
        image: Jasmine
    },
    {
        name: 'Brynn Alfyr',
        shortName: "Brynn",
        pronouns: "She/Her",
        year: "3rd",
        school: "Lorehold",
        jobs: [],
        clubs: [BOOK_CLUB, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [BIBLIOPLEX].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Ace"],
        freshRoomies: ["Cyr", "Elowen"].sort(),
        image: Brynn
    },
    {
        name: 'Cyr Kostakis',
        shortName: "Cyr",
        pronouns: "He/Him",
        year: "3rd",
        school: "Silverquill",
        jobs: [BARISTA].sort((a,b) => {return a.name.localeCompare(b.name)}),
        clubs: [DEAD_LANGUAGES, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [COMMONS, BLISS_HALL, CONSULARIUM, DRAGONSBREATH].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Worth", "Ciaran"],
        freshRoomies: ["Brynn", "Elowen"].sort(),
        image: Cyr,
        // connections: ["Lilia"]
    },
    {
        name: 'Thijs Vann Dalen',
        shortName: "Thijs",
        pronouns: "He/Him",
        year: "3rd",
        school: "Silverquill",
        jobs: [],
        clubs: [ENTREPRENEURS, DEBATE].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [COMMONS].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Tomas", "Carrion"],
        freshRoomies: ["Petra", "Ciaran"].sort(),
        image: Thijs,
        connections: ["Hennie"]
    },
    {
        name: 'Felix Moulin',
        shortName: "Felix",
        pronouns: "He/Him",
        year: "3rd",
        school: "Silverquill",
        jobs: [WAITER].sort((a,b) => {return a.name.localeCompare(b.name)}),
        clubs: [FINE_ARTS, DEBATE, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [WHITERAVEN, COMMONS, ROSE_STAGE, TAVERN, CONSULARIUM].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: [],
        image: Felix
    },
    {
        name: 'Lux Allans',
        shortName: "Lux",
        pronouns: "They/Them",
        year: "3rd",
        school: "Witherbloom",
        jobs: [BARISTA, WAITER].sort((a,b) => {return a.name.localeCompare(b.name)}),
        clubs: [HORTICULTURE, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [FENS, BIBLIOPLEX, TAVERN, CONSULARIUM, ROSE_STAGE].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Sasha"],
        freshRoomies: ["Ray", "Sasha"].sort(),
        image: Lux,
        connections: ["Zoey"]
    },
    {
        name: 'Ace',
        shortName: "Ace",
        pronouns: "They/Them",
        year: "3rd",
        school: "Lorehold",
        jobs: [WAITER].sort((a,b) => {return a.name.localeCompare(b.name)}),
        clubs: [SILKBALL, MAGE_TOWER, BOOK_CLUB, SPARRING, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        freshRoomies: ["Arsene", "Tomas"],
        roommates: ["Brynn"].sort(),
        image: Ace
    },
    {
        name: 'Ray',
        shortName: "Ray",
        pronouns: "He/Him",
        year: "3rd",
        school: "Prismari",
        jobs: [],
        clubs: [FINE_ARTS, BAND, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        freshRoomies: ["Lux", "Shaw"].sort(),
        roommates: ["Shaw"],
        image: Ray
    },
    {
        name: 'Elowen',
        shortName: "Elowen",
        pronouns: "She/Her",
        year: "3rd",
        school: "Prismari",
        jobs: [RA_PRIS],
        clubs: [FINE_ARTS, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        freshRoomies: ["Brynn", "Cyr"].sort(),
        roommates: ["Grace", "Hennie"],
        image: Elowen
    },
    {
        name: 'Petra',
        shortName: "Petra",
        pronouns: "He/Him",
        year: "3rd",
        school: "Quandrix",
        jobs: [LABS, RA_QUAN],
        clubs: [DRAGONCHESS, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Arsene"],
        freshRoomies: ["Thijs", "Ciaran"].sort(),
        image: Petra
    },
    {
        name: 'Arsene',
        shortName: "Arsene",
        pronouns: "He/They",
        year: "3rd",
        school: "Quandrix",
        jobs: [],
        clubs: [HORTICULTURE, BOOK_CLUB, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Petra"],
        freshRoomies: ["Tomas", "Ace"].sort(),
        image: Arsene
    },
    {
        name: 'Ciaran',
        shortName: "Ciaran",
        pronouns: "He/Him",
        year: "3rd",
        school: "Silverquill",
        jobs: [],
        clubs: [DRAGONCHESS, BOOK_CLUB, SPARRING, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Cyr", "Worth"],
        freshRoomies: ["Thijs", "Petra"].sort(),
        image: Ciaran
    },
    {
        name: 'Tomas',
        shortName: "Tomas",
        pronouns: "He/Him",
        year: "3rd",
        school: "Silverquill",
        jobs: [],
        clubs: [DEBATE, STAR, BOOK_CLUB, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Thijs", "Carrion"],
        freshRoomies: ["Arsene", "Ace"].sort(),
        image: Tomas
    },
    {
        name: 'Sasha',
        shortName: "Sasha",
        pronouns: "She/Her",
        year: "3rd",
        school: "Witherbloom",
        jobs: [],
        clubs: [SILKBALL, SPARRING, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Lux"],
        freshRoomies: ["Ray", "Lux"].sort(),
        image: Sasha
    },
    {
        name: 'Grace Mirari',
        shortName: "Grace",
        pronouns: "She/Her",
        year: "2nd",
        school: "Prismari",
        jobs: [BARISTA],
        clubs: [SPARRING, CHEER, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [FENS, BOG, CULTIVARIUM].sort((a,b) => {return a.name.localeCompare(b.name)}),
        freshRoomies: ["Worth", "Brilliance"].sort(),
        roommates: ["Hennie", "Elowen"],
        image: Grace
    },
    {
        name: 'Hendrika Vann Dalen',
        shortName: "Hennie",
        pronouns: "She/Her",
        year: "2nd",
        school: "Prismari",
        jobs: [],
        clubs: [FINE_ARTS, CHEER, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [TAVERN, STADIUM].sort((a,b) => {return a.name.localeCompare(b.name)}),
        freshRoomies: ["Zephyr", "Shaw"].sort(),
        roommates: ["Grace", "Elowen"],
        image: Hennie,
        connections: ["Thijs"]
    },
    {
        name: 'Jewel',
        shortName: "Jewel",
        pronouns: "She/Her",
        year: "2nd",
        school: "Quandrix",
        jobs: [],
        clubs: [MAGE_TOWER, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [CONSULARIUM, COMMONS, ARITHMODROME, STADIUM].sort((a,b) => {return a.name.localeCompare(b.name)}),
        freshRoomies: ["Zinnia"].sort(),
        roommates: ["Andy"],
        image: Jewel
    },
    {
        name: 'Brilliance',
        shortName: "Brilliance",
        pronouns: "She/Her",
        year: "2nd",
        school: "Witherbloom",
        jobs: [],
        clubs: [HORTICULTURE].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [CULTIVARIUM, CAFE, TAVERN].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Zinnia"],
        freshRoomies: ["Grace", "Worth"].sort((a,b) => {return a.localeCompare(b)}),
        image: Brilliance
    },
    {
        name: 'Page',
        shortName: "Page",
        pronouns: "They/Them",
        year: "2nd",
        school: "Lorehold",
        jobs: [],
        clubs: [BOOK_CLUB, SPARRING].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        freshRoomies: ["Cerise"].sort(),
        roommates: ["Ariel"],
        image: Page
    },
    {
        name: 'Shaw',
        shortName: "Shaw",
        pronouns: "He/Him",
        year: "2nd",
        school: "Prismari",
        jobs: [GROUNDS_DRAG],
        clubs: [FINE_ARTS, SILKBALL, LIFTERS, BAND, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        freshRoomies: ["Zephyr", "Hennie"].sort(),
        roommates: ["Ray"],
        image: Shaw
    },
    {
        name: 'Zephyr',
        shortName: "Zephyr",
        pronouns: "She/Her",
        year: "2nd",
        school: "Quandrix",
        jobs: [LABS, LIBRARIAN],
        clubs: [DEAD_LANGUAGES, DRAGONCHESS, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Alexis"],
        freshRoomies: ["Shaw", "Hennie"].sort(),
        image: Zephyr
    },
    {
        name: 'Worth',
        shortName: "Worth",
        pronouns: "He/Him",
        year: "2nd",
        school: "Silverquill",
        jobs: [LIBRARIAN],
        clubs: [DEBATE, ENTREPRENEURS, STAR, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Cyr", "Ciaran"],
        freshRoomies: ["Grace", "Brilliance"].sort(),
        image: Worth
    },
    {
        name: 'Zinnia',
        shortName: "Zinnia",
        pronouns: "She/Her",
        year: "2nd",
        school: "Witherbloom",
        jobs: [GROUNDS_FENS],
        clubs: [HORTICULTURE, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Brilliance"],
        freshRoomies: ["Jewel"].sort(),
        image: Zinnia
    },
    {
        name: 'Cerise',
        shortName: "Cerise",
        pronouns: "She/Her",
        year: "2nd",
        school: "Witherbloom",
        jobs: [BARISTA],
        clubs: [HORTICULTURE, BOOK_CLUB, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Glass"],
        freshRoomies: ["Page"],
        image: Cerise
    },
    {
        name: 'Kassandra "Andy" Lebowitz',
        shortName: "Andy",
        pronouns: "She/Her",
        year: "2nd",
        school: "Quandrix",
        jobs: [LABS],
        clubs: [DEBATE, STAR],
        frequents: [BIBLIOPLEX, ARITHMODROME, CULTIVARIUM, CAFE, TAVERN],
        roommates: ["Jewel"],
        freshRoomies: [],
        image: Andy
    },
    // {
    //     name: 'Morgan Arell',
    //     shortName: "Morgan",
    //     pronouns: "They/Them",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: [SILKBALL, FAITH, LIFTERS],
    //     frequents: [],
    //     roommates: [],
    //     freshRoomies: [],
    //     image: Morgan
    // },
    // {
    //     name: 'Khalil',
    //     shortName: "Khalil",
    //     pronouns: "He/Him",
    //     year: "1st",
    //     school: "Quandrix",
    //     jobs: JOBS,
    //     clubs: [MAGE_TOWER],
    //     frequents: [STADIUM, SANCTUARY, CULTIVARIUM],
    //     roommates: [],
    //     freshRoomies: [],
    //     image: Khalil
    // },
    // {
    //     name: 'Oscar Gatewood',
    //     shortName: "Oscar",
    //     pronouns: "He/Him",
    //     year: "1st",
    //     school: "Lorehold",
    //     jobs: [LIBRARIAN],
    //     clubs: [DEAD_LANGUAGES, DRAGONCHESS, HORTICULTURE],
    //     frequents: [BIBLIOPLEX, CAFE, GUARDIAN_HALL, LEGACY_ROW, PILLARDROP, OPUS],
    //     roommates: [],
    //     freshRoomies: [],
    //     image: Oscar
    // },
    // {
    //     name: 'Elio',
    //     shortName: "Elio",
    //     pronouns: "He/Him",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: CLUBS,
    //     frequents: [BOG, COMMONS],
    //     roommates: [],
    //     freshRoomies: [],
    //     image: Elio
    // },
    // {
    //     name: 'Lilia',
    //     shortName: "Lilia",
    //     pronouns: "She/Her",
    //     year: "3rd",
    //     school: "Silverquill",
    //     jobs: [],
    //     clubs: [DEAD_LANGUAGES],
    //     frequents: [COMMONS],
    //     roommates: ["Cyr"].sort(),
    //     freshRoomies: []
    // },
    // {
    //     name: 'Burning Hands',
    //     shortName: "Burning Hands",
    //     pronouns: "?/?",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: [FINE_ARTS],
    //     frequents: [],
    //     roommates: [],
    //     freshRoomies: []
    // },
    // {
    //     name: 'SU(E)',
    //     shortName: "SU(E)",
    //     pronouns: "",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: [DRAGONCHESS],
    //     frequents: [],
    //     roommates: [],
    //     freshRoomies: []
    // },
    // {
    //     name: 'Weatherby',
    //     shortName: "Weatherby",
    //     pronouns: "",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: [DRAGONCHESS, SILKBALL],
    //     frequents: [],
    //     roommates: [],
    //     freshRoomies: []
    // },
    // {
    //     name: 'Chrys',
    //     shortName: "Chrys",
    //     pronouns: "",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: [SILKBALL, HORTICULTURE],
    //     frequents: [],
    //     roommates: [],
    //     freshRoomies: []
    // },
    // {
    //     name: 'Laanpen',
    //     shortName: "Laanpen",
    //     pronouns: "",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: [LIFTERS],
    //     frequents: [],
    //     roommates: [],
    //     freshRoomies: []
    // },
    
].sort((a,b) => a.shortName.localeCompare(b.shortName)) as Student[]


export function getStudentByShortName(name: String): Student | undefined  {
    return STUDENTS.find((student) => student.shortName === name)
}

export function getRegularsByLocation(loc?: Location): Student[] {

    if (!loc) {
        return []
    }

    const students: Student[] = []
    STUDENTS.forEach((student) => {
        if (student.frequents.includes(loc)) {
            students.push(student)
        }
        if (loc === DORMS_COMMON && student.year === "1st") {
            students.push(student)
        } else if (loc.shortName.endsWith(" Dorms") && loc.shortName.split(" ")[0] === student.school) {
            students.push(student)
        }
    })

    return students.sort((a,b) => a.name.localeCompare(b.name))
}

export function getEmployeesByJob(job: Job, except?: Student[]): Student[] {
    const students: Student[] = []
    STUDENTS.forEach((student) => {
        if (student.jobs.includes(job) && (!except || !except.includes(student))) {
            students.push(student)
        }
    }) 
    return students.sort((a,b) => a.shortName.localeCompare(b.shortName))
}

export function getMembersByClub(club: Club, except?: Student[]): Student[] {
    const students: Student[] = []
    STUDENTS.forEach((student) => {
        if (student.clubs.includes(club) && (!except || !except.includes(student))) {
            students.push(student)
        }
    }) 
    return students.sort((a,b) => a.shortName.localeCompare(b.shortName))
}

export function getStudentsBySchool(school: School | "Central", year?: "1st" |"2nd" | "3rd" | "4th"): Student[] {
    const students: Student[] = []
    STUDENTS.forEach((student) => {
        if (student.school === school && (!year || student.year === year)) {
            students.push(student)
        }
    }) 
    return students.sort((a,b) => a.name.localeCompare(b.name))
}