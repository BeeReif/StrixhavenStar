import { Chip, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Octokit } from "octokit"

export function IssuesDetails() {
    const octokit = new Octokit()
    const resp = useQuery({ queryKey: ["issues"], queryFn: () => { return getIssues(octokit) } })
    const issues = resp.data?.data
    return <>
        <Typography paddingLeft={"16px"} variant="h5">
            You can help contribute to any of these by either sending things to me, editing files locally and uploading them to <a href="https://github.com/BeeReif/StrixhavenStar">GitHub </a>
        or directly in your browser with <a href="https://github.dev/BeeReif/StrixhavenStar/blob/main/src/assets">GitHub Dev</a>
        </Typography>
        <br/><br/>
        <List>
            {
                issues !== undefined &&
                issues.map((issue: any) => {
                    return <ListItem>
                        <ListItemText primary={
                            <>
                                {issue["title"]}
                                &nbsp;&nbsp;
                                {issue["labels"].map((label: any) => {
                                    return <Chip size="small" label={label["name"]} sx={{ backgroundColor: `#${label["color"]}` }} />
                                })}
                            </>
                        } secondary={issue["body"]} />
                    </ListItem>
                })
            }
        </List>
    </>
}

async function getIssues(octokit: Octokit) {
    return await octokit.request('GET /repos/BeeReif/StrixhavenStar/issues', {
        owner: 'BeeReif',
        repo: 'StrixhavenStar',
        state: 'open',
        headers: {
            'X-GitHub-Api-Version': '2026-03-10',
            'accept': 'application/vnd.github+json'
        }
    })
}
