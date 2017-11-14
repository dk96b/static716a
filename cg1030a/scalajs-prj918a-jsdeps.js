//! @version js-joda - 1.1.8
//! @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
//! @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
//! @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JSJoda"] = factory();
	else
		root["JSJoda"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ResolverStyle = exports.DateTimeFormatterBuilder = exports.DateTimeFormatter = exports.TemporalQueries = exports.TemporalAdjusters = exports.IsoFields = exports.ChronoUnit = exports.ChronoField = exports.nativeJs = exports.convert = exports.ZoneId = exports.ZoneOffset = exports.ZonedDateTime = exports.YearMonth = exports.Year = exports.Period = exports.MonthDay = exports.Month = exports.LocalDateTime = exports.LocalTime = exports.LocalDate = exports.Instant = exports.Duration = exports.DayOfWeek = exports.DateTimeParseException = exports.DateTimeException = exports.Clock = undefined;

	var _Clock = __webpack_require__(1);

	Object.defineProperty(exports, 'Clock', {
	  enumerable: true,
	  get: function get() {
	    return _Clock.Clock;
	  }
	});

	var _errors = __webpack_require__(3);

	Object.defineProperty(exports, 'DateTimeException', {
	  enumerable: true,
	  get: function get() {
	    return _errors.DateTimeException;
	  }
	});
	Object.defineProperty(exports, 'DateTimeParseException', {
	  enumerable: true,
	  get: function get() {
	    return _errors.DateTimeParseException;
	  }
	});

	var _DayOfWeek = __webpack_require__(45);

	Object.defineProperty(exports, 'DayOfWeek', {
	  enumerable: true,
	  get: function get() {
	    return _DayOfWeek.DayOfWeek;
	  }
	});

	var _Duration = __webpack_require__(14);

	Object.defineProperty(exports, 'Duration', {
	  enumerable: true,
	  get: function get() {
	    return _Duration.Duration;
	  }
	});

	var _Instant = __webpack_require__(4);

	Object.defineProperty(exports, 'Instant', {
	  enumerable: true,
	  get: function get() {
	    return _Instant.Instant;
	  }
	});

	var _LocalDate = __webpack_require__(8);

	Object.defineProperty(exports, 'LocalDate', {
	  enumerable: true,
	  get: function get() {
	    return _LocalDate.LocalDate;
	  }
	});

	var _LocalTime = __webpack_require__(5);

	Object.defineProperty(exports, 'LocalTime', {
	  enumerable: true,
	  get: function get() {
	    return _LocalTime.LocalTime;
	  }
	});

	var _LocalDateTime = __webpack_require__(7);

	Object.defineProperty(exports, 'LocalDateTime', {
	  enumerable: true,
	  get: function get() {
	    return _LocalDateTime.LocalDateTime;
	  }
	});

	var _Month = __webpack_require__(11);

	Object.defineProperty(exports, 'Month', {
	  enumerable: true,
	  get: function get() {
	    return _Month.Month;
	  }
	});

	var _MonthDay = __webpack_require__(49);

	Object.defineProperty(exports, 'MonthDay', {
	  enumerable: true,
	  get: function get() {
	    return _MonthDay.MonthDay;
	  }
	});

	var _Period = __webpack_require__(32);

	Object.defineProperty(exports, 'Period', {
	  enumerable: true,
	  get: function get() {
	    return _Period.Period;
	  }
	});

	var _Year = __webpack_require__(48);

	Object.defineProperty(exports, 'Year', {
	  enumerable: true,
	  get: function get() {
	    return _Year.Year;
	  }
	});

	var _YearMonth = __webpack_require__(50);

	Object.defineProperty(exports, 'YearMonth', {
	  enumerable: true,
	  get: function get() {
	    return _YearMonth.YearMonth;
	  }
	});

	var _ZonedDateTime = __webpack_require__(51);

	Object.defineProperty(exports, 'ZonedDateTime', {
	  enumerable: true,
	  get: function get() {
	    return _ZonedDateTime.ZonedDateTime;
	  }
	});

	var _ZoneOffset = __webpack_require__(23);

	Object.defineProperty(exports, 'ZoneOffset', {
	  enumerable: true,
	  get: function get() {
	    return _ZoneOffset.ZoneOffset;
	  }
	});

	var _ZoneId = __webpack_require__(24);

	Object.defineProperty(exports, 'ZoneId', {
	  enumerable: true,
	  get: function get() {
	    return _ZoneId.ZoneId;
	  }
	});

	var _convert = __webpack_require__(54);

	Object.defineProperty(exports, 'convert', {
	  enumerable: true,
	  get: function get() {
	    return _convert.convert;
	  }
	});

	var _NativeJsTemporal = __webpack_require__(55);

	Object.defineProperty(exports, 'nativeJs', {
	  enumerable: true,
	  get: function get() {
	    return _NativeJsTemporal.nativeJs;
	  }
	});

	var _ChronoField = __webpack_require__(12);

	Object.defineProperty(exports, 'ChronoField', {
	  enumerable: true,
	  get: function get() {
	    return _ChronoField.ChronoField;
	  }
	});

	var _ChronoUnit = __webpack_require__(13);

	Object.defineProperty(exports, 'ChronoUnit', {
	  enumerable: true,
	  get: function get() {
	    return _ChronoUnit.ChronoUnit;
	  }
	});

	var _IsoFields = __webpack_require__(44);

	Object.defineProperty(exports, 'IsoFields', {
	  enumerable: true,
	  get: function get() {
	    return _IsoFields.IsoFields;
	  }
	});

	var _TemporalAdjusters = __webpack_require__(56);

	Object.defineProperty(exports, 'TemporalAdjusters', {
	  enumerable: true,
	  get: function get() {
	    return _TemporalAdjusters.TemporalAdjusters;
	  }
	});

	var _TemporalQueries = __webpack_require__(25);

	Object.defineProperty(exports, 'TemporalQueries', {
	  enumerable: true,
	  get: function get() {
	    return _TemporalQueries.TemporalQueries;
	  }
	});

	var _DateTimeFormatter = __webpack_require__(31);

	Object.defineProperty(exports, 'DateTimeFormatter', {
	  enumerable: true,
	  get: function get() {
	    return _DateTimeFormatter.DateTimeFormatter;
	  }
	});

	var _DateTimeFormatterBuilder = __webpack_require__(20);

	Object.defineProperty(exports, 'DateTimeFormatterBuilder', {
	  enumerable: true,
	  get: function get() {
	    return _DateTimeFormatterBuilder.DateTimeFormatterBuilder;
	  }
	});

	var _ResolverStyle = __webpack_require__(36);

	Object.defineProperty(exports, 'ResolverStyle', {
	  enumerable: true,
	  get: function get() {
	    return _ResolverStyle.ResolverStyle;
	  }
	});

	__webpack_require__(58);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Clock = undefined;

	var _assert = __webpack_require__(2);

	var _Instant = __webpack_require__(4);

	var _ZoneId = __webpack_require__(24);

	var _ZoneOffset = __webpack_require__(23);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var Clock = exports.Clock = function () {
	    function Clock() {
	        _classCallCheck(this, Clock);
	    }

	    Clock.systemUTC = function systemUTC() {
	        return new SystemClock(_ZoneOffset.ZoneOffset.UTC);
	    };

	    Clock.systemDefaultZone = function systemDefaultZone() {
	        return new SystemClock(_ZoneId.ZoneId.systemDefault());
	    };

	    Clock.system = function system(zone) {
	        return new SystemClock(zone);
	    };

	    Clock.fixed = function fixed(fixedInstant, zoneOffset) {
	        return new FixedClock(fixedInstant, zoneOffset);
	    };

	    Clock.prototype.millis = function millis() {
	        (0, _assert.abstractMethodFail)('Clock.millis');
	    };

	    Clock.prototype.instant = function instant() {
	        (0, _assert.abstractMethodFail)('Clock.instant');
	    };

	    Clock.prototype.zone = function zone() {
	        (0, _assert.abstractMethodFail)('Clock.zone');
	    };

	    return Clock;
	}();

	var SystemClock = function (_Clock) {
	    _inherits(SystemClock, _Clock);

	    function SystemClock(zone) {
	        _classCallCheck(this, SystemClock);

	        (0, _assert.requireNonNull)(zone, 'zone');

	        var _this = _possibleConstructorReturn(this, _Clock.call(this));

	        _this._zone = zone;
	        return _this;
	    }

	    SystemClock.prototype.zone = function zone() {
	        return this._zone;
	    };

	    SystemClock.prototype.millis = function millis() {
	        return new Date().getTime();
	    };

	    SystemClock.prototype.instant = function instant() {
	        return _Instant.Instant.ofEpochMilli(this.millis());
	    };

	    SystemClock.prototype.toString = function toString() {
	        return 'SystemClock[' + this._zone.toString() + ']';
	    };

	    return SystemClock;
	}(Clock);

	var FixedClock = function (_Clock2) {
	    _inherits(FixedClock, _Clock2);

	    function FixedClock(fixedInstant, zoneId) {
	        _classCallCheck(this, FixedClock);

	        var _this2 = _possibleConstructorReturn(this, _Clock2.call(this));

	        _this2._instant = fixedInstant;
	        _this2._zoneId = zoneId;
	        return _this2;
	    }

	    FixedClock.prototype.instant = function instant() {
	        return this._instant;
	    };

	    FixedClock.prototype.millis = function millis() {
	        return this._instant.toEpochMilli();
	    };

	    FixedClock.prototype.zone = function zone() {
	        return this._zoneId;
	    };

	    FixedClock.prototype.toString = function toString() {
	        return 'FixedClock[]';
	    };

	    return FixedClock;
	}(Clock);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.assert = assert;
	exports.requireNonNull = requireNonNull;
	exports.requireInstance = requireInstance;
	exports.abstractMethodFail = abstractMethodFail;

	var _errors = __webpack_require__(3);

	function assert(assertion, msg, error) {
	    if (!assertion) {
	        if (error) {
	            throw new error(msg);
	        } else {
	            throw new Error(msg);
	        }
	    }
	} /**
	   * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	   * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	   */


	function requireNonNull(value, parameterName) {
	    if (value == null) {
	        throw new _errors.NullPointerException(parameterName + ' must not be null');
	    }
	    return value;
	}

	function requireInstance(value, _class, parameterName) {
	    if (!(value instanceof _class)) {
	        throw new _errors.IllegalArgumentException(parameterName + ' must be an instance of ' + (_class.name ? _class.name : _class) + (value && value.constructor && value.constructor.name ? ', but is ' + value.constructor.name : ''));
	    }
	    return value;
	}

	function abstractMethodFail(methodName) {
	    throw new TypeError('abstract mehod "' + methodName + '" is not implemented');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	function createErrorType(name, init) {
	    var superErrorClass = arguments.length <= 2 || arguments[2] === undefined ? Error : arguments[2];

	    function E(message) {
	        if (!Error.captureStackTrace) {
	            this.stack = new Error().stack;
	        } else {
	            Error.captureStackTrace(this, this.constructor);
	        }
	        this.message = message;
	        init && init.apply(this, arguments);
	    }
	    E.prototype = new superErrorClass();
	    E.prototype.name = name;
	    E.prototype.constructor = E;
	    return E;
	}

	var DateTimeException = exports.DateTimeException = createErrorType('DateTimeException', messageWithCause);
	var DateTimeParseException = exports.DateTimeParseException = createErrorType('DateTimeParseException', messageForDateTimeParseException);
	var UnsupportedTemporalTypeException = exports.UnsupportedTemporalTypeException = createErrorType('UnsupportedTemporalTypeException', null, DateTimeException);
	var ArithmeticException = exports.ArithmeticException = createErrorType('ArithmeticException');
	var IllegalArgumentException = exports.IllegalArgumentException = createErrorType('IllegalArgumentException');
	var IllegalStateException = exports.IllegalStateException = createErrorType('IllegalStateException');
	var NullPointerException = exports.NullPointerException = createErrorType('NullPointerException');

	function messageWithCause(message) {
	    var cause = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    var msg = message || this.name;
	    if (cause !== null && cause instanceof Error) {
	        msg += '\n-------\nCaused by: ' + cause.stack + '\n-------\n';
	    }
	    this.message = msg;
	}

	function messageForDateTimeParseException(message) {
	    var text = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	    var index = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	    var cause = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	    var msg = message || this.name;
	    msg += ': ' + text + ', at index: ' + index;
	    if (cause !== null && cause instanceof Error) {
	        msg += '\n-------\nCaused by: ' + cause.stack + '\n-------\n';
	    }
	    this.message = msg;
	    this.parsedString = function () {
	        return text;
	    };
	    this.errorIndex = function () {
	        return index;
	    };
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Instant = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _Clock = __webpack_require__(1);

	var _LocalTime = __webpack_require__(5);

	var _MathUtil = __webpack_require__(6);

	var _Temporal2 = __webpack_require__(37);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalQueries = __webpack_require__(25);

	var _TemporalQuery = __webpack_require__(43);

	var _DateTimeFormatter = __webpack_require__(31);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var NANOS_PER_MILLI = 1000000;

	var Instant = function (_Temporal) {
	    _inherits(Instant, _Temporal);

	    Instant.now = function now() {
	        var clock = arguments.length <= 0 || arguments[0] === undefined ? _Clock.Clock.systemUTC() : arguments[0];

	        return clock.instant();
	    };

	    Instant.ofEpochSecond = function ofEpochSecond(epochSecond) {
	        var nanoAdjustment = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	        var secs = epochSecond + _MathUtil.MathUtil.floorDiv(nanoAdjustment, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        var nos = _MathUtil.MathUtil.floorMod(nanoAdjustment, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        return Instant._create(secs, nos);
	    };

	    Instant.ofEpochMilli = function ofEpochMilli(epochMilli) {
	        var secs = _MathUtil.MathUtil.floorDiv(epochMilli, 1000);
	        var mos = _MathUtil.MathUtil.floorMod(epochMilli, 1000);
	        return Instant._create(secs, mos * 1000000);
	    };

	    Instant.from = function from(temporal) {
	        try {
	            var instantSecs = temporal.getLong(_ChronoField.ChronoField.INSTANT_SECONDS);
	            var nanoOfSecond = temporal.get(_ChronoField.ChronoField.NANO_OF_SECOND);
	            return Instant.ofEpochSecond(instantSecs, nanoOfSecond);
	        } catch (ex) {
	            throw new _errors.DateTimeException('Unable to obtain Instant from TemporalAccessor: ' + temporal + ', type ' + (typeof temporal === 'undefined' ? 'undefined' : _typeof(temporal)), ex);
	        }
	    };

	    Instant.parse = function parse(text) {
	        return _DateTimeFormatter.DateTimeFormatter.ISO_INSTANT.parse(text, Instant.FROM);
	    };

	    Instant._create = function _create(seconds, nanoOfSecond) {
	        if (seconds === 0 && nanoOfSecond === 0) {
	            return Instant.EPOCH;
	        }
	        return new Instant(seconds, nanoOfSecond);
	    };

	    Instant._validate = function _validate(seconds, nanoOfSecond) {
	        if (seconds < Instant.MIN_SECONDS || seconds > Instant.MAX_SECONDS) {
	            throw new _errors.DateTimeException('Instant exceeds minimum or maximum instant');
	        }
	        if (nanoOfSecond < 0 || nanoOfSecond > _LocalTime.LocalTime.NANOS_PER_SECOND) {
	            throw new _errors.DateTimeException('Instant exceeds minimum or maximum instant');
	        }
	    };

	    function Instant(seconds, nanoOfSecond) {
	        _classCallCheck(this, Instant);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        Instant._validate(seconds, nanoOfSecond);
	        _this._seconds = seconds;
	        _this._nanos = nanoOfSecond;
	        return _this;
	    }

	    Instant.prototype.isSupported = function isSupported(fieldOrUnit) {
	        if (fieldOrUnit instanceof _ChronoField.ChronoField) {
	            return fieldOrUnit === _ChronoField.ChronoField.INSTANT_SECONDS || fieldOrUnit === _ChronoField.ChronoField.NANO_OF_SECOND || fieldOrUnit === _ChronoField.ChronoField.MICRO_OF_SECOND || fieldOrUnit === _ChronoField.ChronoField.MILLI_OF_SECOND;
	        }
	        if (fieldOrUnit instanceof _ChronoUnit.ChronoUnit) {
	            return fieldOrUnit.isTimeBased() || fieldOrUnit === _ChronoUnit.ChronoUnit.DAYS;
	        }
	        return fieldOrUnit != null && fieldOrUnit.isSupportedBy(this);
	    };

	    Instant.prototype.range = function range(field) {
	        return _Temporal.prototype.range.call(this, field);
	    };

	    Instant.prototype.get = function get(field) {
	        return this.getLong(field);
	    };

	    Instant.prototype.getLong = function getLong(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.NANO_OF_SECOND:
	                    return this._nanos;
	                case _ChronoField.ChronoField.MICRO_OF_SECOND:
	                    return _MathUtil.MathUtil.intDiv(this._nanos, 1000);
	                case _ChronoField.ChronoField.MILLI_OF_SECOND:
	                    return _MathUtil.MathUtil.intDiv(this._nanos, NANOS_PER_MILLI);
	                case _ChronoField.ChronoField.INSTANT_SECONDS:
	                    return this._seconds;
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    Instant.prototype.epochSecond = function epochSecond() {
	        return this._seconds;
	    };

	    Instant.prototype.nano = function nano() {
	        return this._nanos;
	    };

	    Instant.prototype.with = function _with(adjusterOrField, newValue) {
	        if (arguments.length === 1) {
	            return this.withTemporalAdjuster(adjusterOrField);
	        } else {
	            return this.with2(adjusterOrField, newValue);
	        }
	    };

	    Instant.prototype.withTemporalAdjuster = function withTemporalAdjuster(adjuster) {
	        (0, _assert.requireNonNull)(adjuster, 'adjuster');
	        return adjuster.adjustInto(this);
	    };

	    Instant.prototype.with2 = function with2(field, newValue) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            field.checkValidValue(newValue);
	            switch (field) {
	                case _ChronoField.ChronoField.MILLI_OF_SECOND:
	                    {
	                        var nval = newValue * NANOS_PER_MILLI;
	                        return nval !== this._nanos ? Instant._create(this._seconds, nval) : this;
	                    }
	                case _ChronoField.ChronoField.MICRO_OF_SECOND:
	                    {
	                        var _nval = newValue * 1000;
	                        return _nval !== this._nanos ? Instant._create(this._seconds, _nval) : this;
	                    }
	                case _ChronoField.ChronoField.NANO_OF_SECOND:
	                    return newValue !== this._nanos ? Instant._create(this._seconds, newValue) : this;
	                case _ChronoField.ChronoField.INSTANT_SECONDS:
	                    return newValue !== this._seconds ? Instant._create(newValue, this._nanos) : this;
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.adjustInto(this, newValue);
	    };

	    Instant.prototype.truncatedTo = function truncatedTo(unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        if (unit === _ChronoUnit.ChronoUnit.NANOS) {
	            return this;
	        }
	        var unitDur = unit.duration();
	        if (unitDur.seconds() > _LocalTime.LocalTime.SECONDS_PER_DAY) {
	            throw new _errors.DateTimeException('Unit is too large to be used for truncation');
	        }
	        var dur = unitDur.toNanos();
	        if (_MathUtil.MathUtil.intMod(_LocalTime.LocalTime.NANOS_PER_DAY, dur) !== 0) {
	            throw new _errors.DateTimeException('Unit must divide into a standard day without remainder');
	        }
	        var nod = _MathUtil.MathUtil.intMod(this._seconds, _LocalTime.LocalTime.SECONDS_PER_DAY) * _LocalTime.LocalTime.NANOS_PER_SECOND + this._nanos;
	        var result = _MathUtil.MathUtil.intDiv(nod, dur) * dur;
	        return this.plusNanos(result - nod);
	    };

	    Instant.prototype.plus = function plus(amount, unit) {
	        if (arguments.length === 1) {
	            return this.plus1(amount);
	        } else {
	            return this.plus2(amount, unit);
	        }
	    };

	    Instant.prototype.plus1 = function plus1(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.addTo(this);
	    };

	    Instant.prototype.plus2 = function plus2(amountToAdd, unit) {
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.NANOS:
	                    return this.plusNanos(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MICROS:
	                    return this._plus(_MathUtil.MathUtil.intDiv(amountToAdd, 1000000), _MathUtil.MathUtil.intMod(amountToAdd, 1000000) * 1000);
	                case _ChronoUnit.ChronoUnit.MILLIS:
	                    return this.plusMillis(amountToAdd);
	                case _ChronoUnit.ChronoUnit.SECONDS:
	                    return this.plusSeconds(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MINUTES:
	                    return this.plusSeconds(_MathUtil.MathUtil.safeMultiply(amountToAdd, _LocalTime.LocalTime.SECONDS_PER_MINUTE));
	                case _ChronoUnit.ChronoUnit.HOURS:
	                    return this.plusSeconds(_MathUtil.MathUtil.safeMultiply(amountToAdd, _LocalTime.LocalTime.SECONDS_PER_HOUR));
	                case _ChronoUnit.ChronoUnit.HALF_DAYS:
	                    return this.plusSeconds(_MathUtil.MathUtil.safeMultiply(amountToAdd, _LocalTime.LocalTime.SECONDS_PER_DAY / 2));
	                case _ChronoUnit.ChronoUnit.DAYS:
	                    return this.plusSeconds(_MathUtil.MathUtil.safeMultiply(amountToAdd, _LocalTime.LocalTime.SECONDS_PER_DAY));
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.addTo(this, amountToAdd);
	    };

	    Instant.prototype.plusSeconds = function plusSeconds(secondsToAdd) {
	        return this._plus(secondsToAdd, 0);
	    };

	    Instant.prototype.plusMillis = function plusMillis(millisToAdd) {
	        return this._plus(_MathUtil.MathUtil.intDiv(millisToAdd, 1000), _MathUtil.MathUtil.intMod(millisToAdd, 1000) * NANOS_PER_MILLI);
	    };

	    Instant.prototype.plusNanos = function plusNanos(nanosToAdd) {
	        return this._plus(0, nanosToAdd);
	    };

	    Instant.prototype._plus = function _plus(secondsToAdd, nanosToAdd) {
	        if ((secondsToAdd | nanosToAdd) === 0) {
	            return this;
	        }
	        var epochSec = this._seconds + secondsToAdd;
	        epochSec = epochSec + _MathUtil.MathUtil.intDiv(nanosToAdd, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        var _nanosToAdd = nanosToAdd % _LocalTime.LocalTime.NANOS_PER_SECOND;
	        var nanoAdjustment = this._nanos + _nanosToAdd;
	        return Instant.ofEpochSecond(epochSec, nanoAdjustment);
	    };

	    Instant.prototype.minus = function minus(amount, unit) {
	        if (arguments.length === 1) {
	            return this.minus1(amount);
	        } else {
	            return this.minus2(amount, unit);
	        }
	    };

	    Instant.prototype.minus1 = function minus1(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.subtractFrom(this);
	    };

	    Instant.prototype.minus2 = function minus2(amountToSubtract, unit) {
	        return this.plus2(-1 * amountToSubtract, unit);
	    };

	    Instant.prototype.minusSeconds = function minusSeconds(secondsToSubtract) {
	        return this.plusSeconds(secondsToSubtract * -1);
	    };

	    Instant.prototype.minusMillis = function minusMillis(millisToSubtract) {
	        return this.plusMillis(-1 * millisToSubtract);
	    };

	    Instant.prototype.minusNanos = function minusNanos(nanosToSubtract) {
	        return this.plusNanos(-1 * nanosToSubtract);
	    };

	    Instant.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.NANOS;
	        }

	        if (_query === _TemporalQueries.TemporalQueries.localDate() || _query === _TemporalQueries.TemporalQueries.localTime() || _query === _TemporalQueries.TemporalQueries.chronology() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return null;
	        }
	        return _query.queryFrom(this);
	    };

	    Instant.prototype.adjustInto = function adjustInto(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        return temporal.with(_ChronoField.ChronoField.INSTANT_SECONDS, this._seconds).with(_ChronoField.ChronoField.NANO_OF_SECOND, this._nanos);
	    };

	    Instant.prototype.until = function until(endExclusive, unit) {
	        var end = Instant.from(endExclusive);
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.NANOS:
	                    return this._nanosUntil(end);
	                case _ChronoUnit.ChronoUnit.MICROS:
	                    return _MathUtil.MathUtil.intDiv(this._nanosUntil(end), 1000);
	                case _ChronoUnit.ChronoUnit.MILLIS:
	                    return _MathUtil.MathUtil.safeSubtract(end.toEpochMilli(), this.toEpochMilli());
	                case _ChronoUnit.ChronoUnit.SECONDS:
	                    return this._secondsUntil(end);
	                case _ChronoUnit.ChronoUnit.MINUTES:
	                    return _MathUtil.MathUtil.intDiv(this._secondsUntil(end), _LocalTime.LocalTime.SECONDS_PER_MINUTE);
	                case _ChronoUnit.ChronoUnit.HOURS:
	                    return _MathUtil.MathUtil.intDiv(this._secondsUntil(end), _LocalTime.LocalTime.SECONDS_PER_HOUR);
	                case _ChronoUnit.ChronoUnit.HALF_DAYS:
	                    return _MathUtil.MathUtil.intDiv(this._secondsUntil(end), 12 * _LocalTime.LocalTime.SECONDS_PER_HOUR);
	                case _ChronoUnit.ChronoUnit.DAYS:
	                    return _MathUtil.MathUtil.intDiv(this._secondsUntil(end), _LocalTime.LocalTime.SECONDS_PER_DAY);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.between(this, end);
	    };

	    Instant.prototype._nanosUntil = function _nanosUntil(end) {
	        var secsDiff = _MathUtil.MathUtil.safeSubtract(end.epochSecond(), this.epochSecond());
	        var totalNanos = _MathUtil.MathUtil.safeMultiply(secsDiff, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        return _MathUtil.MathUtil.safeAdd(totalNanos, end.nano() - this.nano());
	    };

	    Instant.prototype._secondsUntil = function _secondsUntil(end) {
	        var secsDiff = _MathUtil.MathUtil.safeSubtract(end.epochSecond(), this.epochSecond());
	        var nanosDiff = end.nano() - this.nano();
	        if (secsDiff > 0 && nanosDiff < 0) {
	            secsDiff--;
	        } else if (secsDiff < 0 && nanosDiff > 0) {
	            secsDiff++;
	        }
	        return secsDiff;
	    };

	    Instant.prototype.toEpochMilli = function toEpochMilli() {
	        var millis = _MathUtil.MathUtil.safeMultiply(this._seconds, 1000);
	        return millis + _MathUtil.MathUtil.intDiv(this._nanos, NANOS_PER_MILLI);
	    };

	    Instant.prototype.compareTo = function compareTo(otherInstant) {
	        (0, _assert.requireNonNull)(otherInstant, 'otherInstant');
	        (0, _assert.requireInstance)(otherInstant, Instant, 'otherInstant');
	        var cmp = _MathUtil.MathUtil.compareNumbers(this._seconds, otherInstant._seconds);
	        if (cmp !== 0) {
	            return cmp;
	        }
	        return this._nanos - otherInstant._nanos;
	    };

	    Instant.prototype.isAfter = function isAfter(otherInstant) {
	        return this.compareTo(otherInstant) > 0;
	    };

	    Instant.prototype.isBefore = function isBefore(otherInstant) {
	        return this.compareTo(otherInstant) < 0;
	    };

	    Instant.prototype.equals = function equals(otherInstant) {
	        if (this === otherInstant) {
	            return true;
	        }
	        if (otherInstant instanceof Instant) {
	            return this.epochSecond() === otherInstant.epochSecond() && this.nano() === otherInstant.nano();
	        }
	        return false;
	    };

	    Instant.prototype.hashCode = function hashCode() {
	        return (this._seconds ^ this._seconds >>> 24) + 51 * this._nanos;
	    };

	    Instant.prototype.toString = function toString() {
	        return _DateTimeFormatter.DateTimeFormatter.ISO_INSTANT.format(this);
	    };

	    return Instant;
	}(_Temporal2.Temporal);

	exports.Instant = Instant;
	function _init() {
	    Instant.MIN_SECONDS = -31619119219200;
	    Instant.MAX_SECONDS = 31494816403199;
	    Instant.EPOCH = new Instant(0, 0);
	    Instant.MIN = Instant.ofEpochSecond(Instant.MIN_SECONDS, 0);
	    Instant.MAX = Instant.ofEpochSecond(Instant.MAX_SECONDS, 999999999);
	    Instant.FROM = (0, _TemporalQuery.createTemporalQuery)('Instant.FROM', function (temporal) {
	        return Instant.from(temporal);
	    });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.LocalTime = undefined;
	exports._init = _init;

	var _MathUtil = __webpack_require__(6);

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _Clock = __webpack_require__(1);

	var _LocalDateTime = __webpack_require__(7);

	var _ZoneId = __webpack_require__(24);

	var _DateTimeFormatter = __webpack_require__(31);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _Temporal2 = __webpack_require__(37);

	var _TemporalQueries = __webpack_require__(25);

	var _TemporalQuery = __webpack_require__(43);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var LocalTime = function (_Temporal) {
	    _inherits(LocalTime, _Temporal);

	    LocalTime.now = function now(clockOrZone) {
	        if (clockOrZone == null) {
	            return LocalTime._now(_Clock.Clock.systemDefaultZone());
	        } else if (clockOrZone instanceof _Clock.Clock) {
	            return LocalTime._now(clockOrZone);
	        } else {
	            return LocalTime._now(_Clock.Clock.system(clockOrZone));
	        }
	    };

	    LocalTime._now = function _now() {
	        var clock = arguments.length <= 0 || arguments[0] === undefined ? _Clock.Clock.systemDefaultZone() : arguments[0];

	        (0, _assert.requireNonNull)(clock, 'clock');
	        return LocalTime.ofInstant(clock.instant(), clock.zone());
	    };

	    LocalTime.ofInstant = function ofInstant(instant) {
	        var zone = arguments.length <= 1 || arguments[1] === undefined ? _ZoneId.ZoneId.systemDefault() : arguments[1];

	        var offset = zone.rules().offset(instant);
	        var secsOfDay = _MathUtil.MathUtil.intMod(instant.epochSecond(), LocalTime.SECONDS_PER_DAY);
	        secsOfDay = _MathUtil.MathUtil.intMod(secsOfDay + offset.totalSeconds(), LocalTime.SECONDS_PER_DAY);
	        if (secsOfDay < 0) {
	            secsOfDay += LocalTime.SECONDS_PER_DAY;
	        }
	        return LocalTime.ofSecondOfDay(secsOfDay, instant.nano());
	    };

	    LocalTime.of = function of(hour, minute, second, nanoOfSecond) {
	        return new LocalTime(hour, minute, second, nanoOfSecond);
	    };

	    LocalTime.ofSecondOfDay = function ofSecondOfDay() {
	        var secondOfDay = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var nanoOfSecond = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	        _ChronoField.ChronoField.SECOND_OF_DAY.checkValidValue(secondOfDay);
	        _ChronoField.ChronoField.NANO_OF_SECOND.checkValidValue(nanoOfSecond);
	        var hours = _MathUtil.MathUtil.intDiv(secondOfDay, LocalTime.SECONDS_PER_HOUR);
	        secondOfDay -= hours * LocalTime.SECONDS_PER_HOUR;
	        var minutes = _MathUtil.MathUtil.intDiv(secondOfDay, LocalTime.SECONDS_PER_MINUTE);
	        secondOfDay -= minutes * LocalTime.SECONDS_PER_MINUTE;
	        return new LocalTime(hours, minutes, secondOfDay, nanoOfSecond);
	    };

	    LocalTime.ofNanoOfDay = function ofNanoOfDay() {
	        var nanoOfDay = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	        _ChronoField.ChronoField.NANO_OF_DAY.checkValidValue(nanoOfDay);
	        var hours = _MathUtil.MathUtil.intDiv(nanoOfDay, LocalTime.NANOS_PER_HOUR);
	        nanoOfDay -= hours * LocalTime.NANOS_PER_HOUR;
	        var minutes = _MathUtil.MathUtil.intDiv(nanoOfDay, LocalTime.NANOS_PER_MINUTE);
	        nanoOfDay -= minutes * LocalTime.NANOS_PER_MINUTE;
	        var seconds = _MathUtil.MathUtil.intDiv(nanoOfDay, LocalTime.NANOS_PER_SECOND);
	        nanoOfDay -= seconds * LocalTime.NANOS_PER_SECOND;
	        return new LocalTime(hours, minutes, seconds, nanoOfDay);
	    };

	    LocalTime.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        var time = temporal.query(_TemporalQueries.TemporalQueries.localTime());
	        if (time == null) {
	            throw new _errors.DateTimeException('Unable to obtain LocalTime TemporalAccessor: ' + temporal + ', type ' + (temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	        return time;
	    };

	    LocalTime.parse = function parse(text) {
	        var formatter = arguments.length <= 1 || arguments[1] === undefined ? _DateTimeFormatter.DateTimeFormatter.ISO_LOCAL_TIME : arguments[1];

	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.parse(text, LocalTime.FROM);
	    };

	    function LocalTime() {
	        var hour = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var minute = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var second = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	        var nanoOfSecond = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

	        _classCallCheck(this, LocalTime);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        LocalTime._validate(hour, minute, second, nanoOfSecond);
	        if ((minute | second | nanoOfSecond) === 0) {
	            var _ret;

	            return _ret = LocalTime.HOURS[hour], _possibleConstructorReturn(_this, _ret);
	        }
	        _this._hour = hour;
	        _this._minute = minute;
	        _this._second = second;
	        _this._nano = nanoOfSecond;
	        return _this;
	    }

	    LocalTime._validate = function _validate(hour, minute, second, nanoOfSecond) {
	        _ChronoField.ChronoField.HOUR_OF_DAY.checkValidValue(hour);
	        _ChronoField.ChronoField.MINUTE_OF_HOUR.checkValidValue(minute);
	        _ChronoField.ChronoField.SECOND_OF_MINUTE.checkValidValue(second);
	        _ChronoField.ChronoField.NANO_OF_SECOND.checkValidValue(nanoOfSecond);
	    };

	    LocalTime.prototype.isSupported = function isSupported(fieldOrUnit) {
	        if (fieldOrUnit instanceof _ChronoField.ChronoField) {
	            return fieldOrUnit.isTimeBased();
	        } else if (fieldOrUnit instanceof _ChronoUnit.ChronoUnit) {
	            return fieldOrUnit.isTimeBased();
	        }
	        return fieldOrUnit != null && fieldOrUnit.isSupportedBy(this);
	    };

	    LocalTime.prototype.range = function range(field) {
	        (0, _assert.requireNonNull)(field);
	        return _Temporal.prototype.range.call(this, field);
	    };

	    LocalTime.prototype.get = function get(field) {
	        return this.getLong(field);
	    };

	    LocalTime.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            return this._get0(field);
	        }
	        return field.getFrom(this);
	    };

	    LocalTime.prototype._get0 = function _get0(field) {
	        switch (field) {
	            case _ChronoField.ChronoField.NANO_OF_SECOND:
	                return this._nano;
	            case _ChronoField.ChronoField.NANO_OF_DAY:
	                return this.toNanoOfDay();
	            case _ChronoField.ChronoField.MICRO_OF_SECOND:
	                return _MathUtil.MathUtil.intDiv(this._nano, 1000);
	            case _ChronoField.ChronoField.MICRO_OF_DAY:
	                return _MathUtil.MathUtil.intDiv(this.toNanoOfDay(), 1000);
	            case _ChronoField.ChronoField.MILLI_OF_SECOND:
	                return _MathUtil.MathUtil.intDiv(this._nano, 1000000);
	            case _ChronoField.ChronoField.MILLI_OF_DAY:
	                return _MathUtil.MathUtil.intDiv(this.toNanoOfDay(), 1000000);
	            case _ChronoField.ChronoField.SECOND_OF_MINUTE:
	                return this._second;
	            case _ChronoField.ChronoField.SECOND_OF_DAY:
	                return this.toSecondOfDay();
	            case _ChronoField.ChronoField.MINUTE_OF_HOUR:
	                return this._minute;
	            case _ChronoField.ChronoField.MINUTE_OF_DAY:
	                return this._hour * 60 + this._minute;
	            case _ChronoField.ChronoField.HOUR_OF_AMPM:
	                return _MathUtil.MathUtil.intMod(this._hour, 12);
	            case _ChronoField.ChronoField.CLOCK_HOUR_OF_AMPM:
	                var ham = _MathUtil.MathUtil.intMod(this._hour, 12);return ham % 12 === 0 ? 12 : ham;
	            case _ChronoField.ChronoField.HOUR_OF_DAY:
	                return this._hour;
	            case _ChronoField.ChronoField.CLOCK_HOUR_OF_DAY:
	                return this._hour === 0 ? 24 : this._hour;
	            case _ChronoField.ChronoField.AMPM_OF_DAY:
	                return _MathUtil.MathUtil.intDiv(this._hour, 12);
	        }
	        throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	    };

	    LocalTime.prototype.hour = function hour() {
	        return this._hour;
	    };

	    LocalTime.prototype.minute = function minute() {
	        return this._minute;
	    };

	    LocalTime.prototype.second = function second() {
	        return this._second;
	    };

	    LocalTime.prototype.nano = function nano() {
	        return this._nano;
	    };

	    LocalTime.prototype.with = function _with(adjusterOrField, newValue) {
	        if (arguments.length < 2) {
	            return this.withTemporalAdjuster(adjusterOrField);
	        } else {
	            return this.with2(adjusterOrField, newValue);
	        }
	    };

	    LocalTime.prototype.withTemporalAdjuster = function withTemporalAdjuster(adjuster) {
	        (0, _assert.requireNonNull)(adjuster, 'adjuster');

	        if (adjuster instanceof LocalTime) {
	            return adjuster;
	        }
	        (0, _assert.assert)(typeof adjuster.adjustInto === 'function', 'adjuster', _errors.IllegalArgumentException);
	        return adjuster.adjustInto(this);
	    };

	    LocalTime.prototype.with2 = function with2(field, newValue) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            field.checkValidValue(newValue);
	            switch (field) {
	                case _ChronoField.ChronoField.NANO_OF_SECOND:
	                    return this.withNano(newValue);
	                case _ChronoField.ChronoField.NANO_OF_DAY:
	                    return LocalTime.ofNanoOfDay(newValue);
	                case _ChronoField.ChronoField.MICRO_OF_SECOND:
	                    return this.withNano(newValue * 1000);
	                case _ChronoField.ChronoField.MICRO_OF_DAY:
	                    return LocalTime.ofNanoOfDay(newValue * 1000);
	                case _ChronoField.ChronoField.MILLI_OF_SECOND:
	                    return this.withNano(newValue * 1000000);
	                case _ChronoField.ChronoField.MILLI_OF_DAY:
	                    return LocalTime.ofNanoOfDay(newValue * 1000000);
	                case _ChronoField.ChronoField.SECOND_OF_MINUTE:
	                    return this.withSecond(newValue);
	                case _ChronoField.ChronoField.SECOND_OF_DAY:
	                    return this.plusSeconds(newValue - this.toSecondOfDay());
	                case _ChronoField.ChronoField.MINUTE_OF_HOUR:
	                    return this.withMinute(newValue);
	                case _ChronoField.ChronoField.MINUTE_OF_DAY:
	                    return this.plusMinutes(newValue - (this._hour * 60 + this._minute));
	                case _ChronoField.ChronoField.HOUR_OF_AMPM:
	                    return this.plusHours(newValue - _MathUtil.MathUtil.intMod(this._hour, 12));
	                case _ChronoField.ChronoField.CLOCK_HOUR_OF_AMPM:
	                    return this.plusHours((newValue === 12 ? 0 : newValue) - _MathUtil.MathUtil.intMod(this._hour, 12));
	                case _ChronoField.ChronoField.HOUR_OF_DAY:
	                    return this.withHour(newValue);
	                case _ChronoField.ChronoField.CLOCK_HOUR_OF_DAY:
	                    return this.withHour(newValue === 24 ? 0 : newValue);
	                case _ChronoField.ChronoField.AMPM_OF_DAY:
	                    return this.plusHours((newValue - _MathUtil.MathUtil.intDiv(this._hour, 12)) * 12);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.adjustInto(this, newValue);
	    };

	    LocalTime.prototype.withHour = function withHour() {
	        var hour = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	        if (this._hour === hour) {
	            return this;
	        }
	        return new LocalTime(hour, this._minute, this._second, this._nano);
	    };

	    LocalTime.prototype.withMinute = function withMinute() {
	        var minute = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	        if (this._minute === minute) {
	            return this;
	        }
	        return new LocalTime(this._hour, minute, this._second, this._nano);
	    };

	    LocalTime.prototype.withSecond = function withSecond() {
	        var second = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	        if (this._second === second) {
	            return this;
	        }
	        return new LocalTime(this._hour, this._minute, second, this._nano);
	    };

	    LocalTime.prototype.withNano = function withNano() {
	        var nanoOfSecond = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	        if (this._nano === nanoOfSecond) {
	            return this;
	        }
	        return new LocalTime(this._hour, this._minute, this._second, nanoOfSecond);
	    };

	    LocalTime.prototype.truncatedTo = function truncatedTo(unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        if (unit === _ChronoUnit.ChronoUnit.NANOS) {
	            return this;
	        }
	        var unitDur = unit.duration();
	        if (unitDur.seconds() > LocalTime.SECONDS_PER_DAY) {
	            throw new _errors.DateTimeException('Unit is too large to be used for truncation');
	        }
	        var dur = unitDur.toNanos();
	        if (_MathUtil.MathUtil.intMod(LocalTime.NANOS_PER_DAY, dur) !== 0) {
	            throw new _errors.DateTimeException('Unit must divide into a standard day without remainder');
	        }
	        var nod = this.toNanoOfDay();
	        return LocalTime.ofNanoOfDay(_MathUtil.MathUtil.intDiv(nod, dur) * dur);
	    };

	    LocalTime.prototype.plus = function plus(amount, unit) {
	        if (arguments.length < 2) {
	            return this.plus1(amount);
	        } else {
	            return this.plus2(amount, unit);
	        }
	    };

	    LocalTime.prototype.plus1 = function plus1(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.addTo(this);
	    };

	    LocalTime.prototype.plus2 = function plus2(amountToAdd, unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.NANOS:
	                    return this.plusNanos(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MICROS:
	                    return this.plusNanos(_MathUtil.MathUtil.intMod(amountToAdd, LocalTime.MICROS_PER_DAY) * 1000);
	                case _ChronoUnit.ChronoUnit.MILLIS:
	                    return this.plusNanos(_MathUtil.MathUtil.intMod(amountToAdd, LocalTime.MILLIS_PER_DAY) * 1000000);
	                case _ChronoUnit.ChronoUnit.SECONDS:
	                    return this.plusSeconds(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MINUTES:
	                    return this.plusMinutes(amountToAdd);
	                case _ChronoUnit.ChronoUnit.HOURS:
	                    return this.plusHours(amountToAdd);
	                case _ChronoUnit.ChronoUnit.HALF_DAYS:
	                    return this.plusHours(_MathUtil.MathUtil.intMod(amountToAdd, 2) * 12);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.addTo(this, amountToAdd);
	    };

	    LocalTime.prototype.plusHours = function plusHours(hoursToAdd) {
	        if (hoursToAdd === 0) {
	            return this;
	        }

	        var newHour = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intMod(hoursToAdd, LocalTime.HOURS_PER_DAY) + this._hour + LocalTime.HOURS_PER_DAY, LocalTime.HOURS_PER_DAY);
	        return new LocalTime(newHour, this._minute, this._second, this._nano);
	    };

	    LocalTime.prototype.plusMinutes = function plusMinutes(minutesToAdd) {
	        if (minutesToAdd === 0) {
	            return this;
	        }
	        var mofd = this._hour * LocalTime.MINUTES_PER_HOUR + this._minute;
	        var newMofd = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intMod(minutesToAdd, LocalTime.MINUTES_PER_DAY) + mofd + LocalTime.MINUTES_PER_DAY, LocalTime.MINUTES_PER_DAY);
	        if (mofd === newMofd) {
	            return this;
	        }
	        var newHour = _MathUtil.MathUtil.intDiv(newMofd, LocalTime.MINUTES_PER_HOUR);
	        var newMinute = _MathUtil.MathUtil.intMod(newMofd, LocalTime.MINUTES_PER_HOUR);
	        return new LocalTime(newHour, newMinute, this._second, this._nano);
	    };

	    LocalTime.prototype.plusSeconds = function plusSeconds(secondstoAdd) {
	        if (secondstoAdd === 0) {
	            return this;
	        }
	        var sofd = this._hour * LocalTime.SECONDS_PER_HOUR + this._minute * LocalTime.SECONDS_PER_MINUTE + this._second;
	        var newSofd = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intMod(secondstoAdd, LocalTime.SECONDS_PER_DAY) + sofd + LocalTime.SECONDS_PER_DAY, LocalTime.SECONDS_PER_DAY);
	        if (sofd === newSofd) {
	            return this;
	        }
	        var newHour = _MathUtil.MathUtil.intDiv(newSofd, LocalTime.SECONDS_PER_HOUR);
	        var newMinute = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(newSofd, LocalTime.SECONDS_PER_MINUTE), LocalTime.MINUTES_PER_HOUR);
	        var newSecond = _MathUtil.MathUtil.intMod(newSofd, LocalTime.SECONDS_PER_MINUTE);
	        return new LocalTime(newHour, newMinute, newSecond, this._nano);
	    };

	    LocalTime.prototype.plusNanos = function plusNanos(nanosToAdd) {
	        if (nanosToAdd === 0) {
	            return this;
	        }
	        var nofd = this.toNanoOfDay();
	        var newNofd = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intMod(nanosToAdd, LocalTime.NANOS_PER_DAY) + nofd + LocalTime.NANOS_PER_DAY, LocalTime.NANOS_PER_DAY);
	        if (nofd === newNofd) {
	            return this;
	        }
	        var newHour = _MathUtil.MathUtil.intDiv(newNofd, LocalTime.NANOS_PER_HOUR);
	        var newMinute = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(newNofd, LocalTime.NANOS_PER_MINUTE), LocalTime.MINUTES_PER_HOUR);
	        var newSecond = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(newNofd, LocalTime.NANOS_PER_SECOND), LocalTime.SECONDS_PER_MINUTE);
	        var newNano = _MathUtil.MathUtil.intMod(newNofd, LocalTime.NANOS_PER_SECOND);
	        return new LocalTime(newHour, newMinute, newSecond, newNano);
	    };

	    LocalTime.prototype.minus = function minus(amount, unit) {
	        if (arguments.length < 2) {
	            return this.minus1(amount);
	        } else {
	            return this.minus2(amount, unit);
	        }
	    };

	    LocalTime.prototype.minus1 = function minus1(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.subtractFrom(this);
	    };

	    LocalTime.prototype.minus2 = function minus2(amountToSubtract, unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        return this.plus2(-1 * amountToSubtract, unit);
	    };

	    LocalTime.prototype.minusHours = function minusHours(hoursToSubtract) {
	        return this.plusHours(-1 * _MathUtil.MathUtil.intMod(hoursToSubtract, LocalTime.HOURS_PER_DAY));
	    };

	    LocalTime.prototype.minusMinutes = function minusMinutes(minutesToSubtract) {
	        return this.plusMinutes(-1 * _MathUtil.MathUtil.intMod(minutesToSubtract, LocalTime.MINUTES_PER_DAY));
	    };

	    LocalTime.prototype.minusSeconds = function minusSeconds(secondsToSubtract) {
	        return this.plusSeconds(-1 * _MathUtil.MathUtil.intMod(secondsToSubtract, LocalTime.SECONDS_PER_DAY));
	    };

	    LocalTime.prototype.minusNanos = function minusNanos(nanosToSubtract) {
	        return this.plusNanos(-1 * _MathUtil.MathUtil.intMod(nanosToSubtract, LocalTime.NANOS_PER_DAY));
	    };

	    LocalTime.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.NANOS;
	        } else if (_query === _TemporalQueries.TemporalQueries.localTime()) {
	            return this;
	        }

	        if (_query === _TemporalQueries.TemporalQueries.chronology() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.offset() || _query === _TemporalQueries.TemporalQueries.localDate()) {
	            return null;
	        }
	        return _query.queryFrom(this);
	    };

	    LocalTime.prototype.adjustInto = function adjustInto(temporal) {
	        return temporal.with(LocalTime.NANO_OF_DAY, this.toNanoOfDay());
	    };

	    LocalTime.prototype.until = function until(endExclusive, unit) {
	        var end = LocalTime.from(endExclusive);
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            var nanosUntil = end.toNanoOfDay() - this.toNanoOfDay();
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.NANOS:
	                    return nanosUntil;
	                case _ChronoUnit.ChronoUnit.MICROS:
	                    return _MathUtil.MathUtil.intDiv(nanosUntil, 1000);
	                case _ChronoUnit.ChronoUnit.MILLIS:
	                    return _MathUtil.MathUtil.intDiv(nanosUntil, 1000000);
	                case _ChronoUnit.ChronoUnit.SECONDS:
	                    return _MathUtil.MathUtil.intDiv(nanosUntil, LocalTime.NANOS_PER_SECOND);
	                case _ChronoUnit.ChronoUnit.MINUTES:
	                    return _MathUtil.MathUtil.intDiv(nanosUntil, LocalTime.NANOS_PER_MINUTE);
	                case _ChronoUnit.ChronoUnit.HOURS:
	                    return _MathUtil.MathUtil.intDiv(nanosUntil, LocalTime.NANOS_PER_HOUR);
	                case _ChronoUnit.ChronoUnit.HALF_DAYS:
	                    return _MathUtil.MathUtil.intDiv(nanosUntil, 12 * LocalTime.NANOS_PER_HOUR);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.between(this, end);
	    };

	    LocalTime.prototype.atDate = function atDate(date) {
	        return _LocalDateTime.LocalDateTime.of(date, this);
	    };

	    LocalTime.prototype.toSecondOfDay = function toSecondOfDay() {
	        var total = this._hour * LocalTime.SECONDS_PER_HOUR;
	        total += this._minute * LocalTime.SECONDS_PER_MINUTE;
	        total += this._second;
	        return total;
	    };

	    LocalTime.prototype.toNanoOfDay = function toNanoOfDay() {
	        var total = this._hour * LocalTime.NANOS_PER_HOUR;
	        total += this._minute * LocalTime.NANOS_PER_MINUTE;
	        total += this._second * LocalTime.NANOS_PER_SECOND;
	        total += this._nano;
	        return total;
	    };

	    LocalTime.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, LocalTime, 'other');
	        var cmp = _MathUtil.MathUtil.compareNumbers(this._hour, other._hour);
	        if (cmp === 0) {
	            cmp = _MathUtil.MathUtil.compareNumbers(this._minute, other._minute);
	            if (cmp === 0) {
	                cmp = _MathUtil.MathUtil.compareNumbers(this._second, other._second);
	                if (cmp === 0) {
	                    cmp = _MathUtil.MathUtil.compareNumbers(this._nano, other._nano);
	                }
	            }
	        }
	        return cmp;
	    };

	    LocalTime.prototype.isAfter = function isAfter(other) {
	        return this.compareTo(other) > 0;
	    };

	    LocalTime.prototype.isBefore = function isBefore(other) {
	        return this.compareTo(other) < 0;
	    };

	    LocalTime.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof LocalTime) {
	            return this._hour === other._hour && this._minute === other._minute && this._second === other._second && this._nano === other._nano;
	        }
	        return false;
	    };

	    LocalTime.prototype.hashCode = function hashCode() {
	        var nod = this.toNanoOfDay();
	        return nod ^ nod >>> 24;
	    };

	    LocalTime.prototype.toString = function toString() {
	        var buf = '';
	        var hourValue = this._hour;
	        var minuteValue = this._minute;
	        var secondValue = this._second;
	        var nanoValue = this._nano;
	        buf += hourValue < 10 ? '0' : '';
	        buf += hourValue;
	        buf += minuteValue < 10 ? ':0' : ':';
	        buf += minuteValue;
	        if (secondValue > 0 || nanoValue > 0) {
	            buf += secondValue < 10 ? ':0' : ':';
	            buf += secondValue;
	            if (nanoValue > 0) {
	                buf += '.';
	                if (_MathUtil.MathUtil.intMod(nanoValue, 1000000) === 0) {
	                    buf += ('' + (_MathUtil.MathUtil.intDiv(nanoValue, 1000000) + 1000)).substring(1);
	                } else if (_MathUtil.MathUtil.intMod(nanoValue, 1000) === 0) {
	                    buf += ('' + (_MathUtil.MathUtil.intDiv(nanoValue, 1000) + 1000000)).substring(1);
	                } else {
	                    buf += ('' + (nanoValue + 1000000000)).substring(1);
	                }
	            }
	        }
	        return buf;
	    };

	    LocalTime.prototype.toJSON = function toJSON() {
	        return this.toString();
	    };

	    LocalTime.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.format(this);
	    };

	    return LocalTime;
	}(_Temporal2.Temporal);

	exports.LocalTime = LocalTime;
	function _init() {
	    LocalTime.HOURS = [];
	    for (var i = 0; i < 24; i++) {
	        LocalTime.HOURS[i] = makeLocalTimeConst(i);
	    }

	    function makeLocalTimeConst() {
	        var hour = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var minute = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var second = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	        var nano = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

	        var localTime = Object.create(LocalTime.prototype);
	        _Temporal2.Temporal.call(localTime);
	        localTime._hour = hour;
	        localTime._minute = minute;
	        localTime._second = second;
	        localTime._nano = nano;
	        return localTime;
	    }

	    LocalTime.MIN = LocalTime.HOURS[0];

	    LocalTime.MAX = makeLocalTimeConst(23, 59, 59, 999999999);

	    LocalTime.MIDNIGHT = LocalTime.HOURS[0];

	    LocalTime.NOON = LocalTime.HOURS[12];

	    LocalTime.FROM = (0, _TemporalQuery.createTemporalQuery)('LocalTime.FROM', function (temporal) {
	        return LocalTime.from(temporal);
	    });

	    LocalTime.HOURS_PER_DAY = 24;

	    LocalTime.MINUTES_PER_HOUR = 60;

	    LocalTime.MINUTES_PER_DAY = LocalTime.MINUTES_PER_HOUR * LocalTime.HOURS_PER_DAY;

	    LocalTime.SECONDS_PER_MINUTE = 60;

	    LocalTime.SECONDS_PER_HOUR = LocalTime.SECONDS_PER_MINUTE * LocalTime.MINUTES_PER_HOUR;

	    LocalTime.SECONDS_PER_DAY = LocalTime.SECONDS_PER_HOUR * LocalTime.HOURS_PER_DAY;

	    LocalTime.MILLIS_PER_DAY = LocalTime.SECONDS_PER_DAY * 1000;

	    LocalTime.MICROS_PER_DAY = LocalTime.SECONDS_PER_DAY * 1000000;

	    LocalTime.NANOS_PER_SECOND = 1000000000;

	    LocalTime.NANOS_PER_MINUTE = LocalTime.NANOS_PER_SECOND * LocalTime.SECONDS_PER_MINUTE;

	    LocalTime.NANOS_PER_HOUR = LocalTime.NANOS_PER_MINUTE * LocalTime.MINUTES_PER_HOUR;

	    LocalTime.NANOS_PER_DAY = LocalTime.NANOS_PER_HOUR * LocalTime.HOURS_PER_DAY;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.MathUtil = exports.MIN_SAFE_INTEGER = exports.MAX_SAFE_INTEGER = undefined;

	var _errors = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */


	var MAX_SAFE_INTEGER = exports.MAX_SAFE_INTEGER = 9007199254740991;
	var MIN_SAFE_INTEGER = exports.MIN_SAFE_INTEGER = -9007199254740991;

	var MathUtil = exports.MathUtil = function () {
	    function MathUtil() {
	        _classCallCheck(this, MathUtil);
	    }

	    MathUtil.intDiv = function intDiv(x, y) {
	        var r = x / y;
	        r = MathUtil.roundDown(r);
	        return MathUtil.safeZero(r);
	    };

	    MathUtil.intMod = function intMod(x, y) {
	        var r = x - MathUtil.intDiv(x, y) * y;
	        r = MathUtil.roundDown(r);
	        return MathUtil.safeZero(r);
	    };

	    MathUtil.roundDown = function roundDown(r) {
	        if (r < 0) {
	            return Math.ceil(r);
	        } else {
	            return Math.floor(r);
	        }
	    };

	    MathUtil.floorDiv = function floorDiv(x, y) {
	        var r = Math.floor(x / y);
	        return MathUtil.safeZero(r);
	    };

	    MathUtil.floorMod = function floorMod(x, y) {
	        var r = x - MathUtil.floorDiv(x, y) * y;
	        return MathUtil.safeZero(r);
	    };

	    MathUtil.safeAdd = function safeAdd(x, y) {
	        MathUtil.verifyInt(x);
	        MathUtil.verifyInt(y);
	        if (x === 0) {
	            return MathUtil.safeZero(y);
	        }
	        if (y === 0) {
	            return MathUtil.safeZero(x);
	        }
	        var r = MathUtil.safeToInt(x + y);
	        if (r === x || r === y) {
	            throw new _errors.ArithmeticException('Invalid addition beyond MAX_SAFE_INTEGER!');
	        }
	        return r;
	    };

	    MathUtil.safeSubtract = function safeSubtract(x, y) {
	        MathUtil.verifyInt(x);
	        MathUtil.verifyInt(y);
	        if (x === 0 && y === 0) {
	            return 0;
	        } else if (x === 0) {
	            return MathUtil.safeZero(-1 * y);
	        } else if (y === 0) {
	            return MathUtil.safeZero(x);
	        }
	        return MathUtil.safeToInt(x - y);
	    };

	    MathUtil.safeMultiply = function safeMultiply(x, y) {
	        MathUtil.verifyInt(x);
	        MathUtil.verifyInt(y);
	        if (x === 1) {
	            return MathUtil.safeZero(y);
	        }
	        if (y === 1) {
	            return MathUtil.safeZero(x);
	        }
	        if (x === 0 || y === 0) {
	            return 0;
	        }
	        var r = MathUtil.safeToInt(x * y);
	        if (r / y !== x || x === MIN_SAFE_INTEGER && y === -1 || y === MIN_SAFE_INTEGER && x === -1) {
	            throw new _errors.ArithmeticException('Multiplication overflows: ' + x + ' * ' + y);
	        }
	        return r;
	    };

	    MathUtil.parseInt = function (_parseInt) {
	        function parseInt(_x) {
	            return _parseInt.apply(this, arguments);
	        }

	        parseInt.toString = function () {
	            return _parseInt.toString();
	        };

	        return parseInt;
	    }(function (value) {
	        var r = parseInt(value);
	        return MathUtil.safeToInt(r);
	    });

	    MathUtil.safeToInt = function safeToInt(value) {
	        MathUtil.verifyInt(value);
	        return MathUtil.safeZero(value);
	    };

	    MathUtil.verifyInt = function verifyInt(value) {
	        if (value == null) {
	            throw new _errors.ArithmeticException('Invalid value: \'' + value + '\', using null or undefined as argument');
	        }
	        if (isNaN(value)) {
	            throw new _errors.ArithmeticException('Invalid int value, using NaN as argument');
	        }
	        if (value > MAX_SAFE_INTEGER || value < MIN_SAFE_INTEGER) {
	            throw new _errors.ArithmeticException('Calculation overflows an int: ' + value);
	        }
	    };

	    MathUtil.safeZero = function safeZero(value) {
	        return value === 0 ? 0 : +value;
	    };

	    MathUtil.compareNumbers = function compareNumbers(a, b) {
	        if (a < b) {
	            return -1;
	        }
	        if (a > b) {
	            return 1;
	        }
	        return 0;
	    };

	    return MathUtil;
	}();

	MathUtil.MAX_SAFE_INTEGER = MAX_SAFE_INTEGER;
	MathUtil.MIN_SAFE_INTEGER = MIN_SAFE_INTEGER;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.LocalDateTime = undefined;
	exports._init = _init;

	var _MathUtil = __webpack_require__(6);

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _Clock = __webpack_require__(1);

	var _Instant = __webpack_require__(4);

	var _LocalDate = __webpack_require__(8);

	var _LocalTime = __webpack_require__(5);

	var _ZonedDateTime = __webpack_require__(51);

	var _ZoneId = __webpack_require__(24);

	var _ZoneOffset = __webpack_require__(23);

	var _DateTimeFormatter = __webpack_require__(31);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalQueries = __webpack_require__(25);

	var _TemporalQuery = __webpack_require__(43);

	var _ChronoLocalDateTime2 = __webpack_require__(53);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var LocalDateTime = function (_ChronoLocalDateTime) {
	    _inherits(LocalDateTime, _ChronoLocalDateTime);

	    LocalDateTime.now = function now(clockOrZone) {
	        if (clockOrZone == null) {
	            return LocalDateTime._now(_Clock.Clock.systemDefaultZone());
	        } else if (clockOrZone instanceof _Clock.Clock) {
	            return LocalDateTime._now(clockOrZone);
	        } else {
	            return LocalDateTime._now(_Clock.Clock.system(clockOrZone));
	        }
	    };

	    LocalDateTime._now = function _now(clock) {
	        (0, _assert.requireNonNull)(clock, 'clock');
	        return LocalDateTime.ofInstant(clock.instant(), clock.zone());
	    };

	    LocalDateTime._ofEpochMillis = function _ofEpochMillis(epochMilli, offset) {
	        var localSecond = _MathUtil.MathUtil.floorDiv(epochMilli, 1000) + offset.totalSeconds();
	        var localEpochDay = _MathUtil.MathUtil.floorDiv(localSecond, _LocalTime.LocalTime.SECONDS_PER_DAY);
	        var secsOfDay = _MathUtil.MathUtil.floorMod(localSecond, _LocalTime.LocalTime.SECONDS_PER_DAY);
	        var nanoOfSecond = _MathUtil.MathUtil.floorMod(epochMilli, 1000) * 1000000;
	        var date = _LocalDate.LocalDate.ofEpochDay(localEpochDay);
	        var time = _LocalTime.LocalTime.ofSecondOfDay(secsOfDay, nanoOfSecond);
	        return new LocalDateTime(date, time);
	    };

	    LocalDateTime.of = function of() {
	        if (arguments.length === 2 && (arguments[0] instanceof _LocalDate.LocalDate || arguments[1] instanceof _LocalTime.LocalTime)) {
	            return LocalDateTime.ofDateAndTime.apply(this, arguments);
	        } else {
	            return LocalDateTime.ofNumbers.apply(this, arguments);
	        }
	    };

	    LocalDateTime.ofNumbers = function ofNumbers() {
	        var year = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var month = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var dayOfMonth = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	        var hour = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	        var minute = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	        var second = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
	        var nanoOfSecond = arguments.length <= 6 || arguments[6] === undefined ? 0 : arguments[6];

	        var date = _LocalDate.LocalDate.of(year, month, dayOfMonth);
	        var time = _LocalTime.LocalTime.of(hour, minute, second, nanoOfSecond);
	        return new LocalDateTime(date, time);
	    };

	    LocalDateTime.ofDateAndTime = function ofDateAndTime(date, time) {
	        (0, _assert.requireNonNull)(date, 'date');
	        (0, _assert.requireNonNull)(time, 'time');
	        return new LocalDateTime(date, time);
	    };

	    LocalDateTime.ofInstant = function ofInstant(instant) {
	        var zone = arguments.length <= 1 || arguments[1] === undefined ? _ZoneId.ZoneId.systemDefault() : arguments[1];

	        (0, _assert.requireNonNull)(instant, 'instant');
	        (0, _assert.requireInstance)(instant, _Instant.Instant, 'instant');
	        (0, _assert.requireNonNull)(zone, 'zone');
	        var rules = zone.rules();
	        var offset = rules.offset(instant);
	        return LocalDateTime.ofEpochSecond(instant.epochSecond(), instant.nano(), offset);
	    };

	    LocalDateTime.ofEpochSecond = function ofEpochSecond() {
	        var epochSecond = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var nanoOfSecond = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var offset = arguments[2];

	        if (arguments.length === 2 && nanoOfSecond instanceof _ZoneOffset.ZoneOffset) {
	            offset = nanoOfSecond;
	            nanoOfSecond = 0;
	        }
	        (0, _assert.requireNonNull)(offset, 'offset');
	        var localSecond = epochSecond + offset.totalSeconds();
	        var localEpochDay = _MathUtil.MathUtil.floorDiv(localSecond, _LocalTime.LocalTime.SECONDS_PER_DAY);
	        var secsOfDay = _MathUtil.MathUtil.floorMod(localSecond, _LocalTime.LocalTime.SECONDS_PER_DAY);
	        var date = _LocalDate.LocalDate.ofEpochDay(localEpochDay);
	        var time = _LocalTime.LocalTime.ofSecondOfDay(secsOfDay, nanoOfSecond);
	        return new LocalDateTime(date, time);
	    };

	    LocalDateTime.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (temporal instanceof LocalDateTime) {
	            return temporal;
	        } else if (temporal instanceof _ZonedDateTime.ZonedDateTime) {
	            return temporal.toLocalDateTime();
	        }
	        try {
	            var date = _LocalDate.LocalDate.from(temporal);
	            var time = _LocalTime.LocalTime.from(temporal);
	            return new LocalDateTime(date, time);
	        } catch (ex) {
	            throw new _errors.DateTimeException('Unable to obtain LocalDateTime TemporalAccessor: ' + temporal + ', type ' + (temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	    };

	    LocalDateTime.parse = function parse(text) {
	        var formatter = arguments.length <= 1 || arguments[1] === undefined ? _DateTimeFormatter.DateTimeFormatter.ISO_LOCAL_DATE_TIME : arguments[1];

	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.parse(text, LocalDateTime.FROM);
	    };

	    function LocalDateTime(date, time) {
	        _classCallCheck(this, LocalDateTime);

	        var _this = _possibleConstructorReturn(this, _ChronoLocalDateTime.call(this));

	        (0, _assert.requireInstance)(date, _LocalDate.LocalDate, 'date');
	        (0, _assert.requireInstance)(time, _LocalTime.LocalTime, 'time');
	        _this._date = date;
	        _this._time = time;
	        return _this;
	    }

	    LocalDateTime.prototype._withDateTime = function _withDateTime(newDate, newTime) {
	        if (this._date === newDate && this._time === newTime) {
	            return this;
	        }
	        return new LocalDateTime(newDate, newTime);
	    };

	    LocalDateTime.prototype.isSupported = function isSupported(fieldOrUnit) {
	        if (fieldOrUnit instanceof _ChronoField.ChronoField) {
	            return fieldOrUnit.isDateBased() || fieldOrUnit.isTimeBased();
	        } else if (fieldOrUnit instanceof _ChronoUnit.ChronoUnit) {
	            return fieldOrUnit.isDateBased() || fieldOrUnit.isTimeBased();
	        }
	        return fieldOrUnit != null && fieldOrUnit.isSupportedBy(this);
	    };

	    LocalDateTime.prototype.range = function range(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            return field.isTimeBased() ? this._time.range(field) : this._date.range(field);
	        }
	        return field.rangeRefinedBy(this);
	    };

	    LocalDateTime.prototype.get = function get(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            return field.isTimeBased() ? this._time.get(field) : this._date.get(field);
	        }
	        return _ChronoLocalDateTime.prototype.get.call(this, field);
	    };

	    LocalDateTime.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            return field.isTimeBased() ? this._time.getLong(field) : this._date.getLong(field);
	        }
	        return field.getFrom(this);
	    };

	    LocalDateTime.prototype.year = function year() {
	        return this._date.year();
	    };

	    LocalDateTime.prototype.monthValue = function monthValue() {
	        return this._date.monthValue();
	    };

	    LocalDateTime.prototype.month = function month() {
	        return this._date.month();
	    };

	    LocalDateTime.prototype.dayOfMonth = function dayOfMonth() {
	        return this._date.dayOfMonth();
	    };

	    LocalDateTime.prototype.dayOfYear = function dayOfYear() {
	        return this._date.dayOfYear();
	    };

	    LocalDateTime.prototype.dayOfWeek = function dayOfWeek() {
	        return this._date.dayOfWeek();
	    };

	    LocalDateTime.prototype.hour = function hour() {
	        return this._time.hour();
	    };

	    LocalDateTime.prototype.minute = function minute() {
	        return this._time.minute();
	    };

	    LocalDateTime.prototype.second = function second() {
	        return this._time.second();
	    };

	    LocalDateTime.prototype.nano = function nano() {
	        return this._time.nano();
	    };

	    LocalDateTime.prototype.with = function _with(adjusterOrField, newValue) {
	        if (arguments.length === 1) {
	            return this.withTemporalAdjuster(adjusterOrField);
	        } else {
	            return this.with2(adjusterOrField, newValue);
	        }
	    };

	    LocalDateTime.prototype.withTemporalAdjuster = function withTemporalAdjuster(adjuster) {
	        (0, _assert.requireNonNull)(adjuster, 'adjuster');

	        if (adjuster instanceof _LocalDate.LocalDate) {
	            return this._withDateTime(adjuster, this._time);
	        } else if (adjuster instanceof _LocalTime.LocalTime) {
	            return this._withDateTime(this._date, adjuster);
	        } else if (adjuster instanceof LocalDateTime) {
	            return adjuster;
	        }
	        (0, _assert.assert)(typeof adjuster.adjustInto === 'function', 'adjuster', _errors.IllegalArgumentException);
	        return adjuster.adjustInto(this);
	    };

	    LocalDateTime.prototype.with2 = function with2(field, newValue) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            if (field.isTimeBased()) {
	                return this._withDateTime(this._date, this._time.with(field, newValue));
	            } else {
	                return this._withDateTime(this._date.with(field, newValue), this._time);
	            }
	        }
	        return field.adjustInto(this, newValue);
	    };

	    LocalDateTime.prototype.withYear = function withYear(year) {
	        return this._withDateTime(this._date.withYear(year), this._time);
	    };

	    LocalDateTime.prototype.withMonth = function withMonth(month) {
	        return this._withDateTime(this._date.withMonth(month), this._time);
	    };

	    LocalDateTime.prototype.withDayOfMonth = function withDayOfMonth(dayOfMonth) {
	        return this._withDateTime(this._date.withDayOfMonth(dayOfMonth), this._time);
	    };

	    LocalDateTime.prototype.withDayOfYear = function withDayOfYear(dayOfYear) {
	        return this._withDateTime(this._date.withDayOfYear(dayOfYear), this._time);
	    };

	    LocalDateTime.prototype.withHour = function withHour(hour) {
	        var newTime = this._time.withHour(hour);
	        return this._withDateTime(this._date, newTime);
	    };

	    LocalDateTime.prototype.withMinute = function withMinute(minute) {
	        var newTime = this._time.withMinute(minute);
	        return this._withDateTime(this._date, newTime);
	    };

	    LocalDateTime.prototype.withSecond = function withSecond(second) {
	        var newTime = this._time.withSecond(second);
	        return this._withDateTime(this._date, newTime);
	    };

	    LocalDateTime.prototype.withNano = function withNano(nanoOfSecond) {
	        var newTime = this._time.withNano(nanoOfSecond);
	        return this._withDateTime(this._date, newTime);
	    };

	    LocalDateTime.prototype.truncatedTo = function truncatedTo(unit) {
	        return this._withDateTime(this._date, this._time.truncatedTo(unit));
	    };

	    LocalDateTime.prototype.plus = function plus(amount, unit) {
	        if (arguments.length === 1) {
	            return this.plusTemporalAmount(amount);
	        } else {
	            return this.plus2(amount, unit);
	        }
	    };

	    LocalDateTime.prototype.plusTemporalAmount = function plusTemporalAmount(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.addTo(this);
	    };

	    LocalDateTime.prototype.plus2 = function plus2(amountToAdd, unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.NANOS:
	                    return this.plusNanos(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MICROS:
	                    return this.plusDays(_MathUtil.MathUtil.intDiv(amountToAdd, _LocalTime.LocalTime.MICROS_PER_DAY)).plusNanos(_MathUtil.MathUtil.intMod(amountToAdd, _LocalTime.LocalTime.MICROS_PER_DAY) * 1000);
	                case _ChronoUnit.ChronoUnit.MILLIS:
	                    return this.plusDays(_MathUtil.MathUtil.intDiv(amountToAdd, _LocalTime.LocalTime.MILLIS_PER_DAY)).plusNanos(_MathUtil.MathUtil.intMod(amountToAdd, _LocalTime.LocalTime.MILLIS_PER_DAY) * 1000000);
	                case _ChronoUnit.ChronoUnit.SECONDS:
	                    return this.plusSeconds(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MINUTES:
	                    return this.plusMinutes(amountToAdd);
	                case _ChronoUnit.ChronoUnit.HOURS:
	                    return this.plusHours(amountToAdd);
	                case _ChronoUnit.ChronoUnit.HALF_DAYS:
	                    return this.plusDays(_MathUtil.MathUtil.intDiv(amountToAdd, 256)).plusHours(_MathUtil.MathUtil.intMod(amountToAdd, 256) * 12);}
	            return this._withDateTime(this._date.plus(amountToAdd, unit), this._time);
	        }
	        return unit.addTo(this, amountToAdd);
	    };

	    LocalDateTime.prototype.plusYears = function plusYears(years) {
	        var newDate = this._date.plusYears(years);
	        return this._withDateTime(newDate, this._time);
	    };

	    LocalDateTime.prototype.plusMonths = function plusMonths(months) {
	        var newDate = this._date.plusMonths(months);
	        return this._withDateTime(newDate, this._time);
	    };

	    LocalDateTime.prototype.plusWeeks = function plusWeeks(weeks) {
	        var newDate = this._date.plusWeeks(weeks);
	        return this._withDateTime(newDate, this._time);
	    };

	    LocalDateTime.prototype.plusDays = function plusDays(days) {
	        var newDate = this._date.plusDays(days);
	        return this._withDateTime(newDate, this._time);
	    };

	    LocalDateTime.prototype.plusHours = function plusHours(hours) {
	        return this._plusWithOverflow(this._date, hours, 0, 0, 0, 1);
	    };

	    LocalDateTime.prototype.plusMinutes = function plusMinutes(minutes) {
	        return this._plusWithOverflow(this._date, 0, minutes, 0, 0, 1);
	    };

	    LocalDateTime.prototype.plusSeconds = function plusSeconds(seconds) {
	        return this._plusWithOverflow(this._date, 0, 0, seconds, 0, 1);
	    };

	    LocalDateTime.prototype.plusNanos = function plusNanos(nanos) {
	        return this._plusWithOverflow(this._date, 0, 0, 0, nanos, 1);
	    };

	    LocalDateTime.prototype.minus = function minus(amount, unit) {
	        if (arguments.length === 1) {
	            return this.minusTemporalAmount(amount);
	        } else {
	            return this.minus2(amount, unit);
	        }
	    };

	    LocalDateTime.prototype.minusTemporalAmount = function minusTemporalAmount(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.subtractFrom(this);
	    };

	    LocalDateTime.prototype.minus2 = function minus2(amountToSubtract, unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        return this.plus2(-1 * amountToSubtract, unit);
	    };

	    LocalDateTime.prototype.minusYears = function minusYears(years) {
	        return this.plusYears(-1 * years);
	    };

	    LocalDateTime.prototype.minusMonths = function minusMonths(months) {
	        return this.plusMonths(-1 * months);
	    };

	    LocalDateTime.prototype.minusWeeks = function minusWeeks(weeks) {
	        return this.plusWeeks(-1 * weeks);
	    };

	    LocalDateTime.prototype.minusDays = function minusDays(days) {
	        return this.plusDays(-1 * days);
	    };

	    LocalDateTime.prototype.minusHours = function minusHours(hours) {
	        return this._plusWithOverflow(this._date, hours, 0, 0, 0, -1);
	    };

	    LocalDateTime.prototype.minusMinutes = function minusMinutes(minutes) {
	        return this._plusWithOverflow(this._date, 0, minutes, 0, 0, -1);
	    };

	    LocalDateTime.prototype.minusSeconds = function minusSeconds(seconds) {
	        return this._plusWithOverflow(this._date, 0, 0, seconds, 0, -1);
	    };

	    LocalDateTime.prototype.minusNanos = function minusNanos(nanos) {
	        return this._plusWithOverflow(this._date, 0, 0, 0, nanos, -1);
	    };

	    LocalDateTime.prototype._plusWithOverflow = function _plusWithOverflow(newDate, hours, minutes, seconds, nanos, sign) {
	        if ((hours | minutes | seconds | nanos) === 0) {
	            return this._withDateTime(newDate, this._time);
	        }
	        var totDays = _MathUtil.MathUtil.intDiv(nanos, _LocalTime.LocalTime.NANOS_PER_DAY) + _MathUtil.MathUtil.intDiv(seconds, _LocalTime.LocalTime.SECONDS_PER_DAY) + _MathUtil.MathUtil.intDiv(minutes, _LocalTime.LocalTime.MINUTES_PER_DAY) + _MathUtil.MathUtil.intDiv(hours, _LocalTime.LocalTime.HOURS_PER_DAY);
	        totDays *= sign;
	        var totNanos = _MathUtil.MathUtil.intMod(nanos, _LocalTime.LocalTime.NANOS_PER_DAY) + _MathUtil.MathUtil.intMod(seconds, _LocalTime.LocalTime.SECONDS_PER_DAY) * _LocalTime.LocalTime.NANOS_PER_SECOND + _MathUtil.MathUtil.intMod(minutes, _LocalTime.LocalTime.MINUTES_PER_DAY) * _LocalTime.LocalTime.NANOS_PER_MINUTE + _MathUtil.MathUtil.intMod(hours, _LocalTime.LocalTime.HOURS_PER_DAY) * _LocalTime.LocalTime.NANOS_PER_HOUR;
	        var curNoD = this._time.toNanoOfDay();
	        totNanos = totNanos * sign + curNoD;
	        totDays += _MathUtil.MathUtil.floorDiv(totNanos, _LocalTime.LocalTime.NANOS_PER_DAY);
	        var newNoD = _MathUtil.MathUtil.floorMod(totNanos, _LocalTime.LocalTime.NANOS_PER_DAY);
	        var newTime = newNoD === curNoD ? this._time : _LocalTime.LocalTime.ofNanoOfDay(newNoD);
	        return this._withDateTime(newDate.plusDays(totDays), newTime);
	    };

	    LocalDateTime.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return this.toLocalDate();
	        }
	        return _ChronoLocalDateTime.prototype.query.call(this, _query);
	    };

	    LocalDateTime.prototype.adjustInto = function adjustInto(temporal) {
	        return _ChronoLocalDateTime.prototype.adjustInto.call(this, temporal);
	    };

	    LocalDateTime.prototype.until = function until(endExclusive, unit) {
	        (0, _assert.requireNonNull)(endExclusive, 'endExclusive');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        var end = LocalDateTime.from(endExclusive);
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            if (unit.isTimeBased()) {
	                var daysUntil = this._date.daysUntil(end._date);
	                var timeUntil = end._time.toNanoOfDay() - this._time.toNanoOfDay();
	                if (daysUntil > 0 && timeUntil < 0) {
	                    daysUntil--;
	                    timeUntil += _LocalTime.LocalTime.NANOS_PER_DAY;
	                } else if (daysUntil < 0 && timeUntil > 0) {
	                    daysUntil++;
	                    timeUntil -= _LocalTime.LocalTime.NANOS_PER_DAY;
	                }
	                var amount = daysUntil;
	                switch (unit) {
	                    case _ChronoUnit.ChronoUnit.NANOS:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, _LocalTime.LocalTime.NANOS_PER_DAY);
	                        return _MathUtil.MathUtil.safeAdd(amount, timeUntil);
	                    case _ChronoUnit.ChronoUnit.MICROS:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, _LocalTime.LocalTime.MICROS_PER_DAY);
	                        return _MathUtil.MathUtil.safeAdd(amount, _MathUtil.MathUtil.intDiv(timeUntil, 1000));
	                    case _ChronoUnit.ChronoUnit.MILLIS:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, _LocalTime.LocalTime.MILLIS_PER_DAY);
	                        return _MathUtil.MathUtil.safeAdd(amount, _MathUtil.MathUtil.intDiv(timeUntil, 1000000));
	                    case _ChronoUnit.ChronoUnit.SECONDS:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, _LocalTime.LocalTime.SECONDS_PER_DAY);
	                        return _MathUtil.MathUtil.safeAdd(amount, _MathUtil.MathUtil.intDiv(timeUntil, _LocalTime.LocalTime.NANOS_PER_SECOND));
	                    case _ChronoUnit.ChronoUnit.MINUTES:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, _LocalTime.LocalTime.MINUTES_PER_DAY);
	                        return _MathUtil.MathUtil.safeAdd(amount, _MathUtil.MathUtil.intDiv(timeUntil, _LocalTime.LocalTime.NANOS_PER_MINUTE));
	                    case _ChronoUnit.ChronoUnit.HOURS:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, _LocalTime.LocalTime.HOURS_PER_DAY);
	                        return _MathUtil.MathUtil.safeAdd(amount, _MathUtil.MathUtil.intDiv(timeUntil, _LocalTime.LocalTime.NANOS_PER_HOUR));
	                    case _ChronoUnit.ChronoUnit.HALF_DAYS:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, 2);
	                        return _MathUtil.MathUtil.safeAdd(amount, _MathUtil.MathUtil.intDiv(timeUntil, _LocalTime.LocalTime.NANOS_PER_HOUR * 12));
	                }
	                throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	            }
	            var endDate = end._date;
	            var endTime = end._time;
	            if (endDate.isAfter(this._date) && endTime.isBefore(this._time)) {
	                endDate = endDate.minusDays(1);
	            } else if (endDate.isBefore(this._date) && endTime.isAfter(this._time)) {
	                endDate = endDate.plusDays(1);
	            }
	            return this._date.until(endDate, unit);
	        }
	        return unit.between(this, end);
	    };

	    LocalDateTime.prototype.atZone = function atZone(zone) {
	        return _ZonedDateTime.ZonedDateTime.of(this, zone);
	    };

	    LocalDateTime.prototype.toLocalDate = function toLocalDate() {
	        return this._date;
	    };

	    LocalDateTime.prototype.toLocalTime = function toLocalTime() {
	        return this._time;
	    };

	    LocalDateTime.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, LocalDateTime, 'other');
	        return this._compareTo0(other);
	    };

	    LocalDateTime.prototype._compareTo0 = function _compareTo0(other) {
	        var cmp = this._date.compareTo(other.toLocalDate());
	        if (cmp === 0) {
	            cmp = this._time.compareTo(other.toLocalTime());
	        }
	        return cmp;
	    };

	    LocalDateTime.prototype.isAfter = function isAfter(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, LocalDateTime, 'other');
	        return this._compareTo0(other) > 0;
	    };

	    LocalDateTime.prototype.isBefore = function isBefore(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, LocalDateTime, 'other');
	        return this._compareTo0(other) < 0;
	    };

	    LocalDateTime.prototype.isEqual = function isEqual(other) {
	        if (other instanceof LocalDateTime) {
	            return this._compareTo0(other) === 0;
	        }
	        return _ChronoLocalDateTime.prototype.isEqual.call(this, other);
	    };

	    LocalDateTime.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof LocalDateTime) {
	            return this._date.equals(other._date) && this._time.equals(other._time);
	        }
	        return false;
	    };

	    LocalDateTime.prototype.hashCode = function hashCode() {
	        return this._date.hashCode() ^ this._time.hashCode();
	    };

	    LocalDateTime.prototype.toString = function toString() {
	        return this._date.toString() + 'T' + this._time.toString();
	    };

	    LocalDateTime.prototype.toJSON = function toJSON() {
	        return this.toString();
	    };

	    LocalDateTime.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.format(this);
	    };

	    return LocalDateTime;
	}(_ChronoLocalDateTime2.ChronoLocalDateTime);

	exports.LocalDateTime = LocalDateTime;
	function _init() {
	    LocalDateTime.MIN = LocalDateTime.of(_LocalDate.LocalDate.MIN, _LocalTime.LocalTime.MIN);

	    LocalDateTime.MAX = LocalDateTime.of(_LocalDate.LocalDate.MAX, _LocalTime.LocalTime.MAX);

	    LocalDateTime.FROM = (0, _TemporalQuery.createTemporalQuery)('LocalDateTime.FROM', function (temporal) {
	        return LocalDateTime.from(temporal);
	    });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.LocalDate = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _MathUtil = __webpack_require__(6);

	var _errors = __webpack_require__(3);

	var _IsoChronology = __webpack_require__(9);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _ChronoLocalDate2 = __webpack_require__(30);

	var _TemporalQueries = __webpack_require__(25);

	var _TemporalQuery = __webpack_require__(43);

	var _ValueRange = __webpack_require__(19);

	var _DateTimeFormatter = __webpack_require__(31);

	var _Clock = __webpack_require__(1);

	var _DayOfWeek = __webpack_require__(45);

	var _Month = __webpack_require__(11);

	var _Period = __webpack_require__(32);

	var _YearConstants = __webpack_require__(16);

	var _LocalTime = __webpack_require__(5);

	var _LocalDateTime = __webpack_require__(7);

	var _Year = __webpack_require__(48);

	var _ZoneId = __webpack_require__(24);

	var _ZonedDateTime = __webpack_require__(51);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var DAYS_PER_CYCLE = 146097;

	var DAYS_0000_TO_1970 = DAYS_PER_CYCLE * 5 - (30 * 365 + 7);

	var LocalDate = function (_ChronoLocalDate) {
	    _inherits(LocalDate, _ChronoLocalDate);

	    LocalDate.now = function now(clockOrZone) {
	        var clock;
	        if (clockOrZone == null) {
	            clock = _Clock.Clock.systemDefaultZone();
	        } else if (clockOrZone instanceof _ZoneId.ZoneId) {
	            clock = _Clock.Clock.system(clockOrZone);
	        } else {
	            clock = clockOrZone;
	        }
	        return LocalDate.ofInstant(clock.instant(), clock.zone());
	    };

	    LocalDate.ofInstant = function ofInstant(instant) {
	        var zone = arguments.length <= 1 || arguments[1] === undefined ? _ZoneId.ZoneId.systemDefault() : arguments[1];

	        (0, _assert.requireNonNull)(instant, 'instant');
	        var offset = zone.rules().offset(instant);
	        var epochSec = instant.epochSecond() + offset.totalSeconds();
	        var epochDay = _MathUtil.MathUtil.floorDiv(epochSec, _LocalTime.LocalTime.SECONDS_PER_DAY);
	        return LocalDate.ofEpochDay(epochDay);
	    };

	    LocalDate.of = function of(year, month, dayOfMonth) {
	        return new LocalDate(year, month, dayOfMonth);
	    };

	    LocalDate.ofYearDay = function ofYearDay(year, dayOfYear) {
	        _ChronoField.ChronoField.YEAR.checkValidValue(year);

	        var leap = _IsoChronology.IsoChronology.isLeapYear(year);
	        if (dayOfYear === 366 && leap === false) {
	            (0, _assert.assert)(false, 'Invalid date \'DayOfYear 366\' as \'' + year + '\' is not a leap year', _errors.DateTimeException);
	        }
	        var moy = _Month.Month.of(Math.floor((dayOfYear - 1) / 31 + 1));
	        var monthEnd = moy.firstDayOfYear(leap) + moy.length(leap) - 1;
	        if (dayOfYear > monthEnd) {
	            moy = moy.plus(1);
	        }
	        var dom = dayOfYear - moy.firstDayOfYear(leap) + 1;
	        return new LocalDate(year, moy.value(), dom);
	    };

	    LocalDate.ofEpochDay = function ofEpochDay() {
	        var epochDay = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	        var adjust, adjustCycles, dom, doyEst, marchDoy0, marchMonth0, month, year, yearEst, zeroDay;
	        zeroDay = epochDay + DAYS_0000_TO_1970;
	        zeroDay -= 60;
	        adjust = 0;
	        if (zeroDay < 0) {
	            adjustCycles = _MathUtil.MathUtil.intDiv(zeroDay + 1, DAYS_PER_CYCLE) - 1;
	            adjust = adjustCycles * 400;
	            zeroDay += -adjustCycles * DAYS_PER_CYCLE;
	        }
	        yearEst = _MathUtil.MathUtil.intDiv(400 * zeroDay + 591, DAYS_PER_CYCLE);
	        doyEst = zeroDay - (365 * yearEst + _MathUtil.MathUtil.intDiv(yearEst, 4) - _MathUtil.MathUtil.intDiv(yearEst, 100) + _MathUtil.MathUtil.intDiv(yearEst, 400));
	        if (doyEst < 0) {
	            yearEst--;
	            doyEst = zeroDay - (365 * yearEst + _MathUtil.MathUtil.intDiv(yearEst, 4) - _MathUtil.MathUtil.intDiv(yearEst, 100) + _MathUtil.MathUtil.intDiv(yearEst, 400));
	        }
	        yearEst += adjust;
	        marchDoy0 = doyEst;
	        marchMonth0 = _MathUtil.MathUtil.intDiv(marchDoy0 * 5 + 2, 153);
	        month = (marchMonth0 + 2) % 12 + 1;
	        dom = marchDoy0 - _MathUtil.MathUtil.intDiv(marchMonth0 * 306 + 5, 10) + 1;
	        yearEst += _MathUtil.MathUtil.intDiv(marchMonth0, 10);
	        year = yearEst;
	        return new LocalDate(year, month, dom);
	    };

	    LocalDate.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        var date = temporal.query(_TemporalQueries.TemporalQueries.localDate());
	        if (date == null) {
	            throw new _errors.DateTimeException('Unable to obtain LocalDate from TemporalAccessor: ' + temporal + ', type ' + (temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	        return date;
	    };

	    LocalDate.parse = function parse(text) {
	        var formatter = arguments.length <= 1 || arguments[1] === undefined ? _DateTimeFormatter.DateTimeFormatter.ISO_LOCAL_DATE : arguments[1];

	        (0, _assert.assert)(formatter != null, 'formatter', _errors.NullPointerException);
	        return formatter.parse(text, LocalDate.FROM);
	    };

	    LocalDate._resolvePreviousValid = function _resolvePreviousValid(year, month, day) {
	        switch (month) {
	            case 2:
	                day = Math.min(day, _IsoChronology.IsoChronology.isLeapYear(year) ? 29 : 28);
	                break;
	            case 4:
	            case 6:
	            case 9:
	            case 11:
	                day = Math.min(day, 30);
	                break;
	        }
	        return LocalDate.of(year, month, day);
	    };

	    function LocalDate(year, month, dayOfMonth) {
	        _classCallCheck(this, LocalDate);

	        var _this = _possibleConstructorReturn(this, _ChronoLocalDate.call(this));

	        if (month instanceof _Month.Month) {
	            month = month.value();
	        }
	        LocalDate._validate(year, month, dayOfMonth);
	        _this._year = _MathUtil.MathUtil.safeZero(year);
	        _this._month = _MathUtil.MathUtil.safeZero(month);
	        _this._day = _MathUtil.MathUtil.safeZero(dayOfMonth);
	        return _this;
	    }

	    LocalDate._validate = function _validate(year, month, dayOfMonth) {
	        var dom;
	        _ChronoField.ChronoField.YEAR.checkValidValue(year);
	        _ChronoField.ChronoField.MONTH_OF_YEAR.checkValidValue(month);
	        _ChronoField.ChronoField.DAY_OF_MONTH.checkValidValue(dayOfMonth);
	        if (dayOfMonth > 28) {
	            dom = 31;
	            switch (month) {
	                case 2:
	                    dom = _IsoChronology.IsoChronology.isLeapYear(year) ? 29 : 28;
	                    break;
	                case 4:
	                case 6:
	                case 9:
	                case 11:
	                    dom = 30;
	            }
	            if (dayOfMonth > dom) {
	                if (dayOfMonth === 29) {
	                    (0, _assert.assert)(false, 'Invalid date \'February 29\' as \'' + year + '\' is not a leap year', _errors.DateTimeException);
	                } else {
	                    (0, _assert.assert)(false, 'Invalid date \'' + year + '\' \'' + month + '\' \'' + dayOfMonth + '\'', _errors.DateTimeException);
	                }
	            }
	        }
	    };

	    LocalDate.prototype.isSupported = function isSupported(field) {
	        return _ChronoLocalDate.prototype.isSupported.call(this, field);
	    };

	    LocalDate.prototype.range = function range(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            if (field.isDateBased()) {
	                switch (field) {
	                    case _ChronoField.ChronoField.DAY_OF_MONTH:
	                        return _ValueRange.ValueRange.of(1, this.lengthOfMonth());
	                    case _ChronoField.ChronoField.DAY_OF_YEAR:
	                        return _ValueRange.ValueRange.of(1, this.lengthOfYear());
	                    case _ChronoField.ChronoField.ALIGNED_WEEK_OF_MONTH:
	                        return _ValueRange.ValueRange.of(1, this.month() === _Month.Month.FEBRUARY && this.isLeapYear() === false ? 4 : 5);
	                    case _ChronoField.ChronoField.YEAR_OF_ERA:
	                        return this._year <= 0 ? _ValueRange.ValueRange.of(1, _Year.Year.MAX_VALUE + 1) : _ValueRange.ValueRange.of(1, _Year.Year.MAX_VALUE);
	                }
	                return field.range();
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.rangeRefinedBy(this);
	    };

	    LocalDate.prototype.get = function get(field) {
	        return this.getLong(field);
	    };

	    LocalDate.prototype.getLong = function getLong(field) {
	        (0, _assert.assert)(field != null, '', _errors.NullPointerException);
	        if (field instanceof _ChronoField.ChronoField) {
	            return this._get0(field);
	        }
	        return field.getFrom(this);
	    };

	    LocalDate.prototype._get0 = function _get0(field) {
	        switch (field) {
	            case _ChronoField.ChronoField.DAY_OF_WEEK:
	                return this.dayOfWeek().value();
	            case _ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH:
	                return _MathUtil.MathUtil.intMod(this._day - 1, 7) + 1;
	            case _ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR:
	                return _MathUtil.MathUtil.intMod(this.dayOfYear() - 1, 7) + 1;
	            case _ChronoField.ChronoField.DAY_OF_MONTH:
	                return this._day;
	            case _ChronoField.ChronoField.DAY_OF_YEAR:
	                return this.dayOfYear();
	            case _ChronoField.ChronoField.EPOCH_DAY:
	                return this.toEpochDay();
	            case _ChronoField.ChronoField.ALIGNED_WEEK_OF_MONTH:
	                return _MathUtil.MathUtil.intDiv(this._day - 1, 7) + 1;
	            case _ChronoField.ChronoField.ALIGNED_WEEK_OF_YEAR:
	                return _MathUtil.MathUtil.intDiv(this.dayOfYear() - 1, 7) + 1;
	            case _ChronoField.ChronoField.MONTH_OF_YEAR:
	                return this._month;
	            case _ChronoField.ChronoField.PROLEPTIC_MONTH:
	                return this._prolepticMonth();
	            case _ChronoField.ChronoField.YEAR_OF_ERA:
	                return this._year >= 1 ? this._year : 1 - this._year;
	            case _ChronoField.ChronoField.YEAR:
	                return this._year;
	            case _ChronoField.ChronoField.ERA:
	                return this._year >= 1 ? 1 : 0;
	        }
	        throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	    };

	    LocalDate.prototype._prolepticMonth = function _prolepticMonth() {
	        return this._year * 12 + (this._month - 1);
	    };

	    LocalDate.prototype.chronology = function chronology() {
	        return _IsoChronology.IsoChronology.INSTANCE;
	    };

	    LocalDate.prototype.year = function year() {
	        return this._year;
	    };

	    LocalDate.prototype.monthValue = function monthValue() {
	        return this._month;
	    };

	    LocalDate.prototype.month = function month() {
	        return _Month.Month.of(this._month);
	    };

	    LocalDate.prototype.dayOfMonth = function dayOfMonth() {
	        return this._day;
	    };

	    LocalDate.prototype.dayOfYear = function dayOfYear() {
	        return this.month().firstDayOfYear(this.isLeapYear()) + this._day - 1;
	    };

	    LocalDate.prototype.dayOfWeek = function dayOfWeek() {
	        var dow0 = _MathUtil.MathUtil.floorMod(this.toEpochDay() + 3, 7);
	        return _DayOfWeek.DayOfWeek.of(dow0 + 1);
	    };

	    LocalDate.prototype.isLeapYear = function isLeapYear() {
	        return _IsoChronology.IsoChronology.isLeapYear(this._year);
	    };

	    LocalDate.prototype.lengthOfMonth = function lengthOfMonth() {
	        switch (this._month) {
	            case 2:
	                return this.isLeapYear() ? 29 : 28;
	            case 4:
	            case 6:
	            case 9:
	            case 11:
	                return 30;
	            default:
	                return 31;
	        }
	    };

	    LocalDate.prototype.lengthOfYear = function lengthOfYear() {
	        return this.isLeapYear() ? 366 : 365;
	    };

	    LocalDate.prototype.with = function _with(fieldOrAdjuster, newValue) {
	        if (arguments.length < 2) {
	            return this.withTemporalAdjuster(fieldOrAdjuster);
	        } else {
	            return this.withFieldAndValue(fieldOrAdjuster, newValue);
	        }
	    };

	    LocalDate.prototype.withTemporalAdjuster = function withTemporalAdjuster(adjuster) {
	        (0, _assert.requireNonNull)(adjuster, 'adjuster');

	        if (adjuster instanceof LocalDate) {
	            return adjuster;
	        }
	        (0, _assert.assert)(typeof adjuster.adjustInto === 'function', 'adjuster', _errors.IllegalArgumentException);
	        return adjuster.adjustInto(this);
	    };

	    LocalDate.prototype.withFieldAndValue = function withFieldAndValue(field, newValue) {
	        (0, _assert.assert)(field != null, 'field', _errors.NullPointerException);
	        if (field instanceof _ChronoField.ChronoField) {
	            var f = field;
	            f.checkValidValue(newValue);
	            switch (f) {
	                case _ChronoField.ChronoField.DAY_OF_WEEK:
	                    return this.plusDays(newValue - this.dayOfWeek().value());
	                case _ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH:
	                    return this.plusDays(newValue - this.getLong(_ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH));
	                case _ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR:
	                    return this.plusDays(newValue - this.getLong(_ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR));
	                case _ChronoField.ChronoField.DAY_OF_MONTH:
	                    return this.withDayOfMonth(newValue);
	                case _ChronoField.ChronoField.DAY_OF_YEAR:
	                    return this.withDayOfYear(newValue);
	                case _ChronoField.ChronoField.EPOCH_DAY:
	                    return LocalDate.ofEpochDay(newValue);
	                case _ChronoField.ChronoField.ALIGNED_WEEK_OF_MONTH:
	                    return this.plusWeeks(newValue - this.getLong(_ChronoField.ChronoField.ALIGNED_WEEK_OF_MONTH));
	                case _ChronoField.ChronoField.ALIGNED_WEEK_OF_YEAR:
	                    return this.plusWeeks(newValue - this.getLong(_ChronoField.ChronoField.ALIGNED_WEEK_OF_YEAR));
	                case _ChronoField.ChronoField.MONTH_OF_YEAR:
	                    return this.withMonth(newValue);
	                case _ChronoField.ChronoField.PROLEPTIC_MONTH:
	                    return this.plusMonths(newValue - this.getLong(_ChronoField.ChronoField.PROLEPTIC_MONTH));
	                case _ChronoField.ChronoField.YEAR_OF_ERA:
	                    return this.withYear(this._year >= 1 ? newValue : 1 - newValue);
	                case _ChronoField.ChronoField.YEAR:
	                    return this.withYear(newValue);
	                case _ChronoField.ChronoField.ERA:
	                    return this.getLong(_ChronoField.ChronoField.ERA) === newValue ? this : this.withYear(1 - this._year);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.adjustInto(this, newValue);
	    };

	    LocalDate.prototype.withYear = function withYear(year) {
	        if (this._year === year) {
	            return this;
	        }
	        _ChronoField.ChronoField.YEAR.checkValidValue(year);
	        return LocalDate._resolvePreviousValid(year, this._month, this._day);
	    };

	    LocalDate.prototype.withMonth = function withMonth(month) {
	        var m = month instanceof _Month.Month ? month.value() : month;
	        if (this._month === m) {
	            return this;
	        }
	        _ChronoField.ChronoField.MONTH_OF_YEAR.checkValidValue(m);
	        return LocalDate._resolvePreviousValid(this._year, m, this._day);
	    };

	    LocalDate.prototype.withDayOfMonth = function withDayOfMonth(dayOfMonth) {
	        if (this._day === dayOfMonth) {
	            return this;
	        }
	        return LocalDate.of(this._year, this._month, dayOfMonth);
	    };

	    LocalDate.prototype.withDayOfYear = function withDayOfYear(dayOfYear) {
	        if (this.dayOfYear() === dayOfYear) {
	            return this;
	        }
	        return LocalDate.ofYearDay(this._year, dayOfYear);
	    };

	    LocalDate.prototype.plus = function plus(p1, p2) {
	        if (arguments.length < 2) {
	            return this.plus1(p1);
	        } else {
	            return this.plus2(p1, p2);
	        }
	    };

	    LocalDate.prototype.plus1 = function plus1(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.addTo(this);
	    };

	    LocalDate.prototype.plus2 = function plus2(amountToAdd, unit) {
	        (0, _assert.requireNonNull)(amountToAdd, 'amountToAdd');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.DAYS:
	                    return this.plusDays(amountToAdd);
	                case _ChronoUnit.ChronoUnit.WEEKS:
	                    return this.plusWeeks(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MONTHS:
	                    return this.plusMonths(amountToAdd);
	                case _ChronoUnit.ChronoUnit.YEARS:
	                    return this.plusYears(amountToAdd);
	                case _ChronoUnit.ChronoUnit.DECADES:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 10));
	                case _ChronoUnit.ChronoUnit.CENTURIES:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 100));
	                case _ChronoUnit.ChronoUnit.MILLENNIA:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 1000));
	                case _ChronoUnit.ChronoUnit.ERAS:
	                    return this.with(_ChronoField.ChronoField.ERA, _MathUtil.MathUtil.safeAdd(this.getLong(_ChronoField.ChronoField.ERA), amountToAdd));
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.addTo(this, amountToAdd);
	    };

	    LocalDate.prototype.plusYears = function plusYears(yearsToAdd) {
	        if (yearsToAdd === 0) {
	            return this;
	        }
	        var newYear = _ChronoField.ChronoField.YEAR.checkValidIntValue(this._year + yearsToAdd);
	        return LocalDate._resolvePreviousValid(newYear, this._month, this._day);
	    };

	    LocalDate.prototype.plusMonths = function plusMonths(monthsToAdd) {
	        if (monthsToAdd === 0) {
	            return this;
	        }
	        var monthCount = this._year * 12 + (this._month - 1);
	        var calcMonths = monthCount + monthsToAdd;
	        var newYear = _ChronoField.ChronoField.YEAR.checkValidIntValue(_MathUtil.MathUtil.floorDiv(calcMonths, 12));
	        var newMonth = _MathUtil.MathUtil.floorMod(calcMonths, 12) + 1;
	        return LocalDate._resolvePreviousValid(newYear, newMonth, this._day);
	    };

	    LocalDate.prototype.plusWeeks = function plusWeeks(weeksToAdd) {
	        return this.plusDays(_MathUtil.MathUtil.safeMultiply(weeksToAdd, 7));
	    };

	    LocalDate.prototype.plusDays = function plusDays(daysToAdd) {
	        if (daysToAdd === 0) {
	            return this;
	        }
	        var mjDay = _MathUtil.MathUtil.safeAdd(this.toEpochDay(), daysToAdd);
	        return LocalDate.ofEpochDay(mjDay);
	    };

	    LocalDate.prototype.minus = function minus(p1, p2) {
	        if (arguments.length < 2) {
	            return this.minus1(p1);
	        } else {
	            return this.minus2(p1, p2);
	        }
	    };

	    LocalDate.prototype.minus1 = function minus1(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.subtractFrom(this);
	    };

	    LocalDate.prototype.minus2 = function minus2(amountToSubtract, unit) {
	        (0, _assert.requireNonNull)(amountToSubtract, 'amountToSubtract');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        return this.plus2(-1 * amountToSubtract, unit);
	    };

	    LocalDate.prototype.minusYears = function minusYears(yearsToSubtract) {
	        return this.plusYears(yearsToSubtract * -1);
	    };

	    LocalDate.prototype.minusMonths = function minusMonths(monthsToSubtract) {
	        return this.plusMonths(monthsToSubtract * -1);
	    };

	    LocalDate.prototype.minusWeeks = function minusWeeks(weeksToSubtract) {
	        return this.plusWeeks(weeksToSubtract * -1);
	    };

	    LocalDate.prototype.minusDays = function minusDays(daysToSubtract) {
	        return this.plusDays(daysToSubtract * -1);
	    };

	    LocalDate.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return this;
	        }
	        return _ChronoLocalDate.prototype.query.call(this, _query);
	    };

	    LocalDate.prototype.adjustInto = function adjustInto(temporal) {
	        return _ChronoLocalDate.prototype.adjustInto.call(this, temporal);
	    };

	    LocalDate.prototype.until = function until(p1, p2) {
	        if (arguments.length < 2) {
	            return this.until1(p1);
	        } else {
	            return this.until2(p1, p2);
	        }
	    };

	    LocalDate.prototype.until2 = function until2(endExclusive, unit) {
	        var end = LocalDate.from(endExclusive);
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.DAYS:
	                    return this.daysUntil(end);
	                case _ChronoUnit.ChronoUnit.WEEKS:
	                    return _MathUtil.MathUtil.intDiv(this.daysUntil(end), 7);
	                case _ChronoUnit.ChronoUnit.MONTHS:
	                    return this._monthsUntil(end);
	                case _ChronoUnit.ChronoUnit.YEARS:
	                    return _MathUtil.MathUtil.intDiv(this._monthsUntil(end), 12);
	                case _ChronoUnit.ChronoUnit.DECADES:
	                    return _MathUtil.MathUtil.intDiv(this._monthsUntil(end), 120);
	                case _ChronoUnit.ChronoUnit.CENTURIES:
	                    return _MathUtil.MathUtil.intDiv(this._monthsUntil(end), 1200);
	                case _ChronoUnit.ChronoUnit.MILLENNIA:
	                    return _MathUtil.MathUtil.intDiv(this._monthsUntil(end), 12000);
	                case _ChronoUnit.ChronoUnit.ERAS:
	                    return end.getLong(_ChronoField.ChronoField.ERA) - this.getLong(_ChronoField.ChronoField.ERA);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.between(this, end);
	    };

	    LocalDate.prototype.daysUntil = function daysUntil(end) {
	        return end.toEpochDay() - this.toEpochDay();
	    };

	    LocalDate.prototype._monthsUntil = function _monthsUntil(end) {
	        var packed1 = this._prolepticMonth() * 32 + this.dayOfMonth();
	        var packed2 = end._prolepticMonth() * 32 + end.dayOfMonth();
	        return _MathUtil.MathUtil.intDiv(packed2 - packed1, 32);
	    };

	    LocalDate.prototype.until1 = function until1(endDate) {
	        var end = LocalDate.from(endDate);
	        var totalMonths = end._prolepticMonth() - this._prolepticMonth();
	        var days = end._day - this._day;
	        if (totalMonths > 0 && days < 0) {
	            totalMonths--;
	            var calcDate = this.plusMonths(totalMonths);
	            days = end.toEpochDay() - calcDate.toEpochDay();
	        } else if (totalMonths < 0 && days > 0) {
	                totalMonths++;
	                days -= end.lengthOfMonth();
	            }
	        var years = _MathUtil.MathUtil.intDiv(totalMonths, 12);
	        var months = _MathUtil.MathUtil.intMod(totalMonths, 12);
	        return _Period.Period.of(_MathUtil.MathUtil.safeToInt(years), months, days);
	    };

	    LocalDate.prototype.atTime = function atTime() {
	        if (arguments.length === 1) {
	            return this.atTime1.apply(this, arguments);
	        } else {
	            return this.atTime4.apply(this, arguments);
	        }
	    };

	    LocalDate.prototype.atTime1 = function atTime1(time) {
	        return _LocalDateTime.LocalDateTime.of(this, time);
	    };

	    LocalDate.prototype.atTime4 = function atTime4(hour, minute) {
	        var second = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	        var nanoOfSecond = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

	        return this.atTime1(_LocalTime.LocalTime.of(hour, minute, second, nanoOfSecond));
	    };

	    LocalDate.prototype.atStartOfDay = function atStartOfDay(zone) {
	        if (zone != null) {
	            return this.atStartOfDayWithZone(zone);
	        } else {
	            return _LocalDateTime.LocalDateTime.of(this, _LocalTime.LocalTime.MIDNIGHT);
	        }
	    };

	    LocalDate.prototype.atStartOfDayWithZone = function atStartOfDayWithZone(zone) {
	        (0, _assert.requireNonNull)(zone, 'zone');
	        var ldt = this.atTime(_LocalTime.LocalTime.MIDNIGHT);

	        return _ZonedDateTime.ZonedDateTime.of(ldt, zone);
	    };

	    LocalDate.prototype.toEpochDay = function toEpochDay() {
	        var y = this.year();
	        var m = this.monthValue();
	        var total = 0;
	        total += 365 * y;
	        if (y >= 0) {
	            total += _MathUtil.MathUtil.intDiv(y + 3, 4) - _MathUtil.MathUtil.intDiv(y + 99, 100) + _MathUtil.MathUtil.intDiv(y + 399, 400);
	        } else {
	            total -= _MathUtil.MathUtil.intDiv(y, -4) - _MathUtil.MathUtil.intDiv(y, -100) + _MathUtil.MathUtil.intDiv(y, -400);
	        }
	        total += _MathUtil.MathUtil.intDiv(367 * m - 362, 12);
	        total += this.dayOfMonth() - 1;
	        if (m > 2) {
	            total--;
	            if (!_IsoChronology.IsoChronology.isLeapYear(y)) {
	                total--;
	            }
	        }
	        return total - DAYS_0000_TO_1970;
	    };

	    LocalDate.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, LocalDate, 'other');
	        if (other instanceof LocalDate) {
	            return this._compareTo0(other);
	        }
	    };

	    LocalDate.prototype._compareTo0 = function _compareTo0(otherDate) {
	        var cmp = this._year - otherDate._year;
	        if (cmp === 0) {
	            cmp = this._month - otherDate._month;
	            if (cmp === 0) {
	                cmp = this._day - otherDate._day;
	            }
	        }
	        return cmp;
	    };

	    LocalDate.prototype.isAfter = function isAfter(other) {
	        return this.compareTo(other) > 0;
	    };

	    LocalDate.prototype.isBefore = function isBefore(other) {
	        return this.compareTo(other) < 0;
	    };

	    LocalDate.prototype.isEqual = function isEqual(other) {
	        return this.compareTo(other) === 0;
	    };

	    LocalDate.prototype.equals = function equals(otherDate) {
	        if (this === otherDate) {
	            return true;
	        }
	        if (otherDate instanceof LocalDate) {
	            return this._compareTo0(otherDate) === 0;
	        }
	        return false;
	    };

	    LocalDate.prototype.hashCode = function hashCode() {
	        var yearValue = this._year;
	        var monthValue = this._month;
	        var dayValue = this._day;
	        return yearValue & 0xFFFFF800 ^ (yearValue << 11) + (monthValue << 6) + dayValue;
	    };

	    LocalDate.prototype.toString = function toString() {
	        var dayString, monthString, yearString;

	        var yearValue = this.year();
	        var monthValue = this.monthValue();
	        var dayValue = this.dayOfMonth();

	        var absYear = Math.abs(yearValue);

	        if (absYear < 1000) {
	            if (yearValue < 0) {
	                yearString = '-' + ('' + (yearValue - 10000)).slice(-4);
	            } else {
	                yearString = ('' + (yearValue + 10000)).slice(-4);
	            }
	        } else {
	            if (yearValue > 9999) {
	                yearString = '+' + yearValue;
	            } else {
	                yearString = '' + yearValue;
	            }
	        }

	        if (monthValue < 10) {
	            monthString = '-0' + monthValue;
	        } else {
	            monthString = '-' + monthValue;
	        }

	        if (dayValue < 10) {
	            dayString = '-0' + dayValue;
	        } else {
	            dayString = '-' + dayValue;
	        }

	        return yearString + monthString + dayString;
	    };

	    LocalDate.prototype.toJSON = function toJSON() {
	        return this.toString();
	    };

	    LocalDate.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        (0, _assert.requireInstance)(formatter, _DateTimeFormatter.DateTimeFormatter, 'formatter');
	        return _ChronoLocalDate.prototype.format.call(this, formatter);
	    };

	    return LocalDate;
	}(_ChronoLocalDate2.ChronoLocalDate);

	exports.LocalDate = LocalDate;
	function _init() {
	    LocalDate.MIN = LocalDate.of(_YearConstants.YearConstants.MIN_VALUE, 1, 1);

	    LocalDate.MAX = LocalDate.of(_YearConstants.YearConstants.MAX_VALUE, 12, 31);

	    LocalDate.EPOCH_0 = LocalDate.ofEpochDay(0);

	    LocalDate.FROM = (0, _TemporalQuery.createTemporalQuery)('LocalDate.FROM', function (temporal) {
	        return LocalDate.from(temporal);
	    });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.IsoChronology = undefined;
	exports._init = _init;

	var _Enum2 = __webpack_require__(10);

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _LocalDate = __webpack_require__(8);

	var _Month = __webpack_require__(11);

	var _Year = __webpack_require__(48);

	var _ChronoField = __webpack_require__(12);

	var _ResolverStyle = __webpack_require__(36);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var IsoChronology = exports.IsoChronology = function (_Enum) {
	    _inherits(IsoChronology, _Enum);

	    function IsoChronology() {
	        _classCallCheck(this, IsoChronology);

	        return _possibleConstructorReturn(this, _Enum.apply(this, arguments));
	    }

	    IsoChronology.isLeapYear = function isLeapYear(prolepticYear) {
	        return (prolepticYear & 3) === 0 && (prolepticYear % 100 !== 0 || prolepticYear % 400 === 0);
	    };

	    IsoChronology.prototype._updateResolveMap = function _updateResolveMap(fieldValues, field, value) {
	        (0, _assert.requireNonNull)(fieldValues, 'fieldValues');
	        (0, _assert.requireNonNull)(field, 'field');
	        var current = fieldValues.get(field);
	        if (current != null && current !== value) {
	            throw new _errors.DateTimeException('Invalid state, field: ' + field + ' ' + current + ' conflicts with ' + field + ' ' + value);
	        }
	        fieldValues.put(field, value);
	    };

	    IsoChronology.prototype.resolveDate = function resolveDate(fieldValues, resolverStyle) {
	        if (fieldValues.containsKey(_ChronoField.ChronoField.EPOCH_DAY)) {
	            return _LocalDate.LocalDate.ofEpochDay(fieldValues.remove(_ChronoField.ChronoField.EPOCH_DAY));
	        }

	        var yoeLong = fieldValues.remove(_ChronoField.ChronoField.YEAR_OF_ERA);
	        if (yoeLong != null) {
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                _ChronoField.ChronoField.YEAR_OF_ERA.checkValidValue(yoeLong);
	            }
	            var era = fieldValues.remove(_ChronoField.ChronoField.ERA);
	            if (era == null) {
	                var year = fieldValues.get(_ChronoField.ChronoField.YEAR);
	                if (resolverStyle === _ResolverStyle.ResolverStyle.STRICT) {
	                    if (year != null) {
	                        this._updateResolveMap(fieldValues, _ChronoField.ChronoField.YEAR, year > 0 ? yoeLong : _MathUtil.MathUtil.safeSubtract(1, yoeLong));
	                    } else {
	                        fieldValues.put(_ChronoField.ChronoField.YEAR_OF_ERA, yoeLong);
	                    }
	                } else {
	                    this._updateResolveMap(fieldValues, _ChronoField.ChronoField.YEAR, year == null || year > 0 ? yoeLong : _MathUtil.MathUtil.safeSubtract(1, yoeLong));
	                }
	            } else if (era === 1) {
	                this._updateResolveMap(fieldValues, _ChronoField.ChronoField.YEAR, yoeLong);
	            } else if (era === 0) {
	                this._updateResolveMap(fieldValues, _ChronoField.ChronoField.YEAR, _MathUtil.MathUtil.safeSubtract(1, yoeLong));
	            } else {
	                throw new _errors.DateTimeException('Invalid value for era: ' + era);
	            }
	        } else if (fieldValues.containsKey(_ChronoField.ChronoField.ERA)) {
	            _ChronoField.ChronoField.ERA.checkValidValue(fieldValues.get(_ChronoField.ChronoField.ERA));
	        }

	        if (fieldValues.containsKey(_ChronoField.ChronoField.YEAR)) {
	            if (fieldValues.containsKey(_ChronoField.ChronoField.MONTH_OF_YEAR)) {
	                if (fieldValues.containsKey(_ChronoField.ChronoField.DAY_OF_MONTH)) {
	                    var y = _ChronoField.ChronoField.YEAR.checkValidIntValue(fieldValues.remove(_ChronoField.ChronoField.YEAR));
	                    var moy = fieldValues.remove(_ChronoField.ChronoField.MONTH_OF_YEAR);
	                    var dom = fieldValues.remove(_ChronoField.ChronoField.DAY_OF_MONTH);
	                    if (resolverStyle === _ResolverStyle.ResolverStyle.LENIENT) {
	                        var months = moy - 1;
	                        var days = dom - 1;
	                        return _LocalDate.LocalDate.of(y, 1, 1).plusMonths(months).plusDays(days);
	                    } else if (resolverStyle === _ResolverStyle.ResolverStyle.SMART) {
	                        _ChronoField.ChronoField.DAY_OF_MONTH.checkValidValue(dom);
	                        if (moy === 4 || moy === 6 || moy === 9 || moy === 11) {
	                            dom = Math.min(dom, 30);
	                        } else if (moy === 2) {
	                            dom = Math.min(dom, _Month.Month.FEBRUARY.length(_Year.Year.isLeap(y)));
	                        }
	                        return _LocalDate.LocalDate.of(y, moy, dom);
	                    } else {
	                        return _LocalDate.LocalDate.of(y, moy, dom);
	                    }
	                }
	            }
	        }
	        return null;
	    };

	    return IsoChronology;
	}(_Enum2.Enum);

	function _init() {
	    IsoChronology.INSTANCE = new IsoChronology('IsoChronology');
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var Enum = exports.Enum = function () {
	    function Enum(name) {
	        _classCallCheck(this, Enum);

	        this._name = name;
	    }

	    Enum.prototype.equals = function equals(other) {
	        return this === other;
	    };

	    Enum.prototype.toString = function toString() {
	        return this._name;
	    };

	    return Enum;
	}();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Month = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _MathUtil = __webpack_require__(6);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _errors = __webpack_require__(3);

	var _DateTimeFormatterBuilder = __webpack_require__(20);

	var _IsoChronology = __webpack_require__(9);

	var _Temporal2 = __webpack_require__(37);

	var _TemporalQueries = __webpack_require__(25);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Month = function (_Temporal) {
	    _inherits(Month, _Temporal);

	    function Month(value) {
	        _classCallCheck(this, Month);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this._value = value;
	        return _this;
	    }

	    Month.prototype.value = function value() {
	        return this._value;
	    };

	    Month.prototype.getDisplayName = function getDisplayName(style, locale) {
	        throw new IllegalArgumentException('Pattern using (localized) text not implemented yet!');
	        return new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendText(_ChronoField.ChronoField.MONTH_OF_YEAR, style).toFormatter(locale).format(this);
	    };

	    Month.prototype.isSupported = function isSupported(field) {
	        if (null === field) {
	            return false;
	        }
	        if (field instanceof _ChronoField.ChronoField) {
	            return field === _ChronoField.ChronoField.MONTH_OF_YEAR;
	        }
	        return field != null && field.isSupportedBy(this);
	    };

	    Month.prototype.get = function get(field) {
	        if (field === _ChronoField.ChronoField.MONTH_OF_YEAR) {
	            return this.value();
	        }
	        return this.range(field).checkValidIntValue(this.getLong(field), field);
	    };

	    Month.prototype.getLong = function getLong(field) {
	        if (field === _ChronoField.ChronoField.MONTH_OF_YEAR) {
	            return this.value();
	        } else if (field instanceof _ChronoField.ChronoField) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    Month.prototype.plus = function plus(months) {
	        var amount = _MathUtil.MathUtil.intMod(months, 12) + 12;
	        var newMonthVal = _MathUtil.MathUtil.intMod(this.value() + amount, 12);

	        newMonthVal = newMonthVal === 0 ? 12 : newMonthVal;
	        return Month.of(newMonthVal);
	    };

	    Month.prototype.minus = function minus(months) {
	        return this.plus(-1 * _MathUtil.MathUtil.intMod(months, 12));
	    };

	    Month.prototype.length = function length(leapYear) {
	        switch (this) {
	            case Month.FEBRUARY:
	                return leapYear ? 29 : 28;
	            case Month.APRIL:
	            case Month.JUNE:
	            case Month.SEPTEMBER:
	            case Month.NOVEMBER:
	                return 30;
	            default:
	                return 31;
	        }
	    };

	    Month.prototype.minLength = function minLength() {
	        switch (this) {
	            case Month.FEBRUARY:
	                return 28;
	            case Month.APRIL:
	            case Month.JUNE:
	            case Month.SEPTEMBER:
	            case Month.NOVEMBER:
	                return 30;
	            default:
	                return 31;
	        }
	    };

	    Month.prototype.maxLength = function maxLength() {
	        switch (this) {
	            case Month.FEBRUARY:
	                return 29;
	            case Month.APRIL:
	            case Month.JUNE:
	            case Month.SEPTEMBER:
	            case Month.NOVEMBER:
	                return 30;
	            default:
	                return 31;
	        }
	    };

	    Month.prototype.firstDayOfYear = function firstDayOfYear(leapYear) {
	        var leap = leapYear ? 1 : 0;
	        switch (this) {
	            case Month.JANUARY:
	                return 1;
	            case Month.FEBRUARY:
	                return 32;
	            case Month.MARCH:
	                return 60 + leap;
	            case Month.APRIL:
	                return 91 + leap;
	            case Month.MAY:
	                return 121 + leap;
	            case Month.JUNE:
	                return 152 + leap;
	            case Month.JULY:
	                return 182 + leap;
	            case Month.AUGUST:
	                return 213 + leap;
	            case Month.SEPTEMBER:
	                return 244 + leap;
	            case Month.OCTOBER:
	                return 274 + leap;
	            case Month.NOVEMBER:
	                return 305 + leap;
	            case Month.DECEMBER:
	            default:
	                return 335 + leap;
	        }
	    };

	    Month.prototype.firstMonthOfQuarter = function firstMonthOfQuarter() {
	        switch (this) {
	            case Month.JANUARY:
	            case Month.FEBRUARY:
	            case Month.MARCH:
	                return Month.JANUARY;
	            case Month.APRIL:
	            case Month.MAY:
	            case Month.JUNE:
	                return Month.APRIL;
	            case Month.JULY:
	            case Month.AUGUST:
	            case Month.SEPTEMBER:
	                return Month.JULY;
	            case Month.OCTOBER:
	            case Month.NOVEMBER:
	            case Month.DECEMBER:
	            default:
	                return Month.OCTOBER;
	        }
	    };

	    Month.prototype.query = function query(_query) {
	        (0, _assert.assert)(_query != null, 'query() parameter must not be null', _errors.DateTimeException);
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return _IsoChronology.IsoChronology.INSTANCE;
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.MONTHS;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    Month.prototype.toString = function toString() {
	        switch (this) {
	            case Month.JANUARY:
	                return 'JANUARY';
	            case Month.FEBRUARY:
	                return 'FEBRUARY';
	            case Month.MARCH:
	                return 'MARCH';
	            case Month.APRIL:
	                return 'APRIL';
	            case Month.MAY:
	                return 'MAY';
	            case Month.JUNE:
	                return 'JUNE';
	            case Month.JULY:
	                return 'JULY';
	            case Month.AUGUST:
	                return 'AUGUST';
	            case Month.SEPTEMBER:
	                return 'SEPTEMBER';
	            case Month.OCTOBER:
	                return 'OCTOBER';
	            case Month.NOVEMBER:
	                return 'NOVEMBER';
	            case Month.DECEMBER:
	                return 'DECEMBER';
	            default:
	                return 'unknown Month, value: ' + this.value();
	        }
	    };

	    Month.prototype.adjustInto = function adjustInto(temporal) {
	        return temporal.with(_ChronoField.ChronoField.MONTH_OF_YEAR, this.value());
	    };

	    Month.values = function values() {
	        return MONTHS.slice();
	    };

	    Month.of = function of(month) {
	        if (month < 1 || month > 12) {
	            (0, _assert.assert)(false, 'Invalid value for MonthOfYear: ' + month, _errors.DateTimeException);
	        }
	        return MONTHS[month - 1];
	    };

	    Month.from = function from(temporal) {
	        if (temporal instanceof Month) {
	            return temporal;
	        }
	        try {
	            return Month.of(temporal.get(_ChronoField.ChronoField.MONTH_OF_YEAR));
	        } catch (ex) {
	            throw new _errors.DateTimeException('Unable to obtain Month from TemporalAccessor: ' + temporal + ' of type ' + (temporal && temporal.constructor != null ? temporal.constructor.name : ''), ex);
	        }
	    };

	    return Month;
	}(_Temporal2.Temporal);

	exports.Month = Month;


	var MONTHS;

	function _init() {
	    Month.JANUARY = new Month(1);
	    Month.FEBRUARY = new Month(2);
	    Month.MARCH = new Month(3);
	    Month.APRIL = new Month(4);
	    Month.MAY = new Month(5);
	    Month.JUNE = new Month(6);
	    Month.JULY = new Month(7);
	    Month.AUGUST = new Month(8);
	    Month.SEPTEMBER = new Month(9);
	    Month.OCTOBER = new Month(10);
	    Month.NOVEMBER = new Month(11);
	    Month.DECEMBER = new Month(12);

	    MONTHS = [Month.JANUARY, Month.FEBRUARY, Month.MARCH, Month.APRIL, Month.MAY, Month.JUNE, Month.JULY, Month.AUGUST, Month.SEPTEMBER, Month.OCTOBER, Month.NOVEMBER, Month.DECEMBER];
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ChronoField = undefined;
	exports._init = _init;

	var _MathUtil = __webpack_require__(6);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalField2 = __webpack_require__(18);

	var _ValueRange = __webpack_require__(19);

	var _YearConstants = __webpack_require__(16);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ChronoField = exports.ChronoField = function (_TemporalField) {
	    _inherits(ChronoField, _TemporalField);

	    function ChronoField(name, baseUnit, rangeUnit, range) {
	        _classCallCheck(this, ChronoField);

	        var _this = _possibleConstructorReturn(this, _TemporalField.call(this));

	        _this._name = name;
	        _this._baseUnit = baseUnit;
	        _this._rangeUnit = rangeUnit;
	        _this._range = range;
	        return _this;
	    }

	    ChronoField.prototype.name = function name() {
	        return this._name;
	    };

	    ChronoField.prototype.baseUnit = function baseUnit() {
	        return this._baseUnit;
	    };

	    ChronoField.prototype.rangeUnit = function rangeUnit() {
	        return this._rangeUnit;
	    };

	    ChronoField.prototype.range = function range() {
	        return this._range;
	    };

	    ChronoField.prototype.displayName = function displayName() {
	        return this.toString();
	    };

	    ChronoField.prototype.checkValidValue = function checkValidValue(value) {
	        return this.range().checkValidValue(value, this.name());
	    };

	    ChronoField.prototype.isDateBased = function isDateBased() {
	        var dateBased = this === ChronoField.DAY_OF_WEEK || this === ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH || this === ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR || this === ChronoField.DAY_OF_MONTH || this === ChronoField.DAY_OF_YEAR || this === ChronoField.EPOCH_DAY || this === ChronoField.ALIGNED_WEEK_OF_MONTH || this === ChronoField.ALIGNED_WEEK_OF_YEAR || this === ChronoField.MONTH_OF_YEAR || this === ChronoField.YEAR_OF_ERA || this === ChronoField.YEAR || this === ChronoField.ERA;
	        return dateBased;
	    };

	    ChronoField.prototype.isTimeBased = function isTimeBased() {
	        var timeBased = this === ChronoField.NANO_OF_SECOND || this === ChronoField.NANO_OF_DAY || this === ChronoField.MICRO_OF_SECOND || this === ChronoField.MICRO_OF_DAY || this === ChronoField.MILLI_OF_SECOND || this === ChronoField.MILLI_OF_DAY || this === ChronoField.SECOND_OF_MINUTE || this === ChronoField.SECOND_OF_DAY || this === ChronoField.MINUTE_OF_HOUR || this === ChronoField.MINUTE_OF_DAY || this === ChronoField.HOUR_OF_AMPM || this === ChronoField.CLOCK_HOUR_OF_AMPM || this === ChronoField.HOUR_OF_DAY || this === ChronoField.CLOCK_HOUR_OF_DAY || this === ChronoField.AMPM_OF_DAY;
	        return timeBased;
	    };

	    ChronoField.prototype.rangeRefinedBy = function rangeRefinedBy(temporal) {
	        return temporal.range(this);
	    };

	    ChronoField.prototype.checkValidIntValue = function checkValidIntValue(value) {
	        return this.range().checkValidIntValue(value, this);
	    };

	    ChronoField.prototype.getFrom = function getFrom(temporal) {
	        return temporal.getLong(this);
	    };

	    ChronoField.prototype.toString = function toString() {
	        return this.name();
	    };

	    ChronoField.prototype.equals = function equals(other) {
	        return this === other;
	    };

	    return ChronoField;
	}(_TemporalField2.TemporalField);

	function _init() {

	    ChronoField.NANO_OF_SECOND = new ChronoField('NanoOfSecond', _ChronoUnit.ChronoUnit.NANOS, _ChronoUnit.ChronoUnit.SECONDS, _ValueRange.ValueRange.of(0, 999999999));

	    ChronoField.NANO_OF_DAY = new ChronoField('NanoOfDay', _ChronoUnit.ChronoUnit.NANOS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 86400 * 1000000000 - 1));

	    ChronoField.MICRO_OF_SECOND = new ChronoField('MicroOfSecond', _ChronoUnit.ChronoUnit.MICROS, _ChronoUnit.ChronoUnit.SECONDS, _ValueRange.ValueRange.of(0, 999999));

	    ChronoField.MICRO_OF_DAY = new ChronoField('MicroOfDay', _ChronoUnit.ChronoUnit.MICROS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 86400 * 1000000 - 1));

	    ChronoField.MILLI_OF_SECOND = new ChronoField('MilliOfSecond', _ChronoUnit.ChronoUnit.MILLIS, _ChronoUnit.ChronoUnit.SECONDS, _ValueRange.ValueRange.of(0, 999));

	    ChronoField.MILLI_OF_DAY = new ChronoField('MilliOfDay', _ChronoUnit.ChronoUnit.MILLIS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 86400 * 1000 - 1));

	    ChronoField.SECOND_OF_MINUTE = new ChronoField('SecondOfMinute', _ChronoUnit.ChronoUnit.SECONDS, _ChronoUnit.ChronoUnit.MINUTES, _ValueRange.ValueRange.of(0, 59));

	    ChronoField.SECOND_OF_DAY = new ChronoField('SecondOfDay', _ChronoUnit.ChronoUnit.SECONDS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 86400 - 1));

	    ChronoField.MINUTE_OF_HOUR = new ChronoField('MinuteOfHour', _ChronoUnit.ChronoUnit.MINUTES, _ChronoUnit.ChronoUnit.HOURS, _ValueRange.ValueRange.of(0, 59));

	    ChronoField.MINUTE_OF_DAY = new ChronoField('MinuteOfDay', _ChronoUnit.ChronoUnit.MINUTES, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 24 * 60 - 1));

	    ChronoField.HOUR_OF_AMPM = new ChronoField('HourOfAmPm', _ChronoUnit.ChronoUnit.HOURS, _ChronoUnit.ChronoUnit.HALF_DAYS, _ValueRange.ValueRange.of(0, 11));

	    ChronoField.CLOCK_HOUR_OF_AMPM = new ChronoField('ClockHourOfAmPm', _ChronoUnit.ChronoUnit.HOURS, _ChronoUnit.ChronoUnit.HALF_DAYS, _ValueRange.ValueRange.of(1, 12));

	    ChronoField.HOUR_OF_DAY = new ChronoField('HourOfDay', _ChronoUnit.ChronoUnit.HOURS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 23));

	    ChronoField.CLOCK_HOUR_OF_DAY = new ChronoField('ClockHourOfDay', _ChronoUnit.ChronoUnit.HOURS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(1, 24));

	    ChronoField.AMPM_OF_DAY = new ChronoField('AmPmOfDay', _ChronoUnit.ChronoUnit.HALF_DAYS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 1));

	    ChronoField.DAY_OF_WEEK = new ChronoField('DayOfWeek', _ChronoUnit.ChronoUnit.DAYS, _ChronoUnit.ChronoUnit.WEEKS, _ValueRange.ValueRange.of(1, 7));

	    ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH = new ChronoField('AlignedDayOfWeekInMonth', _ChronoUnit.ChronoUnit.DAYS, _ChronoUnit.ChronoUnit.WEEKS, _ValueRange.ValueRange.of(1, 7));

	    ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR = new ChronoField('AlignedDayOfWeekInYear', _ChronoUnit.ChronoUnit.DAYS, _ChronoUnit.ChronoUnit.WEEKS, _ValueRange.ValueRange.of(1, 7));

	    ChronoField.DAY_OF_MONTH = new ChronoField('DayOfMonth', _ChronoUnit.ChronoUnit.DAYS, _ChronoUnit.ChronoUnit.MONTHS, _ValueRange.ValueRange.of(1, 28, 31), 'day');

	    ChronoField.DAY_OF_YEAR = new ChronoField('DayOfYear', _ChronoUnit.ChronoUnit.DAYS, _ChronoUnit.ChronoUnit.YEARS, _ValueRange.ValueRange.of(1, 365, 366));

	    ChronoField.EPOCH_DAY = new ChronoField('EpochDay', _ChronoUnit.ChronoUnit.DAYS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(Math.floor(_YearConstants.YearConstants.MIN_VALUE * 365.25), Math.floor(_YearConstants.YearConstants.MAX_VALUE * 365.25)));

	    ChronoField.ALIGNED_WEEK_OF_MONTH = new ChronoField('AlignedWeekOfMonth', _ChronoUnit.ChronoUnit.WEEKS, _ChronoUnit.ChronoUnit.MONTHS, _ValueRange.ValueRange.of(1, 4, 5));

	    ChronoField.ALIGNED_WEEK_OF_YEAR = new ChronoField('AlignedWeekOfYear', _ChronoUnit.ChronoUnit.WEEKS, _ChronoUnit.ChronoUnit.YEARS, _ValueRange.ValueRange.of(1, 53));

	    ChronoField.MONTH_OF_YEAR = new ChronoField('MonthOfYear', _ChronoUnit.ChronoUnit.MONTHS, _ChronoUnit.ChronoUnit.YEARS, _ValueRange.ValueRange.of(1, 12), 'month');

	    ChronoField.PROLEPTIC_MONTH = new ChronoField('ProlepticMonth', _ChronoUnit.ChronoUnit.MONTHS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(_YearConstants.YearConstants.MIN_VALUE * 12, _YearConstants.YearConstants.MAX_VALUE * 12 + 11));

	    ChronoField.YEAR_OF_ERA = new ChronoField('YearOfEra', _ChronoUnit.ChronoUnit.YEARS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(1, _YearConstants.YearConstants.MAX_VALUE, _YearConstants.YearConstants.MAX_VALUE + 1));

	    ChronoField.YEAR = new ChronoField('Year', _ChronoUnit.ChronoUnit.YEARS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(_YearConstants.YearConstants.MIN_VALUE, _YearConstants.YearConstants.MAX_VALUE), 'year');

	    ChronoField.ERA = new ChronoField('Era', _ChronoUnit.ChronoUnit.ERAS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(0, 1));

	    ChronoField.INSTANT_SECONDS = new ChronoField('InstantSeconds', _ChronoUnit.ChronoUnit.SECONDS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(_MathUtil.MIN_SAFE_INTEGER, _MathUtil.MAX_SAFE_INTEGER));

	    ChronoField.OFFSET_SECONDS = new ChronoField('OffsetSeconds', _ChronoUnit.ChronoUnit.SECONDS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(-18 * 3600, 18 * 3600));
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ChronoUnit = undefined;
	exports._init = _init;

	var _MathUtil = __webpack_require__(6);

	var _Duration = __webpack_require__(14);

	var _YearConstants = __webpack_require__(16);

	var _TemporalUnit2 = __webpack_require__(17);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ChronoUnit = exports.ChronoUnit = function (_TemporalUnit) {
	  _inherits(ChronoUnit, _TemporalUnit);

	  function ChronoUnit(name, estimatedDuration) {
	    _classCallCheck(this, ChronoUnit);

	    var _this = _possibleConstructorReturn(this, _TemporalUnit.call(this));

	    _this._name = name;
	    _this._duration = estimatedDuration;
	    return _this;
	  }

	  ChronoUnit.prototype.duration = function duration() {
	    return this._duration;
	  };

	  ChronoUnit.prototype.isDurationEstimated = function isDurationEstimated() {
	    return this.isDateBased() || this === ChronoUnit.FOREVER;
	  };

	  ChronoUnit.prototype.isDateBased = function isDateBased() {
	    return this.compareTo(ChronoUnit.DAYS) >= 0 && this !== ChronoUnit.FOREVER;
	  };

	  ChronoUnit.prototype.isTimeBased = function isTimeBased() {
	    return this.compareTo(ChronoUnit.DAYS) < 0;
	  };

	  ChronoUnit.prototype.isSupportedBy = function isSupportedBy(temporal) {
	    if (this === ChronoUnit.FOREVER) {
	      return false;
	    }

	    try {
	      temporal.plus(1, this);
	      return true;
	    } catch (e) {
	      try {
	        temporal.plus(-1, this);
	        return true;
	      } catch (e2) {
	        return false;
	      }
	    }
	  };

	  ChronoUnit.prototype.addTo = function addTo(temporal, amount) {
	    return temporal.plus(amount, this);
	  };

	  ChronoUnit.prototype.between = function between(temporal1, temporal2) {
	    return temporal1.until(temporal2, this);
	  };

	  ChronoUnit.prototype.toString = function toString() {
	    return this._name;
	  };

	  ChronoUnit.prototype.compareTo = function compareTo(other) {
	    return this.duration().compareTo(other.duration());
	  };

	  return ChronoUnit;
	}(_TemporalUnit2.TemporalUnit);

	function _init() {
	  ChronoUnit.NANOS = new ChronoUnit('Nanos', _Duration.Duration.ofNanos(1));

	  ChronoUnit.MICROS = new ChronoUnit('Micros', _Duration.Duration.ofNanos(1000));

	  ChronoUnit.MILLIS = new ChronoUnit('Millis', _Duration.Duration.ofNanos(1000000));

	  ChronoUnit.SECONDS = new ChronoUnit('Seconds', _Duration.Duration.ofSeconds(1));

	  ChronoUnit.MINUTES = new ChronoUnit('Minutes', _Duration.Duration.ofSeconds(60));

	  ChronoUnit.HOURS = new ChronoUnit('Hours', _Duration.Duration.ofSeconds(3600));

	  ChronoUnit.HALF_DAYS = new ChronoUnit('HalfDays', _Duration.Duration.ofSeconds(43200));

	  ChronoUnit.DAYS = new ChronoUnit('Days', _Duration.Duration.ofSeconds(86400));

	  ChronoUnit.WEEKS = new ChronoUnit('Weeks', _Duration.Duration.ofSeconds(7 * 86400));

	  ChronoUnit.MONTHS = new ChronoUnit('Months', _Duration.Duration.ofSeconds(31556952 / 12));

	  ChronoUnit.YEARS = new ChronoUnit('Years', _Duration.Duration.ofSeconds(31556952));

	  ChronoUnit.DECADES = new ChronoUnit('Decades', _Duration.Duration.ofSeconds(31556952 * 10));

	  ChronoUnit.CENTURIES = new ChronoUnit('Centuries', _Duration.Duration.ofSeconds(31556952 * 100));

	  ChronoUnit.MILLENNIA = new ChronoUnit('Millennia', _Duration.Duration.ofSeconds(31556952 * 1000));

	  ChronoUnit.ERAS = new ChronoUnit('Eras', _Duration.Duration.ofSeconds(31556952 * (_YearConstants.YearConstants.MAX_VALUE + 1)));

	  ChronoUnit.FOREVER = new ChronoUnit('Forever', _Duration.Duration.ofSeconds(_MathUtil.MathUtil.MAX_SAFE_INTEGER, 999999999));
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Duration = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalAmount2 = __webpack_require__(15);

	var _LocalTime = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Duration = exports.Duration = function (_TemporalAmount) {
	    _inherits(Duration, _TemporalAmount);

	    function Duration(seconds, nanos) {
	        _classCallCheck(this, Duration);

	        var _this = _possibleConstructorReturn(this, _TemporalAmount.call(this));

	        _this._seconds = seconds;
	        _this._nanos = nanos;
	        return _this;
	    }

	    Duration.ofDays = function ofDays(days) {
	        return Duration._create(_MathUtil.MathUtil.safeMultiply(days, _LocalTime.LocalTime.SECONDS_PER_DAY), 0);
	    };

	    Duration.ofHours = function ofHours(hours) {
	        return Duration._create(_MathUtil.MathUtil.safeMultiply(hours, _LocalTime.LocalTime.SECONDS_PER_HOUR), 0);
	    };

	    Duration.ofMinutes = function ofMinutes(minutes) {
	        return Duration._create(_MathUtil.MathUtil.safeMultiply(minutes, _LocalTime.LocalTime.SECONDS_PER_MINUTE), 0);
	    };

	    Duration.ofSeconds = function ofSeconds(seconds) {
	        var nanoAdjustment = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	        var secs = _MathUtil.MathUtil.safeAdd(seconds, _MathUtil.MathUtil.floorDiv(nanoAdjustment, _LocalTime.LocalTime.NANOS_PER_SECOND));
	        var nos = _MathUtil.MathUtil.floorMod(nanoAdjustment, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        return Duration._create(secs, nos);
	    };

	    Duration.ofMillis = function ofMillis(millis) {
	        var secs = _MathUtil.MathUtil.intDiv(millis, 1000);
	        var mos = _MathUtil.MathUtil.intMod(millis, 1000);
	        if (mos < 0) {
	            mos += 1000;
	            secs--;
	        }
	        return Duration._create(secs, mos * 1000000);
	    };

	    Duration.ofNanos = function ofNanos(nanos) {
	        var secs = _MathUtil.MathUtil.intDiv(nanos, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        var nos = _MathUtil.MathUtil.intMod(nanos, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        if (nos < 0) {
	            nos += _LocalTime.LocalTime.NANOS_PER_SECOND;
	            secs--;
	        }
	        return this._create(secs, nos);
	    };

	    Duration.of = function of(amount, unit) {
	        return Duration.ZERO.plus(amount, unit);
	    };

	    Duration.from = function from(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        var duration = Duration.ZERO;
	        amount.units().forEach(function (unit) {
	            duration = duration.plus(amount.get(unit), unit);
	        });
	        return duration;
	    };

	    Duration.between = function between(startInclusive, endExclusive) {
	        (0, _assert.requireNonNull)(startInclusive, 'startInclusive');
	        (0, _assert.requireNonNull)(endExclusive, 'endExclusive');
	        var secs = startInclusive.until(endExclusive, _ChronoUnit.ChronoUnit.SECONDS);
	        var nanos = 0;
	        if (startInclusive.isSupported(_ChronoField.ChronoField.NANO_OF_SECOND) && endExclusive.isSupported(_ChronoField.ChronoField.NANO_OF_SECOND)) {
	            try {
	                var startNos = startInclusive.getLong(_ChronoField.ChronoField.NANO_OF_SECOND);
	                nanos = endExclusive.getLong(_ChronoField.ChronoField.NANO_OF_SECOND) - startNos;
	                if (secs > 0 && nanos < 0) {
	                    nanos += _LocalTime.LocalTime.NANOS_PER_SECOND;
	                } else if (secs < 0 && nanos > 0) {
	                    nanos -= _LocalTime.LocalTime.NANOS_PER_SECOND;
	                } else if (secs === 0 && nanos !== 0) {
	                    var adjustedEnd = endExclusive.with(_ChronoField.ChronoField.NANO_OF_SECOND, startNos);
	                    secs = startInclusive.until(adjustedEnd, _ChronoUnit.ChronoUnit.SECONDS);
	                }
	            } catch (e) {}
	        }
	        return this.ofSeconds(secs, nanos);
	    };

	    Duration.parse = function parse(text) {
	        (0, _assert.requireNonNull)(text, 'text');

	        var PATTERN = new RegExp('([-+]?)P(?:([-+]?[0-9]+)D)?(T(?:([-+]?[0-9]+)H)?(?:([-+]?[0-9]+)M)?(?:([-+]?[0-9]+)(?:[.,]([0-9]{0,9}))?S)?)?', 'i');
	        var matches = PATTERN.exec(text);
	        if (matches !== null) {
	            if ('T' === matches[3] === false) {
	                var negate = '-' === matches[1];
	                var dayMatch = matches[2];
	                var hourMatch = matches[4];
	                var minuteMatch = matches[5];
	                var secondMatch = matches[6];
	                var fractionMatch = matches[7];
	                if (dayMatch != null || hourMatch != null || minuteMatch != null || secondMatch != null) {
	                    var daysAsSecs = Duration._parseNumber(text, dayMatch, _LocalTime.LocalTime.SECONDS_PER_DAY, 'days');
	                    var hoursAsSecs = Duration._parseNumber(text, hourMatch, _LocalTime.LocalTime.SECONDS_PER_HOUR, 'hours');
	                    var minsAsSecs = Duration._parseNumber(text, minuteMatch, _LocalTime.LocalTime.SECONDS_PER_MINUTE, 'minutes');
	                    var seconds = Duration._parseNumber(text, secondMatch, 1, 'seconds');
	                    var negativeSecs = secondMatch != null && secondMatch.charAt(0) === '-';
	                    var nanos = Duration._parseFraction(text, fractionMatch, negativeSecs ? -1 : 1);
	                    try {
	                        return Duration._create(negate, daysAsSecs, hoursAsSecs, minsAsSecs, seconds, nanos);
	                    } catch (ex) {
	                        throw new _errors.DateTimeParseException('Text cannot be parsed to a Duration: overflow', text, 0, ex);
	                    }
	                }
	            }
	        }
	        throw new _errors.DateTimeParseException('Text cannot be parsed to a Duration', text, 0);
	    };

	    Duration._parseNumber = function _parseNumber(text, parsed, multiplier, errorText) {
	        if (parsed == null) {
	            return 0;
	        }
	        try {
	            if (parsed[0] === '+') {
	                parsed = parsed.substring(1);
	            }
	            var val = parseFloat(parsed);
	            return _MathUtil.MathUtil.safeMultiply(val, multiplier);
	        } catch (ex) {
	            throw new _errors.DateTimeParseException('Text cannot be parsed to a Duration: ' + errorText, text, 0, ex);
	        }
	    };

	    Duration._parseFraction = function _parseFraction(text, parsed, negate) {
	        if (parsed == null || parsed.length === 0) {
	            return 0;
	        }
	        try {
	            parsed = (parsed + '000000000').substring(0, 9);
	            return parseFloat(parsed) * negate;
	        } catch (ex) {
	            throw new _errors.DateTimeParseException('Text cannot be parsed to a Duration: fraction', text, 0, ex);
	        }
	    };

	    Duration._create = function _create() {
	        if (arguments.length <= 2) {
	            return Duration._createSecondsNanos(arguments[0], arguments[1]);
	        } else {
	            return Duration._createNegateDaysHoursMinutesSecondsNanos(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	        }
	    };

	    Duration._createNegateDaysHoursMinutesSecondsNanos = function _createNegateDaysHoursMinutesSecondsNanos(negate, daysAsSecs, hoursAsSecs, minsAsSecs, secs, nanos) {
	        var seconds = _MathUtil.MathUtil.safeAdd(daysAsSecs, _MathUtil.MathUtil.safeAdd(hoursAsSecs, _MathUtil.MathUtil.safeAdd(minsAsSecs, secs)));
	        if (negate) {
	            return Duration.ofSeconds(seconds, nanos).negated();
	        }
	        return Duration.ofSeconds(seconds, nanos);
	    };

	    Duration._createSecondsNanos = function _createSecondsNanos() {
	        var seconds = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var nanoAdjustment = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	        if ((seconds | nanoAdjustment) === 0) {
	            return Duration.ZERO;
	        }
	        return new Duration(seconds, nanoAdjustment);
	    };

	    Duration.prototype.get = function get(unit) {
	        if (unit === _ChronoUnit.ChronoUnit.SECONDS) {
	            return this._seconds;
	        } else if (unit === _ChronoUnit.ChronoUnit.NANOS) {
	            return this._nanos;
	        } else {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	    };

	    Duration.prototype.units = function units() {
	        return [_ChronoUnit.ChronoUnit.SECONDS, _ChronoUnit.ChronoUnit.NANOS];
	    };

	    Duration.prototype.isZero = function isZero() {
	        return (this._seconds | this._nanos) === 0;
	    };

	    Duration.prototype.isNegative = function isNegative() {
	        return this._seconds < 0;
	    };

	    Duration.prototype.seconds = function seconds() {
	        return this._seconds;
	    };

	    Duration.prototype.nano = function nano() {
	        return this._nanos;
	    };

	    Duration.prototype.withSeconds = function withSeconds(seconds) {
	        return Duration._create(seconds, this._nanos);
	    };

	    Duration.prototype.withNanos = function withNanos(nanoOfSecond) {
	        _ChronoField.ChronoField.NANO_OF_SECOND.checkValidIntValue(nanoOfSecond);
	        return Duration._create(this._seconds, nanoOfSecond);
	    };

	    Duration.prototype.plusDuration = function plusDuration(duration) {
	        (0, _assert.requireNonNull)(duration, 'duration');
	        return this.plus(duration.seconds(), duration.nano());
	    };

	    Duration.prototype.plus = function plus() {
	        if (arguments.length === 1) {
	            return this.plusDuration.apply(this, arguments);
	        } else if (arguments.length === 2 && arguments[1] instanceof _ChronoUnit.ChronoUnit) {
	            return this.plusAmountUnit.apply(this, arguments);
	        } else {
	            return this.plusSecondsNanos.apply(this, arguments);
	        }
	    };

	    Duration.prototype.plusAmountUnit = function plusAmountUnit(amountToAdd, unit) {
	        (0, _assert.requireNonNull)(amountToAdd, 'amountToAdd');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        if (unit === _ChronoUnit.ChronoUnit.DAYS) {
	            return this.plusSecondsNanos(_MathUtil.MathUtil.safeMultiply(amountToAdd, _LocalTime.LocalTime.SECONDS_PER_DAY), 0);
	        }
	        if (unit.isDurationEstimated()) {
	            throw new _errors.UnsupportedTemporalTypeException('Unit must not have an estimated duration');
	        }
	        if (amountToAdd === 0) {
	            return this;
	        }
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.NANOS:
	                    return this.plusNanos(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MICROS:
	                    return this.plusSecondsNanos(_MathUtil.MathUtil.intDiv(amountToAdd, 1000000 * 1000) * 1000, _MathUtil.MathUtil.intMod(amountToAdd, 1000000 * 1000) * 1000);
	                case _ChronoUnit.ChronoUnit.MILLIS:
	                    return this.plusMillis(amountToAdd);
	                case _ChronoUnit.ChronoUnit.SECONDS:
	                    return this.plusSeconds(amountToAdd);
	            }
	            return this.plusSecondsNanos(_MathUtil.MathUtil.safeMultiply(unit.duration().seconds(), amountToAdd), 0);
	        }
	        var duration = unit.duration().multipliedBy(amountToAdd);
	        return this.plusSecondsNanos(duration.seconds(), duration.nano());
	    };

	    Duration.prototype.plusDays = function plusDays(daysToAdd) {
	        return this.plusSecondsNanos(_MathUtil.MathUtil.safeMultiply(daysToAdd, _LocalTime.LocalTime.SECONDS_PER_DAY), 0);
	    };

	    Duration.prototype.plusHours = function plusHours(hoursToAdd) {
	        return this.plusSecondsNanos(_MathUtil.MathUtil.safeMultiply(hoursToAdd, _LocalTime.LocalTime.SECONDS_PER_HOUR), 0);
	    };

	    Duration.prototype.plusMinutes = function plusMinutes(minutesToAdd) {
	        return this.plusSecondsNanos(_MathUtil.MathUtil.safeMultiply(minutesToAdd, _LocalTime.LocalTime.SECONDS_PER_MINUTE), 0);
	    };

	    Duration.prototype.plusSeconds = function plusSeconds(secondsToAdd) {
	        return this.plusSecondsNanos(secondsToAdd, 0);
	    };

	    Duration.prototype.plusMillis = function plusMillis(millisToAdd) {
	        return this.plusSecondsNanos(_MathUtil.MathUtil.intDiv(millisToAdd, 1000), _MathUtil.MathUtil.intMod(millisToAdd, 1000) * 1000000);
	    };

	    Duration.prototype.plusNanos = function plusNanos(nanosToAdd) {
	        return this.plusSecondsNanos(0, nanosToAdd);
	    };

	    Duration.prototype.plusSecondsNanos = function plusSecondsNanos(secondsToAdd, nanosToAdd) {
	        (0, _assert.requireNonNull)(secondsToAdd, 'secondsToAdd');
	        (0, _assert.requireNonNull)(nanosToAdd, 'nanosToAdd');
	        if ((secondsToAdd | nanosToAdd) === 0) {
	            return this;
	        }
	        var epochSec = _MathUtil.MathUtil.safeAdd(this._seconds, secondsToAdd);
	        epochSec = _MathUtil.MathUtil.safeAdd(epochSec, _MathUtil.MathUtil.intDiv(nanosToAdd, _LocalTime.LocalTime.NANOS_PER_SECOND));
	        nanosToAdd = _MathUtil.MathUtil.intMod(nanosToAdd, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        var nanoAdjustment = _MathUtil.MathUtil.safeAdd(this._nanos, nanosToAdd);
	        return Duration.ofSeconds(epochSec, nanoAdjustment);
	    };

	    Duration.prototype.minus = function minus() {
	        if (arguments.length === 1) {
	            return this.minusDuration.apply(this, arguments);
	        } else {
	            return this.minusAmountUnit.apply(this, arguments);
	        }
	    };

	    Duration.prototype.minusDuration = function minusDuration(duration) {
	        (0, _assert.requireNonNull)(duration, 'duration');
	        var secsToSubtract = duration.seconds();
	        var nanosToSubtract = duration.nano();
	        if (secsToSubtract === _MathUtil.MIN_SAFE_INTEGER) {
	            return this.plus(_MathUtil.MAX_SAFE_INTEGER, -nanosToSubtract).plus(1, 0);
	        }
	        return this.plus(-secsToSubtract, -nanosToSubtract);
	    };

	    Duration.prototype.minusAmountUnit = function minusAmountUnit(amountToSubtract, unit) {
	        (0, _assert.requireNonNull)(amountToSubtract, 'amountToSubtract');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        return amountToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusAmountUnit(_MathUtil.MAX_SAFE_INTEGER, unit).plus(1, unit) : this.plusAmountUnit(-amountToSubtract, unit);
	    };

	    Duration.prototype.minusDays = function minusDays(daysToSubtract) {
	        return daysToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusDays(_MathUtil.MAX_SAFE_INTEGER).plusDays(1) : this.plusDays(-daysToSubtract);
	    };

	    Duration.prototype.minusHours = function minusHours(hoursToSubtract) {
	        return hoursToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusHours(_MathUtil.MAX_SAFE_INTEGER).plusHours(1) : this.plusHours(-hoursToSubtract);
	    };

	    Duration.prototype.minusMinutes = function minusMinutes(minutesToSubtract) {
	        return minutesToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusMinutes(_MathUtil.MAX_SAFE_INTEGER).plusMinutes(1) : this.plusMinutes(-minutesToSubtract);
	    };

	    Duration.prototype.minusSeconds = function minusSeconds(secondsToSubtract) {
	        return secondsToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusSeconds(_MathUtil.MAX_SAFE_INTEGER).plusSeconds(1) : this.plusSeconds(-secondsToSubtract);
	    };

	    Duration.prototype.minusMillis = function minusMillis(millisToSubtract) {
	        return millisToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusMillis(_MathUtil.MAX_SAFE_INTEGER).plusMillis(1) : this.plusMillis(-millisToSubtract);
	    };

	    Duration.prototype.minusNanos = function minusNanos(nanosToSubtract) {
	        return nanosToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusNanos(_MathUtil.MAX_SAFE_INTEGER).plusNanos(1) : this.plusNanos(-nanosToSubtract);
	    };

	    Duration.prototype.multipliedBy = function multipliedBy(multiplicand) {
	        if (multiplicand === 0) {
	            return Duration.ZERO;
	        }
	        if (multiplicand === 1) {
	            return this;
	        }
	        var secs = _MathUtil.MathUtil.safeMultiply(this._seconds, multiplicand);
	        var nos = _MathUtil.MathUtil.safeMultiply(this._nanos, multiplicand);
	        secs = secs + _MathUtil.MathUtil.intDiv(nos, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        nos = _MathUtil.MathUtil.intMod(nos, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        return Duration.ofSeconds(secs, nos);
	    };

	    Duration.prototype.dividedBy = function dividedBy(divisor) {
	        if (divisor === 0) {
	            throw new _errors.ArithmeticException('Cannot divide by zero');
	        }
	        if (divisor === 1) {
	            return this;
	        }
	        var secs = _MathUtil.MathUtil.intDiv(this._seconds, divisor);
	        var secsMod = _MathUtil.MathUtil.roundDown((this._seconds / divisor - secs) * _LocalTime.LocalTime.NANOS_PER_SECOND);
	        var nos = _MathUtil.MathUtil.intDiv(this._nanos, divisor);
	        nos = secsMod + nos;
	        return Duration.ofSeconds(secs, nos);
	    };

	    Duration.prototype.negated = function negated() {
	        return this.multipliedBy(-1);
	    };

	    Duration.prototype.abs = function abs() {
	        return this.isNegative() ? this.negated() : this;
	    };

	    Duration.prototype.addTo = function addTo(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (this._seconds !== 0) {
	            temporal = temporal.plus(this._seconds, _ChronoUnit.ChronoUnit.SECONDS);
	        }
	        if (this._nanos !== 0) {
	            temporal = temporal.plus(this._nanos, _ChronoUnit.ChronoUnit.NANOS);
	        }
	        return temporal;
	    };

	    Duration.prototype.subtractFrom = function subtractFrom(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (this._seconds !== 0) {
	            temporal = temporal.minus(this._seconds, _ChronoUnit.ChronoUnit.SECONDS);
	        }
	        if (this._nanos !== 0) {
	            temporal = temporal.minus(this._nanos, _ChronoUnit.ChronoUnit.NANOS);
	        }
	        return temporal;
	    };

	    Duration.prototype.toDays = function toDays() {
	        return _MathUtil.MathUtil.intDiv(this._seconds, _LocalTime.LocalTime.SECONDS_PER_DAY);
	    };

	    Duration.prototype.toHours = function toHours() {
	        return _MathUtil.MathUtil.intDiv(this._seconds, _LocalTime.LocalTime.SECONDS_PER_HOUR);
	    };

	    Duration.prototype.toMinutes = function toMinutes() {
	        return _MathUtil.MathUtil.intDiv(this._seconds, _LocalTime.LocalTime.SECONDS_PER_MINUTE);
	    };

	    Duration.prototype.toMillis = function toMillis() {
	        var millis = Math.round(_MathUtil.MathUtil.safeMultiply(this._seconds, 1000));
	        millis = _MathUtil.MathUtil.safeAdd(millis, _MathUtil.MathUtil.intDiv(this._nanos, 1000000));
	        return millis;
	    };

	    Duration.prototype.toNanos = function toNanos() {
	        var totalNanos = _MathUtil.MathUtil.safeMultiply(this._seconds, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        totalNanos = _MathUtil.MathUtil.safeAdd(totalNanos, this._nanos);
	        return totalNanos;
	    };

	    Duration.prototype.compareTo = function compareTo(otherDuration) {
	        (0, _assert.requireNonNull)(otherDuration, 'otherDuration');
	        (0, _assert.requireInstance)(otherDuration, Duration, 'otherDuration');
	        var cmp = _MathUtil.MathUtil.compareNumbers(this._seconds, otherDuration.seconds());
	        if (cmp !== 0) {
	            return cmp;
	        }
	        return this._nanos - otherDuration.nano();
	    };

	    Duration.prototype.equals = function equals(otherDuration) {
	        if (this === otherDuration) {
	            return true;
	        }
	        if (otherDuration instanceof Duration) {
	            return this.seconds() === otherDuration.seconds() && this.nano() === otherDuration.nano();
	        }
	        return false;
	    };

	    Duration.prototype.toString = function toString() {
	        if (this === Duration.ZERO) {
	            return 'PT0S';
	        }
	        var hours = _MathUtil.MathUtil.intDiv(this._seconds, _LocalTime.LocalTime.SECONDS_PER_HOUR);
	        var minutes = _MathUtil.MathUtil.intDiv(_MathUtil.MathUtil.intMod(this._seconds, _LocalTime.LocalTime.SECONDS_PER_HOUR), _LocalTime.LocalTime.SECONDS_PER_MINUTE);
	        var secs = _MathUtil.MathUtil.intMod(this._seconds, _LocalTime.LocalTime.SECONDS_PER_MINUTE);
	        var rval = 'PT';
	        if (hours !== 0) {
	            rval += hours + 'H';
	        }
	        if (minutes !== 0) {
	            rval += minutes + 'M';
	        }
	        if (secs === 0 && this._nanos === 0 && rval.length > 2) {
	            return rval;
	        }
	        if (secs < 0 && this._nanos > 0) {
	            if (secs === -1) {
	                rval += '-0';
	            } else {
	                rval += secs + 1;
	            }
	        } else {
	            rval += secs;
	        }
	        if (this._nanos > 0) {
	            rval += '.';
	            var nanoString = void 0;
	            if (secs < 0) {
	                nanoString = '' + (2 * _LocalTime.LocalTime.NANOS_PER_SECOND - this._nanos);
	            } else {
	                nanoString = '' + (_LocalTime.LocalTime.NANOS_PER_SECOND + this._nanos);
	            }

	            nanoString = nanoString.slice(1, nanoString.length);
	            rval += nanoString;
	            while (rval.charAt(rval.length - 1) === '0') {
	                rval = rval.slice(0, rval.length - 1);
	            }
	        }
	        rval += 'S';
	        return rval;
	    };

	    Duration.prototype.toJSON = function toJSON() {
	        return this.toString();
	    };

	    return Duration;
	}(_TemporalAmount2.TemporalAmount);

	function _init() {
	    Duration.ZERO = new Duration(0, 0);
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.TemporalAmount = undefined;

	var _assert = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var TemporalAmount = exports.TemporalAmount = function () {
	  function TemporalAmount() {
	    _classCallCheck(this, TemporalAmount);
	  }

	  TemporalAmount.prototype.get = function get(unit) {
	    (0, _assert.abstractMethodFail)('adjustInto');
	  };

	  TemporalAmount.prototype.getUnits = function getUnits() {
	    (0, _assert.abstractMethodFail)('adjustInto');
	  };

	  TemporalAmount.prototype.addTo = function addTo(temporal) {
	    (0, _assert.abstractMethodFail)('adjustInto');
	  };

	  TemporalAmount.prototype.subtractFrom = function subtractFrom(temporal) {
	    (0, _assert.abstractMethodFail)('adjustInto');
	  };

	  return TemporalAmount;
	}();

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports._init = _init;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
	 */

	var YearConstants = exports.YearConstants = function YearConstants() {
	  _classCallCheck(this, YearConstants);
	};

	function _init() {
	  YearConstants.MIN_VALUE = -999999;

	  YearConstants.MAX_VALUE = 999999;
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var TemporalUnit = exports.TemporalUnit = function TemporalUnit() {
	  _classCallCheck(this, TemporalUnit);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var TemporalField = exports.TemporalField = function TemporalField() {
	  _classCallCheck(this, TemporalField);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ValueRange = undefined;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var ValueRange = exports.ValueRange = function () {
	    function ValueRange(minSmallest, minLargest, maxSmallest, maxLargest) {
	        _classCallCheck(this, ValueRange);

	        (0, _assert.assert)(!(minSmallest > minLargest), 'Smallest minimum value \'' + minSmallest + '\' must be less than largest minimum value \'' + minLargest + '\'', _errors.IllegalArgumentException);
	        (0, _assert.assert)(!(maxSmallest > maxLargest), 'Smallest maximum value \'' + maxSmallest + '\' must be less than largest maximum value \'' + maxLargest + '\'', _errors.IllegalArgumentException);
	        (0, _assert.assert)(!(minLargest > maxLargest), 'Minimum value \'' + minLargest + '\' must be less than maximum value \'' + maxLargest + '\'', _errors.IllegalArgumentException);

	        this._minSmallest = minSmallest;
	        this._minLargest = minLargest;
	        this._maxLargest = maxLargest;
	        this._maxSmallest = maxSmallest;
	    }

	    ValueRange.prototype.isFixed = function isFixed() {
	        return this._minSmallest === this._minLargest && this._maxSmallest === this._maxLargest;
	    };

	    ValueRange.prototype.minimum = function minimum() {
	        return this._minSmallest;
	    };

	    ValueRange.prototype.largestMinimum = function largestMinimum() {
	        return this._minLargest;
	    };

	    ValueRange.prototype.maximum = function maximum() {
	        return this._maxLargest;
	    };

	    ValueRange.prototype.smallestMaximum = function smallestMaximum() {
	        return this._maxSmallest;
	    };

	    ValueRange.prototype.isValidValue = function isValidValue(value) {
	        return this.minimum() <= value && value <= this.maximum();
	    };

	    ValueRange.prototype.checkValidValue = function checkValidValue(value, field) {
	        var msg;
	        if (!this.isValidValue(value)) {
	            if (field != null) {
	                msg = 'Invalid value for ' + field + ' (valid values ' + this.toString() + '): ' + value;
	            } else {
	                msg = 'Invalid value (valid values ' + this.toString() + '): ' + value;
	            }
	            return (0, _assert.assert)(false, msg, _errors.DateTimeException);
	        }
	    };

	    ValueRange.prototype.checkValidIntValue = function checkValidIntValue(value, field) {
	        if (this.isValidIntValue(value) === false) {
	            throw new _errors.DateTimeException('Invalid int value for ' + field + ': ' + value);
	        }
	        return value;
	    };

	    ValueRange.prototype.isValidIntValue = function isValidIntValue(value) {
	        return this.isIntValue() && this.isValidValue(value);
	    };

	    ValueRange.prototype.isIntValue = function isIntValue() {
	        return this.minimum() >= _MathUtil.MathUtil.MIN_SAFE_INTEGER && this.maximum() <= _MathUtil.MathUtil.MAX_SAFE_INTEGER;
	    };

	    ValueRange.prototype.equals = function equals(other) {
	        if (other === this) {
	            return true;
	        }
	        if (other instanceof ValueRange) {
	            return this._minSmallest === other._minSmallest && this._minLargest === other._minLargest && this._maxSmallest === other._maxSmallest && this._maxLargest === other._maxLargest;
	        }
	        return false;
	    };

	    ValueRange.prototype.hashCode = function hashCode() {
	        var hash = this._minSmallest + this._minLargest << 16 + this._minLargest >> 48 + this._maxSmallest << 32 + this._maxSmallest >> 32 + this._maxLargest << 48 + this._maxLargest >> 16;
	        return hash ^ hash >>> 32;
	    };

	    ValueRange.prototype.toString = function toString() {
	        var str = this.minimum() + (this.minimum() !== this.largestMinimum() ? '/' + this.largestMinimum() : '');
	        str += ' - ';
	        str += this.smallestMaximum() + (this.smallestMaximum() !== this.maximum() ? '/' + this.maximum() : '');
	        return str;
	    };

	    ValueRange.of = function of() {
	        if (arguments.length === 2) {
	            return new ValueRange(arguments[0], arguments[0], arguments[1], arguments[1]);
	        } else if (arguments.length === 3) {
	            return new ValueRange(arguments[0], arguments[0], arguments[1], arguments[2]);
	        } else if (arguments.length === 4) {
	            return new ValueRange(arguments[0], arguments[1], arguments[2], arguments[3]);
	        } else {
	            return (0, _assert.assert)(false, 'Invalid number of arguments ' + arguments.length, _errors.IllegalArgumentException);
	        }
	    };

	    return ValueRange;
	}();

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;exports.DateTimeFormatterBuilder=undefined;exports._init=_init;var _assert=__webpack_require__(2);var _errors=__webpack_require__(3);var _MathUtil=__webpack_require__(6);var _Enum2=__webpack_require__(10);var _ZoneIdFactory=__webpack_require__(21);var _LocalDate=__webpack_require__(8);var _LocalDateTime=__webpack_require__(7);var _ZoneOffset=__webpack_require__(23);var _ZoneId=__webpack_require__(24);var _ChronoLocalDate=__webpack_require__(30);var _IsoChronology=__webpack_require__(9);var _ChronoField=__webpack_require__(12);var _IsoFields=__webpack_require__(44);var _TemporalQueries=__webpack_require__(25);var _DateTimeFormatter=__webpack_require__(31);var _DecimalStyle=__webpack_require__(46);var _SignStyle=__webpack_require__(41);var _TextStyle=__webpack_require__(47);var _ResolverStyle=__webpack_require__(36);function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}} /**
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */var MAX_WIDTH=15;var DateTimeFormatterBuilder=exports.DateTimeFormatterBuilder=function(){function DateTimeFormatterBuilder(){var parent=arguments.length<=0||arguments[0]===undefined?null:arguments[0];var optional=arguments.length<=1||arguments[1]===undefined?false:arguments[1];_classCallCheck(this,DateTimeFormatterBuilder);this._active=this;this._parent=parent;this._printerParsers=[];this._optional=optional;this._padNextWidth=0;this._padNextChar=null;this._valueParserIndex=-1;}DateTimeFormatterBuilder.prototype.parseCaseSensitive=function parseCaseSensitive(){this._appendInternalPrinterParser(SettingsParser.SENSITIVE);return this;};DateTimeFormatterBuilder.prototype.parseCaseInsensitive=function parseCaseInsensitive(){this._appendInternalPrinterParser(SettingsParser.INSENSITIVE);return this;};DateTimeFormatterBuilder.prototype.parseStrict=function parseStrict(){this._appendInternalPrinterParser(SettingsParser.STRICT);return this;};DateTimeFormatterBuilder.prototype.parseLenient=function parseLenient(){this._appendInternalPrinterParser(SettingsParser.LENIENT);return this;};DateTimeFormatterBuilder.prototype.appendValue=function appendValue(){if(arguments.length===1){return this._appendValue1.apply(this,arguments);}else if(arguments.length===2){return this._appendValue2.apply(this,arguments);}else {return this._appendValue4.apply(this,arguments);}};DateTimeFormatterBuilder.prototype._appendValue1=function _appendValue1(field){(0,_assert.assert)(field!=null);this._appendValuePrinterParser(new NumberPrinterParser(field,1,MAX_WIDTH,_SignStyle.SignStyle.NORMAL));return this;};DateTimeFormatterBuilder.prototype._appendValue2=function _appendValue2(field,width){(0,_assert.assert)(field!=null);if(width<1||width>MAX_WIDTH){throw new _errors.IllegalArgumentException('The width must be from 1 to '+MAX_WIDTH+' inclusive but was '+width);}var pp=new NumberPrinterParser(field,width,width,_SignStyle.SignStyle.NOT_NEGATIVE);this._appendValuePrinterParser(pp);return this;};DateTimeFormatterBuilder.prototype._appendValue4=function _appendValue4(field,minWidth,maxWidth,signStyle){(0,_assert.assert)(field!=null);if(minWidth===maxWidth&&signStyle===_SignStyle.SignStyle.NOT_NEGATIVE){return this._appendValue2(field,maxWidth);}if(minWidth<1||minWidth>MAX_WIDTH){throw new _errors.IllegalArgumentException('The minimum width must be from 1 to '+MAX_WIDTH+' inclusive but was '+minWidth);}if(maxWidth<1||maxWidth>MAX_WIDTH){throw new _errors.IllegalArgumentException('The minimum width must be from 1 to '+MAX_WIDTH+' inclusive but was '+maxWidth);}if(maxWidth<minWidth){throw new _errors.IllegalArgumentException('The maximum width must exceed or equal the minimum width but '+maxWidth+' < '+minWidth);}var pp=new NumberPrinterParser(field,minWidth,maxWidth,signStyle);this._appendValuePrinterParser(pp);return this;};DateTimeFormatterBuilder.prototype.appendValueReduced=function appendValueReduced(){if(arguments.length===4&&arguments[3] instanceof _ChronoLocalDate.ChronoLocalDate){return this._appendValueReducedFieldWidthMaxWidthBaseDate.apply(this,arguments);}else {return this._appendValueReducedFieldWidthMaxWidthBaseValue.apply(this,arguments);}};DateTimeFormatterBuilder.prototype._appendValueReducedFieldWidthMaxWidthBaseValue=function _appendValueReducedFieldWidthMaxWidthBaseValue(field,width,maxWidth,baseValue){(0,_assert.requireNonNull)(field,'field');var pp=new ReducedPrinterParser(field,width,maxWidth,baseValue,null);this._appendValuePrinterParser(pp);return this;};DateTimeFormatterBuilder.prototype._appendValueReducedFieldWidthMaxWidthBaseDate=function _appendValueReducedFieldWidthMaxWidthBaseDate(field,width,maxWidth,baseDate){(0,_assert.requireNonNull)(field,'field');(0,_assert.requireNonNull)(baseDate,'baseDate');(0,_assert.requireInstance)(baseDate,_ChronoLocalDate.ChronoLocalDate,'baseDate');var pp=new ReducedPrinterParser(field,width,maxWidth,0,baseDate);this._appendValuePrinterParser(pp);return this;};DateTimeFormatterBuilder.prototype._appendValuePrinterParser=function _appendValuePrinterParser(pp){(0,_assert.assert)(pp!=null);if(this._active._valueParserIndex>=0&&this._active._printerParsers[this._active._valueParserIndex] instanceof NumberPrinterParser){var activeValueParser=this._active._valueParserIndex;var basePP=this._active._printerParsers[activeValueParser];if(pp.minWidth()===pp.maxWidth()&&pp.signStyle()===_SignStyle.SignStyle.NOT_NEGATIVE){basePP=basePP.withSubsequentWidth(pp.maxWidth());this._appendInternal(pp.withFixedWidth());this._active._valueParserIndex=activeValueParser;}else {basePP=basePP.withFixedWidth();this._active._valueParserIndex=this._appendInternal(pp);}this._active._printerParsers[activeValueParser]=basePP;}else {this._active._valueParserIndex=this._appendInternal(pp);}return this;};DateTimeFormatterBuilder.prototype.appendFraction=function appendFraction(field,minWidth,maxWidth,decimalPoint){this._appendInternal(new FractionPrinterParser(field,minWidth,maxWidth,decimalPoint));return this;};DateTimeFormatterBuilder.prototype.appendInstant=function appendInstant(){var fractionalDigits=arguments.length<=0||arguments[0]===undefined?-2:arguments[0];if(fractionalDigits<-2||fractionalDigits>9){throw new _errors.IllegalArgumentException('Invalid fractional digits: '+fractionalDigits);}this._appendInternal(new InstantPrinterParser(fractionalDigits));return this;};DateTimeFormatterBuilder.prototype.appendOffsetId=function appendOffsetId(){this._appendInternal(OffsetIdPrinterParser.INSTANCE_ID);return this;};DateTimeFormatterBuilder.prototype.appendOffset=function appendOffset(pattern,noOffsetText){this._appendInternalPrinterParser(new OffsetIdPrinterParser(noOffsetText,pattern));return this;};DateTimeFormatterBuilder.prototype.appendZoneId=function appendZoneId(){this._appendInternal(new ZoneIdPrinterParser(_TemporalQueries.TemporalQueries.zoneId(),'ZoneId()'));return this;};DateTimeFormatterBuilder.prototype.appendPattern=function appendPattern(pattern){(0,_assert.requireNonNull)(pattern,'pattern');this._parsePattern(pattern);return this;};DateTimeFormatterBuilder.prototype._parsePattern=function _parsePattern(pattern){var FIELD_MAP={'G':_ChronoField.ChronoField.ERA,'y':_ChronoField.ChronoField.YEAR_OF_ERA,'u':_ChronoField.ChronoField.YEAR,'Q':_IsoFields.IsoFields.QUARTER_OF_YEAR,'q':_IsoFields.IsoFields.QUARTER_OF_YEAR,'M':_ChronoField.ChronoField.MONTH_OF_YEAR,'L':_ChronoField.ChronoField.MONTH_OF_YEAR,'D':_ChronoField.ChronoField.DAY_OF_YEAR,'d':_ChronoField.ChronoField.DAY_OF_MONTH,'F':_ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH,'E':_ChronoField.ChronoField.DAY_OF_WEEK,'c':_ChronoField.ChronoField.DAY_OF_WEEK,'e':_ChronoField.ChronoField.DAY_OF_WEEK,'a':_ChronoField.ChronoField.AMPM_OF_DAY,'H':_ChronoField.ChronoField.HOUR_OF_DAY,'k':_ChronoField.ChronoField.CLOCK_HOUR_OF_DAY,'K':_ChronoField.ChronoField.HOUR_OF_AMPM,'h':_ChronoField.ChronoField.CLOCK_HOUR_OF_AMPM,'m':_ChronoField.ChronoField.MINUTE_OF_HOUR,'s':_ChronoField.ChronoField.SECOND_OF_MINUTE,'S':_ChronoField.ChronoField.NANO_OF_SECOND,'A':_ChronoField.ChronoField.MILLI_OF_DAY,'n':_ChronoField.ChronoField.NANO_OF_SECOND,'N':_ChronoField.ChronoField.NANO_OF_DAY};for(var pos=0;pos<pattern.length;pos++){var cur=pattern.charAt(pos);if(cur>='A'&&cur<='Z'||cur>='a'&&cur<='z'){var start=pos++;for(;pos<pattern.length&&pattern.charAt(pos)===cur;pos++){}var count=pos-start;if(cur==='p'){var pad=0;if(pos<pattern.length){cur=pattern.charAt(pos);if(cur>='A'&&cur<='Z'||cur>='a'&&cur<='z'){pad=count;start=pos++;for(;pos<pattern.length&&pattern.charAt(pos)===cur;pos++){}count=pos-start;}}if(pad===0){throw new _errors.IllegalArgumentException('Pad letter \'p\' must be followed by valid pad pattern: '+pattern);}this.padNext(pad);}var field=FIELD_MAP[cur];if(field!=null){this._parseField(cur,count,field);}else if(cur==='z'){throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');if(count>4){throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}else if(count===4){this.appendZoneText(_TextStyle.TextStyle.FULL);}else {this.appendZoneText(_TextStyle.TextStyle.SHORT);}}else if(cur==='V'){if(count!==2){throw new _errors.IllegalArgumentException('Pattern letter count must be 2: '+cur);}this.appendZoneId();}else if(cur==='Z'){if(count<4){this.appendOffset('+HHMM','+0000');}else if(count===4){throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendLocalizedOffset(_TextStyle.TextStyle.FULL);}else if(count===5){this.appendOffset('+HH:MM:ss','Z');}else {throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}}else if(cur==='O'){throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');if(count===1){this.appendLocalizedOffset(_TextStyle.TextStyle.SHORT);}else if(count===4){this.appendLocalizedOffset(_TextStyle.TextStyle.FULL);}else {throw new _errors.IllegalArgumentException('Pattern letter count must be 1 or 4: '+cur);}}else if(cur==='X'){if(count>5){throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}this.appendOffset(OffsetIdPrinterParser.PATTERNS[count+(count===1?0:1)],'Z');}else if(cur==='x'){if(count>5){throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}var zero=count===1?'+00':count%2===0?'+0000':'+00:00';this.appendOffset(OffsetIdPrinterParser.PATTERNS[count+(count===1?0:1)],zero);}else if(cur==='W'){if(count>1){throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}this._appendInternal(new OffsetIdPrinterParser('W',count));}else if(cur==='w'){if(count>2){throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}this._appendInternal(new OffsetIdPrinterParser('w',count));}else if(cur==='Y'){this._appendInternal(new OffsetIdPrinterParser('Y',count));}else {throw new _errors.IllegalArgumentException('Unknown pattern letter: '+cur);}pos--;}else if(cur==='\''){var _start=pos++;for(;pos<pattern.length;pos++){if(pattern.charAt(pos)==='\''){if(pos+1<pattern.length&&pattern.charAt(pos+1)==='\''){pos++;}else {break;}}}if(pos>=pattern.length){throw new _errors.IllegalArgumentException('Pattern ends with an incomplete string literal: '+pattern);}var str=pattern.substring(_start+1,pos);if(str.length===0){this.appendLiteral('\'');}else {this.appendLiteral(str.replace('\'\'','\''));}}else if(cur==='['){this.optionalStart();}else if(cur===']'){if(this._active._parent===null){throw new _errors.IllegalArgumentException('Pattern invalid as it contains ] without previous [');}this.optionalEnd();}else if(cur==='{'||cur==='}'||cur==='#'){throw new _errors.IllegalArgumentException('Pattern includes reserved character: \''+cur+'\'');}else {this.appendLiteral(cur);}}};DateTimeFormatterBuilder.prototype._parseField=function _parseField(cur,count,field){switch(cur){case 'u':case 'y':if(count===2){this.appendValueReduced(field,2,2,ReducedPrinterParser.BASE_DATE);}else if(count<4){this.appendValue(field,count,MAX_WIDTH,_SignStyle.SignStyle.NORMAL);}else {this.appendValue(field,count,MAX_WIDTH,_SignStyle.SignStyle.EXCEEDS_PAD);}break;case 'M':case 'Q':switch(count){case 1:this.appendValue(field);break;case 2:this.appendValue(field,2);break;case 3:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.SHORT);break;case 4:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.FULL);break;case 5:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.NARROW);break;default:throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}break;case 'L':case 'q':switch(count){case 1:this.appendValue(field);break;case 2:this.appendValue(field,2);break;case 3:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.SHORT_STANDALONE);break;case 4:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.FULL_STANDALONE);break;case 5:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.NARROW_STANDALONE);break;default:throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}break;case 'e':switch(count){case 1:case 2:throw new _errors.IllegalArgumentException('Pattern using WeekFields not implemented yet!');break;case 3:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.SHORT);break;case 4:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.FULL);break;case 5:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.NARROW);break;default:throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}break;case 'c':switch(count){case 1:throw new _errors.IllegalArgumentException('Pattern using WeekFields not implemented yet!');break;case 2:throw new _errors.IllegalArgumentException('Invalid number of pattern letters: '+cur);case 3:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.SHORT_STANDALONE);break;case 4:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.FULL_STANDALONE);break;case 5:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.NARROW_STANDALONE);break;default:throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}break;case 'a':if(count===1){throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.SHORT);}else {throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}break;case 'E':case 'G':switch(count){case 1:case 2:case 3:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.SHORT);break;case 4:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.FULL);break;case 5:throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');this.appendText(field,_TextStyle.TextStyle.NARROW);break;default:throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}break;case 'S':this.appendFraction(_ChronoField.ChronoField.NANO_OF_SECOND,count,count,false);break;case 'F':if(count===1){this.appendValue(field);}else {throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}break;case 'd':case 'h':case 'H':case 'k':case 'K':case 'm':case 's':if(count===1){this.appendValue(field);}else if(count===2){this.appendValue(field,count);}else {throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}break;case 'D':if(count===1){this.appendValue(field);}else if(count<=3){this.appendValue(field,count);}else {throw new _errors.IllegalArgumentException('Too many pattern letters: '+cur);}break;default:if(count===1){this.appendValue(field);}else {this.appendValue(field,count);}break;}};DateTimeFormatterBuilder.prototype.padNext=function padNext(){if(arguments.length===1){return this._padNext1.apply(this,arguments);}else {return this._padNext2.apply(this,arguments);}};DateTimeFormatterBuilder.prototype._padNext1=function _padNext1(padWidth){return this._padNext2(padWidth,' ');};DateTimeFormatterBuilder.prototype._padNext2=function _padNext2(padWidth,padChar){if(padWidth<1){throw new _errors.IllegalArgumentException('The pad width must be at least one but was '+padWidth);}this._active._padNextWidth=padWidth;this._active._padNextChar=padChar;this._active._valueParserIndex=-1;return this;};DateTimeFormatterBuilder.prototype.optionalStart=function optionalStart(){this._active._valueParserIndex=-1;this._active=new DateTimeFormatterBuilder(this._active,true);return this;};DateTimeFormatterBuilder.prototype.optionalEnd=function optionalEnd(){if(this._active._parent==null){throw new _errors.IllegalStateException('Cannot call optionalEnd() as there was no previous call to optionalStart()');}if(this._active._printerParsers.length>0){var cpp=new CompositePrinterParser(this._active._printerParsers,this._active._optional);this._active=this._active._parent;this._appendInternal(cpp);}else {this._active=this._active._parent;}return this;};DateTimeFormatterBuilder.prototype._appendInternal=function _appendInternal(pp){(0,_assert.assert)(pp!=null);if(this._active._padNextWidth>0){if(pp!=null){pp=new PadPrinterParserDecorator(pp,this._active._padNextWidth,this._active._padNextChar);}this._active._padNextWidth=0;this._active._padNextChar=0;}this._active._printerParsers.push(pp);this._active._valueParserIndex=-1;return this._active._printerParsers.length-1;};DateTimeFormatterBuilder.prototype.appendLiteral=function appendLiteral(literal){(0,_assert.assert)(literal!=null);if(literal.length>0){if(literal.length===1){this._appendInternalPrinterParser(new CharLiteralPrinterParser(literal.charAt(0)));}else {this._appendInternalPrinterParser(new StringLiteralPrinterParser(literal));}}return this;};DateTimeFormatterBuilder.prototype._appendInternalPrinterParser=function _appendInternalPrinterParser(pp){(0,_assert.assert)(pp!=null);if(this._active._padNextWidth>0){if(pp!=null){pp=new PadPrinterParserDecorator(pp,this._active._padNextWidth,this._active._padNextChar);}this._active._padNextWidth=0;this._active._padNextChar=0;}this._active._printerParsers.push(pp);this._active._valueParserIndex=-1;return this._active._printerParsers.length-1;};DateTimeFormatterBuilder.prototype.append=function append(formatter){(0,_assert.requireNonNull)(formatter,'formatter');this._appendInternal(formatter.toPrinterParser(false));return this;};DateTimeFormatterBuilder.prototype.toFormatter=function toFormatter(){var resolverStyle=arguments.length<=0||arguments[0]===undefined?_ResolverStyle.ResolverStyle.SMART:arguments[0];while(this._active._parent!=null){this.optionalEnd();}var pp=new CompositePrinterParser(this._printerParsers,false);return new _DateTimeFormatter.DateTimeFormatter(pp,null,_DecimalStyle.DecimalStyle.STANDARD,resolverStyle,null,null,null);};return DateTimeFormatterBuilder;}();var EXCEED_POINTS=[0,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000];var CompositePrinterParser=function(){function CompositePrinterParser(printerParsers,optional){_classCallCheck(this,CompositePrinterParser);this._printerParsers=printerParsers;this._optional=optional;}CompositePrinterParser.prototype.withOptional=function withOptional(optional){if(optional===this._optional){return this;}return new CompositePrinterParser(this._printerParsers,optional);};CompositePrinterParser.prototype.print=function print(context,buf){var length=buf.length();if(this._optional){context.startOptional();}try{for(var i=0;i<this._printerParsers.length;i++){var pp=this._printerParsers[i];if(pp.print(context,buf)===false){buf.setLength(length);return true;}}}finally {if(this._optional){context.endOptional();}}return true;};CompositePrinterParser.prototype.parse=function parse(context,text,position){if(this._optional){context.startOptional();var pos=position;for(var i=0;i<this._printerParsers.length;i++){var pp=this._printerParsers[i];pos=pp.parse(context,text,pos);if(pos<0){context.endOptional(false);return position;}}context.endOptional(true);return pos;}else {for(var _i=0;_i<this._printerParsers.length;_i++){var _pp=this._printerParsers[_i];position=_pp.parse(context,text,position);if(position<0){break;}}return position;}};CompositePrinterParser.prototype.toString=function toString(){var buf='';if(this._printerParsers!=null){buf+=this._optional?'[':'(';for(var i=0;i<this._printerParsers.length;i++){var pp=this._printerParsers[i];buf+=pp.toString();}buf+=this._optional?']':')';}return buf;};return CompositePrinterParser;}();var PadPrinterParserDecorator=function(){function PadPrinterParserDecorator(printerParser,padWidth,padChar){_classCallCheck(this,PadPrinterParserDecorator);this._printerParser=printerParser;this._padWidth=padWidth;this._padChar=padChar;}PadPrinterParserDecorator.prototype.print=function print(context,buf){var preLen=buf.length();if(this._printerParser.print(context,buf)===false){return false;}var len=buf.length()-preLen;if(len>this._padWidth){throw new _errors.DateTimeException('Cannot print as output of '+len+' characters exceeds pad width of '+this._padWidth);}for(var i=0;i<this._padWidth-len;i++){buf.insert(preLen,this._padChar);}return true;};PadPrinterParserDecorator.prototype.parse=function parse(context,text,position){var strict=context.isStrict();var caseSensitive=context.isCaseSensitive();(0,_assert.assert)(!(position>text.length));(0,_assert.assert)(position>=0);if(position===text.length){return ~position;}var endPos=position+this._padWidth;if(endPos>text.length){if(strict){return ~position;}endPos=text.length;}var pos=position;while(pos<endPos&&(caseSensitive?text[pos]===this._padChar:context.charEquals(text[pos],this._padChar))){pos++;}text=text.substring(0,endPos);var resultPos=this._printerParser.parse(context,text,pos);if(resultPos!==endPos&&strict){return ~(position+pos);}return resultPos;};PadPrinterParserDecorator.prototype.toString=function toString(){return 'Pad('+this._printerParser+','+this._padWidth+(this._padChar===' '?')':',\''+this._padChar+'\')');};return PadPrinterParserDecorator;}();var SettingsParser=function(_Enum){_inherits(SettingsParser,_Enum);function SettingsParser(){_classCallCheck(this,SettingsParser);return _possibleConstructorReturn(this,_Enum.apply(this,arguments));}SettingsParser.prototype.print=function print(){return true;};SettingsParser.prototype.parse=function parse(context,text,position){switch(this){case SettingsParser.SENSITIVE:context.setCaseSensitive(true);break;case SettingsParser.INSENSITIVE:context.setCaseSensitive(false);break;case SettingsParser.STRICT:context.setStrict(true);break;case SettingsParser.LENIENT:context.setStrict(false);break;}return position;};SettingsParser.prototype.toString=function toString(){switch(this){case SettingsParser.SENSITIVE:return 'ParseCaseSensitive(true)';case SettingsParser.INSENSITIVE:return 'ParseCaseSensitive(false)';case SettingsParser.STRICT:return 'ParseStrict(true)';case SettingsParser.LENIENT:return 'ParseStrict(false)';}};return SettingsParser;}(_Enum2.Enum);SettingsParser.SENSITIVE=new SettingsParser('SENSITIVE');SettingsParser.INSENSITIVE=new SettingsParser('INSENSITIVE');SettingsParser.STRICT=new SettingsParser('STRICT');SettingsParser.LENIENT=new SettingsParser('LENIENT');var StringLiteralPrinterParser=function(){function StringLiteralPrinterParser(literal){_classCallCheck(this,StringLiteralPrinterParser);this._literal=literal;}StringLiteralPrinterParser.prototype.print=function print(context,buf){buf.append(this._literal);return true;};StringLiteralPrinterParser.prototype.parse=function parse(context,text,position){var length=text.length;(0,_assert.assert)(!(position>length||position<0));if(context.subSequenceEquals(text,position,this._literal,0,this._literal.length)===false){return ~position;}return position+this._literal.length;};StringLiteralPrinterParser.prototype.toString=function toString(){var converted=this._literal.replace("'","''");return '\''+converted+'\'';};return StringLiteralPrinterParser;}();var CharLiteralPrinterParser=function(){function CharLiteralPrinterParser(literal){_classCallCheck(this,CharLiteralPrinterParser);if(literal.length>1){throw new _errors.IllegalArgumentException('invalid literal, too long: "'+literal+'"');}this._literal=literal;}CharLiteralPrinterParser.prototype.print=function print(context,buf){buf.append(this._literal);return true;};CharLiteralPrinterParser.prototype.parse=function parse(context,text,position){var length=text.length;if(position===length){return ~position;}var ch=text.charAt(position);if(context.charEquals(this._literal,ch)===false){return ~position;}return position+this._literal.length;};CharLiteralPrinterParser.prototype.toString=function toString(){if(this._literal==='\''){return "''";}return "'"+this._literal+"'";};return CharLiteralPrinterParser;}();var NumberPrinterParser=function(){function NumberPrinterParser(field,minWidth,maxWidth,signStyle){var subsequentWidth=arguments.length<=4||arguments[4]===undefined?0:arguments[4];_classCallCheck(this,NumberPrinterParser);this._field=field;this._minWidth=minWidth;this._maxWidth=maxWidth;this._signStyle=signStyle;this._subsequentWidth=subsequentWidth;}NumberPrinterParser.prototype.field=function field(){return this._field;};NumberPrinterParser.prototype.minWidth=function minWidth(){return this._minWidth;};NumberPrinterParser.prototype.maxWidth=function maxWidth(){return this._maxWidth;};NumberPrinterParser.prototype.signStyle=function signStyle(){return this._signStyle;};NumberPrinterParser.prototype.withSubsequentWidth=function withSubsequentWidth(subsequentWidth){return new NumberPrinterParser(this._field,this._minWidth,this._maxWidth,this._signStyle,this._subsequentWidth+subsequentWidth);};NumberPrinterParser.prototype._isFixedWidth=function _isFixedWidth(){return this._subsequentWidth===-1||this._subsequentWidth>0&&this._minWidth===this._maxWidth&&this._signStyle===_SignStyle.SignStyle.NOT_NEGATIVE;};NumberPrinterParser.prototype.print=function print(context,buf){var value=context.getValue(this._field);if(value==null){return false;}var symbols=context.symbols();var str=''+Math.abs(value);if(str.length>this._maxWidth){throw new _errors.DateTimeException('Field '+this._field+' cannot be printed as the value '+value+' exceeds the maximum print width of '+this._maxWidth);}str=symbols.convertNumberToI18N(str);if(value>=0){switch(this._signStyle){case _SignStyle.SignStyle.EXCEEDS_PAD:if(this._minWidth<MAX_WIDTH&&value>=EXCEED_POINTS[this._minWidth]){buf.append(symbols.positiveSign());}break;case _SignStyle.SignStyle.ALWAYS:buf.append(symbols.positiveSign());break;}}else {switch(this._signStyle){case _SignStyle.SignStyle.NORMAL:case _SignStyle.SignStyle.EXCEEDS_PAD:case _SignStyle.SignStyle.ALWAYS:buf.append(symbols.negativeSign());break;case _SignStyle.SignStyle.NOT_NEGATIVE:throw new _errors.DateTimeException('Field '+this._field+' cannot be printed as the value '+value+' cannot be negative according to the SignStyle');}}for(var i=0;i<this._minWidth-str.length;i++){buf.append(symbols.zeroDigit());}buf.append(str);return true;};NumberPrinterParser.prototype.parse=function parse(context,text,position){var length=text.length;if(position===length){return ~position;}(0,_assert.assert)(position>=0&&position<length);var sign=text.charAt(position);var negative=false;var positive=false;if(sign===context.symbols().positiveSign()){if(this._signStyle.parse(true,context.isStrict(),this._minWidth===this._maxWidth)===false){return ~position;}positive=true;position++;}else if(sign===context.symbols().negativeSign()){if(this._signStyle.parse(false,context.isStrict(),this._minWidth===this._maxWidth)===false){return ~position;}negative=true;position++;}else {if(this._signStyle===_SignStyle.SignStyle.ALWAYS&&context.isStrict()){return ~position;}}var effMinWidth=context.isStrict()||this._isFixedWidth()?this._minWidth:1;var minEndPos=position+effMinWidth;if(minEndPos>length){return ~position;}var effMaxWidth=(context.isStrict()||this._isFixedWidth()?this._maxWidth:9)+Math.max(this._subsequentWidth,0);var total=0;var pos=position;for(var pass=0;pass<2;pass++){var maxEndPos=Math.min(pos+effMaxWidth,length);while(pos<maxEndPos){var ch=text.charAt(pos++);var digit=context.symbols().convertToDigit(ch);if(digit<0){pos--;if(pos<minEndPos){return ~position;}break;}if(pos-position>MAX_WIDTH){throw new _errors.ArithmeticException('number text exceeds length');}else {total=total*10+digit;}}if(this._subsequentWidth>0&&pass===0){var parseLen=pos-position;effMaxWidth=Math.max(effMinWidth,parseLen-this._subsequentWidth);pos=position;total=0;}else {break;}}if(negative){if(total===0&&context.isStrict()){return ~(position-1);}if(total!==0){total=-total;}}else if(this._signStyle===_SignStyle.SignStyle.EXCEEDS_PAD&&context.isStrict()){var _parseLen=pos-position;if(positive){if(_parseLen<=this._minWidth){return ~(position-1);}}else {if(_parseLen>this._minWidth){return ~position;}}}return this._setValue(context,total,position,pos);};NumberPrinterParser.prototype._setValue=function _setValue(context,value,errorPos,successPos){return context.setParsedField(this._field,value,errorPos,successPos);};NumberPrinterParser.prototype.toString=function toString(){if(this._minWidth===1&&this._maxWidth===MAX_WIDTH&&this._signStyle===_SignStyle.SignStyle.NORMAL){return 'Value('+this._field+')';}if(this._minWidth===this._maxWidth&&this._signStyle===_SignStyle.SignStyle.NOT_NEGATIVE){return 'Value('+this._field+','+this._minWidth+')';}return 'Value('+this._field+','+this._minWidth+','+this._maxWidth+','+this._signStyle+')';};return NumberPrinterParser;}();var ReducedPrinterParser=function(_NumberPrinterParser){_inherits(ReducedPrinterParser,_NumberPrinterParser);function ReducedPrinterParser(field,width,maxWidth,baseValue,baseDate){_classCallCheck(this,ReducedPrinterParser);var _this2=_possibleConstructorReturn(this,_NumberPrinterParser.call(this,field,width,maxWidth,_SignStyle.SignStyle.NOT_NEGATIVE));if(width<1||width>10){throw new _errors.IllegalArgumentException('The width must be from 1 to 10 inclusive but was '+width);}if(maxWidth<1||maxWidth>10){throw new _errors.IllegalArgumentException('The maxWidth must be from 1 to 10 inclusive but was '+maxWidth);}if(maxWidth<width){throw new _errors.IllegalArgumentException('The maxWidth must be greater than the width');}if(baseDate===null){if(field.range().isValidValue(baseValue)===false){throw new _errors.IllegalArgumentException('The base value must be within the range of the field');}if(baseValue+EXCEED_POINTS[width]>_MathUtil.MathUtil.MAX_SAFE_INTEGER){throw new _errors.DateTimeException('Unable to add printer-parser as the range exceeds the capacity of an int');}}_this2._baseValue=baseValue;_this2._baseDate=baseDate;return _this2;}ReducedPrinterParser.prototype.getValue=function getValue(context,value){var absValue=Math.abs(value);var baseValue=this._baseValue;if(this._baseDate!==null){context.temporal();var chrono=_IsoChronology.IsoChronology.INSTANCE;baseValue=chrono.date(this._baseDate).get(this._field);}if(value>=baseValue&&value<baseValue+EXCEED_POINTS[this._minWidth]){return absValue%EXCEED_POINTS[this._minWidth];}return absValue%EXCEED_POINTS[this._maxWidth];};ReducedPrinterParser.prototype.setValue=function setValue(context,value,errorPos,successPos){var baseValue=this._baseValue;if(this._baseDate!=null){var chrono=context.getEffectiveChronology();baseValue=chrono.date(this._baseDate).get(this._field);context.addChronologyChangedParser(this,value,errorPos,successPos);}var parseLen=successPos-errorPos;if(parseLen===this._minWidth&&value>=0){var range=EXCEED_POINTS[this._minWidth];var lastPart=baseValue%range;var basePart=baseValue-lastPart;if(baseValue>0){value=basePart+value;}else {value=basePart-value;}if(value<baseValue){value+=range;}}return context.setParsedField(this._field,value,errorPos,successPos);};ReducedPrinterParser.prototype.withFixedWidth=function withFixedWidth(){if(this.subsequentWidth()===-1){return this;}return new ReducedPrinterParser(this._field,this._minWidth,this._maxWidth,this._baseValue,this._baseDate,-1);};ReducedPrinterParser.prototype.withSubsequentWidth=function withSubsequentWidth(subsequentWidth){return new ReducedPrinterParser(this._field,this._minWidth,this._maxWidth,this._baseValue,this._baseDate,this._subsequentWidth+subsequentWidth);};ReducedPrinterParser.prototype.isFixedWidth=function isFixedWidth(context){if(context.isStrict()===false){return false;}return _NumberPrinterParser.prototype.isFixedWidth.call(this,context);};ReducedPrinterParser.prototype.toString=function toString(){return 'ReducedValue('+this._field+','+this._minWidth+','+this._maxWidth+','+(this._baseDate!=null?this._baseDate:this._baseValue)+')';};return ReducedPrinterParser;}(NumberPrinterParser);var FractionPrinterParser=function(){function FractionPrinterParser(field,minWidth,maxWidth,decimalPoint){_classCallCheck(this,FractionPrinterParser);(0,_assert.requireNonNull)(field,'field');if(field.range().isFixed()===false){throw new _errors.IllegalArgumentException('Field must have a fixed set of values: '+field);}if(minWidth<0||minWidth>9){throw new _errors.IllegalArgumentException('Minimum width must be from 0 to 9 inclusive but was '+minWidth);}if(maxWidth<1||maxWidth>9){throw new _errors.IllegalArgumentException('Maximum width must be from 1 to 9 inclusive but was '+maxWidth);}if(maxWidth<minWidth){throw new _errors.IllegalArgumentException('Maximum width must exceed or equal the minimum width but '+maxWidth+' < '+minWidth);}this.field=field;this.minWidth=minWidth;this.maxWidth=maxWidth;this.decimalPoint=decimalPoint;}FractionPrinterParser.prototype.print=function print(context,buf){var value=context.getValue(this.field);if(value===null){return false;}var symbols=context.symbols();if(value===0){if(this.minWidth>0){if(this.decimalPoint){buf.append(symbols.decimalSeparator());}for(var i=0;i<this.minWidth;i++){buf.append(symbols.zeroDigit());}}}else {var fraction=this.convertToFraction(value,symbols.zeroDigit());var outputScale=Math.min(Math.max(fraction.length,this.minWidth),this.maxWidth);fraction=fraction.substr(0,outputScale);if(fraction*1>0){while(fraction.length>this.minWidth&&fraction[fraction.length-1]==='0'){fraction=fraction.substr(0,fraction.length-1);}}var str=fraction;str=symbols.convertNumberToI18N(str);if(this.decimalPoint){buf.append(symbols.decimalSeparator());}buf.append(str);}return true;};FractionPrinterParser.prototype.parse=function parse(context,text,position){var effectiveMin=context.isStrict()?this.minWidth:0;var effectiveMax=context.isStrict()?this.maxWidth:9;var length=text.length;if(position===length){return effectiveMin>0?~position:position;}if(this.decimalPoint){if(text[position]!==context.symbols().decimalSeparator()){return effectiveMin>0?~position:position;}position++;}var minEndPos=position+effectiveMin;if(minEndPos>length){return ~position;}var maxEndPos=Math.min(position+effectiveMax,length);var total=0;var pos=position;while(pos<maxEndPos){var ch=text.charAt(pos++);var digit=context.symbols().convertToDigit(ch);if(digit<0){if(pos<minEndPos){return ~position;}pos--;break;}total=total*10+digit;}var moveLeft=pos-position;var scale=Math.pow(10,moveLeft);var value=this.convertFromFraction(total,scale);return context.setParsedField(this.field,value,position,pos);};FractionPrinterParser.prototype.convertToFraction=function convertToFraction(value,zeroDigit){var range=this.field.range();range.checkValidValue(value,this.field);var _min=range.minimum();var _range=range.maximum()-_min+1;var _value=value-_min;var _scaled=_MathUtil.MathUtil.intDiv(_value*1000000000,_range);var fraction=''+_scaled;while(fraction.length<9){fraction=zeroDigit+fraction;}return fraction;};FractionPrinterParser.prototype.convertFromFraction=function convertFromFraction(total,scale){var range=this.field.range();var _min=range.minimum();var _range=range.maximum()-_min+1;var _value=_MathUtil.MathUtil.intDiv(total*_range,scale);return _value;};FractionPrinterParser.prototype.toString=function toString(){var decimal=this.decimalPoint?',DecimalPoint':'';return 'Fraction('+this.field+','+this.minWidth+','+this.maxWidth+decimal+')';};return FractionPrinterParser;}();var SECONDS_PER_10000_YEARS=146097*25*86400;var SECONDS_0000_TO_1970=(146097*5-(30*365+7))*86400;var InstantPrinterParser=function(){function InstantPrinterParser(fractionalDigits){_classCallCheck(this,InstantPrinterParser);this.fractionalDigits=fractionalDigits;}InstantPrinterParser.prototype.print=function print(context,buf){var inSecs=context.getValue(_ChronoField.ChronoField.INSTANT_SECONDS);var inNanos=0;if(context.temporal().isSupported(_ChronoField.ChronoField.NANO_OF_SECOND)){inNanos=context.temporal().getLong(_ChronoField.ChronoField.NANO_OF_SECOND);}if(inSecs==null){return false;}var inSec=inSecs;var inNano=_ChronoField.ChronoField.NANO_OF_SECOND.checkValidIntValue(inNanos);if(inSec>=-SECONDS_0000_TO_1970){var zeroSecs=inSec-SECONDS_PER_10000_YEARS+SECONDS_0000_TO_1970;var hi=_MathUtil.MathUtil.floorDiv(zeroSecs,SECONDS_PER_10000_YEARS)+1;var lo=_MathUtil.MathUtil.floorMod(zeroSecs,SECONDS_PER_10000_YEARS);var ldt=_LocalDateTime.LocalDateTime.ofEpochSecond(lo-SECONDS_0000_TO_1970,0,_ZoneOffset.ZoneOffset.UTC);if(hi>0){buf.append('+').append(hi);}buf.append(ldt);if(ldt.second()===0){buf.append(':00');}}else {var _zeroSecs=inSec+SECONDS_0000_TO_1970;var _hi=_MathUtil.MathUtil.intDiv(_zeroSecs,SECONDS_PER_10000_YEARS);var _lo=_MathUtil.MathUtil.intMod(_zeroSecs,SECONDS_PER_10000_YEARS);var _ldt=_LocalDateTime.LocalDateTime.ofEpochSecond(_lo-SECONDS_0000_TO_1970,0,_ZoneOffset.ZoneOffset.UTC);var pos=buf.length();buf.append(_ldt);if(_ldt.second()===0){buf.append(':00');}if(_hi<0){if(_ldt.year()===-10000){buf.replace(pos,pos+2,''+(_hi-1));}else if(_lo===0){buf.insert(pos,_hi);}else {buf.insert(pos+1,Math.abs(_hi));}}}if(this.fractionalDigits===-2){if(inNano!==0){buf.append('.');if(_MathUtil.MathUtil.intMod(inNano,1000000)===0){buf.append((''+(_MathUtil.MathUtil.intDiv(inNano,1000000)+1000)).substring(1));}else if(_MathUtil.MathUtil.intMod(inNano,1000)===0){buf.append((''+(_MathUtil.MathUtil.intDiv(inNano,1000)+1000000)).substring(1));}else {buf.append((''+(inNano+1000000000)).substring(1));}}}else if(this.fractionalDigits>0||this.fractionalDigits===-1&&inNano>0){buf.append('.');var div=100000000;for(var i=0;this.fractionalDigits===-1&&inNano>0||i<this.fractionalDigits;i++){var digit=_MathUtil.MathUtil.intDiv(inNano,div);buf.append(digit);inNano=inNano-digit*div;div=_MathUtil.MathUtil.intDiv(div,10);}}buf.append('Z');return true;};InstantPrinterParser.prototype.parse=function parse(context,text,position){var newContext=context.copy();var minDigits=this.fractionalDigits<0?0:this.fractionalDigits;var maxDigits=this.fractionalDigits<0?9:this.fractionalDigits;var parser=new DateTimeFormatterBuilder().append(_DateTimeFormatter.DateTimeFormatter.ISO_LOCAL_DATE).appendLiteral('T').appendValue(_ChronoField.ChronoField.HOUR_OF_DAY,2).appendLiteral(':').appendValue(_ChronoField.ChronoField.MINUTE_OF_HOUR,2).appendLiteral(':').appendValue(_ChronoField.ChronoField.SECOND_OF_MINUTE,2).appendFraction(_ChronoField.ChronoField.NANO_OF_SECOND,minDigits,maxDigits,true).appendLiteral('Z').toFormatter().toPrinterParser(false);var pos=parser.parse(newContext,text,position);if(pos<0){return pos;}var yearParsed=newContext.getParsed(_ChronoField.ChronoField.YEAR);var month=newContext.getParsed(_ChronoField.ChronoField.MONTH_OF_YEAR);var day=newContext.getParsed(_ChronoField.ChronoField.DAY_OF_MONTH);var hour=newContext.getParsed(_ChronoField.ChronoField.HOUR_OF_DAY);var min=newContext.getParsed(_ChronoField.ChronoField.MINUTE_OF_HOUR);var secVal=newContext.getParsed(_ChronoField.ChronoField.SECOND_OF_MINUTE);var nanoVal=newContext.getParsed(_ChronoField.ChronoField.NANO_OF_SECOND);var sec=secVal!=null?secVal:0;var nano=nanoVal!=null?nanoVal:0;var year=_MathUtil.MathUtil.intMod(yearParsed,10000);var days=0;if(hour===24&&min===0&&sec===0&&nano===0){hour=0;days=1;}else if(hour===23&&min===59&&sec===60){context.setParsedLeapSecond();sec=59;}var instantSecs;try{var ldt=_LocalDateTime.LocalDateTime.of(year,month,day,hour,min,sec,0).plusDays(days);instantSecs=ldt.toEpochSecond(_ZoneOffset.ZoneOffset.UTC);instantSecs+=_MathUtil.MathUtil.safeMultiply(_MathUtil.MathUtil.intDiv(yearParsed,10000),SECONDS_PER_10000_YEARS);}catch(ex){return ~position;}var successPos=pos;successPos=context.setParsedField(_ChronoField.ChronoField.INSTANT_SECONDS,instantSecs,position,successPos);return context.setParsedField(_ChronoField.ChronoField.NANO_OF_SECOND,nano,position,successPos);};InstantPrinterParser.prototype.toString=function toString(){return 'Instant()';};return InstantPrinterParser;}();var PATTERNS=['+HH','+HHmm','+HH:mm','+HHMM','+HH:MM','+HHMMss','+HH:MM:ss','+HHMMSS','+HH:MM:SS'];var OffsetIdPrinterParser=function(){function OffsetIdPrinterParser(noOffsetText,pattern){_classCallCheck(this,OffsetIdPrinterParser);(0,_assert.requireNonNull)(noOffsetText,'noOffsetText');(0,_assert.requireNonNull)(pattern,'pattern');this.noOffsetText=noOffsetText;this.type=this._checkPattern(pattern);}OffsetIdPrinterParser.prototype._checkPattern=function _checkPattern(pattern){for(var i=0;i<PATTERNS.length;i++){if(PATTERNS[i]===pattern){return i;}}throw new _errors.IllegalArgumentException('Invalid zone offset pattern: '+pattern);};OffsetIdPrinterParser.prototype.print=function print(context,buf){var offsetSecs=context.getValue(_ChronoField.ChronoField.OFFSET_SECONDS);if(offsetSecs==null){return false;}var totalSecs=_MathUtil.MathUtil.safeToInt(offsetSecs);if(totalSecs===0){buf.append(this.noOffsetText);}else {var absHours=Math.abs(_MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(totalSecs,3600),100));var absMinutes=Math.abs(_MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(totalSecs,60),60));var absSeconds=Math.abs(_MathUtil.MathUtil.intMod(totalSecs,60));var bufPos=buf.length();var output=absHours;buf.append(totalSecs<0?'-':'+').appendChar(_MathUtil.MathUtil.intDiv(absHours,10)+'0').appendChar(_MathUtil.MathUtil.intMod(absHours,10)+'0');if(this.type>=3||this.type>=1&&absMinutes>0){buf.append(this.type%2===0?':':'').appendChar(_MathUtil.MathUtil.intDiv(absMinutes,10)+'0').appendChar(absMinutes%10+'0');output+=absMinutes;if(this.type>=7||this.type>=5&&absSeconds>0){buf.append(this.type%2===0?':':'').appendChar(_MathUtil.MathUtil.intDiv(absSeconds,10)+'0').appendChar(absSeconds%10+'0');output+=absSeconds;}}if(output===0){buf.setLength(bufPos);buf.append(this.noOffsetText);}}return true;};OffsetIdPrinterParser.prototype.parse=function parse(context,text,position){var length=text.length;var noOffsetLen=this.noOffsetText.length;if(noOffsetLen===0){if(position===length){return context.setParsedField(_ChronoField.ChronoField.OFFSET_SECONDS,0,position,position);}}else {if(position===length){return ~position;}if(context.subSequenceEquals(text,position,this.noOffsetText,0,noOffsetLen)){return context.setParsedField(_ChronoField.ChronoField.OFFSET_SECONDS,0,position,position+noOffsetLen);}}var sign=text[position];if(sign==='+'||sign==='-'){var negative=sign==='-'?-1:1;var array=[0,0,0,0];array[0]=position+1;if((this._parseNumber(array,1,text,true)||this._parseNumber(array,2,text,this.type>=3)||this._parseNumber(array,3,text,false))===false){var offsetSecs=_MathUtil.MathUtil.safeZero(negative*(array[1]*3600+array[2]*60+array[3]));return context.setParsedField(_ChronoField.ChronoField.OFFSET_SECONDS,offsetSecs,position,array[0]);}}if(noOffsetLen===0){return context.setParsedField(_ChronoField.ChronoField.OFFSET_SECONDS,0,position,position+noOffsetLen);}return ~position;};OffsetIdPrinterParser.prototype._parseNumber=function _parseNumber(array,arrayIndex,parseText,required){if((this.type+3)/2<arrayIndex){return false;}var pos=array[0];if(this.type%2===0&&arrayIndex>1){if(pos+1>parseText.length||parseText[pos]!==':'){return required;}pos++;}if(pos+2>parseText.length){return required;}var ch1=parseText[pos++];var ch2=parseText[pos++];if(ch1<'0'||ch1>'9'||ch2<'0'||ch2>'9'){return required;}var value=(ch1.charCodeAt(0)-48)*10+(ch2.charCodeAt(0)-48);if(value<0||value>59){return required;}array[arrayIndex]=value;array[0]=pos;return false;};OffsetIdPrinterParser.prototype.toString=function toString(){var converted=this.noOffsetText.replace('\'','\'\'');return 'Offset('+PATTERNS[this.type]+',\''+converted+'\')';};return OffsetIdPrinterParser;}();OffsetIdPrinterParser.INSTANCE_ID=new OffsetIdPrinterParser('Z','+HH:MM:ss');OffsetIdPrinterParser.PATTERNS=PATTERNS;var ZoneIdPrinterParser=function(){function ZoneIdPrinterParser(query,description){_classCallCheck(this,ZoneIdPrinterParser);this.query=query;this.description=description;}ZoneIdPrinterParser.prototype.print=function print(context,buf){var zone=context.getValueQuery(this.query);if(zone==null){return false;}buf.append(zone.id());return true;};ZoneIdPrinterParser.prototype.parse=function parse(context,text,position){var length=text.length;if(position>length){return ~position;}if(position===length){return ~position;}var nextChar=text.charAt(position);if(nextChar==='+'||nextChar==='-'){var newContext=context.copy();var endPos=OffsetIdPrinterParser.INSTANCE_ID.parse(newContext,text,position);if(endPos<0){return endPos;}var offset=newContext.getParsed(_ChronoField.ChronoField.OFFSET_SECONDS);var zone=_ZoneOffset.ZoneOffset.ofTotalSeconds(offset);context.setParsedZone(zone);return endPos;}else if(length>=position+2){var nextNextChar=text.charAt(position+1);if(context.charEquals(nextChar,'U')&&context.charEquals(nextNextChar,'T')){if(length>=position+3&&context.charEquals(text.charAt(position+2),'C')){return this._parsePrefixedOffset(context,text,position,position+3);}return this._parsePrefixedOffset(context,text,position,position+2);}else if(context.charEquals(nextChar,'G')&&length>=position+3&&context.charEquals(nextNextChar,'M')&&context.charEquals(text.charAt(position+2),'T')){return this._parsePrefixedOffset(context,text,position,position+3);}}if(text.substr(position,6)==='SYSTEM'){context.setParsedZone(_ZoneId.ZoneId.systemDefault());return position+6;}if(context.charEquals(nextChar,'Z')){context.setParsedZone(_ZoneOffset.ZoneOffset.UTC);return position+1;}return ~position;};ZoneIdPrinterParser.prototype._parsePrefixedOffset=function _parsePrefixedOffset(context,text,prefixPos,position){var prefix=text.substring(prefixPos,position).toUpperCase();var newContext=context.copy();if(position<text.length&&context.charEquals(text.charAt(position),'Z')){context.setParsedZone(_ZoneIdFactory.ZoneIdFactory.ofOffset(prefix,_ZoneOffset.ZoneOffset.UTC));return position;}var endPos=OffsetIdPrinterParser.INSTANCE_ID.parse(newContext,text,position);if(endPos<0){context.setParsedZone(_ZoneIdFactory.ZoneIdFactory.ofOffset(prefix,_ZoneOffset.ZoneOffset.UTC));return position;}var offsetSecs=newContext.getParsed(_ChronoField.ChronoField.OFFSET_SECONDS);var offset=_ZoneOffset.ZoneOffset.ofTotalSeconds(offsetSecs);context.setParsedZone(_ZoneIdFactory.ZoneIdFactory.ofOffset(prefix,offset));return endPos;};ZoneIdPrinterParser.prototype.toString=function toString(){return this.description;};return ZoneIdPrinterParser;}();function _init(){ReducedPrinterParser.BASE_DATE=_LocalDate.LocalDate.of(2000,1,1);DateTimeFormatterBuilder.CompositePrinterParser=CompositePrinterParser;DateTimeFormatterBuilder.PadPrinterParserDecorator=PadPrinterParserDecorator;DateTimeFormatterBuilder.SettingsParser=SettingsParser;DateTimeFormatterBuilder.CharLiteralPrinterParser=StringLiteralPrinterParser;DateTimeFormatterBuilder.StringLiteralPrinterParser=StringLiteralPrinterParser;DateTimeFormatterBuilder.CharLiteralPrinterParser=CharLiteralPrinterParser;DateTimeFormatterBuilder.NumberPrinterParser=NumberPrinterParser;DateTimeFormatterBuilder.ReducedPrinterParser=ReducedPrinterParser;DateTimeFormatterBuilder.FractionPrinterParser=FractionPrinterParser;DateTimeFormatterBuilder.OffsetIdPrinterParser=OffsetIdPrinterParser;DateTimeFormatterBuilder.ZoneIdPrinterParser=ZoneIdPrinterParser;}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZoneIdFactory = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _StringUtil = __webpack_require__(22);

	var _ZoneOffset = __webpack_require__(23);

	var _ZoneRegion = __webpack_require__(27);

	var _ZoneId = __webpack_require__(24);

	var _TemporalQueries = __webpack_require__(25);

	var _SystemDefaultZoneId = __webpack_require__(28);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var ZoneIdFactory = exports.ZoneIdFactory = function () {
	    function ZoneIdFactory() {
	        _classCallCheck(this, ZoneIdFactory);
	    }

	    ZoneIdFactory.systemDefault = function systemDefault() {
	        return SYSTEM_DEFAULT_ZONE_ID_INSTANCE;
	    };

	    ZoneIdFactory.of = function of(zoneId) {
	        (0, _assert.requireNonNull)(zoneId, 'zoneId');
	        if (zoneId === 'Z') {
	            return _ZoneOffset.ZoneOffset.UTC;
	        }
	        if (zoneId.length === 1) {
	            throw new _errors.DateTimeException('Invalid zone: ' + zoneId);
	        }
	        if (_StringUtil.StringUtil.startsWith(zoneId, '+') || _StringUtil.StringUtil.startsWith(zoneId, '-')) {
	            return _ZoneOffset.ZoneOffset.of(zoneId);
	        }
	        if (zoneId === 'UTC' || zoneId === 'GMT' || zoneId === 'UT') {
	            return new _ZoneRegion.ZoneRegion(zoneId, _ZoneOffset.ZoneOffset.UTC.rules());
	        }
	        if (_StringUtil.StringUtil.startsWith(zoneId, 'UTC+') || _StringUtil.StringUtil.startsWith(zoneId, 'GMT+') || _StringUtil.StringUtil.startsWith(zoneId, 'UTC-') || _StringUtil.StringUtil.startsWith(zoneId, 'GMT-')) {
	            var offset = _ZoneOffset.ZoneOffset.of(zoneId.substring(3));
	            if (offset.totalSeconds() === 0) {
	                return new _ZoneRegion.ZoneRegion(zoneId.substring(0, 3), offset.rules());
	            }
	            return new _ZoneRegion.ZoneRegion(zoneId.substring(0, 3) + offset.id(), offset.rules());
	        }
	        if (_StringUtil.StringUtil.startsWith(zoneId, 'UT+') || _StringUtil.StringUtil.startsWith(zoneId, 'UT-')) {
	            var _offset = _ZoneOffset.ZoneOffset.of(zoneId.substring(2));
	            if (_offset.totalSeconds() === 0) {
	                return new _ZoneRegion.ZoneRegion('UT', _offset.rules());
	            }
	            return new _ZoneRegion.ZoneRegion('UT' + _offset.id(), _offset.rules());
	        }

	        if (zoneId === 'SYSTEM') {
	            return _ZoneId.ZoneId.systemDefault();
	        }
	        return _ZoneRegion.ZoneRegion.ofId(zoneId, true);
	    };

	    ZoneIdFactory.ofOffset = function ofOffset(prefix, offset) {
	        (0, _assert.requireNonNull)(prefix, 'prefix');
	        (0, _assert.requireNonNull)(offset, 'offset');
	        if (prefix.length === 0) {
	            return offset;
	        }
	        if (prefix === 'GMT' || prefix === 'UTC' || prefix === 'UT') {
	            if (offset.totalSeconds() === 0) {
	                return new _ZoneRegion.ZoneRegion(prefix, offset.rules());
	            }
	            return new _ZoneRegion.ZoneRegion(prefix + offset.id(), offset.rules());
	        }
	        throw new _errors.IllegalArgumentException('Invalid prefix, must be GMT, UTC or UT: ' + prefix);
	    };

	    ZoneIdFactory.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        var obj = temporal.query(_TemporalQueries.TemporalQueries.zone());
	        if (obj == null) {
	            throw new _errors.DateTimeException('Unable to obtain ZoneId from TemporalAccessor: ' + temporal + ', type ' + (temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	        return obj;
	    };

	    return ZoneIdFactory;
	}();

	var SYSTEM_DEFAULT_ZONE_ID_INSTANCE = null;

	function _init() {
	    SYSTEM_DEFAULT_ZONE_ID_INSTANCE = new _SystemDefaultZoneId.SystemDefaultZoneId();

	    _ZoneId.ZoneId.systemDefault = ZoneIdFactory.systemDefault;
	    _ZoneId.ZoneId.of = ZoneIdFactory.of;
	    _ZoneId.ZoneId.ofOffset = ZoneIdFactory.ofOffset;
	    _ZoneId.ZoneId.from = ZoneIdFactory.from;
	    _ZoneOffset.ZoneOffset.from = ZoneIdFactory.from;

	    _ZoneId.ZoneId.SYSTEM = SYSTEM_DEFAULT_ZONE_ID_INSTANCE;
	    _ZoneId.ZoneId.UTC = _ZoneOffset.ZoneOffset.ofTotalSeconds(0);
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var StringUtil = exports.StringUtil = function () {
	    function StringUtil() {
	        _classCallCheck(this, StringUtil);
	    }

	    StringUtil.startsWith = function startsWith(text, pattern) {
	        return text.indexOf(pattern) === 0;
	    };

	    StringUtil.hashCode = function hashCode(text) {
	        var hash = 0,
	            i,
	            chr,
	            len;
	        if (text.length === 0) return hash;
	        for (i = 0, len = text.length; i < len; i++) {
	            chr = text.charCodeAt(i);
	            hash = (hash << 5) - hash + chr;
	            hash |= 0;
	        }
	        return hash;
	    };

	    return StringUtil;
	}();

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZoneOffset = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _LocalTime = __webpack_require__(5);

	var _ZoneId2 = __webpack_require__(24);

	var _ChronoField = __webpack_require__(12);

	var _TemporalQueries = __webpack_require__(25);

	var _ZoneRules = __webpack_require__(26);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var SECONDS_CACHE = {};
	var ID_CACHE = {};

	var ZoneOffset = function (_ZoneId) {
	    _inherits(ZoneOffset, _ZoneId);

	    function ZoneOffset(totalSeconds) {
	        _classCallCheck(this, ZoneOffset);

	        var _this = _possibleConstructorReturn(this, _ZoneId.call(this));

	        ZoneOffset._validateTotalSeconds(totalSeconds);
	        _this._totalSeconds = totalSeconds;
	        _this._rules = _ZoneRules.ZoneRules.of(_this);
	        _this._id = ZoneOffset._buildId(totalSeconds);
	        return _this;
	    }

	    ZoneOffset.prototype.totalSeconds = function totalSeconds() {
	        return this._totalSeconds;
	    };

	    ZoneOffset.prototype.id = function id() {
	        return this._id;
	    };

	    ZoneOffset._buildId = function _buildId(totalSeconds) {
	        if (totalSeconds === 0) {
	            return 'Z';
	        } else {
	            var absTotalSeconds = Math.abs(totalSeconds);
	            var absHours = _MathUtil.MathUtil.intDiv(absTotalSeconds, _LocalTime.LocalTime.SECONDS_PER_HOUR);
	            var absMinutes = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(absTotalSeconds, _LocalTime.LocalTime.SECONDS_PER_MINUTE), _LocalTime.LocalTime.MINUTES_PER_HOUR);
	            var buf = '' + (totalSeconds < 0 ? '-' : '+') + (absHours < 10 ? '0' : '') + absHours + (absMinutes < 10 ? ':0' : ':') + absMinutes;
	            var absSeconds = _MathUtil.MathUtil.intMod(absTotalSeconds, _LocalTime.LocalTime.SECONDS_PER_MINUTE);
	            if (absSeconds !== 0) {
	                buf += (absSeconds < 10 ? ':0' : ':') + absSeconds;
	            }
	            return buf;
	        }
	    };

	    ZoneOffset._validateTotalSeconds = function _validateTotalSeconds(totalSeconds) {
	        if (Math.abs(totalSeconds) > ZoneOffset.MAX_SECONDS) {
	            throw new _errors.DateTimeException('Zone offset not in valid range: -18:00 to +18:00');
	        }
	    };

	    ZoneOffset._validate = function _validate(hours, minutes, seconds) {
	        if (hours < -18 || hours > 18) {
	            throw new _errors.DateTimeException('Zone offset hours not in valid range: value ' + hours + ' is not in the range -18 to 18');
	        }
	        if (hours > 0) {
	            if (minutes < 0 || seconds < 0) {
	                throw new _errors.DateTimeException('Zone offset minutes and seconds must be positive because hours is positive');
	            }
	        } else if (hours < 0) {
	            if (minutes > 0 || seconds > 0) {
	                throw new _errors.DateTimeException('Zone offset minutes and seconds must be negative because hours is negative');
	            }
	        } else if (minutes > 0 && seconds < 0 || minutes < 0 && seconds > 0) {
	            throw new _errors.DateTimeException('Zone offset minutes and seconds must have the same sign');
	        }
	        if (Math.abs(minutes) > 59) {
	            throw new _errors.DateTimeException('Zone offset minutes not in valid range: abs(value) ' + Math.abs(minutes) + ' is not in the range 0 to 59');
	        }
	        if (Math.abs(seconds) > 59) {
	            throw new _errors.DateTimeException('Zone offset seconds not in valid range: abs(value) ' + Math.abs(seconds) + ' is not in the range 0 to 59');
	        }
	        if (Math.abs(hours) === 18 && (Math.abs(minutes) > 0 || Math.abs(seconds) > 0)) {
	            throw new _errors.DateTimeException('Zone offset not in valid range: -18:00 to +18:00');
	        }
	    };

	    ZoneOffset.of = function of(offsetId) {
	        (0, _assert.requireNonNull)(offsetId, 'offsetId');

	        var offset = ID_CACHE[offsetId];
	        if (offset != null) {
	            return offset;
	        }

	        var hours, minutes, seconds;
	        switch (offsetId.length) {
	            case 2:
	                offsetId = offsetId[0] + '0' + offsetId[1];
	            case 3:
	                hours = ZoneOffset._parseNumber(offsetId, 1, false);
	                minutes = 0;
	                seconds = 0;
	                break;
	            case 5:
	                hours = ZoneOffset._parseNumber(offsetId, 1, false);
	                minutes = ZoneOffset._parseNumber(offsetId, 3, false);
	                seconds = 0;
	                break;
	            case 6:
	                hours = ZoneOffset._parseNumber(offsetId, 1, false);
	                minutes = ZoneOffset._parseNumber(offsetId, 4, true);
	                seconds = 0;
	                break;
	            case 7:
	                hours = ZoneOffset._parseNumber(offsetId, 1, false);
	                minutes = ZoneOffset._parseNumber(offsetId, 3, false);
	                seconds = ZoneOffset._parseNumber(offsetId, 5, false);
	                break;
	            case 9:
	                hours = ZoneOffset._parseNumber(offsetId, 1, false);
	                minutes = ZoneOffset._parseNumber(offsetId, 4, true);
	                seconds = ZoneOffset._parseNumber(offsetId, 7, true);
	                break;
	            default:
	                throw new _errors.DateTimeException('Invalid ID for ZoneOffset, invalid format: ' + offsetId);
	        }
	        var first = offsetId[0];
	        if (first !== '+' && first !== '-') {
	            throw new _errors.DateTimeException('Invalid ID for ZoneOffset, plus/minus not found when expected: ' + offsetId);
	        }
	        if (first === '-') {
	            return ZoneOffset.ofHoursMinutesSeconds(-hours, -minutes, -seconds);
	        } else {
	            return ZoneOffset.ofHoursMinutesSeconds(hours, minutes, seconds);
	        }
	    };

	    ZoneOffset._parseNumber = function _parseNumber(offsetId, pos, precededByColon) {
	        if (precededByColon && offsetId[pos - 1] !== ':') {
	            throw new _errors.DateTimeException('Invalid ID for ZoneOffset, colon not found when expected: ' + offsetId);
	        }
	        var ch1 = offsetId[pos];
	        var ch2 = offsetId[pos + 1];
	        if (ch1 < '0' || ch1 > '9' || ch2 < '0' || ch2 > '9') {
	            throw new _errors.DateTimeException('Invalid ID for ZoneOffset, non numeric characters found: ' + offsetId);
	        }
	        return (ch1.charCodeAt(0) - 48) * 10 + (ch2.charCodeAt(0) - 48);
	    };

	    ZoneOffset.ofHours = function ofHours(hours) {
	        return ZoneOffset.ofHoursMinutesSeconds(hours, 0, 0);
	    };

	    ZoneOffset.ofHoursMinutes = function ofHoursMinutes(hours, minutes) {
	        return ZoneOffset.ofHoursMinutesSeconds(hours, minutes, 0);
	    };

	    ZoneOffset.ofHoursMinutesSeconds = function ofHoursMinutesSeconds(hours, minutes, seconds) {
	        ZoneOffset._validate(hours, minutes, seconds);
	        var totalSeconds = hours * _LocalTime.LocalTime.SECONDS_PER_HOUR + minutes * _LocalTime.LocalTime.SECONDS_PER_MINUTE + seconds;
	        return ZoneOffset.ofTotalSeconds(totalSeconds);
	    };

	    ZoneOffset.ofTotalMinutes = function ofTotalMinutes(totalMinutes) {
	        var totalSeconds = totalMinutes * _LocalTime.LocalTime.SECONDS_PER_MINUTE;
	        return ZoneOffset.ofTotalSeconds(totalSeconds);
	    };

	    ZoneOffset.ofTotalSeconds = function ofTotalSeconds(totalSeconds) {
	        if (totalSeconds % (15 * _LocalTime.LocalTime.SECONDS_PER_MINUTE) === 0) {
	            var totalSecs = totalSeconds;
	            var result = SECONDS_CACHE[totalSecs];
	            if (result == null) {
	                result = new ZoneOffset(totalSeconds);
	                SECONDS_CACHE[totalSecs] = result;
	                ID_CACHE[result.id()] = result;
	            }
	            return result;
	        } else {
	            return new ZoneOffset(totalSeconds);
	        }
	    };

	    ZoneOffset.prototype.rules = function rules() {
	        return this._rules;
	    };

	    ZoneOffset.prototype.get = function get(field) {
	        return this.getLong(field);
	    };

	    ZoneOffset.prototype.getLong = function getLong(field) {
	        if (field === _ChronoField.ChronoField.OFFSET_SECONDS) {
	            return this._totalSeconds;
	        } else if (field instanceof _ChronoField.ChronoField) {
	            throw new _errors.DateTimeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    ZoneOffset.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.offset() || _query === _TemporalQueries.TemporalQueries.zone()) {
	            return this;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate() || _query === _TemporalQueries.TemporalQueries.localTime() || _query === _TemporalQueries.TemporalQueries.precision() || _query === _TemporalQueries.TemporalQueries.chronology() || _query === _TemporalQueries.TemporalQueries.zoneId()) {
	            return null;
	        }
	        return _query.queryFrom(this);
	    };

	    ZoneOffset.prototype.adjustInto = function adjustInto(temporal) {
	        return temporal.with(_ChronoField.ChronoField.OFFSET_SECONDS, this._totalSeconds);
	    };

	    ZoneOffset.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        return other._totalSeconds - this._totalSeconds;
	    };

	    ZoneOffset.prototype.equals = function equals(obj) {
	        if (this === obj) {
	            return true;
	        }
	        if (obj instanceof ZoneOffset) {
	            return this._totalSeconds === obj._totalSeconds;
	        }
	        return false;
	    };

	    ZoneOffset.prototype.hashCode = function hashCode() {
	        return this._totalSeconds;
	    };

	    ZoneOffset.prototype.id = function id() {
	        return this._id;
	    };

	    ZoneOffset.prototype.toString = function toString() {
	        return this._id;
	    };

	    return ZoneOffset;
	}(_ZoneId2.ZoneId);

	exports.ZoneOffset = ZoneOffset;
	function _init() {
	    ZoneOffset.MAX_SECONDS = 18 * _LocalTime.LocalTime.SECONDS_PER_HOUR;
	    ZoneOffset.UTC = ZoneOffset.ofTotalSeconds(0);
	    ZoneOffset.MIN = ZoneOffset.ofTotalSeconds(-ZoneOffset.MAX_SECONDS);
	    ZoneOffset.MAX = ZoneOffset.ofTotalSeconds(ZoneOffset.MAX_SECONDS);
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZoneId = undefined;

	var _assert = __webpack_require__(2);

	var _StringUtil = __webpack_require__(22);

	var _Instant = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var ZoneId = exports.ZoneId = function () {
	    function ZoneId() {
	        _classCallCheck(this, ZoneId);
	    }

	    ZoneId.prototype.rules = function rules() {
	        (0, _assert.abstractMethodFail)('ZoneId.rules');
	    };

	    ZoneId.prototype.normalized = function normalized() {
	        var rules = this.rules();
	        if (rules.isFixedOffset()) {
	            return rules.offset(_Instant.Instant.EPOCH);
	        }

	        return this;
	    };

	    ZoneId.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof ZoneId) {
	            return this.id() === other.id();
	        }
	        return false;
	    };

	    ZoneId.prototype.hashCode = function hashCode() {
	        return _StringUtil.StringUtil.hashCode(this.id());
	    };

	    ZoneId.prototype.toString = function toString() {
	        return this.id();
	    };

	    return ZoneId;
	}();

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var TemporalQueries = exports.TemporalQueries = function () {
	  function TemporalQueries() {
	    _classCallCheck(this, TemporalQueries);
	  }

	  TemporalQueries.zoneId = function zoneId() {
	    return TemporalQueries.ZONE_ID;
	  };

	  TemporalQueries.chronology = function chronology() {
	    return TemporalQueries.CHRONO;
	  };

	  TemporalQueries.precision = function precision() {
	    return TemporalQueries.PRECISION;
	  };

	  TemporalQueries.zone = function zone() {
	    return TemporalQueries.ZONE;
	  };

	  TemporalQueries.offset = function offset() {
	    return TemporalQueries.OFFSET;
	  };

	  TemporalQueries.localDate = function localDate() {
	    return TemporalQueries.LOCAL_DATE;
	  };

	  TemporalQueries.localTime = function localTime() {
	    return TemporalQueries.LOCAL_TIME;
	  };

	  return TemporalQueries;
	}();

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZoneRules = undefined;

	var _assert = __webpack_require__(2);

	var _Instant = __webpack_require__(4);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var ZoneRules = exports.ZoneRules = function () {
	    function ZoneRules() {
	        _classCallCheck(this, ZoneRules);
	    }

	    ZoneRules.of = function of(offset) {
	        (0, _assert.requireNonNull)(offset, 'offset');
	        return new Fixed(offset);
	    };

	    ZoneRules.prototype.isFixedOffset = function isFixedOffset() {
	        (0, _assert.abstractMethodFail)('ZoneRules.isFixedOffset');
	    };

	    ZoneRules.prototype.offset = function offset(instantOrLocalDateTime) {
	        if (instantOrLocalDateTime instanceof _Instant.Instant) {
	            return this.offsetOfInstant(instantOrLocalDateTime);
	        } else {
	            return this.offsetOfLocalDateTime(instantOrLocalDateTime);
	        }
	    };

	    ZoneRules.prototype.offsetOfInstant = function offsetOfInstant(instant) {
	        (0, _assert.abstractMethodFail)('ZoneRules.offsetInstant');
	    };

	    ZoneRules.prototype.offsetOfEpochMilli = function offsetOfEpochMilli(epochMilli) {
	        (0, _assert.abstractMethodFail)('ZoneRules.offsetOfEpochMilli');
	    };

	    ZoneRules.prototype.offsetOfLocalDateTime = function offsetOfLocalDateTime(localDateTime) {
	        (0, _assert.abstractMethodFail)('ZoneRules.offsetLocalDateTime');
	    };

	    ZoneRules.prototype.isValidOffset = function isValidOffset(localDateTime, offset) {
	        (0, _assert.abstractMethodFail)('ZoneRules.isValidOffset');
	    };

	    return ZoneRules;
	}();

	var Fixed = function (_ZoneRules) {
	    _inherits(Fixed, _ZoneRules);

	    function Fixed(offset) {
	        _classCallCheck(this, Fixed);

	        var _this = _possibleConstructorReturn(this, _ZoneRules.call(this));

	        _this._offset = offset;
	        return _this;
	    }

	    Fixed.prototype.isFixedOffset = function isFixedOffset() {
	        return true;
	    };

	    Fixed.prototype.offsetOfInstant = function offsetOfInstant() {
	        return this._offset;
	    };

	    Fixed.prototype.offsetOfEpochMilli = function offsetOfEpochMilli() {
	        return this._offset;
	    };

	    Fixed.prototype.offsetOfLocalDateTime = function offsetOfLocalDateTime() {
	        return this._offset;
	    };

	    Fixed.prototype.isValidOffset = function isValidOffset(dateTime, offset) {
	        return this._offset.equals(offset);
	    };

	    Fixed.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof Fixed) {
	            return this._offset.equals(other._offset);
	        }
	        return false;
	    };

	    Fixed.prototype.toString = function toString() {
	        return 'FixedRules:' + this._offset.toString();
	    };

	    return Fixed;
	}(ZoneRules);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZoneRegion = undefined;

	var _errors = __webpack_require__(3);

	var _ZoneId2 = __webpack_require__(24);

	var _ZoneOffset = __webpack_require__(23);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ZoneRegion = exports.ZoneRegion = function (_ZoneId) {
	  _inherits(ZoneRegion, _ZoneId);

	  ZoneRegion.ofId = function ofId(zoneId) {
	    if (zoneId === 'GMT0') {
	      var rules = _ZoneOffset.ZoneOffset.UTC.rules();
	      return new ZoneRegion(zoneId, rules);
	    }
	    throw new _errors.DateTimeException('ZoneRegion.ofId() is not yet implemented');
	  };

	  function ZoneRegion(id, rules) {
	    _classCallCheck(this, ZoneRegion);

	    var _this = _possibleConstructorReturn(this, _ZoneId.call(this));

	    _this._id = id;
	    _this._rules = rules;
	    return _this;
	  }

	  ZoneRegion.prototype.id = function id() {
	    return this._id;
	  };

	  ZoneRegion.prototype.rules = function rules() {
	    return this._rules;
	  };

	  return ZoneRegion;
	}(_ZoneId2.ZoneId);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.SystemDefaultZoneId = undefined;

	var _SystemDefaultZoneRules = __webpack_require__(29);

	var _ZoneId2 = __webpack_require__(24);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var SystemDefaultZoneId = exports.SystemDefaultZoneId = function (_ZoneId) {
	    _inherits(SystemDefaultZoneId, _ZoneId);

	    function SystemDefaultZoneId() {
	        _classCallCheck(this, SystemDefaultZoneId);

	        var _this = _possibleConstructorReturn(this, _ZoneId.call(this));

	        _this._rules = new _SystemDefaultZoneRules.SystemDefaultZoneRules();
	        return _this;
	    }

	    SystemDefaultZoneId.prototype.rules = function rules() {
	        return this._rules;
	    };

	    SystemDefaultZoneId.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        return false;
	    };

	    SystemDefaultZoneId.prototype.id = function id() {
	        return 'SYSTEM';
	    };

	    return SystemDefaultZoneId;
	}(_ZoneId2.ZoneId);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.SystemDefaultZoneRules = undefined;

	var _ZoneRules2 = __webpack_require__(26);

	var _ZoneOffset = __webpack_require__(23);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var SystemDefaultZoneRules = exports.SystemDefaultZoneRules = function (_ZoneRules) {
	    _inherits(SystemDefaultZoneRules, _ZoneRules);

	    function SystemDefaultZoneRules() {
	        _classCallCheck(this, SystemDefaultZoneRules);

	        return _possibleConstructorReturn(this, _ZoneRules.apply(this, arguments));
	    }

	    SystemDefaultZoneRules.prototype.isFixedOffset = function isFixedOffset() {
	        return false;
	    };

	    SystemDefaultZoneRules.prototype.offsetOfInstant = function offsetOfInstant(instant) {
	        var offsetInMinutes = new Date(instant.toEpochMilli()).getTimezoneOffset();
	        return _ZoneOffset.ZoneOffset.ofTotalMinutes(offsetInMinutes * -1);
	    };

	    SystemDefaultZoneRules.prototype.offsetOfEpochMilli = function offsetOfEpochMilli(epochMilli) {
	        var offsetInMinutes = new Date(epochMilli).getTimezoneOffset();
	        return _ZoneOffset.ZoneOffset.ofTotalMinutes(offsetInMinutes * -1);
	    };

	    SystemDefaultZoneRules.prototype.offsetOfLocalDateTime = function offsetOfLocalDateTime(localDateTime) {
	        var epochMilli = localDateTime.toEpochSecond(_ZoneOffset.ZoneOffset.UTC) * 1000;
	        var offsetInMinutesBeforePossibleTransition = new Date(epochMilli).getTimezoneOffset();
	        var epochMilliSystemZone = epochMilli + offsetInMinutesBeforePossibleTransition * 60000;
	        var offsetInMinutesAfterPossibleTransition = new Date(epochMilliSystemZone).getTimezoneOffset();
	        return _ZoneOffset.ZoneOffset.ofTotalMinutes(offsetInMinutesAfterPossibleTransition * -1);
	    };

	    SystemDefaultZoneRules.prototype.isValidOffset = function isValidOffset(dateTime, offset) {
	        return this.offsetOfLocalDateTime(dateTime).equals(offset);
	    };

	    SystemDefaultZoneRules.prototype.equals = function equals(other) {
	        if (this === other || other instanceof SystemDefaultZoneRules) {
	            return true;
	        } else {
	            return false;
	        }
	    };

	    SystemDefaultZoneRules.prototype.toString = function toString() {
	        return 'SYSTEM';
	    };

	    return SystemDefaultZoneRules;
	}(_ZoneRules2.ZoneRules);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ChronoLocalDate = undefined;

	var _assert = __webpack_require__(2);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _DateTimeFormatter = __webpack_require__(31);

	var _TemporalQueries = __webpack_require__(25);

	var _Temporal2 = __webpack_require__(37);

	var _LocalDate = __webpack_require__(8);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ChronoLocalDate = function (_Temporal) {
	    _inherits(ChronoLocalDate, _Temporal);

	    function ChronoLocalDate() {
	        _classCallCheck(this, ChronoLocalDate);

	        return _possibleConstructorReturn(this, _Temporal.apply(this, arguments));
	    }

	    ChronoLocalDate.prototype.isSupported = function isSupported(fieldOrUnit) {
	        if (fieldOrUnit instanceof _ChronoField.ChronoField) {
	            return fieldOrUnit.isDateBased();
	        } else if (fieldOrUnit instanceof _ChronoUnit.ChronoUnit) {
	            return fieldOrUnit.isDateBased();
	        }
	        return fieldOrUnit != null && fieldOrUnit.isSupportedBy(this);
	    };

	    ChronoLocalDate.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return this.chronology();
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.DAYS;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return _LocalDate.LocalDate.ofEpochDay(this.toEpochDay());
	        } else if (_query === _TemporalQueries.TemporalQueries.localTime() || _query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return null;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    ChronoLocalDate.prototype.adjustInto = function adjustInto(temporal) {
	        return temporal.with(_ChronoField.ChronoField.EPOCH_DAY, this.toEpochDay());
	    };

	    ChronoLocalDate.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        (0, _assert.requireInstance)(formatter, _DateTimeFormatter.DateTimeFormatter, 'formatter');
	        return formatter.format(this);
	    };

	    return ChronoLocalDate;
	}(_Temporal2.Temporal);

	exports.ChronoLocalDate = ChronoLocalDate;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.DateTimeFormatter = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _Period = __webpack_require__(32);

	var _ParsePosition = __webpack_require__(33);

	var _DateTimeBuilder = __webpack_require__(34);

	var _DateTimeParseContext = __webpack_require__(39);

	var _DateTimePrintContext = __webpack_require__(40);

	var _DateTimeFormatterBuilder = __webpack_require__(20);

	var _SignStyle = __webpack_require__(41);

	var _StringBuilder = __webpack_require__(42);

	var _ResolverStyle = __webpack_require__(36);

	var _IsoChronology = __webpack_require__(9);

	var _ChronoField = __webpack_require__(12);

	var _TemporalQuery = __webpack_require__(43);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var DateTimeFormatter = exports.DateTimeFormatter = function () {
	    DateTimeFormatter.parsedExcessDays = function parsedExcessDays() {
	        return DateTimeFormatter.PARSED_EXCESS_DAYS;
	    };

	    DateTimeFormatter.parsedLeapSecond = function parsedLeapSecond() {
	        return DateTimeFormatter.PARSED_LEAP_SECOND;
	    };

	    DateTimeFormatter.ofPattern = function ofPattern(pattern) {
	        return new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendPattern(pattern).toFormatter();
	    };

	    function DateTimeFormatter(printerParser, locale, decimalStyle, resolverStyle, resolverFields) {
	        var chrono = arguments.length <= 5 || arguments[5] === undefined ? _IsoChronology.IsoChronology.INSTANCE : arguments[5];
	        var zone = arguments[6];

	        _classCallCheck(this, DateTimeFormatter);

	        (0, _assert.assert)(printerParser != null);
	        (0, _assert.assert)(decimalStyle != null);
	        (0, _assert.assert)(resolverStyle != null);

	        this._printerParser = printerParser;

	        this._locale = locale;

	        this._decimalStyle = decimalStyle;

	        this._resolverStyle = resolverStyle;

	        this._resolverFields = resolverFields;

	        this._chrono = chrono;

	        this._zone = zone;
	    }

	    DateTimeFormatter.prototype.locale = function locale() {
	        return this._locale;
	    };

	    DateTimeFormatter.prototype.decimalStyle = function decimalStyle() {
	        return this._decimalStyle;
	    };

	    DateTimeFormatter.prototype.chronology = function chronology() {
	        return this._chrono;
	    };

	    DateTimeFormatter.prototype.withChronology = function withChronology(chrono) {
	        if (this._chrono != null && this._chrono.equals(chrono)) {
	            return this;
	        }
	        return new DateTimeFormatter(this._printerParser, this._locale, this._decimalStyle, this._resolverStyle, this._resolverFields, chrono, this._zone);
	    };

	    DateTimeFormatter.prototype.withLocale = function withLocale() {
	        return this;
	    };

	    DateTimeFormatter.prototype.format = function format(temporal) {
	        var buf = new _StringBuilder.StringBuilder(32);
	        this._formatTo(temporal, buf);
	        return buf.toString();
	    };

	    DateTimeFormatter.prototype._formatTo = function _formatTo(temporal, appendable) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        (0, _assert.requireNonNull)(appendable, 'appendable');
	        var context = new _DateTimePrintContext.DateTimePrintContext(temporal, this);
	        this._printerParser.print(context, appendable);
	    };

	    DateTimeFormatter.prototype.parse = function parse(text, type) {
	        if (arguments.length === 1) {
	            return this.parse1(text);
	        } else {
	            return this.parse2(text, type);
	        }
	    };

	    DateTimeFormatter.prototype.parse1 = function parse1(text) {
	        (0, _assert.requireNonNull)(text, 'text');
	        try {
	            return this._parseToBuilder(text, null).resolve(this._resolverStyle, this._resolverFields);
	        } catch (ex) {
	            if (ex instanceof _errors.DateTimeParseException) {
	                throw ex;
	            } else {
	                throw this._createError(text, ex);
	            }
	        }
	    };

	    DateTimeFormatter.prototype.parse2 = function parse2(text, type) {
	        (0, _assert.requireNonNull)(text, 'text');
	        (0, _assert.requireNonNull)(type, 'type');
	        try {
	            var builder = this._parseToBuilder(text, null).resolve(this._resolverStyle, this._resolverFields);
	            return builder.build(type);
	        } catch (ex) {
	            if (ex instanceof _errors.DateTimeParseException) {
	                throw ex;
	            } else {
	                throw this._createError(text, ex);
	            }
	        }
	    };

	    DateTimeFormatter.prototype._createError = function _createError(text, ex) {
	        var abbr = '';
	        if (text.length > 64) {
	            abbr = text.subString(0, 64) + '...';
	        } else {
	            abbr = text;
	        }
	        return new _errors.DateTimeParseException('Text \'' + abbr + '\' could not be parsed: ' + ex.message, text, 0, ex);
	    };

	    DateTimeFormatter.prototype._parseToBuilder = function _parseToBuilder(text, position) {
	        var pos = position != null ? position : new _ParsePosition.ParsePosition(0);
	        var result = this._parseUnresolved0(text, pos);
	        if (result == null || pos.getErrorIndex() >= 0 || position == null && pos.getIndex() < text.length) {
	            var abbr = '';
	            if (text.length > 64) {
	                abbr = text.substr(0, 64).toString() + '...';
	            } else {
	                abbr = text;
	            }
	            if (pos.getErrorIndex() >= 0) {
	                throw new _errors.DateTimeParseException('Text \'' + abbr + '\' could not be parsed at index ' + pos.getErrorIndex(), text, pos.getErrorIndex());
	            } else {
	                throw new _errors.DateTimeParseException('Text \'' + abbr + '\' could not be parsed, unparsed text found at index ' + pos.getIndex(), text, pos.getIndex());
	            }
	        }
	        return result.toBuilder();
	    };

	    DateTimeFormatter.prototype.parseUnresolved = function parseUnresolved(text, position) {
	        return this._parseUnresolved0(text, position);
	    };

	    DateTimeFormatter.prototype._parseUnresolved0 = function _parseUnresolved0(text, position) {
	        (0, _assert.assert)(text != null, 'text', _errors.NullPointerException);
	        (0, _assert.assert)(position != null, 'position', _errors.NullPointerException);
	        var context = new _DateTimeParseContext.DateTimeParseContext(this);
	        var pos = position.getIndex();
	        pos = this._printerParser.parse(context, text, pos);
	        if (pos < 0) {
	            position.setErrorIndex(~pos);
	            return null;
	        }
	        position.setIndex(pos);
	        return context.toParsed();
	    };

	    DateTimeFormatter.prototype.toPrinterParser = function toPrinterParser(optional) {
	        return this._printerParser.withOptional(optional);
	    };

	    DateTimeFormatter.prototype.toString = function toString() {
	        var pattern = this._printerParser.toString();
	        return pattern.indexOf('[') === 0 ? pattern : pattern.substring(1, pattern.length - 1);
	    };

	    return DateTimeFormatter;
	}();

	function _init() {

	    DateTimeFormatter.ISO_LOCAL_DATE = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendValue(_ChronoField.ChronoField.YEAR, 4, 10, _SignStyle.SignStyle.EXCEEDS_PAD).appendLiteral('-').appendValue(_ChronoField.ChronoField.MONTH_OF_YEAR, 2).appendLiteral('-').appendValue(_ChronoField.ChronoField.DAY_OF_MONTH, 2).toFormatter(_ResolverStyle.ResolverStyle.STRICT).withChronology(_IsoChronology.IsoChronology.INSTANCE);

	    DateTimeFormatter.ISO_LOCAL_TIME = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendValue(_ChronoField.ChronoField.HOUR_OF_DAY, 2).appendLiteral(':').appendValue(_ChronoField.ChronoField.MINUTE_OF_HOUR, 2).optionalStart().appendLiteral(':').appendValue(_ChronoField.ChronoField.SECOND_OF_MINUTE, 2).optionalStart().appendFraction(_ChronoField.ChronoField.NANO_OF_SECOND, 0, 9, true).toFormatter(_ResolverStyle.ResolverStyle.STRICT);

	    DateTimeFormatter.ISO_LOCAL_DATE_TIME = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().parseCaseInsensitive().append(DateTimeFormatter.ISO_LOCAL_DATE).appendLiteral('T').append(DateTimeFormatter.ISO_LOCAL_TIME).toFormatter(_ResolverStyle.ResolverStyle.STRICT).withChronology(_IsoChronology.IsoChronology.INSTANCE);

	    DateTimeFormatter.ISO_INSTANT = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().parseCaseInsensitive().appendInstant().toFormatter(_ResolverStyle.ResolverStyle.STRICT);

	    DateTimeFormatter.ISO_OFFSET_DATE_TIME = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().parseCaseInsensitive().append(DateTimeFormatter.ISO_LOCAL_DATE_TIME).appendOffsetId().toFormatter(_ResolverStyle.ResolverStyle.STRICT).withChronology(_IsoChronology.IsoChronology.INSTANCE);

	    DateTimeFormatter.ISO_ZONED_DATE_TIME = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().append(DateTimeFormatter.ISO_OFFSET_DATE_TIME).optionalStart().appendLiteral('[').parseCaseSensitive().appendZoneId().appendLiteral(']').toFormatter(_ResolverStyle.ResolverStyle.STRICT).withChronology(_IsoChronology.IsoChronology.INSTANCE);

	    DateTimeFormatter.PARSED_EXCESS_DAYS = (0, _TemporalQuery.createTemporalQuery)('PARSED_EXCESS_DAYS', function (temporal) {
	        if (temporal instanceof _DateTimeBuilder.DateTimeBuilder) {
	            return temporal.excessDays;
	        } else {
	            return _Period.Period.ZERO;
	        }
	    });

	    DateTimeFormatter.PARSED_LEAP_SECOND = (0, _TemporalQuery.createTemporalQuery)('PARSED_LEAP_SECOND', function (temporal) {
	        if (temporal instanceof _DateTimeBuilder.DateTimeBuilder) {
	            return temporal.leapSecond;
	        } else {
	            return false;
	        }
	    });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Period = undefined;
	exports._init = _init;

	var _MathUtil = __webpack_require__(6);

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _IsoChronology = __webpack_require__(9);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalAmount2 = __webpack_require__(15);

	var _LocalDate = __webpack_require__(8);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos  
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var PATTERN = /([-+]?)P(?:([-+]?[0-9]+)Y)?(?:([-+]?[0-9]+)M)?(?:([-+]?[0-9]+)W)?(?:([-+]?[0-9]+)D)?/;

	var Period = exports.Period = function (_TemporalAmount) {
	    _inherits(Period, _TemporalAmount);

	    function Period(years, months, days) {
	        _classCallCheck(this, Period);

	        var _this = _possibleConstructorReturn(this, _TemporalAmount.call(this));

	        if ((years | months | days) === 0) {
	            var _ret;

	            return _ret = Period.ZERO, _possibleConstructorReturn(_this, _ret);
	        }
	        Period._validate(years, months, days);

	        _this._years = _MathUtil.MathUtil.safeToInt(years);

	        _this._months = _MathUtil.MathUtil.safeToInt(months);

	        _this._days = _MathUtil.MathUtil.safeToInt(days);
	        return _this;
	    }

	    Period._validate = function _validate(years, month, days) {
	        (0, _assert.requireNonNull)(years, 'years');
	        (0, _assert.requireNonNull)(month, 'month');
	        (0, _assert.requireNonNull)(days, 'days');
	    };

	    Period.ofYears = function ofYears(years) {
	        return Period.create(years, 0, 0);
	    };

	    Period.ofMonths = function ofMonths(months) {
	        return Period.create(0, months, 0);
	    };

	    Period.ofWeeks = function ofWeeks(weeks) {
	        return Period.create(0, 0, _MathUtil.MathUtil.safeMultiply(weeks, 7));
	    };

	    Period.ofDays = function ofDays(days) {
	        return Period.create(0, 0, days);
	    };

	    Period.of = function of(years, months, days) {
	        return Period.create(years, months, days);
	    };

	    Period.from = function from(amount) {
	        if (amount instanceof Period) {
	            return amount;
	        }

	        (0, _assert.requireNonNull)(amount, 'amount');
	        var years = 0;
	        var months = 0;
	        var days = 0;
	        var units = amount.units();
	        for (var i = 0; i < units.length; i++) {
	            var unit = units[i];
	            var unitAmount = amount.get(unit);
	            if (unit === _ChronoUnit.ChronoUnit.YEARS) {
	                years = _MathUtil.MathUtil.safeToInt(unitAmount);
	            } else if (unit === _ChronoUnit.ChronoUnit.MONTHS) {
	                months = _MathUtil.MathUtil.safeToInt(unitAmount);
	            } else if (unit === _ChronoUnit.ChronoUnit.DAYS) {
	                days = _MathUtil.MathUtil.safeToInt(unitAmount);
	            } else {
	                throw new _errors.DateTimeException('Unit must be Years, Months or Days, but was ' + unit);
	            }
	        }
	        return Period.create(years, months, days);
	    };

	    Period.between = function between(startDate, endDate) {
	        (0, _assert.requireNonNull)(startDate, 'startDate');
	        (0, _assert.requireNonNull)(endDate, 'endDate');
	        (0, _assert.requireInstance)(startDate, _LocalDate.LocalDate, 'startDate');
	        (0, _assert.requireInstance)(endDate, _LocalDate.LocalDate, 'endDate');
	        return startDate.until(endDate);
	    };

	    Period.parse = function parse(text) {
	        (0, _assert.requireNonNull)(text, 'text');
	        try {
	            return Period._parse(text);
	        } catch (ex) {
	            if (ex instanceof _errors.ArithmeticException) {
	                throw new _errors.DateTimeParseException('Text cannot be parsed to a Period', text, 0, ex);
	            } else {
	                throw ex;
	            }
	        }
	    };

	    Period._parse = function _parse(text) {
	        var matches = PATTERN.exec(text);
	        if (matches != null) {
	            var negate = '-' === matches[1] ? -1 : 1;
	            var yearMatch = matches[2];
	            var monthMatch = matches[3];
	            var weekMatch = matches[4];
	            var dayMatch = matches[5];
	            if (yearMatch != null || monthMatch != null || weekMatch != null || dayMatch != null) {
	                var years = Period._parseNumber(text, yearMatch, negate);
	                var months = Period._parseNumber(text, monthMatch, negate);
	                var weeks = Period._parseNumber(text, weekMatch, negate);
	                var days = Period._parseNumber(text, dayMatch, negate);
	                days = _MathUtil.MathUtil.safeAdd(days, _MathUtil.MathUtil.safeMultiply(weeks, 7));
	                return Period.create(years, months, days);
	            }
	        }
	        throw new _errors.DateTimeParseException('Text cannot be parsed to a Period', text, 0);
	    };

	    Period._parseNumber = function _parseNumber(text, str, negate) {
	        if (str == null) {
	            return 0;
	        }
	        var val = _MathUtil.MathUtil.parseInt(str);
	        return _MathUtil.MathUtil.safeMultiply(val, negate);
	    };

	    Period.create = function create(years, months, days) {
	        return new Period(years, months, days);
	    };

	    Period.prototype.units = function units() {
	        return [_ChronoUnit.ChronoUnit.YEARS, _ChronoUnit.ChronoUnit.MONTHS, _ChronoUnit.ChronoUnit.DAYS];
	    };

	    Period.prototype.chronology = function chronology() {
	        return _IsoChronology.IsoChronology.INSTANCE;
	    };

	    Period.prototype.get = function get(unit) {
	        if (unit === _ChronoUnit.ChronoUnit.YEARS) {
	            return this._years;
	        }
	        if (unit === _ChronoUnit.ChronoUnit.MONTHS) {
	            return this._months;
	        }
	        if (unit === _ChronoUnit.ChronoUnit.DAYS) {
	            return this._days;
	        }
	        throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	    };

	    Period.prototype.isZero = function isZero() {
	        return this === Period.ZERO;
	    };

	    Period.prototype.isNegative = function isNegative() {
	        return this._years < 0 || this._months < 0 || this._days < 0;
	    };

	    Period.prototype.years = function years() {
	        return this._years;
	    };

	    Period.prototype.months = function months() {
	        return this._months;
	    };

	    Period.prototype.days = function days() {
	        return this._days;
	    };

	    Period.prototype.withYears = function withYears(years) {
	        if (years === this._years) {
	            return this;
	        }
	        return Period.create(years, this._months, this._days);
	    };

	    Period.prototype.withMonths = function withMonths(months) {
	        if (months === this._months) {
	            return this;
	        }
	        return Period.create(this._years, months, this._days);
	    };

	    Period.prototype.withDays = function withDays(days) {
	        if (days === this._days) {
	            return this;
	        }
	        return Period.create(this._years, this._months, days);
	    };

	    Period.prototype.plus = function plus(amountToAdd) {
	        var amount = Period.from(amountToAdd);
	        return Period.create(_MathUtil.MathUtil.safeAdd(this._years, amount._years), _MathUtil.MathUtil.safeAdd(this._months, amount._months), _MathUtil.MathUtil.safeAdd(this._days, amount._days));
	    };

	    Period.prototype.plusYears = function plusYears(yearsToAdd) {
	        if (yearsToAdd === 0) {
	            return this;
	        }
	        return Period.create(_MathUtil.MathUtil.safeToInt(_MathUtil.MathUtil.safeAdd(this._years, yearsToAdd)), this._months, this._days);
	    };

	    Period.prototype.plusMonths = function plusMonths(monthsToAdd) {
	        if (monthsToAdd === 0) {
	            return this;
	        }
	        return Period.create(this._years, _MathUtil.MathUtil.safeToInt(_MathUtil.MathUtil.safeAdd(this._months, monthsToAdd)), this._days);
	    };

	    Period.prototype.plusDays = function plusDays(daysToAdd) {
	        if (daysToAdd === 0) {
	            return this;
	        }
	        return Period.create(this._years, this._months, _MathUtil.MathUtil.safeToInt(_MathUtil.MathUtil.safeAdd(this._days, daysToAdd)));
	    };

	    Period.prototype.minus = function minus(amountToSubtract) {
	        var amount = Period.from(amountToSubtract);
	        return Period.create(_MathUtil.MathUtil.safeSubtract(this._years, amount._years), _MathUtil.MathUtil.safeSubtract(this._months, amount._months), _MathUtil.MathUtil.safeSubtract(this._days, amount._days));
	    };

	    Period.prototype.minusYears = function minusYears(yearsToSubtract) {
	        return this.plusYears(-1 * yearsToSubtract);
	    };

	    Period.prototype.minusMonths = function minusMonths(monthsToSubtract) {
	        return this.plusMonths(-1 * monthsToSubtract);
	    };

	    Period.prototype.minusDays = function minusDays(daysToSubtract) {
	        return this.plusDays(-1 * daysToSubtract);
	    };

	    Period.prototype.multipliedBy = function multipliedBy(scalar) {
	        if (this === Period.ZERO || scalar === 1) {
	            return this;
	        }
	        return Period.create(_MathUtil.MathUtil.safeMultiply(this._years, scalar), _MathUtil.MathUtil.safeMultiply(this._months, scalar), _MathUtil.MathUtil.safeMultiply(this._days, scalar));
	    };

	    Period.prototype.negated = function negated() {
	        return this.multipliedBy(-1);
	    };

	    Period.prototype.normalized = function normalized() {
	        var totalMonths = this.toTotalMonths();
	        var splitYears = _MathUtil.MathUtil.intDiv(totalMonths, 12);
	        var splitMonths = _MathUtil.MathUtil.intMod(totalMonths, 12);
	        if (splitYears === this._years && splitMonths === this._months) {
	            return this;
	        }
	        return Period.create(_MathUtil.MathUtil.safeToInt(splitYears), splitMonths, this._days);
	    };

	    Period.prototype.toTotalMonths = function toTotalMonths() {
	        return this._years * 12 + this._months;
	    };

	    Period.prototype.addTo = function addTo(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (this._years !== 0) {
	            if (this._months !== 0) {
	                temporal = temporal.plus(this.toTotalMonths(), _ChronoUnit.ChronoUnit.MONTHS);
	            } else {
	                temporal = temporal.plus(this._years, _ChronoUnit.ChronoUnit.YEARS);
	            }
	        } else if (this._months !== 0) {
	            temporal = temporal.plus(this._months, _ChronoUnit.ChronoUnit.MONTHS);
	        }
	        if (this._days !== 0) {
	            temporal = temporal.plus(this._days, _ChronoUnit.ChronoUnit.DAYS);
	        }
	        return temporal;
	    };

	    Period.prototype.subtractFrom = function subtractFrom(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (this._years !== 0) {
	            if (this._months !== 0) {
	                temporal = temporal.minus(this.toTotalMonths(), _ChronoUnit.ChronoUnit.MONTHS);
	            } else {
	                temporal = temporal.minus(this._years, _ChronoUnit.ChronoUnit.YEARS);
	            }
	        } else if (this._months !== 0) {
	            temporal = temporal.minus(this._months, _ChronoUnit.ChronoUnit.MONTHS);
	        }
	        if (this._days !== 0) {
	            temporal = temporal.minus(this._days, _ChronoUnit.ChronoUnit.DAYS);
	        }
	        return temporal;
	    };

	    Period.prototype.equals = function equals(obj) {
	        if (this === obj) {
	            return true;
	        }
	        if (obj instanceof Period) {
	            var other = obj;
	            return this._years === other._years && this._months === other._months && this._days === other._days;
	        }
	        return false;
	    };

	    Period.prototype.hashCode = function hashCode() {
	        return this._years + (this._months << 8) + (this._days << 16);
	    };

	    Period.prototype.toString = function toString() {
	        if (this === Period.ZERO) {
	            return 'P0D';
	        } else {
	            var buf = 'P';
	            if (this._years !== 0) {
	                buf += '' + this._years + 'Y';
	            }
	            if (this._months !== 0) {
	                buf += '' + this._months + 'M';
	            }
	            if (this._days !== 0) {
	                buf += '' + this._days + 'D';
	            }
	            return buf;
	        }
	    };

	    Period.prototype.toJSON = function toJSON() {
	        return this.toString();
	    };

	    return Period;
	}(_TemporalAmount2.TemporalAmount);

	function _init() {
	    Period.ZERO = makeZeroPeriod();

	    function makeZeroPeriod() {
	        var zero = Object.create(Period.prototype);
	        _TemporalAmount2.TemporalAmount.call(zero);
	        zero._years = 0;
	        zero._months = 0;
	        zero._days = 0;
	        return zero;
	    }
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var ParsePosition = exports.ParsePosition = function () {
	    function ParsePosition(index) {
	        _classCallCheck(this, ParsePosition);

	        this._index = index;
	        this._errorIndex = -1;
	    }

	    ParsePosition.prototype.getIndex = function getIndex() {
	        return this._index;
	    };

	    ParsePosition.prototype.setIndex = function setIndex(index) {
	        this._index = index;
	    };

	    ParsePosition.prototype.getErrorIndex = function getErrorIndex() {
	        return this._errorIndex;
	    };

	    ParsePosition.prototype.setErrorIndex = function setErrorIndex(errorIndex) {
	        this._errorIndex = errorIndex;
	    };

	    return ParsePosition;
	}();

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.DateTimeBuilder = undefined;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _EnumMap = __webpack_require__(35);

	var _ResolverStyle = __webpack_require__(36);

	var _IsoChronology = __webpack_require__(9);

	var _ChronoLocalDate = __webpack_require__(30);

	var _ChronoField = __webpack_require__(12);

	var _Temporal2 = __webpack_require__(37);

	var _TemporalQueries = __webpack_require__(25);

	var _LocalTime = __webpack_require__(5);

	var _LocalDate = __webpack_require__(8);

	var _Period = __webpack_require__(32);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var DateTimeBuilder = function (_Temporal) {
	    _inherits(DateTimeBuilder, _Temporal);

	    DateTimeBuilder.create = function create(field, value) {
	        var dtb = new DateTimeBuilder();
	        dtb._addFieldValue(field, value);
	        return dtb;
	    };

	    function DateTimeBuilder() {
	        _classCallCheck(this, DateTimeBuilder);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this.fieldValues = new _EnumMap.EnumMap();

	        _this.chrono = null;

	        _this.zone = null;

	        _this.date = null;

	        _this.time = null;

	        _this.leapSecond = false;

	        _this.excessDays = null;
	        return _this;
	    }

	    DateTimeBuilder.prototype.getFieldValue0 = function getFieldValue0(field) {
	        return this.fieldValues.get(field);
	    };

	    DateTimeBuilder.prototype._addFieldValue = function _addFieldValue(field, value) {
	        (0, _assert.requireNonNull)(field, 'field');
	        var old = this.getFieldValue0(field);
	        if (old != null && old.longValue() !== value) {
	            throw new _errors.DateTimeException('Conflict found: ' + field + ' ' + old + ' differs from ' + field + ' ' + value + ': ' + this);
	        }
	        return this._putFieldValue0(field, value);
	    };

	    DateTimeBuilder.prototype._putFieldValue0 = function _putFieldValue0(field, value) {
	        this.fieldValues.put(field, value);
	        return this;
	    };

	    DateTimeBuilder.prototype.resolve = function resolve(resolverStyle, resolverFields) {
	        if (resolverFields != null) {
	            this.fieldValues.retainAll(resolverFields);
	        }

	        this._mergeDate(resolverStyle);
	        this._mergeTime(resolverStyle);

	        this._resolveTimeInferZeroes(resolverStyle);

	        if (this.excessDays != null && this.excessDays.isZero() === false && this.date != null && this.time != null) {
	            this.date = this.date.plus(this.excessDays);
	            this.excessDays = _Period.Period.ZERO;
	        }

	        return this;
	    };

	    DateTimeBuilder.prototype._mergeDate = function _mergeDate(resolverStyle) {
	        this._checkDate(_IsoChronology.IsoChronology.INSTANCE.resolveDate(this.fieldValues, resolverStyle));
	    };

	    DateTimeBuilder.prototype._checkDate = function _checkDate(date) {
	        if (date != null) {
	            this._addObject(date);
	            for (var field in this.fieldValues.keySet()) {
	                if (field instanceof _ChronoField.ChronoField) {
	                    if (field.isDateBased()) {
	                        var val1;
	                        try {
	                            val1 = date.getLong(field);
	                        } catch (ex) {
	                            if (ex instanceof _errors.DateTimeException) {
	                                continue;
	                            } else {
	                                throw ex;
	                            }
	                        }
	                        var val2 = this.fieldValues.get(field);
	                        if (val1 !== val2) {
	                            throw new _errors.DateTimeException('Conflict found: Field ' + field + ' ' + val1 + ' differs from ' + field + ' ' + val2 + ' derived from ' + date);
	                        }
	                    }
	                }
	            }
	        }
	    };

	    DateTimeBuilder.prototype._mergeTime = function _mergeTime(resolverStyle) {
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.CLOCK_HOUR_OF_DAY)) {
	            var ch = this.fieldValues.remove(_ChronoField.ChronoField.CLOCK_HOUR_OF_DAY);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                if (resolverStyle === _ResolverStyle.ResolverStyle.SMART && ch === 0) {} else {
	                        _ChronoField.ChronoField.CLOCK_HOUR_OF_DAY.checkValidValue(ch);
	                    }
	            }
	            this._addFieldValue(_ChronoField.ChronoField.HOUR_OF_DAY, ch === 24 ? 0 : ch);
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.CLOCK_HOUR_OF_AMPM)) {
	            var _ch = this.fieldValues.remove(_ChronoField.ChronoField.CLOCK_HOUR_OF_AMPM);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                if (resolverStyle === _ResolverStyle.ResolverStyle.SMART && _ch === 0) {} else {
	                        _ChronoField.ChronoField.CLOCK_HOUR_OF_AMPM.checkValidValue(_ch);
	                    }
	            }
	            this._addFieldValue(_ChronoField.ChronoField.HOUR_OF_AMPM, _ch === 12 ? 0 : _ch);
	        }
	        if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	            if (this.fieldValues.containsKey(_ChronoField.ChronoField.AMPM_OF_DAY)) {
	                _ChronoField.ChronoField.AMPM_OF_DAY.checkValidValue(this.fieldValues.get(_ChronoField.ChronoField.AMPM_OF_DAY));
	            }
	            if (this.fieldValues.containsKey(_ChronoField.ChronoField.HOUR_OF_AMPM)) {
	                _ChronoField.ChronoField.HOUR_OF_AMPM.checkValidValue(this.fieldValues.get(_ChronoField.ChronoField.HOUR_OF_AMPM));
	            }
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.AMPM_OF_DAY) && this.fieldValues.containsKey(_ChronoField.ChronoField.HOUR_OF_AMPM)) {
	            var ap = this.fieldValues.remove(_ChronoField.ChronoField.AMPM_OF_DAY);
	            var hap = this.fieldValues.remove(_ChronoField.ChronoField.HOUR_OF_AMPM);
	            this._addFieldValue(_ChronoField.ChronoField.HOUR_OF_DAY, ap * 12 + hap);
	        }

	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.NANO_OF_DAY)) {
	            var nod = this.fieldValues.remove(_ChronoField.ChronoField.NANO_OF_DAY);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                _ChronoField.ChronoField.NANO_OF_DAY.checkValidValue(nod);
	            }
	            this._addFieldValue(_ChronoField.ChronoField.SECOND_OF_DAY, _MathUtil.MathUtil.intDiv(nod, 1000000000));
	            this._addFieldValue(_ChronoField.ChronoField.NANO_OF_SECOND, _MathUtil.MathUtil.intMod(nod, 1000000000));
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MICRO_OF_DAY)) {
	            var cod = this.fieldValues.remove(_ChronoField.ChronoField.MICRO_OF_DAY);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                _ChronoField.ChronoField.MICRO_OF_DAY.checkValidValue(cod);
	            }
	            this._addFieldValue(_ChronoField.ChronoField.SECOND_OF_DAY, _MathUtil.MathUtil.intDiv(cod, 1000000));
	            this._addFieldValue(_ChronoField.ChronoField.MICRO_OF_SECOND, _MathUtil.MathUtil.intMod(cod, 1000000));
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MILLI_OF_DAY)) {
	            var lod = this.fieldValues.remove(_ChronoField.ChronoField.MILLI_OF_DAY);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                _ChronoField.ChronoField.MILLI_OF_DAY.checkValidValue(lod);
	            }
	            this._addFieldValue(_ChronoField.ChronoField.SECOND_OF_DAY, _MathUtil.MathUtil.intDiv(lod, 1000));
	            this._addFieldValue(_ChronoField.ChronoField.MILLI_OF_SECOND, _MathUtil.MathUtil.intMod(lod, 1000));
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.SECOND_OF_DAY)) {
	            var sod = this.fieldValues.remove(_ChronoField.ChronoField.SECOND_OF_DAY);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                _ChronoField.ChronoField.SECOND_OF_DAY.checkValidValue(sod);
	            }
	            this._addFieldValue(_ChronoField.ChronoField.HOUR_OF_DAY, _MathUtil.MathUtil.intDiv(sod, 3600));
	            this._addFieldValue(_ChronoField.ChronoField.MINUTE_OF_HOUR, _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(sod, 60), 60));
	            this._addFieldValue(_ChronoField.ChronoField.SECOND_OF_MINUTE, _MathUtil.MathUtil.intMod(sod, 60));
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MINUTE_OF_DAY)) {
	            var mod = this.fieldValues.remove(_ChronoField.ChronoField.MINUTE_OF_DAY);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                _ChronoField.ChronoField.MINUTE_OF_DAY.checkValidValue(mod);
	            }
	            this._addFieldValue(_ChronoField.ChronoField.HOUR_OF_DAY, _MathUtil.MathUtil.intDiv(mod, 60));
	            this._addFieldValue(_ChronoField.ChronoField.MINUTE_OF_HOUR, _MathUtil.MathUtil.intMod(mod, 60));
	        }

	        if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	            if (this.fieldValues.containsKey(_ChronoField.ChronoField.MILLI_OF_SECOND)) {
	                _ChronoField.ChronoField.MILLI_OF_SECOND.checkValidValue(this.fieldValues.get(_ChronoField.ChronoField.MILLI_OF_SECOND));
	            }
	            if (this.fieldValues.containsKey(_ChronoField.ChronoField.MICRO_OF_SECOND)) {
	                _ChronoField.ChronoField.MICRO_OF_SECOND.checkValidValue(this.fieldValues.get(_ChronoField.ChronoField.MICRO_OF_SECOND));
	            }
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MILLI_OF_SECOND) && this.fieldValues.containsKey(_ChronoField.ChronoField.MICRO_OF_SECOND)) {
	            var los = this.fieldValues.remove(_ChronoField.ChronoField.MILLI_OF_SECOND);
	            var cos = this.fieldValues.get(_ChronoField.ChronoField.MICRO_OF_SECOND);
	            this._addFieldValue(_ChronoField.ChronoField.MICRO_OF_SECOND, los * 1000 + _MathUtil.MathUtil.intMod(cos, 1000));
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MICRO_OF_SECOND) && this.fieldValues.containsKey(_ChronoField.ChronoField.NANO_OF_SECOND)) {
	            var nos = this.fieldValues.get(_ChronoField.ChronoField.NANO_OF_SECOND);
	            this._addFieldValue(_ChronoField.ChronoField.MICRO_OF_SECOND, _MathUtil.MathUtil.intDiv(nos, 1000));
	            this.fieldValues.remove(_ChronoField.ChronoField.MICRO_OF_SECOND);
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MILLI_OF_SECOND) && this.fieldValues.containsKey(_ChronoField.ChronoField.NANO_OF_SECOND)) {
	            var _nos = this.fieldValues.get(_ChronoField.ChronoField.NANO_OF_SECOND);
	            this._addFieldValue(_ChronoField.ChronoField.MILLI_OF_SECOND, _MathUtil.MathUtil.intDiv(_nos, 1000000));
	            this.fieldValues.remove(_ChronoField.ChronoField.MILLI_OF_SECOND);
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MICRO_OF_SECOND)) {
	            var _cos = this.fieldValues.remove(_ChronoField.ChronoField.MICRO_OF_SECOND);
	            this._addFieldValue(_ChronoField.ChronoField.NANO_OF_SECOND, _cos * 1000);
	        } else if (this.fieldValues.containsKey(_ChronoField.ChronoField.MILLI_OF_SECOND)) {
	            var _los = this.fieldValues.remove(_ChronoField.ChronoField.MILLI_OF_SECOND);
	            this._addFieldValue(_ChronoField.ChronoField.NANO_OF_SECOND, _los * 1000000);
	        }
	    };

	    DateTimeBuilder.prototype._resolveTimeInferZeroes = function _resolveTimeInferZeroes(resolverStyle) {
	        var hod = this.fieldValues.get(_ChronoField.ChronoField.HOUR_OF_DAY);
	        var moh = this.fieldValues.get(_ChronoField.ChronoField.MINUTE_OF_HOUR);
	        var som = this.fieldValues.get(_ChronoField.ChronoField.SECOND_OF_MINUTE);
	        var nos = this.fieldValues.get(_ChronoField.ChronoField.NANO_OF_SECOND);
	        if (hod == null) {
	            return;
	        }
	        if (moh == null && (som != null || nos != null)) {
	            return;
	        }
	        if (moh != null && som == null && nos != null) {
	            return;
	        }
	        if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	            if (hod != null) {
	                if (resolverStyle === _ResolverStyle.ResolverStyle.SMART && hod === 24 && (moh == null || moh === 0) && (som == null || som === 0) && (nos == null || nos === 0)) {
	                    hod = 0;
	                    this.excessDays = _Period.Period.ofDays(1);
	                }
	                var hodVal = _ChronoField.ChronoField.HOUR_OF_DAY.checkValidIntValue(hod);
	                if (moh != null) {
	                    var mohVal = _ChronoField.ChronoField.MINUTE_OF_HOUR.checkValidIntValue(moh);
	                    if (som != null) {
	                        var somVal = _ChronoField.ChronoField.SECOND_OF_MINUTE.checkValidIntValue(som);
	                        if (nos != null) {
	                            var nosVal = _ChronoField.ChronoField.NANO_OF_SECOND.checkValidIntValue(nos);
	                            this._addObject(_LocalTime.LocalTime.of(hodVal, mohVal, somVal, nosVal));
	                        } else {
	                            this._addObject(_LocalTime.LocalTime.of(hodVal, mohVal, somVal));
	                        }
	                    } else {
	                        if (nos == null) {
	                            this._addObject(_LocalTime.LocalTime.of(hodVal, mohVal));
	                        }
	                    }
	                } else {
	                    if (som == null && nos == null) {
	                        this._addObject(_LocalTime.LocalTime.of(hodVal, 0));
	                    }
	                }
	            }
	        } else {
	            if (hod != null) {
	                var _hodVal = hod;
	                if (moh != null) {
	                    if (som != null) {
	                        if (nos == null) {
	                            nos = 0;
	                        }
	                        var totalNanos = _MathUtil.MathUtil.safeMultiply(_hodVal, 3600000000000);
	                        totalNanos = _MathUtil.MathUtil.safeAdd(totalNanos, _MathUtil.MathUtil.safeMultiply(moh, 60000000000));
	                        totalNanos = _MathUtil.MathUtil.safeAdd(totalNanos, _MathUtil.MathUtil.safeMultiply(som, 1000000000));
	                        totalNanos = _MathUtil.MathUtil.safeAdd(totalNanos, nos);
	                        var excessDays = _MathUtil.MathUtil.floorDiv(totalNanos, 86400000000000);
	                        var nod = _MathUtil.MathUtil.floorMod(totalNanos, 86400000000000);
	                        this._addObject(_LocalTime.LocalTime.ofNanoOfDay(nod));
	                        this.excessDays = _Period.Period.ofDays(excessDays);
	                    } else {
	                        var totalSecs = _MathUtil.MathUtil.safeMultiply(_hodVal, 3600);
	                        totalSecs = _MathUtil.MathUtil.safeAdd(totalSecs, _MathUtil.MathUtil.safeMultiply(moh, 60));
	                        var _excessDays = _MathUtil.MathUtil.floorDiv(totalSecs, 86400);
	                        var sod = _MathUtil.MathUtil.floorMod(totalSecs, 86400);
	                        this._addObject(_LocalTime.LocalTime.ofSecondOfDay(sod));
	                        this.excessDays = _Period.Period.ofDays(_excessDays);
	                    }
	                } else {
	                    var _excessDays2 = _MathUtil.MathUtil.safeToInt(_MathUtil.MathUtil.floorDiv(_hodVal, 24));
	                    _hodVal = _MathUtil.MathUtil.floorMod(_hodVal, 24);
	                    this._addObject(_LocalTime.LocalTime.of(_hodVal, 0));
	                    this.excessDays = _Period.Period.ofDays(_excessDays2);
	                }
	            }
	        }
	        this.fieldValues.remove(_ChronoField.ChronoField.HOUR_OF_DAY);
	        this.fieldValues.remove(_ChronoField.ChronoField.MINUTE_OF_HOUR);
	        this.fieldValues.remove(_ChronoField.ChronoField.SECOND_OF_MINUTE);
	        this.fieldValues.remove(_ChronoField.ChronoField.NANO_OF_SECOND);
	    };

	    DateTimeBuilder.prototype._addObject = function _addObject(dateOrTime) {
	        if (dateOrTime instanceof _ChronoLocalDate.ChronoLocalDate) {
	            this.date = dateOrTime;
	        } else if (dateOrTime instanceof _LocalTime.LocalTime) {
	            this.time = dateOrTime;
	        }
	    };

	    DateTimeBuilder.prototype.build = function build(type) {
	        return type.queryFrom(this);
	    };

	    DateTimeBuilder.prototype.isSupported = function isSupported(field) {
	        if (field == null) {
	            return false;
	        }
	        return this.fieldValues.containsKey(field) || this.date != null && this.date.isSupported(field) || this.time != null && this.time.isSupported(field);
	    };

	    DateTimeBuilder.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        var value = this.getFieldValue0(field);
	        if (value == null) {
	            if (this.date != null && this.date.isSupported(field)) {
	                return this.date.getLong(field);
	            }
	            if (this.time != null && this.time.isSupported(field)) {
	                return this.time.getLong(field);
	            }
	            throw new _errors.DateTimeException('Field not found: ' + field);
	        }
	        return value;
	    };

	    DateTimeBuilder.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.zoneId()) {
	            return this.zone;
	        } else if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return this.chrono;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return this.date != null ? _LocalDate.LocalDate.from(this.date) : null;
	        } else if (_query === _TemporalQueries.TemporalQueries.localTime()) {
	            return this.time;
	        } else if (_query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return _query.queryFrom(this);
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return null;
	        }

	        return _query.queryFrom(this);
	    };

	    return DateTimeBuilder;
	}(_Temporal2.Temporal);

	exports.DateTimeBuilder = DateTimeBuilder;

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var EnumMap = exports.EnumMap = function () {
	    function EnumMap() {
	        _classCallCheck(this, EnumMap);

	        this._map = {};
	    }

	    EnumMap.prototype.putAll = function putAll(otherMap) {
	        for (var key in otherMap._map) {
	            this._map[key] = otherMap._map[key];
	        }
	        return this;
	    };

	    EnumMap.prototype.containsKey = function containsKey(key) {
	        return this._map.hasOwnProperty(key.name());
	    };

	    EnumMap.prototype.get = function get(key) {
	        return this._map[key.name()];
	    };

	    EnumMap.prototype.put = function put(key, val) {
	        return this.set(key, val);
	    };

	    EnumMap.prototype.set = function set(key, val) {
	        this._map[key.name()] = val;
	        return this;
	    };

	    EnumMap.prototype.retainAll = function retainAll(keyList) {
	        var map = {};
	        for (var i = 0; i < keyList.length; i++) {
	            var key = keyList[i].name();
	            map[key] = this._map[key];
	        }
	        this._map = map;
	        return this;
	    };

	    EnumMap.prototype.remove = function remove(key) {
	        var keyName = key.name();
	        var val = this._map[keyName];
	        this._map[keyName] = undefined;
	        return val;
	    };

	    EnumMap.prototype.keySet = function keySet() {
	        return this._map;
	    };

	    EnumMap.prototype.clear = function clear() {
	        this._map = {};
	    };

	    return EnumMap;
	}();

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ResolverStyle = undefined;

	var _Enum2 = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ResolverStyle = exports.ResolverStyle = function (_Enum) {
	  _inherits(ResolverStyle, _Enum);

	  function ResolverStyle() {
	    _classCallCheck(this, ResolverStyle);

	    return _possibleConstructorReturn(this, _Enum.apply(this, arguments));
	  }

	  return ResolverStyle;
	}(_Enum2.Enum);

	ResolverStyle.STRICT = new ResolverStyle('STRICT');

	ResolverStyle.SMART = new ResolverStyle('SMART');

	ResolverStyle.LENIENT = new ResolverStyle('LENIENT');

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Temporal = undefined;

	var _TemporalAccessor2 = __webpack_require__(38);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Temporal = exports.Temporal = function (_TemporalAccessor) {
	  _inherits(Temporal, _TemporalAccessor);

	  function Temporal() {
	    _classCallCheck(this, Temporal);

	    return _possibleConstructorReturn(this, _TemporalAccessor.apply(this, arguments));
	  }

	  return Temporal;
	}(_TemporalAccessor2.TemporalAccessor);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.TemporalAccessor = undefined;

	var _errors = __webpack_require__(3);

	var _ChronoField = __webpack_require__(12);

	var _TemporalQueries = __webpack_require__(25);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var TemporalAccessor = function () {
	    function TemporalAccessor() {
	        _classCallCheck(this, TemporalAccessor);
	    }

	    TemporalAccessor.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.chronology() || _query === _TemporalQueries.TemporalQueries.precision()) {
	            return null;
	        }
	        return _query.queryFrom(this);
	    };

	    TemporalAccessor.prototype.get = function get(field) {
	        return this.range(field).checkValidIntValue(this.getLong(field), field);
	    };

	    TemporalAccessor.prototype.range = function range(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            if (this.isSupported(field)) {
	                return field.range();
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.rangeRefinedBy(this);
	    };

	    return TemporalAccessor;
	}();

	exports.TemporalAccessor = TemporalAccessor;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.DateTimeParseContext = undefined;

	var _assert = __webpack_require__(2);

	var _DateTimeBuilder = __webpack_require__(34);

	var _EnumMap = __webpack_require__(35);

	var _IsoChronology = __webpack_require__(9);

	var _Temporal2 = __webpack_require__(37);

	var _TemporalQueries = __webpack_require__(25);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var DateTimeParseContext = exports.DateTimeParseContext = function () {
	    function DateTimeParseContext() {
	        _classCallCheck(this, DateTimeParseContext);

	        if (arguments.length === 1) {
	            if (arguments[0] instanceof DateTimeParseContext) {
	                this._constructorSelf.apply(this, arguments);
	                return;
	            } else {
	                this._constructorFormatter.apply(this, arguments);
	            }
	        } else {
	            this._constructorParam.apply(this, arguments);
	        }

	        this._caseSensitive = true;
	        this._strict = true;
	        this._parsed = [new Parsed(this)];
	    }

	    DateTimeParseContext.prototype._constructorParam = function _constructorParam(locale, symbols, chronology) {
	        this._locale = locale;
	        this._symbols = symbols;
	        this._overrideChronology = chronology;
	    };

	    DateTimeParseContext.prototype._constructorFormatter = function _constructorFormatter(formatter) {
	        this._locale = formatter.locale();
	        this._symbols = formatter.decimalStyle();
	        this._overrideChronology = formatter.chronology();
	    };

	    DateTimeParseContext.prototype._constructorSelf = function _constructorSelf(other) {
	        this._locale = other._locale;
	        this._symbols = other._symbols;
	        this._overrideChronology = other._overrideChronology;
	        this._overrideZone = other._overrideZone;
	        this._caseSensitive = other._caseSensitive;
	        this._strict = other._strict;
	        this._parsed = [new Parsed(this)];
	    };

	    DateTimeParseContext.prototype.copy = function copy() {
	        return new DateTimeParseContext(this);
	    };

	    DateTimeParseContext.prototype.symbols = function symbols() {
	        return this._symbols;
	    };

	    DateTimeParseContext.prototype.isStrict = function isStrict() {
	        return this._strict;
	    };

	    DateTimeParseContext.prototype.setStrict = function setStrict(strict) {
	        this._strict = strict;
	    };

	    DateTimeParseContext.prototype.startOptional = function startOptional() {
	        this._parsed.push(this.currentParsed().copy());
	    };

	    DateTimeParseContext.prototype.endOptional = function endOptional(successful) {
	        if (successful) {
	            this._parsed.splice(this._parsed.length - 2, 1);
	        } else {
	            this._parsed.splice(this._parsed.length - 1, 1);
	        }
	    };

	    DateTimeParseContext.prototype.isCaseSensitive = function isCaseSensitive() {
	        return this._caseSensitive;
	    };

	    DateTimeParseContext.prototype.setCaseSensitive = function setCaseSensitive(caseSensitive) {
	        this._caseSensitive = caseSensitive;
	    };

	    DateTimeParseContext.prototype.subSequenceEquals = function subSequenceEquals(cs1, offset1, cs2, offset2, length) {
	        if (offset1 + length > cs1.length || offset2 + length > cs2.length) {
	            return false;
	        }
	        if (!this.isCaseSensitive()) {
	            cs1 = cs1.toLowerCase();
	            cs2 = cs2.toLowerCase();
	        }
	        for (var i = 0; i < length; i++) {
	            var ch1 = cs1[offset1 + i];
	            var ch2 = cs2[offset2 + i];
	            if (ch1 !== ch2) {
	                return false;
	            }
	        }
	        return true;
	    };

	    DateTimeParseContext.prototype.charEquals = function charEquals(ch1, ch2) {
	        if (this.isCaseSensitive()) {
	            return ch1 === ch2;
	        }
	        return this.charEqualsIgnoreCase(ch1, ch2);
	    };

	    DateTimeParseContext.prototype.charEqualsIgnoreCase = function charEqualsIgnoreCase(c1, c2) {
	        return c1 === c2 || c1.toLowerCase() === c2.toLowerCase();
	    };

	    DateTimeParseContext.prototype.setParsedField = function setParsedField(field, value, errorPos, successPos) {
	        var currentParsedFieldValues = this.currentParsed().fieldValues;
	        var old = currentParsedFieldValues.get(field);
	        currentParsedFieldValues.set(field, value);
	        return old != null && old !== value ? ~errorPos : successPos;
	    };

	    DateTimeParseContext.prototype.setParsedZone = function setParsedZone(zone) {
	        (0, _assert.requireNonNull)(zone, 'zone');
	        this.currentParsed().zone = zone;
	    };

	    DateTimeParseContext.prototype.getParsed = function getParsed(field) {
	        return this.currentParsed().fieldValues.get(field);
	    };

	    DateTimeParseContext.prototype.toParsed = function toParsed() {
	        return this.currentParsed();
	    };

	    DateTimeParseContext.prototype.currentParsed = function currentParsed() {
	        return this._parsed[this._parsed.length - 1];
	    };

	    DateTimeParseContext.prototype.setParsedLeapSecond = function setParsedLeapSecond() {
	        this.currentParsed().leapSecond = true;
	    };

	    DateTimeParseContext.prototype.getEffectiveChronology = function getEffectiveChronology() {
	        var chrono = this.currentParsed().chrono;
	        if (chrono == null) {
	            chrono = this._overrideChronology;
	            if (chrono == null) {
	                chrono = _IsoChronology.IsoChronology.INSTANCE;
	            }
	        }
	        return chrono;
	    };

	    return DateTimeParseContext;
	}();

	var Parsed = function (_Temporal) {
	    _inherits(Parsed, _Temporal);

	    function Parsed(dateTimeParseContext) {
	        _classCallCheck(this, Parsed);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this.chrono = null;
	        _this.zone = null;
	        _this.fieldValues = new _EnumMap.EnumMap();
	        _this.leapSecond = false;
	        _this.dateTimeParseContext = dateTimeParseContext;
	        return _this;
	    }

	    Parsed.prototype.copy = function copy() {
	        var cloned = new Parsed();
	        cloned.chrono = this.chrono;
	        cloned.zone = this.zone;
	        cloned.fieldValues.putAll(this.fieldValues);
	        cloned.leapSecond = this.leapSecond;
	        cloned.dateTimeParseContext = this.dateTimeParseContext;
	        return cloned;
	    };

	    Parsed.prototype.toString = function toString() {
	        return this.fieldValues + ', ' + this.chrono + ', ' + this.zone;
	    };

	    Parsed.prototype.isSupported = function isSupported(field) {
	        return this.fieldValues.containsKey(field);
	    };

	    Parsed.prototype.get = function get(field) {
	        var val = this.fieldValues.get(field);
	        (0, _assert.assert)(val != null);
	        return val;
	    };

	    Parsed.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return this.chrono;
	        }
	        if (_query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.zone()) {
	            return this.zone;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    Parsed.prototype.toBuilder = function toBuilder() {
	        var builder = new _DateTimeBuilder.DateTimeBuilder();
	        builder.fieldValues.putAll(this.fieldValues);
	        builder.chrono = this.dateTimeParseContext.getEffectiveChronology();
	        if (this.zone != null) {
	            builder.zone = this.zone;
	        } else {
	            builder.zone = this.overrideZone;
	        }
	        builder.leapSecond = this.leapSecond;
	        builder.excessDays = this.excessDays;
	        return builder;
	    };

	    return Parsed;
	}(_Temporal2.Temporal);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.DateTimePrintContext = undefined;

	var _errors = __webpack_require__(3);

	var _DateTimeFormatter = __webpack_require__(31);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var DateTimePrintContext = exports.DateTimePrintContext = function () {
	    function DateTimePrintContext(temporal, localeOrFormatter, symbols) {
	        _classCallCheck(this, DateTimePrintContext);

	        if (arguments.length === 2 && arguments[1] instanceof _DateTimeFormatter.DateTimeFormatter) {
	            this._temporal = DateTimePrintContext.adjust(temporal, localeOrFormatter);
	            this._locale = localeOrFormatter.locale();
	            this._symbols = localeOrFormatter.decimalStyle();
	        } else {
	            this._temporal = temporal;
	            this._locale = localeOrFormatter;
	            this._symbols = symbols;
	        }
	        this._optional = 0;
	    }

	    DateTimePrintContext.adjust = function adjust(temporal, formatter) {
	        return temporal;
	    };

	    DateTimePrintContext.prototype.symbols = function symbols() {
	        return this._symbols;
	    };

	    DateTimePrintContext.prototype.startOptional = function startOptional() {
	        this._optional++;
	    };

	    DateTimePrintContext.prototype.endOptional = function endOptional() {
	        this._optional--;
	    };

	    DateTimePrintContext.prototype.getValueQuery = function getValueQuery(query) {
	        var result = this._temporal.query(query);
	        if (result == null && this._optional === 0) {
	            throw new _errors.DateTimeException('Unable to extract value: ' + this._temporal);
	        }
	        return result;
	    };

	    DateTimePrintContext.prototype.getValue = function getValue(field) {
	        try {
	            return this._temporal.getLong(field);
	        } catch (ex) {
	            if (ex instanceof _errors.DateTimeException && this._optional > 0) {
	                return null;
	            }
	            throw ex;
	        }
	    };

	    DateTimePrintContext.prototype.temporal = function temporal() {
	        return this._temporal;
	    };

	    DateTimePrintContext.prototype.setDateTime = function setDateTime(temporal) {
	        this._temporal = temporal;
	    };

	    return DateTimePrintContext;
	}();

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.SignStyle = undefined;

	var _Enum2 = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var SignStyle = exports.SignStyle = function (_Enum) {
	    _inherits(SignStyle, _Enum);

	    function SignStyle() {
	        _classCallCheck(this, SignStyle);

	        return _possibleConstructorReturn(this, _Enum.apply(this, arguments));
	    }

	    SignStyle.prototype.parse = function parse(positive, strict, fixedWidth) {
	        switch (this) {
	            case SignStyle.NORMAL:
	                return !positive || !strict;
	            case SignStyle.ALWAYS:
	            case SignStyle.EXCEEDS_PAD:
	                return true;
	            default:
	                return !strict && !fixedWidth;
	        }
	    };

	    return SignStyle;
	}(_Enum2.Enum);

	SignStyle.NORMAL = new SignStyle('NORMAL');
	SignStyle.NEVER = new SignStyle('NEVER');
	SignStyle.ALWAYS = new SignStyle('ALWAYS');
	SignStyle.EXCEEDS_PAD = new SignStyle('EXCEEDS_PAD');
	SignStyle.NOT_NEGATIVE = new SignStyle('NOT_NEGATIVE');

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var StringBuilder = exports.StringBuilder = function () {
	    function StringBuilder() {
	        _classCallCheck(this, StringBuilder);

	        this._str = '';
	    }

	    StringBuilder.prototype.append = function append(str) {
	        this._str += str;
	        return this;
	    };

	    StringBuilder.prototype.appendChar = function appendChar(str) {
	        this._str += str[0];
	        return this;
	    };

	    StringBuilder.prototype.insert = function insert(offset, str) {
	        this._str = this._str.slice(0, offset) + str + this._str.slice(offset);
	        return this;
	    };

	    StringBuilder.prototype.replace = function replace(start, end, str) {
	        this._str = this._str.slice(0, start) + str + this._str.slice(end);
	        return this;
	    };

	    StringBuilder.prototype.length = function length() {
	        return this._str.length;
	    };

	    StringBuilder.prototype.setLength = function setLength(length) {
	        this._str = this._str.slice(0, length);
	        return this;
	    };

	    StringBuilder.prototype.toString = function toString() {
	        return this._str;
	    };

	    return StringBuilder;
	}();

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.TemporalQuery = undefined;
	exports.createTemporalQuery = createTemporalQuery;

	var _assert = __webpack_require__(2);

	var _Enum2 = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var TemporalQuery = exports.TemporalQuery = function (_Enum) {
	  _inherits(TemporalQuery, _Enum);

	  function TemporalQuery() {
	    _classCallCheck(this, TemporalQuery);

	    return _possibleConstructorReturn(this, _Enum.apply(this, arguments));
	  }

	  TemporalQuery.prototype.queryFrom = function queryFrom(temporal) {
	    (0, _assert.abstractMethodFail)('queryFrom');
	  };

	  return TemporalQuery;
	}(_Enum2.Enum);

	function createTemporalQuery(name, queryFromFunction) {
	  var ExtendedTemporalQuery = function (_TemporalQuery) {
	    _inherits(ExtendedTemporalQuery, _TemporalQuery);

	    function ExtendedTemporalQuery() {
	      _classCallCheck(this, ExtendedTemporalQuery);

	      return _possibleConstructorReturn(this, _TemporalQuery.apply(this, arguments));
	    }

	    return ExtendedTemporalQuery;
	  }(TemporalQuery);

	  ExtendedTemporalQuery.prototype.queryFrom = queryFromFunction;
	  return new ExtendedTemporalQuery(name);
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.IsoFields = undefined;
	exports._init = _init;

	var _errors = __webpack_require__(3);

	var _DayOfWeek = __webpack_require__(45);

	var _Duration = __webpack_require__(14);

	var _MathUtil = __webpack_require__(6);

	var _LocalDate = __webpack_require__(8);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalField2 = __webpack_require__(18);

	var _TemporalUnit2 = __webpack_require__(17);

	var _ValueRange = __webpack_require__(19);

	var _IsoChronology = __webpack_require__(9);

	var _ResolverStyle = __webpack_require__(36);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var IsoFields = exports.IsoFields = function IsoFields() {
	    _classCallCheck(this, IsoFields);
	};

	var QUARTER_DAYS = [0, 90, 181, 273, 0, 91, 182, 274];

	var Field = function (_TemporalField) {
	    _inherits(Field, _TemporalField);

	    function Field() {
	        _classCallCheck(this, Field);

	        return _possibleConstructorReturn(this, _TemporalField.apply(this, arguments));
	    }

	    Field.prototype.resolve = function resolve() {
	        return null;
	    };

	    Field.prototype.isDateBased = function isDateBased() {
	        return true;
	    };

	    Field.prototype.isTimeBased = function isTimeBased() {
	        return false;
	    };

	    Field.prototype._isIso = function _isIso() {
	        return true;
	    };

	    Field._getWeekRangeByLocalDate = function _getWeekRangeByLocalDate(date) {
	        var wby = Field._getWeekBasedYear(date);
	        return _ValueRange.ValueRange.of(1, Field._getWeekRangeByYear(wby));
	    };

	    Field._getWeekRangeByYear = function _getWeekRangeByYear(wby) {
	        var date = _LocalDate.LocalDate.of(wby, 1, 1);

	        if (date.dayOfWeek() === _DayOfWeek.DayOfWeek.THURSDAY || date.dayOfWeek() === _DayOfWeek.DayOfWeek.WEDNESDAY && date.isLeapYear()) {
	            return 53;
	        }
	        return 52;
	    };

	    Field._getWeek = function _getWeek(date) {
	        var dow0 = date.dayOfWeek().ordinal();
	        var doy0 = date.dayOfYear() - 1;
	        var doyThu0 = doy0 + (3 - dow0);
	        var alignedWeek = _MathUtil.MathUtil.intDiv(doyThu0, 7);
	        var firstThuDoy0 = doyThu0 - alignedWeek * 7;
	        var firstMonDoy0 = firstThuDoy0 - 3;
	        if (firstMonDoy0 < -3) {
	            firstMonDoy0 += 7;
	        }
	        if (doy0 < firstMonDoy0) {
	            return Field._getWeekRangeByLocalDate(date.withDayOfYear(180).minusYears(1)).maximum();
	        }
	        var week = _MathUtil.MathUtil.intDiv(doy0 - firstMonDoy0, 7) + 1;
	        if (week === 53) {
	            if ((firstMonDoy0 === -3 || firstMonDoy0 === -2 && date.isLeapYear()) === false) {
	                week = 1;
	            }
	        }
	        return week;
	    };

	    Field._getWeekBasedYear = function _getWeekBasedYear(date) {
	        var year = date.year();
	        var doy = date.dayOfYear();
	        if (doy <= 3) {
	            var dow = date.dayOfWeek().ordinal();
	            if (doy - dow < -2) {
	                year--;
	            }
	        } else if (doy >= 363) {
	            var _dow = date.dayOfWeek().ordinal();
	            doy = doy - 363 - (date.isLeapYear() ? 1 : 0);
	            if (doy - _dow >= 0) {
	                year++;
	            }
	        }
	        return year;
	    };

	    Field.prototype.getDisplayName = function getDisplayName() {
	        return this.toString();
	    };

	    Field.prototype.resolve = function resolve() {
	        return null;
	    };

	    Field.prototype.name = function name() {
	        return this.toString();
	    };

	    return Field;
	}(_TemporalField2.TemporalField);

	var DAY_OF_QUARTER_FIELD = function (_Field) {
	    _inherits(DAY_OF_QUARTER_FIELD, _Field);

	    function DAY_OF_QUARTER_FIELD() {
	        _classCallCheck(this, DAY_OF_QUARTER_FIELD);

	        return _possibleConstructorReturn(this, _Field.apply(this, arguments));
	    }

	    DAY_OF_QUARTER_FIELD.prototype.toString = function toString() {
	        return 'DayOfQuarter';
	    };

	    DAY_OF_QUARTER_FIELD.prototype.baseUnit = function baseUnit() {
	        return _ChronoUnit.ChronoUnit.DAYS;
	    };

	    DAY_OF_QUARTER_FIELD.prototype.rangeUnit = function rangeUnit() {
	        return QUARTER_YEARS;
	    };

	    DAY_OF_QUARTER_FIELD.prototype.range = function range() {
	        return _ValueRange.ValueRange.of(1, 90, 92);
	    };

	    DAY_OF_QUARTER_FIELD.prototype.isSupportedBy = function isSupportedBy(temporal) {
	        return temporal.isSupported(_ChronoField.ChronoField.DAY_OF_YEAR) && temporal.isSupported(_ChronoField.ChronoField.MONTH_OF_YEAR) && temporal.isSupported(_ChronoField.ChronoField.YEAR) && this._isIso(temporal);
	    };

	    DAY_OF_QUARTER_FIELD.prototype.rangeRefinedBy = function rangeRefinedBy(temporal) {
	        if (temporal.isSupported(this) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: DayOfQuarter');
	        }
	        var qoy = temporal.getLong(QUARTER_OF_YEAR);
	        if (qoy === 1) {
	            var year = temporal.getLong(_ChronoField.ChronoField.YEAR);
	            return _IsoChronology.IsoChronology.isLeapYear(year) ? _ValueRange.ValueRange.of(1, 91) : _ValueRange.ValueRange.of(1, 90);
	        } else if (qoy === 2) {
	            return _ValueRange.ValueRange.of(1, 91);
	        } else if (qoy === 3 || qoy === 4) {
	            return _ValueRange.ValueRange.of(1, 92);
	        }
	        return this.range();
	    };

	    DAY_OF_QUARTER_FIELD.prototype.getFrom = function getFrom(temporal) {
	        if (temporal.isSupported(this) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: DayOfQuarter');
	        }
	        var doy = temporal.get(_ChronoField.ChronoField.DAY_OF_YEAR);
	        var moy = temporal.get(_ChronoField.ChronoField.MONTH_OF_YEAR);
	        var year = temporal.getLong(_ChronoField.ChronoField.YEAR);
	        return doy - QUARTER_DAYS[_MathUtil.MathUtil.intDiv(moy - 1, 3) + (_IsoChronology.IsoChronology.isLeapYear(year) ? 4 : 0)];
	    };

	    DAY_OF_QUARTER_FIELD.prototype.adjustInto = function adjustInto(temporal, newValue) {
	        var curValue = this.getFrom(temporal);
	        this.range().checkValidValue(newValue, this);
	        return temporal.with(_ChronoField.ChronoField.DAY_OF_YEAR, temporal.getLong(_ChronoField.ChronoField.DAY_OF_YEAR) + (newValue - curValue));
	    };

	    DAY_OF_QUARTER_FIELD.prototype.resolve = function resolve(fieldValues, partialTemporal, resolverStyle) {
	        var yearLong = fieldValues.get(_ChronoField.ChronoField.YEAR);
	        var qoyLong = fieldValues.get(QUARTER_OF_YEAR);
	        if (yearLong == null || qoyLong == null) {
	            return null;
	        }
	        var y = _ChronoField.ChronoField.YEAR.checkValidIntValue(yearLong);
	        var doq = fieldValues.get(DAY_OF_QUARTER);
	        var date;
	        if (resolverStyle === _ResolverStyle.ResolverStyle.LENIENT) {
	            var qoy = qoyLong;
	            date = _LocalDate.LocalDate.of(y, 1, 1);
	            date = date.plusMonths(_MathUtil.MathUtil.safeMultiply(_MathUtil.MathUtil.safeSubtract(qoy, 1), 3));
	            date = date.plusDays(_MathUtil.MathUtil.safeSubtract(doq, 1));
	        } else {
	            var _qoy = QUARTER_OF_YEAR.range().checkValidIntValue(qoyLong, QUARTER_OF_YEAR);
	            if (resolverStyle === _ResolverStyle.ResolverStyle.STRICT) {
	                var max = 92;
	                if (_qoy === 1) {
	                    max = _IsoChronology.IsoChronology.isLeapYear(y) ? 91 : 90;
	                } else if (_qoy === 2) {
	                    max = 91;
	                }
	                _ValueRange.ValueRange.of(1, max).checkValidValue(doq, this);
	            } else {
	                this.range().checkValidValue(doq, this);
	            }
	            date = _LocalDate.LocalDate.of(y, (_qoy - 1) * 3 + 1, 1).plusDays(doq - 1);
	        }
	        fieldValues.remove(this);
	        fieldValues.remove(_ChronoField.ChronoField.YEAR);
	        fieldValues.remove(QUARTER_OF_YEAR);
	        return date;
	    };

	    return DAY_OF_QUARTER_FIELD;
	}(Field);

	var QUARTER_OF_YEAR_FIELD = function (_Field2) {
	    _inherits(QUARTER_OF_YEAR_FIELD, _Field2);

	    function QUARTER_OF_YEAR_FIELD() {
	        _classCallCheck(this, QUARTER_OF_YEAR_FIELD);

	        return _possibleConstructorReturn(this, _Field2.apply(this, arguments));
	    }

	    QUARTER_OF_YEAR_FIELD.prototype.toString = function toString() {
	        return 'QuarterOfYear';
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.baseUnit = function baseUnit() {
	        return QUARTER_YEARS;
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.rangeUnit = function rangeUnit() {
	        return _ChronoUnit.ChronoUnit.YEARS;
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.range = function range() {
	        return _ValueRange.ValueRange.of(1, 4);
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.isSupportedBy = function isSupportedBy(temporal) {
	        return temporal.isSupported(_ChronoField.ChronoField.MONTH_OF_YEAR) && this._isIso(temporal);
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.rangeRefinedBy = function rangeRefinedBy(temporal) {
	        return this.range();
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.getFrom = function getFrom(temporal) {
	        if (temporal.isSupported(this) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: QuarterOfYear');
	        }
	        var moy = temporal.getLong(_ChronoField.ChronoField.MONTH_OF_YEAR);
	        return _MathUtil.MathUtil.intDiv(moy + 2, 3);
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.adjustInto = function adjustInto(temporal, newValue) {
	        var curValue = this.getFrom(temporal);
	        this.range().checkValidValue(newValue, this);
	        return temporal.with(_ChronoField.ChronoField.MONTH_OF_YEAR, temporal.getLong(_ChronoField.ChronoField.MONTH_OF_YEAR) + (newValue - curValue) * 3);
	    };

	    return QUARTER_OF_YEAR_FIELD;
	}(Field);

	var WEEK_OF_WEEK_BASED_YEAR_FIELD = function (_Field3) {
	    _inherits(WEEK_OF_WEEK_BASED_YEAR_FIELD, _Field3);

	    function WEEK_OF_WEEK_BASED_YEAR_FIELD() {
	        _classCallCheck(this, WEEK_OF_WEEK_BASED_YEAR_FIELD);

	        return _possibleConstructorReturn(this, _Field3.apply(this, arguments));
	    }

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.toString = function toString() {
	        return 'WeekOfWeekBasedYear';
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.baseUnit = function baseUnit() {
	        return _ChronoUnit.ChronoUnit.WEEKS;
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.rangeUnit = function rangeUnit() {
	        return WEEK_BASED_YEARS;
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.range = function range() {
	        return _ValueRange.ValueRange.of(1, 52, 53);
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.isSupportedBy = function isSupportedBy(temporal) {
	        return temporal.isSupported(_ChronoField.ChronoField.EPOCH_DAY) && this._isIso(temporal);
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.rangeRefinedBy = function rangeRefinedBy(temporal) {
	        if (temporal.isSupported(this) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: WeekOfWeekBasedYear');
	        }
	        return Field._getWeekRangeByLocalDate(_LocalDate.LocalDate.from(temporal));
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.getFrom = function getFrom(temporal) {
	        if (temporal.isSupported(this) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: WeekOfWeekBasedYear');
	        }
	        return Field._getWeek(_LocalDate.LocalDate.from(temporal));
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.adjustInto = function adjustInto(temporal, newValue) {
	        this.range().checkValidValue(newValue, this);
	        return temporal.plus(_MathUtil.MathUtil.safeSubtract(newValue, this.getFrom(temporal)), _ChronoUnit.ChronoUnit.WEEKS);
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.resolve = function resolve(fieldValues, partialTemporal, resolverStyle) {
	        var wbyLong = fieldValues.get(WEEK_BASED_YEAR);
	        var dowLong = fieldValues.get(_ChronoField.ChronoField.DAY_OF_WEEK);
	        if (wbyLong == null || dowLong == null) {
	            return null;
	        }
	        var wby = WEEK_BASED_YEAR.range().checkValidIntValue(wbyLong, WEEK_BASED_YEAR);
	        var wowby = fieldValues.get(WEEK_OF_WEEK_BASED_YEAR);
	        var date;
	        if (resolverStyle === _ResolverStyle.ResolverStyle.LENIENT) {
	            var dow = dowLong;
	            var weeks = 0;
	            if (dow > 7) {
	                weeks = _MathUtil.MathUtil.intDiv(dow - 1, 7);
	                dow = _MathUtil.MathUtil.intMod(dow - 1, 7) + 1;
	            } else if (dow < 1) {
	                weeks = _MathUtil.MathUtil.intDiv(dow, 7) - 1;
	                dow = _MathUtil.MathUtil.intMod(dow, 7) + 7;
	            }
	            date = _LocalDate.LocalDate.of(wby, 1, 4).plusWeeks(wowby - 1).plusWeeks(weeks).with(_ChronoField.ChronoField.DAY_OF_WEEK, dow);
	        } else {
	            var _dow2 = _ChronoField.ChronoField.DAY_OF_WEEK.checkValidIntValue(dowLong);
	            if (resolverStyle === _ResolverStyle.ResolverStyle.STRICT) {
	                var temp = _LocalDate.LocalDate.of(wby, 1, 4);
	                var range = Field._getWeekRangeByLocalDate(temp);
	                range.checkValidValue(wowby, this);
	            } else {
	                this.range().checkValidValue(wowby, this);
	            }
	            date = _LocalDate.LocalDate.of(wby, 1, 4).plusWeeks(wowby - 1).with(_ChronoField.ChronoField.DAY_OF_WEEK, _dow2);
	        }
	        fieldValues.remove(this);
	        fieldValues.remove(WEEK_BASED_YEAR);
	        fieldValues.remove(_ChronoField.ChronoField.DAY_OF_WEEK);
	        return date;
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.getDisplayName = function getDisplayName() {
	        return 'Week';
	    };

	    return WEEK_OF_WEEK_BASED_YEAR_FIELD;
	}(Field);

	var WEEK_BASED_YEAR_FIELD = function (_Field4) {
	    _inherits(WEEK_BASED_YEAR_FIELD, _Field4);

	    function WEEK_BASED_YEAR_FIELD() {
	        _classCallCheck(this, WEEK_BASED_YEAR_FIELD);

	        return _possibleConstructorReturn(this, _Field4.apply(this, arguments));
	    }

	    WEEK_BASED_YEAR_FIELD.prototype.toString = function toString() {
	        return 'WeekBasedYear';
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.baseUnit = function baseUnit() {
	        return WEEK_BASED_YEARS;
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.rangeUnit = function rangeUnit() {
	        return _ChronoUnit.ChronoUnit.FOREVER;
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.range = function range() {
	        return _ChronoField.ChronoField.YEAR.range();
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.isSupportedBy = function isSupportedBy(temporal) {
	        return temporal.isSupported(_ChronoField.ChronoField.EPOCH_DAY) && this._isIso(temporal);
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.rangeRefinedBy = function rangeRefinedBy(temporal) {
	        return _ChronoField.ChronoField.YEAR.range();
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.getFrom = function getFrom(temporal) {
	        if (temporal.isSupported(this) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: WeekBasedYear');
	        }
	        return Field._getWeekBasedYear(_LocalDate.LocalDate.from(temporal));
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.adjustInto = function adjustInto(temporal, newValue) {
	        if (this.isSupportedBy(temporal) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: WeekBasedYear');
	        }
	        var newWby = this.range().checkValidIntValue(newValue, WEEK_BASED_YEAR);
	        var date = _LocalDate.LocalDate.from(temporal);
	        var dow = date.get(_ChronoField.ChronoField.DAY_OF_WEEK);
	        var week = Field._getWeek(date);
	        if (week === 53 && Field._getWeekRangeByYear(newWby) === 52) {
	            week = 52;
	        }
	        var resolved = _LocalDate.LocalDate.of(newWby, 1, 4);
	        var days = dow - resolved.get(_ChronoField.ChronoField.DAY_OF_WEEK) + (week - 1) * 7;
	        resolved = resolved.plusDays(days);
	        return temporal.with(resolved);
	    };

	    return WEEK_BASED_YEAR_FIELD;
	}(Field);

	var Unit = function (_TemporalUnit) {
	    _inherits(Unit, _TemporalUnit);

	    function Unit(name, estimatedDuration) {
	        _classCallCheck(this, Unit);

	        var _this6 = _possibleConstructorReturn(this, _TemporalUnit.call(this));

	        _this6._name = name;
	        _this6._duration = estimatedDuration;
	        return _this6;
	    }

	    Unit.prototype.duration = function duration() {
	        return this._duration;
	    };

	    Unit.prototype.isDurationEstimated = function isDurationEstimated() {
	        return true;
	    };

	    Unit.prototype.isDateBased = function isDateBased() {
	        return true;
	    };

	    Unit.prototype.isTimeBased = function isTimeBased() {
	        return false;
	    };

	    Unit.prototype.isSupportedBy = function isSupportedBy(temporal) {
	        return temporal.isSupported(_ChronoField.ChronoField.EPOCH_DAY);
	    };

	    Unit.prototype.addTo = function addTo(temporal, periodToAdd) {
	        switch (this) {
	            case WEEK_BASED_YEARS:
	                var added = _MathUtil.MathUtil.safeAdd(temporal.get(WEEK_BASED_YEAR), periodToAdd);
	                return temporal.with(WEEK_BASED_YEAR, added);
	            case QUARTER_YEARS:
	                return temporal.plus(_MathUtil.MathUtil.intDiv(periodToAdd, 256), _ChronoUnit.ChronoUnit.YEARS).plus(_MathUtil.MathUtil.intMod(periodToAdd, 256) * 3, _ChronoUnit.ChronoUnit.MONTHS);
	            default:
	                throw new _errors.IllegalStateException('Unreachable');
	        }
	    };

	    Unit.prototype.between = function between(temporal1, temporal2) {
	        switch (this) {
	            case WEEK_BASED_YEARS:
	                return _MathUtil.MathUtil.safeSubtract(temporal2.getLong(WEEK_BASED_YEAR), temporal1.getLong(WEEK_BASED_YEAR));
	            case QUARTER_YEARS:
	                return _MathUtil.MathUtil.intDiv(temporal1.until(temporal2, _ChronoUnit.ChronoUnit.MONTHS), 3);
	            default:
	                throw new _errors.IllegalStateException('Unreachable');
	        }
	    };

	    Unit.prototype.toString = function toString() {
	        return name;
	    };

	    return Unit;
	}(_TemporalUnit2.TemporalUnit);

	var DAY_OF_QUARTER = null;
	var QUARTER_OF_YEAR = null;
	var WEEK_OF_WEEK_BASED_YEAR = null;
	var WEEK_BASED_YEAR = null;
	var WEEK_BASED_YEARS = null;
	var QUARTER_YEARS = null;

	function _init() {
	    DAY_OF_QUARTER = new DAY_OF_QUARTER_FIELD();
	    QUARTER_OF_YEAR = new QUARTER_OF_YEAR_FIELD();
	    WEEK_OF_WEEK_BASED_YEAR = new WEEK_OF_WEEK_BASED_YEAR_FIELD();
	    WEEK_BASED_YEAR = new WEEK_BASED_YEAR_FIELD();

	    WEEK_BASED_YEARS = new Unit('WeekBasedYears', _Duration.Duration.ofSeconds(31556952));
	    QUARTER_YEARS = new Unit('QuarterYears', _Duration.Duration.ofSeconds(31556952 / 4));

	    IsoFields.DAY_OF_QUARTER = DAY_OF_QUARTER;
	    IsoFields.QUARTER_OF_YEAR = QUARTER_OF_YEAR;
	    IsoFields.WEEK_OF_WEEK_BASED_YEAR = WEEK_OF_WEEK_BASED_YEAR;
	    IsoFields.WEEK_BASED_YEAR = WEEK_BASED_YEAR;
	    IsoFields.WEEK_BASED_YEARS = WEEK_BASED_YEARS;
	    IsoFields.QUARTER_YEARS = QUARTER_YEARS;

	    _LocalDate.LocalDate.prototype.isoWeekOfWeekyear = function () {
	        return this.get(IsoFields.WEEK_OF_WEEK_BASED_YEAR);
	    };

	    _LocalDate.LocalDate.prototype.isoWeekyear = function () {
	        return this.get(IsoFields.WEEK_BASED_YEAR);
	    };
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.DayOfWeek = undefined;
	exports._init = _init;

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _assert = __webpack_require__(2);

	var _DateTimeFormatterBuilder = __webpack_require__(20);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _Temporal2 = __webpack_require__(37);

	var _TemporalQueries = __webpack_require__(25);

	var _TemporalQuery = __webpack_require__(43);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos  
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var DayOfWeek = function (_Temporal) {
	    _inherits(DayOfWeek, _Temporal);

	    function DayOfWeek(ordinal, name) {
	        _classCallCheck(this, DayOfWeek);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this._ordinal = ordinal;
	        _this._name = name;
	        return _this;
	    }

	    DayOfWeek.prototype.ordinal = function ordinal() {
	        return this._ordinal;
	    };

	    DayOfWeek.prototype.name = function name() {
	        return this._name;
	    };

	    DayOfWeek.values = function values() {
	        return ENUMS.slice();
	    };

	    DayOfWeek.valueOf = function valueOf(name) {
	        for (var ordinal = 0; ordinal < ENUMS.length; ordinal++) {
	            if (ENUMS[ordinal].name() === name) {
	                break;
	            }
	        }
	        return DayOfWeek.of(ordinal + 1);
	    };

	    DayOfWeek.of = function of(dayOfWeek) {
	        if (dayOfWeek < 1 || dayOfWeek > 7) {
	            throw new _errors.DateTimeException('Invalid value for DayOfWeek: ' + dayOfWeek);
	        }
	        return ENUMS[dayOfWeek - 1];
	    };

	    DayOfWeek.from = function from(temporal) {
	        (0, _assert.assert)(temporal != null, 'temporal', _errors.NullPointerException);
	        if (temporal instanceof DayOfWeek) {
	            return temporal;
	        }
	        try {
	            return DayOfWeek.of(temporal.get(_ChronoField.ChronoField.DAY_OF_WEEK));
	        } catch (ex) {
	            if (ex instanceof _errors.DateTimeException) {
	                throw new _errors.DateTimeException('Unable to obtain DayOfWeek from TemporalAccessor: ' + temporal + ', type ' + (temporal.constructor != null ? temporal.constructor.name : ''), ex);
	            } else {
	                throw ex;
	            }
	        }
	    };

	    DayOfWeek.prototype.value = function value() {
	        return this._ordinal + 1;
	    };

	    DayOfWeek.prototype.getDisplayName = function getDisplayName(style, locale) {
	        return new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendText(_ChronoField.ChronoField.DAY_OF_WEEK, style).toFormatter(locale).format(this);
	    };

	    DayOfWeek.prototype.isSupported = function isSupported(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            return field === _ChronoField.ChronoField.DAY_OF_WEEK;
	        }
	        return field != null && field.isSupportedBy(this);
	    };

	    DayOfWeek.prototype.range = function range(field) {
	        if (field === _ChronoField.ChronoField.DAY_OF_WEEK) {
	            return field.range();
	        } else if (field instanceof _ChronoField.ChronoField) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.rangeRefinedBy(this);
	    };

	    DayOfWeek.prototype.get = function get(field) {
	        if (field === _ChronoField.ChronoField.DAY_OF_WEEK) {
	            return this.value();
	        }
	        return this.range(field).checkValidIntValue(this.getLong(field), field);
	    };

	    DayOfWeek.prototype.getLong = function getLong(field) {
	        if (field === _ChronoField.ChronoField.DAY_OF_WEEK) {
	            return this.value();
	        } else if (field instanceof _ChronoField.ChronoField) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    DayOfWeek.prototype.plus = function plus(days) {
	        var amount = _MathUtil.MathUtil.floorMod(days, 7);
	        return ENUMS[_MathUtil.MathUtil.floorMod(this._ordinal + (amount + 7), 7)];
	    };

	    DayOfWeek.prototype.minus = function minus(days) {
	        return this.plus(-1 * _MathUtil.MathUtil.floorMod(days, 7));
	    };

	    DayOfWeek.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.DAYS;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate() || _query === _TemporalQueries.TemporalQueries.localTime() || _query === _TemporalQueries.TemporalQueries.chronology() || _query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return null;
	        }
	        (0, _assert.assert)(_query != null, 'query', _errors.NullPointerException);
	        return _query.queryFrom(this);
	    };

	    DayOfWeek.prototype.adjustInto = function adjustInto(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        return temporal.with(_ChronoField.ChronoField.DAY_OF_WEEK, this.value());
	    };

	    DayOfWeek.prototype.equals = function equals(other) {
	        return this === other;
	    };

	    DayOfWeek.prototype.toString = function toString() {
	        return this._name;
	    };

	    return DayOfWeek;
	}(_Temporal2.Temporal);

	exports.DayOfWeek = DayOfWeek;


	var ENUMS;

	function _init() {
	    DayOfWeek.MONDAY = new DayOfWeek(0, 'MONDAY');
	    DayOfWeek.TUESDAY = new DayOfWeek(1, 'TUESDAY');
	    DayOfWeek.WEDNESDAY = new DayOfWeek(2, 'WEDNESDAY');
	    DayOfWeek.THURSDAY = new DayOfWeek(3, 'THURSDAY');
	    DayOfWeek.FRIDAY = new DayOfWeek(4, 'FRIDAY');
	    DayOfWeek.SATURDAY = new DayOfWeek(5, 'SATURDAY');
	    DayOfWeek.SUNDAY = new DayOfWeek(6, 'SUNDAY');

	    DayOfWeek.FROM = (0, _TemporalQuery.createTemporalQuery)('DayOfWeek.FROM', function (temporal) {
	        return DayOfWeek.from(temporal);
	    });

	    ENUMS = [DayOfWeek.MONDAY, DayOfWeek.TUESDAY, DayOfWeek.WEDNESDAY, DayOfWeek.THURSDAY, DayOfWeek.FRIDAY, DayOfWeek.SATURDAY, DayOfWeek.SUNDAY];
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var DecimalStyle = exports.DecimalStyle = function () {
	    function DecimalStyle(zeroChar, positiveSignChar, negativeSignChar, decimalPointChar) {
	        _classCallCheck(this, DecimalStyle);

	        this._zeroDigit = zeroChar;
	        this._zeroDigitCharCode = zeroChar.charCodeAt(0);
	        this._positiveSign = positiveSignChar;
	        this._negativeSign = negativeSignChar;
	        this._decimalSeparator = decimalPointChar;
	    }

	    DecimalStyle.prototype.positiveSign = function positiveSign() {
	        return this._positiveSign;
	    };

	    DecimalStyle.prototype.withPositiveSign = function withPositiveSign(positiveSign) {
	        if (positiveSign === this._positiveSign) {
	            return this;
	        }
	        return new DecimalStyle(this._zeroDigit, positiveSign, this._negativeSign, this._decimalSeparator);
	    };

	    DecimalStyle.prototype.negativeSign = function negativeSign() {
	        return this._negativeSign;
	    };

	    DecimalStyle.prototype.withNegativeSign = function withNegativeSign(negativeSign) {
	        if (negativeSign === this._negativeSign) {
	            return this;
	        }
	        return new DecimalStyle(this._zeroDigit, this._positiveSign, negativeSign, this._decimalSeparator);
	    };

	    DecimalStyle.prototype.zeroDigit = function zeroDigit() {
	        return this._zeroDigit;
	    };

	    DecimalStyle.prototype.withZeroDigit = function withZeroDigit(zeroDigit) {
	        if (zeroDigit === this._zeroDigit) {
	            return this;
	        }
	        return new DecimalStyle(zeroDigit, this._positiveSign, this._negativeSign, this._decimalSeparator);
	    };

	    DecimalStyle.prototype.decimalSeparator = function decimalSeparator() {
	        return this._decimalSeparator;
	    };

	    DecimalStyle.prototype.withDecimalSeparator = function withDecimalSeparator(decimalSeparator) {
	        if (decimalSeparator === this._decimalSeparator) {
	            return this;
	        }
	        return new DecimalStyle(this._zeroDigit, this._positiveSign, this._negativeSign, decimalSeparator);
	    };

	    DecimalStyle.prototype.convertToDigit = function convertToDigit(char) {
	        var val = char.charCodeAt(0) - this._zeroDigitCharCode;
	        return val >= 0 && val <= 9 ? val : -1;
	    };

	    DecimalStyle.prototype.convertNumberToI18N = function convertNumberToI18N(numericText) {
	        if (this._zeroDigit === '0') {
	            return numericText;
	        }
	        var diff = this._zeroDigitCharCode - '0'.charCodeAt(0);
	        var convertedText = '';
	        for (var i = 0; i < numericText.length; i++) {
	            convertedText += String.fromCharCode(numericText.charCodeAt(i) + diff);
	        }
	        return convertedText;
	    };

	    DecimalStyle.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof DecimalStyle) {
	            return this._zeroDigit === other._zeroDigit && this._positiveSign === other._positiveSign && this._negativeSign === other._negativeSign && this._decimalSeparator == other._decimalSeparator;
	        }
	        return false;
	    };

	    DecimalStyle.prototype.hashCode = function hashCode() {
	        return this._zeroDigit + this._positiveSign + this._negativeSign + this._decimalSeparator;
	    };

	    DecimalStyle.prototype.toString = function toString() {
	        return 'DecimalStyle[' + this._zeroDigit + this._positiveSign + this._negativeSign + this._decimalSeparator + ']';
	    };

	    DecimalStyle.of = function of() {
	        throw new Error('not yet supported');
	    };

	    DecimalStyle.availableLocales = function availableLocales() {
	        throw new Error('not yet supported');
	    };

	    return DecimalStyle;
	}();

	DecimalStyle.STANDARD = new DecimalStyle('0', '+', '-', '.');

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.TextStyle = undefined;

	var _Enum2 = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var TextStyle = exports.TextStyle = function (_Enum) {
	    _inherits(TextStyle, _Enum);

	    function TextStyle() {
	        _classCallCheck(this, TextStyle);

	        return _possibleConstructorReturn(this, _Enum.apply(this, arguments));
	    }

	    TextStyle.prototype.isStandalone = function isStandalone() {
	        switch (this) {
	            case TextStyle.FULL_STANDALONE:
	            case TextStyle.SHORT_STANDALONE:
	            case TextStyle.NARROW_STANDALONE:
	                return true;
	            default:
	                return false;
	        }
	    };

	    TextStyle.prototype.asStandalone = function asStandalone() {
	        switch (this) {
	            case TextStyle.FULL:
	                return TextStyle.FULL_STANDALONE;
	            case TextStyle.SHORT:
	                return TextStyle.SHORT_STANDALONE;
	            case TextStyle.NARROW:
	                return TextStyle.NARROW_STANDALONE;
	            default:
	                return this;
	        }
	    };

	    TextStyle.prototype.asNormal = function asNormal() {
	        switch (this) {
	            case TextStyle.FULL_STANDALONE:
	                return TextStyle.FULL;
	            case TextStyle.SHORT_STANDALONE:
	                return TextStyle.SHORT;
	            case TextStyle.NARROW_STANDALONE:
	                return TextStyle.NARROW;
	            default:
	                return this;
	        }
	    };

	    return TextStyle;
	}(_Enum2.Enum);

	TextStyle.FULL = new TextStyle('FULL');

	TextStyle.FULL_STANDALONE = new TextStyle('FULL_STANDALONE');

	TextStyle.SHORT = new TextStyle('SHORT');

	TextStyle.SHORT_STANDALONE = new TextStyle('SHORT_STANDALONE');

	TextStyle.NARROW = new TextStyle('NARROW');

	TextStyle.NARROW_STANDALONE = new TextStyle('NARROW_STANDALONE');

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Year = undefined;
	exports._init = _init;

	var _errors = __webpack_require__(3);

	var _assert = __webpack_require__(2);

	var _MathUtil = __webpack_require__(6);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _Clock = __webpack_require__(1);

	var _DateTimeFormatter = __webpack_require__(31);

	var _DateTimeFormatterBuilder = __webpack_require__(20);

	var _IsoChronology = __webpack_require__(9);

	var _LocalDate = __webpack_require__(8);

	var _Month = __webpack_require__(11);

	var _MonthDay = __webpack_require__(49);

	var _SignStyle = __webpack_require__(41);

	var _Temporal2 = __webpack_require__(37);

	var _TemporalAccessor = __webpack_require__(38);

	var _TemporalAmount = __webpack_require__(15);

	var _TemporalQueries = __webpack_require__(25);

	var _TemporalQuery = __webpack_require__(43);

	var _TemporalUnit = __webpack_require__(17);

	var _ValueRange = __webpack_require__(19);

	var _YearConstants = __webpack_require__(16);

	var _YearMonth = __webpack_require__(50);

	var _ZoneId = __webpack_require__(24);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Year = function (_Temporal) {
	    _inherits(Year, _Temporal);

	    function Year(value) {
	        _classCallCheck(this, Year);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this._year = value;
	        return _this;
	    }

	    Year.prototype.value = function value() {
	        return this._year;
	    };

	    Year.now = function now() {
	        var arg = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

	        if (arg === undefined) {
	            return Year.now0();
	        } else if (arg instanceof _ZoneId.ZoneId) {
	            return Year.nowZoneId(arg);
	        } else {
	            return Year.nowClock(arg);
	        }
	    };

	    Year.now0 = function now0() {
	        return Year.nowClock(_Clock.Clock.systemDefaultZone());
	    };

	    Year.nowZoneId = function nowZoneId(zone) {
	        (0, _assert.requireNonNull)(zone, 'zone');
	        (0, _assert.requireInstance)(zone, _ZoneId.ZoneId, 'zone');
	        return Year.nowClock(_Clock.Clock.system(zone));
	    };

	    Year.nowClock = function nowClock(clock) {
	        (0, _assert.requireNonNull)(clock, 'clock');
	        (0, _assert.requireInstance)(clock, _Clock.Clock, 'clock');
	        var now = _LocalDate.LocalDate.now(clock);
	        return Year.of(now.year());
	    };

	    Year.of = function of(isoYear) {
	        (0, _assert.requireNonNull)(isoYear, 'isoYear');
	        _ChronoField.ChronoField.YEAR.checkValidValue(isoYear);
	        return new Year(isoYear);
	    };

	    Year.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        (0, _assert.requireInstance)(temporal, _TemporalAccessor.TemporalAccessor, 'temporal');
	        if (temporal instanceof Year) {
	            return temporal;
	        }
	        try {
	            return Year.of(temporal.get(_ChronoField.ChronoField.YEAR));
	        } catch (ex) {
	            throw new _errors.DateTimeException('Unable to obtain Year from TemporalAccessor: ' + temporal + ', type ' + (temporal && temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	    };

	    Year.parse = function parse() {
	        if (arguments.length <= 1) {
	            return Year.parseText(arguments[0]);
	        } else {
	            return Year.parseTextFormatter(arguments[0], arguments[1]);
	        }
	    };

	    Year.parseText = function parseText(text) {
	        (0, _assert.requireNonNull)(text, 'text');
	        return Year.parse(text, PARSER);
	    };

	    Year.parseTextFormatter = function parseTextFormatter(text, formatter) {
	        (0, _assert.requireNonNull)(text, 'text');
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        (0, _assert.requireInstance)(formatter, _DateTimeFormatter.DateTimeFormatter, 'formatter');
	        return formatter.parse(text, Year.FROM);
	    };

	    Year.isLeap = function isLeap(year) {
	        return _MathUtil.MathUtil.intMod(year, 4) === 0 && (_MathUtil.MathUtil.intMod(year, 100) !== 0 || _MathUtil.MathUtil.intMod(year, 400) === 0);
	    };

	    Year.prototype.range = function range(field) {
	        if (field === _ChronoField.ChronoField.YEAR_OF_ERA) {
	            return this._year <= 0 ? _ValueRange.ValueRange.of(1, Year.MAX_VALUE + 1) : _ValueRange.ValueRange.of(1, Year.MAX_VALUE);
	        }
	        return _Temporal.prototype.range.call(this, field);
	    };

	    Year.prototype.get = function get(field) {
	        return this.range(field).checkValidIntValue(this.getLong(field), field);
	    };

	    Year.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.YEAR_OF_ERA:
	                    return this._year < 1 ? 1 - this._year : this._year;
	                case _ChronoField.ChronoField.YEAR:
	                    return this._year;
	                case _ChronoField.ChronoField.ERA:
	                    return this._year < 1 ? 0 : 1;
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    Year.prototype.isLeap = function isLeap() {
	        return Year.isLeap(this._year);
	    };

	    Year.prototype.plus = function plus() {
	        if (arguments.length === 1) {
	            return this.plusAmount.apply(this, arguments);
	        } else {
	            return this.plusAmountToAddUnit.apply(this, arguments);
	        }
	    };

	    Year.prototype.plusAmount = function plusAmount(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        (0, _assert.requireInstance)(amount, _TemporalAmount.TemporalAmount, 'amount');
	        return amount.addTo(this);
	    };

	    Year.prototype.plusAmountToAddUnit = function plusAmountToAddUnit(amountToAdd, unit) {
	        (0, _assert.requireNonNull)(amountToAdd, 'amountToAdd');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        (0, _assert.requireInstance)(unit, _TemporalUnit.TemporalUnit, 'unit');
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.YEARS:
	                    return this.plusYears(amountToAdd);
	                case _ChronoUnit.ChronoUnit.DECADES:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 10));
	                case _ChronoUnit.ChronoUnit.CENTURIES:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 100));
	                case _ChronoUnit.ChronoUnit.MILLENNIA:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 1000));
	                case _ChronoUnit.ChronoUnit.ERAS:
	                    return this.with(_ChronoField.ChronoField.ERA, _MathUtil.MathUtil.safeAdd(this.getLong(_ChronoField.ChronoField.ERA), amountToAdd));
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.addTo(this, amountToAdd);
	    };

	    Year.prototype.plusYears = function plusYears(yearsToAdd) {
	        if (yearsToAdd === 0) {
	            return this;
	        }
	        return Year.of(_ChronoField.ChronoField.YEAR.checkValidIntValue(_MathUtil.MathUtil.safeAdd(this._year, yearsToAdd)));
	    };

	    Year.prototype.minus = function minus() {
	        if (arguments.length === 1) {
	            return this.minusAmount.apply(this, arguments);
	        } else {
	            return this.minusAmountToSubtractUnit.apply(this, arguments);
	        }
	    };

	    Year.prototype.minusAmount = function minusAmount(amount) {
	        return amount.subtractFrom(this);
	    };

	    Year.prototype.minusAmountToSubtractUnit = function minusAmountToSubtractUnit(amountToSubtract, unit) {
	        return amountToSubtract === _MathUtil.MathUtil.MIN_SAFE_INTEGER ? this.plus(_MathUtil.MathUtil.MAX_SAFE_INTEGER, unit).plus(1, unit) : this.plus(-amountToSubtract, unit);
	    };

	    Year.prototype.minusYears = function minusYears(yearsToSubtract) {
	        return yearsToSubtract === _MathUtil.MathUtil.MIN_SAFE_INTEGER ? this.plusYears(_MathUtil.MathUtil.MAX_SAFE_INTEGER).plusYears(1) : this.plusYears(-yearsToSubtract);
	    };

	    Year.prototype.adjustInto = function adjustInto(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');

	        return temporal.with(_ChronoField.ChronoField.YEAR, this._year);
	    };

	    Year.prototype.isValidMonthDay = function isValidMonthDay(monthDay) {
	        return monthDay != null && monthDay.isValidYear(this._year);
	    };

	    Year.prototype.length = function length() {
	        return this.isLeap() ? 366 : 365;
	    };

	    Year.prototype.atDay = function atDay(dayOfYear) {
	        return _LocalDate.LocalDate.ofYearDay(this._year, dayOfYear);
	    };

	    Year.prototype.atMonth = function atMonth() {
	        if (arguments.length === 1 && arguments[0] instanceof _Month.Month) {
	            return this.atMonthMonth.apply(this, arguments);
	        } else {
	            return this.atMonthNumber.apply(this, arguments);
	        }
	    };

	    Year.prototype.atMonthMonth = function atMonthMonth(month) {
	        (0, _assert.requireNonNull)(month, 'month');
	        (0, _assert.requireInstance)(month, _Month.Month, 'month');
	        return _YearMonth.YearMonth.of(this._year, month);
	    };

	    Year.prototype.atMonthNumber = function atMonthNumber(month) {
	        (0, _assert.requireNonNull)(month, 'month');
	        return _YearMonth.YearMonth.of(this._year, month);
	    };

	    Year.prototype.atMonthDay = function atMonthDay(monthDay) {
	        (0, _assert.requireNonNull)(monthDay, 'monthDay');
	        (0, _assert.requireInstance)(monthDay, _MonthDay.MonthDay, 'monthDay');
	        return monthDay.atYear(this._year);
	    };

	    Year.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query()');
	        (0, _assert.requireInstance)(_query, _TemporalQuery.TemporalQuery, 'query()');
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return _IsoChronology.IsoChronology.INSTANCE;
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.YEARS;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate() || _query === _TemporalQueries.TemporalQueries.localTime() || _query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return null;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    Year.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, Year, 'other');
	        return this._year - other._year;
	    };

	    Year.prototype.isAfter = function isAfter(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, Year, 'other');
	        return this._year > other._year;
	    };

	    Year.prototype.isBefore = function isBefore(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, Year, 'other');
	        return this._year < other._year;
	    };

	    Year.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        (0, _assert.requireInstance)(formatter, _DateTimeFormatter.DateTimeFormatter, 'formatter');
	        return formatter.format(this);
	    };

	    Year.prototype.equals = function equals(otherYear) {
	        if (this === otherYear) {
	            return true;
	        }
	        if (otherYear instanceof Year) {
	            return this.value() === otherYear.value();
	        }
	        return false;
	    };

	    Year.prototype.toString = function toString() {
	        return '' + this._year;
	    };

	    return Year;
	}(_Temporal2.Temporal);

	exports.Year = Year;


	var PARSER;

	function _init() {

	    Year.MIN_VALUE = _YearConstants.YearConstants.MIN_VALUE;
	    Year.MAX_VALUE = _YearConstants.YearConstants.MAX_VALUE;

	    PARSER = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendValue(_ChronoField.ChronoField.YEAR, 4, 10, _SignStyle.SignStyle.EXCEEDS_PAD).toFormatter();

	    Year.FROM = (0, _TemporalQuery.createTemporalQuery)('Year.FROM', function (temporal) {
	        return Year.from(temporal);
	    });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.MonthDay = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _ChronoField = __webpack_require__(12);

	var _Clock = __webpack_require__(1);

	var _DateTimeFormatter = __webpack_require__(31);

	var _DateTimeFormatterBuilder = __webpack_require__(20);

	var _IsoChronology = __webpack_require__(9);

	var _LocalDate = __webpack_require__(8);

	var _Month = __webpack_require__(11);

	var _Temporal2 = __webpack_require__(37);

	var _TemporalAccessor = __webpack_require__(38);

	var _TemporalQuery = __webpack_require__(43);

	var _TemporalQueries = __webpack_require__(25);

	var _ValueRange = __webpack_require__(19);

	var _Year = __webpack_require__(48);

	var _ZoneId = __webpack_require__(24);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var MonthDay = function (_Temporal) {
	    _inherits(MonthDay, _Temporal);

	    MonthDay.now = function now() {
	        if (arguments.length === 0) {
	            return MonthDay.now0.apply(this, arguments);
	        } else if (arguments.length === 1 && arguments[0] instanceof _ZoneId.ZoneId) {
	            return MonthDay.nowZoneId.apply(this, arguments);
	        } else {
	            return MonthDay.nowClock.apply(this, arguments);
	        }
	    };

	    MonthDay.now0 = function now0() {
	        return this.nowClock(_Clock.Clock.systemDefaultZone());
	    };

	    MonthDay.nowZoneId = function nowZoneId(zone) {
	        (0, _assert.requireNonNull)(zone, 'zone');
	        return this.nowClock(_Clock.Clock.system(zone));
	    };

	    MonthDay.nowClock = function nowClock(clock) {
	        (0, _assert.requireNonNull)(clock, 'clock');
	        var now = _LocalDate.LocalDate.now(clock);
	        return MonthDay.of(now.month(), now.dayOfMonth());
	    };

	    MonthDay.of = function of() {
	        if (arguments.length === 2 && arguments[0] instanceof _Month.Month) {
	            return MonthDay.ofMonthNumber.apply(this, arguments);
	        } else {
	            return MonthDay.ofNumberNumber.apply(this, arguments);
	        }
	    };

	    MonthDay.ofMonthNumber = function ofMonthNumber(month, dayOfMonth) {
	        (0, _assert.requireNonNull)(month, 'month');
	        _ChronoField.ChronoField.DAY_OF_MONTH.checkValidValue(dayOfMonth);
	        if (dayOfMonth > month.maxLength()) {
	            throw new _errors.DateTimeException('Illegal value for DayOfMonth field, value ' + dayOfMonth + ' is not valid for month ' + month.toString());
	        }
	        return new MonthDay(month.value(), dayOfMonth);
	    };

	    MonthDay.ofNumberNumber = function ofNumberNumber(month, dayOfMonth) {
	        (0, _assert.requireNonNull)(month, 'month');
	        (0, _assert.requireNonNull)(dayOfMonth, 'dayOfMonth');
	        return MonthDay.of(_Month.Month.of(month), dayOfMonth);
	    };

	    MonthDay.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        (0, _assert.requireInstance)(temporal, _TemporalAccessor.TemporalAccessor, 'temporal');
	        if (temporal instanceof MonthDay) {
	            return temporal;
	        }
	        try {
	            return MonthDay.of(temporal.get(_ChronoField.ChronoField.MONTH_OF_YEAR), temporal.get(_ChronoField.ChronoField.DAY_OF_MONTH));
	        } catch (ex) {
	            throw new _errors.DateTimeException('Unable to obtain MonthDay from TemporalAccessor: ' + temporal + ', type ' + (temporal && temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	    };

	    MonthDay.parse = function parse() {
	        if (arguments.length === 1) {
	            return MonthDay.parseString.apply(this, arguments);
	        } else {
	            return MonthDay.parseStringFormatter.apply(this, arguments);
	        }
	    };

	    MonthDay.parseString = function parseString(text) {
	        return MonthDay.parseStringFormatter(text, PARSER);
	    };

	    MonthDay.parseStringFormatter = function parseStringFormatter(text, formatter) {
	        (0, _assert.requireNonNull)(text, 'text');
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        (0, _assert.requireInstance)(formatter, _DateTimeFormatter.DateTimeFormatter, 'formatter');
	        return formatter.parse(text, MonthDay.FROM);
	    };

	    function MonthDay(month, dayOfMonth) {
	        _classCallCheck(this, MonthDay);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this._month = month;
	        _this._day = dayOfMonth;
	        return _this;
	    }

	    MonthDay.prototype.monthValue = function monthValue() {
	        return this._month;
	    };

	    MonthDay.prototype.month = function month() {
	        return _Month.Month.of(this._month);
	    };

	    MonthDay.prototype.dayOfMonth = function dayOfMonth() {
	        return this._day;
	    };

	    MonthDay.prototype.isSupported = function isSupported(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            return field === _ChronoField.ChronoField.MONTH_OF_YEAR || field === _ChronoField.ChronoField.DAY_OF_MONTH;
	        }
	        return field != null && field.isSupportedBy(this);
	    };

	    MonthDay.prototype.range = function range(field) {
	        if (field === _ChronoField.ChronoField.MONTH_OF_YEAR) {
	            return field.range();
	        } else if (field === _ChronoField.ChronoField.DAY_OF_MONTH) {
	            return _ValueRange.ValueRange.of(1, this.month().minLength(), this.month().maxLength());
	        }
	        return _Temporal.prototype.range.call(this, field);
	    };

	    MonthDay.prototype.get = function get(field) {
	        return this.range(field).checkValidIntValue(this.getLong(field), field);
	    };

	    MonthDay.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.DAY_OF_MONTH:
	                    return this._day;
	                case _ChronoField.ChronoField.MONTH_OF_YEAR:
	                    return this._month;
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    MonthDay.prototype.isValidYear = function isValidYear(year) {
	        return (this._day === 29 && this._month === 2 && _Year.Year.isLeap(year) === false) === false;
	    };

	    MonthDay.prototype.withMonth = function withMonth(month) {
	        return this.with(_Month.Month.of(month));
	    };

	    MonthDay.prototype.with = function _with(month) {
	        (0, _assert.requireNonNull)(month, 'month');
	        if (month.value() === this._month) {
	            return this;
	        }
	        var day = Math.min(this._day, month.maxLength());
	        return new MonthDay(month.value(), day);
	    };

	    MonthDay.prototype.withDayOfMonth = function withDayOfMonth(dayOfMonth) {
	        if (dayOfMonth === this._day) {
	            return this;
	        }
	        return MonthDay.of(this._month, dayOfMonth);
	    };

	    MonthDay.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        (0, _assert.requireInstance)(_query, _TemporalQuery.TemporalQuery, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return _IsoChronology.IsoChronology.INSTANCE;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    MonthDay.prototype.adjustInto = function adjustInto(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');

	        temporal = temporal.with(_ChronoField.ChronoField.MONTH_OF_YEAR, this._month);
	        return temporal.with(_ChronoField.ChronoField.DAY_OF_MONTH, Math.min(temporal.range(_ChronoField.ChronoField.DAY_OF_MONTH).maximum(), this._day));
	    };

	    MonthDay.prototype.atYear = function atYear(year) {
	        return _LocalDate.LocalDate.of(year, this._month, this.isValidYear(year) ? this._day : 28);
	    };

	    MonthDay.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, MonthDay, 'other');
	        var cmp = this._month - other.monthValue();
	        if (cmp === 0) {
	            cmp = this._day - other.dayOfMonth();
	        }
	        return cmp;
	    };

	    MonthDay.prototype.isAfter = function isAfter(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, MonthDay, 'other');
	        return this.compareTo(other) > 0;
	    };

	    MonthDay.prototype.isBefore = function isBefore(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, MonthDay, 'other');
	        return this.compareTo(other) < 0;
	    };

	    MonthDay.prototype.equals = function equals(obj) {
	        if (this === obj) {
	            return true;
	        }
	        if (obj instanceof MonthDay) {
	            var other = obj;
	            return this.monthValue() === other.monthValue() && this.dayOfMonth() === other.dayOfMonth();
	        }
	        return false;
	    };

	    MonthDay.prototype.toString = function toString() {
	        return '--' + (this._month < 10 ? '0' : '') + this._month + (this._day < 10 ? '-0' : '-') + this._day;
	    };

	    MonthDay.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        (0, _assert.requireInstance)(formatter, _DateTimeFormatter.DateTimeFormatter, 'formatter');
	        return formatter.format(this);
	    };

	    return MonthDay;
	}(_Temporal2.Temporal);

	exports.MonthDay = MonthDay;


	var PARSER;

	function _init() {
	    PARSER = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendLiteral('--').appendValue(_ChronoField.ChronoField.MONTH_OF_YEAR, 2).appendLiteral('-').appendValue(_ChronoField.ChronoField.DAY_OF_MONTH, 2).toFormatter();

	    MonthDay.FROM = (0, _TemporalQuery.createTemporalQuery)('MonthDay.FROM', function (temporal) {
	        return MonthDay.from(temporal);
	    });
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.YearMonth = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _Clock = __webpack_require__(1);

	var _DateTimeFormatterBuilder = __webpack_require__(20);

	var _IsoChronology = __webpack_require__(9);

	var _LocalDate = __webpack_require__(8);

	var _Month = __webpack_require__(11);

	var _SignStyle = __webpack_require__(41);

	var _Temporal2 = __webpack_require__(37);

	var _TemporalAmount = __webpack_require__(15);

	var _TemporalField = __webpack_require__(18);

	var _TemporalQueries = __webpack_require__(25);

	var _TemporalQuery = __webpack_require__(43);

	var _TemporalUnit = __webpack_require__(17);

	var _ValueRange = __webpack_require__(19);

	var _Year = __webpack_require__(48);

	var _ZoneId = __webpack_require__(24);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var YearMonth = function (_Temporal) {
	    _inherits(YearMonth, _Temporal);

	    YearMonth.now = function now() {
	        if (arguments.length === 0) {
	            return YearMonth.now0.apply(this, arguments);
	        } else if (arguments.length === 1 && arguments[0] instanceof _ZoneId.ZoneId) {
	            return YearMonth.nowZoneId.apply(this, arguments);
	        } else {
	            return YearMonth.nowClock.apply(this, arguments);
	        }
	    };

	    YearMonth.now0 = function now0() {
	        return YearMonth.nowClock(_Clock.Clock.systemDefaultZone());
	    };

	    YearMonth.nowZoneId = function nowZoneId(zone) {
	        return YearMonth.nowClock(_Clock.Clock.system(zone));
	    };

	    YearMonth.nowClock = function nowClock(clock) {
	        var now = _LocalDate.LocalDate.now(clock);
	        return YearMonth.of(now.year(), now.month());
	    };

	    YearMonth.of = function of() {
	        if (arguments.length === 2 && arguments[1] instanceof _Month.Month) {
	            return YearMonth.ofNumberMonth.apply(this, arguments);
	        } else {
	            return YearMonth.ofNumberNumber.apply(this, arguments);
	        }
	    };

	    YearMonth.ofNumberMonth = function ofNumberMonth(year, month) {
	        (0, _assert.requireNonNull)(month, 'month');
	        (0, _assert.requireInstance)(month, _Month.Month, 'month');
	        return YearMonth.ofNumberNumber(year, month.value());
	    };

	    YearMonth.ofNumberNumber = function ofNumberNumber(year, month) {
	        (0, _assert.requireNonNull)(year, 'year');
	        (0, _assert.requireNonNull)(month, 'month');
	        _ChronoField.ChronoField.YEAR.checkValidValue(year);
	        _ChronoField.ChronoField.MONTH_OF_YEAR.checkValidValue(month);
	        return new YearMonth(year, month);
	    };

	    YearMonth.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (temporal instanceof YearMonth) {
	            return temporal;
	        }
	        try {
	            return YearMonth.of(temporal.get(_ChronoField.ChronoField.YEAR), temporal.get(_ChronoField.ChronoField.MONTH_OF_YEAR));
	        } catch (ex) {
	            throw new _errors.DateTimeException('Unable to obtain YearMonth from TemporalAccessor: ' + temporal + ', type ' + (temporal && temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	    };

	    YearMonth.parse = function parse() {
	        if (arguments.length === 1) {
	            return YearMonth.parseString.apply(this, arguments);
	        } else {
	            return YearMonth.parseStringFormatter.apply(this, arguments);
	        }
	    };

	    YearMonth.parseString = function parseString(text) {
	        return YearMonth.parseStringFormatter(text, PARSER);
	    };

	    YearMonth.parseStringFormatter = function parseStringFormatter(text, formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.parse(text, YearMonth.FROM);
	    };

	    function YearMonth(year, month) {
	        _classCallCheck(this, YearMonth);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this._year = year;
	        _this._month = month;
	        return _this;
	    }

	    YearMonth.prototype.isSupported = function isSupported() {
	        if (arguments.length === 1 && arguments[0] instanceof _TemporalField.TemporalField) {
	            return this.isSupportedField.apply(this, arguments);
	        } else {
	            return this.isSupportedUnit.apply(this, arguments);
	        }
	    };

	    YearMonth.prototype.isSupportedField = function isSupportedField(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            return field === _ChronoField.ChronoField.YEAR || field === _ChronoField.ChronoField.MONTH_OF_YEAR || field === _ChronoField.ChronoField.PROLEPTIC_MONTH || field === _ChronoField.ChronoField.YEAR_OF_ERA || field === _ChronoField.ChronoField.ERA;
	        }
	        return field != null && field.isSupportedBy(this);
	    };

	    YearMonth.prototype.isSupportedUnit = function isSupportedUnit(unit) {
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            return unit === _ChronoUnit.ChronoUnit.MONTHS || unit === _ChronoUnit.ChronoUnit.YEARS || unit === _ChronoUnit.ChronoUnit.DECADES || unit === _ChronoUnit.ChronoUnit.CENTURIES || unit === _ChronoUnit.ChronoUnit.MILLENNIA || unit === _ChronoUnit.ChronoUnit.ERAS;
	        }
	        return unit != null && unit.isSupportedBy(this);
	    };

	    YearMonth.prototype.range = function range(field) {
	        if (field === _ChronoField.ChronoField.YEAR_OF_ERA) {
	            return this.year() <= 0 ? _ValueRange.ValueRange.of(1, _Year.Year.MAX_VALUE + 1) : _ValueRange.ValueRange.of(1, _Year.Year.MAX_VALUE);
	        }
	        return _Temporal.prototype.range.call(this, field);
	    };

	    YearMonth.prototype.get = function get(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        (0, _assert.requireInstance)(field, _TemporalField.TemporalField, 'field');
	        return this.range(field).checkValidIntValue(this.getLong(field), field);
	    };

	    YearMonth.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        (0, _assert.requireInstance)(field, _TemporalField.TemporalField, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.MONTH_OF_YEAR:
	                    return this._month;
	                case _ChronoField.ChronoField.PROLEPTIC_MONTH:
	                    return this._getProlepticMonth();
	                case _ChronoField.ChronoField.YEAR_OF_ERA:
	                    return this._year < 1 ? 1 - this._year : this._year;
	                case _ChronoField.ChronoField.YEAR:
	                    return this._year;
	                case _ChronoField.ChronoField.ERA:
	                    return this._year < 1 ? 0 : 1;
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    YearMonth.prototype._getProlepticMonth = function _getProlepticMonth() {
	        return _MathUtil.MathUtil.safeAdd(_MathUtil.MathUtil.safeMultiply(this._year, 12), this._month - 1);
	    };

	    YearMonth.prototype.year = function year() {
	        return this._year;
	    };

	    YearMonth.prototype.monthValue = function monthValue() {
	        return this._month;
	    };

	    YearMonth.prototype.month = function month() {
	        return _Month.Month.of(this._month);
	    };

	    YearMonth.prototype.isLeapYear = function isLeapYear() {
	        return _IsoChronology.IsoChronology.isLeapYear(this._year);
	    };

	    YearMonth.prototype.isValidDay = function isValidDay(dayOfMonth) {
	        return dayOfMonth >= 1 && dayOfMonth <= this.lengthOfMonth();
	    };

	    YearMonth.prototype.lengthOfMonth = function lengthOfMonth() {
	        return this.month().length(this.isLeapYear());
	    };

	    YearMonth.prototype.lengthOfYear = function lengthOfYear() {
	        return this.isLeapYear() ? 366 : 365;
	    };

	    YearMonth.prototype.with = function _with() {
	        if (arguments.length === 1) {
	            return this.withAdjuster.apply(this, arguments);
	        } else if (arguments.length === 2 && arguments[0] instanceof _TemporalField.TemporalField) {
	            return this.withFieldValue.apply(this, arguments);
	        } else {
	            return this.withYearMonth.apply(this, arguments);
	        }
	    };

	    YearMonth.prototype.withYearMonth = function withYearMonth(newYear, newMonth) {
	        if (this._year === newYear && this._month === newMonth) {
	            return this;
	        }
	        return new YearMonth(newYear, newMonth);
	    };

	    YearMonth.prototype.withAdjuster = function withAdjuster(adjuster) {
	        (0, _assert.requireNonNull)(adjuster, 'adjuster');
	        return adjuster.adjustInto(this);
	    };

	    YearMonth.prototype.withFieldValue = function withFieldValue(field, newValue) {
	        (0, _assert.requireNonNull)(field, 'field');
	        (0, _assert.requireInstance)(field, _TemporalField.TemporalField, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            var f = field;
	            f.checkValidValue(newValue);
	            switch (f) {
	                case _ChronoField.ChronoField.MONTH_OF_YEAR:
	                    return this.withMonth(newValue);
	                case _ChronoField.ChronoField.PROLEPTIC_MONTH:
	                    return this.plusMonths(newValue - this.getLong(_ChronoField.ChronoField.PROLEPTIC_MONTH));
	                case _ChronoField.ChronoField.YEAR_OF_ERA:
	                    return this.withYear(this._year < 1 ? 1 - newValue : newValue);
	                case _ChronoField.ChronoField.YEAR:
	                    return this.withYear(newValue);
	                case _ChronoField.ChronoField.ERA:
	                    return this.getLong(_ChronoField.ChronoField.ERA) === newValue ? this : this.withYear(1 - this._year);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.adjustInto(this, newValue);
	    };

	    YearMonth.prototype.withYear = function withYear(year) {
	        _ChronoField.ChronoField.YEAR.checkValidValue(year);
	        return this.withYearMonth(year, this._month);
	    };

	    YearMonth.prototype.withMonth = function withMonth(month) {
	        _ChronoField.ChronoField.MONTH_OF_YEAR.checkValidValue(month);
	        return this.withYearMonth(this._year, month);
	    };

	    YearMonth.prototype.plus = function plus() {
	        if (arguments.length === 1) {
	            return this.plusAmount.apply(this, arguments);
	        } else {
	            return this.plusAmountUnit.apply(this, arguments);
	        }
	    };

	    YearMonth.prototype.plusAmount = function plusAmount(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        (0, _assert.requireInstance)(amount, _TemporalAmount.TemporalAmount, 'amount');
	        return amount.addTo(this);
	    };

	    YearMonth.prototype.plusAmountUnit = function plusAmountUnit(amountToAdd, unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        (0, _assert.requireInstance)(unit, _TemporalUnit.TemporalUnit, 'unit');
	        if (unit instanceof _ChronoField.ChronoField) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.MONTHS:
	                    return this.plusMonths(amountToAdd);
	                case _ChronoUnit.ChronoUnit.YEARS:
	                    return this.plusYears(amountToAdd);
	                case _ChronoUnit.ChronoUnit.DECADES:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 10));
	                case _ChronoUnit.ChronoUnit.CENTURIES:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 100));
	                case _ChronoUnit.ChronoUnit.MILLENNIA:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 1000));
	                case _ChronoUnit.ChronoUnit.ERAS:
	                    return this.with(_ChronoField.ChronoField.ERA, _MathUtil.MathUtil.safeAdd(this.getLong(_ChronoField.ChronoField.ERA), amountToAdd));
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.addTo(this, amountToAdd);
	    };

	    YearMonth.prototype.plusYears = function plusYears(yearsToAdd) {
	        if (yearsToAdd === 0) {
	            return this;
	        }
	        var newYear = _ChronoField.ChronoField.YEAR.checkValidIntValue(this._year + yearsToAdd);
	        return this.withYearMonth(newYear, this._month);
	    };

	    YearMonth.prototype.plusMonths = function plusMonths(monthsToAdd) {
	        if (monthsToAdd === 0) {
	            return this;
	        }
	        var monthCount = this._year * 12 + (this._month - 1);
	        var calcMonths = monthCount + monthsToAdd;
	        var newYear = _ChronoField.ChronoField.YEAR.checkValidIntValue(_MathUtil.MathUtil.floorDiv(calcMonths, 12));
	        var newMonth = _MathUtil.MathUtil.floorMod(calcMonths, 12) + 1;
	        return this.withYearMonth(newYear, newMonth);
	    };

	    YearMonth.prototype.minus = function minus() {
	        if (arguments.length === 1) {
	            return this.minusAmount.apply(this, arguments);
	        } else {
	            return this.minusAmountUnit.apply(this, arguments);
	        }
	    };

	    YearMonth.prototype.minusAmount = function minusAmount(amount) {
	        return amount.subtractFrom(this);
	    };

	    YearMonth.prototype.minusAmountUnit = function minusAmountUnit(amountToSubtract, unit) {
	        return amountToSubtract === _MathUtil.MathUtil.MIN_SAFE_INTEGER ? this.plusAmountUnit(_MathUtil.MathUtil.MAX_SAFE_INTEGER, unit).plusAmountUnit(1, unit) : this.plusAmountUnit(-amountToSubtract, unit);
	    };

	    YearMonth.prototype.minusYears = function minusYears(yearsToSubtract) {
	        return yearsToSubtract === _MathUtil.MathUtil.MIN_SAFE_INTEGER ? this.plusYears(_MathUtil.MathUtil.MIN_SAFE_INTEGER).plusYears(1) : this.plusYears(-yearsToSubtract);
	    };

	    YearMonth.prototype.minusMonths = function minusMonths(monthsToSubtract) {
	        return monthsToSubtract === _MathUtil.MathUtil.MIN_SAFE_INTEGER ? this.plusMonths(Math.MAX_SAFE_INTEGER).plusMonths(1) : this.plusMonths(-monthsToSubtract);
	    };

	    YearMonth.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        (0, _assert.requireInstance)(_query, _TemporalQuery.TemporalQuery, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return _IsoChronology.IsoChronology.INSTANCE;
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.MONTHS;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate() || _query === _TemporalQueries.TemporalQueries.localTime() || _query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return null;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    YearMonth.prototype.adjustInto = function adjustInto(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        (0, _assert.requireInstance)(temporal, _Temporal2.Temporal, 'temporal');

	        return temporal.with(_ChronoField.ChronoField.PROLEPTIC_MONTH, this._getProlepticMonth());
	    };

	    YearMonth.prototype.until = function until(endExclusive, unit) {
	        var end = YearMonth.from(endExclusive);
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            var monthsUntil = end._getProlepticMonth() - this._getProlepticMonth();
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.MONTHS:
	                    return monthsUntil;
	                case _ChronoUnit.ChronoUnit.YEARS:
	                    return monthsUntil / 12;
	                case _ChronoUnit.ChronoUnit.DECADES:
	                    return monthsUntil / 120;
	                case _ChronoUnit.ChronoUnit.CENTURIES:
	                    return monthsUntil / 1200;
	                case _ChronoUnit.ChronoUnit.MILLENNIA:
	                    return monthsUntil / 12000;
	                case _ChronoUnit.ChronoUnit.ERAS:
	                    return end.getLong(_ChronoField.ChronoField.ERA) - this.getLong(_ChronoField.ChronoField.ERA);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.between(this, end);
	    };

	    YearMonth.prototype.atDay = function atDay(dayOfMonth) {
	        return _LocalDate.LocalDate.of(this._year, this._month, dayOfMonth);
	    };

	    YearMonth.prototype.atEndOfMonth = function atEndOfMonth() {
	        return _LocalDate.LocalDate.of(this._year, this._month, this.lengthOfMonth());
	    };

	    YearMonth.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, YearMonth, 'other');
	        var cmp = this._year - other.year();
	        if (cmp === 0) {
	            cmp = this._month - other.monthValue();
	        }
	        return cmp;
	    };

	    YearMonth.prototype.isAfter = function isAfter(other) {
	        return this.compareTo(other) > 0;
	    };

	    YearMonth.prototype.isBefore = function isBefore(other) {
	        return this.compareTo(other) < 0;
	    };

	    YearMonth.prototype.equals = function equals(obj) {
	        if (this === obj) {
	            return true;
	        }
	        if (obj instanceof YearMonth) {
	            var other = obj;
	            return this.year() === other.year() && this.monthValue() === other.monthValue();
	        }
	        return false;
	    };

	    YearMonth.prototype.toString = function toString() {
	        return PARSER.format(this);
	    };

	    YearMonth.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.format(this);
	    };

	    return YearMonth;
	}(_Temporal2.Temporal);

	exports.YearMonth = YearMonth;


	var PARSER;

	function _init() {

	    PARSER = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendValue(_ChronoField.ChronoField.YEAR, 4, 10, _SignStyle.SignStyle.EXCEEDS_PAD).appendLiteral('-').appendValue(_ChronoField.ChronoField.MONTH_OF_YEAR, 2).toFormatter();

	    YearMonth.FROM = (0, _TemporalQuery.createTemporalQuery)('YearMonth.FROM', function (temporal) {
	        return YearMonth.from(temporal);
	    });
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZonedDateTime = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _Clock = __webpack_require__(1);

	var _Instant = __webpack_require__(4);

	var _LocalDate = __webpack_require__(8);

	var _LocalDateTime = __webpack_require__(7);

	var _LocalTime = __webpack_require__(5);

	var _ZoneId = __webpack_require__(24);

	var _ZoneOffset = __webpack_require__(23);

	var _ChronoZonedDateTime2 = __webpack_require__(52);

	var _DateTimeFormatter = __webpack_require__(31);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalQuery = __webpack_require__(43);

	var _TemporalQueries = __webpack_require__(25);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ZonedDateTime = function (_ChronoZonedDateTime) {
	    _inherits(ZonedDateTime, _ChronoZonedDateTime);

	    ZonedDateTime.now = function now(clockOrZone) {
	        var clock;
	        if (clockOrZone instanceof _ZoneId.ZoneId) {
	            clock = _Clock.Clock.system(clockOrZone);
	        } else {
	            clock = clockOrZone == null ? _Clock.Clock.systemDefaultZone() : clockOrZone;
	        }
	        return ZonedDateTime.ofInstant(clock.instant(), clock.zone());
	    };

	    ZonedDateTime.of = function of() {
	        if (arguments.length <= 2) {
	            return ZonedDateTime.of2.apply(this, arguments);
	        } else if (arguments.length === 3 && arguments[0] instanceof _LocalDate.LocalDate) {
	            return ZonedDateTime.of3.apply(this, arguments);
	        } else {
	            return ZonedDateTime.of8.apply(this, arguments);
	        }
	    };

	    ZonedDateTime.of3 = function of3(date, time, zone) {
	        return ZonedDateTime.of2(_LocalDateTime.LocalDateTime.of(date, time), zone);
	    };

	    ZonedDateTime.of2 = function of2(localDateTime, zone) {
	        return ZonedDateTime.ofLocal(localDateTime, zone, null);
	    };

	    ZonedDateTime.of8 = function of8(year, month, dayOfMonth, hour, minute, second, nanoOfSecond, zone) {
	        var dt = _LocalDateTime.LocalDateTime.of(year, month, dayOfMonth, hour, minute, second, nanoOfSecond);
	        return ZonedDateTime.ofLocal(dt, zone, null);
	    };

	    ZonedDateTime.ofLocal = function ofLocal(localDateTime, zone, preferredOffset) {
	        (0, _assert.requireNonNull)(localDateTime, 'localDateTime');
	        (0, _assert.requireNonNull)(zone, 'zone');
	        if (zone instanceof _ZoneOffset.ZoneOffset) {
	            return new ZonedDateTime(localDateTime, zone, zone);
	        }
	        var rules = zone.rules();
	        var offset = rules.offsetOfLocalDateTime(localDateTime);

	        return new ZonedDateTime(localDateTime, offset, zone);
	    };

	    ZonedDateTime.ofInstant = function ofInstant() {
	        if (arguments.length === 2) {
	            return ZonedDateTime.ofInstant2.apply(this, arguments);
	        } else {
	            return ZonedDateTime.ofInstant3.apply(this, arguments);
	        }
	    };

	    ZonedDateTime.ofInstant2 = function ofInstant2(instant, zone) {
	        (0, _assert.requireNonNull)(instant, 'instant');
	        (0, _assert.requireNonNull)(zone, 'zone');
	        return ZonedDateTime._create(instant.epochSecond(), instant.nano(), zone);
	    };

	    ZonedDateTime.ofInstant3 = function ofInstant3(localDateTime, offset, zone) {
	        (0, _assert.requireNonNull)(localDateTime, 'localDateTime');
	        (0, _assert.requireNonNull)(offset, 'offset');
	        (0, _assert.requireNonNull)(zone, 'zone');
	        return ZonedDateTime._create(localDateTime.toEpochSecond(offset), localDateTime.nano(), zone);
	    };

	    ZonedDateTime._create = function _create(epochSecond, nanoOfSecond, zone) {
	        var rules = zone.rules();
	        var instant = _Instant.Instant.ofEpochSecond(epochSecond, nanoOfSecond);
	        var offset = rules.offset(instant);
	        var ldt = _LocalDateTime.LocalDateTime.ofEpochSecond(epochSecond, nanoOfSecond, offset);
	        return new ZonedDateTime(ldt, offset, zone);
	    };

	    ZonedDateTime.ofStrict = function ofStrict(localDateTime, offset, zone) {
	        (0, _assert.requireNonNull)(localDateTime, 'localDateTime');
	        (0, _assert.requireNonNull)(offset, 'offset');
	        (0, _assert.requireNonNull)(zone, 'zone');
	        var rules = zone.rules();
	        if (rules.isValidOffset(localDateTime, offset) === false) {
	            throw new _errors.DateTimeException('ZoneOffset "' + offset + '" is not valid for LocalDateTime "' + localDateTime + '" in zone "' + zone + '"');
	        }
	        return new ZonedDateTime(localDateTime, offset, zone);
	    };

	    ZonedDateTime._ofLenient = function _ofLenient(localDateTime, offset, zone) {
	        (0, _assert.requireNonNull)(localDateTime, 'localDateTime');
	        (0, _assert.requireNonNull)(offset, 'offset');
	        (0, _assert.requireNonNull)(zone, 'zone');
	        if (zone instanceof _ZoneOffset.ZoneOffset && offset.equals(zone) === false) {
	            throw new _errors.IllegalArgumentException('ZoneId must match ZoneOffset');
	        }
	        return new ZonedDateTime(localDateTime, offset, zone);
	    };

	    ZonedDateTime.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (temporal instanceof ZonedDateTime) {
	            return temporal;
	        }
	        var zone = _ZoneId.ZoneId.from(temporal);
	        if (temporal.isSupported(_ChronoField.ChronoField.INSTANT_SECONDS)) {
	            var zdt = ZonedDateTime._from(temporal, zone);
	            if (zdt != null) return zdt;
	        }
	        var ldt = _LocalDateTime.LocalDateTime.from(temporal);
	        return ZonedDateTime.of2(ldt, zone);
	    };

	    ZonedDateTime._from = function _from(temporal, zone) {
	        try {
	            return ZonedDateTime.__from(temporal, zone);
	        } catch (ex) {
	            if (!(ex instanceof _errors.DateTimeException)) throw ex;
	        }
	    };

	    ZonedDateTime.__from = function __from(temporal, zone) {
	        var epochSecond = temporal.getLong(_ChronoField.ChronoField.INSTANT_SECONDS);
	        var nanoOfSecond = temporal.get(_ChronoField.ChronoField.NANO_OF_SECOND);
	        return ZonedDateTime._create(epochSecond, nanoOfSecond, zone);
	    };

	    ZonedDateTime.parse = function parse(text) {
	        var formatter = arguments.length <= 1 || arguments[1] === undefined ? _DateTimeFormatter.DateTimeFormatter.ISO_ZONED_DATE_TIME : arguments[1];

	        (0, _assert.requireNonNull)(formatter, 'fromatter');
	        return formatter.parse(text, ZonedDateTime.FROM);
	    };

	    function ZonedDateTime(dateTime, offset, zone) {
	        _classCallCheck(this, ZonedDateTime);

	        (0, _assert.requireNonNull)(dateTime, 'dateTime');
	        (0, _assert.requireNonNull)(offset, 'offset');
	        (0, _assert.requireNonNull)(zone, 'zone');

	        var _this = _possibleConstructorReturn(this, _ChronoZonedDateTime.call(this));

	        _this._dateTime = dateTime;

	        _this._offset = offset;

	        _this._zone = zone;
	        return _this;
	    }

	    ZonedDateTime.prototype._resolveLocal = function _resolveLocal(newDateTime) {
	        (0, _assert.requireNonNull)(newDateTime, 'newDateTime');
	        return ZonedDateTime.ofLocal(newDateTime, this._zone, this._offset);
	    };

	    ZonedDateTime.prototype._resolveInstant = function _resolveInstant(newDateTime) {
	        return ZonedDateTime.ofInstant3(newDateTime, this._offset, this._zone);
	    };

	    ZonedDateTime.prototype._resolveOffset = function _resolveOffset(offset) {
	        if (offset.equals(this._offset) === false && this._zone.rules().isValidOffset(this._dateTime, this._offset)) {
	            return new ZonedDateTime(this._dateTime, this._offset, this._zone);
	        }
	        return this;
	    };

	    ZonedDateTime.prototype.isSupported = function isSupported(fieldOrUnit) {
	        if (fieldOrUnit instanceof _ChronoField.ChronoField) {
	            return true;
	        } else if (fieldOrUnit instanceof _ChronoUnit.ChronoUnit) {
	            return fieldOrUnit.isDateBased() || fieldOrUnit.isTimeBased();
	        }
	        return fieldOrUnit != null && fieldOrUnit.isSupportedBy(this);
	    };

	    ZonedDateTime.prototype.range = function range(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            if (field === _ChronoField.ChronoField.INSTANT_SECONDS || field === _ChronoField.ChronoField.OFFSET_SECONDS) {
	                return field.range();
	            }
	            return this._dateTime.range(field);
	        }
	        return field.rangeRefinedBy(this);
	    };

	    ZonedDateTime.prototype.get = function get(field) {
	        return this.getLong(field);
	    };

	    ZonedDateTime.prototype.getLong = function getLong(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.INSTANT_SECONDS:
	                    return this.toEpochSecond();
	                case _ChronoField.ChronoField.OFFSET_SECONDS:
	                    return this._offset.totalSeconds();
	            }
	            return this._dateTime.getLong(field);
	        }
	        (0, _assert.requireNonNull)(field, 'field');
	        return field.getFrom(this);
	    };

	    ZonedDateTime.prototype.offset = function offset() {
	        return this._offset;
	    };

	    ZonedDateTime.prototype.zone = function zone() {
	        return this._zone;
	    };

	    ZonedDateTime.prototype.withZoneSameLocal = function withZoneSameLocal(zone) {
	        (0, _assert.requireNonNull)(zone, 'zone');
	        return this._zone.equals(zone) ? this : ZonedDateTime.ofLocal(this._dateTime, zone, this._offset);
	    };

	    ZonedDateTime.prototype.withZoneSameInstant = function withZoneSameInstant(zone) {
	        (0, _assert.requireNonNull)(zone, 'zone');
	        return this._zone.equals(zone) ? this : ZonedDateTime._create(this._dateTime.toEpochSecond(this._offset), this._dateTime.nano(), zone);
	    };

	    ZonedDateTime.prototype.withFixedOffsetZone = function withFixedOffsetZone() {
	        return this._zone.equals(this._offset) ? this : new ZonedDateTime(this._dateTime, this._offset, this._offset);
	    };

	    ZonedDateTime.prototype.year = function year() {
	        return this._dateTime.year();
	    };

	    ZonedDateTime.prototype.monthValue = function monthValue() {
	        return this._dateTime.monthValue();
	    };

	    ZonedDateTime.prototype.month = function month() {
	        return this._dateTime.month();
	    };

	    ZonedDateTime.prototype.dayOfMonth = function dayOfMonth() {
	        return this._dateTime.dayOfMonth();
	    };

	    ZonedDateTime.prototype.dayOfYear = function dayOfYear() {
	        return this._dateTime.dayOfYear();
	    };

	    ZonedDateTime.prototype.dayOfWeek = function dayOfWeek() {
	        return this._dateTime.dayOfWeek();
	    };

	    ZonedDateTime.prototype.hour = function hour() {
	        return this._dateTime.hour();
	    };

	    ZonedDateTime.prototype.minute = function minute() {
	        return this._dateTime.minute();
	    };

	    ZonedDateTime.prototype.second = function second() {
	        return this._dateTime.second();
	    };

	    ZonedDateTime.prototype.nano = function nano() {
	        return this._dateTime.nano();
	    };

	    ZonedDateTime.prototype.with = function _with() {
	        if (arguments.length === 1) {
	            return this.withTemporalAdjuster.apply(this, arguments);
	        } else {
	            return this.with2.apply(this, arguments);
	        }
	    };

	    ZonedDateTime.prototype.withTemporalAdjuster = function withTemporalAdjuster(adjuster) {
	        if (adjuster instanceof _LocalDate.LocalDate) {
	            return this._resolveLocal(_LocalDateTime.LocalDateTime.of(adjuster, this._dateTime.toLocalTime()));
	        } else if (adjuster instanceof _LocalTime.LocalTime) {
	            return this._resolveLocal(_LocalDateTime.LocalDateTime.of(this._dateTime.toLocalDate(), adjuster));
	        } else if (adjuster instanceof _LocalDateTime.LocalDateTime) {
	            return this._resolveLocal(adjuster);
	        } else if (adjuster instanceof _Instant.Instant) {
	            var instant = adjuster;
	            return ZonedDateTime._create(instant.epochSecond(), instant.nano(), this._zone);
	        } else if (adjuster instanceof _ZoneOffset.ZoneOffset) {
	            return this._resolveOffset(adjuster);
	        }
	        (0, _assert.requireNonNull)(adjuster, 'adjuster');
	        return adjuster.adjustInto(this);
	    };

	    ZonedDateTime.prototype.with2 = function with2(field, newValue) {
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.INSTANT_SECONDS:
	                    return ZonedDateTime._create(newValue, this.nano(), this._zone);
	                case _ChronoField.ChronoField.OFFSET_SECONDS:
	                    {
	                        var offset = _ZoneOffset.ZoneOffset.ofTotalSeconds(field.checkValidIntValue(newValue));
	                        return this._resolveOffset(offset);
	                    }
	            }
	            return this._resolveLocal(this._dateTime.with(field, newValue));
	        }
	        return field.adjustInto(this, newValue);
	    };

	    ZonedDateTime.prototype.withYear = function withYear(year) {
	        return this._resolveLocal(this._dateTime.withYear(year));
	    };

	    ZonedDateTime.prototype.withMonth = function withMonth(month) {
	        return this._resolveLocal(this._dateTime.withMonth(month));
	    };

	    ZonedDateTime.prototype.withDayOfMonth = function withDayOfMonth(dayOfMonth) {
	        return this._resolveLocal(this._dateTime.withDayOfMonth(dayOfMonth));
	    };

	    ZonedDateTime.prototype.withDayOfYear = function withDayOfYear(dayOfYear) {
	        return this._resolveLocal(this._dateTime.withDayOfYear(dayOfYear));
	    };

	    ZonedDateTime.prototype.withHour = function withHour(hour) {
	        return this._resolveLocal(this._dateTime.withHour(hour));
	    };

	    ZonedDateTime.prototype.withMinute = function withMinute(minute) {
	        return this._resolveLocal(this._dateTime.withMinute(minute));
	    };

	    ZonedDateTime.prototype.withSecond = function withSecond(second) {
	        return this._resolveLocal(this._dateTime.withSecond(second));
	    };

	    ZonedDateTime.prototype.withNano = function withNano(nanoOfSecond) {
	        return this._resolveLocal(this._dateTime.withNano(nanoOfSecond));
	    };

	    ZonedDateTime.prototype.truncatedTo = function truncatedTo(unit) {
	        return this._resolveLocal(this._dateTime.truncatedTo(unit));
	    };

	    ZonedDateTime.prototype.plus = function plus() {
	        if (arguments.length === 1) {
	            return this.plusTemporalAmount.apply(this, arguments);
	        } else {
	            return this.plus2.apply(this, arguments);
	        }
	    };

	    ZonedDateTime.prototype.plusTemporalAmount = function plusTemporalAmount(amount) {
	        (0, _assert.requireNonNull)(amount);
	        return amount.addTo(this);
	    };

	    ZonedDateTime.prototype.plus2 = function plus2(amountToAdd, unit) {
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            if (unit.isDateBased()) {
	                return this._resolveLocal(this._dateTime.plus(amountToAdd, unit));
	            } else {
	                return this._resolveInstant(this._dateTime.plus(amountToAdd, unit));
	            }
	        }
	        (0, _assert.requireNonNull)(unit, 'unit');
	        return unit.addTo(this, amountToAdd);
	    };

	    ZonedDateTime.prototype.plusYears = function plusYears(years) {
	        return this._resolveLocal(this._dateTime.plusYears(years));
	    };

	    ZonedDateTime.prototype.plusMonths = function plusMonths(months) {
	        return this._resolveLocal(this._dateTime.plusMonths(months));
	    };

	    ZonedDateTime.prototype.plusWeeks = function plusWeeks(weeks) {
	        return this._resolveLocal(this._dateTime.plusWeeks(weeks));
	    };

	    ZonedDateTime.prototype.plusDays = function plusDays(days) {
	        return this._resolveLocal(this._dateTime.plusDays(days));
	    };

	    ZonedDateTime.prototype.plusHours = function plusHours(hours) {
	        return this._resolveInstant(this._dateTime.plusHours(hours));
	    };

	    ZonedDateTime.prototype.plusMinutes = function plusMinutes(minutes) {
	        return this._resolveInstant(this._dateTime.plusMinutes(minutes));
	    };

	    ZonedDateTime.prototype.plusSeconds = function plusSeconds(seconds) {
	        return this._resolveInstant(this._dateTime.plusSeconds(seconds));
	    };

	    ZonedDateTime.prototype.plusNanos = function plusNanos(nanos) {
	        return this._resolveInstant(this._dateTime.plusNanos(nanos));
	    };

	    ZonedDateTime.prototype.minus = function minus() {
	        if (arguments.length === 1) {
	            return this.minusTemporalAmount.apply(this, arguments);
	        } else {
	            return this.minus2.apply(this, arguments);
	        }
	    };

	    ZonedDateTime.prototype.minusTemporalAmount = function minusTemporalAmount(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.subtractFrom(this);
	    };

	    ZonedDateTime.prototype.minus2 = function minus2(amountToSubtract, unit) {
	        return this.plus2(-1 * amountToSubtract, unit);
	    };

	    ZonedDateTime.prototype.minusYears = function minusYears(years) {
	        return this.plusYears(-1 * years);
	    };

	    ZonedDateTime.prototype.minusMonths = function minusMonths(months) {
	        return this.plusMonths(-1 * months);
	    };

	    ZonedDateTime.prototype.minusWeeks = function minusWeeks(weeks) {
	        return this.plusWeeks(-1 * weeks);
	    };

	    ZonedDateTime.prototype.minusDays = function minusDays(days) {
	        return this.plusDays(-1 * days);
	    };

	    ZonedDateTime.prototype.minusHours = function minusHours(hours) {
	        return this.plusHours(-1 * hours);
	    };

	    ZonedDateTime.prototype.minusMinutes = function minusMinutes(minutes) {
	        return this.plusMinutes(-1 * minutes);
	    };

	    ZonedDateTime.prototype.minusSeconds = function minusSeconds(seconds) {
	        return this.plusSeconds(-1 * seconds);
	    };

	    ZonedDateTime.prototype.minusNanos = function minusNanos(nanos) {
	        return this.plusNanos(-1 * nanos);
	    };

	    ZonedDateTime.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return this.toLocalDate();
	        }
	        (0, _assert.requireNonNull)(_query, 'query');
	        return _ChronoZonedDateTime.prototype.query.call(this, _query);
	    };

	    ZonedDateTime.prototype.until = function until(endExclusive, unit) {
	        var end = ZonedDateTime.from(endExclusive);
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            end = end.withZoneSameInstant(this._zone);
	            if (unit.isDateBased()) {
	                return this._dateTime.until(end._dateTime, unit);
	            } else {
	                return this._dateTime.until(end._dateTime, unit);
	            }
	        }
	        return unit.between(this, end);
	    };

	    ZonedDateTime.prototype.toLocalDateTime = function toLocalDateTime() {
	        return this._dateTime;
	    };

	    ZonedDateTime.prototype.toLocalDate = function toLocalDate() {
	        return this._dateTime.toLocalDate();
	    };

	    ZonedDateTime.prototype.toLocalTime = function toLocalTime() {
	        return this._dateTime.toLocalTime();
	    };

	    ZonedDateTime.prototype.toOffsetDateTime = function toOffsetDateTime() {
	        return OffsetDateTime.of(this._dateTime, this._offset);
	    };

	    ZonedDateTime.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof ZonedDateTime) {
	            return this._dateTime.equals(other._dateTime) && this._offset.equals(other._offset) && this._zone.equals(other._zone);
	        }
	        return false;
	    };

	    ZonedDateTime.prototype.hashCode = function hashCode() {
	        var r = 17;
	        r = 31 * r + this._dateTime.hashCode();
	        r = 31 * r + this._offset.hashCode();
	        r = 31 * r + this._zone.hashCode();
	        return r;
	    };

	    ZonedDateTime.prototype.toString = function toString() {
	        var str = this._dateTime.toString() + this._offset.toString();
	        if (this._offset !== this._zone) {
	            str += '[' + this._zone.toString() + ']';
	        }
	        return str;
	    };

	    ZonedDateTime.prototype.toJSON = function toJSON() {
	        return this.toString();
	    };

	    ZonedDateTime.prototype.format = function format(formatter) {
	        return _ChronoZonedDateTime.prototype.format.call(this, formatter);
	    };

	    return ZonedDateTime;
	}(_ChronoZonedDateTime2.ChronoZonedDateTime);

	exports.ZonedDateTime = ZonedDateTime;
	function _init() {
	    ZonedDateTime.FROM = (0, _TemporalQuery.createTemporalQuery)('ZonedDateTime.FROM', function (temporal) {
	        return ZonedDateTime.from(temporal);
	    });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ChronoZonedDateTime = undefined;

	var _assert = __webpack_require__(2);

	var _Instant = __webpack_require__(4);

	var _LocalDate = __webpack_require__(8);

	var _MathUtil = __webpack_require__(6);

	var _ChronoUnit = __webpack_require__(13);

	var _Temporal2 = __webpack_require__(37);

	var _TemporalQueries = __webpack_require__(25);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ChronoZonedDateTime = function (_Temporal) {
	    _inherits(ChronoZonedDateTime, _Temporal);

	    function ChronoZonedDateTime() {
	        _classCallCheck(this, ChronoZonedDateTime);

	        return _possibleConstructorReturn(this, _Temporal.apply(this, arguments));
	    }

	    ChronoZonedDateTime.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.zone()) {
	            return this.zone();
	        } else if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return this.toLocalDate().chronology();
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.NANOS;
	        } else if (_query === _TemporalQueries.TemporalQueries.offset()) {
	            return this.offset();
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return _LocalDate.LocalDate.ofEpochDay(this.toLocalDate().toEpochDay());
	        } else if (_query === _TemporalQueries.TemporalQueries.localTime()) {
	            return this.toLocalTime();
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    ChronoZonedDateTime.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.format(this);
	    };

	    ChronoZonedDateTime.prototype.toInstant = function toInstant() {
	        return _Instant.Instant.ofEpochSecond(this.toEpochSecond(), this.toLocalTime().nano());
	    };

	    ChronoZonedDateTime.prototype.toEpochSecond = function toEpochSecond() {
	        var epochDay = this.toLocalDate().toEpochDay();
	        var secs = epochDay * 86400 + this.toLocalTime().toSecondOfDay();
	        secs -= this.offset().totalSeconds();
	        return secs;
	    };

	    ChronoZonedDateTime.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        var cmp = _MathUtil.MathUtil.compareNumbers(this.toEpochSecond(), other.toEpochSecond());
	        if (cmp === 0) {
	            cmp = this.toLocalTime().nano() - other.toLocalTime().nano();
	            if (cmp === 0) {
	                cmp = this.toLocalDateTime().compareTo(other.toLocalDateTime());
	                if (cmp === 0) {
	                    cmp = strcmp(this.zone().id(), other.zone().id());
	                }
	            }
	        }
	        return cmp;
	    };

	    ChronoZonedDateTime.prototype.isAfter = function isAfter(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        var thisEpochSec = this.toEpochSecond();
	        var otherEpochSec = other.toEpochSecond();
	        return thisEpochSec > otherEpochSec || thisEpochSec === otherEpochSec && this.toLocalTime().nano() > other.toLocalTime().nano();
	    };

	    ChronoZonedDateTime.prototype.isBefore = function isBefore(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        var thisEpochSec = this.toEpochSecond();
	        var otherEpochSec = other.toEpochSecond();
	        return thisEpochSec < otherEpochSec || thisEpochSec === otherEpochSec && this.toLocalTime().nano() < other.toLocalTime().nano();
	    };

	    ChronoZonedDateTime.prototype.isEqual = function isEqual(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        return this.toEpochSecond() === other.toEpochSecond() && this.toLocalTime().nano() === other.toLocalTime().nano();
	    };

	    ChronoZonedDateTime.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof ChronoZonedDateTime) {
	            return this.compareTo(other) === 0;
	        }
	        return false;
	    };

	    return ChronoZonedDateTime;
	}(_Temporal2.Temporal);

	exports.ChronoZonedDateTime = ChronoZonedDateTime;


	function strcmp(a, b) {
	    if (a < b) {
	        return -1;
	    }
	    if (a > b) {
	        return 1;
	    }
	    return 0;
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ChronoLocalDateTime = undefined;

	var _assert = __webpack_require__(2);

	var _MathUtil = __webpack_require__(6);

	var _LocalDate = __webpack_require__(8);

	var _Instant = __webpack_require__(4);

	var _ChronoUnit = __webpack_require__(13);

	var _ChronoField = __webpack_require__(12);

	var _Temporal2 = __webpack_require__(37);

	var _TemporalQueries = __webpack_require__(25);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ChronoLocalDateTime = function (_Temporal) {
	    _inherits(ChronoLocalDateTime, _Temporal);

	    function ChronoLocalDateTime() {
	        _classCallCheck(this, ChronoLocalDateTime);

	        return _possibleConstructorReturn(this, _Temporal.apply(this, arguments));
	    }

	    ChronoLocalDateTime.prototype.chronology = function chronology() {
	        return this.toLocalDate().chronology();
	    };

	    ChronoLocalDateTime.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return this.chronology();
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.NANOS;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return _LocalDate.LocalDate.ofEpochDay(this.toLocalDate().toEpochDay());
	        } else if (_query === _TemporalQueries.TemporalQueries.localTime()) {
	            return this.toLocalTime();
	        } else if (_query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return null;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    ChronoLocalDateTime.prototype.adjustInto = function adjustInto(temporal) {
	        return temporal.with(_ChronoField.ChronoField.EPOCH_DAY, this.toLocalDate().toEpochDay()).with(_ChronoField.ChronoField.NANO_OF_DAY, this.toLocalTime().toNanoOfDay());
	    };

	    ChronoLocalDateTime.prototype.toInstant = function toInstant(offset) {
	        return _Instant.Instant.ofEpochSecond(this.toEpochSecond(offset), this.toLocalTime().nano());
	    };

	    ChronoLocalDateTime.prototype.toEpochSecond = function toEpochSecond(offset) {
	        (0, _assert.requireNonNull)(offset, 'offset');
	        var epochDay = this.toLocalDate().toEpochDay();
	        var secs = epochDay * 86400 + this.toLocalTime().toSecondOfDay();
	        secs -= offset.totalSeconds();
	        return _MathUtil.MathUtil.safeToInt(secs);
	    };

	    return ChronoLocalDateTime;
	}(_Temporal2.Temporal);

	exports.ChronoLocalDateTime = ChronoLocalDateTime;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.convert = convert;

	var _errors = __webpack_require__(3);

	var _LocalDate = __webpack_require__(8);

	var _LocalDateTime = __webpack_require__(7);

	var _ZonedDateTime = __webpack_require__(51);

	var _ZoneId = __webpack_require__(24);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper                 
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var ToNativeJsConverter = function () {
	    function ToNativeJsConverter(temporal, zone) {
	        _classCallCheck(this, ToNativeJsConverter);

	        var zonedDateTime = void 0;

	        if (temporal instanceof _LocalDate.LocalDate) {
	            zone = zone == null ? _ZoneId.ZoneId.systemDefault() : zone;
	            zonedDateTime = temporal.atStartOfDay(zone);
	        } else if (temporal instanceof _LocalDateTime.LocalDateTime) {
	            zone = zone == null ? _ZoneId.ZoneId.systemDefault() : zone;
	            zonedDateTime = temporal.atZone(zone);
	        } else if (temporal instanceof _ZonedDateTime.ZonedDateTime) {
	            if (zone == null) {
	                zonedDateTime = temporal;
	            } else {
	                zonedDateTime = temporal.withZoneSameInstant(zone);
	            }
	        } else {
	            throw new _errors.IllegalArgumentException('unsupported instance for convert operation:' + temporal);
	        }

	        this.instant = zonedDateTime.toInstant();
	    }

	    ToNativeJsConverter.prototype.toDate = function toDate() {
	        return new Date(this.instant.toEpochMilli());
	    };

	    ToNativeJsConverter.prototype.toEpochMilli = function toEpochMilli() {
	        return this.instant.toEpochMilli();
	    };

	    return ToNativeJsConverter;
	}();

	function convert(temporal, zone) {
	    return new ToNativeJsConverter(temporal, zone);
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.nativeJs = nativeJs;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _Instant = __webpack_require__(4);

	var _LocalDate = __webpack_require__(8);

	var _LocalTime = __webpack_require__(5);

	var _MathUtil = __webpack_require__(6);

	var _ZoneId = __webpack_require__(24);

	var _ChronoField = __webpack_require__(12);

	var _TemporalQueries = __webpack_require__(25);

	var _TemporalAccessor2 = __webpack_require__(38);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var NativeJsTemporal = function (_TemporalAccessor) {
	    _inherits(NativeJsTemporal, _TemporalAccessor);

	    function NativeJsTemporal(date) {
	        var zone = arguments.length <= 1 || arguments[1] === undefined ? _ZoneId.ZoneId.systemDefault() : arguments[1];

	        _classCallCheck(this, NativeJsTemporal);

	        var _this = _possibleConstructorReturn(this, _TemporalAccessor.call(this));

	        _this._zone = zone;
	        if (date instanceof Date) {
	            _this._epochMilli = date.getTime();
	            return _possibleConstructorReturn(_this);
	        } else if (typeof date.toDate === 'function' && date.toDate() instanceof Date) {
	            _this._epochMilli = date.toDate().getTime();
	            return _possibleConstructorReturn(_this);
	        }
	        (0, _assert.assert)(false, 'date must be either a javascript date or a moment');
	        return _this;
	    }

	    NativeJsTemporal.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return _LocalDate.LocalDate.ofInstant(_Instant.Instant.ofEpochMilli(this._epochMilli), this._zone);
	        } else if (_query === _TemporalQueries.TemporalQueries.localTime()) {
	            return _LocalTime.LocalTime.ofInstant(_Instant.Instant.ofEpochMilli(this._epochMilli), this._zone);
	        } else if (_query === _TemporalQueries.TemporalQueries.zone()) {
	            return this._zone;
	        }
	        return _TemporalAccessor.prototype.query.call(this, _query);
	    };

	    NativeJsTemporal.prototype.get = function get(field) {
	        return this.getLong(field);
	    };

	    NativeJsTemporal.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.NANO_OF_SECOND:
	                    return _MathUtil.MathUtil.floorMod(this._epochMilli, 1000) * 1000000;
	                case _ChronoField.ChronoField.INSTANT_SECONDS:
	                    return _MathUtil.MathUtil.floorDiv(this._epochMilli, 1000);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    NativeJsTemporal.prototype.isSupported = function isSupported(field) {
	        return field === _ChronoField.ChronoField.INSTANT_SECONDS || field === _ChronoField.ChronoField.NANO_OF_SECOND;
	    };

	    return NativeJsTemporal;
	}(_TemporalAccessor2.TemporalAccessor);

	function nativeJs(date, zone) {
	    return new NativeJsTemporal(date, zone);
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.TemporalAdjusters = undefined;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _TemporalAdjuster4 = __webpack_require__(57);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _MathUtil = __webpack_require__(6);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var TemporalAdjusters = exports.TemporalAdjusters = function () {
	    function TemporalAdjusters() {
	        _classCallCheck(this, TemporalAdjusters);
	    }

	    TemporalAdjusters.firstDayOfMonth = function firstDayOfMonth() {
	        return Impl.FIRST_DAY_OF_MONTH;
	    };

	    TemporalAdjusters.lastDayOfMonth = function lastDayOfMonth() {
	        return Impl.LAST_DAY_OF_MONTH;
	    };

	    TemporalAdjusters.firstDayOfNextMonth = function firstDayOfNextMonth() {
	        return Impl.FIRST_DAY_OF_NEXT_MONTH;
	    };

	    TemporalAdjusters.firstDayOfYear = function firstDayOfYear() {
	        return Impl.FIRST_DAY_OF_YEAR;
	    };

	    TemporalAdjusters.lastDayOfYear = function lastDayOfYear() {
	        return Impl.LAST_DAY_OF_YEAR;
	    };

	    TemporalAdjusters.firstDayOfNextYear = function firstDayOfNextYear() {
	        return Impl.FIRST_DAY_OF_NEXT_YEAR;
	    };

	    TemporalAdjusters.firstInMonth = function firstInMonth(dayOfWeek) {
	        (0, _assert.requireNonNull)(dayOfWeek, 'dayOfWeek');
	        return new DayOfWeekInMonth(1, dayOfWeek);
	    };

	    TemporalAdjusters.lastInMonth = function lastInMonth(dayOfWeek) {
	        (0, _assert.requireNonNull)(dayOfWeek, 'dayOfWeek');
	        return new DayOfWeekInMonth(-1, dayOfWeek);
	    };

	    TemporalAdjusters.dayOfWeekInMonth = function dayOfWeekInMonth(ordinal, dayOfWeek) {
	        (0, _assert.requireNonNull)(dayOfWeek, 'dayOfWeek');
	        return new DayOfWeekInMonth(ordinal, dayOfWeek);
	    };

	    TemporalAdjusters.next = function next(dayOfWeek) {
	        return new RelativeDayOfWeek(2, dayOfWeek);
	    };

	    TemporalAdjusters.nextOrSame = function nextOrSame(dayOfWeek) {
	        return new RelativeDayOfWeek(0, dayOfWeek);
	    };

	    TemporalAdjusters.previous = function previous(dayOfWeek) {
	        return new RelativeDayOfWeek(3, dayOfWeek);
	    };

	    TemporalAdjusters.previousOrSame = function previousOrSame(dayOfWeek) {
	        return new RelativeDayOfWeek(1, dayOfWeek);
	    };

	    return TemporalAdjusters;
	}();

	var Impl = function (_TemporalAdjuster) {
	    _inherits(Impl, _TemporalAdjuster);

	    function Impl(ordinal) {
	        _classCallCheck(this, Impl);

	        var _this = _possibleConstructorReturn(this, _TemporalAdjuster.call(this));

	        _this._ordinal = ordinal;
	        return _this;
	    }

	    Impl.prototype.adjustInto = function adjustInto(temporal) {
	        switch (this._ordinal) {
	            case 0:
	                return temporal.with(_ChronoField.ChronoField.DAY_OF_MONTH, 1);
	            case 1:
	                return temporal.with(_ChronoField.ChronoField.DAY_OF_MONTH, temporal.range(_ChronoField.ChronoField.DAY_OF_MONTH).maximum());
	            case 2:
	                return temporal.with(_ChronoField.ChronoField.DAY_OF_MONTH, 1).plus(1, _ChronoUnit.ChronoUnit.MONTHS);
	            case 3:
	                return temporal.with(_ChronoField.ChronoField.DAY_OF_YEAR, 1);
	            case 4:
	                return temporal.with(_ChronoField.ChronoField.DAY_OF_YEAR, temporal.range(_ChronoField.ChronoField.DAY_OF_YEAR).maximum());
	            case 5:
	                return temporal.with(_ChronoField.ChronoField.DAY_OF_YEAR, 1).plus(1, _ChronoUnit.ChronoUnit.YEARS);
	        }
	        throw new _errors.IllegalStateException('Unreachable');
	    };

	    return Impl;
	}(_TemporalAdjuster4.TemporalAdjuster);

	Impl.FIRST_DAY_OF_MONTH = new Impl(0);

	Impl.LAST_DAY_OF_MONTH = new Impl(1);

	Impl.FIRST_DAY_OF_NEXT_MONTH = new Impl(2);

	Impl.FIRST_DAY_OF_YEAR = new Impl(3);

	Impl.LAST_DAY_OF_YEAR = new Impl(4);

	Impl.FIRST_DAY_OF_NEXT_YEAR = new Impl(5);

	var DayOfWeekInMonth = function (_TemporalAdjuster2) {
	    _inherits(DayOfWeekInMonth, _TemporalAdjuster2);

	    function DayOfWeekInMonth(ordinal, dow) {
	        _classCallCheck(this, DayOfWeekInMonth);

	        var _this2 = _possibleConstructorReturn(this, _TemporalAdjuster2.call(this));

	        _this2._ordinal = ordinal;
	        _this2._dowValue = dow.value();
	        return _this2;
	    }

	    DayOfWeekInMonth.prototype.adjustInto = function adjustInto(temporal) {
	        if (this._ordinal >= 0) {
	            var temp = temporal.with(_ChronoField.ChronoField.DAY_OF_MONTH, 1);
	            var curDow = temp.get(_ChronoField.ChronoField.DAY_OF_WEEK);
	            var dowDiff = _MathUtil.MathUtil.intMod(this._dowValue - curDow + 7, 7);
	            dowDiff += (this._ordinal - 1) * 7;
	            return temp.plus(dowDiff, _ChronoUnit.ChronoUnit.DAYS);
	        } else {
	            var _temp = temporal.with(_ChronoField.ChronoField.DAY_OF_MONTH, temporal.range(_ChronoField.ChronoField.DAY_OF_MONTH).maximum());
	            var _curDow = _temp.get(_ChronoField.ChronoField.DAY_OF_WEEK);
	            var daysDiff = this._dowValue - _curDow;
	            daysDiff = daysDiff === 0 ? 0 : daysDiff > 0 ? daysDiff - 7 : daysDiff;
	            daysDiff -= (-this._ordinal - 1) * 7;
	            return _temp.plus(daysDiff, _ChronoUnit.ChronoUnit.DAYS);
	        }
	    };

	    return DayOfWeekInMonth;
	}(_TemporalAdjuster4.TemporalAdjuster);

	var RelativeDayOfWeek = function (_TemporalAdjuster3) {
	    _inherits(RelativeDayOfWeek, _TemporalAdjuster3);

	    function RelativeDayOfWeek(relative, dayOfWeek) {
	        _classCallCheck(this, RelativeDayOfWeek);

	        var _this3 = _possibleConstructorReturn(this, _TemporalAdjuster3.call(this));

	        (0, _assert.requireNonNull)(dayOfWeek, 'dayOfWeek');

	        _this3._relative = relative;

	        _this3._dowValue = dayOfWeek.value();
	        return _this3;
	    }

	    RelativeDayOfWeek.prototype.adjustInto = function adjustInto(temporal) {
	        var calDow = temporal.get(_ChronoField.ChronoField.DAY_OF_WEEK);
	        if (this._relative < 2 && calDow === this._dowValue) {
	            return temporal;
	        }
	        if ((this._relative & 1) === 0) {
	            var daysDiff = calDow - this._dowValue;
	            return temporal.plus(daysDiff >= 0 ? 7 - daysDiff : -daysDiff, _ChronoUnit.ChronoUnit.DAYS);
	        } else {
	            var _daysDiff = this._dowValue - calDow;
	            return temporal.minus(_daysDiff >= 0 ? 7 - _daysDiff : -_daysDiff, _ChronoUnit.ChronoUnit.DAYS);
	        }
	    };

	    return RelativeDayOfWeek;
	}(_TemporalAdjuster4.TemporalAdjuster);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.TemporalAdjuster = undefined;

	var _assert = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos  
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var TemporalAdjuster = exports.TemporalAdjuster = function () {
	  function TemporalAdjuster() {
	    _classCallCheck(this, TemporalAdjuster);
	  }

	  TemporalAdjuster.prototype.adjustInto = function adjustInto(temporal) {
	    (0, _assert.abstractMethodFail)('adjustInto');
	  };

	  return TemporalAdjuster;
	}();

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ZoneOffset = __webpack_require__(23);

	var _DayOfWeek = __webpack_require__(45);

	var _Duration = __webpack_require__(14);

	var _Instant = __webpack_require__(4);

	var _LocalDate = __webpack_require__(8);

	var _LocalTime = __webpack_require__(5);

	var _LocalDateTime = __webpack_require__(7);

	var _Month = __webpack_require__(11);

	var _MonthDay = __webpack_require__(49);

	var _Period = __webpack_require__(32);

	var _Year = __webpack_require__(48);

	var _YearConstants = __webpack_require__(16);

	var _YearMonth = __webpack_require__(50);

	var _ZonedDateTime = __webpack_require__(51);

	var _IsoChronology = __webpack_require__(9);

	var _DateTimeFormatter = __webpack_require__(31);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _IsoFields = __webpack_require__(44);

	var _DateTimeFormatterBuilder = __webpack_require__(20);

	var _TemporalQueriesFactory = __webpack_require__(59);

	var _ZoneIdFactory = __webpack_require__(21);

	/*
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var isInit = false;

	function init() {

	    if (isInit) {
	        return;
	    }

	    isInit = true;

	    (0, _YearConstants._init)();
	    (0, _Duration._init)();
	    (0, _LocalTime._init)();
	    (0, _ChronoUnit._init)();
	    (0, _ChronoField._init)();
	    (0, _IsoFields._init)();
	    (0, _TemporalQueriesFactory._init)();
	    (0, _DayOfWeek._init)();
	    (0, _Instant._init)();
	    (0, _LocalDate._init)();
	    (0, _LocalDateTime._init)();
	    (0, _Year._init)();
	    (0, _Month._init)();
	    (0, _YearMonth._init)();
	    (0, _MonthDay._init)();
	    (0, _Period._init)();
	    (0, _ZoneOffset._init)();
	    (0, _ZonedDateTime._init)();
	    (0, _ZoneIdFactory._init)();
	    (0, _IsoChronology._init)();
	    (0, _DateTimeFormatter._init)();
	    (0, _DateTimeFormatterBuilder._init)();
	}

	init();

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports._init = _init;

	var _ChronoField = __webpack_require__(12);

	var _TemporalQuery = __webpack_require__(43);

	var _TemporalQueries = __webpack_require__(25);

	var _LocalDate = __webpack_require__(8);

	var _LocalTime = __webpack_require__(5);

	var _ZoneOffset = __webpack_require__(23);

	/*
	 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
	 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	function _init() {
	    _TemporalQueries.TemporalQueries.ZONE_ID = (0, _TemporalQuery.createTemporalQuery)('ZONE_ID', function (temporal) {
	        return temporal.query(_TemporalQueries.TemporalQueries.ZONE_ID);
	    });

	    _TemporalQueries.TemporalQueries.CHRONO = (0, _TemporalQuery.createTemporalQuery)('CHRONO', function (temporal) {
	        return temporal.query(_TemporalQueries.TemporalQueries.CHRONO);
	    });

	    _TemporalQueries.TemporalQueries.PRECISION = (0, _TemporalQuery.createTemporalQuery)('PRECISION', function (temporal) {
	        return temporal.query(_TemporalQueries.TemporalQueries.PRECISION);
	    });

	    _TemporalQueries.TemporalQueries.OFFSET = (0, _TemporalQuery.createTemporalQuery)('OFFSET', function (temporal) {
	        if (temporal.isSupported(_ChronoField.ChronoField.OFFSET_SECONDS)) {
	            return _ZoneOffset.ZoneOffset.ofTotalSeconds(temporal.get(_ChronoField.ChronoField.OFFSET_SECONDS));
	        }
	        return null;
	    });

	    _TemporalQueries.TemporalQueries.ZONE = (0, _TemporalQuery.createTemporalQuery)('ZONE', function (temporal) {
	        var zone = temporal.query(_TemporalQueries.TemporalQueries.ZONE_ID);
	        return zone != null ? zone : temporal.query(_TemporalQueries.TemporalQueries.OFFSET);
	    });

	    _TemporalQueries.TemporalQueries.LOCAL_DATE = (0, _TemporalQuery.createTemporalQuery)('LOCAL_DATE', function (temporal) {
	        if (temporal.isSupported(_ChronoField.ChronoField.EPOCH_DAY)) {
	            return _LocalDate.LocalDate.ofEpochDay(temporal.getLong(_ChronoField.ChronoField.EPOCH_DAY));
	        }
	        return null;
	    });

	    _TemporalQueries.TemporalQueries.LOCAL_TIME = (0, _TemporalQuery.createTemporalQuery)('LOCAL_TIME', function (temporal) {
	        if (temporal.isSupported(_ChronoField.ChronoField.NANO_OF_DAY)) {
	            return _LocalTime.LocalTime.ofNanoOfDay(temporal.getLong(_ChronoField.ChronoField.NANO_OF_DAY));
	        }
	        return null;
	    });
	}

/***/ }
/******/ ])
});
;
/*!
 * jQuery JavaScript Library v2.2.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-02-22T19:11Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var arr = [];

var document = window.document;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "2.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isPlainObject: function( obj ) {

		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {

			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf( "use strict" ) === 1 ) {
				script = document.createElement( "script" );
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {

				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval

				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {

						// Inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE9-10 only
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	register: function( owner, initial ) {
		var value = initial || {};

		// If it is a node unlikely to be stringify-ed or looped over
		// use plain assignment
		if ( owner.nodeType ) {
			owner[ this.expando ] = value;

		// Otherwise secure it in a non-enumerable, non-writable property
		// configurability must be true to allow the property to be
		// deleted with the delete operator
		} else {
			Object.defineProperty( owner, this.expando, {
				value: value,
				writable: true,
				configurable: true
			} );
		}
		return owner[ this.expando ];
	},
	cache: function( owner ) {

		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return an empty object.
		if ( !acceptData( owner ) ) {
			return {};
		}

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ prop ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :
			owner[ this.expando ] && owner[ this.expando ][ key ];
	},
	access: function( owner, key, value ) {
		var stored;

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase( key ) );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key === undefined ) {
			this.register( owner );

		} else {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );

				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;

			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <= 35-45+
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://code.google.com/p/chromium/issues/detail?id=378607
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data, camelKey;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// with the key as-is
				data = dataUser.get( elem, key ) ||

					// Try to find dashed key if it exists (gh-2779)
					// This is for 2.2.x only
					dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

				if ( data !== undefined ) {
					return data;
				}

				camelKey = jQuery.camelCase( key );

				// Attempt to get data from the cache
				// with the key camelized
				data = dataUser.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			camelKey = jQuery.camelCase( key );
			this.each( function() {

				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = dataUser.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				dataUser.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
					dataUser.set( this, key, value );
				}
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE9
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
			"screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {
	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {
		div.style.cssText =

			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );
	}

	jQuery.extend( support, {
		pixelPosition: function() {

			// This test is executed only once but we still do memoizing
			// since we can use the boxSizingReliable pre-computing.
			// No need to check if the test was already performed, though.
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
			// since that compresses better and they're computed together anyway.
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		},
		reliableMarginRight: function() {

			// Support: Android 2.3
			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// This support function is only executed once so no memoizing is needed.
			var ret,
				marginDiv = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			marginDiv.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;margin:0;border:0;padding:0";
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";
			documentElement.appendChild( container );

			ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

			documentElement.removeChild( container );
			div.removeChild( marginDiv );

			return ret;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );
	ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

	// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
		ret = jQuery.style( elem, name );
	}

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// http://dev.w3.org/csswg/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE9-11+
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE11 only
	// In IE 11 fullscreen elements inside of an iframe have
	// 100x too small dimensions (gh-1764).
	if ( document.msFullscreenElement && window.top !== window ) {

		// Support: IE11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
		}
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = dataPriv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = dataPriv.access(
					elem,
					"olddisplay",
					defaultDisplay( elem.nodeName )
				);
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				dataPriv.set(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = dataPriv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;

			dataPriv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
		opt.duration : opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Handle most common string cases
					ret.replace( rreturn, "" ) :

					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				// Support: IE<11
				// option.value not trimmed (#14858)
				return jQuery.trim( elem.value );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// But now, this "simulate" function is used only for events
				// for which stopPropagation() is noop, so there is no need for that anymore.
				//
				// For the 1.x branch though, guard for "click" and "submit"
				// events is still used, but was moved to jQuery.event.stopPropagation function
				// because `originalEvent` should point to the original event for the constancy
				// with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE8-11+
			// IE throws exception if url is malformed, e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE8-11+
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


jQuery.expr.filters.hidden = function( elem ) {
	return !jQuery.expr.filters.visible( elem );
};
jQuery.expr.filters.visible = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE9
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE9
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8+
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	// Stop scripts or inline event handlers from being executed immediately
	// by using document.implementation
	context = context || ( support.createHTMLDocument ?
		document.implementation.createHTMLDocument( "" ) :
		document );

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( self, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		box = elem.getBoundingClientRect();
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},
	size: function() {
		return this.length;
	}
} );

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));

