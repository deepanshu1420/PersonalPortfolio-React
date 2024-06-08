import {NavLink} from 'react-router-dom';
function Card(props){
    return(
        <>
             <div className="card">
                    <div className="img-box">
                        <img src={props.img} alt="sample text ...." />
                    </div>
                    <div className="text-box">
                        <h2 className="semi-md-heading">{props.title}</h2>
                        <p className="sm-text fw-300">{props.desc}</p>
                        <NavLink to={`/react-1/subject/${props.uniqueKey}`}>
                            <button className="primary-btn">explore</button>
                        </NavLink>
                    </div>
                </div>
        </>
    );
}

export default Card;