import axios from './axiosDeclaration';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userlogin = async user => {
  try {
    const response = await axios
      .post('user/login', {
        email: user.email,
        password: user.password,
      })
    // .then(r => {
    //   console.log('r', r);
    //   return r;
    // });
    console.log('data :::::>>>', response);
    return response;
  } catch (err) {
    //alert('UserName and Password invalid', err);
    console.log('er :', err);
    //return false;
  }
};

export const changeUserPassword = async data => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token?.replace(/['"]/g, '');
  try {
    const responseData = await axios.post(
      'user/change-password',
      {
        currentPassword: data.oldpassword,
        newPassword: data.newpassword,
        confirmPassword: data.confirmpassword,
      },
      {
        headers: {
          Authorization: `Bearer ${tempToken}`,
        },
      },
    );
    // console.log('changePass ::', responseData.data);
    return responseData.data;
  } catch (err) {
    console.log('err <<:::::>>', err);
  }
};

export const categoryDetailFunction = async () => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');
  try {
    const responseData = await axios.get('category/list', {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });
    return responseData.data.data;
  } catch (error) {
    return console.log('errr==:', error);
  }
};

export const addcategoryFunction = async addData => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');

  try {
    const responseData = await axios.post(
      'category/create',
      { category_name: addData.category },
      {
        headers: {
          Authorization: `Bearer ${tempToken}`,
        },
      },
    );
    //console.log('add category ::', responseData.data);
    return responseData.data;
  } catch (err) {
    console.log('err', err);
    return err
  }
};

export const deleteCategoryFunction = async payload => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');

  try {
    //console.log('payload id', payload);
    const responseData = await axios.delete('category/' + payload, {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });
    console.log('d resp', responseData.data);
    return responseData.data;
  } catch (error) {
    return console.log('detele error', error);
  }
};

export const updateCategoryData = async payload => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');

  try {
    console.log('payload update id', payload);
    const responseData = await axios.patch(
      'category/' + payload.id,
      {
        category_name: payload.category,
      },
      {
        headers: {
          Authorization: `Bearer ${tempToken}`,
        },
      },
    );

    console.log('update', responseData.data);
    return responseData.data;
  } catch (error) {
    return console.log('update error ::', error);
  }
};

export const employeeDetailsList = async () => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');
  try {
    const responseData = await axios.get('user', {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });
    //console.log('emplyee det', responseData.data.data.rows);
    return responseData.data.data.rows;
  } catch (error) {
    return console.log('errr==:', error);
  }
};

export const employeeRegisterFunction = async (emp_data) => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');
  try {
    const responseData = await axios.post(
      'user/create',
      {
        user_role_id: 3,
        email: emp_data.email,
        password: emp_data.password,
        confirm_password: emp_data.confirmpassword,
        first_name: emp_data.first_name,
        last_name: emp_data.last_name,
        phone: emp_data.phone,
        dob: emp_data.date
      },
      {
        headers: {
          Authorization: `Bearer ${tempToken}`,
        },
      },
    );
    console.log('emp data  ::', responseData);
    return responseData;
  } catch (error) {
    console.log('emp errr :::', error);
  }
}

export const singleEmployeeFunction = async payload => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');

  try {
    const responseData = await axios.get('user/' + payload.id, {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });
    return responseData;
  } catch (error) {
    return console.log('sin emp', error);
  }
};

export const updateEmpData = async payload => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');

  try {
    console.log('payload update id', payload);
    const responseData = await axios.patch(
      'user/' + payload.id,
      {
        user_role_id: 3,
        email: payload.email,
        password: payload.password,
        confirm_password: payload.confirmpassword,
        first_name: payload.first_name,
        last_name: payload.last_name,
        phone: payload.phone,
        dob: payload.date
      },
      {
        headers: {
          Authorization: `Bearer ${tempToken}`,
        },
      },
    );

    console.log('Emp update', responseData);
    return responseData;
  } catch (error) {
    return console.log('update error ::', error);
  }
};

export const employeeListStatus = async payload => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');

  try {
    console.log('status id', payload);
    const responseData = await axios.patch('user/status/' + payload, {}, {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });
    console.log('res data :::::::::::', responseData);
    return responseData;
  } catch (error) {
    return console.log('emp status', error);
  }
};


export const categoryListStatus = async payload => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');

  try {
    console.log('status id', payload);
    const responseData = await axios.patch('category/status/' + payload, {}, {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });
    // console.log('category status :::::::::::', responseData);
    return responseData;
  } catch (error) {
    return console.log('cat status', error);
  }
};

export const getCategoryStockList = async () => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');
  try {
    const responseData = await axios.post(
      'category/stock', {},
      {
        headers: {
          Authorization: `Bearer ${tempToken}`,
        },
      },
    );
    console.log('stock val  ::', responseData);
    return responseData;
  } catch (error) {
    console.log('stock errr :::', error);
  }
}

export const getProductListData = async () => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');

  try {
    const responseData = await axios.get('product/', {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });
    return responseData;
  } catch (error) {
    return console.log('product err', error);
  }
};

export const postProductData = async payload => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');

  try {
    console.log('payload update id', payload);
    const responseData = await axios.post(
      'product/create',
      {
        category_id: payload.category_id,
        product_name: payload.product_name,
        purchase_date: payload.purchase_date,
        product_description: payload.product_description,
        product_cost: payload.product_cost,
      },
      {
        headers: {
          Authorization: `Bearer ${tempToken}`,
        },
      },
    );

    console.log('product data  ::', responseData);
    return responseData;
  } catch (error) {
    return console.log('product errr :::', error);
  }
}

export const getProductData = async payload => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');
  try {
    const responseData = await axios.get('product/' + payload, {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });
    return responseData;
  } catch (error) {
    return console.log('product err', error);
  }
}

export const updateProductData = async payload => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');

  try {
    console.log('payload update product id', payload);
    const responseData = await axios.patch(
      'product/' + payload.id,
      {
        category_id: payload.category_id,
        product_name: payload.product_name,
        purchase_date: payload.purchase_date,
        product_description: payload.product_description,
        product_cost: payload.product_cost,
      },
      {
        headers: {
          Authorization: `Bearer ${tempToken}`,
        },
      },
    );

    console.log('product update', responseData.data);
    return responseData.data;
  } catch (error) {
    return console.log('product update error ::', error);
  }
};

export const productStatusData = async payload => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');

  try {
    console.log('prouct status id', payload);
    const responseData = await axios.patch('product/status/' + payload, {}, {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });
    // console.log('category status :::::::::::', responseData);
    return responseData;
  } catch (error) {
    return console.log('cat status', error);
  }
};

export const allocationListData = async () => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');
  try {
    const responseData = await axios.get('allocation', {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });
    //console.log('alll', responseData.data.data.rows);
    return responseData.data.data.rows;
  } catch (error) {
    return console.log('errr==:', error);
  }
};

export const addAllocationDataAPI = async payload => {
  const token = await AsyncStorage.getItem('userToken');
  const tempToken = token.replace(/['"]/g, '');
  try {
    const responseData = await axios.post(
      '/allocation/create',
      {
        employee_id: payload.employee_id,
      },
      {
        headers: {
          Authorization: `Bearer ${tempToken}`,
        },
      },
    );
    return responseData;
  } catch (error) {
    return console.log('allocation errr :::', error);
  }
}
