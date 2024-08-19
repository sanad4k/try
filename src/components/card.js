const Card =({src})=>{
    return(
        <div className="card">
            <div className="image-container">
                <img className="the_image" alt="project_image" src={src}></img>
            </div>
            <div className="text_box">
                <div className="title">SENNA</div>
                <div className="title">UPRA SAE India 2023, Overall AIR 27 </div>
            </div>
        </div>
    )
}
export default Card