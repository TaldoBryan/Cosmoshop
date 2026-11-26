import { useState, useEffect } from "react";
import api from "../services/api";

export default function useProdutos() {

    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {

        async function buscarProdutos() {
            try {
                const response = await api.get("/produto");

                setProdutos(response.data);

            } catch (error) {
                setErro(error.message);
            } finally {
                setLoading(false);
            }
        }

        buscarProdutos();

    }, []);

    return { produtos, loading, erro };
}
