import React, { useState } from 'react'

const App = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <div>
      <img
        src={
          isOn
            ? 'https://www.w3schools.com/js/pic_bulbon.gif'
            : 'https://www.w3schools.com/js/pic_bulboff.gif'
        }
        alt='bulb'
        width='100'
      />

      <br />

      <button onClick={() => setIsOn((prev) => !prev)}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  )
}

export default App