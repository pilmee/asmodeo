import { STATUS_CODE } from './status-code.enum';

export class StatusCode {
  private _statusCode: STATUS_CODE | null = null;
  public get value(): STATUS_CODE {
    return this._statusCode;
  }

  constructor(code: STATUS_CODE | null) {
    if (this.validate(String(code))) {
      this._statusCode = code;
    }
  }

  public static isContinue(code: any): boolean {
    return STATUS_CODE.CONTINUE === code;
  }

  public static isSwitchingProtocols(code: any): boolean {
    return STATUS_CODE.SWITCHING_PROTOCOLS === code;
  }

  public static isProcessing(code: any): boolean {
    return STATUS_CODE.PROCESSING === code;
  }

  public static isEarlyHints(code: any): boolean {
    return STATUS_CODE.EARLY_HINTS === code;
  }

  public static isOK(code: any): boolean {
    return STATUS_CODE.OK === code;
  }

  public static isCreated(code: any): boolean {
    return STATUS_CODE.CREATED === code;
  }

  public static isAccpted(code: any): boolean {
    return STATUS_CODE.ACCEPTED === code;
  }

  public static isNonAuthoritativeInformation(code: any): boolean {
    return STATUS_CODE.NON_AUTHORITATIVE_INFORMATION === code;
  }

  public static isNoContent(code: any): boolean {
    return STATUS_CODE.NO_CONTENT === code;
  }

  public static isResetContent(code: any): boolean {
    return STATUS_CODE.RESET_CONTENT === code;
  }

  public static isPartialContent(code: any): boolean {
    return STATUS_CODE.PARTIAL_CONTENT === code;
  }

  public static isMultiStatus(code: any): boolean {
    return STATUS_CODE.MULTI_STATUS === code;
  }

  public static isAlreadyReported(code: any): boolean {
    return STATUS_CODE.ALREADY_REPORTED === code;
  }

  public static isImUsed(code: any): boolean {
    return STATUS_CODE.IM_USED === code;
  }

  public static isMultipleChoices(code: any): boolean {
    return STATUS_CODE.MULTIPLE_CHOICES === code;
  }

  public static isMovedPermanently(code: any): boolean {
    return STATUS_CODE.MOVED_PERMANENTLY === code;
  }

  public static isFound(code: any): boolean {
    return STATUS_CODE.FOUND === code;
  }

  public static isSeeOther(code: any): boolean {
    return STATUS_CODE.SEE_OTHER === code;
  }

  public static isNotModified(code: any): boolean {
    return STATUS_CODE.NOT_MODIFIED === code;
  }

  public static isUserProxy(code: any): boolean {
    return STATUS_CODE.USE_PROXY === code;
  }

  public static isTemporaryRedirect(code: any): boolean {
    return STATUS_CODE.TEMPORARY_REDIRECT === code;
  }

  public static isPermanentRedirect(code: any): boolean {
    return STATUS_CODE.PERMANENT_REDIRECT === code;
  }

  public static isBadRequest(code: any): boolean {
    return STATUS_CODE.BAD_REQUEST === code;
  }

  public static isUnauthorized(code: any): boolean {
    return STATUS_CODE.UNAUTHORIZED === code;
  }

  public static isPaymentRequired(code: any): boolean {
    return STATUS_CODE.PAYMENT_REQUIRED === code;
  }

  public static isForbidden(code: any): boolean {
    return STATUS_CODE.FORBIDDEN === code;
  }

  public static isNotFound(code: any): boolean {
    return STATUS_CODE.NOT_FOUND === code;
  }

  public static isMethodNotAllowed(code: any): boolean {
    return STATUS_CODE.METHOD_NOT_ALLOWED === code;
  }

  public static isNotAcceptable(code: any): boolean {
    return STATUS_CODE.NOT_ACCEPTABLE === code;
  }

  public static isProxyAuthenticationRequired(code: any): boolean {
    return STATUS_CODE.PROXY_AUTHENTICATION_REQUIRED === code;
  }

  public static isRequestTimeout(code: any): boolean {
    return STATUS_CODE.REQUEST_TIMEOUT === code;
  }

  public static isConfict(code: any): boolean {
    return STATUS_CODE.CONFLICT === code;
  }

  public static isGone(code: any): boolean {
    return STATUS_CODE.GONE === code;
  }

  public static isLengthRequired(code: any): boolean {
    return STATUS_CODE.LENGTH_REQUIRED === code;
  }

  public static isPreconditionFailed(code: any): boolean {
    return STATUS_CODE.PRECONDITION_FAILED === code;
  }

  public static isPayloadTooLarge(code: any): boolean {
    return STATUS_CODE.PAYLOAD_TOO_LARGE === code;
  }

  public static isUriTooLong(code: any): boolean {
    return STATUS_CODE.URI_TOO_LONG === code;
  }

  public static isUnsupportedMediaType(code: any): boolean {
    return STATUS_CODE.UNSUPPORTED_MEDIA_TYPE === code;
  }

  public static isRangeNotSatisfiable(code: any): boolean {
    return STATUS_CODE.RANGE_NOT_SATISFIABLE === code;
  }

  public static isExpectationFailed(code: any): boolean {
    return STATUS_CODE.EXPECTATION_FAILED === code;
  }

  public static isImATeapot(code: any): boolean {
    return STATUS_CODE.IM_A_TEAPOT === code;
  }

  public static isMisdirectedRequest(code: any): boolean {
    return STATUS_CODE.MISDIRECTED_REQUEST === code;
  }

  public static isUnprocessableEntity(code: any): boolean {
    return STATUS_CODE.UNPROCESSABLE_ENTITY === code;
  }

  public static isLocked(code: any): boolean {
    return STATUS_CODE.LOCKED === code;
  }

  public static isFailedDependency(code: any): boolean {
    return STATUS_CODE.FAILED_DEPENDENCY === code;
  }

  public static isUnorderedCollection(code: any): boolean {
    return STATUS_CODE.UNORDERED_COLLECTION === code;
  }

  public static isUpgradeRequired(code: any): boolean {
    return STATUS_CODE.UPGRADE_REQUIRED === code;
  }

  public static isPreconditionRequired(code: any): boolean {
    return STATUS_CODE.PRECONDITION_REQUIRED === code;
  }

  public static isTooManyRequest(code: any): boolean {
    return STATUS_CODE.TOO_MANY_REQUEST === code;
  }

  public static isRequestHeaderFieldsTooLarge(code: any): boolean {
    return STATUS_CODE.REQUEST_HEADER_FIELDS_TOO_LARGE === code;
  }

  public static isUnavialableForLegalReasons(code: any): boolean {
    return STATUS_CODE.UNAVIALABLE_FOR_LEGAL_REASONS === code;
  }

  public static isInternalServerError(code: any): boolean {
    return STATUS_CODE.INTERNAL_SERVER_ERROR === code;
  }

  public static isNotImplemented(code: any): boolean {
    return STATUS_CODE.NOT_IMPLEMENTED === code;
  }

  public static isBadGateway(code: any): boolean {
    return STATUS_CODE.BAD_GATEWAY === code;
  }

  public static isHTTPVersionNotSupported(code: any): boolean {
    return STATUS_CODE.HTTP_VERSION_NOT_SUPPORTED === code;
  }

  public static isVariantAlsoNegotiates(code: any): boolean {
    return STATUS_CODE.VARIANT_ALSO_NEGOTIATES === code;
  }

  public static isInsufficientStorage(code: any): boolean {
    return STATUS_CODE.INSUFFICIENT_STORAGE === code;
  }

  public static isLoopDetected(code: any): boolean {
    return STATUS_CODE.LOOP_DETECTED === code;
  }

  public static isBandwidthLimitExceeded(code: any): boolean {
    return STATUS_CODE.BANDWIDTH_LIMIT_EXCEEDED === code;
  }

  public static isNotExtended(code: any): boolean {
    return STATUS_CODE.NOT_EXTENDED === code;
  }

  public static isNetworkAuthenticationRequired(code: any): boolean {
    return STATUS_CODE.NETWORK_AUTHENTICATION_REQUIRED === code;
  }

  private validate(code: string): boolean {
    return Object.values(STATUS_CODE).find(value => value === code);
  }
}
