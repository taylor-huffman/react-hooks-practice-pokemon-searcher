import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleAddNewPokemon }) {

  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: '',
  })

  function onHandleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  // console.log(formData)

  function onHandleSubmit(e) {
    e.preventDefault()

    const pokeObj = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }

    handleAddNewPokemon(pokeObj)
    setFormData({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: '',
    })
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={onHandleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={onHandleChange} value={formData.name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={onHandleChange} value={formData.hp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={onHandleChange}
            value={formData.frontUrl}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={onHandleChange}
            value={formData.backUrl}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
