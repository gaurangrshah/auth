import React from 'react'

const Signup = () => {

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    const formInputs = [...document.querySelectorAll('input')]
    formInputs.pop()
    const formData = formInputs.reduce((obj, item) => Object.assign(obj, {[item.name]: item.value}), {})

   const response = await fetch('/api/auth/register', {method: 'POST', headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(formData)
  })

  const newUser = await response.json()
  console.log(newUser)
  }

  return (
    <div className="page">
      <div className="signin">
        <div className="card">
          <div className="provider">
            <form onSubmit={handleSubmit}>
              <div style={{display: "flex", flexDirection: "column", gap: 6}}>
                <input name="name" type="text" placeholder="username" />
                <input name="email" type="text" placeholder="you@youremail.com" />
                <input name="password" type="password" placeholder="**********" />
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
