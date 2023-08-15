import sendRequest from "../send-request";
const BASE_URL = '/api/incomes'; // Adjust the URL to match your endpoint

export async function createIncome(incomeData) {
  return sendRequest(BASE_URL, 'POST', incomeData);
}

export async function updateIncome(incomeId, incomeData) {
  return sendRequest(`${BASE_URL}/${incomeId}`, 'PUT', incomeData);
}

export async function deleteIncome(incomeId) {
  return sendRequest(`${BASE_URL}/${incomeId}`, 'DELETE');
}

export async function listIncomes() {
  return sendRequest(BASE_URL, 'GET');
}

export async function getIncome(incomeId) {
  return sendRequest(`${BASE_URL}/${incomeId}`, 'GET');
}
