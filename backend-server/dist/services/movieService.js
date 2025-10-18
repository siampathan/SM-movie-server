"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherMovieService = exports.BanglaMovieService = exports.HindiMovieService = exports.EnglishMovieService = void 0;
const baseMovieService_1 = require("./baseMovieService");
class EnglishMovieService extends baseMovieService_1.BaseMovieService {
    constructor() {
        super("English_Movies.csv");
    }
}
exports.EnglishMovieService = EnglishMovieService;
class HindiMovieService extends baseMovieService_1.BaseMovieService {
    constructor() {
        super("Hindi_Movies.csv");
    }
}
exports.HindiMovieService = HindiMovieService;
class BanglaMovieService extends baseMovieService_1.BaseMovieService {
    constructor() {
        super("Bangla_Movies.csv");
    }
}
exports.BanglaMovieService = BanglaMovieService;
class OtherMovieService extends baseMovieService_1.BaseMovieService {
    constructor() {
        super("Others_Movie.csv");
    }
}
exports.OtherMovieService = OtherMovieService;
//# sourceMappingURL=movieService.js.map