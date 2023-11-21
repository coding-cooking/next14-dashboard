"use server"

import { connectToDB } from './utils';
import { User } from './models';

export const addUser = async (formData) => {
    let { username, email, password, phone, isAdmin, isActive, address } = Object.fromEntries(formData);
    console.log(formData);
    //transform the data type from string to boolean
    isAdmin = isAdmin === 'true' ? true : false;
    isActive = isActive === 'true' ? true : false;

    try {
        connectToDB();
        const newUser = new User({
            username, email, password, phone, isAdmin, isActive, address
        });
        console.log("----", newUser)

        await newUser.save();

    } catch (error) {
        console.log(error);
        throw new Error("Fail to create new user")

    }
}
