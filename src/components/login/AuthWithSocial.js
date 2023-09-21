import { Divider, Stack } from "@mui/material"

export default function AuthWithSocial() {

    const handleDincer = async () => {
        window.open('', '_blank', 'noreferrer')
    }
    const handleFacebook = async () => {
        window.open('', '_blank', 'noreferrer')
    }
    const handleLinkedin = async () => {
        window.open('', '_blank', 'noreferrer')
    }
    const handleInstagram = async () => {
        window.open('', '_blank', 'noreferrer')
    }
    const handleYoutube = async () => {
        window.open('', '_blank', 'noreferrer')
    }
    const handleAndroid = async () => {
        window.open('', '_blank', 'noreferrer')
    }
    const handleIos = async () => {
        window.open('', '_blank', 'noreferrer')
    }

    return (<>
        <Divider
            sx={{
                my: 2.5,
                typography: 'overline',
                color: 'text.disabled',
                '&::before, ::after': {
                    borderTopStyle: 'dashed',
                },
            }}
        >
            {"FOLLOW_US"}
        </Divider>

        <Stack direction="row" justifyContent="center" spacing={2}>
            <img
                style={{
                    maxHeight: "2rem", cursor: "pointer", maxWidth: "2rem"
                }}
                alt='Logo'
                className='h-35px logo'
                src={""}
                onClick={handleDincer}
            />
            <img
                style={{
                    maxHeight: "2rem", cursor: "pointer", maxWidth: "2rem"
                }}
                alt='Logo'
                className='h-35px logo'
                src={""}
                onClick={handleFacebook}
            />
            <img
                style={{
                    maxHeight: "2rem", cursor: "pointer", maxWidth: "2rem"
                }}
                alt='Logo'
                className='h-35px logo'
                src={""}
                onClick={handleInstagram}
            />
            <img
                style={{
                    maxHeight: "2rem", cursor: "pointer", maxWidth: "2rem"
                }}
                alt='Logo'
                className='h-35px logo'
                src={""}
                onClick={handleLinkedin}
            />
            <img
                style={{
                    maxHeight: "2rem", cursor: "pointer", maxWidth: "2rem"
                }}
                alt='Logo'
                className='h-35px logo'
                src={""}
                onClick={handleYoutube}
            />
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={2}>
            <img
                style={{
                    maxHeight: "3rem", marginTop: 30, cursor: "pointer"
                }}
                alt='Logo'
                className='h-35px logo'
                src={""}
                onClick={handleIos}
            />
            <img
                style={{
                    maxHeight: "3rem", marginTop: 30, cursor: "pointer"
                }}
                alt='Logo'
                className='h-35px logo'
                src={""}
                onClick={handleAndroid}
            />
        </Stack>
    </>)
};
