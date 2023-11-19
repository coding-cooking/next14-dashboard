import React from 'react'
import styles from '../../../ui/dashboard/users/addUser/addUser.module.css'

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required/>
        <input type="phone" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option>Is Admin?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option>Is Active?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <textarea name="address" id="address" rows={16} placeholder="Address"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddUser
