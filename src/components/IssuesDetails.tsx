import { Chip, List, ListItem, ListItemText } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Octokit } from "octokit"

export function IssuesDetails() {
    const octokit = new Octokit()
    const resp = useQuery({ queryKey: ["issues"], queryFn: () => { return getIssues(octokit) } })
    const issues = resp.data?.data
    console.log(issues)
    return <List>
        {
            issues !== undefined &&
            issues.map((issue: any) => {
                return <ListItem>
                    <ListItemText primary={
                        <>
                            {issue["title"]}
                            &nbsp;&nbsp;
                            {issue["labels"].map((label: any) => {
                                return <Chip size="small" label={label["name"]} sx={{backgroundColor: `#${label["color"]}`}}/>
                            })}
                        </>
                    } secondary={issue["body"]} />
                </ListItem>
            })
        }
    </List>
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
