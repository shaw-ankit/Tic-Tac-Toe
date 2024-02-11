
const Box = (props) => {
return (
    <>
    <div 
    onClick={props.onClick}
    style={{ 
        border:"1px solid",
        height:"100px" ,
        width:"100px"}}
    className="box">
        <h1>{props.value}</h1>
    </div>
    </>
)
}

export default Box
