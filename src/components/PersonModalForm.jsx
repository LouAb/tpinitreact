import React from "react";
import PersonCRUD from "../utils/PersonCRUD";

/**
* Louis Abid
* Version 1.0
*/
export class PersonModalForm extends React.Component {
    constructor(props){
        super(props);
        this.CRUD = new PersonCRUD();

        this.state = {
            Name : "",
            FirstName : "",
            Adress : "",
            PostalCode : "",
            Age : 18
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {    
        //Modifie le state à chaque fois qu'on écrit dans le formulaire
        this.setState({[event.target.name] : event.target.value});
    }
    
    postPerson(){
        let person = {
            "Name": this.state.Name,
            "FirstName": this.state.FirstName,
            "Adress": this.state.Adress,
            "PostalCode": this.state.PostalCode,
            "Age": parseInt(this.state.Age)
        };
        //Appel de la méthode post /person du json-server
        //Puis rafraichir la page pour recharge le state du SecondNode
        this.CRUD.post(person).then(()=>window.location.reload(false));
    }

    render() {
        return (
            <span>
                <button type="button" data-toggle="modal" data-target="#exampleModal">
                    Ajouter un client
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ajouter une personne</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                
                                <form >
                                    <label> Name: <input type="text" name="Name" value={this.state.Name} onChange={this.handleChange} /> </label><br />
                                    <label> FirstName: <input type="text" name="FirstName" value={this.state.FirstName} onChange={this.handleChange} /> </label><br />
                                    <label> Adress: <input type="text" name="Adress" value={this.state.Adress} onChange={this.handleChange} /> </label><br />
                                    <label> PostalCode: <input type="text" name="PostalCode" value={this.state.PostalCode} onChange={this.handleChange} /> </label><br />
                                    <label> Age: <input type="number" name="Age" value={this.state.Age} onChange={this.handleChange} /> </label><br />
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                <button type="button" className="btn btn-primary" onClick={()=>(this.postPerson())} data-dismiss="modal">Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}
