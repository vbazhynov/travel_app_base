import {
  ApiPath,
  BookingsApiPath,
  HttpMethod,
  ContentType,
} from '../../common/enums/enums';
import { Http } from '../http/http.service';

class Bookings {
  _apiPath: string | undefined;
  _http: Http;
  constructor({ apiPath, http }: { apiPath: string | undefined; http: Http }) {
    this._apiPath = apiPath;
    this._http = http;
  }

  getBookings() {
    return this._http.load(`${this._apiPath}${ApiPath.BOOKINGS}`, {
      method: HttpMethod.GET,
    });
  }

  addPost(payload: string) {
    return this._http.load(`${this._apiPath}${ApiPath.BOOKINGS}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }

  deletePost(id: string) {
    return this._http.load(
      `${this._apiPath}${ApiPath.BOOKINGS}${BookingsApiPath.$ID}${id}`,
      {
        method: HttpMethod.DELETE,
      },
    );
  }
}

export { Bookings };
