import { HttpError } from '../../common/enums/exception/exceptions';
import { StorageKey, HttpHeader, HttpMethod } from '../../common/enums/enums';
import { Storage } from '../storage/storage.service';

class Http {
  _storage: Storage;
  constructor({ storage }: { storage: Storage }) {
    this._storage = storage;
  }

  load(
    url: string,
    options: {
      method: string;
      payload?: string;
      hasAuth?: boolean;
      contentType?: string;
    },
  ) {
    const {
      method = HttpMethod.GET,
      payload = null,
      hasAuth = true,
      contentType,
    } = options;
    const headers = this._getHeaders({
      hasAuth,
      contentType,
    });

    return fetch(url, {
      method,
      headers,
      body: payload,
    })
      .then(this._checkStatus)
      .then(this._parseJSON)
      .catch(this._throwError);
  }

  _getHeaders({
    hasAuth,
    contentType,
  }: {
    hasAuth: boolean;
    contentType: string | undefined;
  }) {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    if (hasAuth) {
      const token = this._storage.getItem(StorageKey.TOKEN);

      headers.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
    }

    return headers;
  }

  async _checkStatus(response: Response) {
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

  _parseJSON(response: Response) {
    return response.json();
  }

  _throwError(err: string) {
    throw err;
  }
}

export { Http };
