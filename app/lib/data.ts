import {Product, User} from './models';
import { connectToDB } from './utils';

export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q, "i");

    const ITEM_PER_PAGE = 2;

    try{
        connectToDB();
        const count = (await User.find({ username: { $regex: regex } })).length;
        const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return {count, users};

    }catch(err){
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
        console.log('iiii', products)
        return { count, products };

    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}