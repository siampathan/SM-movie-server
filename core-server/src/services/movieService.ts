import { BaseMovieService } from "./baseMovieService";

export class EnglishMovieService extends BaseMovieService {
  constructor() {
    super("English_Movies.csv");
  }
}

export class HindiMovieService extends BaseMovieService {
  constructor() {
    super("Hindi_Movies.csv");
  }
}

export class BanglaMovieService extends BaseMovieService {
  constructor() {
    super("Bangla_Movies.csv");
  }
}

export class OtherMovieService extends BaseMovieService {
  constructor() {
    super("Others_Movie.csv");
  }
}
