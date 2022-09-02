const SubContent = ({title, children}) => {
    return (
        <div>
            <h5>{title}</h5>
            {children}
        </div>
    )
}

export default SubContent;