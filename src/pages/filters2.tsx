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

  const paragraphStyle: React.CSSProperties = {
    fontSize: '14px'
  }

  const strongStyle: React.CSSProperties = {
    fontWeight: 'bold'
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
        <button type="button" onClick={handleButtonClick}>
          Open Window
        </button>
        {showWindow && (
          <div style={windowStyle}>
            <div style={headerStyle}>
              <button type="button" style={cancelButtonStyle} onClick={handleCancelClick}>
                X
              </button>
            </div>
            <div style={contentStyle}>
              <h2 style={titleStyle}>Add GitHub Access Token</h2>
              <p style={paragraphStyle}>
                Star-history uses the GitHub API to retrieve repository metadata. You may see this
                page because you have hit the GitHub API rate limit.
              </p>
              <p style={paragraphStyle}>
                <p style={paragraphStyle}>
                  Star-history will need your personal access token to unlimit it. If you don&apos;t
                  already have one, create one and paste it into the textbox below (no scope to your
                  personal data is needed).
                </p>
              </p>
              <div>
                <label htmlFor="accessToken" style={strongStyle}>
                  Access Token (will be stored in yourlocal storage)
                  <input
                    type="text"
                    id="accessToken"
                    value={accessToken}
                    onChange={(e) => setAccessToken(e.target.value)}
                    style={inputStyle}
                  />
                </label>
              </div>
              <button type="button" style={saveButtonStyle} onClick={handleSaveClick}>
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default MyComponent
