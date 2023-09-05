import React from "react";
import Filme from "./Filmes";

interface TabelaDeFilmesProps {
    filmesFiltrados: Filme[];
}

function TabelaDeFilmes({ filmesFiltrados }: TabelaDeFilmesProps) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Gênero</th>
                    <th>Imagem</th>
                </tr>
            </thead>
            <tbody>
                {filmesFiltrados.map((filme) => (
                    <tr key={filme.id}>
                        <td>{filme.nome}</td>
                        <td>{filme.genero}</td>
                        <td>
                            <img
                                src={filme.imagem}
                                alt={filme.nome}
                                style={{ maxWidth: "100px" }}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TabelaDeFilmes;
