import { AppBar, Autocomplete, Button, Divider, TextField, Toolbar, Grid2 as Grid, useMediaQuery, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from "react-router-dom";
import { CLUBS, getClubByShortName } from "../assets/Clubs";
import { getStudentByShortName, STUDENTS } from "../assets/Students";
import { getLocationByShortName, LOCATIONS } from "../assets/Locations";
import { theme } from "../Theme";
import { useState } from "react";
import Strixhaven from "../assets/images/Strix.png"
import { FACULTY } from "../assets/Faculty";

export function NavBar() {

    const nav = useNavigate()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const Options = CLUBS.flatMap((el) => { return { name: el.name, shortName: el.shortName } })
        .concat(STUDENTS.flatMap((el) => { return { name: el.name, shortName: el.shortName } }))
        .concat(LOCATIONS.flatMap((el) => { return { name: el.name, shortName: el.shortName } }))
        .concat(FACULTY.flatMap((el) => { return { name: el.name, shortName: el.shortName } }))
        .concat([
            { name: "Central", shortName: "Central" },
            { name: "Lorehold", shortName: "Lorehold" },
            { name: "Prismari", shortName: "Prismari" },
            { name: "Quandrix", shortName: "Quandrix" },
            { name: "Silverquill", shortName: "Silverquill" },
            { name: "Witherbloom", shortName: "Witherbloom" },
        ])
        .sort((a,b) => a.name.localeCompare(b.name))

    function handleQuickSearch(_e: any, search: { name: string, shortName: string } | null) {
        if (!search) {
            return
        }

        if (getStudentByShortName(search.shortName)) {
            nav(`/student/${search.shortName}`)
        } else if (getClubByShortName(search.shortName)) {
            nav(`/club/${search.shortName}`)
        } else if (getLocationByShortName(search.shortName)) {
            nav(`/location/${search.shortName}`)
        } else {
            nav(`/campus/${search.shortName}`)
        }
    }


    return <AppBar position="sticky">
        <Toolbar sx={{ width: "100%" }}>
            <Grid container size={12} flexGrow={1} alignItems={"center"}>
                {isMobile ? <>
                <Grid size={3}>
                    <IconButton onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            list: {
                                'aria-labelledby': 'basic-button',
                            },
                        }}
                    >
                        <MenuItem onClick={handleClose} component={Link} to="/campus">Campus</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/student">Students</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/faculty">Faculty</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/location">Locations</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/club">Clubs</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/TODO">TODO</MenuItem>
                    </Menu>
                    </Grid>
                </> :
                    <Grid container size={"grow"}>
                        <Grid container size={2}>
                            <Button component={Link} to="/campus">
                                <img src={Strixhaven} height={50} />
                            </Button>
                        </Grid>
                        <Grid container size={"grow"} justifyContent={"center"}>
                            <Divider orientation="vertical" flexItem variant='middle' />
                            <Button
                                component={Link}
                                to="/campus"
                                color="inherit">Campus
                            </Button>
                            <Divider orientation="vertical" flexItem variant='middle' />
                            <Button
                                component={Link}
                                to="/student"
                                color="inherit">Students
                            </Button>
                            <Divider orientation="vertical" flexItem variant='middle' />
                            <Button
                                component={Link}
                                to="/faculty"
                                color="inherit">Faculty
                            </Button>
                            <Divider orientation="vertical" flexItem variant='middle' />
                            <Button
                                component={Link}
                                to="/location"
                                color="inherit">Locations
                            </Button>
                            <Divider orientation="vertical" flexItem variant='middle' />
                            <Button
                                component={Link}
                                to="/club"
                                color="inherit">Clubs
                            </Button>
                            <Divider orientation="vertical" flexItem variant='middle' />
                            <Button
                                component={Link}
                                to="/issues"
                                color="inherit">todo
                            </Button>
                            <Divider orientation="vertical" flexItem variant='middle' />
                        </Grid>
                    </Grid>}
                <Grid size={{ xs: 8, sm: 3}} paddingRight={isMobile ? 0 : "5rem"}>
                    <Autocomplete
                        size="small"
                        options={Options}
                        value={null}
                        autoComplete
                        clearOnBlur
                        clearOnEscape
                        autoHighlight
                        onChange={handleQuickSearch}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField {...params} label="Quick Search" />}
                    />
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
}
