import { BaseMovieController } from "./baseMovieController";
import {
  EnglishMovieService,
  HindiMovieService,
  BanglaMovieService,
  OtherMovieService,
} from "../services/movieService";

export class EnglishMovieController extends BaseMovieController {
  constructor() {
    super(new EnglishMovieService());
  }
}

export class HindiMovieController extends BaseMovieController {
  constructor() {
    super(new HindiMovieService());
  }
}

export class BanglaMovieController extends BaseMovieController {
  constructor() {
    super(new BanglaMovieService());
  }
}

export class OtherMovieController extends BaseMovieController {
  constructor() {
    super(new OtherMovieService());
  }
}
