import {
  ApiPath,
  AuthApiPath,
  HttpMethod,
  ContentType,
} from '../../common/enums/enums';
import { Http } from '../http/http.service';

class Auth {
  _apiPath: string | undefined;
  _http: Http;
  constructor({ apiPath, http }: { apiPath: string | undefined; http: Http }) {
    this._apiPath = apiPath;
    this._http = http;
  }

  login(payload: { email: string; password: string }) {
    return this._http.load(
      `${this._apiPath}${ApiPath.AUTH}${AuthApiPath.SIGNIN}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        hasAuth: false,
        payload: JSON.stringify(payload),
      },
    );
  }

  registration(payload: { fullName: string; email: string; password: string }) {
    return this._http.load(
      `${this._apiPath}${ApiPath.AUTH}${AuthApiPath.SIGNUP}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        hasAuth: false,
        payload: JSON.stringify(payload),
      },
    );
  }

  getCurrentUser() {
    return this._http.load(
      `${this._apiPath}${ApiPath.AUTH}${AuthApiPath.USER}`,
      {
        method: HttpMethod.GET,
      },
    );
  }
}

export { Auth };
