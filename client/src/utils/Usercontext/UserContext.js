import { createContext } from 'react'

const UserContext = createContext({
  username: '',
  email: '',
  password: '',
  imagePreview: '',
  loginError: false,
  formValid: true,
  intitalLoad: true,
  token: '',
  polls: '',
  errors: {
    username: '',
    email: '',
    password: ''
  },
  handleInputChange: () => { },
  handleFormSubmit: () => { }
})

export default UserContext