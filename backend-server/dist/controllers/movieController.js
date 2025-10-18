"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherMovieController = exports.BanglaMovieController = exports.HindiMovieController = exports.EnglishMovieController = void 0;
const baseMovieController_1 = require("./baseMovieController");
const movieService_1 = require("../services/movieService");
class EnglishMovieController extends baseMovieController_1.BaseMovieController {
    constructor() {
        super(new movieService_1.EnglishMovieService());
    }
}
exports.EnglishMovieController = EnglishMovieController;
class HindiMovieController extends baseMovieController_1.BaseMovieController {
    constructor() {
        super(new movieService_1.HindiMovieService());
    }
}
exports.HindiMovieController = HindiMovieController;
class BanglaMovieController extends baseMovieController_1.BaseMovieController {
    constructor() {
        super(new movieService_1.BanglaMovieService());
    }
}
exports.BanglaMovieController = BanglaMovieController;
class OtherMovieController extends baseMovieController_1.BaseMovieController {
    constructor() {
        super(new movieService_1.OtherMovieService());
    }
}
exports.OtherMovieController = OtherMovieController;
//# sourceMappingURL=movieController.js.map