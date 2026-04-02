import { Alert, Container, List, ListItemText, Paper, Typography, Grid2 as Grid, ListItem, Card, CardContent, Box, CardMedia } from "@mui/material";
import { getMembersByClub } from "../assets/Students";
import { Link, useParams } from "react-router-dom";
import { BIOS } from "../assets/Biographies";
import { useEffect, useState } from "react";
import { getFacultyByShortName } from "../assets/Faculty";
import { getClubsByFaculty } from "../assets/Clubs";

export function FacultyDetails() {

    const { name = "" } = useParams()

    const Faculty = getFacultyByShortName(name)
    const Clubs = getClubsByFaculty(Faculty!)
    const [logo, setLogo] = useState<string>()

    useEffect(() => {
        const fetchImage = async () => {
            const response = await import(`../assets/images/Logo${Faculty?.school}.png`)
            setLogo(response.default)
        }
        fetchImage()
    }, [Faculty])
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                {Faculty ?
                    <>
                        <Grid container size={12}>
                            <Grid size={"grow"}>
                                <Grid container alignItems={"center"}>
                                    <Grid size={{ xs: 10, sm: "auto" }}>
                                        <Typography variant="h4" flexGrow={0} flexShrink={1}>
                                            {Faculty?.name} ({Faculty.pronouns})
                                        </Typography>
                                    </Grid>
                                    {
                                        logo ?
                                            <Grid size={{ xs: 2 }} container alignContent={"baseline"}>
                                                <Box
                                                    width={50}
                                                    height={50}
                                                    component="img"
                                                    src={logo}
                                                    alt={Faculty.name}
                                                    marginTop={0}
                                                    alignItems={'top'}
                                                />
                                            </Grid>
                                            : null
                                    }
                                </Grid>
                                <Grid>
                                    <Typography variant="h5">
                                        <Link to={`/campus/${Faculty.school}`}>{Faculty.school} </Link>{Faculty?.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {
                            Faculty.image ? <Grid>
                                <Card>
                                    <CardMedia
                                        height={300}
                                        component="img"
                                        image={Faculty.image}
                                        alt={Faculty.name}
                                    />
                                </Card>
                            </Grid>
                                : null
                        }

                        <Grid size={12}>
                            <Grid container size={12} spacing={3}>
                                <Grid size={{ xs: 6, lg: 3 }}>
                                    <List component={Paper}>
                                        <ListItem>
                                            <ListItemText primary={"Classes"} secondary={Faculty.classes.join(", ")} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={"Clubs Sponsored"} secondary={Clubs.map((club, i) => {
                                                return <><Link to={`/club/${club.shortName}`}>
                                                    {club.shortName}
                                                </Link>{i < Clubs.length - 1 ? ", " : ""}
                                                </>
                                            })
                                            } />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid size={{ xs: 12, lg: 6 }}>
                                    <List component={Paper}>
                                        {Clubs.map((club) => {
                                            return <ListItem>
                                                <ListItemText primary={club.name} secondary={getMembersByClub(club).map((member, i) => {
                                                    return <><Link to={`/student/${member.shortName}`}>
                                                        {member.shortName}
                                                    </Link>{i < getMembersByClub(club).length - 1 ? ", " : ""}</>
                                                })} />
                                            </ListItem>
                                        })}
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={12}>
                            <Card>
                                <CardContent>
                                    <Typography sx={{ whiteSpace: "pre-line" }}>
                                        {BIOS.get(Faculty.shortName)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </>
                    : <Alert severity="warning">
                        {name} does not attend Strixhaven
                    </Alert>
                }</Grid>
        </Container>
    )
}
