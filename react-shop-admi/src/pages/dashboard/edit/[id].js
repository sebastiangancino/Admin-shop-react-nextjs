//obtener el id de forma dinámica
import FormProduct from '@components/FormProduct';
import { useState, useEffect } from 'react';
import { Router, useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/api';

export default function Edit() {
  const [product, setProduct] = useState({}); //para guardar nuestros productos, después de llenar el formulario de editar
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if(!router?.isReady) return;
    async function getProduct (){
        
        const response = await  axios.get(endPoints.products.getProduct(id));//function que hace el llamado a nuestro elemento
        setProduct(response.data);  // lo que esté en response.data lo asigne
    }   
    getProduct();
  }, [router?.isReady]);
  return <FormProduct product = {product} />;
}
