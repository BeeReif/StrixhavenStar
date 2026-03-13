import { Alert, Card, CardMedia, Container, Grid2 as Grid, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { BIOS } from "../assets/Biographies";
import { getLocationByShortName } from "../assets/Locations";
import { getJobsAtLocation } from "../assets/Jobs";
import { getClubsAtLocation } from "../assets/Clubs";
import { getEmployeesByJob, getMembersByClub, getRegularsByLocation } from "../assets/Students";

export function LocationDetails() {

    const { name = "" } = useParams()

    const Location = getLocationByShortName(name)

    const Jobs = getJobsAtLocation(Location!)
    const Clubs = getClubsAtLocation(Location!)
    const Regulars = getRegularsByLocation(Location!)
    return (

        <Container maxWidth="xl">
            <Grid container spacing={3}>
                {Location ? <>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography variant="h4" flexGrow={1}>
                            {Location.name}
                        </Typography>
                        <Typography variant="h5" flexGrow={1}>
                            At <Link to={`/campus/${Location.campus}`}>{Location.campus}</Link> Campus
                        </Typography>
                        {
                            Location.image ? <Grid>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        image={Location.image}
                                        alt={Location.name}
                                    />
                                </Card>
                            </Grid>
                                : null
                        }
                    </Grid>
                    <Grid size={12}>
                        <List component={Paper}>
                            {
                                Jobs.map((job) => {
                                    return <ListItem>
                                        <ListItemText primary={job.name} secondary={getEmployeesByJob(job).map((employee, i) => {
                                            return <>
                                                <Link to={`/student/${employee.shortName}`}>
                                                    {employee.shortName}
                                                </Link>{i < getEmployeesByJob(job).length - 1 ? ", " : ""}
                                            </>
                                        }
                                        )} />
                                    </ListItem>
                                })
                            }
                            {
                                Clubs.map((club) => {
                                    return <ListItem>
                                        <ListItemText primary={club.name} secondary={getMembersByClub(club).map((member, i) => {
                                            return <>
                                                <Link to={`/student/${member.shortName}`}>
                                                    {member.shortName}
                                                </Link>{i < getMembersByClub(club).length - 1 ? ", " : ""}
                                            </>
                                        })} />
                                    </ListItem>
                                })
                            }
                            <ListItem>
                                <ListItemText primary={"Others you might find"} secondary={Regulars.map((student, i) => {
                                    return <>
                                        <Link to={`/student/${student.shortName}`}>
                                            {student.shortName}
                                        </Link>{i < Regulars.length - 1 ? ", " : ""}
                                    </>
                                })} />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid>
                        <Typography variant="body1">
                            {BIOS.get(Location.shortName)}
                        </Typography>
                    </Grid>
                </>
                    :
                    <Alert severity="warning">
                        {name} is not on the same plane as Strixhaven
                    </Alert>
                }
            </Grid>
        </Container>
    )
}
