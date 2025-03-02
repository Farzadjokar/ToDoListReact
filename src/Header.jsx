const style1={
  display:"flex",
  alignItems:"center",
  alignContent:"center",
  textAlign:"center",
  width:"100%",
  flexDirection:"row",
  justifyContent:"center",
  height:"auto"
};
const style2={
  fontSize:"5rem",
  color:"white"
};
function Header(){
return <>
<div style={style1}><p style={style2}>to do list</p></div>
</>
 }
 export default Header