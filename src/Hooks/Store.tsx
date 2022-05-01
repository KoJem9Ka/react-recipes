import React, { useContext } from 'react'
import AppContext from '../Store/Context'
import { TAppContext } from '../Store/Types'

const useStore = (): TAppContext => useContext( AppContext )

export default useStore
