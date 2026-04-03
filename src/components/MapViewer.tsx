import { Dialog, DialogTitle, Stack, IconButton, Card, CardMedia, Select, MenuItem, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StrixFull from "../assets/images/places/StrixFull.png"
import Lorehold from "../assets/images/places/CampusLorehold.png"
import Prismari from "../assets/images/places/CampusPrismari.png"
import Quandrix from "../assets/images/places/CampusQuandrix.png"
import Silverquill from "../assets/images/places/CampusSilverquill.png"
import Witherbloom from "../assets/images/places/CampusWitherbloom.png"
import { useState } from "react";

interface MapViewerProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function MapViewer(props: MapViewerProps) {

    const [map, setMap] = useState(StrixFull)

    return <Dialog open={props.open} maxWidth="md" onClose={() => props.setOpen(false)}>
        <DialogTitle>
            <Stack direction={"row"} alignItems={'center'}>
                <Select
                    size="small"
                    value={map}
                    onChange={(e) => { 
                        console.log(e.target.value)
                        setMap(e.target.value) }}
                >
                    <MenuItem value={StrixFull}>Campus</MenuItem>
                    <MenuItem value={Lorehold}>Lorehold</MenuItem>
                    <MenuItem value={Prismari}>Prismari</MenuItem>
                    <MenuItem value={Quandrix}>Quandrix</MenuItem>
                    <MenuItem value={Silverquill}>Silverquill</MenuItem>
                    <MenuItem value={Witherbloom}>Witherbloom</MenuItem>
                </Select> <Typography flexGrow={1}> &nbsp; Map</Typography>
                <IconButton onClick={() => props.setOpen(false)}><CloseIcon /></IconButton>
            </Stack>
        </DialogTitle>
        <Card sx={{overflowY: 'auto'}}>
            <CardMedia
                component="img"
                image={map}
                alt={"Map"}
            />
        </Card>
    </Dialog>
}