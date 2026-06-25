import { Article } from "./Models";

export const ARTICLES: Article[] = [
    {
        title: "Thijs and Carrion Get Disrespectful",
        tags: ["Thijs", "Carrion"],
        body: "Thijs and Carrion went on a museum date, then fucked nasty style."
    },
]

export function getArticlesByTag(tag: string) {
    return ARTICLES.filter(article => article.tags.includes(tag))
}