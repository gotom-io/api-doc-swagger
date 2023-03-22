# General Info
## Introduction
goTom provides an API to programmatically access statistical data that is already available in goTom via Graph Report in the frontend.<br/>
In order to download a report via the API, a report must first be saved in the frontend (see [requirements](#requirementsanchor)).<br/>
Basically, two types of graph reports are distinguished. Either runtime-based or accounting-based data is provided. The runtime-based report can be much larger than the accounting-based report.<br/>
In the goTom frontend, in the "Haupt Filter" under "Zeitraum", the "Zeitspanne" can be set to "Laufzeit" or another option. If "Laufzeit" is used, the API will automatically be provided with a runtime based report.<br/>

## Order API user
In order to get an API user for goTom, it is necessary to place an order by sending an email to support@gotom.io. After a telephone consultation by our support, the access data will be forwarded to the customer via a suitable way.
The following data must be provided for an order:
- Instance name
- Contact person (first / last name, company, e-mail)
- Which endpoints are required (see endpoints)
- Possibility of secure transmission of sensitive access data (personal handover / mail / encrypted digital channels such as e-mail with GPG)

## <a id="requirementsanchor"></a>Requirements
1. an active goTom instance is required to access the API. The instance "Demo" may be used for testing purposes. 2.
2. an API user must be available. An order is possible by e-mail (see Order API User). **ATTENTION: The API user gets full access to all graph and custom reports.**
3. a report must be created in the frontend of goTom at https://exmaple.com/statistic/customreport or https://example.com/statistic/graph-report/show and then saved. The number of the report is in the URL and must be known. Example https://example.com/statistic/graph-report/saved/18 allows API communication to the report with ID "18".
4. the following technical requirements are needed for the communication with goTom:
   - [X] HTTPS communication via port 443 is required.
   - [X] current date must be able to be formatted as ISO 8601 date. Beispiel «2018-10-16T17:07:58+02:00».
   - [X] hash_hmac with algorithm "sha1" as well as "md5" are required for signing. In addition, the signature is encoded with base64.

## End Points
Your client instance has 2 environments which are available with different data and versions at the following URLs:
- TEST: [https://test-example.com](https://test-example.com)
- PROD: [https://example.com](https://example.com) <br/>

## Authentication

[Read the detailed explanation here](../../global/valid_auth_headers_creation.md)

## Up-to-dateness of the data
### Access times
If a daily dump of all data from goTom is to take place, a time between 06:00h and 08:00h is recommended (CET). At this time the dump is available completely prepared and can be obtained.
If a weekly dump of all data from goTom should be done, a time between 06:00h and 08:00h on Monday is recommended (CET).
Every Tuesday evening between 08:00h and 24:00h maintenance work can be done on goTom. During this time the API is not 100% available.
### Data volume
The data volume of a runtime based report which does not use date filters (complete dump of all data) can grow to several gigabytes.
### Multipart Download
goTom does not support any kind of multipart downloads at the moment.


## Contact
If you have any questions, please contact goTom support at support@gotom.io
