import { Alert, Container, Grid2 as Grid, List, ListItem, ListItemText, Paper, Stack, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { getClubByShortName } from "../assets/Clubs";
import { getMembersByClub } from "../assets/Students";

export function ClubDetails() {

    const { name = "" } = useParams()

    const Club = getClubByShortName(name)
    const Members = getMembersByClub(Club!)
    return (

        <Container maxWidth="xl">
            <Grid container spacing={3}>
                {Club ? <>
                    <Grid size={12}>
                        <Typography variant="h4" flexGrow={1}>
                            {Club.name}
                        </Typography>
                    </Grid>
                    <Grid size={4}>
                        <Stack direction={"row"} spacing={3}>
                            <List component={Paper} sx={{ minWidth: "10rem" }}>
                                <ListItem>
                                    <ListItemText primary={"Location"} secondary={Club.location ? <Link to={`/location/${Club.location?.shortName}`}>
                                                    {Club.location?.name}
                                                </Link> : "Somewhere"} />
                                </ListItem>
                                {
                                    Club.faculty &&
                                    <ListItem>
                                        <ListItemText primary={"Faculty"} secondary={`${Club.faculty}`} />
                                    </ListItem>
                                }
                                <ListItem>
                                    <ListItemText primary={"Members"} secondary={Members.map((member, i) => {
                                        return <><Link to={`/student/${member.shortName}`}>
                                                    {member.shortName}
                                                </Link>{i < Members.length - 1 ? ", " : ""}</>
                                    })}/>
                                </ListItem>
                            </List>
                        </Stack>
                    </Grid>
                </>
                    :
                    <Alert severity="warning">
                        {name} doesn't meet at Strixhaven
                    </Alert>
                }
            </Grid>
        </Container>
    )
}
