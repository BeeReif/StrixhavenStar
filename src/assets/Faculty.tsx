import { Faculty } from "../Models";
import Mara from "../assets/images/people/Mara.png"
import Rathal from "../assets/images/people/Rathal.png"
import Maddox from "../assets/images/people/Maddox.png"
import Fiamma from "../assets/images/people/Fiamma.png"
import Akshaya from "../assets/images/people/Akshaya.png"
import Johanna from "../assets/images/people/Johanna.png"
import Adresin from "../assets/images/people/Adresin.png"
import Odette from "../assets/images/people/Odette.png"
import Scoria from "../assets/images/people/Scoria.png"
import Valora from "../assets/images/people/Valora.png"

export const FACULTY: Faculty[] = [
    {
        name: "Mara",
        pronouns: "She/Her",
        shortName: "Mara",
        title: "Dean of Order",
        frequents: [],
        school: "Lorehold",
        classes: [],
        image: Mara
    },
    {
        name: "Rathal",
        pronouns: "She/Her",
        shortName: "Rathal",
        title: "Professor of Order",
        frequents: [],
        school: "Lorehold",
        classes: [],
        image: Rathal
    },
    {
        name: "Gerard Maddox",
        pronouns: "He/Him",
        shortName: "Maddox",
        title: "Dean of Chaos",
        frequents: [],
        school: "Lorehold",
        classes: [],
        image: Maddox
    },
    {
        name: "Fiamma",
        pronouns: "She/Her",
        shortName: "Fiamma",
        title: "Professor of Chaos",
        frequents: [],
        school: "Lorehold",
        classes: [],
        image: Fiamma
    },
    {
        name: "Akshaya",
        pronouns: "They/Them",
        shortName: "Akshaya",
        title: "Professor of Order",
        frequents: [],
        school: "Lorehold",
        classes: [],
        image: Akshaya
    },
    {
        name: "Johanna Bauer",
        pronouns: "She/Her",
        shortName: "Johanna",
        title: "Dean of Perfection",
        frequents: [],
        school: "Prismari",
        classes: [],
        image: Johanna
    },
    {
        name: "Adresin",
        pronouns: "He/Him",
        shortName: "Adresin",
        title: "Dean of Expression",
        frequents: [],
        school: "Prismari",
        classes: [],
        image: Adresin
    },
    {
        name: "Odette",
        pronouns: "She/Her",
        shortName: "Odette",
        title: "Professor of Expression",
        frequents: [],
        school: "Prismari",
        classes: [],
        image: Odette
    },
    {
        name: "Scoria",
        pronouns: "He/Him",
        shortName: "Scoria",
        title: "Instructor of Expression",
        frequents: [],
        school: "Prismari",
        classes: [],
        image: Scoria
    },
        {
        name: "Valora",
        pronouns: "She/Her",
        shortName: "Valora",
        title: "Instructor of Expression",
        frequents: [],
        school: "Prismari",
        classes: [],
        image: Valora
    },
]

export function getFacultyByShortName(name: String): Faculty | undefined  {
    return FACULTY.find((faculty) => faculty.shortName === name)
}
