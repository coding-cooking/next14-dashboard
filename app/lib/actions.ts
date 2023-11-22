"use server"

import { connectToDB } from './utils';
import { Product, User } from './models';

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

export const addProduct = async (formData) => {
    let { title,category, price, stock, icolor, size, desc } = Object.fromEntries(formData);

    try {
        connectToDB();
        const newProduct = new Product({
            title, category, price, stock, icolor, size, desc
        });

        await newProduct.save();

    } catch (error) {
        console.log(error);
        throw new Error("Fail to create new product")

    }
}
