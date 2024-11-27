# goTom Api Doc (Swagger)

## How to update the gotom OpenAPI yaml files for goTom employees

the OpenAPI specification is split up into 3 files

- [campaign-api-doc.yaml](campaign-api-doc.yaml)
- [crm-sync-api-doc.yaml](crm-sync-api-doc.yaml)
- [graph-report-api-doc.yaml](graph-report-api-doc.yaml)

1. Update the one you are manipulating using swagger editor e.g. https://editor.swagger.io/
2. Go to https://dash.readme.com/ login, access dev.gotom.io
3. Click on API Reference (bottom left)
4. On "Your API Definitions" double check which one you want to upload the updated yaml file. Click edit
5. If you cannot see "Drag a file here or click to browse" you maybe, need to select "file" in the popup
6. then drag/upload the yaml file.
7. Reload the page to be sure you did not overwrite an existing endpoint with the wrong yaml file (happened twice to me)


Visit <a href="https://dev.gotom.io" target="_blank">dev.gotom.io</a> for the API documentation.
