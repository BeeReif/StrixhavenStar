import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { getStudentByShortName } from "../assets/Students";
import { Link } from "react-router-dom";


interface ArticleCardProps {
    body: string,
    tags: string[],
    title: string
}

export function ArticleCard(props: ArticleCardProps) {
    return <Card id={props.title}>

        <CardContent>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
                {props.title}
            </Typography>
            <br />
            <Typography variant="body1" sx={{ textAlign: "justify", whiteSpace: "pre-wrap", textIndent: '1.5em' }}>
                {props.body.split("\n").map((p,i) => <p key={`${props.title}-${i}`}>
                    {p}
                </p>)}
            </Typography>
        </CardContent>
        <CardActions>
            <Typography variant="caption">
                tags: {
                    props.tags.map((tag, i) => {
                        let component
                        if (getStudentByShortName(tag)) {
                            component = <Link to={`/student/${tag}`} key={tag}>{tag}</Link> 
                        } else {
                            component = tag
                        }
                        return <>{component}{i < props.tags.length - 1 ? ", " : ""}</>
                    })
                }
            </Typography>
        </CardActions>
    </Card>
}