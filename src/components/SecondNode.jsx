import React from "react";
import list from '../classes/Person';
import PersonCRUD from "../utils/PersonCRUD";
import { PersonModalForm } from "./PersonModalForm";

/**
* Louis Abid
* Version 1.0
*/
export class SecondNode extends React.Component {
    constructor(props){
        super(props);
        this.CRUD = new PersonCRUD();
        this.state = {
            json : []
        }
    }

    componentDidMount(){
        //Actualisation du state une fois que le composant est monté pour charger les personnes
        this.getPersons();
    }

    getPersons(){
        //Appel de la méthode get /person du json-server
        this.CRUD.get().then((resp)=>this.setState({json : resp.data}));
    }

    deletePerson(id){
        //Appel de la méthode delete /person/{id} du json-server
        //Puis rechargement de la page
        this.CRUD.delete(id).then(()=>window.location.reload(false))
    }

    render() {
        return (
            <div className={this.props.class}>
                <h1>Liste des personnes : </h1>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Adresse</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.json.map((person)=>(
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.Name}</td>
                                <td>{person.FirstName}</td>
                                <td>{person.Adress}</td>
                                <td><button onClick={()=>this.deletePerson(person.id)}>Supprimer</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <PersonModalForm />
            </div>);
    }
}
