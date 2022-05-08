import react from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Avatar from '@mui/material/Avatar';
import '../Styles/ServiceCard.css'

const ServiceCard = (props) => {

    const createSubString = (name) => {
       let nameList = name.split(' ');
       let result = '';
       nameList.forEach(nl => {
           result = result + nl[0]
           
       })
        return result[0].toUpperCase();
    }

    return(
        <>
        <div className="serviceCard-main-Container">
            <div className="serviceCard-sub-Container">
                <Avatar sx={{bgcolor: '#CF9FFF', width: 29, height: 29, marginTop:2.5 }}>
                    {createSubString(props.name)}
                </Avatar>
                <h3>{props.name}</h3>
                <div className='serviceCard-icon-div'>
                    <MoreHorizIcon/>
                </div>
            </div>
            <img src={props.img}/>
        </div>
        </>
    )
}

export default ServiceCard