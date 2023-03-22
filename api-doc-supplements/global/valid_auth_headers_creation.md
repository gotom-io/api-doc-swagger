# Authentication
To access the API end points authentication is required. Without it, you will receive an error that contains, among other things, this text:

> Message: Authorization header required

To avoid this message and have proper authentication a particular hmac algorithm needs to be implemented at runtime before each request.
<br/> The algorithm needs to set 3 request headers:
1. `Date`
2. `Content-Type`
3. `Authorization`

## Request Headers Needed for Authentication
### <a id="dateheaderanchor"></a>Date
The `Date` header should be set to the datetime before the request was sent as ISO 8601 string. 
This date must be used as well in the [`Authorization` header explained here](#authorizationheaderanchor). An example value would be: `2023-03-09T14:11:32.044Z` 

Javascript example:

```js
(new Date()).toISOString()
```

### <a id="contenttypeheaderanchor"></a>Content-Type

This header indicates what data is sent with the request. If request is sent, and it isn't clear what to use for `Content-Type`, say, for a `GET` request, one can simply use:

`application/json`


This content-type must be used as well in the [`Authorization` header explained here](#authorizationheaderanchor).

### <a id="authorizationheaderanchor"></a>Authorization

This is the most complicated authentication request header. <br/> It contains multiple parts that are concatenated together [(more to that later on)](#putittogetheranchor).
<br/> The header contains these variables:

1. `provider` which is as well referenced by others as 'auth-scheme'. A simple string provided by gotom.
2. `user` it is a simple string provided by gotom
3. `signature` it is a specially encoded token

#### How to create the `signature` part?

To create the `signature` 6 parts are needed:

1. Request method: e.g. `GET` or `POST` etc
2. An md5 hash of the request body. Javascript example would be `CryptoJS.MD5(requestBody).toString()`
    - Request body: If the request body is empty or not string, empty string should be used for the md5 hash.
3. Content-Type: the same [string from the other header](#contenttypeheaderanchor).
4. Date: the same [string from the other header](#dateheaderanchor).
5. Custom headers: this must always be empty string.
6. The url path with query as string. So without domain, http scheme and port, e.g. only `/app-api/graph-export/download/41`
7. Secret: string provided from gotom.

These 7 parts now must be processed in 3 steps.
1. Concat the signature parts 1-6 together **(without the 7. part)**, maintaining the correct order, using a newline `\n` between the parts. Javascript example: <br/>
```js
  const digestParts = [requestMethod, hashedRequestBody, contentType, date, customHeaders, path];
  const step1ProcessSignature = digestParts.join('\n');
```
2. On the result from step 1, apply the Hmac SHA1 generation with the provided secret. Javascript example: <br/>
```js
const step2ProcessSignature = CryptoJS.HmacSHA1(step1ProcessSignature, secret);
```
3. Base64 encode the result from step 2. The result of this last step, is what is called here, the signature. Javascript example: <br/>
```js
const signature = step2ProcessSignature.toString(CryptoJS.enc.Base64);
```

#### <a id='putittogetheranchor'></a>Putting it together to form a valid Authorization header
The `Authorization` header value can now be assembled using the [3 variables described earlier](#authorizationheaderanchor). <br/>
`<foo>` is used to indicate a variable with the name `foo`:

`<provider> <user>:<signature>`

An example value would be:

`gotomprovider johndoe:Ax3lBxQyKTTXEdwUIEv4M/MSzmU=`

<!---
this is so anchor links work as expected
-->
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
