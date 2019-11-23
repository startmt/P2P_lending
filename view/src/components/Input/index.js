import React from 'react'
import { Input } from 'semantic-ui-react'
const InputComp = ( {name, ...rest }, props) => {
  return <Input name={name} {...rest} />
}

export default InputComp
