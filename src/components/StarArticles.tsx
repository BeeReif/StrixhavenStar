import { BottomNavigation, BottomNavigationAction, Box, Drawer, Grid, List, ListItemButton, Paper, Toolbar, useMediaQuery } from "@mui/material"
import { ARTICLES } from "../assets/Articles"
import { ArticleCard } from "./ArticleCard"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { theme } from "../Theme"
import NewspaperIcon from '@mui/icons-material/Newspaper';


export function StarArticles() {


    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const [open, setOpen] = useState(false)

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
            variant={isMobile ? "temporary": "permanent"}
            open={open}
            onClose={() => setOpen(false)}
            anchor={isMobile ? "left" : "right"}
            sx={{
                width: 20,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: isMobile ? '45%' :'15%', boxSizing: 'border-box' },
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
        <Grid container rowSpacing={25} sx={{ justifyContent: "center" }}>
            {
                [...ARTICLES].reverse().map(article => {
                    return <Grid size={isMobile ? 10 : 8} key={article.title}>
                        <ArticleCard title={article.title} body={article.body} tags={article.tags} />
                    </Grid>
                })
            }
        </Grid>
        {isMobile && 
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BottomNavigationAction icon={<NewspaperIcon/>} onClick={()=>setOpen(true)}/>
        </BottomNavigation>
        </Paper>
        }
    </>
}