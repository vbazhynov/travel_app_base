import {
  ApiPath,
  REACT_APP_BASE_PATH,
  StorageKey,
} from '../../common/enums/enums';
import { HttpMethod } from '../../common/enums/enums';
import { HttpError } from '../../common/enums/enums';

export async function getAllTrips() {
  const token = localStorage.getItem(StorageKey.TOKEN);
  return fetch(`${REACT_APP_BASE_PATH}${ApiPath.TRIPS}`, {
    method: HttpMethod.GET,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch(throwError);
}

export async function getTripById(id: string) {
  const token = localStorage.getItem(StorageKey.TOKEN);
  return fetch(`${REACT_APP_BASE_PATH}${ApiPath.TRIPS}/${id}`, {
    method: HttpMethod.GET,
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
