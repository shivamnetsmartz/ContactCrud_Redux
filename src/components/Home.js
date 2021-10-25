import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify"

const Home = () => {
const contacts  = useSelector(state =>state);

const dispatch = useDispatch();

const deleteContact = (id)=>{
         dispatch({type:"DELETE_CONTACT" , payload:id});
         toast.success("Contact Deleted Successfully!")
};

    return (
    <div className="container">
        <div className="row">
        <div className="col-md-12 my-5 text-right">
            <Link to="/add" className="btn btn-outline-dark border-2 font-weight-bold">ADD CONTACT</Link>
        </div>
             <div className="col-md-10 mx-auto">
                <table className="table table-hover">
                    <thead className="text-white bg-dark text-center">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">E-MAIL</th>
                            <th scope="col">NUMBER</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((contact,id)=>(

                          <tr key={id}>
                          <td>{id + 1}</td>
                          <td>{contact.name}</td>
                          <td>{contact.email}</td>
                          <td>{contact.number}</td>
                          <td>
                              <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary mr-2">Edit</Link>
                              <button type="button" onClick = {()=>deleteContact(contact.id)} to={`/edit/${contact.id}`} className="btn btn-small btn-danger mr-2">Delete</button>
                          </td>
                          </tr>
                            ))
                        }
                    </tbody>
                </table>
             </div>
        </div>
    </div>
    )
}

export default Home
