import React from 'react'

const year = new Date().getFullYear();
const Footer = () => (
    <footer>
        <p>©{year} all rights Reserved.</p>
    </footer>
)

export default Footer;