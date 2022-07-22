import { ApiPath, TripsApiPath, HttpMethod } from '../../common/enums/enums';
import { Http } from '../http/http.service';

class Trips {
  _apiPath: string | undefined;
  _http: Http;
  constructor({ apiPath, http }: { apiPath: string | undefined; http: Http }) {
    this._apiPath = apiPath;
    this._http = http;
  }

  getAllPosts() {
    return this._http.load(`${this._apiPath}${ApiPath.TRIPS}`, {
      method: HttpMethod.GET,
    });
  }

  getPost(id: string) {
    return this._http.load(
      `${this._apiPath}${ApiPath.TRIPS}${TripsApiPath.ROOT}${id}`,
      {
        method: HttpMethod.GET,
      },
    );
  }
}

export { Trips };
