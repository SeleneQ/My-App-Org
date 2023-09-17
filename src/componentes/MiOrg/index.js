import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorIncial)
    console.log(props)
    //const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () => {
    //    console.log("Mostrar/Ocultar elemento", !mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="tittle">Mi organización</h3>
        <img src="/img/Add.png" alt="Add" onClick={props.cambiarMostrar} />

    </section>
}

export default MiOrg