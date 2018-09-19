import { STATUS_CODE } from './status-code.enum';

/**
 * Class to instantiate a status code.
 *
 * @example
 * import { HttpClient } from '@angular/common/http';
 * import { StatusCode } from '@asmodeo/http';
 *
 * export class DataService {
 *  constructor(private http: HttpClient) {}
 *
 *  public getInfo(): Observable<any> {
 *    this.http.get('https://info.com/info')
 *      .subscribe(() => null, (error) => {
 *        const sc = new StatusCode(error.status);
 *
 *        console.log(sc.notFound); // true
 *
 *        // or
 *
 *        if (StatusCode.isNotFound(error.status)) {
 *          // code...
 *        }
 *          // code
 *      });
 *  }
 * }
 **/

export class StatusCode {
  /**
   * @ignore
   **/
  private _statusCode: STATUS_CODE | null = null;
  public get value(): STATUS_CODE {
    return this._statusCode;
  }
  
  constructor(code: STATUS_CODE | null) {
    if (this.validate(String(code))) {
      this._statusCode = code;
    }
  }
  
  /**
   * @ignore
   **/
  public get continue(): boolean {
    return StatusCode.isContinue(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 100.
   * 
   * @example
   * > StatusCode.isContinue(code); // true - false;
   **/
  public static isContinue(code: any): boolean {
    return STATUS_CODE.CONTINUE === code;
  }
  
  /**
   * @ignore
   **/
  public get switchingProtocols(): boolean {
    return StatusCode.isSwitchingProtocols(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 101.
   * 
   * @example
   * > StatusCode.isSwitchingProtocols(code); // true - false;
   **/
  public static isSwitchingProtocols(code: any): boolean {
    return STATUS_CODE.SWITCHING_PROTOCOLS === code;
  }
  
  /**
   * @ignore
   **/
  public get processing(): boolean {
    return StatusCode.isProcessing(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 102.
   * 
   * @example
   * > StatusCode.isProcessing(code); // true - false;
   **/
  public static isProcessing(code: any): boolean {
    return STATUS_CODE.PROCESSING === code;
  }
  
  /**
   * @ignore
   **/
  public get earlyHints(): boolean {
    return StatusCode.isEarlyHints(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 103.
   * 
   * @example
   * > StatusCode.isEarlyHints(code); // true - false;
   **/
  public static isEarlyHints(code: any): boolean {
    return STATUS_CODE.EARLY_HINTS === code;
  }
  
  /**
   * @ignore
   **/
  public get ok(): boolean {
    return StatusCode.isOK(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 200.
   * 
   * @example
   * > StatusCode.isEarlyHints(code); // true - false;
   **/
  public static isOK(code: any): boolean {
    return STATUS_CODE.OK === code;
  }
  
  /**
   * @ignore
   **/
  public get created(): boolean {
    return StatusCode.isCreated(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 201.
   * 
   * @example
   * > StatusCode.isCreated(code); // true - false;
   **/
  public static isCreated(code: any): boolean {
    return STATUS_CODE.CREATED === code;
  }
  
  /**
   * @ignore
   **/
  public get accepted(): boolean {
    return StatusCode.isAccepted(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 202.
   * 
   * @example
   * > StatusCode.isAccepted(code); // true - false;
   **/
  public static isAccepted(code: any): boolean {
    return STATUS_CODE.ACCEPTED === code;
  }
  
  /**
   * @ignore
   **/
  public get nonAuthoritativeInformation(): boolean {
    return StatusCode.isNonAuthoritativeInformation(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 203.
   * 
   * @example
   * > StatusCode.isNonAuthoritativeInformation(code); // true - false;
   **/
  public static isNonAuthoritativeInformation(code: any): boolean {
    return STATUS_CODE.NON_AUTHORITATIVE_INFORMATION === code;
  }
  
  /**
   * @ignore
   **/
  public get noContent(): boolean {
    return StatusCode.isNoContent(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 204
   * 
   * @example
   * > StatusCode.isNoContent(code); // true - false;
   **/
  public static isNoContent(code: any): boolean {
    return STATUS_CODE.NO_CONTENT === code;
  }
  
  /**
   * @ignore
   **/
  public get resetContent(): boolean {
    return StatusCode.isResetContent(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 205
   * 
   * @example
   * > StatusCode.isResetContent(code); // true - false;
   **/
  public static isResetContent(code: any): boolean {
    return STATUS_CODE.RESET_CONTENT === code;
  }
  
  /**
   * @ignore
   **/
  public get partialContent(): boolean {
    return StatusCode.isPartialContent(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 206
   * 
   * @example
   * > StatusCode.isPartialContent(code); // true - false;
   **/
  public static isPartialContent(code: any): boolean {
    return STATUS_CODE.PARTIAL_CONTENT === code;
  }
  
  /**
   * @ignore
   **/
  public get multiStatus(): boolean {
    return StatusCode.isMultiStatus(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 207
   * 
   * @example
   * > StatusCode.isMultiStatus(code); // true - false;
   **/
  public static isMultiStatus(code: any): boolean {
    return STATUS_CODE.MULTI_STATUS === code;
  }
  
  /**
   * @ignore
   **/
  public get alreadyReported(): boolean {
    return StatusCode.isAlreadyReported(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 208
   * 
   * @example
   * > StatusCode.isAlreadyReported(code); // true - false;
   **/
  public static isAlreadyReported(code: any): boolean {
    return STATUS_CODE.ALREADY_REPORTED === code;
  }
  
  /**
   * @ignore
   **/
  public get imUsed(): boolean {
    return StatusCode.isImUsed(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 226
   * 
   * @example
   * > StatusCode.isImUsed(code); // true - false;
   **/
  public static isImUsed(code: any): boolean {
    return STATUS_CODE.IM_USED === code;
  }
  
  /**
   * @ignore
   **/
  public get multipleChoices(): boolean {
    return StatusCode.isMultipleChoices(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 300
   * 
   * @example
   * > StatusCode.isMultipleChoices(code); // true - false;
   **/
  public static isMultipleChoices(code: any): boolean {
    return STATUS_CODE.MULTIPLE_CHOICES === code;
  }
  
  /**
   * @ignore
   **/
  public get movedPermanently(): boolean {
    return StatusCode.isMovedPermanently(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 301
   * 
   * @example
   * > StatusCode.isMovedPermanently(code); // true - false;
   **/
  public static isMovedPermanently(code: any): boolean {
    return STATUS_CODE.MOVED_PERMANENTLY === code;
  }
  
  /**
   * @ignore
   **/
  public get found(): boolean {
    return StatusCode.isFound(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 302
   * 
   * @example
   * > StatusCode.isFound(code); // true - false;
   **/
  public static isFound(code: any): boolean {
    return STATUS_CODE.FOUND === code;
  }
  
  /**
   * @ignore
   **/
  public get seeOther(): boolean {
    return StatusCode.isSeeOther(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 303
   * 
   * @example
   * > StatusCode.isSeeOther(code); // true - false;
   **/
  public static isSeeOther(code: any): boolean {
    return STATUS_CODE.SEE_OTHER === code;
  }
  
  /**
   * @ignore
   **/
  public get notModified(): boolean {
    return StatusCode.isNotModified(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 304
   * 
   * @example
   * > StatusCode.isNotModified(code); // true - false;
   **/
  public static isNotModified(code: any): boolean {
    return STATUS_CODE.NOT_MODIFIED === code;
  }
  
  /**
   * @ignore
   **/
  public get userProxy(): boolean {
    return StatusCode.isUserProxy(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 305
   * 
   * @example
   * > StatusCode.isUserProxy(code); // true - false;
   **/
  public static isUserProxy(code: any): boolean {
    return STATUS_CODE.USE_PROXY === code;
  }
  
  /**
   * @ignore
   **/
  public get temporaryRedirect(): boolean {
    return StatusCode.isTemporaryRedirect(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 307
   * 
   * @example
   * > StatusCode.isTemporaryRedirect(code); // true - false;
   **/
  public static isTemporaryRedirect(code: any): boolean {
    return STATUS_CODE.TEMPORARY_REDIRECT === code;
  }
  
  /**
   * @ignore
   **/
  public get permanentRedirect(): boolean {
    return StatusCode.isPermanentRedirect(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 308
   * 
   * @example
   * > StatusCode.isPermanentRedirect(code); // true - false;
   **/
  public static isPermanentRedirect(code: any): boolean {
    return STATUS_CODE.PERMANENT_REDIRECT === code;
  }
  
  /**
   * @ignore
   **/
  public get badRequest(): boolean {
    return StatusCode.isBadRequest(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 400
   * 
   * @example
   * > StatusCode.isBadRequest(code); // true - false;
   **/
  public static isBadRequest(code: any): boolean {
    return STATUS_CODE.BAD_REQUEST === code;
  }
  
  /**
   * @ignore
   **/
  public get unauthorized(): boolean {
    return StatusCode.isUnauthorized(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 401
   * 
   * @example
   * > StatusCode.isUnauthorized(code); // true - false;
   **/
  public static isUnauthorized(code: any): boolean {
    return STATUS_CODE.UNAUTHORIZED === code;
  }
  
  /**
   * @ignore
   **/
  public get paymentRedirect(): boolean {
    return StatusCode.isPaymentRequired(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 402
   * 
   * @example
   * > StatusCode.isPaymentRequired(code); // true - false;
   **/
  public static isPaymentRequired(code: any): boolean {
    return STATUS_CODE.PAYMENT_REQUIRED === code;
  }
  
  /**
   * @ignore
   **/
  public get forbidden(): boolean {
    return StatusCode.isForbidden(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 403
   * 
   * @example
   * > StatusCode.isForbidden(code); // true - false;
   **/
  public static isForbidden(code: any): boolean {
    return STATUS_CODE.FORBIDDEN === code;
  }
  
  /**
   * @ignore
   **/
  public get notFound(): boolean {
    return StatusCode.isNotFound(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 404
   * 
   * @example
   * > StatusCode.isNotFound(code); // true - false;
   **/
  public static isNotFound(code: any): boolean {
    return STATUS_CODE.NOT_FOUND === code;
  }
  
  /**
   * @ignore
   **/
  public get methodNotAllowed(): boolean {
    return StatusCode.isMethodNotAllowed(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 405
   * 
   * @example
   * > StatusCode.isMethodNotAllowed(code); // true - false;
   **/
  public static isMethodNotAllowed(code: any): boolean {
    return STATUS_CODE.METHOD_NOT_ALLOWED === code;
  }
  
  /**
   * @ignore
   **/
  public get notAcceptable(): boolean {
    return StatusCode.isNotAcceptable(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 406
   * 
   * @example
   * > StatusCode.isNotAcceptable(code); // true - false;
   **/
  public static isNotAcceptable(code: any): boolean {
    return STATUS_CODE.NOT_ACCEPTABLE === code;
  }
  
  /**
   * @ignore
   **/
  public get proxyAuthenticationRequired(): boolean {
    return StatusCode.isProxyAuthenticationRequired(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 407
   * 
   * @example
   * > StatusCode.isProxyAuthenticationRequired(code); // true - false;
   **/
  public static isProxyAuthenticationRequired(code: any): boolean {
    return STATUS_CODE.PROXY_AUTHENTICATION_REQUIRED === code;
  }
  
  /**
   * @ignore
   **/
  public get requestTimeout(): boolean {
    return StatusCode.isRequestTimeout(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 408
   * 
   * @example
   * > StatusCode.isRequestTimeout(code); // true - false;
   **/
  public static isRequestTimeout(code: any): boolean {
    return STATUS_CODE.REQUEST_TIMEOUT === code;
  }
  
  /**
   * @ignore
   **/
  public get conflict(): boolean {
    return StatusCode.isConfict(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 409
   * 
   * @example
   * > StatusCode.isConfict(code); // true - false;
   **/
  public static isConfict(code: any): boolean {
    return STATUS_CODE.CONFLICT === code;
  }
  
  /**
   * @ignore
   **/
  public get gone(): boolean {
    return StatusCode.isGone(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 410
   * 
   * @example
   * > StatusCode.isGone(code); // true - false;
   **/
  public static isGone(code: any): boolean {
    return STATUS_CODE.GONE === code;
  }
  
  /**
   * @ignore
   **/
  public get lengthRequired(): boolean {
    return StatusCode.isLengthRequired(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 411
   * 
   * @example
   * > StatusCode.isLengthRequired(code); // true - false;
   **/
  public static isLengthRequired(code: any): boolean {
    return STATUS_CODE.LENGTH_REQUIRED === code;
  }
  
  /**
   * @ignore
   **/
  public get preconditionFailed(): boolean {
    return StatusCode.isPreconditionFailed(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 412
   * 
   * @example
   * > StatusCode.isPreconditionFailed(code); // true - false;
   **/
  public static isPreconditionFailed(code: any): boolean {
    return STATUS_CODE.PRECONDITION_FAILED === code;
  }
  
  /**
   * @ignore
   **/
  public get payloadTooLarge(): boolean {
    return StatusCode.isPayloadTooLarge(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 413
   * 
   * @example
   * > StatusCode.isPayloadTooLarge(code); // true - false;
   **/
  public static isPayloadTooLarge(code: any): boolean {
    return STATUS_CODE.PAYLOAD_TOO_LARGE === code;
  }
  
  /**
   * @ignore
   **/
  public get uriTooLong(): boolean {
    return StatusCode.isUriTooLong(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 414
   * 
   * @example
   * > StatusCode.isUriTooLong(code); // true - false;
   **/
  public static isUriTooLong(code: any): boolean {
    return STATUS_CODE.URI_TOO_LONG === code;
  }
  
  /**
   * @ignore
   **/
  public get unsupportedMediaType(): boolean {
    return StatusCode.isUnsupportedMediaType(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 415
   * 
   * @example
   * > StatusCode.isUnsupportedMediaType(code); // true - false;
   **/
  public static isUnsupportedMediaType(code: any): boolean {
    return STATUS_CODE.UNSUPPORTED_MEDIA_TYPE === code;
  }
  
  /**
   * @ignore
   **/
  public get rangeNotSatisfiable(): boolean {
    return StatusCode.isRangeNotSatisfiable(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 416
   * 
   * @example
   * > StatusCode.isRangeNotSatisfiable(code); // true - false;
   **/
  public static isRangeNotSatisfiable(code: any): boolean {
    return STATUS_CODE.RANGE_NOT_SATISFIABLE === code;
  }
  
  /**
   * @ignore
   **/
  public get expectationFailed(): boolean {
    return StatusCode.isExpectationFailed(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 417
   * 
   * @example
   * > StatusCode.isExpectationFailed(code); // true - false;
   **/
  public static isExpectationFailed(code: any): boolean {
    return STATUS_CODE.EXPECTATION_FAILED === code;
  }
  
  /**
   * @ignore
   **/
  public get imATeapot(): boolean {
    return StatusCode.isImATeapot(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 418
   * 
   * @example
   * > StatusCode.isImATeapot(code); // true - false;
   **/
  public static isImATeapot(code: any): boolean {
    return STATUS_CODE.IM_A_TEAPOT === code;
  }
  
  /**
   * @ignore
   **/
  public get misdirectedRequest(): boolean {
    return StatusCode.isMisdirectedRequest(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 421
   * 
   * @example
   * > StatusCode.isMisdirectedRequest(code); // true - false;
   **/
  public static isMisdirectedRequest(code: any): boolean {
    return STATUS_CODE.MISDIRECTED_REQUEST === code;
  }
  
  /**
   * @ignore
   **/
  public get unprocessableEntity(): boolean {
    return StatusCode.isUnprocessableEntity(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 422
   * 
   * @example
   * > StatusCode.isUnprocessableEntity(code); // true - false;
   **/
  public static isUnprocessableEntity(code: any): boolean {
    return STATUS_CODE.UNPROCESSABLE_ENTITY === code;
  }
  
  /**
   * @ignore
   **/
  public get locked(): boolean {
    return StatusCode.isLocked(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 423
   * 
   * @example
   * > StatusCode.isLocked(code); // true - false;
   **/
  public static isLocked(code: any): boolean {
    return STATUS_CODE.LOCKED === code;
  }
  
  /**
   * @ignore
   **/
  public get failedDependency(): boolean {
    return StatusCode.isFailedDependency(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 424
   * 
   * @example
   * > StatusCode.isFailedDependency(code); // true - false;
   **/
  public static isFailedDependency(code: any): boolean {
    return STATUS_CODE.FAILED_DEPENDENCY === code;
  }
  
  /**
   * @ignore
   **/
  public get unorderedCollection(): boolean {
    return StatusCode.isUnorderedCollection(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 425
   * 
   * @example
   * > StatusCode.isUnorderedCollection(code); // true - false;
   **/
  public static isUnorderedCollection(code: any): boolean {
    return STATUS_CODE.UNORDERED_COLLECTION === code;
  }
  
  /**
   * @ignore
   **/
  public get upgradeRequired(): boolean {
    return StatusCode.isUpgradeRequired(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 426
   * 
   * @example
   * > StatusCode.isUpgradeRequired(code); // true - false;
   **/
  public static isUpgradeRequired(code: any): boolean {
    return STATUS_CODE.UPGRADE_REQUIRED === code;
  }
  
  /**
   * @ignore
   **/
  public get preconditionRequired(): boolean {
    return StatusCode.isPreconditionRequired(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 428
   * 
   * @example
   * > StatusCode.isPreconditionRequired(code); // true - false;
   **/
  public static isPreconditionRequired(code: any): boolean {
    return STATUS_CODE.PRECONDITION_REQUIRED === code;
  }
  
  /**
   * @ignore
   **/
  public get tooManyRequest(): boolean {
    return StatusCode.isTooManyRequest(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 429
   * 
   * @example
   * > StatusCode.isTooManyRequest(code); // true - false;
   **/
  public static isTooManyRequest(code: any): boolean {
    return STATUS_CODE.TOO_MANY_REQUEST === code;
  }
  
  /**
   * @ignore
   **/
  public get requestHeaderFieldsTooLarge(): boolean {
    return StatusCode.isRequestHeaderFieldsTooLarge(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 431
   * 
   * @example
   * > StatusCode.isRequestHeaderFieldsTooLarge(code); // true - false;
   **/
  public static isRequestHeaderFieldsTooLarge(code: any): boolean {
    return STATUS_CODE.REQUEST_HEADER_FIELDS_TOO_LARGE === code;
  }
  
  /**
   * @ignore
   **/
  public get unavialableForLegalReasons(): boolean {
    return StatusCode.isUnavialableForLegalReasons(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 451
   * 
   * @example
   * > StatusCode.isUnavialableForLegalReasons(code); // true - false;
   **/
  public static isUnavialableForLegalReasons(code: any): boolean {
    return STATUS_CODE.UNAVIALABLE_FOR_LEGAL_REASONS === code;
  }
  
  /**
   * @ignore
   **/
  public get internalServerError(): boolean {
    return StatusCode.isInternalServerError(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 500
   * 
   * @example
   * > StatusCode.isInternalServerError(code); // true - false;
   **/
  public static isInternalServerError(code: any): boolean {
    return STATUS_CODE.INTERNAL_SERVER_ERROR === code;
  }
  
  /**
   * @ignore
   **/
  public get notImplemented(): boolean {
    return StatusCode.isNotImplemented(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 501
   * 
   * @example
   * > StatusCode.isNotImplemented(code); // true - false;
   **/
  public static isNotImplemented(code: any): boolean {
    return STATUS_CODE.NOT_IMPLEMENTED === code;
  }
  
  /**
   * @ignore
   **/
  public get badGateway(): boolean {
    return StatusCode.isBadGateway(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 502
   * 
   * @example
   * > StatusCode.isBadGateway(code); // true - false;
   **/
  public static isBadGateway(code: any): boolean {
    return STATUS_CODE.BAD_GATEWAY === code;
  }
  
  /**
   * @ignore
   **/
  public get serviceUnavailable(): boolean {
    return StatusCode.isServiceUnavailable(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 503
   * 
   * @example
   * > StatusCode.isServiceUnavailable(code); // true - false;
   **/
  public static isServiceUnavailable(code: any): boolean {
    return STATUS_CODE.SERVICE_UNAVAILABLE === code;
  }
  
  /**
   * @ignore
   **/
  public get gatewayTimeout(): boolean {
    return StatusCode.isGatewayTimeout(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 504
   * 
   * @example
   * > StatusCode.isGatewayTimeout(code); // true - false;
   **/
  public static isGatewayTimeout(code: any): boolean {
    return STATUS_CODE.GATEWAY_TIMEOUT === code;
  }
  
  /**
   * @ignore
   **/
  public get httpVersionNotSupported(): boolean {
    return StatusCode.isHTTPVersionNotSupported(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 505
   * 
   * @example
   * > StatusCode.isHTTPVersionNotSupported(code); // true - false;
   **/
  public static isHTTPVersionNotSupported(code: any): boolean {
    return STATUS_CODE.HTTP_VERSION_NOT_SUPPORTED === code;
  }
  
  /**
   * @ignore
   **/
  public get variantAlsoNegotiates(): boolean {
    return StatusCode.isVariantAlsoNegotiates(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 506
   * 
   * @example
   * > StatusCode.isVariantAlsoNegotiates(code); // true - false;
   **/
  public static isVariantAlsoNegotiates(code: any): boolean {
    return STATUS_CODE.VARIANT_ALSO_NEGOTIATES === code;
  }
  
  /**
   * @ignore
   **/
  public get insufficientStorage(): boolean {
    return StatusCode.isInsufficientStorage(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 507
   * 
   * @example
   * > StatusCode.isInsufficientStorage(code); // true - false;
   **/
  public static isInsufficientStorage(code: any): boolean {
    return STATUS_CODE.INSUFFICIENT_STORAGE === code;
  }
  
  /**
   * @ignore
   **/
  public get loopDetected(): boolean {
    return StatusCode.isLoopDetected(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 508
   * 
   * @example
   * > StatusCode.isLoopDetected(code); // true - false;
   **/
  public static isLoopDetected(code: any): boolean {
    return STATUS_CODE.LOOP_DETECTED === code;
  }
  
  /**
   * @ignore
   **/
  public get bandwidthLimitExceeded(): boolean {
    return StatusCode.isBandwidthLimitExceeded(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 509
   * 
   * @example
   * > StatusCode.isBandwidthLimitExceeded(code); // true - false;
   **/
  public static isBandwidthLimitExceeded(code: any): boolean {
    return STATUS_CODE.BANDWIDTH_LIMIT_EXCEEDED === code;
  }
  
  /**
   * @ignore
   **/
  public get notExtended(): boolean {
    return StatusCode.isNotExtended(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 510
   * 
   * @example
   * > StatusCode.isNotExtended(code); // true - false;
   **/
  public static isNotExtended(code: any): boolean {
    return STATUS_CODE.NOT_EXTENDED === code;
  }
  
  /**
   * @ignore
   **/
  public get networkAuthenticationRequired(): boolean {
    return StatusCode.isNetworkAuthenticationRequired(this._statusCode);
  }
  /**
   * Return ´true´ when status_code value is 511
   * 
   * @example
   * > StatusCode.isNetworkAuthenticationRequired(code); // true - false;
   **/
  public static isNetworkAuthenticationRequired(code: any): boolean {
    return STATUS_CODE.NETWORK_AUTHENTICATION_REQUIRED === code;
  }
  
  private validate(code: string): boolean {
    return Object.values(STATUS_CODE).find(value => value === code);
  }
}
