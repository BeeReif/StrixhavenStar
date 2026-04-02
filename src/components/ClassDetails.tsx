import { Alert, Container, Grid2 as Grid, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { getStudentsByClass } from "../assets/Students";
import { getClassByShortName } from "../assets/Classes";
import { getTeacherByClass } from "../assets/Faculty";

export function ClassDetails() {

    const { name = "" } = useParams()

    const Class = getClassByShortName(name)
    const Students = getStudentsByClass(Class!)
    const Teacher = getTeacherByClass(Class!)
    return (

        <Container maxWidth="xl">
            <Grid container spacing={3}>
                {Class ? <>
                    <Grid size={12}>
                        <Typography variant="h4" flexGrow={1}>
                            {Class.name}
                        </Typography>
                    </Grid>
                    <Grid size={12} spacing={3} container>
                        <Grid size={3}>
                            <List component={Paper} sx={{ minWidth: "10rem" }}>
                                <ListItem>
                                    <ListItemText primary={"Teacher"} secondary={Teacher?.shortName ? <Link to={`/faculty/${Teacher.shortName}`}>
                                        {Teacher.shortName}
                                    </Link> : "Someone"} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={"Location"} secondary={<Link to={`/location/${Class.location?.shortName}`}>
                                        {Class.location.name}
                                    </Link>} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={"Period"} secondary={Class.period} />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid size={4}>
                            <List component={Paper} sx={{ minWidth: "10rem" }}>
                                <ListItem>
                                    <ListItemText primary={"Students"} secondary={Students.map((member, i) => {
                                        return <><Link to={`/student/${member.shortName}`}>
                                            {member.shortName}
                                        </Link>{i < Students.length - 1 ? ", " : ""}</>
                                    })} />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </>
                    :
                    <Alert severity="warning">
                        {name} isn't offered at Strixhaven
                    </Alert>
                }
            </Grid>
        </Container>
    )
}
