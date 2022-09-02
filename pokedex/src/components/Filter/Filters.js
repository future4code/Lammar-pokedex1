import React from "react";
import { useState } from "react";
import { Field, FilterDiv } from "./style";

function Filters() {

  const [nameNumberQuery, setNameNumberQuery] = useState('')
  const [typeQuery, setTypeQuery] = useState('')
  const [selected, setSelected] = useState('number')

  return (
    <FilterDiv>
      <Field>
        <label for='name-number'>Filtro por nome ou número:</label>
        <input name='name-number' placeholder='Digite o nome ou número' type='text' value={nameNumberQuery} onChange={(e) => { setNameNumberQuery(e.target.value) }} />
      </Field>
      <Field>
        <label for='type'>Filtro por tipo:</label>
        <input name='type' placeholder='Digite o tipo' type='text' value={typeQuery} onChange={(e) => { setTypeQuery(e.target.value) }} />
      </Field>
      <Field>
        <label for='type'>Ordenar por:</label>
        <select value={selected} onChange={(e) => { setSelected(e.target.value) }} >
          <option value="number">Número</option>
          <option value="name">Nome</option>
        </select>
      </Field>
    </FilterDiv>
  );
}

export default Filters;