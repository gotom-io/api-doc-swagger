```php
<?php
  $savedReportId = 18; // replace with the saved report id you have
  $host = 'https://example.com'; // Replace with your gotom domain
  $reportType = 'graph-export'; // for custom report use 'custom-report-export'
  $uri = '/app-api/'.$reportType.'/download/' . $savedReportId;

  $provider = 'gotom_app_api';
  $user = 'your_user_you_request_via_contact';
  $secret = 'your_secret_key_you_request_via_contact';

  $args = getopt('', ['echo']);
  $echo = isset($args['echo']);
  $date = (new DateTime())->format('c');

  $method = 'GET';
  $content = '';
  $contentType = 'text/csv';
  $customHeaders = '';

  $digestParts = [
    strtoupper($method),
    md5($content),
    strtolower($contentType),
    $date,
    $customHeaders,
    $uri,
  ];
  $digest = hash_hmac('sha1', implode("\n", $digestParts), $secret, true);
  $signature = base64_encode($digest);

  $headers = [
  'Authorization: '.$provider.' '.$user.':'.$signature,
  'Content-Type: '.$contentType,
  'Date: '.$date,
  ];
  $options = [
    'http' => [
    'method' => $method,
    'header' => implode("\r\n", $headers),
    'content' => $content,
    'ignore_errors' => true,
    ],
  ];
  $context = stream_context_create($options);
  $bufferLength = 1024 ** 2 * 8; // 8 Mebibyte

  file_put_contents(__DIR__.'/response.csv', '');
  $handle = fopen($host.$uri, 'rb', null, $context);
  while (!feof($handle)) {
    $buffer = fread($handle, $bufferLength);
    file_put_contents(__DIR__.'/response.csv', $buffer, FILE_APPEND);
    if ($echo) {
      echo $buffer;
    }
  }

 ```

## [PHP reference](../general/php-reference.md)
