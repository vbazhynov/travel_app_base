import { ENV } from '../common/enums/enums';
import { Auth } from './auth/auth.service.js';
import { Bookings } from './bookings/bookings.service.js';
import { Http } from './http/http.service.js';
import { Trips } from './trips/trips.service';
import { Storage } from './storage/storage.service';

const storage = new Storage({
  storage: localStorage,
});

const http = new Http({
  storage,
});

const auth = new Auth({
  apiPath: ENV.API_PATH,
  http,
});

const bookings = new Bookings({
  apiPath: ENV.API_PATH,
  http,
});

const trips = new Trips({
  apiPath: ENV.API_PATH,
  http,
});

export { http, storage, auth, trips, bookings };
