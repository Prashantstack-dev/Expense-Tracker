import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const companyName = "Expense Tracker"
  return (
    <div>
      <span id="footer">&copy; {currentYear} {companyName}. All rights reserved.</span>
    </div>
  )
}

export default Footer
