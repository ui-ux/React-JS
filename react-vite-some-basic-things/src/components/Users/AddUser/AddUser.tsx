import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import type { User, UserData } from '../models/UserModel'

interface AddUserProps {
  userToEdit: User | null
  onAddUser: (user: UserData) => void
  onUpdateUser: (id: number, user: UserData) => void
}

function AddUser({ userToEdit, onAddUser, onUpdateUser }: AddUserProps) {
  const [name, setName] = useState(userToEdit?.name ?? '')
  const [username, setUsername] = useState(userToEdit?.username ?? '')
  const [email, setEmail] = useState(userToEdit?.email ?? '')
  const [phone, setPhone] = useState(userToEdit?.phone ?? '')
  const [website, setWebsite] = useState(userToEdit?.website ?? '')
  const [street, setStreet] = useState(userToEdit?.address.street ?? '')
  const [suite, setSuite] = useState(userToEdit?.address.suite ?? '')
  const [city, setCity] = useState(userToEdit?.address.city ?? '')
  const [zipcode, setZipcode] = useState(userToEdit?.address.zipcode ?? '')
  const [lat, setLat] = useState(userToEdit?.address.geo.lat ?? '')
  const [lng, setLng] = useState(userToEdit?.address.geo.lng ?? '')
  const [companyName, setCompanyName] = useState(userToEdit?.company.name ?? '')
  const [catchPhrase, setCatchPhrase] = useState(userToEdit?.company.catchPhrase ?? '')
  const [bs, setBs] = useState(userToEdit?.company.bs ?? '')

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value)
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(event.target.value)
  }

  function handleWebsiteChange(event: ChangeEvent<HTMLInputElement>) {
    setWebsite(event.target.value)
  }

  function handleStreetChange(event: ChangeEvent<HTMLInputElement>) {
    setStreet(event.target.value)
  }

  function handleSuiteChange(event: ChangeEvent<HTMLInputElement>) {
    setSuite(event.target.value)
  }

  function handleCityChange(event: ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value)
  }

  function handleZipcodeChange(event: ChangeEvent<HTMLInputElement>) {
    setZipcode(event.target.value)
  }

  function handleLatChange(event: ChangeEvent<HTMLInputElement>) {
    setLat(event.target.value)
  }

  function handleLngChange(event: ChangeEvent<HTMLInputElement>) {
    setLng(event.target.value)
  }

  function handleCompanyNameChange(event: ChangeEvent<HTMLInputElement>) {
    setCompanyName(event.target.value)
  }

  function handleCatchPhraseChange(event: ChangeEvent<HTMLInputElement>) {
    setCatchPhrase(event.target.value)
  }

  function handleBsChange(event: ChangeEvent<HTMLInputElement>) {
    setBs(event.target.value)
  }

  function getUserData(): UserData {
    return {
      name,
      username,
      email,
      phone,
      website,
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: { lat, lng },
      },
      company: {
        name: companyName,
        catchPhrase,
        bs,
      },
    }
  }

  function handleAddUser() {
    onAddUser(getUserData())
    setName('')
    setUsername('')
    setEmail('')
    setPhone('')
    setWebsite('')
    setStreet('')
    setSuite('')
    setCity('')
    setZipcode('')
    setLat('')
    setLng('')
    setCompanyName('')
    setCatchPhrase('')
    setBs('')
  }

  function handleUpdateUser() {
    if (userToEdit) {
      onUpdateUser(userToEdit.id, getUserData())
    }
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    if (userToEdit) {
      handleUpdateUser()
      return
    }

    handleAddUser()
  }

  return (
    <aside className="add-user-panel">
      <h2>{userToEdit ? 'Edit user' : 'Add user'}</h2>
      <form className="add-user-form" onSubmit={handleSubmit}>
        <div className="add-user-fields">
          <label>
            Name
            <input onChange={handleNameChange} value={name} />
          </label>
          <label>
            Username
            <input onChange={handleUsernameChange} value={username} />
          </label>
          <label>
            Email
            <input onChange={handleEmailChange} value={email} />
          </label>
          <label>
            Phone
            <input onChange={handlePhoneChange} value={phone} />
          </label>
          <label>
            Website
            <input onChange={handleWebsiteChange} value={website} />
          </label>
          <fieldset>
            <legend>Address</legend>
            <label>
              Street
              <input onChange={handleStreetChange} value={street} />
            </label>
            <label>
              Suite
              <input onChange={handleSuiteChange} value={suite} />
            </label>
            <label>
              City
              <input onChange={handleCityChange} value={city} />
            </label>
            <label>
              Zipcode
              <input onChange={handleZipcodeChange} value={zipcode} />
            </label>
            <label>
              Latitude
              <input onChange={handleLatChange} value={lat} />
            </label>
            <label>
              Longitude
              <input onChange={handleLngChange} value={lng} />
            </label>
          </fieldset>
          <fieldset>
            <legend>Company</legend>
            <label>
              Company name
              <input onChange={handleCompanyNameChange} value={companyName} />
            </label>
            <label>
              Catch phrase
              <input onChange={handleCatchPhraseChange} value={catchPhrase} />
            </label>
            <label>
              Business
              <input onChange={handleBsChange} value={bs} />
            </label>
          </fieldset>
        </div>
        <button className="add-user-button" type="submit">
          {userToEdit ? 'Update' : 'Add'}
        </button>
      </form>
    </aside>
  )
}

export default AddUser
