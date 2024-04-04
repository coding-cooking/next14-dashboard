"use server"

import { connectToDB } from './utils';
import { Product, User } from './models';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { signIn } from '../auth';

export const addUser = async (formData) => {
    let { username, email, password, phone, isAdmin, isActive, address } = Object.fromEntries(formData);
    //transform the data type from string to boolean
    isAdmin = isAdmin === 'true' ? true : false;
    isActive = isActive === 'true' ? true : false;

    try {
        connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username, 
            email, 
            password: hashedPassword, 
            phone, 
            isAdmin, 
            isActive, 
            address
        });

        await newUser.save();

    } catch (error) {
        console.log('error is', error);
        throw new Error("Fail to create new user")
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const updateUser = async (formData) => {
    let { id, username, email, password, phone, isAdmin, isActive, address } = Object.fromEntries(formData);
    //transform the data type from string to boolean
    isAdmin = isAdmin === 'true' ? true : false;
    isActive = isActive === 'true' ? true : false;

    try {
        connectToDB();

        const updateFields = {
            username, email, password, phone,address, isAdmin, isActive
        };

        Object.keys(updateFields).forEach(
            (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
        );
        console.log("update",username)

        await User.findByIdAndUpdate(id, updateFields);
        
    } catch (error) {
        console.log(error);
        throw new Error("Fail to update user")
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const deleteUser = async (formData) => {
    let { id } = Object.fromEntries(formData);
    
    try {
        connectToDB();

        await User.findByIdAndDelete(id);

    } catch (error) {
        console.log(error);
        throw new Error("Fail to delete the user")
    }
    revalidatePath("/dashboard/users");
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
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}

export const deleteProduct = async (formData) => {
    let { id } = Object.fromEntries(formData);

    try {
        connectToDB();

        await Product.findByIdAndDelete(id);

    } catch (error) {
        console.log(error);
        throw new Error("Fail to delete the product")
    }
    revalidatePath("/dashboard/products");
}

export const authenticate = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);
    try {
        console.log("hello world")
        const result = await signIn("credentials", { username, password });
        if (result.ok) {
            // Authentication successful, exit the function
            return { success: true, message: null };
        } else {
            // Handle failed authentication case
            return "Wrong Credentials111";
        }
    } catch (err) {
        if (err.message.includes("CredentialsSignin")) {
            return "Wrong Credentials";
        }
        return "An error occurred during authentication";
        return {
            success: false,
            message: "Wrong Credentials.",
        };
    }
};

