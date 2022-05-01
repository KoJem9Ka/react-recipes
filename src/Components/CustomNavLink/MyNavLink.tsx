import React from 'react'
import styles from './MyNavLink.module.scss'
import { NavLink, NavLinkProps, useMatch } from 'react-router-dom'

type TProps = Omit<NavLinkProps, 'to'> & {
  children: React.ReactNode
  to: string
}

const MyNavLink: React.FC<TProps> = ({ to, children, ...props }) => {
  const match = useMatch( { path: to, end: to.length === 1 } )
  const classes: string[] = [ styles.CustomNavLink ]
  if (match) classes.push( styles.active )

  return (
    <NavLink
      className={classes.join( ' ' )}
      to={to}
      {...props}
    >
      {children}
    </NavLink>
  )
}

export default MyNavLink
