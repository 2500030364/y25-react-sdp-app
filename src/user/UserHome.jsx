import React from 'react'

export default function UserHome() {
  return (
    <div>
        <div className="user-content">

  <div className="user-home-wrapper">

    <h1 className="user-home-heading">
      Welcome
    </h1>

    <p className="user-home-sub">
      Explore your library
    </p>

    <div className="grid grid-cols-2 gap-6 mt-10">

      <div className="user-box">
        <h2>Browse</h2>
        <p>View books</p>
      </div>

      <div className="user-box">
        <h2>Search</h2>
        <p>Find quickly</p>
      </div>

      <div className="user-box">
        <h2>Details</h2>
        <p>Check info</p>
      </div>

      <div className="user-box">
        <h2>Read</h2>
        <p>Start learning</p>
      </div>

    </div>

  </div>

</div>
    </div>
  )
}
