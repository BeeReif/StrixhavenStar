import { Box, Drawer, Grid, List, ListItemButton, Toolbar } from "@mui/material"
import { ARTICLES } from "../assets/Articles"
import { ArticleCard } from "./ArticleCard"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"


export function StarArticles() {

    function scrollToArticle(title: string) {
        const article = document.getElementById(title)
        article?.scrollIntoView({ behavior: "smooth", block: 'center' })
    }

    const [search, setSearch] = useSearchParams()

    function handleClick(title: string) {
        search.set("article", title)
        setSearch(search)
        scrollToArticle(title)
    }


    useEffect(() => {
        const jumpTo = search.get("article")
        if (jumpTo) {
            console.log(jumpTo)
            scrollToArticle(jumpTo)
        }
    }, [search])


    return <>
        <Drawer
            variant="permanent"
            anchor="right"
            sx={{
                width: 20,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: '15%', boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {[...ARTICLES].reverse().map(article => {
                        return <ListItemButton key={article.title} onClick={() => handleClick(article.title)}>{article.title}</ListItemButton >
                    })}
                </List>
            </Box>
        </Drawer>
        <Grid container rowSpacing={50} sx={{ justifyContent: "center" }}>
            {
                [...ARTICLES].reverse().map(article => {
                    return <Grid size={8} key={article.title}>
                        <ArticleCard title={article.title} body={article.body} tags={article.tags} />
                    </Grid>
                })
            }
        </Grid>
    </>
}