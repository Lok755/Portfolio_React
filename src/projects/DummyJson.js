import { useState,useEffect } from "react";
import Axios from 'axios'
import  CloseIcon  from '@material-ui/icons/Close'
import { Link } from "react-router-dom";
function DummyJson(){
    const [data,setData]=useState([])
    useEffect(
        ()=>{
            Axios.get('https://dummyjson.com/users')
            .then((res)=>
            {
                if(res.status===200){
                    setData(res.data.users)
                }
                else{
                    Promise.reject()
                }
            }
            )
            .catch((err)=>{
                alert(err);
            })
        },[])

        return(
            <div>
                <div className="d-flex justify-content-end me-3" >
                <Link to='/projects'><CloseIcon style={{fontSize:'50px', color:'red'}} /></Link>
                
            </div>
                {console.log(data)}
                <table className="table table-hover table-bordered mx-3 p-5">
                    <thead>
                        <tr className="text-center">
                            <th rowSpan='3'>Id</th>
                            <th rowSpan='3'>FirstName</th>
                            <th rowSpan='3'>LastName</th>
                            <th rowSpan='3'>Age</th>
                            <th rowSpan='3'>Gender</th>
                            <th rowSpan='3'>Email</th>
                            <th rowSpan='3'>PhoneNo</th>
                            <th rowSpan='3'>UserName</th>
                            <th rowSpan='3'>BirthDate</th>
                            <th rowSpan='3'>Image</th>
                            <th rowSpan='3'>Height</th>
                            <th rowSpan='3'>Weight</th>
                            <th rowSpan='3'>City</th>
                            <th rowSpan='2'>Latitude</th>
                            <th rowSpan='2'>Longitude</th>
                            <th rowSpan='3'>CardExpDate</th>
                            <th rowSpan='3'>CompanyName</th>



                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((val) => {
                                return(
                                    <tr>
                                        <td>{val.id}</td>
                                        <td>{val.firstName}</td>
                                        <td>{val.lastName}</td>
                                        <td>{val.age}</td>
                                        <td>{val.gender}</td>
                                        <td>{val.email}</td>
                                        <td>{val.phone}</td>
                                        <td>{val.username}</td>
                                        <td>{val.birthDate}</td>
                                        <td ><img src={val.image} width='75px' alt={val.image}/></td>
                                        <td>{val.height}</td>
                                        <td>{val.weight}</td>
                                        <td>{val.address.city}</td>
                                        <td>{(val.address.coordinates.lat).toFixed(5)}</td>
                                        <td>{(val.address.coordinates.lng).toFixed(5)}</td>
                                        <td>{val.bank.cardExpire}</td>
                                        <td>{val.company.name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    export default DummyJson;