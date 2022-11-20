import {
  ApiPath,
  REACT_APP_BASE_PATH,
  StorageKey,
} from '../../common/enums/enums';
import { HttpMethod } from '../../common/enums/enums';
import { HttpError } from '../../common/enums/enums';

export async function getAllBookings() {
  const token = localStorage.getItem(StorageKey.TOKEN);
  return fetch(`${REACT_APP_BASE_PATH}${ApiPath.BOOKINGS}`, {
    method: HttpMethod.GET,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch(throwError);
}

export async function addBooking<T>(payload: {
  tripId: string;
  userId: string;
  guests: number;
  date: string;
}): Promise<T> {
  const token = localStorage.getItem(StorageKey.TOKEN);
  return fetch(`${REACT_APP_BASE_PATH}${ApiPath.BOOKINGS}`, {
    method: HttpMethod.POST,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch(throwError);
}

export async function deleteBookingById(id: string) {
  const token = localStorage.getItem(StorageKey.TOKEN);
  fetch(`${REACT_APP_BASE_PATH}${ApiPath.BOOKINGS}/${id}`, {
    method: HttpMethod.DELETE,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return id;
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
  console.log(err.name);

  throw err;
}
