import { Alert, Container, List, ListItemText, Paper, Typography, Grid2 as Grid, ListItem, Card, CardMedia, CardContent, Box } from "@mui/material";
import { getEmployeesByJob, getMembersByClub, getStudentByShortName } from "../assets/Students";
import { Link, useParams } from "react-router-dom";
import { BIOS } from "../assets/Biographies";
import { useEffect, useState } from "react";

export function StudentDetails() {

    const { name = "" } = useParams()

    const Student = getStudentByShortName(name)
    const [logo, setLogo] = useState<string>()

    useEffect(() => {
        const fetchImage = async () => {
            const response = await import(`../assets/images/Logo${Student?.school}.png`)
            setLogo(response.default)
        }
        fetchImage()
    }, [Student])
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                {Student ?
                    <>
                        <Grid container size={12} alignItems={"center"}>
                            <Grid size={{ xs: 10, sm: "auto" }}>
                                <Typography variant="h4">
                                    {Student?.name} ({Student.pronouns})
                                </Typography>
                            </Grid>
                            {
                                logo ?
                                    <Grid size={{ xs: 2 }}>
                                        <Box
                                            width={50}
                                            height={50}
                                            component="img"
                                            src={logo}
                                            alt={Student.name}
                                            marginTop={0}
                                        />
                                    </Grid>
                                    : null
                            }
                        </Grid>
                        {
                            Student.image ? <Grid>
                                <Card>
                                    <CardMedia
                                        height={300}
                                        component="img"
                                        image={Student.image}
                                        alt={Student.name}
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
                                            <ListItemText primary={"Academics"} secondary={<>{Student.year} Year <Link to={`/campus/${Student.school}`}>
                                                {Student.school}
                                            </Link></>} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={"Employment"} secondary={Student.jobs.map((job, i) => {
                                                return <> {job.name} at {
                                                    typeof job.location === "string"
                                                        ? job.location
                                                        : <Link to={`/location/${job.location.shortName}`}>{job.location.name}</Link>
                                                }{i < Student.jobs.length - 1 ? ", " : ""}
                                                </>
                                            })
                                            } />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={"Extracurriculars"} secondary={Student.clubs.map((club, i) => {
                                                return <><Link to={`/club/${club.shortName}`}>
                                                    {club.shortName}
                                                </Link>{i < Student.clubs.length - 1 ? ", " : ""}
                                                </>
                                            })
                                            } />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid size={{ xs: 6, lg: 3 }}>
                                    <List component={Paper}>
                                        {Student.freshRoomies ? <ListItem><ListItemText primary="1st Year Roommates" secondary={Student.freshRoomies.map((roomie, i) => {
                                            return <><Link to={`/student/${roomie}`}>
                                                {roomie}
                                            </Link>{i < Student.freshRoomies!.length - 1 ? ", " : ""}</>
                                        })} /></ListItem> : null}

                                        <ListItem>
                                            <ListItemText primary="Current Roommates" secondary={Student.roommates.map((roomie, i) => {
                                                return <><Link to={`/student/${roomie}`}>
                                                    {roomie}
                                                </Link>{i < Student.roommates.length - 1 ? ", " : ""}</>
                                            })} />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary="Frequents" secondary={Student.frequents.map((loc, i) => {
                                                return <><Link to={`/location/${loc.shortName}`}>
                                                    {loc.shortName}
                                                </Link>{i < Student.frequents.length - 1 ? ", " : ""}</>
                                            })} />
                                        </ListItem>

                                    </List>
                                </Grid>
                                <Grid size={{ xs: 12, lg: 6 }}>
                                    <List component={Paper}>
                                        {Student.clubs.map((club) => {
                                            return <ListItem>
                                                <ListItemText primary={club.name} secondary={getMembersByClub(club, [Student]).map((member, i) => {
                                                    return <><Link to={`/student/${member.shortName}`}>
                                                        {member.shortName}
                                                    </Link>{i < getMembersByClub(club, [Student]).length - 1 ? ", " : ""}</>
                                                })} />
                                            </ListItem>
                                        })}
                                        {Student.jobs.map((job) => {
                                            return <ListItem>
                                                <ListItemText primary={job.name} secondary={getEmployeesByJob(job, [Student]).map((employee, i) => {
                                                    if (employee.shortName !== Student.shortName)
                                                        return <><Link to={`/student/${employee.shortName}`}>
                                                            {employee.shortName}
                                                        </Link>{i < getEmployeesByJob(job, [Student]).length - 1 ? ", " : ""}</>
                                                })} />
                                            </ListItem>
                                        })}
                                        {Student.connections &&
                                            <ListItem>
                                                <ListItemText primary="Other Notable Connections" secondary={Student.connections.map((connection, i) => {
                                                    return <><Link to={getStudentByShortName(connection) ?
                                                        `/student/${connection}` : `/faculty/${connection}`}>
                                                        {connection}
                                                    </Link>{i < Student.connections!.length - 1 ? ", " : ""}</>
                                                })} />
                                            </ListItem>
                                        }
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={12}>
                            <Card>
                                <CardContent>
                                    <Typography sx={{ whiteSpace: "pre-line" }}>
                                        {BIOS.get(Student.shortName)}
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
