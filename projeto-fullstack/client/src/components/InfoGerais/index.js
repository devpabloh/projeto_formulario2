import styles from "./InfoGerais.module.css";
import { InputInfoGerais } from "./InputInfoGerais";
import { useState } from "react";

export const InfoGerais = () => {

    const [formData, setFormData] = useState({
        nome: "",
    })

    const handleChange = (event)=>{
        const {nome} = event.target
        console.log(nome)
        setFormData({
            ...formData,
            nome
        })
    }


    <fieldset className={styles.containerFieldset}>
        <legend>Informações gerais do projeto</legend>
        <div>
            <InputInfoGerais
                type="text"
                name="nome"
                placeholder="Nome"
                id="nome"
                onChange={handleChange}
            />
        </div>
    </fieldset>
}