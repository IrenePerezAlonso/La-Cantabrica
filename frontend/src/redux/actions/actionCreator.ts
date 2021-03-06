import axios from 'axios';
import { Dispatch } from 'redux';
import actionTypes from './actionTypes';

const config: Object = {
  method: 'get',
  url: 'http://localhost:2021/api/products',
  headers: {
    Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYmYzNTI4ODBkZTM4NTNkMGEzMGY0MiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0sImlhdCI6MTYyNDI4MTQ5NiwiZXhwIjoxNjI0NzYxNDk2fQ.PKK4V0TphNqluxHwB9sI-ufI2ATMDrtnv7sUQoJAeGM'
  }
};

const token = {
  headers: {
    Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYmYzNTI4ODBkZTM4NTNkMGEzMGY0MiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0sImlhdCI6MTYyNDI4MTQ5NiwiZXhwIjoxNjI0NzYxNDk2fQ.PKK4V0TphNqluxHwB9sI-ufI2ATMDrtnv7sUQoJAeGM'
  }
};

const url = 'http://localhost:2021/api/products';

export function loadProducts() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(config);
      dispatch({
        type: actionTypes.LOAD_PRODUCTS,
        products: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_PRODUCTS_ERROR
      });
    }
  };
}

export function getProductById(productId: any) {
  return async (dispatch: Dispatch) => {
    const { data } = await axios(`${url}/${productId}`, token);
    dispatch({
      type: actionTypes.LOAD_PRODUCT,
      product: data
    });
  };
}

export default () => ({
  loadProducts,
  getProductById
});
