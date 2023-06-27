import ColorPalette from "./ColorPallete"
import MainButton from "./MainButton"
import  CloseIcon  from '@material-ui/icons/Close'
import { Link } from "react-router-dom"
import { Component } from "react"


class Main extends Component{
    constructor(props){
        super(props)
        this.state=
        {color:"lightgrey",
        colorArray: 
        [
            "#FF0000","#00FF00", "#0000FF", "#FFFF00", "#00FFFF",
            "#FF00FF", "#C0C0C0", "#808080", "#800000", "#808000",
            "#008000", "#800080", "#008080", "#000080", "#FF6666",
            "#66FF66", "#6666FF", "#FFFF66", "#66FFFF", "#FF66FF",
            "#BEBEBE", "#999999", "#993333", "#999933", "#339933",
            "#993399", "#339999", "#333399", "#FF9999", "#99FF99",
            "#9999FF", "#FFFF99", "#99FFFF", "#FF99FF", "#D3D3D3",
            "#CCCCCC", "#CC3333", "#CCCC33", "#33CC33", "#CC33CC",
            "#33CCCC", "#3333CC", "#FFCCCC", "#CCFFCC", "#CCCCFF",
            "#FFFFCC", "#CCFFFF", "#FFCCFF", "#E0E0E0", "#BBBBBB",
            "#BB4444", "#BBBB44", "#44BB44", "#BB44BB", "#44BBBB",
            "#4444BB", "#FFBBBB", "#BBFFBB", "#BBBBFF", "#FFFFBB",
            "#BBFFFF", "#FFBBFF", "#F0F0F0", "#AAAAAA", "#AA5555",
            "#AAAA55", "#55AA55", "#AA55AA", "#55AAAA", "#5555AA",
            "#FFAAAA", "#AAFFAA", "#AAAAFF", "#FFFFAA", "#AAFFFF",
            "#FFAAFF", "#C8C8C8", "#999999", "#995555", "#999955",
            "#559955", "#995599", "#559999", "#555599", "#FF9999",
            "#99FF99", "#9999FF", "#FFFF99", "#99FFFF", "#FF99FF",
            "#DCDCDC", "#8C8C8C", "#8C4444", "#8C8C44", "#448C44",
            "#8C448C", 
              
          ]
          
          
          
          
          
    
        }
    }

    getState=(c)=>{
        console.log("Main getstate :"+c)

        this.setState(
        {
           color:c
        }
           
        )


        document.getElementById("colorpalette").classList.add("hide_cp")
    }

    opencp=(flag)=>{
        if(flag){
            document.getElementById("colorpalette").classList.remove("hide_cp")
        }
    }
    render(){
        return(
            <div className="row">
            <div className="closeicon d-flex justify-content-end me-3" >
                <Link to='/projects'><CloseIcon style={{fontSize:'50px', color:'red'}} /></Link>
                
            </div>
            <span className="col-sm" />
            <div className="row col-sm-5">
                <h2 className="text-center mb-5">COLOR PICKER</h2>
                <div className="mainbtn col-sm-12 mb-3 mx-auto">
                    <MainButton opencp={this.opencp} mbtncolor={this.state.color} />
                </div>
                <div className="colorpalette col-sm-12 hide_cp " id="colorpalette">
                    <ColorPalette colorArray={this.state.colorArray} getState={this.getState}/>
                </div>
                
            </div>

            <span className="col-sm" />
            </div>
        )
    }
}



export default Main