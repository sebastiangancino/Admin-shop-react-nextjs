import axios from 'axios';
import endPoints from '@services/api';

const addProduct  = async(body) => {  //body es el cuerpo o estructura de la info
    const  config = {
        headers:{
            accept: '*/*',
            'Content-type': 'application/json',
        },
    };
    const response = await axios.post(endPoints.products.addProducts, body, config);
    return response.data;
}

const updateProduct  = async(id, body) => {  //body es el cuerpo o estructura de la info
    const  config = {
        headers:{
            accept: '*/*',
            'Content-type': 'application/json',
        },
    };
    const response = await axios.put(endPoints.products.updateProducts(id), body, config);
    return response.data;
};

    const  deleteProduct = async(id) => {
        const response = await axios.delete(endPoints.products.deleteProduct(id));
        return response.data;
    }


 export {addProduct, deleteProduct, updateProduct};