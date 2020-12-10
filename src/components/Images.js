import Andy from "./images/Andy.png";
import Angela from "./images/Angela.png";
import Creed from "./images/Creed.png";
import Darryl from "./images/Darryl.png";
import Dwight from "./images/Dwight.png";
import Jim from "./images/Jim.png";
import Kelly from "./images/Kelly.png";
import Kevin from "./images/Kevin.png";
import Meredith from "./images/Meredith.png";
import Michael from "./images/Michael.png";
import Oscar from "./images/Oscar.png";
import Pam from "./images/Pam.png";
import Phylis from "./images/Phylis.png";
import Ryan from "./images/Ryan.png";
import Stanley from "./images/Stanley.png";
import Toby from "./images/Toby.png";

const Images = (props) => {
    const imageObj = [
        Andy,
        Angela,
        Creed,
        Darryl,
        Dwight,
        Jim,
        Kelly,
        Kevin,
        Meredith,
        Michael,
        Oscar,
        Pam,
        Phylis,
        Ryan,
        Stanley,
        Toby,
    ]
    return (
        <img className="tile" alt="Can't Display" id={props.index} src={imageObj[props.index]} />
    )
};

export default Images;