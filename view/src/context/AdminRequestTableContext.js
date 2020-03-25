import React, { createContext, useState } from 'react'
import { adminAction } from '../modules/admin/actions'
export const AdminRequestTableContext = createContext()

export const AdminRequestTableProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState('')
  const [loading, setLoading] = useState(false)
  const handleModal = (id) => {
    setOpen(true)
    setId(id)
  }
  const handleOk = async () => {
    setLoading(true)
    try {
      await adminAction.getInitRequest()
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  const handleCancel = () => {
    setOpen(false)
  }
  return (
    <AdminRequestTableContext.Provider
      value={{
        open,
        id,
        handleOk,
        handleModal,
        handleCancel,
        loading,
      }}>
      {children}
    </AdminRequestTableContext.Provider>
  )
}
