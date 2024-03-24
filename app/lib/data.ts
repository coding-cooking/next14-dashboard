import {Product, User} from './models';
import { connectToDB } from './utils';

export const fetchUsers = async (q: string, page: string) => {

    const regex = new RegExp(q, "i");

    const ITEM_PER_PAGE = 2;

    try{
        connectToDB();
        const count = (await User.find({ username: { $regex: regex } })).length;
        const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (Number(page)-1));
        return {count, users};

    }catch(err){
        console.log(err);
        throw new Error(err);
    }
}

export const fetchUser = async (id: string) => {

    try {
        connectToDB();
        const user = await User.findById(id);
        return user;

    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

export const fetchProducts = async (q, page) => {

    const regex = new RegExp(q, "i");

    const ITEM_PER_PAGE = 2;

    try {
        connectToDB();
        const count = (await Product.find({ title: { $regex: regex } })).length;
        const products = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, products };

    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}


export const fetchProduct = async (id) => {

    try {
        connectToDB();
        const product = await Product.findById(id);
        return product;

    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}