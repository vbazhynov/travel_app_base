import {
  ApiPath,
  REACT_APP_BASE_PATH,
  StorageKey,
} from '../../common/enums/enums';
import { AuthApiPath, HttpMethod } from '../../common/enums/enums';
import { HttpError } from '../../common/enums/enums';

export async function signUpApi<T>(payload: {
  fullName: string;
  email: string;
  password: string;
}): Promise<T> {
  return fetch(`${REACT_APP_BASE_PATH}${ApiPath.AUTH}${AuthApiPath.SIGNUP}`, {
    method: HttpMethod.POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch(throwError);
}

export async function getCurrentUserApi<T>(): Promise<T> {
  const token = localStorage.getItem(StorageKey.TOKEN);
  return fetch(`${REACT_APP_BASE_PATH}${ApiPath.AUTH}${AuthApiPath.USER}`, {
    method: HttpMethod.GET,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch(throwError);
}

export async function signInApi<T>(payload: {
  email: string;
  password: string;
}): Promise<T> {
  return fetch(`${REACT_APP_BASE_PATH}${ApiPath.AUTH}${AuthApiPath.SIGNIN}`, {
    method: HttpMethod.POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch(throwError);
}

async function checkStatus(response: Response) {
  if (!response.ok) {
    const parsedException = await response.json().catch(() => ({
      message: response.statusText,
    }));

    throw new HttpError({
      status: response.status,
      message: parsedException?.message,
    });
  }

  return response;
}

function parseJSON(response: Response) {
  return response.json();
}

function throwError(err: Error) {
  throw err;
}
