import api from ".";

const ENDOPOINT = {
  ACCOUNT: "/account",
};

const getAllAccount = async () => {
  try {
    const accounts = await api.get(ENDOPOINT.ACCOUNT);
    return accounts;
  } catch (err) {
    throw Error(err);
  }
};

const getSelectedAccount = async (slug) => {
  try {
    const selectedAccount = await api.get(`${ENDOPOINT.ACCOUNT}slug`);
    console.log(selectedAccount);
    return selectedAccount;
  } catch (err) {
    throw Error(err);
  }
};

export { getAllAccount, getSelectedAccount };
