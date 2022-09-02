const InfoCard = ({ children, title }) => {
    return (
        <div className="card">
            <h2 className="card-header">{title}</h2>
            <div className="card-content p-3">
                {children}
            </div>
        </div>
    )
}

export default InfoCard;