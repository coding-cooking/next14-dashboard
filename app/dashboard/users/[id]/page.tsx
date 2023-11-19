import React from 'react'
import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                  <Image src={"/noavatar.png"} alt="" fill />
            </div>
            John Joe
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <label>Username</label>
                  <input type="text" name="username" placeholder="John Joe" />
                <label>Email</label>
                <input type="email" name="email" placeholder="johnjoe@gmail.com" />
                <label>Password</label>
                <input type="password" name="password" />
                <label>Phone</label>
                <input type="text" name="phone" placeholder="+123456" />
                <label>Address</label>
                <textarea name="address" placeholder="newyork" />
                <label>Is Admin?</label>
                <select name="isAdmin" id="isAdmin">
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <label>Is Active?</label>
                <select name="isActive" id="isActive">
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <button>Update</button>
            </form>
        </div>      
    </div>
  )
}

export default SingleUserPage
