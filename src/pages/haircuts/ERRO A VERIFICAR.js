ERROR NO CONSOLE:  AxiosError: connect ETIMEDOUT 2606:4700::6810:1223:443
    at AxiosError.from (file:///C:/Users/Gustavo/OneDrive/Documentos/react.js/barber-web/node_modules/axios/lib/core/AxiosError.js:89:14)
    at RedirectableRequest.handleRequestError (file:///C:/Users/Gustavo/OneDrive/Documentos/react.js/barber-web/node_modules/axios/lib/adapters/http.js:577:25)
    at RedirectableRequest.emit (node:events:513:28)
    at eventHandlers.<computed> (C:\Users\Gustavo\OneDrive\Documentos\react.js\barber-web\node_modules\follow-redirects\index.js:14:24)
    at ClientRequest.emit (node:events:513:28)
    at TLSSocket.socketErrorListener (node:_http_client:502:9)
    at TLSSocket.emit (node:events:513:28)
    at emitErrorNT (node:internal/streams/destroy:151:8)
    at emitErrorCloseNT (node:internal/streams/destroy:116:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  port: 443,
  address: '2606:4700::6810:1223',
  syscall: 'connect',
  code: 'ETIMEDOUT',
  errno: -4039,
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: [ 'xhr', 'http' ],
    transformRequest: [ [Function: transformRequest] ],
    transformResponse: [ [Function: transformResponse] ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: [Function], Blob: [class Blob] },
    validateStatus: [Function: validateStatus],
    headers: AxiosHeaders {
      Accept: 'application/json, text/plain, */*',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3VzdGF2byIsImVtYWlsIjoiZ3VzdGF2b0BnbWFpbC5jb20iLCJpYXQiOjE2ODMwNjY4ODEsImV4cCI6MTY4NTY1ODg4MSwic3ViIjoiMmQxYjM4ZDEtM2QxMC00Njg3LTliMTctNDUxMWQ2ZThhMGZmIn0.1nmsNIxGuINE-F1U0OvWIGZJdPtDPTdYG7XJAIJs6NA',
      'User-Agent': 'axios/1.3.4',
      'Accept-Encoding': 'gzip, compress, deflate, br'
    },
    baseURL: 'http://localhost:3333',
    method: 'get',
    url: '/detalhesUserLogado',
    data: undefined
  },
  request: <ref *1> Writable {
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: true,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      afterWriteTickInfo: null,
      buffered: [],
      bufferedIndex: 0,
      allBuffers: true,
      allNoop: true,
      pendingcb: 0,
      constructed: true,
      prefinished: false,
      errorEmitted: false,
      emitClose: true,
      autoDestroy: true,
      errored: null,
      closed: false,
      closeEmitted: false,
      [Symbol(kOnFinished)]: []
    },
    _events: [Object: null prototype] {
      response: [Function: handleResponse],
      error: [Function: handleRequestError],
      socket: [Function: handleRequestSocket]
    },
    _eventsCount: 3,
    _maxListeners: undefined,
    _options: {
      maxRedirects: 21,
      maxBodyLength: Infinity,
      protocol: 'https:',
      path: 'http://localhost:3333/detalhesUserLogado',
      method: 'GET',
      headers: [Object: null prototype],
      agents: [Object],
      auth: undefined,
      beforeRedirect: [Function: dispatchBeforeRedirect],
      beforeRedirects: [Object],
      hostname: 'registry.yarnpkg.com',
      port: '',
      agent: undefined,
      nativeProtocols: [Object],
      pathname: 'http://localhost:3333/detalhesUserLogado'
    },
    _ended: true,
    _ending: true,
    _redirectCount: 0,
    _redirects: [],
    _requestBodyLength: 0,
    _requestBodyBuffers: [],
    _onNativeResponse: [Function (anonymous)],
    _currentRequest: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: 0,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: false,
      socket: [TLSSocket],
      _header: 'GET http://localhost:3333/detalhesUserLogado HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, */*\r\n' +
        'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3VzdGF2byIsImVtYWlsIjoiZ3VzdGF2b0BnbWFpbC5jb20iLCJpYXQiOjE2ODMwNjY4ODEsImV4cCI6MTY4NTY1ODg4MSwic3ViIjoiMmQxYjM4ZDEtM2QxMC00Njg3LTliMTctNDUxMWQ2ZThhMGZmIn0.1nmsNIxGuINE-F1U0OvWIGZJdPtDPTdYG7XJAIJs6NA\r\n' +
        'User-Agent: axios/1.3.4\r\n' +
        'Accept-Encoding: gzip, compress, deflate, br\r\n' +
        'host: localhost:3333\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: [Agent],
      socketPath: undefined,
      method: 'GET',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      joinDuplicateHeaders: undefined,
      path: 'http://localhost:3333/detalhesUserLogado',
      _ended: false,
      res: null,
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'registry.yarnpkg.com',
      protocol: 'https:',
      _redirectable: [Circular *1],
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype],
      [Symbol(errored)]: null,
      [Symbol(kUniqueHeaders)]: null
    },
    _currentUrl: 'http://localhost:3333/detalhesUserLogado',
    [Symbol(kCapture)]: false
  },
  cause: Error: connect ETIMEDOUT 2606:4700::6810:1223:443
      at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1494:16) {
    errno: -4039,
    code: 'ETIMEDOUT',
    syscall: 'connect',
    address: '2606:4700::6810:1223',
    port: 443
  }
}
ERRO DENTRO DO COMPONENTE:  AxiosError: connect ETIMEDOUT 2606:4700::6810:1223:443
    at AxiosError.from (file:///C:/Users/Gustavo/OneDrive/Documentos/react.js/barber-web/node_modules/axios/lib/core/AxiosError.js:89:14)
    at RedirectableRequest.handleRequestError (file:///C:/Users/Gustavo/OneDrive/Documentos/react.js/barber-web/node_modules/axios/lib/adapters/http.js:577:25)
    at RedirectableRequest.emit (node:events:513:28)
    at eventHandlers.<computed> (C:\Users\Gustavo\OneDrive\Documentos\react.js\barber-web\node_modules\follow-redirects\index.js:14:24)
    at ClientRequest.emit (node:events:513:28)
    at TLSSocket.socketErrorListener (node:_http_client:502:9)
    at TLSSocket.emit (node:events:513:28)
    at emitErrorNT (node:internal/streams/destroy:151:8)
    at emitErrorCloseNT (node:internal/streams/destroy:116:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  port: 443,
  address: '2606:4700::6810:1223',
  syscall: 'connect',
  code: 'ETIMEDOUT',
  errno: -4039,
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: [ 'xhr', 'http' ],
    transformRequest: [ [Function: transformRequest] ],
    transformResponse: [ [Function: transformResponse] ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: [Function], Blob: [class Blob] },
    validateStatus: [Function: validateStatus],
    headers: AxiosHeaders {
      Accept: 'application/json, text/plain, */*',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3VzdGF2byIsImVtYWlsIjoiZ3VzdGF2b0BnbWFpbC5jb20iLCJpYXQiOjE2ODMwNjY4ODEsImV4cCI6MTY4NTY1ODg4MSwic3ViIjoiMmQxYjM4ZDEtM2QxMC00Njg3LTliMTctNDUxMWQ2ZThhMGZmIn0.1nmsNIxGuINE-F1U0OvWIGZJdPtDPTdYG7XJAIJs6NA',
      'User-Agent': 'axios/1.3.4',
      'Accept-Encoding': 'gzip, compress, deflate, br'
    },
    baseURL: 'http://localhost:3333',
    method: 'get',
    url: '/detalhesUserLogado',
    data: undefined
  },
  request: <ref *1> Writable {
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: true,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      afterWriteTickInfo: null,
      buffered: [],
      bufferedIndex: 0,
      allBuffers: true,
      allNoop: true,
      pendingcb: 0,
      constructed: true,
      prefinished: false,
      errorEmitted: false,
      emitClose: true,
      autoDestroy: true,
      errored: null,
      closed: false,
      closeEmitted: false,
      [Symbol(kOnFinished)]: []
    },
    _events: [Object: null prototype] {
      response: [Function: handleResponse],
      error: [Function: handleRequestError],
      socket: [Function: handleRequestSocket]
    },
    _eventsCount: 3,
    _maxListeners: undefined,
    _options: {
      maxRedirects: 21,
      maxBodyLength: Infinity,
      protocol: 'https:',
      path: 'http://localhost:3333/detalhesUserLogado',
      method: 'GET',
      headers: [Object: null prototype],
      agents: [Object],
      auth: undefined,
      beforeRedirect: [Function: dispatchBeforeRedirect],
      beforeRedirects: [Object],
      hostname: 'registry.yarnpkg.com',
      port: '',
      agent: undefined,
      nativeProtocols: [Object],
      pathname: 'http://localhost:3333/detalhesUserLogado'
    },
    _ended: true,
    _ending: true,
    _redirectCount: 0,
    _redirects: [],
    _requestBodyLength: 0,
    _requestBodyBuffers: [],
    _onNativeResponse: [Function (anonymous)],
    _currentRequest: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: 0,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: false,
      socket: [TLSSocket],
      _header: 'GET http://localhost:3333/detalhesUserLogado HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, */*\r\n' +
        'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3VzdGF2byIsImVtYWlsIjoiZ3VzdGF2b0BnbWFpbC5jb20iLCJpYXQiOjE2ODMwNjY4ODEsImV4cCI6MTY4NTY1ODg4MSwic3ViIjoiMmQxYjM4ZDEtM2QxMC00Njg3LTliMTctNDUxMWQ2ZThhMGZmIn0.1nmsNIxGuINE-F1U0OvWIGZJdPtDPTdYG7XJAIJs6NA\r\n' +
        'User-Agent: axios/1.3.4\r\n' +
        'Accept-Encoding: gzip, compress, deflate, br\r\n' +
        'host: localhost:3333\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: [Agent],
      socketPath: undefined,
      method: 'GET',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      joinDuplicateHeaders: undefined,
      path: 'http://localhost:3333/detalhesUserLogado',
      _ended: false,
      res: null,
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'registry.yarnpkg.com',
      protocol: 'https:',
      _redirectable: [Circular *1],
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype],
      [Symbol(errored)]: null,
      [Symbol(kUniqueHeaders)]: null
    },
    _currentUrl: 'http://localhost:3333/detalhesUserLogado',
    [Symbol(kCapture)]: false
  },
  cause: Error: connect ETIMEDOUT 2606:4700::6810:1223:443
      at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1494:16) {
    errno: -4039,
    code: 'ETIMEDOUT',
    syscall: 'connect',
    address: '2606:4700::6810:1223',
    port: 443
  }
}
