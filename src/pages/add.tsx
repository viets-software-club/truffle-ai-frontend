import React, { useState } from 'react'

const MyComponent = () => {
  const [showWindow, setShowWindow] = useState(false)
  const [accessToken, setAccessToken] = useState('')

  const handleButtonClick = () => {
    setShowWindow(true)
  }

  const handleCancelClick = () => {
    setShowWindow(false)
  }

  const handleSaveClick = () => {
    // Perform save operation with the access token
    // For example: send the token to an API endpoint
    console.log('Access Token:', accessToken)
    setShowWindow(false)
  }

  const windowStyle: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '20px'
  }

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end'
  }

  const cancelButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer'
  }

  const contentStyle: React.CSSProperties = {
    marginTop: '20px'
  }

  const titleStyle: React.CSSProperties = {
    fontSize: '18px'
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '5px',
    fontSize: '14px',
    marginBottom: '10px'
  }

  const saveButtonStyle: React.CSSProperties = {
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    fontSize: '14px',
    cursor: 'pointer'
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <button
          type="button"
          style={{
            backgroundColor: 'grey',
            color: 'white',
            padding: '5px 20px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
          onClick={handleButtonClick}
        >
          Add project manually
        </button>
        {showWindow && (
          <div style={windowStyle}>
            <div style={headerStyle}>
              <button type="button" style={cancelButtonStyle} onClick={handleCancelClick}>
                X
              </button>
            </div>
            <div style={contentStyle}>
              <h2 style={titleStyle}>Add Project</h2>
              <div>
                <input
                  type="text"
                  id="accessToken"
                  value={accessToken}
                  onChange={(e) => setAccessToken(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <button type="button" style={saveButtonStyle} onClick={handleSaveClick}>
                Add project
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default MyComponent
