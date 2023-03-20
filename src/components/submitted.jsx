import React from "react"
// import axios from "axios"
// import { useLocation } from "react-router-dom"
// import FormCard from "./formCard"
// import Grid from '@mui/material/Grid'
// import InstagramIcon from '@mui/icons-material/Instagram'
'

function Submitted(){
    return (
        <div>
            <div className="social">
                <div>Whatsapp</div>
                <span>weekly usage : 07h 53m</span>
            </div>
            <div className="social">
                <div>Instagram</div>
                <span>weekly usage : 05h 42m</span>
            </div>
            <div className="social">
                <div>Facebook</div>
                <span>weekly usage : 06h 30m</span>
            </div>
            <div className="social">
                <div>Reddit</div>
                <span>weekly usage : 04h 0m</span>
            </div>

            <div className="social">
                <div>Call time</div>
                <span>Weekly Talktime : 08h 07m</span>
            </div>

            <div className="social">
                <div>Screen On-time</div>
                <span>Weekly Usage : 53h 23m</span>
            </div>
            <div className="social">
                <div>Google play Apps</div>
                <span>weekly Usage : 12h 33m</span>
            </div>
        </div>
    )

    // const [forms, setForms] = useState([])
    // const location = useLocation()

    // useEffect( () => {
    //     axios.get('https://stackfusionserver.herokuapp.com/read-forms')
    //     .then((response) => {
    //         // console.log(response.data)
    //         setForms(response.data)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }, [location.state])
    
    // return (

    //     <Grid container spacing={2}>
    //         {
    //             forms.map((form) =>
    //             <Grid key={form._id} item xs={6} sm={4} md={2}>
    //             <FormCard
    //                 key={form._id}
    //                 firstName={form.firstName}
    //                 email={form.email}
    //                 phoneNum={form.phoneNum}
    //                 dob={form.dob}
    //             />
    //             </Grid>
    //             )
    //         }
    //     </Grid>
    // )
}

export default Submitted